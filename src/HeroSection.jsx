import React, { useRef } from 'react';
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
.ee-wrap { width: 100%; background: #efe8d8; overflow: hidden; padding-top: 72px; }
.ee-stage {
  position: relative;
  width: 100%;
  aspect-ratio: 1024/559;
  container-type: inline-size;
  background: radial-gradient(ellipse at 50% 40%, #f1eadb 0%, #eee6d4 75%, #ece3d0 100%);
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
.ee-pouch {
  position: absolute;
  transition: transform .5s cubic-bezier(.2,.8,.2,1);
  transform-style: preserve-3d;
  cursor: grab;
  filter: drop-shadow(0 .6cqw .5cqw rgba(60,45,25,.12));
}
.ee-pouch img { width: 100%; height: 100%; display: block; pointer-events: none; }
.ee-float { position: absolute; animation: eeFloat 6s ease-in-out infinite; }
@keyframes eeFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-1.1cqw); } }
@media (prefers-reduced-motion: reduce) { .ee-float { animation: none; } .ee-pouch { transition: none; } }
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

function Deco({ id }) {
  const item = DECO[id];
  const floater = FLOATERS[id];
  return (
    <img
      src={item.img}
      alt=""
      draggable={false}
      className={floater ? 'ee-float' : undefined}
      style={{
        ...box(item.x, item.y, item.w, item.h),
        animationDelay: floater ? `${floater[0]}s` : undefined,
        animationDuration: floater ? `${floater[1]}s` : undefined,
      }}
    />
  );
}

function Pouch({ src, x, y, w, h, rot = 0 }) {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      className="ee-pouch"
      onMouseMove={(e) => {
        const rect = ref.current.getBoundingClientRect();
        const normX = (e.clientX - rect.left) / rect.width - 0.5;
        const normY = (e.clientY - rect.top) / rect.height - 0.5;
        ref.current.style.transform = `rotate(${rot}deg) rotateY(${normX * 34}deg) rotateX(${-normY * 18}deg) scale(1.04)`;
      }}
      onMouseLeave={() => {
        ref.current.style.transform = `rotate(${rot}deg)`;
      }}
      style={{
        ...box(x, y, w, h),
        transform: `rotate(${rot}deg)`,
      }}
    >
      <img src={src} alt="Enjoyeat Makhana Premium Raw pouch" draggable={false} />
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="ee-wrap">
      <style>{CSS}</style>
      <section id="hero" className="ee-stage" aria-label="Enjoyeat Makhana hero">
        {/* Decorative elements except bowl and m11 (rendered above pouches) */}
        {Object.keys(DECO)
          .filter((id) => id !== 'bowl' && id !== 'm11')
          .map((id) => (
            <Deco key={id} id={id} />
          ))}

        {/* Radial shadows under pouches and bowl */}
        {[[313, 128], [446, 134], [590, 125], [770, 120]].map(([x, w]) => (
          <div
            key={x}
            style={{
              ...box(x, x === 770 ? 470 : 458, w, 14),
              background: 'radial-gradient(ellipse, rgba(70,55,30,.28), transparent 70%)',
            }}
          />
        ))}

        {/* 3D Interactive Pouches Scene */}
        <div className="ee-scene">
          <Pouch src={pouchGreen} x={313.5} y={270} w={131} h={186} rot={-6} />
          <Pouch src={pouchKraft} x={577} y={270} w={133} h={186} rot={6} />
          <Pouch src={pouchGold} x={446} y={263} w={136} h={192} />
        </div>

        {/* Front bowl and resting makhana */}
        <Deco id="bowl" />
        <Deco id="m11" />



        {/* Main Headings */}
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


      </section>
    </div>
  );
}
