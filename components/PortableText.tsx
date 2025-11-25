import { PortableText as SanityPortableText } from '@portabletext/react';
import { urlFor } from '@/lib/sanity/image';
import Image from 'next/image';

const components = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      const imageUrl = urlFor(value).width(800).height(600).url();
      return (
        <div className="my-8">
          <Image
            src={imageUrl}
            alt={value.alt || 'Blog post image'}
            width={800}
            height={600}
            className="rounded-lg"
          />
          {value.alt && (
            <p className="mt-2 text-sm text-neutral-400 text-center">{value.alt}</p>
          )}
        </div>
      );
    },
    code: ({ value }: { value: any }) => {
      return (
        <pre className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 overflow-x-auto my-6">
          <code className={`language-${value.language || 'text'}`}>{value.code}</code>
        </pre>
      );
    },
  },
  block: {
    h1: ({ children }: { children: React.ReactNode }) => (
      <h1 className="text-4xl font-bold text-neutral-50 mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="text-3xl font-semibold text-neutral-50 mt-6 mb-3">{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className="text-2xl font-semibold text-neutral-50 mt-5 mb-2">{children}</h3>
    ),
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="text-neutral-300 leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote className="border-l-4 border-sky-500 pl-4 italic text-neutral-300 my-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <ul className="list-disc list-inside space-y-2 text-neutral-300 mb-4 ml-4">
        {children}
      </ul>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <ol className="list-decimal list-inside space-y-2 text-neutral-300 mb-4 ml-4">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-semibold text-neutral-100">{children}</strong>
    ),
    em: ({ children }: { children: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    code: ({ children }: { children: React.ReactNode }) => (
      <code className="bg-neutral-800 text-sky-300 px-1.5 py-0.5 rounded text-sm">
        {children}
      </code>
    ),
    link: ({ value, children }: { value: any; children: React.ReactNode }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-sky-400 hover:text-sky-300 underline underline-offset-2"
        >
          {children}
        </a>
      );
    },
  },
};

interface PortableTextProps {
  value: any;
}

export default function PortableText({ value }: PortableTextProps) {
  return <SanityPortableText value={value} components={components} />;
}

