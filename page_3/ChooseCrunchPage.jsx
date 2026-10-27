import { useRef, useState } from "react";

/* Put the /images folder in your public/ directory.
   Layout is authored on the mockup's 2576 x 1438 canvas and scales with the viewport. */
/* Folder that holds the cropped images. Change this if your images live elsewhere. */
const IMG = "/images";
const W = 2576, H = 1438;
const pos = (x, y, w, h) => ({
  left: `${(x / W) * 100}%`, top: `${(y / H) * 100}%`,
  ...(w ? { width: `${(w / W) * 100}%` } : {}), ...(h ? { height: `${(h / H) * 100}%` } : {}),
});
const fs = (px) => `${(px / W) * 100}cqw`;

const SIZES = ["100g", "250g", "500g", "1kg"];
const NAV = ["Our Story", "Shop", "Benefits", "Wholesale", "Contact"];
const NAVX = [1238, 1457, 1606, 1803, 2035];

/* text stretched to the exact width used in the mockup */
function Fit({ x, y, w, size, children, className = "" }) {
  return (
    <svg className={`abs ${className}`} style={pos(x, y, w, size * 1.3)} viewBox={`0 0 ${w} ${size * 1.3}`} aria-label={children}>
      <text x="0" y={size} textLength={w} lengthAdjust="spacingAndGlyphs" fontSize={size}>{children}</text>
    </svg>
  );
}

