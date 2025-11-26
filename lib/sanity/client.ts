// © 2025 Arzu Kirici — All Rights Reserved

import { createClient } from '@sanity/client';
import { apiVersion, dataset, projectId, getSanityConfig } from '@/sanity/env';

// Only create clients if we have the required environment variables
let client: ReturnType<typeof createClient> | null = null;
let previewClient: ReturnType<typeof createClient> | null = null;

function getClientInstance() {
  if (!client) {
    const config = getSanityConfig();
    // Ensure we're reading from process.env explicitly
    client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || config.projectId,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || config.dataset,
      apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || config.apiVersion,
      useCdn: true,
    });
  }
  return client;
}

function getPreviewClientInstance() {
  if (!previewClient) {
    const config = getSanityConfig();
    // Support both SANITY_READ_TOKEN and SANITY_API_READ_TOKEN for compatibility
    const token = process.env.SANITY_READ_TOKEN || process.env.SANITY_API_READ_TOKEN;
    previewClient = createClient({
      projectId: config.projectId,
      dataset: config.dataset,
      apiVersion: config.apiVersion,
      useCdn: false,
      token: token,
    });
  }
  return previewClient;
}

export const getClient = (preview?: boolean) => {
  return preview ? getPreviewClientInstance() : getClientInstance();
};

