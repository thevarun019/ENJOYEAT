import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useReducedMotionSafe } from './hooks/useReducedMotionSafe';
import pouchGreen from './assets/hero/pouchGreen.png';
import pouchGold from './assets/hero/pouchGold.png';
import pouchKraft from './assets/hero/pouchKraft.png';
import el_bigL from './assets/hero/el_bigL.png';
import el_bigR from './assets/hero/el_bigR.png';
import el_m1 from './assets/hero/el_m1.png';
import el_m2 from './assets/hero/el_m2.png';
import el_m3 from './assets/hero/el_m3.png';
import el_m4 from './assets/hero/el_m4.png';
import el_m5 from './assets/hero/el_m5.png';
import el_m6 from './assets/hero/el_m6.png';
import el_m7 from './assets/hero/el_m7.png';
import el_m8 from './assets/hero/el_m8.png';
import el_m9 from './assets/hero/el_m9.png';
import el_basil from './assets/hero/el_basil.png';
import el_sage from './assets/hero/el_sage.png';
import el_leafR from './assets/hero/el_leafR.png';
import el_map from './assets/hero/el_map.png';
import el_bowl from './assets/hero/el_bowl.png';
import el_m11 from './assets/hero/el_m11.png';
import el_m10 from './assets/hero/el_m10.png';

