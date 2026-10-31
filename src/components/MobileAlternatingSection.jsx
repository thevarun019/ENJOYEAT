import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useReducedMotionSafe } from "../hooks/useReducedMotionSafe";

/**
 * MobileAlternatingSection:
 * Creates an elegant, punchy alternating entry & shifting animation on mobile:
 * - When shifting from one section to another:
 *   - Direction 'right': pops up with dynamic slide from right (+50px)
 *   - Direction 'left': pops up with dynamic slide from left (-50px)
 * - Uses spring easing for natural physical settling (stiffness: 85, damping: 16)
 * - Safe for desktop & reduced motion: passes through smoothly with zero interference
 * - One-way safe on mobile: triggers once on scroll down (viewport: { once: true, amount: 0.08 })
 */
export default function MobileAlternatingSection({
  children,
  direction = "right",
  id,
  className = "",
}) {
  const reducedMotion = useReducedMotionSafe();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const isFromRight = direction === "right";
  // On mobile, shifting offset is punchy (+55px / -55px); on desktop it stays clean (0px)
  const initialX = isMobile ? (isFromRight ? 55 : -55) : 0;
  const initialY = isMobile ? 32 : 0;
  const initialScale = isMobile ? 0.95 : 1;

  return (
    <motion.div
      id={id}
      className={`w-full overflow-hidden ${className}`}
      initial={
        reducedMotion
          ? {}
          : {
              opacity: isMobile ? 0 : 1,
              x: initialX,
              y: initialY,
              scale: initialScale,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{
        type: "spring",
        stiffness: 85,
        damping: 16,
        mass: 0.8,
        restDelta: 0.001,
      }}
    >
      {children}
    </motion.div>
  );
}
