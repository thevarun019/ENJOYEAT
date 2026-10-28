import { useReducedMotion } from 'framer-motion';

/**
 * Custom hook to safely determine whether user prefers reduced motion
 * or if device is a constrained mobile viewport.
 */
export function useReducedMotionSafe() {
  const shouldReduceMotion = useReducedMotion();
  return Boolean(shouldReduceMotion);
}

