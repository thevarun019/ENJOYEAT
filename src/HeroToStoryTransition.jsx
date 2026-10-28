import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import HeroSection from './HeroSection';
import EnjoyeatStory from './EnjoyeatStory';
import el_m1 from './assets/hero/el_m1.png';
import el_m6 from './assets/hero/el_m6.png';
import el_sage from './assets/hero/el_sage.png';

/**
 * HeroToStoryTransition (StyleStar & Aletyx Motion Design):
 * Orchestrates a seamless spatial shift between Page 1 (Hero) and Page 2 (Our Story).
 * - Smooth camera elevation & depth scaling as user leaves Hero.
 * - Floating makhana and sage particle gateway crossing the seam between both pages.
 * - Fluid curtain curtain wipe and golden seam line indicator.
 */
export default function HeroToStoryTransition() {
  const containerRef = useRef(null);

  // Track scroll progression through the Hero -> Story transition zone
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
    restDelta: 0.001,
  });

  // Hero section transformations as user scrolls down:
  // Subtly elevates in 3D and fades slightly to guide focus to Our Story
  const heroScale = useTransform(smoothProgress, [0, 0.45], [1, 0.96]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.45], [1, 0.85]);
  const heroY = useTransform(smoothProgress, [0, 0.45], [0, 60]);

  // Story section enters with smooth upward reveal:
  const storyY = useTransform(smoothProgress, [0.3, 0.8], [80, 0]);
  const storyScale = useTransform(smoothProgress, [0.3, 0.8], [0.97, 1]);
  const storyOpacity = useTransform(smoothProgress, [0.25, 0.65], [0.85, 1]);

  // Floating Makhana particles that cross the transition boundary
  const particle1Y = useTransform(smoothProgress, [0, 1], [-40, 260]);
  const particle1Rotate = useTransform(smoothProgress, [0, 1], [0, 180]);

  const particle2Y = useTransform(smoothProgress, [0, 1], [20, 320]);
  const particle2Rotate = useTransform(smoothProgress, [0, 1], [15, -120]);

  const leafY = useTransform(smoothProgress, [0, 1], [0, 220]);
  const leafRotate = useTransform(smoothProgress, [0, 1], [-20, 45]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ perspective: '1400px' }}
    >
      {/* ── Page 1: Hero Section with 3D Depth Shift ── */}
      <motion.div
        style={{
          scale: heroScale,
          opacity: heroOpacity,
          y: heroY,
          transformOrigin: '50% 60%',
        }}
        className="w-full relative z-10"
      >
        <HeroSection />
      </motion.div>

      {/* ── Spatial Transition Seam (Aletyx Cinematic Particle Bridge) ── */}
      <div className="pointer-events-none absolute left-0 right-0 top-[44%] bottom-[44%] z-30 overflow-visible">
        {/* Particle 1: Floating Makhana drifting across left seam */}
        <motion.img
          src={el_m1}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '14%',
            top: '0%',
            y: particle1Y,
            rotate: particle1Rotate,
            width: '28px',
            filter: 'drop-shadow(0 12px 18px rgba(50,35,20,0.22))',
          }}
        />

        {/* Particle 2: Golden Makhana drifting across center right seam */}
        <motion.img
          src={el_m6}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '18%',
            top: '10%',
            y: particle2Y,
            rotate: particle2Rotate,
            width: '32px',
            filter: 'drop-shadow(0 14px 20px rgba(50,35,20,0.24))',
          }}
        />

        {/* Particle 3: Sage Herb tumbling down seam */}
        <motion.img
          src={el_sage}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '32%',
            top: '5%',
            y: leafY,
            rotate: leafRotate,
            width: '42px',
            filter: 'drop-shadow(0 10px 16px rgba(40,30,15,0.2))',
          }}
        />

        {/* Subtle luminous seam glow */}
        <div
          style={{
            position: 'absolute',
            left: '10%',
            right: '10%',
            top: '50%',
            height: '1px',
            background:
              'linear-gradient(90deg, transparent 0%, rgba(201,169,106,0.35) 50%, transparent 100%)',
          }}
        />
      </div>

      {/* ── Page 2: Our Story with Elevated Entrance ── */}
      <motion.div
        style={{
          y: storyY,
          scale: storyScale,
          opacity: storyOpacity,
          transformOrigin: '50% 20%',
        }}
        className="w-full relative z-20"
      >
        <EnjoyeatStory />
      </motion.div>
    </div>
  );
}
