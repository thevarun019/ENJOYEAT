import React, { useMemo } from 'react';
import { motion, useTransform, useSpring } from 'framer-motion';
import { useReducedMotionSafe } from '../hooks/useReducedMotionSafe';

// Transparent makhana assets
import m1 from '../assets/hero/el_m1.png';
import m2 from '../assets/hero/el_m2.png';
import m3 from '../assets/hero/el_m3.png';
import m4 from '../assets/hero/el_m4.png';
import m5 from '../assets/hero/el_m5.png';
import m6 from '../assets/hero/el_m6.png';
import m7 from '../assets/hero/el_m7.png';
import m8 from '../assets/hero/el_m8.png';
import m9 from '../assets/hero/el_m9.png';
import m10 from '../assets/hero/el_m10.png';
import m11 from '../assets/hero/el_m11.png';

// Leaves
import leafSage from '../assets/hero/el_sage.png';
import leafBasil from '../assets/hero/el_basil.png';

const MAKHANA_IMAGES = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11];
const LEAF_IMAGES = [leafSage, leafBasil];

/**
 * MakhanaPopcornExplosion:
 * Directly reproduces the animation from the video:
 * When scrolling from Page 2 (Our Story) into Page 3 (Shop),
 * a dramatic popcorn eruption of crispy makhana pops up from the bottom of the screen,
 * bursts high into the air with 3D depth, and showers down.
 * When the user arrives at the Shop page, all temporary floating particles have faded away
 * so the Shop page products and text are 100% clean and unobstructed!
 */
