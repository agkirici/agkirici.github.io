// © 2025 Arzu Kirici — All Rights Reserved

export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { createClient } from '@sanity/client';

export async function POST(req: Request) {
  try {
    const { postId, delta } = await req.json();

    if (!postId) {
      return NextResponse.json(
        { error: 'postId is required' },
        { status: 400 }
      );
    }

    const change = typeof delta === 'number' && (delta === 1 || delta === -1)
      ? delta
      : 1; // default +1

    // Get environment variables (server-side only)
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
    const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';
    const token = process.env.SANITY_WRITE_TOKEN;

    if (!projectId) {
      console.error('[Like API] Missing NEXT_PUBLIC_SANITY_PROJECT_ID');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    if (!token) {
      console.error('[Like API] Missing SANITY_WRITE_TOKEN');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
    });

    const writeClient = client.withConfig({
      token: process.env.SANITY_WRITE_TOKEN,
      useCdn: false,
    });

    const updated = await writeClient
      .patch(postId)
      .setIfMissing({ likes: 0 })
      .inc({ likes: change })
      .commit({ autoGenerateArrayKeys: true });

    const updatedLikes = updated.likes ?? 0;

    console.log('[Like API] Successfully updated likes. Updated likes value:', updatedLikes);

    return NextResponse.json({ likes: updatedLikes });
  } catch (err: any) {
    console.error('LIKE API ERROR', err);
    return NextResponse.json(
      {
        error: 'Failed to update likes',
        details: err?.message || String(err),
      },
      { status: 500 }
    );
  }
}

