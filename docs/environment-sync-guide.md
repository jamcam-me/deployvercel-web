# Environment Synchronization Guide

## Overview

This guide ensures all development environments (local, Git, and Vercel) stay perfectly synchronized to prevent deployment discrepancies.

## Environment Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Local Dev     │    │   Git Remote    │    │   Vercel Prod   │
│                 │    │                 │    │                 │
│ main branch     │◄──►│ origin/main     │◄──►│ Auto Deploy     │
│ npm run dev     │    │                 │    │ from main       │
│ npm run start   │    │ vercel-deploy   │◄──►│ Backup Deploy  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## Key Commands

### 🔄 Sync All Environments
```bash
npm run sync:environments
```
This script:
1. Switches to main branch
2. Pulls latest changes
3. Merges main → vercel-deploy
4. Pushes vercel-deploy
5. Rebuilds local application
6. Verifies sync status

### 🚀 Deploy with Sync
```bash
npm run deploy:sync
```
Runs environment sync + build in one command.

## Manual Sync Process

If automated scripts fail, follow these steps:

### 1. Ensure Clean Working Directory
```bash
git status
# Should show "working tree clean"
```

### 2. Update Main Branch
```bash
git checkout main
git pull origin main
```

### 3. Sync Vercel Deploy Branch
```bash
git checkout vercel-deploy
git merge main
git push origin vercel-deploy
```

### 4. Return to Main
```bash
git checkout main
```

### 5. Rebuild Local
```bash
npm run build
```

## Environment Verification

### Check Branch Status
```bash
git log --oneline main -3
git log --oneline vercel-deploy -3
```
Both should show the same commits.

### Check Deployment Status
- **Local**: http://localhost:3000/en
- **Production**: https://bri-website-launch-mzniuwpxy-bri-team.vercel.app/en

## Automated Workflows

### GitHub Actions
- **Trigger**: Push to `main` or `vercel-deploy`
- **Actions**: Lint → Build → Sync → Deploy
- **File**: `.github/workflows/deploy.yml`

### Vercel Configuration
- **File**: `vercel.json`
- **Branches**: Both `main` and `vercel-deploy` can trigger deployments
- **Build**: Standard Next.js build process

## Troubleshooting

### Issue: Environments Out of Sync
**Symptoms**: Local and production show different content
**Solution**: Run `npm run sync:environments`

### Issue: Deployment Fails
**Symptoms**: GitHub Actions or Vercel build fails
**Solution**: 
1. Check build locally: `npm run build`
2. Check for TypeScript errors: `npm run lint`
3. Verify all dependencies: `npm ci`

### Issue: Git Merge Conflicts
**Symptoms**: Merge conflicts during sync
**Solution**:
1. Manually resolve conflicts
2. Commit resolved changes
3. Re-run sync script

## Development Workflow

### Daily Development
1. Work on `main` branch
2. Commit and push changes
3. Run `npm run sync:environments` before important demos
4. Verify both local and production match

### Pre-Release Checklist
- [ ] All changes committed and pushed
- [ ] Environments synchronized
- [ ] Local build succeeds
- [ ] Production deployment verified
- [ ] All tests passing

## Best Practices

### ✅ Do
- Always sync before important presentations
- Test locally with `npm run build + npm run start` (production mode)
- Keep commits small and focused
- Use the sync scripts rather than manual Git commands

### ❌ Don't
- Push directly to `vercel-deploy` branch
- Skip the sync process before deployments
- Ignore build warnings or TypeScript errors
- Work on multiple features simultaneously without committing

## Support

If you encounter issues not covered here:
1. Check the sync script logs
2. Verify GitHub Actions status
3. Check Vercel deployment logs
4. Review this guide for missed steps

---

**Last Updated**: 2025-06-01
**Maintainer**: Development Team