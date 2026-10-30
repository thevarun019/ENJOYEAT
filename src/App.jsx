import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import EnjoyeatStory from './EnjoyeatStory';
import ChooseCrunchPage from './ChooseCrunchPage';
import StoryToShopBurstWrapper from './components/StoryToShopBurstWrapper';
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
        {/* Page 1: Hero */}
        <HeroSection />

        {/* Transition Container: Page 2 (Story) + Page 3 (Shop) with Popcorn Burst */}
        <StoryToShopBurstWrapper>
          <EnjoyeatStory />
          <ChooseCrunchPage />
        </StoryToShopBurstWrapper>

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
