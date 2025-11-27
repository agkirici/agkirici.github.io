// © 2025 Arzu Kirici — All Rights Reserved

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  let post;
  try {
    post = await getBlogPostBySlug(slug);
  } catch (error) {
    post = null;
  }

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  // Get description from excerpt or content (first 150 chars)
  let description = post.excerpt || '';
  if (!description && post.content) {
    // Extract text from PortableText content
    const extractText = (content: any): string => {
      if (typeof content === 'string') return content;
      if (Array.isArray(content)) {
        return content
          .map((block) => {
            if (block._type === 'block' && block.children) {
              return block.children
                .map((child: any) => (child.text || ''))
                .join('');
            }
            return '';
          })
          .join(' ')
          .trim();
      }
      return '';
    };
    description = extractText(post.content).substring(0, 150);
  }
  if (description.length > 150) {
    description = description.substring(0, 150) + '...';
  }

  // Get OG image URL - ensure it's absolute
  let ogImage: string;
  if (post.coverImage) {
    const imageUrl = urlFor(post.coverImage).width(1200).height(630).url();
    // Ensure the URL is absolute (Sanity CDN URLs should already be absolute, but double-check)
    ogImage = imageUrl.startsWith('http') ? imageUrl : `https:${imageUrl}`;
  } else {
    // Fallback to default OG image
    ogImage = 'https://arzukirici.com/og-image.png';
  }

  const url = `https://www.arzukirici.com/blog/${slug}`;
  const fallbackDescription = description || 'Blog post by Arzu Kirici';

  return {
    title: `${post.title} | Arzu Kirici Blog`,
    description: fallbackDescription,
    metadataBase: new URL('https://arzukirici.com'),
    openGraph: {
      title: post.title,
      description: fallbackDescription,
      url,
      siteName: 'Arzu Kirici',
      type: 'article',
      locale: 'en_US',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.coverImage?.alt || post.title,
        },
      ],
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: fallbackDescription,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
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

  // Get description for JSON-LD
  let description = post.excerpt || '';
  if (!description && post.content) {
    const extractText = (content: any): string => {
      if (typeof content === 'string') return content;
      if (Array.isArray(content)) {
        return content
          .map((block) => {
            if (block._type === 'block' && block.children) {
              return block.children
                .map((child: any) => (child.text || ''))
                .join('');
            }
            return '';
          })
          .join(' ')
          .trim();
      }
      return '';
    };
    description = extractText(post.content).substring(0, 200);
  }

  // Get image URL for JSON-LD
  const imageUrl = post.coverImage
    ? urlFor(post.coverImage).width(1200).height(630).url()
    : 'https://arzukirici.com/og-image.png';
  const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `https:${imageUrl}`;

  // JSON-LD Article Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: description || 'Blog post by Arzu Kirici',
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author || 'Arzu Kirici',
    },
    publisher: {
      '@type': 'Person',
      name: 'Arzu Kirici',
    },
    image: absoluteImageUrl,
    url: `https://www.arzukirici.com/blog/${slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.arzukirici.com/blog/${slug}`,
    },
    ...(post.tags && post.tags.length > 0 && {
      keywords: post.tags.join(', '),
    }),
  };

  return (
    <>
      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <BlogLayout
        title={post.title}
        author={post.author}
        date={post.date}
        readingTime={readingTimeText}
        slug={slug}
        postId={post._id}
        initialLikes={post.likes ?? 0}
        tags={post.tags}
      >
      {post.coverImage && (
        <div className="mb-8 -mx-4 md:-mx-0">
          <Image
            src={urlFor(post.coverImage).width(1200).url()}
            alt={post.coverImage.alt || post.title}
            width={1200}
            height={0}
            className="w-full h-auto rounded-lg object-contain"
            priority
          />
        </div>
      )}

      {post.content && <PortableText value={post.content} />}
      </BlogLayout>
    </>
  );
}
