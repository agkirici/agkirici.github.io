import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags?: string[];
}

function parseFrontmatter(content: string): { frontmatter: Record<string, any>; body: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, body: content };
  }
  
  const frontmatterText = match[1];
  const body = match[2];
  const frontmatter: Record<string, any> = {};
  
  frontmatterText.split('\n').forEach((line) => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Handle arrays (tags: [item1, item2])
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map((item) => item.trim().replace(/['"]/g, ''));
      }
      
      frontmatter[key] = value;
    }
  });
  
  return { frontmatter, body };
}

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { frontmatter, body } = parseFrontmatter(fileContents);

      return {
        slug,
        title: frontmatter.title || '',
        date: frontmatter.date || '',
        excerpt: frontmatter.excerpt || '',
        content: body,
        tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : 
              typeof frontmatter.tags === 'string' ? [frontmatter.tags] : [],
      };
    });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { frontmatter, body } = parseFrontmatter(fileContents);

    return {
      slug,
      title: frontmatter.title || '',
      date: frontmatter.date || '',
      excerpt: frontmatter.excerpt || '',
      content: body,
      tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : 
            typeof frontmatter.tags === 'string' ? [frontmatter.tags] : [],
    };
  } catch (error) {
    return null;
  }
}

export function getLatestBlogPosts(count: number = 3): BlogPost[] {
  const posts = getBlogPosts();
  return posts.slice(0, count);
}
