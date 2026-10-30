import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotionSafe } from './hooks/useReducedMotionSafe';
import card1 from './assets/benefits/card_1_natural_clean.png';
import card2 from './assets/benefits/card_2_protein_clean.png';
import card3 from './assets/benefits/card_3_heart_clean.png';
import card4 from './assets/benefits/card_4_diet_clean.png';
import centerPouchStage from './assets/benefits/center_pouch_clean.png';

/* 1024 x 572 stage matching HeroSection & EnjoyeatStory architecture */
const u = (n) => `${((n / 1024) * 100).toFixed(4)}cqw`;
const box = (x, y, w, h) => ({
  position: 'absolute',
  left: u(x),
  top: u(y),
  ...(w != null && { width: u(w) }),
  ...(h != null && { height: u(h) }),
});

const FONT_SERIF = "'Cormorant Garamond', 'Playfair Display', Georgia, serif";
const FONT_SANS  = "'Plus Jakarta Sans', Inter, -apple-system, BlinkMacSystemFont, sans-serif";

export default function BenefitsSection() {
  const reducedMotion = useReducedMotionSafe();

  // Smooth luxury deceleration curve (Apple-style cubic-bezier)
  const easeTransition = {
    duration: 0.85,
    ease: [0.16, 1, 0.3, 1],
  };

  return (
    <div className="bn-wrap">
      <style>{CSS}</style>
      <section id="benefits" className="bn-stage" aria-label="The Goodness of Sattvik Makhana">
        {/* Section Header */}
        <motion.div
          style={{ position: 'absolute', left: u(54), top: u(36), zIndex: 2 }}
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={easeTransition}
        >
          <h2
            style={{
              fontFamily: FONT_SERIF,
              fontSize: u(32),
              fontWeight: 700,
              color: '#7A5C2E',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            THE GOODNESS OF SATTVIK MAKHANA
          </h2>
          <p
            style={{
              fontFamily: FONT_SANS,
              fontSize: u(13),
              color: '#5C4A30',
              margin: `${u(6)} 0 0`,
              maxWidth: u(540),
              lineHeight: 1.45,
            }}
          >
            Every handful is packed with natural nutrition to support your active lifestyle.
          </p>
        </motion.div>

        {/* ── High-Precision SVG Connector Lines with Terminal Dots ── */}
        <motion.svg
          viewBox="0 0 1024 572"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1,
          }}
          initial={reducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
        >
          {/* Connector 1: Top-Left Card -> Center Podium */}
          <line
            x1="284"
            y1="212"
            x2="340"
            y2="212"
            stroke="#B8A07A"
            strokeWidth="1.6"
            strokeDasharray="4 3"
          />
          <circle cx="340" cy="212" r="3.5" fill="#B8A07A" />

          {/* Connector 2: Bottom-Left Card -> Center Podium */}
          <line
            x1="284"
            y1="376"
            x2="340"
            y2="376"
            stroke="#B8A07A"
            strokeWidth="1.6"
            strokeDasharray="4 3"
          />
          <circle cx="340" cy="376" r="3.5" fill="#B8A07A" />

          {/* Connector 3: Top-Right Card -> Center Podium */}
          <line
            x1="740"
            y1="212"
            x2="684"
            y2="212"
            stroke="#B8A07A"
            strokeWidth="1.6"
            strokeDasharray="4 3"
          />
          <circle cx="684" cy="212" r="3.5" fill="#B8A07A" />

          {/* Connector 4: Bottom-Right Card -> Center Podium */}
          <line
            x1="740"
            y1="376"
            x2="684"
            y2="376"
            stroke="#B8A07A"
            strokeWidth="1.6"
            strokeDasharray="4 3"
          />
          <circle cx="684" cy="376" r="3.5" fill="#B8A07A" />
        </motion.svg>

        {/* ── Center Stage: Left 2 Cards, Center Pouch, Right 2 Cards ── */}

        {/* LEFT CARD 1: 100% Natural */}
        <motion.div
          style={{ ...box(54, 168, 230, 89), zIndex: 2 }}
          initial={reducedMotion ? {} : { x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ ...easeTransition, delay: 0.1 }}
          whileHover={reducedMotion ? {} : { scale: 1.03, y: -2, transition: { duration: 0.2 } }}
        >
          <img
            src={card1}
            alt="100% Natural"
            draggable={false}
            style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 4px 12px rgba(60,40,20,0.08))' }}
          />
        </motion.div>

        {/* LEFT CARD 2: Rich in Protein & Calcium */}
        <motion.div
          style={{ ...box(54, 332, 230, 89), zIndex: 2 }}
          initial={reducedMotion ? {} : { x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ ...easeTransition, delay: 0.2 }}
          whileHover={reducedMotion ? {} : { scale: 1.03, y: -2, transition: { duration: 0.2 } }}
        >
          <img
            src={card2}
            alt="Rich in Protein & Calcium"
            draggable={false}
            style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 4px 12px rgba(60,40,20,0.08))' }}
          />
        </motion.div>

        {/* CENTER POUCH ON WOOD SLICE */}
        <motion.div
          style={{ ...box(328, 128, 368, 332), zIndex: 3 }}
          initial={reducedMotion ? {} : { scale: 0.94, opacity: 0, y: 20 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...easeTransition, delay: 0.05 }}
        >
          <img
            src={centerPouchStage}
            alt="Enjoyeat Sattvik Makhana Gourmet Fox Nuts"
            draggable={false}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              mixBlendMode: 'multiply',
              WebkitMaskImage: 'radial-gradient(closest-side, black 75%, transparent 100%)',
              maskImage: 'radial-gradient(closest-side, black 75%, transparent 100%)',
            }}
          />
        </motion.div>

        {/* RIGHT CARD 3: Heart & Digestion Friendly */}
        <motion.div
          style={{ ...box(740, 168, 230, 95), zIndex: 2 }}
          initial={reducedMotion ? {} : { x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ ...easeTransition, delay: 0.15 }}
          whileHover={reducedMotion ? {} : { scale: 1.03, y: -2, transition: { duration: 0.2 } }}
        >
          <img
            src={card3}
            alt="Heart & Digestion Friendly"
            draggable={false}
            style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 4px 12px rgba(60,40,20,0.08))' }}
          />
        </motion.div>

        {/* RIGHT CARD 4: The Perfect Diet Partner */}
        <motion.div
          style={{ ...box(740, 332, 230, 93), zIndex: 2 }}
          initial={reducedMotion ? {} : { x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ ...easeTransition, delay: 0.25 }}
          whileHover={reducedMotion ? {} : { scale: 1.03, y: -2, transition: { duration: 0.2 } }}
        >
          <img
            src={card4}
            alt="The Perfect Diet Partner"
            draggable={false}
            style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 4px 12px rgba(60,40,20,0.08))' }}
          />
        </motion.div>
      </section>
    </div>
  );
}

const CSS = `
.bn-wrap {
  width: 100%;
  background: #EFE7D6;
  overflow: hidden;
  position: relative;
}
.bn-stage {
  position: relative;
  width: 100%;
  aspect-ratio: 1024 / 572;
  container-type: inline-size;
  overflow: hidden;
  user-select: none;
}
`;