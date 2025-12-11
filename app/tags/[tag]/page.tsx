// © 2025 Arzu Kirici — All Rights Reserved

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getBlogPostsByTag, getAllTags, type BlogPost } from '@/lib/sanity/blog';
import BlogCard from '@/components/BlogCard';

export async function generateStaticParams() {
  try {
    const tags = await getAllTags();
    return tags.map((tag: string) => ({
      tag: encodeURIComponent(tag),
    }));
  } catch (error) {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  
  return {
    title: `Posts tagged "${decodedTag}" | Arzu Kirici Blog`,
    description: `Browse all blog posts tagged with "${decodedTag}" on Arzu Kirici's blog. Discover articles about ${decodedTag} in bioinformatics, computational biology, and software development.`,
    metadataBase: new URL('https://arzukirici.com'),
    openGraph: {
      title: `Posts tagged "${decodedTag}" | Arzu Kirici Blog`,
      description: `Browse all blog posts tagged with "${decodedTag}" on Arzu Kirici's blog.`,
      url: `https://arzukirici.com/tags/${tag}`,
      siteName: 'Arzu Kirici',
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary',
      title: `Posts tagged "${decodedTag}" | Arzu Kirici Blog`,
      description: `Browse all blog posts tagged with "${decodedTag}" on Arzu Kirici's blog.`,
    },
    alternates: {
      canonical: `https://arzukirici.com/tags/${tag}`,
    },
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);

  let posts: BlogPost[] = [];
  try {
    posts = await getBlogPostsByTag(decodedTag);
  } catch (error) {
    posts = [];
  }

  if (posts.length === 0) {
    notFound();
  }

  return (
    <main className="min-h-screen px-4 py-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="space-y-2 mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-neutral-50">
            Posts tagged &quot;{decodedTag}&quot;
          </h1>
          <p className="text-gray-700 dark:text-neutral-300 text-sm md:text-base">
            {posts.length} {posts.length === 1 ? 'post' : 'posts'} found
          </p>
        </header>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </main>
  );
}

