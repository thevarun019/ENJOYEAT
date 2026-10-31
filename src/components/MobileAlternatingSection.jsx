import React from "react";
import { motion } from "framer-motion";
import { useReducedMotionSafe } from "../hooks/useReducedMotionSafe";

/**
 * MobileAlternatingSection:
 * Creates an elegant, punchy alternating entry animation on mobile view:
 * - Direction 'right': section pops up from the right side (x: 45, y: 25 -> 0, 0)
 * - Direction 'left': section pops up from the left side (x: -45, y: 25 -> 0, 0)
 * On desktop (>= 769px), passes through cleanly without interference.
 * One-way safe: triggers on scroll down (viewport: { once: true, amount: 0.15 }),
 * so scrolling up remains natural and unbroken.
 */
export default function MobileAlternatingSection({
  children,
  direction = "right",
  id,
  className = "",
}) {
  const reducedMotion = useReducedMotionSafe();
  const isFromRight = direction === "right";
  const initialX = isFromRight ? 45 : -45;

  return (
    <motion.div
      id={id}
      className={`w-full overflow-hidden ${className}`}
      initial={
        reducedMotion
          ? {}
          : {
              opacity: 0,
              x: initialX,
              y: 28,
              scale: 0.96,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 17,
        mass: 0.85,
        restDelta: 0.001,
      }}
    >
      {children}
    </motion.div>
  );
}
