import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotionSafe } from './hooks/useReducedMotionSafe';
import card1 from './assets/benefits/card_1_natural_clean.png';
import card2 from './assets/benefits/card_2_protein_clean.png';
import card3 from './assets/benefits/card_3_heart_clean.png';
import card4 from './assets/benefits/card_4_diet_clean.png';
import centerPouchStage from './assets/benefits/center_pouch_clean.png';

/* Desktop Canvas: 1024 x 572 */
const uD = (n) => `${((n / 1024) * 100).toFixed(4)}cqw`;
const boxD = (x, y, w, h) => ({
  position: 'absolute',
  left: uD(x),
  top: uD(y),
  ...(w != null && { width: uD(w) }),
  ...(h != null && { height: uD(h) }),
});

/* Mobile Canvas: 480 x 420 matching Video 2 mobile proportions */
const uM = (n) => `${((n / 480) * 100).toFixed(4)}cqw`;
const boxM = (x, y, w, h) => ({
  position: 'absolute',
  left: uM(x),
  top: uM(y),
  ...(w != null && { width: uM(w) }),
  ...(h != null && { height: uM(h) }),
});

const FONT_SERIF = "'Cormorant Garamond', 'Playfair Display', Georgia, serif";
const FONT_SANS  = "'Plus Jakarta Sans', Inter, -apple-system, BlinkMacSystemFont, sans-serif";

