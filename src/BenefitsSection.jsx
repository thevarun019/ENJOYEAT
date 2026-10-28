import React from 'react';
import { motion } from 'framer-motion';
import leavesLeft from './assets/shop/leaves-left.png';
import topRight from './assets/shop/top-right.png';
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
  return (
    <div className="bn-wrap">
      <style>{CSS}</style>
      <section id="benefits" className="bn-stage" aria-label="The Goodness of Sattvik Makhana">
        {/* Background Foliage */}
        {/* Rectangular corner foliage removed to prevent square box borders */}

        {/* Section Header */}
        <motion.div
          style={{ position: 'absolute', left: u(54), top: u(36), zIndex: 2 }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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

        {/* ── Center Stage: Left 2 Cards, Center Pouch, Right 2 Cards ── */}

        {/* LEFT CARD 1: 100% Natural */}
        <motion.div
          style={box(54, 168, 230, 89)}
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img
            src={card1}
            alt="100% Natural"
            draggable={false}
            style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 4px 12px rgba(60,40,20,0.1))' }}
          />
        </motion.div>
        {/* Connector line 1 */}
        <div style={{ ...box(284, 212, 54, 0), borderTop: `${u(1.6)} dashed #B8A07A`, zIndex: 1 }} />
        <div style={{ ...box(334, 209, 7, 7), borderRadius: '50%', background: '#B8A07A', zIndex: 1 }} />

        {/* LEFT CARD 2: Rich in Protein & Calcium */}
        <motion.div
          style={box(54, 332, 230, 89)}
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <img
            src={card2}
            alt="Rich in Protein & Calcium"
            draggable={false}
            style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 4px 12px rgba(60,40,20,0.1))' }}
          />
        </motion.div>
        {/* Connector line 2 */}
        <div style={{ ...box(284, 376, 54, 0), borderTop: `${u(1.6)} dashed #B8A07A`, zIndex: 1 }} />
        <div style={{ ...box(334, 373, 7, 7), borderRadius: '50%', background: '#B8A07A', zIndex: 1 }} />

        {/* CENTER POUCH ON WOOD SLICE */}
        <motion.div
          style={{ ...box(328, 128, 368, 332), zIndex: 3 }}
          initial={{ scale: 0.94, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
        {/* Connector line 3 */}
        <div style={{ ...box(682, 209, 7, 7), borderRadius: '50%', background: '#B8A07A', zIndex: 1 }} />
        <div style={{ ...box(686, 212, 54, 0), borderTop: `${u(1.6)} dashed #B8A07A`, zIndex: 1 }} />
        <motion.div
          style={box(740, 168, 230, 95)}
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <img
            src={card3}
            alt="Heart & Digestion Friendly"
            draggable={false}
            style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 4px 12px rgba(60,40,20,0.1))' }}
          />
        </motion.div>

        {/* RIGHT CARD 4: The Perfect Diet Partner */}
        {/* Connector line 4 */}
        <div style={{ ...box(682, 373, 7, 7), borderRadius: '50%', background: '#B8A07A', zIndex: 1 }} />
        <div style={{ ...box(686, 376, 54, 0), borderTop: `${u(1.6)} dashed #B8A07A`, zIndex: 1 }} />
        <motion.div
          style={box(740, 332, 230, 93)}
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img
            src={card4}
            alt="The Perfect Diet Partner"
            draggable={false}
            style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 4px 12px rgba(60,40,20,0.1))' }}
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
