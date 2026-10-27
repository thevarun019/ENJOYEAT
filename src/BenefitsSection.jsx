import React from 'react';
import { motion } from 'framer-motion';
import centerPouch from './assets/benefits-center-pouch.jpg';
import leavesLeft from './assets/shop/leaves-left.png';
import topRight from './assets/shop/top-right.png';

const FONT_SERIF = "'Cormorant Garamond', 'Playfair Display', Georgia, serif";
const FONT_SANS  = "'Plus Jakarta Sans', Inter, -apple-system, BlinkMacSystemFont, sans-serif";

import card1 from './assets/benefits/card_1_natural_clean.png';
import card2 from './assets/benefits/card_2_protein_clean.png';
import card3 from './assets/benefits/card_3_heart_clean.png';
import card4 from './assets/benefits/card_4_diet_clean.png';
import centerPouchStage from './assets/benefits/center_pouch_clean.png';

const LEFT_CARDS = [
  { img: card1, title: '100% Natural' },
  { img: card2, title: 'Rich in Protein & Calcium' },
];

const RIGHT_CARDS = [
  { img: card3, title: 'Heart & Digestion Friendly' },
  { img: card4, title: 'The Perfect Diet Partner' },
];

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      aria-label="The Goodness of Sattvik Makhana"
      style={{
        fontFamily: FONT_SANS,
        background: 'radial-gradient(ellipse at 50% 36%, #FAF6EE 0%, #F3EBDB 50%, #E5D7BC 100%)',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        boxSizing: 'border-box',
        paddingTop: 80,
        paddingBottom: 40,
      }}
    >
      <style>{CSS}</style>

      {/* ── Decorative foliage ── */}
      <img src={leavesLeft} alt="" aria-hidden className="bn-leaf bn-leaf-l" />
      <img src={topRight}  alt="" aria-hidden className="bn-leaf bn-leaf-r" />

      {/* ── Inner content container ── */}
      <div className="bn-container">

        {/* ── Section Header ── */}
        <motion.div
          className="bn-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="bn-title">
            THE GOODNESS OF SATTVIK MAKHANA
          </h2>
          <p className="bn-sub">
            Every handful is packed with natural nutrition to support your active lifestyle.
          </p>
        </motion.div>

        {/* ── Main Interactive Layout: Left Cards | Center Product | Right Cards ── */}
        <div className="bn-grid">

          {/* LEFT 2 CARDS */}
          <div className="bn-col bn-col-left">
            {LEFT_CARDS.map(({ img, title }, i) => (
              <motion.div
                key={title}
                className="bn-card-wrapper bn-card-wrapper-left"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="bn-card-img-wrap">
                  <img src={img} alt={title} className="bn-card-graphic" draggable={false} />
                </div>

                {/* Dashed connector line to center image */}
                <div className="bn-connector bn-connector-right" aria-hidden="true">
                  <span className="bn-connector-dot" style={{display:'block',width:8,height:8,borderRadius:'50%',background:'#B8A07A',flexShrink:0}} />
                  <span className="bn-connector-line" style={{display:'block',width:'clamp(24px,2.8vw,42px)',height:0,borderTop:'2px dashed #B8A07A'}} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CENTER: POUCH STAGE & WOOD SLICE */}
          <div className="bn-col bn-col-center">
            <motion.div
              className="bn-product-stage-wrap"
              initial={{ scale: 0.94, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={centerPouchStage}
                alt="Enjoyeat Sattvik Makhana Gourmet Fox Nuts"
                className="bn-center-stage-img"
                draggable={false}
                style={{ border: 'none', outline: 'none', boxShadow: 'none', borderRadius: 0, background: 'transparent' }}
              />
            </motion.div>
          </div>

          {/* RIGHT 2 CARDS */}
          <div className="bn-col bn-col-right">
            {RIGHT_CARDS.map(({ img, title }, i) => (
              <motion.div
                key={title}
                className="bn-card-wrapper bn-card-wrapper-right"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                {/* Dashed connector line from center image */}
                <div className="bn-connector bn-connector-left" aria-hidden="true">
                  <span className="bn-connector-line" style={{display:'block',width:'clamp(24px,2.8vw,42px)',height:0,borderTop:'2px dashed #B8A07A'}} />
                  <span className="bn-connector-dot" style={{display:'block',width:8,height:8,borderRadius:'50%',background:'#B8A07A',flexShrink:0}} />
                </div>

                <div className="bn-card-img-wrap">
                  <img src={img} alt={title} className="bn-card-graphic" draggable={false} />
                </div>
              </motion.div>
            ))}
          </div>

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
  user-select: none;
}
.bn-leaf-l {
  left: -20px;
  bottom: 4%;
  width: clamp(120px, 13vw, 210px);
  opacity: 0.5;
  filter: blur(0.5px);
}
.bn-leaf-r {
  right: 0px;
  top: 70px;
  width: clamp(140px, 14vw, 240px);
  opacity: 0.85;
}

.bn-container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1380px;
  margin: 0 auto;
  padding: 10px 48px;
  display: flex;
  flex-direction: column;
}

.bn-header {
  margin-bottom: 28px;
}
.bn-title {
  font-family: ${FONT_SERIF};
  font-size: clamp(28px, 3.8vw, 52px);
  font-weight: 700;
  color: #7A5C2E;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: 1.12;
  margin: 0 0 10px;
}
.bn-sub {
  font-size: clamp(14px, 1.1vw, 16px);
  color: #5C4A30;
  margin: 0;
  max-width: 540px;
  line-height: 1.5;
  font-weight: 400;
}

/* 3-Column main diagram */
.bn-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  margin-top: 10px;
}

.bn-col {
  display: flex;
  flex-direction: column;
}

.bn-col-left {
  align-items: flex-end;
  gap: 36px;
  flex: 1;
}

.bn-col-right {
  align-items: flex-start;
  gap: 36px;
  flex: 1;
}

.bn-card-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}
.bn-card-wrapper-left {
  flex-direction: row;
}
.bn-card-wrapper-right {
  flex-direction: row;
}