export default function ChooseCrunchPage() {
  const [size, setSize] = useState("250g");
  const [t, setT] = useState({ x: 0, y: 0 });
  const stage = useRef(null);

  const onMove = (e) => {
    const r = stage.current.getBoundingClientRect();
    setT({ x: ((e.clientX - r.left) / r.width - 0.5) * 2, y: ((e.clientY - r.top) / r.height - 0.5) * 2 });
  };

  return (
    <div className="pg">
      <style>{css}</style>
      <div className="stage" ref={stage} onMouseMove={onMove} onMouseLeave={() => setT({ x: 0, y: 0 })}>
        {/* background foliage */}
        <img className="abs sway" style={pos(0, 500, 290)} src={`${IMG}/leaves-left.png`} alt="" />
        <img className="abs sway r" style={pos(2280, 170, 296)} src={`${IMG}/top-right.png`} alt="" />

        {/* header */}
        <div className="abs hdr" style={{ left: 0, top: 0, width: "100%", height: "100%" }}>
          <img className="abs" style={pos(100, 25, 162)} src={`${IMG}/logo-lotus.png`} alt="" />
          <a className="abs logo" href="/" style={{ ...pos(270, 40), fontSize: fs(50) }}>ENJOYEAT<br />MAKHANA</a>
          {NAV.map((n, i) => (
            <a key={n} className={`abs nv ${n === "Shop" ? "on" : ""}`} href={`#${n.toLowerCase().replace(" ", "-")}`} style={{ ...pos(NAVX[i], 62), fontSize: fs(36) }}>{n}</a>
          ))}
          <a className="abs shopnow" href="#shop" style={{ ...pos(2216, 43, 251, 80), fontSize: fs(34) }}>SHOP NOW</a>
        </div>

        {/* headline */}
        <svg className="abs h1" style={pos(165, 262, 1925, 120)} viewBox="0 0 1925 120" role="heading" aria-level="1" aria-label="Choose your natural crunch">
          <text x="0" y="98" textLength="1925" lengthAdjust="spacingAndGlyphs" fontSize="128">CHOOSE YOUR NATURAL CRUNCH</text>
        </svg>
        <p className="abs sub" style={{ ...pos(165, 402, 900), fontSize: fs(40), lineHeight: `${fs(52)}` }}>
          Premium raw makhana from Bihar, packed with natural goodness.
        </p>

        {/* left product */}
        <img className="abs fl" style={pos(285, 588, 415)} src={`${IMG}/left-pouch.png`} alt="Premium raw makhana pouch" />
        <Fit x={165} y={1008} w={530} size={50} className="ttl">PREMIUM RAW MAKHANA</Fit>
        <button className="abs soon" disabled style={{ ...pos(285, 1095, 403, 92), fontSize: fs(40) }}>COMING SOON</button>
        <p className="abs szl" style={{ ...pos(285, 1210, 403), fontSize: fs(36) }}>{SIZES.join(" | ")}</p>

        {/* pack size selector */}
        <div className="abs sel" style={{ ...pos(680, 680), fontSize: fs(36) }}>
          <div>SELECT PACK SIZE:</div>
          <div className="row">
            {SIZES.map((s, i) => (
              <span key={s}>
                {i > 0 && <i>|</i>}
                <button className={s === size ? "on" : ""} aria-pressed={s === size} onClick={() => setSize(s)}>{s}</button>
              </span>
            ))}
          </div>
        </div>
        <div className="abs dash" style={pos(690, 812, 420)} />

        {/* centre product */}
        <div className="abs ctr" style={{ ...pos(1085, 490, 510), transform: `translate(${t.x * 12}px,${t.y * 8}px) rotate(${t.x * 1.2}deg)` }}>
          <img key={size} src={`${IMG}/shop-center-pouch.png`} alt={`Enjoyeat Makhana Premium Raw ${size}`} />
        </div>
        <img className="abs scene" style={{ ...pos(740, 930, 1090), transform: `translate(${t.x * -6}px,${t.y * -4}px)` }} src={`${IMG}/shop-scene-base.png`} alt="" />
        <span key={size + "b"} className="abs bdg" style={{ ...pos(1360, 780), fontSize: fs(34) }}>{size}</span>
        <img className="abs fl s" style={pos(1392, 408, 66)} src={`${IMG}/seed-top.png`} alt="" />

        {/* right product */}
        <img className="abs fl slow" style={pos(1735, 565, 675)} src={`${IMG}/shop-bulk-sacks.png`} alt="Bulk makhana pouches and jute sacks" />
        <Fit x={1740} y={1008} w={640} size={50} className="ttl">BULK &amp; WHOLESALE MAKHANA</Fit>
        <a className="abs enq" href="#wholesale" style={{ ...pos(1864, 1095, 403, 92), fontSize: fs(40) }}>ENQUIRE NOW</a>

        <img className="abs sway r" style={pos(2240, 870, 336)} src={`${IMG}/foliage-right.png`} alt="" />

        {/* footer cues */}
        <a className="abs scr" href="#more" onClick={(e) => { e.preventDefault(); window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" }); }} style={{ ...pos(113, 1313), fontSize: fs(38) }}>
          <span className="mouse"><b /></span>Scroll to Explore
        </a>
        <button className="abs top" style={{ ...pos(1180, 1292, 220), fontSize: fs(38) }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to Top<span>↓</span>
        </button>
      </div>

    </div>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@300;400;500;600&family=Inter+Tight:wght@500;600&display=swap');
.pg{--ink:#3d2a1f;--gold:#b8914a;font-family:Inter,sans-serif;color:var(--ink);background:linear-gradient(#f9f4e6,#f1e9d8 45%,#dcc8a2);overflow-x:hidden}
.pg *{box-sizing:border-box}
.stage{position:relative;width:100%;aspect-ratio:2576/1438;container-type:inline-size;overflow:hidden}
.abs{position:absolute;margin:0}
img.abs{display:block;height:auto}
.hdr{animation:drop .9s .1s both;pointer-events:none}.hdr>*{pointer-events:auto}
.logo{color:#b08d50;font:600 1em/1.05 'Cormorant Garamond',serif;letter-spacing:.03em;text-decoration:none}
.nv{color:var(--ink);text-decoration:none;font-weight:300;white-space:nowrap;background:linear-gradient(var(--ink),var(--ink)) 0 100%/0 2px no-repeat;padding-bottom:.35em;transition:background-size .35s}
.nv:hover,.nv.on{background-size:100% 2px}
.shopnow{display:grid;place-items:center;color:#fff;font-weight:600;border-radius:.2em;text-decoration:none;background:linear-gradient(135deg,#c7a35f,#a98339);transition:transform .25s,box-shadow .25s}
.shopnow:hover,.enq:hover{transform:translateY(-4px);box-shadow:0 1.2cqw 2cqw #3d2a1f33}
.h1{font-family:'Cormorant Garamond',serif;font-weight:700;fill:var(--ink);overflow:visible;clip-path:inset(-20% 100% -20% 0);animation:wipe 1.5s .3s cubic-bezier(.7,0,.2,1) forwards}
.sub{font-weight:300;animation:fade 1s 1.3s both}
.ttl{font-family:'Inter Tight',Inter,sans-serif;font-weight:600;fill:var(--ink);overflow:visible;animation:fade 1s 1.5s both}
.soon,.enq{display:grid;place-items:center;border:0;border-radius:.25em;color:#fff;font-weight:400;font-family:Inter;text-decoration:none;animation:fade 1s 1.7s both;transition:transform .25s,box-shadow .25s}
.soon{background:#665a53;cursor:not-allowed}.enq{background:#7e8458}
.szl{text-align:center;font-weight:300;white-space:nowrap;animation:fade 1s 1.8s both}
.sel{font-weight:300;line-height:1.5;animation:fade 1s 1.4s both}
.sel .row{white-space:nowrap}
.sel i{font-style:normal;margin:0 .45em}
.sel button{font:inherit;color:inherit;background:none;border:0;padding:0 0 .08em;cursor:pointer;border-bottom:2px solid transparent;transition:color .3s,border-color .3s}
.sel button:hover{color:var(--gold)}.sel button.on{font-weight:500;border-color:var(--gold)}
.dash{border-top:2px dashed #c9a96a;animation:grow 1s 1.6s both;transform-origin:left}
.ctr{animation:rise 1.2s .9s cubic-bezier(.2,.9,.3,1.1) both;transition:transform .25s ease-out;z-index:2}
.ctr img{display:block;width:100%;animation:swap .6s both}
.scene{z-index:3}
.bdg{background:var(--ink);color:#fff;font-weight:600;border-radius:999px;padding:.3em .8em;z-index:4;animation:stamp .5s both}
.fl{animation:fade 1.2s 1.2s both,float 6s 2.4s ease-in-out infinite}
.fl.slow{animation-duration:1.2s,8s}.fl.s{z-index:4;animation-duration:1.2s,4.5s}
.sway{transform-origin:bottom left;animation:sway 9s ease-in-out infinite}.sway.r{transform-origin:bottom right;animation-delay:-4s}
.scr{display:flex;align-items:center;gap:.5em;color:var(--ink);text-decoration:none;font-weight:300;white-space:nowrap}
.mouse{width:1.1em;height:1.9em;border:2px solid #3d2a1f66;border-radius:.6em;display:grid;justify-items:center;padding-top:.3em;margin-right:.3em}
.mouse b{width:3px;height:.35em;background:var(--gold);border-radius:2px;animation:wheel 1.6s infinite}
.top{background:none;border:0;color:var(--ink);font-family:Inter;font-weight:300;cursor:pointer;text-align:center;z-index:5;line-height:1.5}
.top span{display:block;animation:bob 1.4s infinite}
@keyframes drop{from{opacity:0;transform:translateY(-3cqw)}}
@keyframes wipe{to{clip-path:inset(-20% -2% -20% 0)}}
@keyframes fade{from{opacity:0;transform:translateY(2cqw)}}
@keyframes rise{from{opacity:0;margin-top:6cqw;scale:.9}}
@keyframes grow{from{transform:scaleX(0)}}
@keyframes float{50%{translate:0 -1cqw}}
@keyframes sway{50%{transform:rotate(1.2deg) scale(1.01)}}
@keyframes swap{from{opacity:.3;scale:.94}}
@keyframes stamp{from{opacity:0;scale:2}}
@keyframes wheel{0%{opacity:0}40%{opacity:1}100%{opacity:0;transform:translateY(.6em)}}
@keyframes bob{50%{transform:translateY(5px)}}
@media(prefers-reduced-motion:reduce){.pg *{animation:none!important;transition:none!important}.h1{clip-path:none}}
`;