export default function BenefitsSection() {
  const reducedMotion = useReducedMotionSafe();

  const easeTransition = {
    duration: 0.85,
    ease: [0.16, 1, 0.3, 1],
  };

  return (
    <div className="bn-wrap">
      <style>{CSS}</style>

      {/* ══════════════════════════════════════════════════════════════════
          DESKTOP VIEW (width >= 769px): 1024 x 572 Wide Canvas
      ══════════════════════════════════════════════════════════════════ */}
      <section id="benefits" className="bn-stage bn-desktop-only" aria-label="The Goodness of Sattvik Makhana">
        {/* Section Header */}
        <motion.div
          style={{ position: 'absolute', left: uD(54), top: uD(36), zIndex: 2 }}
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={easeTransition}
        >
          <h2
            style={{
              fontFamily: FONT_SERIF,
              fontSize: uD(32),
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
              fontSize: uD(13),
              color: '#5C4A30',
              margin: `${uD(6)} 0 0`,
              maxWidth: uD(540),
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
          <line x1="284" y1="212" x2="340" y2="212" stroke="#B8A07A" strokeWidth="1.6" strokeDasharray="4 3" />
          <circle cx="340" cy="212" r="3.5" fill="#B8A07A" />

          {/* Connector 2: Bottom-Left Card -> Center Podium */}
          <line x1="284" y1="376" x2="340" y2="376" stroke="#B8A07A" strokeWidth="1.6" strokeDasharray="4 3" />
          <circle cx="340" cy="376" r="3.5" fill="#B8A07A" />

          {/* Connector 3: Top-Right Card -> Center Podium */}
          <line x1="740" y1="212" x2="684" y2="212" stroke="#B8A07A" strokeWidth="1.6" strokeDasharray="4 3" />
          <circle cx="684" cy="212" r="3.5" fill="#B8A07A" />

          {/* Connector 4: Bottom-Right Card -> Center Podium */}
          <line x1="740" y1="376" x2="684" y2="376" stroke="#B8A07A" strokeWidth="1.6" strokeDasharray="4 3" />
          <circle cx="684" cy="376" r="3.5" fill="#B8A07A" />
        </motion.svg>

        {/* ── Center Stage: Left 2 Cards, Center Pouch, Right 2 Cards ── */}

        {/* LEFT CARD 1: 100% Natural */}
        <motion.div
          style={{ ...boxD(54, 168, 230, 89), zIndex: 2 }}
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
          style={{ ...boxD(54, 332, 230, 89), zIndex: 2 }}
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
          style={{ ...boxD(328, 128, 368, 332), zIndex: 3 }}
          initial={reducedMotion ? {} : { scale: 0.94, opacity: 0, y: 20 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
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
          style={{ ...boxD(740, 168, 230, 95), zIndex: 2 }}
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
          style={{ ...boxD(740, 332, 230, 93), zIndex: 2 }}
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


      {/* ══════════════════════════════════════════════════════════════════
          MOBILE VIEW (width <= 768px): 480 x 420 Proportional Mobile Stage
          Matches Video 2 phone layout with generous vertical space & crisp text!
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bn-stage bn-mobile-only" aria-label="The Goodness of Sattvik Makhana">
        {/* Mobile Section Header */}
        <motion.div
          style={{ position: 'absolute', left: uM(18), top: uM(14), right: uM(18), zIndex: 2 }}
          initial={reducedMotion ? {} : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={easeTransition}
        >
          <h2
            style={{
              fontFamily: FONT_SERIF,
              fontSize: uM(22),
              fontWeight: 700,
              color: '#7A5C2E',
              textTransform: 'uppercase',
              letterSpacing: '0.03em',
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            THE GOODNESS OF SATTVIK MAKHANA
          </h2>
          <p
            style={{
              fontFamily: FONT_SANS,
              fontSize: uM(11.5),
              color: '#5C4A30',
              margin: `${uM(4)} 0 0`,
              lineHeight: 1.4,
            }}
          >
            Every handful is packed with natural nutrition to support your active lifestyle.
          </p>
        </motion.div>

        {/* Mobile SVG Connector Lines with Terminal Dots */}
        <motion.svg
          viewBox="0 0 480 420"
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
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
        >
          {/* Mobile Connector 1: Top-Left Card -> Center */}
          <line x1="145" y1="130" x2="168" y2="130" stroke="#B8A07A" strokeWidth="1.4" strokeDasharray="3 2.5" />
          <circle cx="168" cy="130" r="2.8" fill="#B8A07A" />

          {/* Mobile Connector 2: Bottom-Left Card -> Center */}
          <line x1="145" y1="240" x2="168" y2="240" stroke="#B8A07A" strokeWidth="1.4" strokeDasharray="3 2.5" />
          <circle cx="168" cy="240" r="2.8" fill="#B8A07A" />

          {/* Mobile Connector 3: Top-Right Card -> Center */}
          <line x1="335" y1="130" x2="312" y2="130" stroke="#B8A07A" strokeWidth="1.4" strokeDasharray="3 2.5" />
          <circle cx="312" cy="130" r="2.8" fill="#B8A07A" />

          {/* Mobile Connector 4: Bottom-Right Card -> Center */}
          <line x1="335" y1="240" x2="312" y2="240" stroke="#B8A07A" strokeWidth="1.4" strokeDasharray="3 2.5" />
          <circle cx="312" cy="240" r="2.8" fill="#B8A07A" />
        </motion.svg>

        {/* ── Mobile Center Stage: Left 2 Cards, Center Pouch, Right 2 Cards ── */}

        {/* MOBILE LEFT CARD 1: 100% Natural */}
        <motion.div
          style={{ ...boxM(14, 102, 132, 58), zIndex: 2 }}
          initial={reducedMotion ? {} : { x: -45, y: 15, opacity: 0, scale: 0.94 }}
          whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{
            type: 'spring',
            stiffness: 85,
            damping: 15,
            delay: 0.08,
          }}
        >
          <img
            src={card1}
            alt="100% Natural"
            draggable={false}
            style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 3px 8px rgba(60,40,20,0.08))' }}
          />
        </motion.div>

        {/* MOBILE LEFT CARD 2: Rich in Protein & Calcium */}
        <motion.div
          style={{ ...boxM(14, 212, 132, 58), zIndex: 2 }}
          initial={reducedMotion ? {} : { x: -45, y: 15, opacity: 0, scale: 0.94 }}
          whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{
            type: 'spring',
            stiffness: 85,
            damping: 15,
            delay: 0.18,
          }}
        >
          <img
            src={card2}
            alt="Rich in Protein & Calcium"
            draggable={false}
            style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 3px 8px rgba(60,40,20,0.08))' }}
          />
        </motion.div>

        {/* MOBILE CENTER POUCH ON WOOD SLICE */}
        <motion.div
          style={{ ...boxM(152, 85, 176, 215), zIndex: 3 }}
          initial={reducedMotion ? {} : { scale: 0.88, opacity: 0, y: 24 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{
            type: 'spring',
            stiffness: 90,
            damping: 16,
            delay: 0.02,
          }}
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

        {/* MOBILE RIGHT CARD 3: Heart & Digestion Friendly */}
        <motion.div
          style={{ ...boxM(334, 102, 132, 60), zIndex: 2 }}
          initial={reducedMotion ? {} : { x: 45, y: 15, opacity: 0, scale: 0.94 }}
          whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{
            type: 'spring',
            stiffness: 85,
            damping: 15,
            delay: 0.12,
          }}
        >
          <img
            src={card3}
            alt="Heart & Digestion Friendly"
            draggable={false}
            style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 3px 8px rgba(60,40,20,0.08))' }}
          />
        </motion.div>

        {/* MOBILE RIGHT CARD 4: The Perfect Diet Partner */}
        <motion.div
          style={{ ...boxM(334, 212, 132, 59), zIndex: 2 }}
          initial={reducedMotion ? {} : { x: 45, y: 15, opacity: 0, scale: 0.94 }}
          whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{
            type: 'spring',
            stiffness: 85,
            damping: 15,
            delay: 0.22,
          }}
        >
          <img
            src={card4}
            alt="The Perfect Diet Partner"
            draggable={false}
            style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 3px 8px rgba(60,40,20,0.08))' }}
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
  user-select: none;
}

/* Desktop layout (width > 768px) */
@media (min-width: 769px) {
  .bn-desktop-only {
    display: block;
    aspect-ratio: 1024 / 572;
    container-type: inline-size;
    overflow: hidden;
  }
  .bn-mobile-only {
    display: none !important;
  }
}

/* Mobile layout (width <= 768px) */
@media (max-width: 768px) {
  .bn-desktop-only {
    display: none !important;
  }
  .bn-mobile-only {
    display: block;
    aspect-ratio: 480 / 380;
    container-type: inline-size;
    overflow: hidden;
    padding: 12px 0;
  }
}
`;