// © 2025 Arzu Kirici — All Rights Reserved

import { createClient } from '@sanity/client';
import { apiVersion, dataset, projectId, getSanityConfig } from '@/sanity/env';

// Only create clients if we have the required environment variables
let client: ReturnType<typeof createClient> | null = null;
let previewClient: ReturnType<typeof createClient> | null = null;

function getClientInstance() {
  if (!client) {
    const config = getSanityConfig();
    client = createClient({
      projectId: config.projectId,
      dataset: config.dataset,
      apiVersion: config.apiVersion,
      useCdn: true,
    });
  }
  return client;
}

function getPreviewClientInstance() {
  if (!previewClient) {
    const config = getSanityConfig();
    previewClient = createClient({
      projectId: config.projectId,
      dataset: config.dataset,
      apiVersion: config.apiVersion,
      useCdn: false,
      token: process.env.SANITY_API_READ_TOKEN,
    });
  }
  return previewClient;
}

export const getClient = (preview?: boolean) => {
  return preview ? getPreviewClientInstance() : getClientInstance();
};

