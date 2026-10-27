import React, { useState } from 'react';
import { motion } from 'framer-motion';
import wholesalePallet from './assets/wholesale-pallet.jpg';

const FONT_SERIF = "'Playfair Display', 'Cormorant Garamond', Georgia, serif";
const FONT_SANS  = "'Plus Jakarta Sans', Inter, sans-serif";

const PILLS = [
  '• Premium Quality Sourcing',
  '• Fast & Reliable Shipping',
  '• Bulk Custom Quantities',
];

const WHATSAPP_NUMBER = '919876543210'; // replace with real number

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
    <section
      id="wholesale"
      aria-label="Partner with us — Wholesale"
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

      {/* Scattered makhana decoratives */}
      <img src={new URL('./assets/hero/el_m1.png', import.meta.url).href} alt="" aria-hidden className="ws-deco ws-deco--m1" />
      <img src={new URL('./assets/hero/el_m2.png', import.meta.url).href} alt="" aria-hidden className="ws-deco ws-deco--m2" />
      <img src={new URL('./assets/hero/el_m3.png', import.meta.url).href} alt="" aria-hidden className="ws-deco ws-deco--m3" />
      <img src={new URL('./assets/shop/top-right.png', import.meta.url).href} alt="" aria-hidden className="ws-deco ws-deco--leafr" />

      <div className="ws-inner">
        <div className="ws-layout">
          {/* ── LEFT: text + image + pills ── */}
          <motion.div
            className="ws-left"
            initial={{ x: -180, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
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
              Partner<br />With Us
            </h1>
            <p
              style={{
                fontSize: 'clamp(13px, 1.1vw, 17px)',
                color: '#3B3026',
                maxWidth: 490,
                marginTop: 12,
                lineHeight: 1.65,
              }}
            >
              Grow your business with India's premium makhana. Fill out the form below for bulk &amp; wholesale enquiries.
            </p>

            {/* Image + pill badges */}
            <div style={{ position: 'relative', marginTop: 24, width: '100%', maxWidth: 480 }}>
              <img
                src={wholesalePallet}
                alt="Enjoyeat Makhana wholesale pallet with boxes and jute sacks"
                className="ws-pallet-img"
                draggable={false}
              />
              {/* Staggered olive pill badges */}
              {PILLS.map((pill, i) => (
                <motion.div
                  key={pill}
                  className="ws-pill"
                  style={{ top: `${42 + i * 15}%`, left: `${42 + i * 5}%` }}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15, ease: 'easeOut' }}
                >
                  {pill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Enquiry Form ── */}
          <motion.div
            className="ws-form-card"
            initial={{ x: 180, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            <h2 className="ws-form-title">BULK ENQUIRY</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { label: 'Full Name / Business Name', name: 'name',     placeholder: 'John Doe / ABC Retailers', type: 'text' },
                { label: 'Email & Phone Number',      name: 'email',    placeholder: 'example@email.com',         type: 'text' },
                { label: 'Estimated Quantity',         name: 'quantity', placeholder: '(e.g., 100kg, 500kg, 1 Ton)', type: 'text' },
                { label: 'Delivery Location',          name: 'location', placeholder: 'State / City',               type: 'text' },
              ].map((field) => (
                <div key={field.name} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <label
                    htmlFor={`ws-${field.name}`}
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: '#1E1914',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {field.label}
                  </label>
                  <input
                    id={`ws-${field.name}`}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.name]}
                    onChange={handleChange}
                    required
                    className="ws-input"
                  />
                </div>
              ))}

              <button type="submit" className="ws-submit-btn">
                SUBMIT ENQUIRY
              </button>
            </form>
          </motion.div>
        </div>


      </div>
    </section>
  );
}

const CSS = `
.ws-deco {
  position: absolute;
  pointer-events: none;
  z-index: 0;
}
.ws-deco--m1 { top: 14%; right: 3%; width: clamp(28px, 3vw, 44px); opacity: 0.7; }
.ws-deco--m2 { top: 32%; right: 6%; width: clamp(20px, 2vw, 30px); opacity: 0.6; }
.ws-deco--m3 { bottom: 22%; right: 2%; width: clamp(22px, 2.2vw, 32px); opacity: 0.5; }
.ws-deco--leafr { right: -20px; top: 80px; width: clamp(100px, 10vw, 180px); opacity: 0.45; }

.ws-inner {
  position: relative;
  z-index: 1;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 24px 48px 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
}
.ws-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}
.ws-left {
  display: flex;
  flex-direction: column;
}
.ws-pallet-img {
  width: 100%;
  max-width: 480px;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 20px 50px rgba(0,0,0,0.14);
}
.ws-pill {
  position: absolute;
  background: #7A7E59;
  color: #fff;
  font-size: clamp(12px, 1.1vw, 15px);
  font-weight: 500;
  padding: 10px 18px;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.65);
  box-shadow: 0 8px 24px rgba(0,0,0,0.14);
  white-space: nowrap;
  z-index: 5;
}
.ws-form-card {
  background: #F5F0E6;
  border-radius: 18px;
  padding: clamp(20px, 2.5vw, 36px);
  box-shadow: 0 20px 50px rgba(0,0,0,0.10);
  border: 1px solid #fff;
  margin-top: 8px;
}
.ws-form-title {
  font-family: 'Playfair Display', 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(18px, 2vw, 26px);
  font-weight: 700;
  color: #1E1914;
  text-align: center;
  letter-spacing: 0.06em;
  margin: 0 0 20px;
}
.ws-input {
  background: #EFE9DC;
  border: 1px solid #B8B0A0;
  border-radius: 6px;
  padding: 10px 14px;
  font-size: clamp(12px, 1vw, 14px);
  color: #1E1914;
  width: 100%;
  outline: none;
  transition: border-color 0.2s;
  font-family: 'Plus Jakarta Sans', Inter, sans-serif;
}
.ws-input::placeholder { color: #9a9080; }
.ws-input:focus { border-color: #9E7B42; }
.ws-submit-btn {
  width: 100%;
  background: #747A55;
  color: #fff;
  font-size: clamp(12px, 1vw, 14px);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-top: 6px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  transition: background 0.2s, transform 0.15s;
  font-family: 'Plus Jakarta Sans', Inter, sans-serif;
}
.ws-submit-btn:hover { background: #5F6544; transform: translateY(-2px); }
`;

