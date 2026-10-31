import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useReducedMotionSafe } from "../hooks/useReducedMotionSafe";

/**
 * MobileAlternatingSection:
 * Creates an elegant, punchy alternating entry & shifting animation on mobile:
 * - When shifting from one section to another:
 *   - Direction 'right': pops up with dynamic slide from right (+48px)
 *   - Direction 'left': pops up with dynamic slide from left (-48px)
 * - Uses spring easing for natural physical settling (stiffness: 80, damping: 17)
 * - Low amount threshold (amount: 0.04) ensures it triggers reliably on mobile viewports
 */
export default function MobileAlternatingSection({
  children,
  direction = "right",
  id,
  className = "",
}) {
  const reducedMotion = useReducedMotionSafe();
  const [isMobile, setIsMobile] = useState(() => (typeof window !== "undefined" ? window.innerWidth <= 768 : false));

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("orientationchange", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("orientationchange", checkMobile);
    };
  }, []);

  const isFromRight = direction === "right";
  // On mobile, shifting offset is punchy (+48px / -48px); on desktop it stays clean (0px)
  const initialX = isMobile ? (isFromRight ? 48 : -48) : 0;
  const initialY = isMobile ? 24 : 0;
  const initialScale = isMobile ? 0.96 : 1;

  return (
    <motion.div
      id={id}
      className={`w-full overflow-hidden ${className}`}
      initial={
        reducedMotion
          ? {}
          : {
              opacity: isMobile ? 0.2 : 1,
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
      viewport={{ once: true, amount: 0.04 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 17,
        mass: 0.85,
        restDelta: 0.001,
      }}
    >
      {children}
    </motion.div>
  );
}
