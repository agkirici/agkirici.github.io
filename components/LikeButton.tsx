// © 2025 Arzu Kirici — All Rights Reserved

'use client';

import { useEffect, useState } from 'react';

type Props = {
  postId: string;
  initialLikes?: number;
};

export default function LikeButton({ postId, initialLikes = 0 }: Props) {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Kullanıcının daha önce like edip etmediğini localStorage'dan oku
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem(`liked_${postId}`);
    setLiked(stored === 'true');
  }, [postId]);

  // Sync with initialLikes prop if it changes
  useEffect(() => {
    setLikes(initialLikes);
  }, [initialLikes]);

  const handleClick = async () => {
    if (loading) return;
    setLoading(true);
    setError(null);

    const nextLiked = !liked;
    const delta = nextLiked ? 1 : -1;

    // Optimistik update
    setLiked(nextLiked);
    setLikes((prev) => prev + delta);

    try {
      const res = await fetch('/api/like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId, delta }),
      });

      const data = await res.json();

      if (!res.ok || typeof data.likes !== 'number') {
        // geri al
        setLiked((prev) => !prev);
        setLikes((prev) => prev - delta);
        setError(data.error || 'Like failed');
      } else {
        setLikes(data.likes);
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(
            `liked_${postId}`,
            nextLiked ? 'true' : 'false'
          );
        }
      }
    } catch (e) {
      // geri al
      setLiked((prev) => !prev);
      setLikes((prev) => prev - delta);
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={
        'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm transition-colors ' +
        (liked 
          ? 'bg-pink-600 text-white border-pink-600' 
          : 'border-neutral-700 bg-neutral-800/50 text-neutral-300 hover:border-neutral-600 hover:bg-neutral-800')
      }
      aria-label={`Like this post. Current likes: ${likes}`}
    >
      <span>❤️</span>
      <span>{likes}</span>
    </button>
  );
}

