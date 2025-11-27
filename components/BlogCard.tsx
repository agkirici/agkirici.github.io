// © 2025 Arzu Kirici — All Rights Reserved

import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity/image';
import LinkedInIcon from './LinkedInIcon';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  coverImage?: any;
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

