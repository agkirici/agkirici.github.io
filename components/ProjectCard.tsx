// © 2025 Arzu Kirici — All Rights Reserved

"use client";

import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  slug: string;
  featured?: boolean;
  banner?: string;
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

export default function ProjectCard({ title, description, tags, slug, featured, banner, link, github }: ProjectCardProps) {
  // Compute the LinkedIn share URL - use the project's website URL
  const projectWebsiteUrl = `https://www.arzukirici.com/projects/${slug}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(projectWebsiteUrl)}`;

  return (
    <div className="max-w-[380px] mx-auto rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-sm transition duration-200 hover:border-sky-500 hover:shadow-sky-500/20">
      <Link href={`/projects/${slug}`} className="block">
        {/* Banner Image */}
        {banner && (
          <div className="relative h-[230px] w-full overflow-hidden">
            <Image
              src={banner}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start gap-2 mb-2">
            <h2 className="text-lg font-semibold text-neutral-50 flex-1">
              {title}
            </h2>
            {featured && (
              <span className="rounded-full bg-sky-600/40 px-2 py-0.5 text-[10px] uppercase tracking-wide text-sky-200 whitespace-nowrap">
                Featured
              </span>
            )}
          </div>

          <p className="text-sm text-neutral-300 line-clamp-3 leading-relaxed mb-3">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-neutral-800 px-2.5 py-0.5 text-xs text-neutral-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* Action buttons */}
      <div className="px-4 pb-4 border-t border-neutral-800 pt-3 flex flex-wrap gap-2">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-neutral-700 bg-neutral-800/50 px-3 py-1.5 text-xs font-medium text-neutral-200 hover:bg-neutral-800 hover:border-neutral-600 transition-colors"
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
            className="inline-flex items-center gap-1.5 rounded-md border border-neutral-700 bg-neutral-800/50 px-3 py-1.5 text-xs font-medium text-neutral-200 hover:bg-neutral-800 hover:border-neutral-600 transition-colors"
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
          className="inline-flex items-center gap-1 rounded-md border border-[#0a66c2] bg-[#0a66c2]/10 px-3 py-1.5 text-xs font-medium text-[#0a66c2] hover:bg-[#0a66c2]/20 hover:border-[#0a66c2] transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <LinkedInIcon className="h-3 w-3" />
          <span>Share</span>
        </a>
      </div>
    </div>
  );
}
