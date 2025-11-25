import { getAllBlogPosts, BlogPost } from '@/lib/sanity/blog';
import BlogCard from '@/components/BlogCard';

export default async function BlogPage() {
  let posts: BlogPost[] = [];
  try {
    posts = await getAllBlogPosts();
  } catch (error) {
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
          <div className="space-y-6">
            {posts.map((post) => (
              <BlogCard
                key={post._id}
                title={post.title}
                excerpt={post.excerpt || ''}
                date={post.date}
                slug={post.slug}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
