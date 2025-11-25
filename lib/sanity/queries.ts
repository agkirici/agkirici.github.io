import { groq } from 'next-sanity';

export const blogPostsQuery = groq`
  *[_type == "blogPost" && defined(slug.current)] | order(date desc) {
    _id,
    title,
    slug,
    author,
    date,
    excerpt,
    coverImage,
    "readingTime": round(length(pt::text(content)) / 5 / 180 )
  }
`;

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    author,
    date,
    excerpt,
    coverImage,
    content,
    "readingTime": round(length(pt::text(content)) / 5 / 180 )
  }
`;

export const blogPostSlugsQuery = groq`
  *[_type == "blogPost" && defined(slug.current)] {
    "slug": slug.current
  }
`;

