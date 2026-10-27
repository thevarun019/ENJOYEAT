import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import EnjoyeatStory from './EnjoyeatStory';
import ChooseCrunchPage from './ChooseCrunchPage';
import BenefitsSection from './BenefitsSection';
import WholesaleSection from './WholesaleSection';
import ContactSection from './ContactSection';
import './App.css';

export default function App() {
  return (
    <div className="min-h-screen bg-[#EDE5D4] text-[#1E1E1C] selection:bg-[#44533E] selection:text-white">
      {/* Site-wide navigation bar */}
      <Navbar />

      {/* Main Pages */}
      <main>
        {/* Page 1: Hero */}
        <HeroSection />

        {/* Page 2: Our Roots in Bihar (Story) */}
        <EnjoyeatStory />

        {/* Page 3: Choose Your Natural Crunch (Shop) */}
        <ChooseCrunchPage />

        {/* Page 4: The Goodness of Sattvik Makhana (Benefits) */}
        <BenefitsSection />

        {/* Page 5: Partner With Us (Wholesale) */}
        <WholesaleSection />

        {/* Page 6: Get in Touch + Footer (Contact) */}
        <ContactSection />
      </main>
    </div>
  );
}
