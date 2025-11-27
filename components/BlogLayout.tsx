// © 2025 Arzu Kirici — All Rights Reserved

import LikeButton from './LikeButton';

interface BlogLayoutProps {
  title: string;
  author: string;
  date: string;
  readingTime: string;
  slug?: string;
  postId?: string;
  initialLikes?: number;
  children: React.ReactNode;
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  );
}

export default function BlogLayout({
  title,
  author,
  date,
  readingTime,
  slug,
  postId,
  initialLikes,
  children,
}: BlogLayoutProps) {
  const blogPostUrl = slug ? `https://www.arzukirici.com/blog/${slug}` : '';
  const linkedinShareUrl = slug
    ? `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(blogPostUrl)}`
    : '';

  return (
    <article className="mx-auto max-w-[700px] px-4 py-12 md:py-16">
      {/* Header Metadata */}
      <header className="mb-10 space-y-4 border-b border-neutral-800 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-50 sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-400">
          <span className="font-medium">{author}</span>
          <span className="text-neutral-600">•</span>
          <time dateTime={date}>
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span className="text-neutral-600">•</span>
          <span>{readingTime}</span>
          {postId && (
            <>
              <span className="text-neutral-600">•</span>
              <LikeButton postId={postId} initialLikes={initialLikes ?? 0} />
            </>
          )}
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-invert prose-neutral max-w-none prose-headings:font-semibold prose-headings:text-neutral-50 prose-p:text-neutral-300 prose-p:leading-relaxed prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-neutral-100 prose-code:text-sky-300 prose-code:bg-neutral-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-neutral-800">
        {children}
      </div>

      {/* Like Button and LinkedIn Share Icon */}
      {(postId || (slug && linkedinShareUrl)) && (
        <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center gap-4">
          {postId && (
            <LikeButton postId={postId} initialLikes={initialLikes ?? 0} />
          )}
          {slug && linkedinShareUrl && (
            <a
              href={linkedinShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800 hover:bg-sky-600 transition-colors"
            >
              <LinkedInIcon className="w-5 h-5 text-neutral-200" />
            </a>
          )}
        </div>
      )}
    </article>
  );
}

