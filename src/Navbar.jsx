import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import lotus from './story_lotus.png';

const NAV_ITEMS = [
  { name: 'Our Story',  href: '#our-story'  },
  { name: 'Shop',       href: '#shop'        },
  { name: 'Benefits',   href: '#benefits'    },
  { name: 'Wholesale',  href: '#wholesale'   },
  { name: 'Contact',    href: '#contact'     },
];

const SECTION_IDS = ['hero', 'our-story', 'shop', 'benefits', 'wholesale', 'contact'];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  /* ── Track which section is in view ── */
  useEffect(() => {
    const observers = [];
    const thresholds = [0.25];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: thresholds, rootMargin: '-80px 0px -40% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const isActive = (href) => {
    const id = href.replace('#', '');
    return activeSection === id;
  };

  /* ── Smooth scroll handler ── */
  const handleNav = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: 72,
        zIndex: 100,
        background: 'rgba(237, 229, 212, 0.96)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(180,165,138,0.35)',
        boxShadow: '0 2px 16px rgba(61,42,31,0.06)',
      }}
    >
      <nav
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          height: '100%',
          padding: '0 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
        }}
        aria-label="Main Navigation"
      >
        {/* ── Logo ── */}
        <a
          href="#hero"
          onClick={(e) => handleNav(e, '#hero')}
          style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}
          aria-label="Enjoyeat Makhana Home"
        >
          <img src={lotus} alt="Enjoyeat Lotus Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
          <div style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif", lineHeight: 1.1 }}>
            <div style={{ fontSize: 17, fontWeight: 600, letterSpacing: '0.12em', color: '#9a7b44', textTransform: 'uppercase' }}>ENJOYEAT</div>
            <div style={{ fontSize: 11.5, fontWeight: 500, letterSpacing: '0.2em', color: '#7A6F55', textTransform: 'uppercase', marginTop: 1 }}>MAKHANA</div>
          </div>
        </a>

        {/* ── Center nav links (desktop) ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 36,
            position: 'absolute',
            left: '65%',
            transform: 'translateX(-50%)',
          }}
          className="nav-desktop-links"
        >
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <a
                key={item.name}
                href={item.href}
                id={`nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={(e) => handleNav(e, item.href)}
                style={{
                  fontSize: 15,
                  fontWeight: active ? 600 : 400,
                  color: active ? '#2B261F' : '#3b2c20',
                  textDecoration: 'none',
                  paddingBottom: 4,
                  borderBottom: active ? '2px solid #8C6D3B' : '2px solid transparent',
                  letterSpacing: '0.01em',
                  transition: 'color 0.2s, border-color 0.2s',
                  whiteSpace: 'nowrap',
                  fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
                }}
                onMouseEnter={(e) => { if (!active) e.target.style.color = '#9E7B42'; }}
                onMouseLeave={(e) => { if (!active) e.target.style.color = '#3b2c20'; }}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        {/* ── Right: CTA + mobile toggle ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <a
            href="#shop"
            id="nav-shop-btn"
            onClick={(e) => handleNav(e, '#shop')}
            className="px-3 py-1.5 text-[11px] md:px-6 md:py-2.5 md:text-sm font-semibold rounded-md whitespace-nowrap"
            style={{
              background: 'linear-gradient(135deg, #c9a55a, #8C6D3B)',
              color: '#fff',
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              boxShadow: '0 3px 12px rgba(140,109,59,0.3)',
              transition: 'opacity 0.2s, transform 0.15s',
              fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
            }}
            onMouseEnter={(e) => { e.target.style.opacity = '0.88'; e.target.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { e.target.style.opacity = '1'; e.target.style.transform = 'none'; }}
          >
            ENQUIRE NOW
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="nav-hamburger"
            aria-label="Toggle menu"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 6,
              color: '#3b2c20',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen
                ? <><path d="M18 6L6 18M6 6l12 12"/></>
                : <><path d="M4 6h16M4 12h16M4 18h16"/></>
              }
            </svg>
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'rgba(237,229,212,0.98)',
              borderTop: '1px solid rgba(180,165,138,0.3)',
              padding: '12px 24px 16px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              overflow: 'hidden',
            }}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNav(e, item.href)}
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: '#3b2c20',
                  textDecoration: 'none',
                  padding: '8px 0',
                  borderBottom: '1px solid rgba(180,165,138,0.3)',
                  fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
                }}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
