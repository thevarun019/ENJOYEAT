import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotionSafe } from './hooks/useReducedMotionSafe';
import book from './story_book.jpg';
import pond from './story_pond.jpg';
import prep from './story_prep.jpg';
import direct from './story_direct.jpg';
import m5 from './story_m5.png';
import m6 from './story_m6.png';
import sage from './story_sage.png';
import plant from './story_plant.png';
import leafTop from './story_leafTop.png';

/* 1024 x 572 stage matching design; reference pixels converted to cqw */
const u = (n) => `${((n / 1024) * 100).toFixed(4)}cqw`;
const box = (x, y, w, h) => ({
  position: 'absolute',
  left: u(x),
  top: u(y),
  ...(w != null && { width: u(w) }),
  ...(h != null && { height: u(h) }),
});

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600;700&display=swap');
.es-wrap {
  width: 100%;
  background: #EFE7D6;
  overflow: hidden;
  scroll-snap-align: start;
  min-height: 100svh;
  display: flex;
  align-items: center;
}
@media (max-width: 768px) {
  .es-wrap {
    min-height: auto;
    padding: 24px 0;
    display: block;
  }
}
.es-stage {
  position: relative;
  width: 100%;
  aspect-ratio: 1024/572;
  container-type: inline-size;
  overflow: hidden;
  background: #EFE7D6;
  font-family: 'Inter', system-ui, sans-serif;
  color: #3b2c20;
  user-select: none;
}
.es-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
.es-book {
  position: absolute;
  max-width: none;
  pointer-events: none;
  -webkit-mask-image: linear-gradient(to right, transparent 0, #000 10%), linear-gradient(to bottom, transparent 0, #000 10%, #000 90%, transparent 100%);
  -webkit-mask-composite: source-in;
  mask-image: linear-gradient(to right, transparent 0, #000 10%), linear-gradient(to bottom, transparent 0, #000 10%, #000 90%, transparent 100%);
  mask-composite: intersect;
  mix-blend-mode: multiply;
}
.es-thumb {
  display: block;
  width: 100%;
  object-fit: cover;
  border: .16cqw solid #c9a96a;
  border-radius: .6cqw;
  box-shadow: 0 .5cqw 1.1cqw rgba(90,65,30,.18);
  transition: transform .35s ease, box-shadow .35s;
}
.es-thumb:hover {
  transform: scale(1.05);
  box-shadow: 0 1.2cqw 2cqw rgba(90,65,30,.28);
}
`;

const CARDS = [
  { x: 66,  img: pond,   label: 'NATURAL SOURCING',         title: ['NATURAL SOURCING'],         text: 'Grown in the freshwater ponds of Sitamarhi, Bihar.' },
  { x: 252, img: prep,   label: 'TRADITIONAL PREPARATION',  title: ['TRADITIONAL', 'PREPARATION'], text: 'Carefully hand-roasted to preserve natural crunch.' },
  { x: 438, img: direct, label: 'DIRECT TO YOU',            title: ['DIRECT TO YOU'],            text: 'Packed with care and delivered fresh nationwide.' },
];
const W = 160;

export default function EnjoyeatStory() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const reducedMotion = useReducedMotionSafe();

  // Subtle tonal shift on entrance
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start center'],
  });
  const bgTone = useTransform(scrollYProgress, [0, 1], ['#EFE7D6', '#EFE7D6']);

  return (
    <motion.div className="es-wrap" ref={sectionRef} style={{ backgroundColor: bgTone }}>
      <style>{CSS}</style>
      <section className="es-stage" id="our-story" aria-label="Our story">

        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(112deg,rgba(255,255,255,.55) 0%,rgba(255,255,255,0) 38%)', pointerEvents: 'none' }} />

        {/* ── Decorative Items (Washi / Stickers / Leaves: Scale 0 -> 1 + Float) ── */}
        <motion.img
          src={leafTop}
          alt=""
          draggable={false}
          style={{ ...box(696, 86, 42, 23), pointerEvents: 'none' }}
          initial={{ scale: reducedMotion ? 1 : 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
        <motion.img
          src={plant}
          alt=""
          draggable={false}
          style={{ ...box(730, 388, 367, 261), pointerEvents: 'none', filter: 'blur(.15cqw)' }}
          initial={{ scale: reducedMotion ? 1 : 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        />

        {/* Floating Loose Makhana & Sage */}
        <motion.img
          src={m6}
          alt=""
          draggable={false}
          style={box(14, 332, 24, 24)}
          animate={reducedMotion ? { opacity: 1 } : { y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.img
          src={m5}
          alt=""
          draggable={false}
          style={box(398, 508, 18, 18)}
          animate={reducedMotion ? { opacity: 1 } : { y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />
        <motion.img
          src={sage}
          alt=""
          draggable={false}
          style={{ ...box(10, 456, 52, 40), transform: 'rotate(25deg)' }}
          animate={reducedMotion ? { opacity: 1 } : { y: [0, -6, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        />

        {/* ── Section Heading: y: 40 -> 0, opacity: 0 -> 1 (0.8s) ── */}
        <motion.h1
          className="es-serif"
          initial={{ y: reducedMotion ? 0 : 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          style={{
            position: 'absolute',
            left: u(64),
            top: u(102),
            margin: 0,
            fontSize: u(45),
            fontWeight: 600,
            letterSpacing: '.005em',
            lineHeight: 1.1,
            color: '#2b2019',
          }}
        >
          OUR ROOTS IN BIHAR
        </motion.h1>

        <motion.p
          initial={{ y: reducedMotion ? 0 : 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          style={{
            position: 'absolute',
            left: u(64),
            top: u(158),
            margin: 0,
            width: u(520),
            fontSize: u(15.2),
            lineHeight: u(21),
          }}
        >
          Bringing you the sacred goodness of Sattvik Makhana,<br />straight from the heart of Sitamarhi.
        </motion.p>

        {/* ── Gold Connecting Border Drawing in via scaleX ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeInOut' }}
          style={{
            ...box(226, 321, 426, 0),
            borderTop: `${u(1.2)} solid #c9a96a`,
            transformOrigin: 'left',
            zIndex: 1,
          }}
        />

        {/* ── 3 Timeline Cards: Slide up y: 60 -> 0 with Stagger 0.15s ── */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          {CARDS.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ y: reducedMotion ? 0 : 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: 0.15 * i + 0.12,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              whileHover={reducedMotion ? {} : { y: -8, scale: 1.03 }}
              onMouseEnter={() => setActive(i)}
              style={{
                ...box(c.x, 237, W),
                textAlign: 'center',
                cursor: 'pointer',
                pointerEvents: 'auto',
                zIndex: 2,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  whiteSpace: 'nowrap',
                  fontSize: u(10.4),
                  letterSpacing: '.08em',
                  marginBottom: u(7),
                  fontWeight: 400,
                }}
              >
                {c.label}
              </div>

              <div
                style={{
                  width: '100%',
                  height: u(128),
                  borderRadius: '.6cqw',
                  overflow: 'hidden',
                }}
              >
                <img
                  className="es-thumb"
                  src={c.img}
                  alt={c.label}
                  draggable={false}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>

              <div
                style={{
                  marginTop: u(11),
                  fontSize: u(12.6),
                  fontWeight: 700,
                  lineHeight: u(17),
                  letterSpacing: '.01em',
                }}
              >
                {c.title.map((t) => (
                  <div key={t}>{t}</div>
                ))}
              </div>

              <div
                style={{
                  marginTop: u(5),
                  fontSize: u(11.6),
                  lineHeight: u(16),
                  color: '#4d3d30',
                  opacity: active === i ? 1 : 0.92,
                }}
              >
                {c.text}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Scrapbook Photo: perfectly sized and positioned to match the second reference image ── */}
        <motion.div
          initial={{
            y: reducedMotion ? 0 : 80,
            rotate: reducedMotion ? 0 : -12,
            scale: reducedMotion ? 1 : 0.9,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            rotate: 0,
            scale: 1,
            opacity: 1,
          }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 14,
            delay: 0.2,
          }}
          whileHover={reducedMotion ? {} : { scale: 1.02 }}
          style={{
            ...box(575, 78, 670, 424),
            zIndex: 10,
            cursor: 'pointer',
          }}
        >
          <img
            className="es-book"
            src={book}
            alt="Enjoyeat Story Scrapbook"
            draggable={false}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              mixBlendMode: 'multiply',
            }}
          />
        </motion.div>

      </section>
    </motion.div>
  );
}
