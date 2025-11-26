// © 2025 Arzu Kirici — All Rights Reserved

import { getAllBlogPosts, BlogPost } from '@/lib/sanity/blog';
import BlogCard from '@/components/BlogCard';

export default async function BlogPage() {
  let posts: BlogPost[] = [];
  try {
    // Check if environment variables are available
    const hasProjectId = !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
    const hasDataset = !!process.env.NEXT_PUBLIC_SANITY_DATASET;
    
    if (!hasProjectId || !hasDataset) {
      console.error('Missing Sanity environment variables:', {
        hasProjectId,
        hasDataset,
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ? 'set' : 'missing',
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ? 'set' : 'missing',
      });
    }
    
    posts = await getAllBlogPosts();
    console.log('Fetched blog posts:', posts.length);
  } catch (error) {
    // Log error in production for debugging
    console.error('Error fetching blog posts:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    // If Sanity is not configured, show empty state
    posts = [];
  }

  return (
    <main className="min-h-screen px-4 py-12 md:py-16">
      <div className="mx-auto max-w-4xl space-y-10">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-neutral-50">
            Blog
          </h1>
          <p className="text-neutral-300 text-sm md:text-base">
            Research notes, technical insights, and reflections on bioinformatics software development.
          </p>
        </header>

        {posts.length === 0 ? (
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-8 text-center">
            <p className="text-neutral-400">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <BlogCard
                key={post._id}
                title={post.title}
                excerpt={post.excerpt || ''}
                date={post.date}
                slug={post.slug}
                coverImage={post.coverImage}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
