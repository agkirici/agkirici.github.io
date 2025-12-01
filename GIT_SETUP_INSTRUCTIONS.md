# Git Setup Instructions for Vercel Deployment

## Problem Identified
Your Next.js project files exist locally but are NOT in a git repository. Vercel deploys from GitHub, so the new `gene-expression-atlas` project won't appear until files are committed and pushed.

## Solution Steps

### Option 1: Using VS Code (Recommended)

1. Open VS Code
2. Open folder: `C:\Users\arzuk\OneDrive\Masaüstü\agkirici.github.io`
3. Open Source Control panel (Ctrl+Shift+G)
4. If you see "Initialize Repository" button, click it
5. If you see "Publish to GitHub", click it and follow the prompts
6. If repository already exists, you'll see changed files - stage them and commit

### Option 2: Using Git Commands

Open PowerShell or Git Bash in the project folder and run:

```bash
# Navigate to project (adjust path if needed)
cd "C:\Users\arzuk\OneDrive\Masaüstü\agkirici.github.io"

# Check if git is initialized
git status

# If not initialized, initialize git
git init

# Add remote (replace with your actual GitHub repo URL)
git remote add origin https://github.com/agkirici/agkirici.github.io.git

# Add all files
git add .

# Commit
git commit -m "Add gene-expression-atlas project with GitHub link"

# Push to main branch
git push -u origin main
```

### Option 3: Check Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Find your `agkirici.github.io` project
3. Check "Settings" > "Git" to see which repository and branch it's connected to
4. Make sure you're pushing to the correct branch (usually `main` or `master`)

## Files That Need to Be Committed

- ✅ `data/projects.ts` (updated with gene-expression-atlas)
- ✅ `app/projects/gene-expression-atlas/page.tsx` (new file)
- ✅ `public/gene-expression-atlas.png` (cover image)

## After Pushing

1. Vercel will automatically detect the push and start a new deployment
2. Check Vercel dashboard for build logs
3. Wait for deployment to complete (usually 1-2 minutes)
4. Visit your site - the project should now appear

## Troubleshooting

If Vercel still shows old version:
- Check Vercel dashboard > Deployments to see if new deployment was triggered
- Verify the branch name matches what Vercel is watching
- Check build logs for any errors
- Try manually triggering a redeploy in Vercel dashboard

