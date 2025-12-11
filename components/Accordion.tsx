// © 2025 Arzu Kirici — All Rights Reserved

"use client";

import { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 dark:border-neutral-800 rounded-lg bg-gray-50 dark:bg-neutral-900/60 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-100 dark:hover:bg-neutral-800/50 transition-colors"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title}`}
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-neutral-100">{title}</h3>
        <span className="text-2xl font-light text-gray-600 dark:text-neutral-400 transition-all duration-300 ease-in-out">
          {isOpen ? '–' : '+'}
        </span>
      </button>
      <div
        id={`accordion-content-${title}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 pt-0 space-y-3 text-gray-700 dark:text-neutral-300">
          {children}
        </div>
      </div>
    </div>
  );
}

