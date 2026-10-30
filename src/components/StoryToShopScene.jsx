import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useReducedMotionSafe } from '../hooks/useReducedMotionSafe';
import MakhanaPopcornExplosion from './MakhanaPopcornExplosion';

/**
 * StoryToShopScene:
 * Wraps EnjoyeatStory (Page 2) and ChooseCrunchPage (Page 3).
 * When scrolling from Story to Shop, the makhana popcorn explosion
 * erupts upwards from the bottom across the screen,
 * and settles into the Shop section onto the podium and floor.
 */
export default function StoryToShopScene({ StoryComponent, ShopComponent }) {
  const containerRef = useRef(null);
  const reducedMotion = useReducedMotionSafe();

  // Track scroll progress across the transition area
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.6,
  });

  // Story fades & gently recedes as user scrolls down: [0.15, 0.45]
  const storyOpacity = useTransform(smoothProgress, [0.15, 0.45], [1, 0]);
  const storyScale = useTransform(smoothProgress, [0.15, 0.45], [1, 0.94]);
  const storyY = useTransform(smoothProgress, [0.15, 0.45], [0, -40]);

  // Shop enters: rises smoothly and becomes fully visible: [0.35, 0.65]
  const shopOpacity = useTransform(smoothProgress, [0.35, 0.65], [0, 1]);
  const shopScale = useTransform(smoothProgress, [0.35, 0.65], [0.95, 1]);
  const shopY = useTransform(smoothProgress, [0.35, 0.65], [40, 0]);

  // Phase switch for pointer events
  const storyPointerEvents = useTransform(smoothProgress, (v) => (v < 0.42 ? 'auto' : 'none'));
  const shopPointerEvents = useTransform(smoothProgress, (v) => (v >= 0.42 ? 'auto' : 'none'));
  const storyZIndex = useTransform(smoothProgress, (v) => (v < 0.42 ? 2 : 1));
  const shopZIndex = useTransform(smoothProgress, (v) => (v >= 0.42 ? 3 : 1));

  if (reducedMotion) {
    return (
      <div className="w-full">
        <StoryComponent />
        <ShopComponent />
      </div>
    );
  }

  return (
    <section
      ref={containerRef}
      id="story-to-shop-scene"
      style={{
        position: 'relative',
        height: 'calc(100svh + 85vh)',
        backgroundColor: '#EFE7D6',
        width: '100%',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100svh',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: '#EFE7D6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Page 2: Our Roots in Bihar (Story) Layer */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            opacity: storyOpacity,
            scale: storyScale,
            y: storyY,
            pointerEvents: storyPointerEvents,
            zIndex: storyZIndex,
          }}
        >
          <StoryComponent />
        </motion.div>

        {/* Page 3: Choose Your Natural Crunch (Shop) Layer */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            opacity: shopOpacity,
            scale: shopScale,
            y: shopY,
            pointerEvents: shopPointerEvents,
            zIndex: shopZIndex,
          }}
        >
          <ShopComponent />
        </motion.div>

        {/* The Makhana Popcorn Explosion Eruption Layer */}
        <MakhanaPopcornExplosion scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}
