// © 2025 Arzu Kirici — All Rights Reserved

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@sanity/client';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { postId } = body;

    // Validation
    if (!postId || typeof postId !== 'string' || postId.trim().length === 0) {
      console.error('[Like API] Invalid postId:', postId);
      return NextResponse.json(
        { error: 'postId is required and must be a non-empty string' },
        { status: 400 }
      );
    }

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

    // Create client with write token using withConfig
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
    }).withConfig({ token });

    console.log('[Like API] Incrementing likes for postId:', postId);

    // Patch and increment in a single chain
    try {
      const updated = await client
        .patch(postId)
        .setIfMissing({ likes: 0 })
        .inc({ likes: 1 })
        .commit();

      // Get the updated likes value
      const updatedLikes = typeof updated.likes === 'number' ? updated.likes : 0;
      
      console.log('[Like API] Successfully incremented likes. Updated likes value:', updatedLikes);
      
      return NextResponse.json(
        { likes: updatedLikes },
        { status: 200 }
      );
    } catch (patchError) {
      console.error('[Like API] Patch operation failed:', patchError);
      if (patchError instanceof Error) {
        console.error('[Like API] Patch error message:', patchError.message);
        console.error('[Like API] Patch error stack:', patchError.stack);
      }
      
      return NextResponse.json(
        { 
          error: 'Failed to update likes',
          likes: 0
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('[Like API] Error:', error);
    if (error instanceof Error) {
      console.error('[Like API] Error message:', error.message);
      console.error('[Like API] Error stack:', error.stack);
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