/* Glassmorphism Card matching media_1793110613579.png */
.bn-card {
  width: clamp(280px, 24vw, 360px);
  min-height: 94px;
  padding: 18px 22px;
  background: rgba(247, 242, 232, 0.72);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1.5px solid rgba(255, 255, 255, 0.85);
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(70, 50, 30, 0.04), 0 1px 3px rgba(70, 50, 30, 0.02);
  display: flex;
  align-items: center;
  gap: 16px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.bn-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(70, 50, 30, 0.07);
}

/* Icon wrapper & artwork */
.bn-icon-wrap {
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.bn-card-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  user-select: none;
  filter: drop-shadow(0 4px 10px rgba(60, 40, 20, 0.12));
}

.bn-card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.bn-card-title {
  font-family: ${FONT_SANS};
  font-weight: 700;
  font-size: clamp(14px, 1.1vw, 16px);
  color: #211B14;
  line-height: 1.25;
  margin: 0 0 4px;
}

.bn-card-desc {
  font-family: ${FONT_SANS};
  font-size: clamp(12px, 0.9vw, 13px);
  color: #5C5143;
  line-height: 1.4;
  margin: 0;
  font-weight: 400;
}

/* Connector lines with dots */
.bn-connector {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
}
.bn-connector-line {
  display: block;
  width: clamp(24px, 2.8vw, 42px);
  height: 0;
  border: none;
  border-top: 2px dashed #B8A07A;
  background: none;
}
.bn-connector-dot {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #B8A07A;
  flex-shrink: 0;
  border: none;
}

/* Center product stage */
.bn-col-center {
  position: relative;
  width: clamp(280px, 26vw, 390px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0 8px;
  border: none;
  outline: none;
  background: none;
}
.bn-product-stage-wrap {
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  background: none !important;
}
.bn-center-stage-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  border-radius: 0 !important;
  background: transparent;
  user-select: none;
}

.bn-product-card {
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 16px 36px rgba(50, 35, 20, 0.12);
  border: 1.5px solid rgba(255, 255, 255, 0.85);
  background: #EDE4D1;
  line-height: 0;
}

.bn-product-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  user-select: none;
}

/* Floating round badges */
.bn-floating-badge {
  position: absolute;
  z-index: 10;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
  user-select: none;
}

/* 100% SATTVIK: Cream circle with tan border */
.bn-badge-sattvik {
  width: clamp(74px, 6.8vw, 92px);
  height: clamp(74px, 6.8vw, 92px);
  background: #F4EEDF;
  border: 2px solid #C4AE82;
  color: #2E2218;
  left: -20px;
  top: 14%;
}
.bn-badge-sattvik .bn-badge-sub {
  font-size: clamp(9px, 0.72vw, 11px);
  font-weight: 600;
  letter-spacing: 0.08em;
  line-height: 1.1;
  color: #4D3F33;
}
.bn-badge-sattvik .bn-badge-main {
  font-size: clamp(11px, 0.9vw, 13.5px);
  font-weight: 800;
  letter-spacing: 0.06em;
  line-height: 1.2;
}

/* NATURAL SOURCING: Warm gold circle with crisp white border */
.bn-badge-sourcing {
  width: clamp(76px, 7vw, 96px);
  height: clamp(76px, 7vw, 96px);
  background: linear-gradient(135deg, #BD9347, #A37932);
  border: 2.5px solid #FFFFFF;
  color: #FFFFFF;
  right: -14px;
  top: -12px;
}
.bn-badge-sourcing .bn-badge-sub {
  font-size: clamp(9px, 0.7vw, 10.5px);
  font-weight: 600;
  letter-spacing: 0.08em;
  line-height: 1.1;
  color: rgba(255, 255, 255, 0.9);
}
.bn-badge-sourcing .bn-badge-main {
  font-size: clamp(11px, 0.88vw, 13px);
  font-weight: 800;
  letter-spacing: 0.05em;
  line-height: 1.2;
}

/* Card image graphic */
.bn-card-img-wrap {
  display: flex;
  align-items: center;
}
.bn-card-graphic {
  width: clamp(220px, 22vw, 330px);
  height: auto;
  display: block;
  object-fit: contain;
  user-select: none;
  filter: drop-shadow(0 4px 14px rgba(60, 40, 20, 0.1));
}



@media (max-width: 1024px) {
  .bn-grid {
    flex-direction: column;
    gap: 28px;
  }
  .bn-col-left, .bn-col-right {
    align-items: center;
    width: 100%;
    gap: 16px;
  }
  .bn-connector {
    display: none;
  }
  .bn-floating-badge {
    position: static;
    margin: 8px auto;
  }
  .bn-col-center {
    width: min(340px, 90vw);
  }
}
`;

