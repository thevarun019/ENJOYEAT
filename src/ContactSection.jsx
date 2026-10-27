import React from 'react';
import { motion } from 'framer-motion';
import biharMap from './assets/bihar-3d-map.jpg';

const FONT_SERIF = "'Playfair Display', 'Cormorant Garamond', Georgia, serif";
const FONT_SANS  = "'Plus Jakarta Sans', Inter, sans-serif";

const CONTACT_ROWS = [
  {
    label: 'Email',
    value: 'info@enjoyeat.com',
    href: 'mailto:info@enjoyeat.com',
    icon: '✉️',
  },
  {
    label: 'Phone / WhatsApp',
    value: '+91 XXXXXXXXXX',
    href: 'https://wa.me/91XXXXXXXXXX',
    icon: '📞',
  },
  {
    label: 'Address',
    value: 'Sitamarhi, Bihar, India',
    href: null,
    icon: '📍',
  },
];

const SOCIAL = [
  { name: 'Instagram', icon: '📸', color: '#E1306C', href: '#' },
  { name: 'Facebook',  icon: '📘', color: '#1877F2', href: '#' },
  { name: 'YouTube',   icon: '▶️',  color: '#FF0000', href: '#' },
];

export default function ContactSection() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <section
      id="contact"
      aria-label="Get in Touch"
      style={{
        fontFamily: FONT_SANS,
        background: 'radial-gradient(circle at 50% 40%, #FBF8F1 0%, #E9DFC7 100%)',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        padding: '88px 0 0',
      }}
    >
      <style>{CSS}</style>

      {/* Scattered decorative makhana */}
      <img src={new URL('./assets/hero/el_m1.png', import.meta.url).href} alt="" aria-hidden className="ct-deco ct-deco--m1" />
      <img src={new URL('./assets/hero/el_m4.png', import.meta.url).href} alt="" aria-hidden className="ct-deco ct-deco--m2" />
      <img src={new URL('./assets/hero/el_m7.png', import.meta.url).href} alt="" aria-hidden className="ct-deco ct-deco--m3" />
      <img src={new URL('./assets/hero/el_basil.png', import.meta.url).href} alt="" aria-hidden className="ct-deco ct-deco--leaf1" />
      <img src={new URL('./assets/hero/el_sage.png', import.meta.url).href} alt="" aria-hidden className="ct-deco ct-deco--leaf2" />

      <div className="ct-inner">
        <div className="ct-layout">
          {/* ── LEFT: heading + contact card ── */}
          <motion.div
            className="ct-left"
            initial={{ x: -140, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
          >
            <h1
              style={{
                fontFamily: FONT_SERIF,
                fontSize: 'clamp(30px, 4vw, 58px)',
                fontWeight: 700,
                color: '#2A1E17',
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
                lineHeight: 1.08,
                margin: 0,
              }}
            >
              Get in Touch
            </h1>
            <p
              style={{
                fontSize: 'clamp(13px, 1.1vw, 17px)',
                color: '#3B3026',
                maxWidth: 400,
                marginTop: 10,
                lineHeight: 1.65,
              }}
            >
              Have questions about our products or want to say hello? Reach out to us.
            </p>

            {/* Contact Card */}
            <div className="ct-card">
              {CONTACT_ROWS.map((row) => (
                <div key={row.label} className="ct-row">
                  <div>
                    <div className="ct-row-label">{row.label}</div>
                    {row.href ? (
                      <a href={row.href} className="ct-row-value ct-link">{row.value}</a>
                    ) : (
                      <div className="ct-row-value">{row.value}</div>
                    )}
                  </div>
                  <div className="ct-row-icon">{row.icon}</div>
                </div>
              ))}

              {/* Follow Us */}
              <div className="ct-social-row">
                <div className="ct-row-label" style={{ fontWeight: 700, fontSize: '1em', color: '#1E1914' }}>
                  Follow Us
                </div>
                <div className="ct-social-pill">
                  {SOCIAL.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      aria-label={s.name}
                      className="ct-social-icon"
                      title={s.name}
                    >
                      <span style={{ fontSize: 'clamp(22px, 2.2vw, 30px)' }}>{s.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: 3D Bihar Map ── */}
          <motion.div
            className="ct-right"
            initial={{ y: 150, scale: 0.82, opacity: 0 }}
            whileInView={{ y: 0, scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 75, damping: 14 }}
          >
            {/* Sitamarhi label (visual overlay, already on the map image) */}
            <div className="ct-sitamarhi-label">
              <span>Sitamarhi</span>
              <div className="ct-pin-pulse">📍</div>
            </div>
            <img
              src={biharMap}
              alt="3D map of Bihar state with Sitamarhi highlighted"
              className="ct-map-img"
              draggable={false}
            />
          </motion.div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="ct-footer">
        <span className="ct-footer-copy">
          © 2026 ENJOYEAT FOOD PRIVATE LIMITED. All Rights Reserved.
        </span>

        {/* Back to Top center button */}
        <button
          onClick={scrollToTop}
          className="ct-back-top"
          aria-label="Back to top"
        >
          <span>Back to Top</span>
          <span style={{ fontSize: 18 }}>↑</span>
        </button>

        <div className="ct-footer-links">
          <a href="#" className="ct-footer-link">Privacy Policy</a>
          <span className="ct-footer-sep">|</span>
          <a href="#" className="ct-footer-link">Terms &amp; Conditions</a>
          <span className="ct-footer-sep">|</span>
          <a href="#" className="ct-footer-link">Shipping &amp; Refund Policy</a>
        </div>
      </footer>
    </section>
  );
}

const CSS = `
.ct-deco {
  position: absolute;
  pointer-events: none;
  z-index: 0;
}
.ct-deco--m1  { top: 12%; right: 2%;   width: clamp(22px,2.5vw,36px); opacity: 0.65; }
.ct-deco--m2  { top: 30%; right: 5%;   width: clamp(18px,2vw,28px);   opacity: 0.55; }
.ct-deco--m3  { bottom: 18%; right: 3%; width: clamp(20px,2.2vw,30px); opacity: 0.5; }
.ct-deco--leaf1 { left: -20px; bottom: 15%; width: clamp(60px,5vw,80px); opacity: 0.4; transform: rotate(20deg); }
.ct-deco--leaf2 { left: 2%;   bottom: 8%;  width: clamp(50px,4vw,70px); opacity: 0.4; transform: rotate(-15deg); }

.ct-inner {
  position: relative;
  z-index: 1;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 24px 48px 16px;
  flex: 1;
}
.ct-layout {
  display: grid;
  grid-template-columns: 42% 1fr;
  gap: 40px;
  align-items: start;
}
.ct-left {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.ct-card {
  margin-top: 24px;
  background: rgba(243,237,224,0.92);
  border-radius: 18px;
  padding: clamp(18px,2vw,28px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.08);
  border: 1px solid rgba(255,255,255,0.8);
  max-width: 440px;
  display: flex;
  flex-direction: column;
  gap: 0;
}
.ct-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid rgba(184,160,114,0.25);
}
.ct-row:last-of-type { border-bottom: none; }
.ct-row-label {
  font-size: clamp(12px,1vw,15px);
  font-weight: 600;
  color: #1E1914;
  margin-bottom: 2px;
}
.ct-row-value {
  font-size: clamp(12px,1vw,15px);
  color: #2A241E;
}
.ct-link {
  color: #2A241E;
  text-decoration: none;
  transition: color 0.2s;
}
.ct-link:hover { color: #9E7B42; text-decoration: underline; }
.ct-row-icon {
  font-size: clamp(22px,2.2vw,30px);
  flex-shrink: 0;
  margin-left: 12px;
}
.ct-social-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
}
.ct-social-pill {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #CDBB99;
  padding: 8px 18px;
  border-radius: 999px;
  box-shadow: inset 0 2px 6px rgba(0,0,0,0.12);
}
.ct-social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: transform 0.2s;
  text-decoration: none;
}
.ct-social-icon:hover { transform: scale(1.18); }

.ct-right {
  position: relative;
  padding-top: 20px;
}
.ct-sitamarhi-label {
  position: absolute;
  top: 10%;
  left: 48%;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  pointer-events: none;
}
.ct-sitamarhi-label span {
  background: #7C7958;
  color: #fff;
  font-size: clamp(10px,1vw,14px);
  font-weight: 600;
  padding: 3px 12px;
  border-radius: 8px;
  border: 1.5px solid #fff;
  box-shadow: 0 3px 10px rgba(0,0,0,0.18);
  letter-spacing: 0.03em;
}
.ct-pin-pulse {
  font-size: clamp(16px,1.5vw,22px);
  animation: pin-pulse 2s ease-in-out infinite;
}
@keyframes pin-pulse {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-5px); }
}
.ct-map-img {
  width: 100%;
  border-radius: 16px;
  object-fit: contain;
  filter: drop-shadow(0 35px 30px rgba(0,0,0,0.2));
}

/* ── Footer ── */
.ct-footer {
  position: relative;
  width: 100%;
  background: #2D1E17;
  padding: 0 64px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  z-index: 10;
}
.ct-footer-copy {
  color: #E5DEC9;
  font-size: clamp(10px,0.85vw,13px);
}
.ct-back-top {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  background: #EFE9DC;
  color: #2A1E17;
  font-size: clamp(11px,1vw,14px);
  font-weight: 700;
  padding: 8px 22px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.14);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: background 0.2s, transform 0.15s;
  font-family: 'Plus Jakarta Sans', Inter, sans-serif;
}
.ct-back-top:hover { background: #fff; transform: translateX(-50%) translateY(-2px); }
.ct-footer-links {
  display: flex;
  align-items: center;
  gap: 8px;
}
.ct-footer-link {
  color: #E5DEC9;
  font-size: clamp(10px,0.85vw,13px);
  text-decoration: none;
  transition: color 0.2s;
}
.ct-footer-link:hover { color: #cfa95e; }
.ct-footer-sep {
  color: #E5DEC9;
  opacity: 0.45;
  font-size: 12px;
}
`;
