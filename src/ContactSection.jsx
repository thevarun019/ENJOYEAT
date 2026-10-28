import React from 'react';
import { motion } from 'framer-motion';
import biharMapClean from './assets/bihar-map-clean.jpg';
import elM1 from './assets/hero/el_m1.png';
import elM4 from './assets/hero/el_m4.png';
import elM7 from './assets/hero/el_m7.png';
import elBasil from './assets/hero/el_basil.png';
import elSage from './assets/hero/el_sage.png';

const FONT_SERIF = "'Cinzel', 'Playfair Display', 'Cormorant Garamond', Georgia, serif";
const FONT_SANS  = "'Plus Jakarta Sans', Inter, -apple-system, BlinkMacSystemFont, sans-serif";

/* ── 3D Custom Rendered Icons Matching Target Image ── */
const EnvelopeIcon = () => (
  <svg width="34" height="34" viewBox="0 0 44 44" fill="none" style={{ filter: 'drop-shadow(0 3px 6px rgba(70,50,25,0.25))' }}>
    <defs>
      <linearGradient id="envGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D8C39F" />
        <stop offset="50%" stopColor="#BBA075" />
        <stop offset="100%" stopColor="#967A4F" />
      </linearGradient>
      <linearGradient id="envFlap" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#E6D7B9" />
        <stop offset="100%" stopColor="#BAA076" />
      </linearGradient>
      <linearGradient id="envInner" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8C7046" />
        <stop offset="100%" stopColor="#6E5633" />
      </linearGradient>
    </defs>
    {/* Base Envelope */}
    <rect x="5" y="11" width="34" height="24" rx="4" fill="url(#envGrad)" />
    {/* Inner shadow / fold */}
    <polygon points="5,11 22,24 39,11" fill="url(#envFlap)" opacity="0.95" />
    <polyline points="5,11 22,24 39,11" stroke="#A68B5E" strokeWidth="0.8" />
    {/* Side folds */}
    <polygon points="5,35 18,22 5,14" fill="url(#envInner)" opacity="0.22" />
    <polygon points="39,35 26,22 39,14" fill="url(#envInner)" opacity="0.22" />
    {/* Bottom fold */}
    <polygon points="5,35 22,22 39,35" fill="url(#envGrad)" />
    <polyline points="5,35 22,22 39,35" stroke="#FFFFFF" strokeWidth="0.6" strokeOpacity="0.4" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="34" height="34" viewBox="0 0 44 44" fill="none" style={{ filter: 'drop-shadow(0 3px 6px rgba(45,60,35,0.28))' }}>
    <defs>
      <linearGradient id="phGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8DA078" />
        <stop offset="50%" stopColor="#71845C" />
        <stop offset="100%" stopColor="#51633F" />
      </linearGradient>
      <radialGradient id="phShine" cx="35%" cy="30%" r="55%">
        <stop offset="0%" stopColor="#C8DAB6" stopOpacity="0.75" />
        <stop offset="60%" stopColor="#71845C" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="22" cy="22" r="16" fill="url(#phGrad)" />
    <circle cx="22" cy="22" r="16" fill="url(#phShine)" />
    <circle cx="22" cy="22" r="15.5" stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="0.8" />
    {/* White telephone handset */}
    <path
      d="M18.2 14.8C17.3 14.8 16 16.1 16 17.5C16 23.3 20.7 28 26.5 28C27.9 28 29.2 26.7 29.2 25.8L27.4 21.8C27 21.3 26.1 21.3 25.7 21.7L24.3 23C22 21.7 20.3 20 19 17.7L20.3 16.3C20.7 15.9 20.7 15 20.2 14.6L18.2 14.8Z"
      fill="#FFFFFF"
    />
  </svg>
);

