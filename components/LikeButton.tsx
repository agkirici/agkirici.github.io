// © 2025 Arzu Kirici — All Rights Reserved

"use client";

import { useState, useEffect } from 'react';

interface LikeButtonProps {
  postId: string;
  initialLikes: number;
}

export default function LikeButton({ postId, initialLikes }: LikeButtonProps) {
  // Ensure initialLikes is a number, defaulting to 0
  const safeInitialLikes = typeof initialLikes === 'number' ? initialLikes : 0;
  
  const [likes, setLikes] = useState(safeInitialLikes);
  const [isLiking, setIsLiking] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);

  // Sync with initialLikes prop if it changes
  useEffect(() => {
    setLikes(safeInitialLikes);
  }, [safeInitialLikes]);

  const handleLike = async () => {
    if (hasLiked || isLiking) {
      console.log('[LikeButton] Already liked or currently processing');
      return;
    }

    if (!postId) {
      console.error('[LikeButton] Missing postId');
      return;
    }

    setIsLiking(true);
    const previousLikes = likes;
    
    // Optimistic update
    setLikes((prev) => prev + 1);
    setHasLiked(true);

    try {
      console.log('[LikeButton] Sending like request for postId:', postId);
      
      const response = await fetch('/api/like', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ postId }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('[LikeButton] API error response:', response.status, errorData);
        throw new Error(`Failed to like post: ${response.status}`);
      }

      const data = await response.json();
      
      // Update with server response
      if (typeof data.likes === 'number') {
        console.log('[LikeButton] Successfully liked post. New count:', data.likes);
        setLikes(data.likes);
      } else {
        console.error('[LikeButton] Invalid response format. Expected data.likes to be a number, got:', data);
        // Revert optimistic update if response is invalid
        setLikes(previousLikes);
        setHasLiked(false);
      }
    } catch (error) {
      console.error('[LikeButton] Error liking post:', error);
      // Revert optimistic update on error
      setLikes(previousLikes);
      setHasLiked(false);
    } finally {
      setIsLiking(false);
    }
  };

  return (
    <button
      onClick={handleLike}
      disabled={hasLiked || isLiking}
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm transition-colors ${
        hasLiked
          ? 'border-red-500 bg-red-500/10 text-red-400 cursor-not-allowed'
          : 'border-neutral-700 bg-neutral-800/50 text-neutral-300 hover:border-neutral-600 hover:bg-neutral-800 cursor-pointer'
      }`}
      aria-label={`Like this post. Current likes: ${likes}`}
    >
      <span>❤️</span>
      <span>{likes}</span>
    </button>
  );
}

