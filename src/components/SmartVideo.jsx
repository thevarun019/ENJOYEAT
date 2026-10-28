import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';

/**
 * SmartVideo:
 * High-performance viewport-aware video player.
 * - Auto-plays when scrolled into view (>= 35% in view) and pauses when scrolled away.
 * - Never shows rectangular video borders against cream backgrounds when featherEdges is true.
 * - Falls back to static poster image gracefully if video is missing or fails to load.
 */
export default function SmartVideo({
  src,
  poster,
  className = '',
  style = {},
  featherEdges = true,
  loop = true,
  muted = true,
  playsInline = true,
  blendMultiply = true,
  alt = '',
}) {
  const videoRef = useRef(null);
  const isInView = useInView(videoRef, { amount: 0.35 });

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (isInView) {
      el.play().catch(() => {
        // Autoplay may be blocked by browser policy until user interaction
      });
    } else {
      el.pause();
    }
  }, [isInView]);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload="metadata"
      aria-label={alt}
      className={`block object-cover ${className}`}
      style={{
        ...(blendMultiply ? { mixBlendMode: 'multiply' } : {}),
        ...(featherEdges
          ? {
              WebkitMaskImage: 'radial-gradient(closest-side, black 75%, transparent 100%)',
              maskImage: 'radial-gradient(closest-side, black 75%, transparent 100%)',
            }
          : {}),
        ...style,
      }}
    />
  );
}

