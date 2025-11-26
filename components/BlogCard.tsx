// © 2025 Arzu Kirici — All Rights Reserved

import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export default function BlogCard({ title, excerpt, date, slug }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 shadow-sm transition duration-200 hover:border-sky-500 hover:shadow-sky-500/20">
        <h3 className="text-xl font-semibold text-neutral-50 mb-2">
          {title}
        </h3>
        <p className="text-sm text-neutral-400 mb-3">
          {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        {excerpt && (
          <p className="text-neutral-300 line-clamp-2 leading-relaxed">
            {excerpt}
          </p>
        )}
      </article>
    </Link>
  );
}

