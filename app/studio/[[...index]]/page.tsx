'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';

// Dynamically import NextStudio to avoid SSR issues
const NextStudio = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center min-h-screen bg-neutral-950 text-neutral-50">
        <p>Loading Sanity Studio...</p>
      </div>
    ),
  }
);

// Import config separately
import config from '@/sanity.config';

export default function StudioPage() {
  useEffect(() => {
    // Suppress React 19 compatibility warnings from Sanity Studio
    // This is a known issue with Sanity Studio and React 19
    const originalError = console.error;
    const originalWarn = console.warn;
    
    console.error = (...args: any[]) => {
      const message = args[0];
      if (
        typeof message === 'string' &&
        (message.includes('Cannot update a component') ||
         message.includes('PortableTextInput') ||
         message.includes('FullscreenPTEProvider') ||
         message.includes("does not recognize the 'disableTransition' prop") ||
         message.includes('disableTransition') ||
         message.includes('React does not recognize'))
      ) {
        return;
      }
      originalError.apply(console, args);
    };

    console.warn = (...args: any[]) => {
      const message = args[0];
      if (
        typeof message === 'string' &&
        (message.includes('ReactDOM.render is no longer supported') ||
         message.includes('disableTransition') ||
         message.includes("does not recognize the 'disableTransition' prop"))
      ) {
        return;
      }
      originalWarn.apply(console, args);
    };

    return () => {
      console.error = originalError;
      console.warn = originalWarn;
    };
  }, []);

  return <NextStudio config={config} />;
}

