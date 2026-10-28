import React, { useState } from 'react';

import leavesLeft from './assets/shop/leaves-left.png';
import topRight from './assets/shop/top-right.png';
import leftPouch from './assets/shop/left-pouch.png';
import shopCenterScene from './assets/shop/shop-center-scene.png';
import shopBulkSacks from './assets/shop/shop-bulk-sacks.png';

/* Layout is authored on the mockup's 2576 x 1438 canvas and scales with viewport container-type */
const W = 2576, H = 1438;
const pos = (x, y, w, h) => ({
  left: `${(x / W) * 100}%`,
  top: `${(y / H) * 100}%`,
  ...(w ? { width: `${(w / W) * 100}%` } : {}),
  ...(h ? { height: `${(h / H) * 100}%` } : {}),
});
const fs = (px) => `${(px / W) * 100}cqw`;

const SIZES = ['100g', '500g', '1kg'];

/* Text stretched to the exact width used in the mockup */
function Fit({ x, y, w, size, children, className = '' }) {
  return (
    <svg className={`abs ${className}`} style={pos(x, y, w, size * 1.3)} viewBox={`0 0 ${w} ${size * 1.3}`} aria-label={children}>
      <text x="0" y={size} textLength={w} lengthAdjust="spacingAndGlyphs" fontSize={size}>{children}</text>
    </svg>
  );
}

export default function ChooseCrunchPage() {
  const [size, setSize] = useState('100g');

  return (
    <div className="pg">
      <style>{css}</style>
      <section id="shop" className="stage" aria-label="Choose your natural crunch">
        {/* Background foliage */}
        {/* Corner leaf crops removed to eliminate visible rectangle boxes */}

        {/* Headline */}
        <svg className="abs h1" style={pos(165, 200, 1925, 120)} viewBox="0 0 1925 120" role="heading" aria-level="1" aria-label="Choose your natural crunch">
          <text x="0" y="98" textLength="1925" lengthAdjust="spacingAndGlyphs" fontSize="128">CHOOSE YOUR NATURAL CRUNCH</text>
        </svg>
        <p className="abs sub" style={{ ...pos(165, 340, 900), fontSize: fs(40), lineHeight: `${fs(52)}` }}>
          Premium raw makhana from Bihar, packed with natural goodness.
        </p>

        {/* Left product */}
        {/* Left product — reduced supporting size, centered at x = 420 */}
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

        {/* Centre product — enlarged hero centerpiece centered at canvas midpoint x = 1288 */}
        <div
          className="abs ctr"
          style={pos(698, 480, 1180)}
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
        </div>

        {/* Right product — reduced supporting size, centered at x = 2130 */}
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
.h1 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 700;
  fill: var(--ink);
  overflow: visible;
  clip-path: inset(-20% 100% -20% 0);
  animation: wipe 1.5s .3s cubic-bezier(.7,0,.2,1) forwards;
}
.sub { font-weight: 300; animation: fade 1s 1.3s both; }
.ttl {
  font-family: 'Inter Tight', Inter, sans-serif;
  font-weight: 600;
  fill: var(--ink);
  overflow: visible;
  animation: fade 1s 1.5s both;
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
  animation: fade 1s 1.7s both;
  transition: transform .25s, box-shadow .25s;
}
.soon { background: #665a53; cursor: not-allowed; }
.enq { background: #7e8458; cursor: pointer; }
.enq:hover { transform: translateY(-4px); box-shadow: 0 1.2cqw 2cqw #3d2a1f33; }
.szl { text-align: center; font-weight: 300; white-space: nowrap; animation: fade 1s 1.8s both; }
.sel { font-weight: 300; line-height: 1.5; animation: fade 1s 1.4s both; }
.sel .row { white-space: nowrap; }
.sel i { font-style: normal; margin: 0 .45em; }
.sel button {
  font: inherit;
  color: inherit;
  background: none;
  border: 0;
  padding: 0 0 .08em;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: color .3s, border-color .3s;
}
.sel button:hover { color: var(--gold); }
.sel button.on { font-weight: 500; border-color: var(--gold); }
.dash { border-top: 2px dashed #c9a96a; animation: grow 1s 1.6s both; transform-origin: left; }
.ctr { animation: rise 1.2s .9s cubic-bezier(.2,.9,.3,1.1) both; transition: transform .25s ease-out; z-index: 2; }
.ctr img { display: block; width: 100%; animation: swap .6s both; }
.scene { z-index: 3; }
.bdg {
  background: var(--ink);
  color: #fff;
  font-weight: 600;
  border-radius: 999px;
  padding: .3em .8em;
  z-index: 4;
  animation: stamp .5s both;
}
.fl { animation: fade 1.2s 1.2s both; }
.fl.slow { animation-duration: 1.2s; }
.fl.s { z-index: 4; animation-duration: 1.2s; }
.sway { transform-origin: bottom left; }

@keyframes wipe { to { clip-path: inset(-20% -2% -20% 0); } }
@keyframes fade { from { opacity: 0; transform: translateY(2cqw); } }
@keyframes rise { from { opacity: 0; margin-top: 6cqw; scale: .9; } }
@keyframes grow { from { transform: scaleX(0); } }

@keyframes swap { from { opacity: .3; scale: .94; } }
@keyframes stamp { from { opacity: 0; scale: 2; } }

@media(prefers-reduced-motion: reduce) {
  .pg * { animation: none !important; transition: none !important; }
  .h1 { clip-path: none; }
}
`;
