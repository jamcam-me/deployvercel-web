# Bri Website Implementation Plan

This document outlines the steps to synchronize the local **bri-website** repository, develop on a staging branch, and publish to GitHub Pages.

## Diagram

```mermaid
flowchart TD
    A[Clone or Pull main branch] --> B[Create staging branch from main]
    B --> C[Install dependencies (npm install)]
    C --> D[Run dev server (npm run dev)]
    D --> E[Implement changes on staging]
    E --> F[Test i18n & contact pages]
    F --> G[Commit & push staging branch]
    G --> H[Merge staging into main]
    H --> I[Push main to remote]
    I --> J[Enable GitHub Pages (deploy from main)]
    J --> K[Verify live site URL]
```

## Steps

1. **Sync main branch**  
   ```bash
   cd d:/github/bri-website
   git fetch origin
   git checkout main
   git pull origin main
   ```
2. **Create staging branch**  
   ```bash
   git checkout -b staging
   ```
3. **Install dependencies**  
   ```bash
   npm install
   ```
4. **Run development server**  
   ```bash
   npm run dev
   ```
   - The site should be available at http://localhost:3000 (or configured port).
5. **Implement changes**  
   - Update page content under `src/app/[locale]`  
   - Modify layout in `src/app/layout.tsx`  
   - Update utilities in `src/lib` as needed
6. **Test functionality**  
   - Confirm multi-language pages (`[locale]/page.tsx`) render correctly  
   - Validate contact page at `[locale]/contact/page.tsx`
7. **Commit & push staging branch**  
   ```bash
   git add .
   git commit -m "Implement initial changes on staging"
   git push -u origin staging
   ```
8. **Merge staging into main**  
   ```bash
   git checkout main
   git merge staging
   ```
9. **Push main branch**  
   ```bash
   git push origin main
   ```
10. **Enable GitHub Pages**  
    - In GitHub repository settings → Pages  
    - Set Source to **main** branch and root (or `/docs` if used)  
11. **Verify live site**  
    - Visit `https://<username>.github.io/bri-website` to confirm deployment  
    - Fix any issues and repeat from step 5 as needed

---

This plan ensures a clean staging workflow and reliable publishing to GitHub Pages.

---

## Site Structure
Overview of all pages and key components used on each.

## Home
- Header
- Hero
- ExecutiveOverview
- Footer

## Services
- Header
- Hero
- ServicesList
- ServiceCard
- Footer

## Resources
- Header
- Footer

## About Us
- Header
- Hero
- AboutContentOverview
- Footer

## Contact
- Header
- Footer

## Frankfurt Hub
- Header
- Footer