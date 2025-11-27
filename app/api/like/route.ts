// © 2025 Arzu Kirici — All Rights Reserved

import { NextRequest, NextResponse } from 'next/server';
import { getWriteClient } from '@/lib/sanity/client';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { postId } = body;

    // Validation
    if (!postId || typeof postId !== 'string' || postId.trim().length === 0) {
      return NextResponse.json(
        { error: 'postId is required and must be a non-empty string' },
        { status: 400 }
      );
    }

    // Get write client with authentication token
    const client = getWriteClient();

    // Increment likes using .patch().inc()
    const result = await client
      .patch(postId)
      .inc({ likes: 1 })
      .commit();

    // Return the new like count
    return NextResponse.json(
      { success: true, likes: result.likes ?? 0 },
      { status: 200 }
    );
  } catch (error) {
    console.error('Like API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

