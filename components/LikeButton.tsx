// © 2025 Arzu Kirici — All Rights Reserved

"use client";

import { useState } from 'react';

interface LikeButtonProps {
  postId: string;
  initialLikes: number;
}

export default function LikeButton({ postId, initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiking, setIsLiking] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = async () => {
    if (hasLiked || isLiking) return;

    setIsLiking(true);
    // Optimistic update
    setLikes((prev) => prev + 1);
    setHasLiked(true);

    try {
      const response = await fetch('/api/like', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ postId }),
      });

      if (!response.ok) {
        throw new Error('Failed to like post');
      }

      const data = await response.json();
      // Update with server response
      setLikes(data.likes);
    } catch (error) {
      console.error('Error liking post:', error);
      // Revert optimistic update on error
      setLikes((prev) => prev - 1);
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

