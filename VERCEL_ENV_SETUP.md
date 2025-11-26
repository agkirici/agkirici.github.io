# Vercel Environment Variables Setup

## Required Environment Variables

For the blog to work in production on Vercel, you need to set the following environment variables:

### In Vercel Dashboard:

1. Go to your project settings: https://vercel.com/[your-username]/[your-project]/settings/environment-variables

2. Add these variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### Optional (for preview mode):

```
SANITY_READ_TOKEN=your-read-token
```

## How to Find Your Sanity Project ID:

1. Go to https://www.sanity.io/manage
2. Select your project
3. The Project ID is shown in the project settings

## After Setting Variables:

1. **Redeploy** your site in Vercel (or push a new commit)
2. Environment variables are only available after a new deployment

## Verify:

After deployment, check:
- https://www.arzukirici.com/blog should show your blog posts
- Check Vercel function logs if posts still don't appear

## Troubleshooting:

If blog posts still don't appear:
1. Check Vercel deployment logs for errors
2. Verify environment variables are set correctly (no typos)
3. Ensure the dataset name matches (usually "production")
4. Check that blog posts are published (not drafts) in Sanity Studio