/* 1024 x 559 stage matching design; reference pixels converted to cqw so it scales seamlessly */
const u = (n) => `${((n / 1024) * 100).toFixed(4)}cqw`;
const box = (x, y, w, h) => ({
  position: 'absolute',
  left: u(x),
  top: u(y),
  ...(w != null && { width: u(w) }),
  ...(h != null && { height: u(h) }),
});

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Great+Vibes&family=Inter:wght@400;500;600&display=swap');
.ee-wrap {
  width: 100%;
  background: #EFE7D6;
  overflow: hidden;
  padding-top: 72px;
  scroll-snap-align: start;
  min-height: 100svh;
  display: flex;
  align-items: center;
}
.ee-stage {
  position: relative;
  width: 100%;
  aspect-ratio: 1024/559;
  container-type: inline-size;
  background: #EFE7D6;
  font-family: 'Inter', system-ui, sans-serif;
  color: #2b2019;
  user-select: none;
}
.ee-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
.ee-script { font-family: 'Great Vibes', cursive; }
.ee-link { position: absolute; white-space: nowrap; cursor: pointer; transition: color .2s; text-decoration: none; color: inherit; }
.ee-link:hover { color: #4f6b52; }
.ee-btn {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4f6b52;
  color: #fff;
  cursor: pointer;
  transition: background .2s, transform .2s;
  border: 0;
  font-family: inherit;
  text-decoration: none;
}
.ee-btn:hover { background: #42594a; transform: translateY(-1px); }
.ee-scene { position: absolute; inset: 0; perspective: 1200px; }
`;

const DECO = {
  bigL:  { img: el_bigL,  x: 6.67,   y: 151.67, w: 95.67, h: 105   },
  bigR:  { img: el_bigR,  x: 919,    y: 143,    w: 94.33, h: 91.33 },
  m1:    { img: el_m1,    x: 175,    y: 236,    w: 30,    h: 34.67 },
  m2:    { img: el_m2,    x: 242.33, y: 277.67, w: 38.33, h: 40.33 },
  m3:    { img: el_m3,    x: 185.67, y: 315,    w: 34.33, h: 31.33 },
  m4:    { img: el_m4,    x: 289.67, y: 427,    w: 54,    h: 40    },
  m5:    { img: el_m5,    x: 768.33, y: 249.67, w: 23.67, h: 24    },
  m6:    { img: el_m6,    x: 752.67, y: 301,    w: 32.33, h: 32.33 },
  m7:    { img: el_m7,    x: 796.67, y: 320.67, w: 28,    h: 25.33 },
  m8:    { img: el_m8,    x: 671.33, y: 391.33, w: 31,    h: 30    },
  m9:    { img: el_m9,    x: 716,    y: 369.67, w: 24.67, h: 24.67 },
  basil: { img: el_basil, x: 97.33,  y: 360.67, w: 52.67, h: 51.33 },
  sage:  { img: el_sage,  x: 172.67, y: 424.33, w: 52,    h: 35.67 },
  leafR: { img: el_leafR, x: 866,    y: 275,    w: 53,    h: 55    },
  map:   { img: el_map,   x: 241.67, y: 352,    w: 59.33, h: 44.33 },
  m10:   { img: el_m10,   x: 690.67, y: 456.33, w: 39.67, h: 30.33 },
  m11:   { img: el_m11,   x: 742,    y: 458,    w: 28,    h: 28    },
  bowl:  { img: el_bowl,  x: 724,    y: 366,    w: 160,   h: 121   },
};

const FLOATERS = {
  bigL:  [0,   9],
  bigR:  [1.2, 8],
  m1:    [0.4, 6],
  m2:    [1.1, 6],
  m3:    [0.7, 5],
  m4:    [1.6, 7],
  m5:    [0.3, 5],
  m6:    [1.3, 6],
  m7:    [0.9, 5],
  m8:    [1.9, 6],
  m9:    [1.4, 5],
  m10:   [0.8, 6],
  basil: [0.6, 7],
  sage:  [1.2, 7],
  leafR: [0.2, 7],
};

function Deco({ id, style = {} }) {
  const item = DECO[id];
  const floater = FLOATERS[id];

  if (floater) {
    return (
      <motion.img
        src={item.img}
        alt=""
        draggable={false}
        style={{ ...box(item.x, item.y, item.w, item.h), ...style }}
        animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: floater[0],
        }}
      />
    );
  }

  return (
    <img
      src={item.img}
      alt=""
      draggable={false}
      style={{ ...box(item.x, item.y, item.w, item.h), ...style }}
    />
  );
}

export default function HeroSection() {
  const sectionRef = useRef(null);
  const [kraftLanded, setKraftLanded] = useState(false);
  const reducedMotion = useReducedMotionSafe();

  // Scroll Exit Progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Spring smoothing for 60fps natural feel
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // Exit transforms (Page 1 -> Page 2)
  const isExiting = useTransform(smoothScroll, (v) => v > 0.8);

  // 1. Staggered Pouches Exit:
  // gold [0, 0.6], green [0, 0.5], kraft [0, 0.55]
  const greenExitY = useTransform(smoothScroll, [0, 0.5], [0, -140]);
  const greenExitScale = useTransform(smoothScroll, [0, 0.5], [1, 0.92]);
  const greenExitOpacity = useTransform(smoothScroll, [0, 0.5], [1, 0]);

  const goldExitY = useTransform(smoothScroll, [0, 0.6], [0, -140]);
  const goldExitScale = useTransform(smoothScroll, [0, 0.6], [1, 0.92]);
  const goldExitOpacity = useTransform(smoothScroll, [0, 0.6], [1, 0]);

  const kraftExitY = useTransform(smoothScroll, [0, 0.55], [0, -140]);
  const kraftExitScale = useTransform(smoothScroll, [0, 0.55], [1, 0.92]);
  const kraftExitOpacity = useTransform(smoothScroll, [0, 0.55], [1, 0]);

  // 2. Loose Makhana & Leaves Exit (Faster for parallax depth):
  const decoExitY = useTransform(smoothScroll, [0, 0.6], [0, -240]);
  const decoExitOpacity = useTransform(smoothScroll, [0, 0.5], [1, 0]);

  // 3. Heading & Buttons Exit [0.1, 0.7]:
  const textExitY = useTransform(smoothScroll, [0.1, 0.7], [0, -60]);
  const textExitOpacity = useTransform(smoothScroll, [0.1, 0.7], [1, 0]);

  // 4. Terracotta Bowl Exit [0.2, 0.8] (Sinks downward):
  const bowlExitY = useTransform(smoothScroll, [0.2, 0.8], [0, 80]);
  const bowlExitOpacity = useTransform(smoothScroll, [0.2, 0.8], [1, 0]);

  // Arrow visibility (fades out as section exits)
  const arrowOpacity = useTransform(smoothScroll, [0, 0.25], [1, 0]);

  return (
    <div className="ee-wrap" ref={sectionRef}>
      <style>{CSS}</style>
      <section id="hero" className="ee-stage" aria-label="Enjoyeat Makhana hero">

        {/* ── Background Decorative Elements (Parallax Exit Wrapper) ── */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            y: reducedMotion ? 0 : decoExitY,
            opacity: decoExitOpacity,
            pointerEvents: isExiting ? 'none' : 'auto',
          }}
        >
          {Object.keys(DECO)
            .filter((id) => id !== 'bowl' && id !== 'm11')
            .map((id) => (
              <Deco key={id} id={id} />
            ))}
        </motion.div>

        {/* Radial ground shadows under pouches */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: goldExitOpacity,
            pointerEvents: 'none',
          }}
        >
          {[[313, 128], [446, 134], [590, 125]].map(([x, w]) => (
            <div
              key={x}
              style={{
                ...box(x, 458, w, 14),
                background: 'radial-gradient(ellipse, rgba(70,55,30,.28), transparent 70%)',
              }}
            />
          ))}
        </motion.div>

        {/* ── 3D Interactive Pouches Scene (Independent Exit Wrappers) ── */}
        <div
          className="ee-scene"
          style={{
            position: 'absolute',
            inset: 0,
            perspective: '1200px',
            transformStyle: 'preserve-3d',
            pointerEvents: isExiting ? 'none' : 'auto',
          }}
        >
          {/* 1. Left Green Pouch Exit Wrapper */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              y: reducedMotion ? 0 : greenExitY,
              scale: reducedMotion ? 1 : greenExitScale,
              opacity: greenExitOpacity,
              transformStyle: 'preserve-3d',
              pointerEvents: 'none',
            }}
          >
            {/* Step 1 Inner Motion */}
            <motion.div
              style={{
                ...box(313.5, 270, 131, 186),
                zIndex: 10,
                cursor: 'pointer',
                pointerEvents: 'auto',
                transformStyle: 'preserve-3d',
              }}
              initial={{ opacity: 0, y: 90, rotate: 0, scale: 0.85 }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: -8,
                scale: 1,
              }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                type: 'spring',
                stiffness: 70,
                damping: 14,
                delay: 0.25,
              }}
              whileHover={{
                scale: 1.08,
                rotate: 0,
                rotateY: 15,
                y: -15,
                zIndex: 40,
                transition: { type: 'spring', stiffness: 220, damping: 15 },
              }}
            >
              <motion.img
                src={pouchGreen}
                alt="Enjoyeat Makhana Green Pouch"
                draggable={false}
                className="w-full h-full object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.28)]"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3.6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.25,
                }}
              />
            </motion.div>
          </motion.div>

          {/* 2. Right Kraft Pouch Exit Wrapper */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              y: reducedMotion ? 0 : kraftExitY,
              scale: reducedMotion ? 1 : kraftExitScale,
              opacity: kraftExitOpacity,
              transformStyle: 'preserve-3d',
              pointerEvents: 'none',
            }}
          >
            {/* Step 1 Inner Motion */}
            <motion.div
              style={{
                ...box(577, 270, 133, 186),
                zIndex: 10,
                cursor: 'pointer',
                pointerEvents: 'auto',
                transformStyle: 'preserve-3d',
              }}
              initial={{ opacity: 0, y: 90, rotate: 0, scale: 0.85 }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: 8,
                scale: 1,
              }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                type: 'spring',
                stiffness: 70,
                damping: 14,
                delay: 0.4,
              }}
              onAnimationComplete={() => setKraftLanded(true)}
              whileHover={{
                scale: 1.08,
                rotate: 0,
                rotateY: -15,
                y: -15,
                zIndex: 40,
                transition: { type: 'spring', stiffness: 220, damping: 15 },
              }}
            >
              <motion.img
                src={pouchKraft}
                alt="Enjoyeat Makhana Kraft Pouch"
                draggable={false}
                className="w-full h-full object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.28)]"
                animate={{ y: [0, -9, 0] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.8,
                }}
              />
            </motion.div>
          </motion.div>

          {/* 3. Center Gold Pouch Exit Wrapper */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              y: reducedMotion ? 0 : goldExitY,
              scale: reducedMotion ? 1 : goldExitScale,
              opacity: goldExitOpacity,
              transformStyle: 'preserve-3d',
              pointerEvents: 'none',
            }}
          >
            {/* Step 1 Inner Motion */}
            <motion.div
              style={{
                ...box(446, 263, 136, 192),
                zIndex: 20,
                cursor: 'pointer',
                pointerEvents: 'auto',
                transformStyle: 'preserve-3d',
              }}
              initial={{ opacity: 0, y: 100, scale: 0.85 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1.06,
              }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                type: 'spring',
                stiffness: 75,
                damping: 13,
                delay: 0.1,
              }}
              whileHover={{
                scale: 1.14,
                rotateY: -12,
                y: -15,
                zIndex: 40,
                transition: { type: 'spring', stiffness: 220, damping: 15 },
              }}
            >
              <motion.img
                src={pouchGold}
                alt="Enjoyeat Makhana Gold Pouch"
                draggable={false}
                className="w-full h-full object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.28)]"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.4,
                }}
              />
            </motion.div>
          </motion.div>

          {/* ── "Hover to rotate" Curved Arrow (Animated after Kraft pouch lands) ── */}
          {kraftLanded && (
            <motion.div
              style={{
                ...box(612, 230, 110, 48),
                zIndex: 35,
                pointerEvents: 'none',
                opacity: arrowOpacity,
              }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: [1, 1.06, 1] }}
              transition={{
                opacity: { duration: 0.4 },
                scale: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: u(4) }}>
                <svg width="34" height="26" viewBox="0 0 44 32" fill="none">
                  <motion.path
                    d="M6 24 C14 8, 30 6, 38 18"
                    stroke="#8C6D3B"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.9, ease: 'easeInOut' }}
                  />
                  <motion.polyline
                    points="31,18 38,18 38,11"
                    stroke="#8C6D3B"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.3 }}
                  />
                </svg>
                <motion.span
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.4 }}
                  style={{
                    fontSize: u(9.8),
                    fontWeight: 600,
                    letterSpacing: '.05em',
                    color: '#8C6D3B',
                    whiteSpace: 'nowrap',
                    textTransform: 'uppercase',
                  }}
                >
                  Hover to rotate
                </motion.span>
              </div>
            </motion.div>
          )}
        </div>

        {/* ── Terracotta Bowl Exit Wrapper (Sinks downward over [0.2, 0.8]) ── */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            y: reducedMotion ? 0 : bowlExitY,
            opacity: bowlExitOpacity,
            zIndex: 25,
            pointerEvents: isExiting ? 'none' : 'auto',
          }}
        >
          <div
            style={{
              ...box(770, 470, 120, 14),
              background: 'radial-gradient(ellipse, rgba(70,55,30,.28), transparent 70%)',
            }}
          />
          <Deco id="bowl" />
          <Deco id="m11" />
        </motion.div>

        {/* ── Headings & CTA Buttons Exit Wrapper [0.1, 0.7] ── */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            y: reducedMotion ? 0 : textExitY,
            opacity: textExitOpacity,
            pointerEvents: isExiting ? 'none' : 'auto',
          }}
        >
          <h1
            className="ee-serif"
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: u(84),
              margin: 0,
              textAlign: 'center',
              fontSize: u(37),
              fontWeight: 600,
              letterSpacing: '.012em',
              lineHeight: 1.15,
            }}
          >
            HEALTHY SNACKING, HAPPIER LIVING
          </h1>
          <div
            className="ee-script"
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: u(121),
              textAlign: 'center',
              fontSize: u(41),
              lineHeight: 1.2,
            }}
          >
            and Sattvik Makhana
          </div>
          <p
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: u(171),
              margin: 0,
              textAlign: 'center',
              fontSize: u(10.9),
            }}
          >
            Experience the pure goodness of authentic premium raw makhana, sourced fresh and made for mindful everyday snacking.
          </p>

          {/* Call-to-action buttons */}
          <a
            href="#shop"
            className="ee-btn"
            style={{
              ...box(343, 203, 196, 35),
              borderRadius: u(4),
              fontSize: u(11.8),
              fontWeight: 500,
              letterSpacing: '.05em',
            }}
          >
            EXPLORE OUR PRODUCTS
          </a>
          <a
            href="#our-story"
            className="ee-link"
            style={{
              left: u(551),
              top: u(212),
              fontSize: u(13.2),
            }}
          >
            Discover Our Story →
          </a>
        </motion.div>

      </section>
    </div>
  );
}