const LocationPinIcon = () => (
  <svg width="34" height="34" viewBox="0 0 44 44" fill="none" style={{ filter: 'drop-shadow(0 3px 6px rgba(70,50,25,0.25))' }}>
    <defs>
      <linearGradient id="pinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D5C09B" />
        <stop offset="50%" stopColor="#BBA075" />
        <stop offset="100%" stopColor="#8C6E41" />
      </linearGradient>
      <radialGradient id="pinShine" cx="35%" cy="25%" r="50%">
        <stop offset="0%" stopColor="#F5E8D3" stopOpacity="0.9" />
        <stop offset="65%" stopColor="#BBA075" stopOpacity="0" />
      </radialGradient>
    </defs>
    <path
      d="M22 9C17 9 13 13 13 18C13 24.5 22 34 22 34C22 34 31 24.5 31 18C31 13 27 9 22 9Z"
      fill="url(#pinGrad)"
    />
    <path
      d="M22 9C17 9 13 13 13 18C13 24.5 22 34 22 34C22 34 31 24.5 31 18C31 13 27 9 22 9Z"
      fill="url(#pinShine)"
    />
    <circle cx="22" cy="18" r="4.2" fill="#FFFFFF" opacity="0.95" />
  </svg>
);

/* ── 3D Circular Glossy Social Icons ── */
const InstagramIcon = () => (
  <svg width="32" height="32" viewBox="0 0 36 36" style={{ filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.22))' }}>
    <defs>
      <radialGradient id="igBg" cx="25%" cy="105%" r="125%">
        <stop offset="0%" stopColor="#FFDC80" />
        <stop offset="20%" stopColor="#F77737" />
        <stop offset="45%" stopColor="#F56040" />
        <stop offset="60%" stopColor="#FD1D1D" />
        <stop offset="80%" stopColor="#C13584" />
        <stop offset="100%" stopColor="#833AB4" />
      </radialGradient>
      <radialGradient id="igLight" cx="35%" cy="25%" r="60%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
        <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="18" cy="18" r="16" fill="url(#igBg)" />
    <circle cx="18" cy="18" r="16" fill="url(#igLight)" />
    <circle cx="18" cy="18" r="15.5" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="0.8" />
    <rect x="11.5" y="11.5" width="13" height="13" rx="3.8" stroke="#FFFFFF" strokeWidth="1.6" fill="none" />
    <circle cx="18" cy="18" r="3.2" stroke="#FFFFFF" strokeWidth="1.6" fill="none" />
    <circle cx="21.8" cy="14.2" r="0.9" fill="#FFFFFF" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="32" height="32" viewBox="0 0 36 36" style={{ filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.22))' }}>
    <defs>
      <linearGradient id="fbBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2F8BF8" />
        <stop offset="100%" stopColor="#1467D2" />
      </linearGradient>
      <radialGradient id="fbLight" cx="35%" cy="25%" r="60%">
        <stop offset="0%" stopColor="#96C6FF" stopOpacity="0.65" />
        <stop offset="70%" stopColor="#1877F2" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="18" cy="18" r="16" fill="url(#fbBg)" />
    <circle cx="18" cy="18" r="16" fill="url(#fbLight)" />
    <circle cx="18" cy="18" r="15.5" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="0.8" />
    <path
      d="M19.5 26.5V18.8H22.1L22.5 15.8H19.5V13.9C19.5 13 19.8 12.5 21 12.5H22.6V9.8C22.3 9.8 21.3 9.7 20.2 9.7C17.8 9.7 16.2 11.2 16.2 13.7V15.8H13.6V18.8H16.2V26.5H19.5Z"
      fill="#FFFFFF"
    />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 36 36" style={{ filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.22))' }}>
    <defs>
      <linearGradient id="ytBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F63333" />
        <stop offset="100%" stopColor="#CC0E0E" />
      </linearGradient>
      <radialGradient id="ytLight" cx="35%" cy="25%" r="60%">
        <stop offset="0%" stopColor="#FFA6A6" stopOpacity="0.6" />
        <stop offset="70%" stopColor="#CC0E0E" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="18" cy="18" r="16" fill="url(#ytBg)" />
    <circle cx="18" cy="18" r="16" fill="url(#ytLight)" />
    <circle cx="18" cy="18" r="15.5" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="0.8" />
    <polygon points="15.5,13 23,18 15.5,23" fill="#FFFFFF" />
  </svg>
);

