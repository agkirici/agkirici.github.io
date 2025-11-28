// © 2025 Arzu Kirici — All Rights Reserved
// @ts-nocheck
"use client";

import { PortableText as SanityPortableText } from "@portabletext/react";

const customComponents = {
  block: {
    // Normal paragraph
    normal: ({ children }: any) => <p className="mb-4 leading-relaxed text-neutral-300">{children}</p>,
    // Headings
    h1: ({ children }: any) => <h1 className="text-3xl font-bold mb-4 mt-8 text-neutral-50">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-semibold mb-4 mt-8 text-neutral-50">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-semibold mb-3 mt-6 text-neutral-50">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-lg font-semibold mb-3 mt-6 text-neutral-50">{children}</h4>,
    // Blockquote
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-neutral-700 pl-4 my-4 italic text-neutral-300">
        {children}
      </blockquote>
    ),
  },
  list: {
    // Bullet list
    bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
    // Numbered list
    number: ({ children }: any) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="text-neutral-300">{children}</li>,
    number: ({ children }: any) => <li className="text-neutral-300">{children}</li>,
  },
  marks: {
    // Bold/Strong
    strong: ({ children }: any) => <strong className="font-semibold text-neutral-100">{children}</strong>,
    // Italic
    em: ({ children }: any) => <em className="italic">{children}</em>,
    // Code
    code: ({ children }: any) => (
      <code className="bg-neutral-800 text-sky-300 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    // Links
    link: ({ value, children }: any) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      const rel = target === '_blank' ? 'noopener noreferrer' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={rel}
          className="text-sky-400 hover:text-sky-300 underline underline-offset-2"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    // Images within content
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-6">
          <img
            src={`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${value.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')}`}
            alt={value.alt || 'Blog image'}
            className="w-full h-auto rounded-lg"
          />
          {value.caption && (
            <p className="text-sm text-neutral-400 mt-2 text-center italic">{value.caption}</p>
          )}
        </div>
      );
    },
    // Code blocks
    code: ({ value }: any) => {
      const code = value?.code || '';
      const language = value?.language || 'text';
      const filename = value?.filename;
      
      return (
        <div className="my-6">
          {filename && (
            <div className="bg-neutral-800 px-4 py-2 rounded-t-lg border-b border-neutral-700">
              <span className="text-xs text-neutral-400 font-mono">{filename}</span>
            </div>
          )}
          <pre className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 overflow-x-auto">
            <code className={`language-${language} text-sm text-neutral-100 font-mono leading-relaxed`}>
              {code}
            </code>
          </pre>
        </div>
      );
    },
  },
};

export default function PortableText({ value }: { value: any }) {
  return <SanityPortableText value={value} components={customComponents} />;
}
