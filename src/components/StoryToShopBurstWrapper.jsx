import React, { useRef, useState, useEffect } from "react";
import { useScroll } from "framer-motion";
import MakhanaPopcornExplosion from "./MakhanaPopcornExplosion";

/**
 * StoryToShopBurstWrapper:
 * Ensures the Makhana Popcorn Explosion ONLY fires when scrolling DOWN.
 * When scrolling UP, the explosion is completely deactivated/hidden,
 * so the page behaves normally without particles flying backwards across the screen!
 */
export default function StoryToShopBurstWrapper({ children }) {
  const triggerRef = useRef(null);
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          // Only switch if there is meaningful scroll movement
          if (Math.abs(currentY - lastScrollY.current) > 3) {
            setIsScrollingDown(currentY > lastScrollY.current);
            lastScrollY.current = currentY;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Measure scroll progress across the transition zone between Page 2 and Page 3
  const { scrollYProgress } = useScroll({
    target: triggerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={triggerRef} style={{ position: "relative", width: "100%" }}>
      {/* Both sections render naturally with full visibility and interaction */}
      {children}

      {/* Burst explosion: ONLY visible when scrolling DOWN */}
      <div
        style={{
          position: "sticky",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 40,
          overflow: "hidden",
          marginTop: "-100vh",
          opacity: isScrollingDown ? 1 : 0,
          transition: "opacity 0.2s ease-out",
        }}
      >
        <MakhanaPopcornExplosion scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
