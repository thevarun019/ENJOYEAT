import React, { useState } from 'react';
import { motion } from 'framer-motion';
import wholesalePallet from './assets/wholesale-pallet.jpg';
import elM1 from './assets/hero/el_m1.png';
import elM2 from './assets/hero/el_m2.png';
import elM3 from './assets/hero/el_m3.png';
import topRight from './assets/shop/top-right.png';

/* 1024 x 572 stage matching HeroSection & EnjoyeatStory architecture */
const u = (n) => `${((n / 1024) * 100).toFixed(4)}cqw`;
const box = (x, y, w, h) => ({
  position: 'absolute',
  left: u(x),
  top: u(y),
  ...(w != null && { width: u(w) }),
  ...(h != null && { height: u(h) }),
});

const FONT_SERIF = "'Playfair Display', 'Cormorant Garamond', Georgia, serif";
const FONT_SANS  = "'Plus Jakarta Sans', Inter, -apple-system, BlinkMacSystemFont, sans-serif";

const PILLS = [
  '• Premium Quality Sourcing',
  '• Fast & Reliable Shipping',
  '• Bulk Custom Quantities',
];

const WHATSAPP_NUMBER = '9876543210';

export default function WholesaleSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    quantity: '',
    location: '',
  });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Bulk Enquiry from ${form.name}\nEmail/Phone: ${form.email}\nQuantity: ${form.quantity}\nLocation: ${form.location}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <div className="ws-wrap">
      <style>{CSS}</style>
      <section id="wholesale" className="ws-stage" aria-label="Partner with us — Wholesale">
        {/* Decorative elements */}
        <img src={elM1} alt="" aria-hidden style={{ ...box(18, 120, 26, 26), pointerEvents: 'none', zIndex: 0 }} />
        <img src={elM2} alt="" aria-hidden style={{ ...box(470, 160, 24, 24), pointerEvents: 'none', zIndex: 0 }} />
        <img src={elM3} alt="" aria-hidden style={{ ...box(490, 480, 25, 25), pointerEvents: 'none', zIndex: 0 }} />
        {/* Rectangular corner topRight foliage crop removed */}

        {/* ── LEFT: Title, Subtitle, Pallet Image with Staggered Badges ── */}
        <motion.div
          style={{ position: 'absolute', left: u(54), top: u(36), zIndex: 2 }}
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1
            style={{
              fontFamily: FONT_SERIF,
              fontSize: u(38),
              fontWeight: 700,
              color: '#2A1E17',
              textTransform: 'uppercase',
              letterSpacing: '0.03em',
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            Partner<br />With Us
          </h1>
          <p
            style={{
              fontFamily: FONT_SANS,
              fontSize: u(12),
              color: '#3B3026',
              maxWidth: u(410),
              margin: `${u(8)} 0 0`,
              lineHeight: 1.5,
            }}
          >
            Grow your business with India's premium makhana. Fill out the form for bulk &amp; wholesale enquiries.
          </p>
        </motion.div>

        {/* Pallet image with multiply blend and edge feathering */}
        <motion.div
          style={{ ...box(54, 185, 420, 320), zIndex: 1 }}
          initial={{ opacity: 0, x: -40, y: 15, scale: 0.94 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            type: 'spring',
            stiffness: 85,
            damping: 15,
            delay: 0.1,
          }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <img
            src={wholesalePallet}
            alt="Enjoyeat Makhana wholesale pallet"
            draggable={false}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              mixBlendMode: 'multiply',
              WebkitMaskImage: 'radial-gradient(closest-side, black 75%, transparent 100%)',
              maskImage: 'radial-gradient(closest-side, black 75%, transparent 100%)',
            }}
          />
        </motion.div>

        {/* Staggered olive pill badges anchored gracefully on the pallet */}
        {PILLS.map((pill, i) => (
          <motion.div
            key={pill}
            style={{
              ...box(210 + i * 15, 315 + i * 48),
              background: '#7A7E59',
              color: '#FFFFFF',
              fontFamily: FONT_SANS,
              fontSize: u(10.8),
              fontWeight: 600,
              padding: `${u(6)} ${u(14)}`,
              borderRadius: u(8),
              border: '1px solid rgba(255,255,255,0.7)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
              whiteSpace: 'nowrap',
              zIndex: 3,
            }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 + i * 0.15 }}
          >
            {pill}
          </motion.div>
        ))}

        {/* ── RIGHT: Bulk Enquiry Form Card ── */}
        <motion.div
          style={{
            ...box(530, 36, 440, 495),
            background: '#F5F0E6',
            borderRadius: u(18),
            padding: `${u(18)} ${u(26)}`,
            boxShadow: '0 16px 45px rgba(0,0,0,0.08)',
            border: '1px solid #FFFFFF',
            zIndex: 2,
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
          }}
          initial={{ x: 45, y: 15, opacity: 0, scale: 0.95 }}
          whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            type: 'spring',
            stiffness: 85,
            damping: 15,
            delay: 0.12,
          }}
        >
          <h2
            style={{
              fontFamily: FONT_SERIF,
              fontSize: u(20),
              fontWeight: 700,
              color: '#1E1914',
              textAlign: 'center',
              letterSpacing: '0.06em',
              margin: `0 0 ${u(12)}`,
            }}
          >
            BULK ENQUIRY
          </h2>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: u(10), flex: 1 }}>
            {[
              { label: 'Full Name / Business Name', name: 'name', type: 'text', placeholder: 'John Doe / Organic Retail Ltd.' },
              { label: 'Email & Phone', name: 'email', type: 'text', placeholder: 'example@domain.com / +91 98765 43210' },
              { label: 'Estimated Quantity', name: 'quantity', type: 'text', placeholder: '(e.g., 100kg, 500kg, 2 Tons)' },
              { label: 'Delivery Location', name: 'location', type: 'text', placeholder: 'State / City / Pincode' },
            ].map((f) => (
              <div key={f.name}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: FONT_SANS,
                    fontSize: u(10.5),
                    fontWeight: 600,
                    color: '#1E1914',
                    marginBottom: u(3),
                  }}
                >
                  {f.label}
                </label>
                <input
                  type={f.type}
                  name={f.name}
                  value={form[f.name]}
                  onChange={handleChange}
                  placeholder={f.placeholder}
                  required
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    background: '#EFE9DC',
                    border: '1px solid #B8B0A0',
                    borderRadius: u(6),
                    padding: `${u(8)} ${u(12)}`,
                    fontSize: u(11),
                    color: '#1E1914',
                    outline: 'none',
                    fontFamily: FONT_SANS,
                  }}
                />
              </div>
            ))}

            <button
              type="submit"
              style={{
                width: '100%',
                background: '#747A55',
                color: '#FFFFFF',
                fontFamily: FONT_SANS,
                fontSize: u(12),
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: `${u(10)} 0`,
                borderRadius: u(6),
                border: 'none',
                cursor: 'pointer',
                marginTop: u(4),
                boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
                transition: 'background 0.2s',
              }}
            >
              SUBMIT ENQUIRY
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}

const CSS = `
.ws-wrap {
  width: 100%;
  background: #EFE7D6;
  overflow: hidden;
}
.ws-stage {
  position: relative;
  width: 100%;
  aspect-ratio: 1024 / 572;
  container-type: inline-size;
  overflow: hidden;
  user-select: none;
}
@media (max-width: 768px) {
  .ws-wrap {
    overflow: visible;
  }
}
`;