const CONTACT_ITEMS = [
  {
    label: 'Email',
    value: 'info@enjoyeat.com',
    href: 'mailto:info@enjoyeat.com',
    icon: <EnvelopeIcon />,
  },
  {
    label: 'Phone / WhatsApp',
    value: '+91 XXXXXXXXXX',
    href: 'https://wa.me/91XXXXXXXXXX',
    icon: <PhoneIcon />,
  },
  {
    label: 'Address',
    value: 'Sitamarhi, Bihar, India',
    href: null,
    icon: <LocationPinIcon />,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Get in Touch"
      className="ct-section"
    >
      <style>{CSS}</style>

      {/* Scattered decorative roasted makhana & leaves */}
      <img src={elM1} alt="" aria-hidden className="ct-deco ct-deco--m1" />
      <img src={elM4} alt="" aria-hidden className="ct-deco ct-deco--m2" />
      <img src={elM7} alt="" aria-hidden className="ct-deco ct-deco--m3" />
      <img src={elM4} alt="" aria-hidden className="ct-deco ct-deco--m4" />
      <img src={elM1} alt="" aria-hidden className="ct-deco ct-deco--m5" />
      <img src={elM7} alt="" aria-hidden className="ct-deco ct-deco--m6" />

      <img src={elBasil} alt="" aria-hidden className="ct-deco ct-deco--leaf-top" />
      <img src={elSage}  alt="" aria-hidden className="ct-deco ct-deco--leaf-map-l" />
      <img src={elBasil} alt="" aria-hidden className="ct-deco ct-deco--leaf-map-r" />
      <img src={elSage}  alt="" aria-hidden className="ct-deco ct-deco--leaf-bot-r" />
      <img src={elBasil} alt="" aria-hidden className="ct-deco ct-deco--leaf-bot-l" />

      {/* Powder dusting top-right overlay */}
      <div className="ct-dust" aria-hidden="true" />

      <div className="ct-inner">
        <div className="ct-grid">

          {/* ── LEFT: Title, Subtitle, Contact Card ── */}
          <motion.div
            className="ct-left"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <h1 className="ct-title">
              GET IN TOUCH
            </h1>
            <p className="ct-subtitle">
              Have questions about our products or want to say hello? Reach out to us.
            </p>

            {/* Contact Card */}
            <div className="ct-card">
              {CONTACT_ITEMS.map((item) => (
                <div key={item.label} className="ct-card-row">
                  <div className="ct-row-info">
                    <span className="ct-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="ct-val ct-val-link">
                        {item.value}
                      </a>
                    ) : (
                      <span className="ct-val">{item.value}</span>
                    )}
                  </div>
                  <div className="ct-icon-wrap">
                    {item.icon}
                  </div>
                </div>
              ))}

              {/* Follow Us Bar */}
              <div className="ct-follow-row">
                <span className="ct-follow-label">Follow Us</span>
                <div className="ct-social-tray">
                  <a href="#" className="ct-social-btn" aria-label="Instagram">
                    <InstagramIcon />
                  </a>
                  <a href="#" className="ct-social-btn" aria-label="Facebook">
                    <FacebookIcon />
                  </a>
                  <a href="#" className="ct-social-btn" aria-label="YouTube">
                    <YouTubeIcon />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: 3D Bihar Map ── */}
          <motion.div
            className="ct-right"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
          >
            <div className="ct-map-container">
              {/* Sitamarhi Badge & Pin */}
              <div className="ct-sitamarhi-badge-wrap">
                {/* Glowing drop pin */}
                <div className="ct-sitamarhi-pin">
                  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                    <defs>
                      <radialGradient id="glowG" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FFDF9E" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#FFDF9E" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Clean 3D Map Image without 'STATE OF BIHAR' text */}
              <img
                src={biharMapClean}
                alt="3D map of Bihar highlighting Sitamarhi district"
                className="ct-map-graphic"
                draggable={false}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="ct-footer">
        <span className="ct-footer-left">
          © 2026 ENJOYEAT FOOD PRIVATE LIMITED. All Rights Reserved.
        </span>

        <div className="ct-footer-right">
          <a href="#" className="ct-footer-link">Privacy Policy</a>
          <span className="ct-footer-dot">|</span>
          <a href="#" className="ct-footer-link">Terms &amp; Conditions</a>
          <span className="ct-footer-dot">|</span>
          <a href="#" className="ct-footer-link">Shipping &amp; Refund Policy</a>
        </div>
      </footer>
    </section>
  );
}

