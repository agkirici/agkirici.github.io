import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  slug: string;
  featured?: boolean;
  link?: string;
  github?: string;
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6 1.12 6 0 4.88 0 3.5 0 2.12 1.12 1 2.5 1 3.9 1 4.98 2.12 4.98 3.5zM.3 8.25h4.4V23H.3V8.25zM8.34 8.25h4.22v2.01h.06c.59-1.12 2.03-2.3 4.18-2.3 4.47 0 5.29 2.94 5.29 6.76V23h-4.4v-7.46c0-1.78-.03-4.07-2.48-4.07-2.48 0-2.86 1.94-2.86 3.95V23H8.34V8.25z"
      />
    </svg>
  );
}

export default function ProjectCard({ title, description, tags, slug, featured, link, github }: ProjectCardProps) {
  // Compute the LinkedIn share URL
  const targetUrl = link || github || "https://agkirici-github-io.vercel.app/projects";
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(targetUrl)}`;

  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 shadow-sm transition duration-200 hover:border-sky-500 hover:shadow-sky-500/20">
      <Link href={`/projects/${slug}`} className="block">
        <article className="space-y-3">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold text-neutral-50">
              {title}
            </h2>
            {featured && (
              <span className="rounded-full bg-sky-600/40 px-2 py-0.5 text-[11px] uppercase tracking-wide text-sky-200">
                Featured
              </span>
            )}
          </div>

          <p className="text-neutral-300 text-sm leading-relaxed">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-neutral-800 px-3 py-1 text-xs text-neutral-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      </Link>

      {/* Action buttons */}
      <div className="mt-4 flex flex-wrap gap-2 pt-4 border-t border-neutral-800">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-md border border-neutral-700 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:bg-neutral-800"
            onClick={(e) => e.stopPropagation()}
          >
            <span>DevPost</span>
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-md border border-neutral-700 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:bg-neutral-800"
            onClick={(e) => e.stopPropagation()}
          >
            <span>GitHub</span>
          </a>
        )}
        <a
          href={linkedinShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="inline-flex items-center gap-1 rounded-md border border-[#0a66c2] px-3 py-1.5 text-xs font-medium text-[#0a66c2] hover:bg-[#0a66c2]/10"
          onClick={(e) => e.stopPropagation()}
        >
          <LinkedInIcon className="h-4 w-4" />
          <span>Share on LinkedIn</span>
        </a>
      </div>
    </div>
  );
}
