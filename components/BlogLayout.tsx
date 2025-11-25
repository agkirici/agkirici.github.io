import { getReadingTime } from '@/lib/reading-time';

interface BlogLayoutProps {
  title: string;
  author: string;
  date: string;
  content: string;
  children: React.ReactNode;
}

export default function BlogLayout({
  title,
  author,
  date,
  content,
  children,
}: BlogLayoutProps) {
  const readingTime = getReadingTime(content);

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
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-invert prose-neutral max-w-none prose-headings:font-semibold prose-headings:text-neutral-50 prose-p:text-neutral-300 prose-p:leading-relaxed prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-neutral-100 prose-code:text-sky-300 prose-code:bg-neutral-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-neutral-800">
        {children}
      </div>
    </article>
  );
}

