import React from 'react';
import { motion } from 'framer-motion';
import biharMapClean from './assets/bihar-map-clean.jpg';
import elM1 from './assets/hero/el_m1.png';
import elM4 from './assets/hero/el_m4.png';
import elM7 from './assets/hero/el_m7.png';
import elBasil from './assets/hero/el_basil.png';
import elSage from './assets/hero/el_sage.png';

/* 1024 x 572 stage matching HeroSection & EnjoyeatStory architecture */
const u = (n) => `${((n / 1024) * 100).toFixed(4)}cqw`;
const box = (x, y, w, h) => ({
  position: 'absolute',
  left: u(x),
  top: u(y),
  ...(w != null && { width: u(w) }),
  ...(h != null && { height: u(h) }),
});

const FONT_SERIF = "'Cinzel', 'Playfair Display', 'Cormorant Garamond', Georgia, serif";
const FONT_SANS  = "'Plus Jakarta Sans', Inter, -apple-system, BlinkMacSystemFont, sans-serif";

/* ── 3D Custom Rendered Icons ── */
const EnvelopeIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" style={{ width: u(34), height: u(34), filter: 'drop-shadow(0 3px 6px rgba(70,50,25,0.25))' }}>
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
    <rect x="5" y="11" width="34" height="24" rx="4" fill="url(#envGrad)" />
    <polygon points="5,11 22,24 39,11" fill="url(#envFlap)" opacity="0.95" />
    <polyline points="5,11 22,24 39,11" stroke="#A68B5E" strokeWidth="0.8" />
    <polygon points="5,35 18,22 5,14" fill="url(#envInner)" opacity="0.22" />
    <polygon points="39,35 26,22 39,14" fill="url(#envInner)" opacity="0.22" />
    <polygon points="5,35 22,22 39,35" fill="url(#envGrad)" />
    <polyline points="5,35 22,22 39,35" stroke="#FFFFFF" strokeWidth="0.6" strokeOpacity="0.4" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" style={{ width: u(34), height: u(34), filter: 'drop-shadow(0 3px 6px rgba(45,60,35,0.28))' }}>
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
    <path
      d="M18.2 14.8C17.3 14.8 16 16.1 16 17.5C16 23.3 20.7 28 26.5 28C27.9 28 29.2 26.7 29.2 25.8L27.4 21.8C27 21.3 26.1 21.3 25.7 21.7L24.3 23C22 21.7 20.3 20 19 17.7L20.3 16.3C20.7 15.9 20.7 15 20.2 14.6L18.2 14.8Z"
      fill="#FFFFFF"
    />
  </svg>
);

const LocationPinIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" style={{ width: u(34), height: u(34), filter: 'drop-shadow(0 3px 6px rgba(70,50,25,0.25))' }}>
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
    <circle cx="22" cy="18" r="4.2" fill="#FFFFFF" opacity="0.95" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 36 36" style={{ width: u(26), height: u(26), filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}>
    <circle cx="18" cy="18" r="16" fill="#833AB4" />
    <rect x="11.5" y="11.5" width="13" height="13" rx="3.8" stroke="#FFFFFF" strokeWidth="1.6" fill="none" />
    <circle cx="18" cy="18" r="3.2" stroke="#FFFFFF" strokeWidth="1.6" fill="none" />
    <circle cx="21.8" cy="14.2" r="0.9" fill="#FFFFFF" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 36 36" style={{ width: u(26), height: u(26), filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}>
    <circle cx="18" cy="18" r="16" fill="#1877F2" />
    <path
      d="M19.5 26.5V18.8H22.1L22.5 15.8H19.5V13.9C19.5 13 19.8 12.5 21 12.5H22.6V9.8C22.3 9.8 21.3 9.7 20.2 9.7C17.8 9.7 16.2 11.2 16.2 13.7V15.8H13.6V18.8H16.2V26.5H19.5Z"
      fill="#FFFFFF"
    />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 36 36" style={{ width: u(26), height: u(26), filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}>
    <circle cx="18" cy="18" r="16" fill="#FF0000" />
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
    <div className="ct-wrap">
      <style>{CSS}</style>
      <section id="contact" className="ct-stage" aria-label="Get in Touch">
        {/* Scattered decorative makhana & leaves */}
        <img src={elM1} alt="" aria-hidden style={{ ...box(15, 230, 24, 24), pointerEvents: 'none', zIndex: 0 }} />
        <img src={elM4} alt="" aria-hidden style={{ ...box(440, 210, 24, 24), pointerEvents: 'none', zIndex: 0 }} />
        <img src={elM7} alt="" aria-hidden style={{ ...box(920, 160, 26, 26), pointerEvents: 'none', zIndex: 0 }} />
        <img src={elBasil} alt="" aria-hidden style={{ ...box(10, 420, 40, 40), pointerEvents: 'none', opacity: 0.75, zIndex: 0, transform: 'rotate(45deg)' }} />
        <img src={elSage} alt="" aria-hidden style={{ ...box(960, 360, 40, 32), pointerEvents: 'none', opacity: 0.8, zIndex: 0, transform: 'rotate(-30deg)' }} />

        {/* ── LEFT: Title, Subtitle, Contact Card ── */}
        <motion.div
          style={{ position: 'absolute', left: u(54), top: u(36), zIndex: 2 }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <h1
            style={{
              fontFamily: FONT_SERIF,
              fontSize: u(36),
              fontWeight: 700,
              color: '#2D2016',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            GET IN TOUCH
          </h1>
          <p
            style={{
              fontFamily: FONT_SANS,
              fontSize: u(12),
              color: '#55483D',
              margin: `${u(6)} 0 0`,
              maxWidth: u(380),
              lineHeight: 1.5,
            }}
          >
            Have questions about our products or want to say hello? Reach out to us.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          style={{
            ...box(54, 136, 380, 360),
            background: 'rgba(255, 255, 255, 0.82)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1.5px solid rgba(255, 255, 255, 0.95)',
            borderRadius: u(18),
            padding: `${u(18)} ${u(22)}`,
            boxShadow: '0 14px 34px rgba(50, 35, 15, 0.06)',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            zIndex: 2,
          }}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          {CONTACT_ITEMS.map((item) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: u(10),
                borderBottom: '1px solid rgba(215, 200, 175, 0.35)',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: u(2) }}>
                <span style={{ fontSize: u(11), fontWeight: 600, color: '#7D7164' }}>{item.label}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    style={{
                      fontSize: u(13),
                      fontWeight: 700,
                      color: '#241A13',
                      textDecoration: 'none',
                    }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span style={{ fontSize: u(13), fontWeight: 700, color: '#241A13' }}>{item.value}</span>
                )}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {item.icon}
              </div>
            </div>
          ))}

          {/* Follow Us Bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: u(2) }}>
            <span style={{ fontSize: u(13), fontWeight: 700, color: '#241A13' }}>Follow Us</span>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: u(10),
                background: '#D1BE9C',
                padding: `${u(5)} ${u(14)}`,
                borderRadius: '999px',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.14)',
              }}
            >
              <a href="#" aria-label="Instagram" style={{ display: 'flex', alignItems: 'center' }}><InstagramIcon /></a>
              <a href="#" aria-label="Facebook" style={{ display: 'flex', alignItems: 'center' }}><FacebookIcon /></a>
              <a href="#" aria-label="YouTube" style={{ display: 'flex', alignItems: 'center' }}><YouTubeIcon /></a>
            </div>
          </div>
        </motion.div>

        {/* ── RIGHT: 3D Bihar Map ── */}
        <motion.div
          style={{ ...box(460, 60, 520, 430), zIndex: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.15 }}
        >
          <img
            src={biharMapClean}
            alt="3D map of Bihar"
            className="ct-map-graphic"
            draggable={false}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              userSelect: 'none',
              mixBlendMode: 'multiply',
              WebkitMaskImage: 'radial-gradient(closest-side, black 75%, transparent 100%)',
              maskImage: 'radial-gradient(closest-side, black 75%, transparent 100%)',
            }}
          />
        </motion.div>

        {/* ── Footer Bar ── */}
        <footer
          style={{
            ...box(0, 526, 1024, 46),
            background: '#251912',
            padding: `0 ${u(48)}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            zIndex: 10,
          }}
        >
          <span style={{ color: '#E2D7C2', fontSize: u(10.5), fontWeight: 400 }}>
            © 2026 ENJOYEAT FOOD PRIVATE LIMITED. All Rights Reserved.
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: u(8) }}>
            <a href="#" style={{ color: '#E2D7C2', fontSize: u(10.5), textDecoration: 'none' }}>Privacy Policy</a>
            <span style={{ color: '#E2D7C2', opacity: 0.4, fontSize: u(10) }}>|</span>
            <a href="#" style={{ color: '#E2D7C2', fontSize: u(10.5), textDecoration: 'none' }}>Terms &amp; Conditions</a>
            <span style={{ color: '#E2D7C2', opacity: 0.4, fontSize: u(10) }}>|</span>
            <a href="#" style={{ color: '#E2D7C2', fontSize: u(10.5), textDecoration: 'none' }}>Shipping &amp; Refund Policy</a>
          </div>
        </footer>
      </section>
    </div>
  );
}

const CSS = `
.ct-wrap {
  width: 100%;
  background: #EFE7D6;
  overflow: hidden;
}
.ct-stage {
  position: relative;
  width: 100%;
  aspect-ratio: 1024 / 572;
  container-type: inline-size;
  overflow: hidden;
  user-select: none;
}
`;
