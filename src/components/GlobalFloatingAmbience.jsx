import React, { useMemo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useReducedMotionSafe } from "../hooks/useReducedMotionSafe";

// Transparent makhana assets
import m1 from "../assets/hero/el_m1.png";
import m2 from "../assets/hero/el_m2.png";
import m3 from "../assets/hero/el_m3.png";
import m4 from "../assets/hero/el_m4.png";
import m5 from "../assets/hero/el_m5.png";
import m6 from "../assets/hero/el_m6.png";
import m7 from "../assets/hero/el_m7.png";
import m8 from "../assets/hero/el_m8.png";
import m9 from "../assets/hero/el_m9.png";
import m10 from "../assets/hero/el_m10.png";
import m11 from "../assets/hero/el_m11.png";

// Leaves
import leafSage from "../assets/hero/el_sage.png";
import leafBasil from "../assets/hero/el_basil.png";

const MAKHANA_IMAGES = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11];
const LEAF_IMAGES = [leafSage, leafBasil];

/**
 * GlobalFloatingAmbience:
 * Directly reproduces the full-page floating makhana and leaves seen in the video!
 * As you scroll continuously from Hero down through Story, Shop, Benefits, Wholesale,
 * and Contact, organic pieces of popped makhana and botanic leaves drift naturally
 * at different parallax speeds and depths, giving the entire site a lively, premium 3D snack atmosphere.
 */
export default function GlobalFloatingAmbience() {
  const reducedMotion = useReducedMotionSafe();

  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 22,
    mass: 0.5,
  });

  // 24 pieces of floating makhana placed down the entire document height
  const ambientMakhana = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => {
      const img = MAKHANA_IMAGES[i % MAKHANA_IMAGES.length];

      // Vertical distribution down the page (from 5vh to 520vh)
      const topVh = 8 + i * 22 + ((i * 13) % 15);

      // Horizontal placement (alternating sides & center lanes)
      const leftVw =
        i % 2 === 0
          ? 3 + ((i * 7) % 22) // left zone: 3% to 25%
          : 72 + ((i * 9) % 24); // right zone: 72% to 96%

      // Depth layers
      const isForeground = i % 5 === 0;
      const isBackground = i % 3 === 0;

      let sizeVw = 3.6;
      let blur = 0;
      let zIndex = 25;
      let parallaxSpeed = 140; // px of vertical drift on scroll

      if (isForeground) {
        sizeVw = 6.8 + (i % 3);
        blur = 1.2;
        zIndex = 35;
        parallaxSpeed = 260; // moves faster (closer to camera)
      } else if (isBackground) {
        sizeVw = 2.2 + (i % 1.5);
        blur = 0.5;
        zIndex = 10;
        parallaxSpeed = 70; // moves slower (distant)
      }

      const floatDuration = 4 + (i % 4) * 0.8;
      const floatDelay = (i * 0.3) % 2;
      const initialRot = (i * 43) % 360;

      return {
        id: `amb-m-${i}`,
        img,
        topVh,
        leftVw,
        sizeVw,
        blur,
        zIndex,
        parallaxSpeed,
        floatDuration,
        floatDelay,
        initialRot,
      };
    });
  }, []);

  // 14 organic leaves scattered vertically down the full site
  const ambientLeaves = useMemo(() => {
    return Array.from({ length: 14 }).map((_, i) => {
      const img = LEAF_IMAGES[i % LEAF_IMAGES.length];
      const topVh = 15 + i * 38 + ((i * 17) % 20);
      const leftVw = i % 2 === 0 ? 4 + ((i * 8) % 20) : 76 + ((i * 7) % 20);

      const sizeVw = 3.2 + (i % 2.5);
      const floatDuration = 5 + (i % 3);
      const floatDelay = (i * 0.4) % 2.5;
      const initialRot = (i * 55) % 360;
      const parallaxSpeed = 110 + (i % 4) * 30;

      return {
        id: `amb-l-${i}`,
        img,
        topVh,
        leftVw,
        sizeVw,
        zIndex: 22,
        parallaxSpeed,
        floatDuration,
        floatDelay,
        initialRot,
      };
    });
  }, []);

  if (reducedMotion) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 30,
      }}
      aria-hidden="true"
    >
      {/* Floating Ambient Makhana */}
      {ambientMakhana.map((m) => {
        // Parallax scroll drift
        const yDrift = useTransform(
          smoothScroll,
          [0, 1],
          [0, -m.parallaxSpeed],
        );

        return (
          <motion.div
            key={m.id}
            style={{
              position: "absolute",
              top: `${m.topVh}vh`,
              left: `${m.leftVw}vw`,
              y: yDrift,
              zIndex: m.zIndex,
            }}
          >
            {/* Gentle idle float loop */}
            <motion.img
              src={m.img}
              alt=""
              draggable={false}
              animate={{
                y: [0, -10, 0],
                rotate: [m.initialRot, m.initialRot + 8, m.initialRot],
              }}
              transition={{
                duration: m.floatDuration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: m.floatDelay,
              }}
              style={{
                width: `${m.sizeVw}vw`,
                height: "auto",
                filter:
                  m.blur > 0
                    ? `blur(${m.blur}px) drop-shadow(0 12px 18px rgba(45,30,15,0.2))`
                    : "drop-shadow(0 8px 14px rgba(45,30,15,0.18))",
                userSelect: "none",
              }}
            />
          </motion.div>
        );
      })}

      {/* Floating Ambient Leaves */}
      {ambientLeaves.map((l) => {
        const yDrift = useTransform(
          smoothScroll,
          [0, 1],
          [0, -l.parallaxSpeed],
        );

        return (
          <motion.div
            key={l.id}
            style={{
              position: "absolute",
              top: `${l.topVh}vh`,
              left: `${l.leftVw}vw`,
              y: yDrift,
              zIndex: l.zIndex,
            }}
          >
            <motion.img
              src={l.img}
              alt=""
              draggable={false}
              animate={{
                y: [0, -12, 0],
                rotate: [l.initialRot, l.initialRot + 15, l.initialRot],
              }}
              transition={{
                duration: l.floatDuration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: l.floatDelay,
              }}
              style={{
                width: `${l.sizeVw}vw`,
                height: "auto",
                filter: "drop-shadow(0 6px 10px rgba(45,30,15,0.15))",
                opacity: 0.85,
                userSelect: "none",
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
