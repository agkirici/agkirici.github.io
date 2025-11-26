// © 2025 Arzu Kirici — All Rights Reserved

import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity/image';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  coverImage?: any;
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

export default function BlogCard({ title, excerpt, date, slug, coverImage }: BlogCardProps) {
  const blogPostUrl = `https://www.arzukirici.com/blog/${slug}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(blogPostUrl)}`;

  return (
    <div className="max-w-[380px] mx-auto rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-sm transition duration-200 hover:border-sky-500 hover:shadow-sky-500/20">
      <Link href={`/blog/${slug}`} className="block">
        {coverImage && (
          <div className="h-48 w-full overflow-hidden">
            <Image
              src={urlFor(coverImage).width(400).height(300).url()}
              alt={coverImage.alt || title}
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-neutral-50 mb-2">
            {title}
          </h3>
          <p className="text-sm text-neutral-400 mb-2">
            {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          {excerpt && (
            <p className="text-sm text-neutral-300 line-clamp-3 leading-relaxed">
              {excerpt}
            </p>
          )}
        </div>
      </Link>
      
      {/* LinkedIn Share Button */}
      <div className="px-4 pb-4 border-t border-neutral-800 pt-3">
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
      </div>
    </div>
  );
}

