# Sanity Blog Troubleshooting Guide

## Current Configuration

✅ **Schema Name**: `blogPost` (in `sanity/schemas/blogPost.ts`)
✅ **GROQ Queries**: All use `_type == "blogPost"`
✅ **Schema Export**: Only `blogPost` is exported in `sanity/schemas/index.ts`
✅ **Old Schema**: `post.ts` has been deleted

## Verification Steps

### 1. Check Environment Variables

Make sure `.env.local` has:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### 2. Verify Schema is Deployed to Sanity

1. Go to your Sanity project dashboard: https://www.sanity.io/manage
2. Select your project
3. Go to **API** > **Schemas**
4. Verify that `blogPost` schema exists

If the schema is not there, deploy it:
```bash
npx sanity schema deploy
```

### 3. Check for Existing Documents

If you have existing blog posts created with the old `post` schema type, they won't show up because queries look for `blogPost`.

**Option A: Migrate existing posts** (if you have any)
- Go to Sanity Studio at `/studio`
- Use Vision Tool (GROQ query) to find old posts:
  ```
  *[_type == "post"]
  ```
- Manually recreate them as `blogPost` documents

**Option B: Query both types temporarily** (for migration)
Update `lib/sanity/queries.ts` temporarily to include both:
```groq
*[
  (_type == "blogPost" || _type == "post") &&
  defined(slug.current) &&
  !(_id in path("drafts.**"))
]
```

### 4. Verify Dataset Match

Make sure:
- **Studio** (`sanity.config.ts`) uses: `process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'`
- **Client** (`lib/sanity/client.ts`) uses: `process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'`
- Both should match your `.env.local` value

### 5. Test in Sanity Studio

1. Start dev server: `npm run dev`
2. Go to `http://localhost:3000/studio`
3. Check if "Blog Post" appears in the document types list
4. Create a test blog post:
   - Title: "Test Post"
   - Slug: (auto-generated)
   - Author: "Arzu Kirici"
   - Date: (select a date)
   - Content: (add some text)
5. **Publish** the document (not just save as draft)

### 6. Test Frontend

1. Go to `http://localhost:3000/blog`
2. The test post should appear
3. Click on it to verify the detail page works

### 7. Check Browser Console

Open browser DevTools and check for:
- Network errors when fetching from Sanity
- Console errors about missing fields
- CORS errors (shouldn't happen with Sanity)

## Common Issues

### Issue: "No blog posts yet" on frontend

**Possible causes:**
1. No published posts (only drafts exist)
2. Posts missing required fields (slug, date)
3. Wrong dataset being queried
4. Schema not deployed to Sanity

**Solution:**
- Check Sanity Studio for published posts
- Verify posts have all required fields
- Check `.env.local` dataset matches Studio dataset

### Issue: Schema not appearing in Studio

**Possible causes:**
1. Schema not deployed
2. Wrong project ID
3. Build cache issues

**Solution:**
```bash
# Clear Next.js cache
Remove-Item -Recurse -Force .next

# Restart dev server
npm run dev
```

### Issue: SchemaError in console

**Solution:**
- Already fixed by removing `code` type from schema
- Make sure you've restarted the dev server after the fix

## Quick Fix Commands

```bash
# Clear cache and rebuild
Remove-Item -Recurse -Force .next
npm run build

# Restart dev server
npm run dev

# Deploy schema to Sanity (if needed)
npx sanity schema deploy
```

