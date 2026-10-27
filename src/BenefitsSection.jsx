import React from 'react';
import { motion } from 'framer-motion';
import centerPouch from './assets/benefits-center-pouch.jpg';
import leavesLeft from './assets/shop/leaves-left.png';
import topRight from './assets/shop/top-right.png';
import foliageRight from './assets/shop/foliage-right.png';

const FONT_SERIF = "'Cormorant Garamond', 'Playfair Display', Georgia, serif";
const FONT_SANS  = "'Plus Jakarta Sans', Inter, sans-serif";

/* SVG icons matching the reference */
const LeafIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" width="100%" height="100%">
    <circle cx="20" cy="20" r="20" fill="#e8f0e0"/>
    <path d="M20 30c0-8 7-15 7-15s-7 2-11 7c-2 2.5-2.5 5.5-1.5 8H20z" fill="#6a9a4e"/>
    <path d="M20 30c0-8-7-15-7-15s7 2 11 7c2 2.5 2.5 5.5 1.5 8H20z" fill="#89be65" opacity="0.7"/>
    <path d="M20 18v12" stroke="#5a8240" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const MuscleIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" width="100%" height="100%">
    <circle cx="20" cy="20" r="20" fill="#fef0e0"/>
    <path d="M12 22c0-5 3-8 6-8s4 2 4 4c2-1 4 0 4 3s-3 5-7 5-7-2-7-4z" fill="#e07a3a"/>
    <ellipse cx="23" cy="27" rx="3" ry="4" fill="#c9a882" transform="rotate(-20 23 27)"/>
  </svg>
);
const HeartIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" width="100%" height="100%">
    <circle cx="20" cy="20" r="20" fill="#fde8e8"/>
    <path d="M20 29s-9-6-9-12a5 5 0 0110 0 5 5 0 0110 0c0 6-11 12-11 12z" fill="#e05a6a"/>
    <path d="M20 29s-7-5.5-8.5-10" stroke="#ff7a8a" strokeWidth="1" opacity="0.5" strokeLinecap="round"/>
  </svg>
);
const ScaleIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" width="100%" height="100%">
    <circle cx="20" cy="20" r="20" fill="#f0ede0"/>
    <rect x="19" y="12" width="2" height="16" rx="1" fill="#a08040"/>
    <line x1="12" y1="14" x2="28" y2="14" stroke="#a08040" strokeWidth="1.5" strokeLinecap="round"/>
    <ellipse cx="13" cy="19" rx="4" ry="2.5" fill="#c5af72" stroke="#a08040" strokeWidth="1"/>
    <ellipse cx="27" cy="19" rx="4" ry="2.5" fill="#c5af72" stroke="#a08040" strokeWidth="1"/>
  </svg>
);

const LEFT_CARDS = [
  { Icon: LeafIcon,   title: '100% Natural',              desc: 'Pure and naturally sourced for health.' },
  { Icon: MuscleIcon, title: 'Rich in Protein & Calcium', desc: 'Provides strength and daily natural energy.' },
];
const RIGHT_CARDS = [
  { Icon: HeartIcon, title: 'Heart & Digestion Friendly', desc: 'Low in sodium and bad cholesterol.' },
  { Icon: ScaleIcon, title: 'The Perfect Diet Partner',   desc: 'Zero trans fat, high fiber, gluten-free.' },
];

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      aria-label="The Goodness of Sattvik Makhana"
      style={{
        fontFamily: FONT_SANS,
        background: 'radial-gradient(ellipse at 60% 30%, #FBF7EE 0%, #EDE3CE 55%, #DFD1B4 100%)',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        boxSizing: 'border-box',
        paddingTop: 72, /* navbar height */
      }}
    >
      <style>{CSS}</style>

      {/* ── Decorative foliage ── */}
      <img src={leavesLeft} alt="" aria-hidden className="bn-leaf bn-leaf-l" />
      <img src={topRight}  alt="" aria-hidden className="bn-leaf bn-leaf-r" />

      {/* ── Inner wrapper ── */}
      <div className="bn-wrap">

        {/* ── Header ── */}
        <motion.div
          className="bn-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="bn-title">THE GOODNESS OF<br />SATTVIK MAKHANA</h2>
          <p className="bn-sub">Every handful is packed with natural nutrition to support your active lifestyle.</p>
        </motion.div>

        {/* ── 3-Column diagram ── */}
        <div className="bn-cols">

          {/* LEFT 2 cards */}
          <div className="bn-side bn-side-l">
            {LEFT_CARDS.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="bn-card"
                initial={{ x: -120, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.14 }}
              >
                <div className="bn-icon-wrap"><Icon /></div>
                <div className="bn-card-text">
                  <div className="bn-card-title">{title}</div>
                  <div className="bn-card-desc">{desc}</div>
                </div>
                {/* Right connector */}
                <div className="bn-line bn-line-r" aria-hidden />
              </motion.div>
            ))}
          </div>

          {/* CENTER: pouch on scene */}
          <div className="bn-center">
            {/* 100% SATTVIK badge */}
            <motion.div
              className="bn-badge bn-badge-cream"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.2 }}
              aria-label="100% Sattvik"
            >
              <span style={{ fontSize: '0.7em', display: 'block', letterSpacing: '0.06em' }}>100%</span>
              <span style={{ fontWeight: 700 }}>SATTVIK</span>
            </motion.div>

            {/* NATURAL SOURCING badge */}
            <motion.div
              className="bn-badge bn-badge-gold"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.3 }}
              aria-label="Natural Sourcing"
            >
              <span style={{ fontSize: '0.65em', display: 'block', letterSpacing: '0.06em' }}>NATURAL</span>
              <span style={{ fontWeight: 700 }}>SOURCING</span>
            </motion.div>

            {/* Product images */}
            <motion.div
              className="bn-product-stack"
              initial={{ y: 60, scale: 0.8, opacity: 0 }}
              whileInView={{ y: 0, scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 12, delay: 0.1 }}
            >
              <img src={centerPouch} alt="Enjoyeat Makhana Premium Raw — split open with makhana spilling out" className="bn-pouch-full" draggable={false} />
            </motion.div>
          </div>

          {/* RIGHT 2 cards */}
          <div className="bn-side bn-side-r">
            {RIGHT_CARDS.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="bn-card"
                initial={{ x: 120, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.14 }}
              >
                {/* Left connector */}
                <div className="bn-line bn-line-l" aria-hidden />
                <div className="bn-icon-wrap"><Icon /></div>
                <div className="bn-card-text">
                  <div className="bn-card-title">{title}</div>
                  <div className="bn-card-desc">{desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="bn-bottom" aria-hidden="true">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#3A332A', fontSize: 13 }}>
            <div style={{ width: 20, height: 34, border: '1.5px solid #7A6F55', borderRadius: 99 }} />
            <span>Scroll to Explore</span>
          </div>
          <div style={{ textAlign: 'center', color: '#3A332A' }}>
            <div style={{ fontSize: 12, marginBottom: 2 }}>Next Section</div>
            <div style={{ fontSize: 18 }}>↓</div>
          </div>
          <div style={{ width: 120 }} />
        </div>
      </div>
    </section>
  );
}

