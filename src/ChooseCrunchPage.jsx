import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotionSafe } from './hooks/useReducedMotionSafe';

import leftPouch from './assets/shop/left-pouch.png';
import shopCenterScene from './assets/shop/shop-center-scene.png';
import shopBulkSacks from './assets/shop/shop-bulk-sacks.png';

/* Layout authored on 2576 x 1438 canvas matching desktop ratio */
const W = 2576, H = 1438;
const pos = (x, y, w, h) => ({
  left: `${(x / W) * 100}%`,
  top: `${(y / H) * 100}%`,
  ...(w ? { width: `${(w / W) * 100}%` } : {}),
  ...(h ? { height: `${(h / H) * 100}%` } : {}),
});
const fs = (px) => `${(px / W) * 100}cqw`;

const SIZES = ['100g', '500g', '1kg'];

/* Text stretched to the exact width */
function Fit({ x, y, w, size, children, className = '' }) {
  return (
    <svg className={`abs ${className}`} style={pos(x, y, w, size * 1.3)} viewBox={`0 0 ${w} ${size * 1.3}`} aria-label={children}>
      <text x="0" y={size} textLength={w} lengthAdjust="spacingAndGlyphs" fontSize={size}>{children}</text>
    </svg>
  );
}

const HEADLINE_TEXT = "CHOOSE YOUR NATURAL CRUNCH";
const SUBTITLE_TEXT = "Premium raw makhana from Bihar, packed with natural goodness.";

export default function ChooseCrunchPage() {
  const [size, setSize] = useState('100g');
  const reducedMotion = useReducedMotionSafe();

  // Typewriter letter stagger variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.032, // typewriter speed per letter
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.15, ease: 'easeOut' },
    },
  };

  return (
    <div className="pg">
      <style>{css}</style>
      <section id="shop" className="stage" aria-label="Choose your natural crunch">
        
        {/* ── Headline & Subtitle with One-Way (once: true) Typewriter Animation ── */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10 }}>
          <motion.div
            className="abs"
            style={{
              ...pos(165, 175, 1925, 140),
              display: 'flex',
              alignItems: 'baseline',
              flexWrap: 'nowrap',
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 700,
              fontSize: fs(102),
              color: '#3d2a1f',
              letterSpacing: '0.04em',
              lineHeight: 1.1,
              userSelect: 'none',
            }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {HEADLINE_TEXT.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                style={{
                  display: 'inline-block',
                  whiteSpace: char === ' ' ? 'pre' : 'normal',
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            className="abs sub"
            style={{
              ...pos(165, 335, 1100),
              fontSize: fs(40),
              lineHeight: `${fs(54)}`,
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              color: '#554236',
              margin: 0,
            }}
            initial={reducedMotion ? {} : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.75, ease: 'easeOut' }}
          >
            {SUBTITLE_TEXT}
          </motion.p>
        </div>

        {/* ── Left Product: One-Way Pop-Up on First Scroll Down ── */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, scale: 0.75, y: 120 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{
            type: 'spring',
            stiffness: 75,
            damping: 18,
            mass: 0.9,
            delay: 0.15,
          }}
          style={{ position: 'absolute', inset: 0, pointerEvents: 'auto', zIndex: 5 }}
        >
          <img
            className="abs fl drop-shadow-[0_20px_25px_rgba(0,0,0,0.25)]"
            style={pos(250, 630, 340)}
            src={leftPouch}
            alt="Premium raw makhana pouch"
            draggable={false}
          />
          <Fit x={180} y={1010} w={480} size={45} className="ttl">PREMIUM RAW MAKHANA</Fit>
          <button className="abs soon" disabled style={{ ...pos(250, 1085, 340, 80), fontSize: fs(34) }}>COMING SOON</button>
          <p className="abs szl" style={{ ...pos(250, 1180, 340), fontSize: fs(32) }}>{SIZES.join(' | ')}</p>
        </motion.div>

        {/* ── Centre Hero Centerpiece: One-Way Pop-Up Bounce on First Scroll Down ── */}
        <motion.div
          className="abs ctr"
          style={{ ...pos(698, 460, 1180), zIndex: 10 }}
          initial={reducedMotion ? {} : { opacity: 0, scale: 0.9, y: 35 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{
            type: 'spring',
            stiffness: 85,
            damping: 15,
            mass: 1.1,
            delay: 0.1,
          }}
          whileHover={reducedMotion ? {} : { scale: 1.025 }}
        >
          <img
            src={shopCenterScene}
            alt="Enjoyeat Makhana Premium Raw"
            draggable={false}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              mixBlendMode: 'multiply',
              WebkitMaskImage: 'radial-gradient(closest-side, black 75%, transparent 100%)',
              maskImage: 'radial-gradient(closest-side, black 75%, transparent 100%)',
            }}
          />
        </motion.div>

        {/* ── Right Product: One-Way Pop-Up on First Scroll Down ── */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, scale: 0.75, y: 120 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{
            type: 'spring',
            stiffness: 75,
            damping: 18,
            mass: 0.9,
            delay: 0.25,
          }}
          style={{ position: 'absolute', inset: 0, pointerEvents: 'auto', zIndex: 5 }}
        >
          <img
            className="abs fl slow"
            style={{
              ...pos(1855, 670, 550),
              mixBlendMode: 'multiply',
              WebkitMaskImage: 'radial-gradient(closest-side, black 75%, transparent 100%)',
              maskImage: 'radial-gradient(closest-side, black 75%, transparent 100%)',
            }}
            src={shopBulkSacks}
            alt="Bulk makhana pouches and jute sacks"
            draggable={false}
          />
          <Fit x={1850} y={1010} w={560} size={45} className="ttl">BULK &amp; WHOLESALE MAKHANA</Fit>
          <a className="abs enq" href="#wholesale" style={{ ...pos(1960, 1085, 340, 80), fontSize: fs(34) }}>ENQUIRE NOW</a>
        </motion.div>

      </section>
    </div>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@300;400;500;600&family=Inter+Tight:wght@500;600&display=swap');
.pg {
  --ink: #3d2a1f;
  --gold: #b8914a;
  font-family: Inter, sans-serif;
  color: var(--ink);
  background: #EFE7D6;
  overflow-x: hidden;
  min-height: 100svh;
  display: flex;
  align-items: center;
  scroll-snap-align: start;
}
@media (max-width: 768px) {
  .pg {
    min-height: auto;
    padding: 24px 0;
    display: block;
  }
}
.pg * { box-sizing: border-box; }
.stage {
  position: relative;
  width: 100%;
  aspect-ratio: 2576 / 1438;
  container-type: inline-size;
  overflow: hidden;
  user-select: none;
}
.abs { position: absolute; margin: 0; }
img.abs { display: block; height: auto; }
.ttl {
  font-family: 'Inter Tight', Inter, sans-serif;
  font-weight: 600;
  fill: var(--ink);
  overflow: visible;
}
.soon, .enq {
  display: grid;
  place-items: center;
  border: 0;
  border-radius: .25em;
  color: #fff;
  font-weight: 400;
  font-family: Inter, sans-serif;
  text-decoration: none;
  transition: transform .25s, box-shadow .25s;
}
.soon { background: #665a53; cursor: not-allowed; }
.enq { background: #7e8458; cursor: pointer; }
.enq:hover { transform: translateY(-4px); box-shadow: 0 1.2cqw 2cqw #3d2a1f33; }
.szl { text-align: center; font-weight: 300; white-space: nowrap; }
.ctr { z-index: 2; }

@media(prefers-reduced-motion: reduce) {
  .pg * { animation: none !important; transition: none !important; }
}
`;