export default function MakhanaPopcornExplosion({ scrollYProgress }) {
  const reducedMotion = useReducedMotionSafe();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 24,
    mass: 0.5,
  });

  // Pre-generate 30 makhana particles with deterministic organic trajectories
  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => {
      const img = MAKHANA_IMAGES[i % MAKHANA_IMAGES.length];
      
      // Spread across screen width
      const startX = 12 + ((i * 3.1) % 76);
      const endX = startX + (((i % 2 === 0 ? 1 : -1) * (10 + (i * 2.8) % 25)));

      // Depth tiers: 0 = background, 1 = midground, 2 = extreme foreground (large & soft blur)
      const depthTier = i % 6 === 0 ? 2 : (i % 3 === 0 ? 0 : 1);
      
      let sizeVw = 3.2;
      let blurPx = 0;
      let zIndex = 30;
      let peakYVh = -75; // shoot up height
      let fallYVh = 50;  // shower downward off-screen or onto ground

      if (depthTier === 2) {
        // Foreground hero pieces flying close to camera
        sizeVw = 6.8 + (i % 3);
        blurPx = 1.2;
        zIndex = 45;
        peakYVh = -105 - (i % 20);
        fallYVh = 70;
      } else if (depthTier === 0) {
        // Distant small pieces
        sizeVw = 2.0 + (i % 2);
        blurPx = 0.5;
        zIndex = 20;
        peakYVh = -55 - (i % 20);
        fallYVh = 40;
      } else {
        // Midground crisp pieces
        sizeVw = 3.8 + (i % 2.5);
        blurPx = 0;
        zIndex = 35;
        peakYVh = -75 - (i % 25);
        fallYVh = 55;
      }

      // Timing tuned specifically for the transition zone:
      // popStart: ~0.35 to 0.42 (as story reaches bottom)
      // peakPoint: ~0.46 to 0.52 (erupts across full screen)
      // landPoint / fade: ~0.55 to 0.62 (falls and fully vanishes BEFORE user settles in shop)
      const popStart = 0.34 + (i % 8) * 0.012;
      const peakPoint = popStart + 0.10 + (i % 4) * 0.01;
      const fallPoint = peakPoint + 0.10 + (i % 3) * 0.01;

      const initialRot = (i * 47) % 360;
      const spinDelta = ((i % 2 === 0 ? 1 : -1) * (180 + (i * 65) % 360));

      return {
        id: `m-burst-${i}`,
        img,
        startX,
        endX,
        sizeVw,
        blurPx,
        zIndex,
        peakYVh,
        fallYVh,
        popStart,
        peakPoint,
        fallPoint,
        initialRot,
        spinDelta,
      };
    });
  }, []);

  // Also 6 floating green leaves erupting with the makhana for fresh herbal aesthetic
  const leaves = useMemo(() => {
    return Array.from({ length: 6 }).map((_, i) => {
      const img = LEAF_IMAGES[i % LEAF_IMAGES.length];
      const startX = 20 + (i * 11) % 60;
      const endX = startX + ((i % 2 === 0 ? 1 : -1) * (15 + (i * 4) % 20));
      const popStart = 0.35 + i * 0.015;
      const peakPoint = popStart + 0.11;
      const fallPoint = peakPoint + 0.11;
      const peakYVh = -70 - (i * 8);

      return {
        id: `leaf-burst-${i}`,
        img,
        startX,
        endX,
        sizeVw: 2.8 + (i % 2),
        popStart,
        peakPoint,
        fallPoint,
        peakYVh,
        initialRot: i * 60,
        spinDelta: (i % 2 === 0 ? 1 : -1) * 220,
      };
    });
  }, []);

  if (reducedMotion) return null;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 40,
      }}
      aria-hidden="true"
    >
      {/* Makhana Particles */}
      {particles.map((p) => {
        // Starts below viewport (105vh), explodes up to peakYVh, then falls down to fallYVh
        const y = useTransform(
          smoothProgress,
          [0, p.popStart, p.peakPoint, p.fallPoint, 1],
          ['105vh', '100vh', `${p.peakYVh}vh`, `${p.fallYVh}vh`, `${p.fallYVh}vh`]
        );

        const x = useTransform(
          smoothProgress,
          [0, p.popStart, p.fallPoint, 1],
          [`${p.startX}vw`, `${p.startX}vw`, `${p.endX}vw`, `${p.endX}vw`]
        );

        const rotate = useTransform(
          smoothProgress,
          [0, p.popStart, p.fallPoint, 1],
          [p.initialRot, p.initialRot, p.initialRot + p.spinDelta, p.initialRot + p.spinDelta]
        );

        // Opacity: Invisible before popStart, shines bright during eruption (0.42 - 0.52),
        // then completely fades out to 0 by fallPoint (~0.60) so Shop is completely clean!
        const opacity = useTransform(
          smoothProgress,
          [0, p.popStart - 0.02, p.popStart + 0.02, p.peakPoint + 0.04, p.fallPoint],
          [0, 0, 1, 0.85, 0]
        );

        const scale = useTransform(
          smoothProgress,
          [0, p.popStart, p.peakPoint, p.fallPoint, 1],
          [0.3, 0.7, 1.15, 0.85, 0.85]
        );

        return (
          <motion.img
            key={p.id}
            src={p.img}
            alt=""
            draggable={false}
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              x,
              y,
              rotate,
              scale,
              opacity,
              width: `${p.sizeVw}vw`,
              height: 'auto',
              filter: p.blurPx > 0
                ? `blur(${p.blurPx}px) drop-shadow(0 15px 20px rgba(45,30,15,0.22))`
                : 'drop-shadow(0 8px 14px rgba(45,30,15,0.18))',
              zIndex: p.zIndex,
              userSelect: 'none',
              willChange: 'transform, opacity',
            }}
          />
        );
      })}

      {/* Herbal Leaf Particles */}
      {leaves.map((l) => {
        const y = useTransform(
          smoothProgress,
          [0, l.popStart, l.peakPoint, l.fallPoint, 1],
          ['105vh', '100vh', `${l.peakYVh}vh`, '45vh', '45vh']
        );

        const x = useTransform(
          smoothProgress,
          [0, l.popStart, l.fallPoint, 1],
          [`${l.startX}vw`, `${l.startX}vw`, `${l.endX}vw`, `${l.endX}vw`]
        );

        const rotate = useTransform(
          smoothProgress,
          [0, l.popStart, l.fallPoint, 1],
          [l.initialRot, l.initialRot, l.initialRot + l.spinDelta, l.initialRot + l.spinDelta]
        );

        const opacity = useTransform(
          smoothProgress,
          [0, l.popStart, l.popStart + 0.02, l.peakPoint + 0.03, l.fallPoint],
          [0, 0, 0.85, 0.75, 0]
        );

        return (
          <motion.img
            key={l.id}
            src={l.img}
            alt=""
            draggable={false}
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              x,
              y,
              rotate,
              opacity,
              width: `${l.sizeVw}vw`,
              height: 'auto',
              filter: 'drop-shadow(0 6px 10px rgba(45,30,15,0.15))',
              zIndex: 25,
              userSelect: 'none',
              willChange: 'transform, opacity',
            }}
          />
        );
      })}
    </div>
  );
}
