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

    // Get environment variables
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

    // First, get the current document to check if it exists
    const currentDoc = await client.getDocument(postId);
    if (!currentDoc) {
      console.error('[Like API] Document not found:', postId);
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    const currentLikes = typeof currentDoc.likes === 'number' ? currentDoc.likes : 0;
    console.log('[Like API] Current likes:', currentLikes);
    console.log('[Like API] Current document:', JSON.stringify(currentDoc, null, 2));

    // Increment likes using .patch().inc()
    try {
      console.log('[Like API] Starting patch operation...');
      
      // Perform the patch operation
      const patchResult = await client
        .patch(postId)
        .setIfMissing({ likes: 0 })
        .inc({ likes: 1 })
        .commit();

      console.log('[Like API] Patch commit successful. Result:', patchResult);

      // Wait a brief moment for Sanity to process the update
      await new Promise(resolve => setTimeout(resolve, 100));

      // Fetch the updated document to get the new likes count
      const updatedDoc = await client.getDocument(postId);
      
      if (!updatedDoc) {
        console.error('[Like API] Failed to fetch updated document after patch');
        // Fallback to current likes + 1
        const newLikes = currentLikes + 1;
        return NextResponse.json(
          { success: true, likes: newLikes },
          { status: 200 }
        );
      }

      console.log('[Like API] Updated document:', JSON.stringify(updatedDoc, null, 2));
      
      const newLikes = typeof updatedDoc.likes === 'number' ? updatedDoc.likes : (currentLikes + 1);
      console.log('[Like API] Successfully incremented likes. New count:', newLikes);

    // Return the new like count
    return NextResponse.json(
      { success: true, likes: newLikes },
      { status: 200 }
    );
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

