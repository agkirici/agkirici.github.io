// components/PortableText.tsx

"use client";



import {

  PortableText as PortableTextBase,

  type PortableTextComponents,

} from "@portabletext/react";

import Link from "next/link";



const components: PortableTextComponents = {

  types: {

    // Şimdilik sadece örnek; istersen kaldırabilirsin

    code: ({ value }) => (

      <pre className="rounded-md bg-neutral-900 text-neutral-100 p-3 text-sm overflow-x-auto">

        <code>{(value as any)?.code ?? ""}</code>

      </pre>

    ),

  },



  marks: {

    strong: ({ children }) => <strong>{children}</strong>,

    em: ({ children }) => <em>{children}</em>,

    code: ({ children }) => (

      <code className="px-1 py-0.5 rounded bg-neutral-800 text-sm">

        {children}

      </code>

    ),

    // value burada opsiyonel; bu yüzden props'u "props" diye alıp içinden çekiyoruz

    link: (props) => {

      const { children, value } = props as any;

      const href = value?.href || "#";

      const isExternal = href.startsWith("http");



      if (isExternal) {

        return (

          <a

            href={href}

            target="_blank"

            rel="noreferrer"

            className="underline underline-offset-4"

          >

            {children}

          </a>

        );

      }



      return (

        <Link href={href} className="underline underline-offset-4">

          {children}

        </Link>

      );

    },

  },



  block: {

    h1: ({ children }) => (

      <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>

    ),

    h2: ({ children }) => (

      <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>

    ),

    h3: ({ children }) => (

      <h3 className="text-xl font-semibold mt-4 mb-2">{children}</h3>

    ),

    normal: ({ children }) => (

      <p className="leading-relaxed mb-4">{children}</p>

    ),

  },



  list: {

    bullet: ({ children }) => (

      <ul className="list-disc pl-6 mb-4 space-y-1">{children}</ul>

    ),

    number: ({ children }) => (

      <ol className="list-decimal pl-6 mb-4 space-y-1">{children}</ol>

    ),

  },



  listItem: {

    bullet: ({ children }) => <li>{children}</li>,

    number: ({ children }) => <li>{children}</li>,

  },

};



export function PortableText({ value }: { value: any }) {

  return <PortableTextBase value={value} components={components} />;

}



export default PortableText;
