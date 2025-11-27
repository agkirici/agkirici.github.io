// © 2025 Arzu Kirici — All Rights Reserved

import { getClient } from './client';
import { blogPostsQuery, blogPostBySlugQuery, blogPostSlugsQuery } from './queries';

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  author: string;
  date: string;
  excerpt?: string;
  coverImage?: any;
  content?: any;
  likes?: number;
  readingTime?: number;
}

export async function getAllBlogPosts(preview = false): Promise<BlogPost[]> {
  const sanityClient = getClient(preview);
  const posts = await sanityClient.fetch<BlogPost[]>(blogPostsQuery);
  
  // Calculate reading time for posts without it
  return posts.map((post) => {
    if (post.readingTime) {
      return post;
    }
    // Fallback reading time calculation if needed
    return {
      ...post,
      readingTime: 5, // Default fallback
    };
  });
}

export async function getBlogPostBySlug(
  slug: string,
  preview = false
): Promise<BlogPost | null> {
  const sanityClient = getClient(preview);
  const post = await sanityClient.fetch<BlogPost | null>(blogPostBySlugQuery, { slug });
  
  if (!post) {
    return null;
  }

  // Calculate reading time if not present
  if (!post.readingTime && post.content) {
    // This is a rough estimate - you might want to improve this
    const textLength = JSON.stringify(post.content).length;
    post.readingTime = Math.max(1, Math.round(textLength / 1000));
  }

  return post;
}

export async function getBlogPostSlugs(): Promise<string[]> {
  const client = getClient();
  const posts = await client.fetch<{ slug: string }[]>(blogPostSlugsQuery);
  return posts.map((post) => post.slug);
}

