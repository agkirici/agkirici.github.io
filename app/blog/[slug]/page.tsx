import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getBlogPostBySlug, getBlogPostSlugs } from '@/lib/blog';
import BlogLayout from '@/components/BlogLayout';

export async function generateStaticParams() {
  const slugs = getBlogPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <BlogLayout
      title={post.title}
      author={post.author}
      date={post.date}
      content={post.content}
    >
      <MDXRemote source={post.content} />
    </BlogLayout>
  );
}

