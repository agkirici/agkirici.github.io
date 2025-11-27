// © 2025 Arzu Kirici — All Rights Reserved

import { groq } from 'next-sanity';

export const blogPostsQuery = groq`
  *[
    _type == "blogPost" &&
    defined(slug.current) &&
    !(_id in path("drafts.**"))
  ]
  | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    author,
    date,
    excerpt,
    coverImage,
    likes,
    tags,
    "readingTime": round(length(pt::text(content)) / 5 / 180 )
  }
`;

export const blogPostBySlugQuery = groq`
  *[
    _type == "blogPost" &&
    slug.current == $slug &&
    !(_id in path("drafts.**"))
  ][0] {
    _id,
    title,
    "slug": slug.current,
    author,
    date,
    excerpt,
    coverImage,
    content,
    likes,
    tags,
    "readingTime": round(length(pt::text(content)) / 5 / 180 )
  }
`;

export const blogPostSlugsQuery = groq`
  *[
    _type == "blogPost" &&
    defined(slug.current) &&
    !(_id in path("drafts.**"))
  ] {
    "slug": slug.current
  }
`;

export const blogPostsByTagQuery = groq`
  *[
    _type == "blogPost" &&
    defined(slug.current) &&
    !(_id in path("drafts.**")) &&
    defined(tags) &&
    $tag in tags
  ]
  | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    author,
    date,
    excerpt,
    coverImage,
    likes,
    tags,
    "readingTime": round(length(pt::text(content)) / 5 / 180 )
  }
`;

export const allTagsQuery = groq`
  *[
    _type == "blogPost" &&
    defined(slug.current) &&
    !(_id in path("drafts.**")) &&
    defined(tags) &&
    count(tags) > 0
  ].tags[]
  | unique
  | order(@ asc)
`;

