// © 2025 Arzu Kirici — All Rights Reserved

import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getBlogPostSlugs } from '@/lib/sanity/blog';
import BlogLayout from '@/components/BlogLayout';
import PortableText from '@/components/PortableText';
import { urlFor } from '@/lib/sanity/image';
import Image from 'next/image';

export async function generateStaticParams() {
  try {
    const slugs = await getBlogPostSlugs();
    return slugs.map((slug: string) => ({
      slug,
    }));
  } catch (error) {
    return [];
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = await getBlogPostBySlug(slug);
  } catch (error) {
    post = null;
  }

  if (!post) {
    notFound();
  }

  const readingTimeMinutes = post.readingTime || 5;
  const readingTimeText = `${readingTimeMinutes} min read`;

  return (
    <BlogLayout
      title={post.title}
      author={post.author}
      date={post.date}
      readingTime={readingTimeText}
    >
      {post.coverImage && (
        <div className="mb-8 -mx-4 md:-mx-0">
          <Image
            src={urlFor(post.coverImage).width(1200).height(600).url()}
            alt={post.coverImage.alt || post.title}
            width={1200}
            height={600}
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>
      )}

      {post.content && <PortableText value={post.content} />}
    </BlogLayout>
  );
}