const CSS = `
.ct-section {
  font-family: ${FONT_SANS};
  background: radial-gradient(ellipse at 50% 35%, #FAF7F0 0%, #F4ECE0 55%, #E8DCC8 100%);
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  box-sizing: border-box;
  padding-top: 50px;
}

/* Scattered floating roasted makhana */
.ct-deco {
  position: absolute;
  pointer-events: none;
  user-select: none;
  z-index: 1;
}
.ct-deco--m1 { top: 18%; right: 11%; width: clamp(24px, 2.2vw, 36px); opacity: 0.85; filter: drop-shadow(0 4px 8px rgba(50,35,20,0.18)); }
.ct-deco--m2 { top: 22%; right: 4.5%; width: clamp(20px, 1.8vw, 28px); opacity: 0.8; filter: drop-shadow(0 4px 6px rgba(50,35,20,0.18)); }
.ct-deco--m3 { top: 31%; right: 7%; width: clamp(22px, 2vw, 30px); opacity: 0.75; filter: drop-shadow(0 4px 6px rgba(50,35,20,0.18)); }
.ct-deco--m4 { bottom: 25%; right: 23%; width: clamp(22px, 2vw, 32px); opacity: 0.8; filter: drop-shadow(0 4px 8px rgba(50,35,20,0.18)); }
.ct-deco--m5 { bottom: 33%; left: 48%; width: clamp(24px, 2.2vw, 34px); opacity: 0.8; filter: drop-shadow(0 4px 8px rgba(50,35,20,0.18)); }
.ct-deco--m6 { bottom: 42%; left: 1.5%; width: clamp(20px, 1.8vw, 28px); opacity: 0.75; filter: drop-shadow(0 4px 6px rgba(50,35,20,0.18)); }

/* Leaves */
.ct-deco--leaf-top   { top: 24%; right: 14%; width: clamp(38px, 3.2vw, 54px); opacity: 0.8; transform: rotate(38deg); filter: drop-shadow(0 4px 10px rgba(40,50,30,0.2)); }
.ct-deco--leaf-map-l { top: 37%; left: 49%; width: clamp(36px, 3.2vw, 50px); opacity: 0.82; transform: rotate(-45deg); filter: drop-shadow(0 4px 8px rgba(40,50,30,0.2)); }
.ct-deco--leaf-map-r { bottom: 34%; right: 8%; width: clamp(38px, 3.2vw, 54px); opacity: 0.8; transform: rotate(30deg); filter: drop-shadow(0 4px 8px rgba(40,50,30,0.2)); }
.ct-deco--leaf-bot-l { bottom: 18%; left: 1.5%; width: clamp(42px, 3.5vw, 60px); opacity: 0.75; transform: rotate(45deg); filter: drop-shadow(0 4px 8px rgba(40,50,30,0.2)); }

/* Dust particles top right */
.ct-dust {
  position: absolute;
  top: 0;
  right: 0;
  width: 260px;
  height: 280px;
  pointer-events: none;
  background: radial-gradient(circle at 85% 25%, rgba(160, 120, 70, 0.15) 0%, rgba(160, 120, 70, 0.05) 50%, transparent 80%);
  z-index: 0;
}

.ct-inner {
  position: relative;
  z-index: 2;
  max-width: 1340px;
  width: 100%;
  margin: 0 auto;
  padding: 30px 48px 40px;
  box-sizing: border-box;
}

.ct-grid {
  display: grid;
  grid-template-columns: 410px 1fr;
  gap: 50px;
  align-items: center;
}

/* ── Left Column ── */
.ct-left {
  display: flex;
  flex-direction: column;
}

.ct-title {
  font-family: ${FONT_SERIF};
  font-size: clamp(34px, 3.4vw, 50px);
  font-weight: 700;
  color: #2D2016;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: 1.1;
  margin: 0 0 12px;
}

.ct-subtitle {
  font-size: clamp(14px, 1.05vw, 15.5px);
  color: #55483D;
  margin: 0 0 26px;
  line-height: 1.5;
  max-width: 380px;
  font-weight: 400;
}

/* ── Contact Card ── */
.ct-card {
  width: 100%;
  max-width: 400px;
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1.5px solid rgba(255, 255, 255, 0.95);
  border-radius: 22px;
  padding: 22px 24px;
  box-shadow: 0 16px 36px rgba(50, 35, 15, 0.06), 0 2px 6px rgba(50, 35, 15, 0.03);
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.ct-card-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(215, 200, 175, 0.35);
}

.ct-row-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.ct-label {
  font-size: 13px;
  font-weight: 600;
  color: #7D7164;
  letter-spacing: 0.01em;
}

.ct-val {
  font-size: 15px;
  font-weight: 700;
  color: #241A13;
}

.ct-val-link {
  text-decoration: none;
  transition: color 0.2s;
}
.ct-val-link:hover {
  color: #9C7D4A;
}

.ct-icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* Follow Us bar */
.ct-follow-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 4px;
}

.ct-follow-label {
  font-size: 15px;
  font-weight: 700;
  color: #241A13;
}

.ct-social-tray {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #D1BE9C;
  padding: 6px 14px;
  border-radius: 999px;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.14), 0 1px 2px rgba(255, 255, 255, 0.4);
}

.ct-social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.ct-social-btn:hover {
  transform: scale(1.15) translateY(-2px);
}

/* ── Right Column: 3D Map ── */
.ct-right {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.ct-map-container {
  position: relative;
  width: 100%;
  max-width: 780px;
}

.ct-map-graphic {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  user-select: none;
  filter: drop-shadow(0 25px 35px rgba(50, 35, 15, 0.22));
}

/* Sitamarhi Badge & Pin Overlay */
.ct-sitamarhi-badge-wrap {
  position: absolute;
  top: 24%;
  left: 49%;
  transform: translate(-50%, -100%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
}

.ct-sitamarhi-pin {
  margin-top: -2px;
  animation: pinBounce 2.4s ease-in-out infinite;
}

@keyframes pinBounce {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-3px); }
}

/* ── Footer ── */
.ct-footer {
  position: relative;
  width: 100%;
  background: #251912;
  padding: 0 48px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  box-sizing: border-box;
  z-index: 20;
}

.ct-footer-left {
  color: #E2D7C2;
  font-size: clamp(10px, 0.8vw, 12.5px);
  font-weight: 400;
}

.ct-footer-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.ct-footer-link {
  color: #E2D7C2;
  font-size: clamp(10px, 0.8vw, 12.5px);
  text-decoration: none;
  transition: color 0.2s;
  font-weight: 400;
}
.ct-footer-link:hover {
  color: #CFAC68;
}

.ct-footer-dot {
  color: #E2D7C2;
  opacity: 0.4;
  font-size: 11px;
}

@media (max-width: 1080px) {
  .ct-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .ct-left {
    align-items: center;
    text-align: center;
  }
  .ct-subtitle {
    max-width: 100%;
  }
  .ct-footer {
    height: auto;
    padding: 24px 20px 16px;
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
}
`;
