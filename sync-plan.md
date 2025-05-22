# Synchronization Plan

## Objectives
1. Synchronize code between three sources:
   - GitHub (`jamcam-me/deployvercel-web`)
   - Local clone (`D:\github\AI Agents\deployvercel-web`)
   - Vercel project (`bri-team/deployvercel-web`)

2. Ensure the live site at https://deployvercel-web.vercel.app/en reflects the latest code.

## Steps

1. **Inspect Vercel Git Integration**  
   In the Vercel dashboard for [`deployvercel-web`](https://vercel.com/bri-team/deployvercel-web/HNcdUUarohq3dwBjosLEetaT9QKw/source), confirm which GitHub repository and branch it’s linked to (likely `main`).

2. **Configure Local Remotes**  
   ```bash
   cd "D:/github/AI Agents/deployvercel-web"
   git remote add upstream https://github.com/bri-team/deployvercel-web.git
   git fetch upstream
   ```

3. **Merge Upstream into Local**  
   ```bash
   git checkout main
   git merge upstream/main
   # Resolve any merge conflicts
   ```

4. **Test Locally**  
   ```bash
   npm install
   npm run build
   npm run dev
   ```
   Ensure the site runs without errors.

5. **Push to Your GitHub**  
   ```bash
   git push origin main
   ```

6. **Update Vercel Integration (if needed)**  
   - In Vercel Settings > Git, disconnect the current repo (if it’s not `jamcam-me/deployvercel-web`)  
   - Reconnect to `jamcam-me/deployvercel-web` on branch `main`

7. **Trigger a New Deployment**  
   - Either push a new commit or click “Redeploy” in the Vercel UI.

8. **Verify Live Site**  
   Visit https://deployvercel-web.vercel.app/en and confirm content is up-to-date.

## Diagram
```mermaid
graph LR
  subgraph GitHub
    B[bri-team/deployvercel-web] --> U(Upstream)
    O[jamcam-me/deployvercel-web] --> R(Origin)
  end
  C[Local repo] -->|fetch U| U
  C -->|merge| C
  C -->|push to R| O
  O -->|push triggers| V[Vercel project]
  V -->|deploys| S[https://deployvercel-web.vercel.app/en]