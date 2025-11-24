import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  slug: string;
  featured?: boolean;
}

export default function ProjectCard({ title, description, tags, slug, featured }: ProjectCardProps) {
  return (
    <Link href={`/projects#${slug}`}>
      <div className={`bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow ${featured ? 'ring-2 ring-blue-500' : ''}`}>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
          {featured && <span className="ml-2 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Featured</span>}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