const CSS = `
.bn-leaf {
  position: absolute;
  pointer-events: none;
  z-index: 0;
  opacity: 0.5;
}
.bn-leaf-l {
  left: -40px; bottom: 8%;
  width: clamp(100px, 11vw, 190px);
}
.bn-leaf-r {
  right: -20px; top: 72px;
  width: clamp(100px, 11vw, 200px);
}

.bn-wrap {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1380px;
  margin: 0 auto;
  padding: 28px 52px 0;
  flex: 1;
}

.bn-header {
  margin-bottom: 16px;
}
.bn-title {
  font-family: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
  font-size: clamp(26px, 3.6vw, 52px);
  font-weight: 700;
  color: #2A1E17;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: 1.1;
  margin: 0 0 8px;
}
.bn-sub {
  font-size: clamp(13px, 1.1vw, 16px);
  color: #3B3026;
  margin: 0;
  max-width: 500px;
  line-height: 1.55;
}

.bn-cols {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 16px;
  align-items: center;
  flex: 1;
  min-height: 0;
}

/* ── Side card columns ── */
.bn-side {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.bn-side-r { align-items: flex-end; }

.bn-card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
  width: clamp(220px, 24vw, 320px);
  padding: 16px 18px;
  background: rgba(235, 228, 211, 0.75);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255,255,255,0.7);
  border-radius: 14px;
  box-shadow: 0 4px 18px rgba(61,42,31,0.07);
}
.bn-icon-wrap {
  width: clamp(40px, 4.5vw, 58px);
  height: clamp(40px, 4.5vw, 58px);
  flex-shrink: 0;
  border-radius: 50%;
  overflow: visible;
}
.bn-card-title {
  font-weight: 700;
  font-size: clamp(12px, 1.1vw, 15px);
  color: #1E1914;
  line-height: 1.25;
  margin-bottom: 4px;
}
.bn-card-desc {
  font-size: clamp(11px, 0.9vw, 13px);
  color: #3B3026;
  line-height: 1.4;
}

/* Dotted connector lines */
.bn-line {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: clamp(28px, 3vw, 44px);
  height: 2px;
  border-top: 2px dashed #b8a07a;
}
.bn-line::after {
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #b8a07a;
}
.bn-line-r { right: -44px; }
.bn-line-r::after { right: 0; }
.bn-line-l { left: -44px; }
.bn-line-l::after { left: 0; }

/* ── Center product stage ── */
.bn-center {
  position: relative;
  width: clamp(260px, 26vw, 380px);
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.bn-product-stack {
  position: relative;
  width: 100%;
}
.bn-pouch-full {
  width: 100%;
  max-width: 360px;
  display: block;
  margin: 0 auto;
  object-fit: contain;
  border-radius: 8px;
  filter: drop-shadow(0 16px 28px rgba(61,42,31,0.18));
}

/* Badges */
.bn-badge {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 50%;
  font-size: clamp(9px, 0.75vw, 11px);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.3;
  z-index: 10;
  box-shadow: 0 4px 14px rgba(0,0,0,0.16);
  width: clamp(62px, 6.5vw, 88px);
  height: clamp(62px, 6.5vw, 88px);
}
.bn-badge-cream {
  background: #F4EFE0;
  border: 2.5px solid #C5AF82;
  color: #3d2a1f;
  left: 4%;
  top: 18%;
}
.bn-badge-gold {
  background: linear-gradient(135deg, #d4a94e, #9E7B42);
  border: 2.5px solid rgba(255,255,255,0.8);
  color: #fff;
  right: -4%;
  top: -4%;
}

/* Bottom bar */
.bn-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0 18px;
  margin-top: 8px;
}
`;
