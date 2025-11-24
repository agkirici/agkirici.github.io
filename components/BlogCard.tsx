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
      <article className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
          {excerpt}
        </p>
      </article>
    </Link>
  );
}

