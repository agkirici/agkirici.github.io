# Sanity CMS Setup Instructions

## 1. Create a Sanity Project

1. Go to [https://www.sanity.io](https://www.sanity.io) and sign up/login
2. Click "Create project"
3. Choose a project name (e.g., "Arzu Kirici Portfolio")
4. Choose a dataset name (use "production" as recommended)
5. Complete the setup

## 2. Get Your Project Credentials

1. Go to your Sanity project dashboard
2. Navigate to **Settings** > **API**
3. Copy your **Project ID**
4. Note your **Dataset name** (usually "production")

## 3. Set Up Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your Sanity credentials:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

3. (Optional) For preview mode, generate a read token:
   - Go to **Settings** > **API** > **Tokens**
   - Click "Add API token"
   - Name it "Read Token" and give it "Viewer" permissions
   - Copy the token and add it to `.env.local`:
     ```
     SANITY_API_READ_TOKEN=your-read-token
     ```

## 4. Deploy Schema to Sanity

Run this command to deploy your schema to Sanity:

```bash
npx sanity schema deploy
```

Or if you prefer, you can use the Sanity CLI:

```bash
npx sanity init --env
```

Then follow the prompts to link your project.

## 5. Access Sanity Studio

1. Start your Next.js development server:
   ```bash
   npm run dev
   ```

2. Navigate to [http://localhost:3000/studio](http://localhost:3000/studio)

3. You'll be prompted to authenticate with Sanity (Google/GitHub)

4. Once authenticated, you'll see the Sanity Studio interface

## 6. Create Your First Blog Post

1. In Sanity Studio, click **"Create Blog Post"**
2. Fill in the required fields:
   - **Title**: Your blog post title
   - **Slug**: Auto-generated from title (or customize)
   - **Author**: Defaults to "Arzu Kirici"
   - **Published Date**: Select a date
   - **Excerpt**: Optional summary
   - **Cover Image**: Optional cover image
   - **Content**: Write your blog post using the rich text editor

3. Click **"Publish"** when ready

4. Your post will be live at `/blog/[your-slug]`

## 7. Preview Mode (Optional)

To view draft posts before publishing:

1. Ensure `SANITY_API_READ_TOKEN` is set in `.env.local`
2. Draft posts will be visible when preview mode is enabled

## Troubleshooting

- **Studio not loading**: Check that `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` are set correctly
- **Posts not appearing**: Make sure you've published them in Sanity Studio (not just saved as drafts)
- **Authentication issues**: Clear browser cache and try logging in again

## Next Steps

- Customize the blog post schema in `sanity/schemas/blogPost.ts` if needed
- Add more content types (e.g., projects, pages) by creating new schemas
- Customize the Studio appearance in `sanity.config.ts`

