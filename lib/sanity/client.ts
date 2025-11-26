// © 2025 Arzu Kirici — All Rights Reserved

import { createClient } from '@sanity/client';
import { apiVersion, dataset, projectId, getSanityConfig } from '@/sanity/env';

// Only create clients if we have the required environment variables
let client: ReturnType<typeof createClient> | null = null;
let previewClient: ReturnType<typeof createClient> | null = null;

function getClientInstance() {
  if (!client) {
    // Read directly from process.env to ensure production compatibility
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
    const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';
    
    if (!projectId) {
      const error = new Error('Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID');
      console.error('Failed to create Sanity client:', error);
      throw error;
    }
    
    if (!dataset) {
      const error = new Error('Missing environment variable: NEXT_PUBLIC_SANITY_DATASET');
      console.error('Failed to create Sanity client:', error);
      throw error;
    }
    
    client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    });
  }
  return client;
}

function getPreviewClientInstance() {
  if (!previewClient) {
    // Read directly from process.env to ensure production compatibility
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
    const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';
    // Support both SANITY_READ_TOKEN and SANITY_API_READ_TOKEN for compatibility
    const token = process.env.SANITY_READ_TOKEN || process.env.SANITY_API_READ_TOKEN;
    
    if (!projectId) {
      const error = new Error('Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID');
      console.error('Failed to create Sanity preview client:', error);
      throw error;
    }
    
    if (!dataset) {
      const error = new Error('Missing environment variable: NEXT_PUBLIC_SANITY_DATASET');
      console.error('Failed to create Sanity preview client:', error);
      throw error;
    }
    
    previewClient = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token: token,
    });
  }
  return previewClient;
}

export const getClient = (preview?: boolean) => {
  return preview ? getPreviewClientInstance() : getClientInstance();
};

