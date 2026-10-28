import { useState } from "react";
import book from "./story_book.jpg";
import pond from "./story_pond.jpg";
import prep from "./story_prep.jpg";
import direct from "./story_direct.jpg";
import m5 from "./story_m5.png";
import m6 from "./story_m6.png";
import sage from "./story_sage.png";
import plant from "./story_plant.png";
import leafTop from "./story_leafTop.png";

/* 1024 x 572 stage (matches the design); every value is a reference pixel
   converted to cqw so the page scales as one piece. */
const u = (n) => `${((n / 1024) * 100).toFixed(4)}cqw`;
const box = (x, y, w, h) => ({
  position: "absolute", left: u(x), top: u(y),
  ...(w != null && { width: u(w) }), ...(h != null && { height: u(h) }),
});

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600;700&display=swap');
.es-wrap{width:100%;background:#EFE7D6;overflow:hidden}
.es-stage{position:relative;width:100%;aspect-ratio:1024/572;container-type:inline-size;overflow:hidden;
  background:#EFE7D6;
  font-family:'Inter',system-ui,sans-serif;color:#3b2c20;user-select:none}
.es-serif{font-family:'Cormorant Garamond',Georgia,serif}
.es-link{position:absolute;white-space:nowrap;cursor:pointer;transition:color .2s}
.es-link:hover{color:#a8803a}
.es-book{position:absolute;max-width:none;pointer-events:none;
  -webkit-mask-image:linear-gradient(to right,transparent 0,#000 12%),linear-gradient(to bottom,transparent 0,#000 12%,#000 88%,transparent 100%);
  -webkit-mask-composite:source-in;
  mask-image:linear-gradient(to right,transparent 0,#000 12%),linear-gradient(to bottom,transparent 0,#000 12%,#000 88%,transparent 100%);
  mask-composite:intersect;
  mix-blend-mode:multiply}
.es-card{position:absolute;text-align:center;cursor:pointer;transition:transform .35s cubic-bezier(.2,.8,.2,1)}
.es-card:hover{transform:translateY(-.6cqw)}
.es-card:hover .es-thumb{box-shadow:0 1.2cqw 2cqw rgba(90,65,30,.28)}
.es-thumb{display:block;width:100%;object-fit:cover;border:.16cqw solid #c9a96a;border-radius:.6cqw;
  box-shadow:0 .5cqw 1.1cqw rgba(90,65,30,.18);transition:box-shadow .35s}
.es-float{position:absolute;animation:esFloat 7s ease-in-out infinite}
@keyframes esFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-1cqw)}}
@keyframes esBob{0%,100%{transform:translateY(0)}50%{transform:translateY(.5cqw)}}
@media (prefers-reduced-motion:reduce){.es-float,.es-arrow{animation:none!important}.es-card{transition:none}}
`;

const CARDS = [
  { x: 66, img: pond, label: "NATURAL SOURCING", title: ["NATURAL SOURCING"], text: "Grown in the freshwater ponds of Sitamarhi, Bihar." },
  { x: 252, img: prep, label: "TRADITIONAL PREPARATION", title: ["TRADITIONAL", "PREPARATION"], text: "Carefully hand-roasted to preserve natural crunch." },
  { x: 438, img: direct, label: "DIRECT TO YOU", title: ["DIRECT TO YOU"], text: "Packed with care and delivered fresh nationwide." },
];
const W = 160;

export default function EnjoyeatStory() {
  const [active, setActive] = useState(0);
  return (
    <div className="es-wrap">
      <style>{CSS}</style>
      <section className="es-stage" id="our-story" aria-label="Our story">

        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(112deg,rgba(255,255,255,.55) 0%,rgba(255,255,255,0) 38%)", pointerEvents: "none" }} />

        {/* journal artwork */}
        <img className="es-book" src={book} alt="" draggable={false} style={box(539, 89, 676, 412)} />

        <img src={leafTop} alt="" draggable={false} style={{ ...box(696, 86, 42, 23), pointerEvents: "none" }} />
        <img src={plant} alt="" draggable={false} style={{ ...box(730, 388, 367, 261), pointerEvents: "none", filter: "blur(.15cqw)" }} />

        {/* loose makhana & leaf */}
        <img className="es-float" src={m6} alt="" style={{ ...box(14, 332, 24, 24), animationDelay: ".4s" }} />
        <img className="es-float" src={m5} alt="" style={{ ...box(398, 508, 18, 18), animationDelay: "1.2s" }} />
        <img className="es-float" src={sage} alt="" style={{ ...box(10, 456, 52, 40), animationDelay: ".8s", transform: "rotate(25deg)" }} />

        {/* heading */}
        <h1 className="es-serif" style={{ position: "absolute", left: u(64), top: u(102), margin: 0, fontSize: u(45), fontWeight: 600, letterSpacing: ".005em", lineHeight: 1.1, color: "#2b2019" }}>
          OUR ROOTS IN BIHAR
        </h1>
        <p style={{ position: "absolute", left: u(64), top: u(158), margin: 0, width: u(520), fontSize: u(15.2), lineHeight: u(21) }}>
          Bringing you the sacred goodness of Sattvik Makhana,<br />straight from the heart of Sitamarhi.
        </p>

        {/* connector line through the three photos, continuing to the journal */}
        <div style={{ ...box(226, 321, 26, 0), borderTop: `${u(1.2)} solid #c9a96a` }} />
        <div style={{ ...box(412, 321, 26, 0), borderTop: `${u(1.2)} solid #c9a96a` }} />
        <div style={{ ...box(598, 321, 54, 0), borderTop: `${u(1.2)} dashed #b79b64` }} />

        {/* cards */}
        {CARDS.map((c, i) => (
          <div key={c.label} className="es-card" onMouseEnter={() => setActive(i)} style={{ ...box(c.x, 237, W) }}>
            <div style={{ display: "flex", justifyContent: "center", whiteSpace: "nowrap", fontSize: u(10.4), letterSpacing: ".08em", marginBottom: u(7), fontWeight: 400 }}>{c.label}</div>
            <img className="es-thumb" src={c.img} alt={c.label} draggable={false} style={{ height: u(128) }} />
            <div style={{ marginTop: u(11), fontSize: u(12.6), fontWeight: 700, lineHeight: u(17), letterSpacing: ".01em" }}>
              {c.title.map((t) => <div key={t}>{t}</div>)}
            </div>
            <div style={{ marginTop: u(5), fontSize: u(11.6), lineHeight: u(16), color: "#4d3d30", opacity: active === i ? 1 : .92 }}>{c.text}</div>
          </div>
        ))}

      </section>
    </div>
  );
}
