import React from 'react';
import Navbar from './Navbar';
import HeroToStoryTransition from './HeroToStoryTransition';
import ChooseCrunchPage from './ChooseCrunchPage';
import BenefitsSection from './BenefitsSection';
import WholesaleSection from './WholesaleSection';
import ContactSection from './ContactSection';
import './App.css';

export default function App() {
  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-[#EFE7D6] text-[#1E1E1C] selection:bg-[#44533E] selection:text-white">
      {/* Site-wide navigation bar */}
      <Navbar />

      {/* Main Pages */}
      <main className="w-full overflow-x-hidden">
        {/* Spatial Shift: Page 1 (Hero) -> Page 2 (Story) */}
        <HeroToStoryTransition />

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
