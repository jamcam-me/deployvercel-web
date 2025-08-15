#!/usr/bin/env node

/**
 * Environment Synchronization Script
 * Ensures all environments (local, git, vercel) stay in sync
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const COLORS = {
  GREEN: '\x1b[32m',
  RED: '\x1b[31m',
  YELLOW: '\x1b[33m',
  BLUE: '\x1b[34m',
  RESET: '\x1b[0m'
};

function log(message, color = COLORS.RESET) {
  console.log(`${color}${message}${COLORS.RESET}`);
}

function execCommand(command, description) {
  try {
    log(`\n${COLORS.BLUE}→ ${description}${COLORS.RESET}`);
    const result = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    log(`${COLORS.GREEN}✓ ${description} completed${COLORS.RESET}`);
    return result.trim();
  } catch (error) {
    log(`${COLORS.RED}✗ ${description} failed: ${error.message}${COLORS.RESET}`);
    throw error;
  }
}

function getCurrentBranch() {
  return execCommand('git branch --show-current', 'Getting current branch');
}

function getCommitHash(branch = 'HEAD') {
  return execCommand(`git rev-parse ${branch}`, `Getting commit hash for ${branch}`);
}

function syncEnvironments() {
  log(`${COLORS.YELLOW}🔄 Starting Environment Synchronization${COLORS.RESET}`);
  
  try {
    // 1. Check current status
    const currentBranch = getCurrentBranch();
    const mainCommit = getCommitHash('main');
    
    log(`\n${COLORS.BLUE}Current Status:${COLORS.RESET}`);
    log(`- Current branch: ${currentBranch}`);
    log(`- Main branch commit: ${mainCommit.substring(0, 8)}`);
    
    // 2. Ensure we're on main branch
    if (currentBranch !== 'main') {
      execCommand('git checkout main', 'Switching to main branch');
    }
    
    // 3. Pull latest changes from origin
    execCommand('git pull origin main', 'Pulling latest changes from origin');
    
    // 4. Update vercel-deploy branch
    execCommand('git checkout vercel-deploy', 'Switching to vercel-deploy branch');
    execCommand('git merge main', 'Merging main into vercel-deploy');
    execCommand('git push origin vercel-deploy', 'Pushing vercel-deploy branch');
    
    // 5. Return to main branch
    execCommand('git checkout main', 'Returning to main branch');
    
    // 6. Rebuild local application
    log(`\n${COLORS.BLUE}→ Rebuilding local application${COLORS.RESET}`);
    execCommand('npm run build', 'Building application');
    
    // 7. Verify all environments are in sync
    const finalMainCommit = getCommitHash('main');
    const vercelDeployCommit = getCommitHash('vercel-deploy');
    
    log(`\n${COLORS.GREEN}✅ Environment Sync Complete!${COLORS.RESET}`);
    log(`\n${COLORS.BLUE}Final Status:${COLORS.RESET}`);
    log(`- Main branch: ${finalMainCommit.substring(0, 8)}`);
    log(`- Vercel-deploy branch: ${vercelDeployCommit.substring(0, 8)}`);
    log(`- Sync status: ${finalMainCommit === vercelDeployCommit ? '✅ SYNCED' : '❌ OUT OF SYNC'}`);
    
    if (finalMainCommit === vercelDeployCommit) {
      log(`\n${COLORS.GREEN}🚀 All environments are now synchronized!${COLORS.RESET}`);
      log(`${COLORS.YELLOW}Vercel deployment will update automatically.${COLORS.RESET}`);
    } else {
      log(`\n${COLORS.RED}⚠️  Environments are still out of sync. Manual intervention required.${COLORS.RESET}`);
    }
    
  } catch (error) {
    log(`\n${COLORS.RED}❌ Sync failed: ${error.message}${COLORS.RESET}`);
    process.exit(1);
  }
}

// Run the sync
syncEnvironments();