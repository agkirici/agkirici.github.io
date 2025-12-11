// © 2025 Arzu Kirici — All Rights Reserved

import Link from 'next/link';
import LikeButton from './LikeButton';
import LinkedInIcon from './LinkedInIcon';

interface BlogLayoutProps {
  title: string;
  author: string;
  date: string;
  readingTime: string;
  slug?: string;
  postId?: string;
  initialLikes?: number;
  tags?: string[];
  children: React.ReactNode;
}

export default function BlogLayout({
  title,
  author,
  date,
  readingTime,
  slug,
  postId,
  initialLikes,
  tags,
  children,
}: BlogLayoutProps) {
  const blogPostUrl = slug ? `https://www.arzukirici.com/blog/${slug}` : '';
  const linkedinShareUrl = slug
    ? `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(blogPostUrl)}`
    : '';

  return (
    <article className="mx-auto max-w-[700px] px-4 py-12 md:py-16">
      {/* Header Metadata */}
      <header className="mb-10 space-y-4 border-b border-gray-200 dark:border-neutral-800 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-neutral-50 sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-neutral-400">
          <span className="font-medium">{author}</span>
          <span className="text-gray-500 dark:text-neutral-600">•</span>
          <time dateTime={date}>
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span className="text-gray-500 dark:text-neutral-600">•</span>
          <span>{readingTime}</span>
          {postId && (
            <>
              <span className="text-gray-500 dark:text-neutral-600">•</span>
              <LikeButton postId={postId} initialLikes={initialLikes ?? 0} />
            </>
          )}
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:text-gray-900 dark:prose-headings:text-neutral-50 prose-p:text-gray-700 dark:prose-p:text-neutral-300 prose-p:leading-relaxed prose-a:text-sky-600 dark:prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 dark:prose-strong:text-neutral-100 prose-code:text-sky-600 dark:prose-code:text-sky-300 prose-code:bg-gray-100 dark:prose-code:bg-neutral-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-50 dark:prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-neutral-800">
        {children}
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-wrap gap-2 items-center">
          <span className="text-xs text-gray-600 dark:text-neutral-400 mr-1">Tags:</span>
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${encodeURIComponent(tag)}`}
              className="inline-flex items-center rounded-full border border-gray-300 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800/50 px-2 py-1 text-xs font-medium text-gray-700 dark:text-neutral-200 hover:bg-sky-600 hover:text-white dark:hover:text-white hover:border-sky-600 transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      )}

      {/* Like Button and LinkedIn Share Button */}
      {(postId || (slug && linkedinShareUrl)) && (
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-neutral-800 flex items-center gap-4">
          {postId && (
            <LikeButton postId={postId} initialLikes={initialLikes ?? 0} />
          )}
          {slug && linkedinShareUrl && (
            <a
              href={linkedinShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              className="inline-flex items-center gap-1 rounded-md border border-[#0a66c2] bg-[#0a66c2]/10 px-2 py-0.5 text-xs font-medium text-[#0a66c2] hover:bg-[#0a66c2]/20 hover:border-[#0a66c2] transition-colors"
            >
              <LinkedInIcon className="h-3 w-3" />
              <span>Share</span>
            </a>
          )}
        </div>
      )}
    </article>
  );
}

