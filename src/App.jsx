import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import EnjoyeatStory from './EnjoyeatStory';
import ChooseCrunchPage from './ChooseCrunchPage';
import StoryToShopBurstWrapper from './components/StoryToShopBurstWrapper';
import BenefitsSection from './BenefitsSection';
import WholesaleSection from './WholesaleSection';
import ContactSection from './ContactSection';
import MobileAlternatingSection from './components/MobileAlternatingSection';
import './App.css';

export default function App() {
  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-[#EFE7D6] text-[#1E1E1C] selection:bg-[#44533E] selection:text-white">
      {/* Site-wide navigation bar */}
      <Navbar />

      {/* Main Pages with Alternating Mobile Pop-Up Transitions */}
      <main className="w-full overflow-x-hidden">
        {/* Page 1: Hero (Natural Entry) */}
        <HeroSection />

        {/* Transition Container: Page 2 (Story) + Page 3 (Shop) with Desktop Popcorn Burst */}
        <StoryToShopBurstWrapper>
          {/* Page 2: Our Story — Pops up from the RIGHT side on mobile */}
          <MobileAlternatingSection direction="right" id="story-mobile-wrap">
            <EnjoyeatStory />
          </MobileAlternatingSection>

          {/* Page 3: Shop — Pops up from the LEFT side on mobile */}
          <MobileAlternatingSection direction="left" id="shop-mobile-wrap">
            <ChooseCrunchPage />
          </MobileAlternatingSection>
        </StoryToShopBurstWrapper>

        {/* Page 4: Benefits — Pops up from the RIGHT side on mobile */}
        <MobileAlternatingSection direction="right" id="benefits-mobile-wrap">
          <BenefitsSection />
        </MobileAlternatingSection>

        {/* Page 5: Wholesale — Pops up from the LEFT side on mobile */}
        <MobileAlternatingSection direction="left" id="wholesale-mobile-wrap">
          <WholesaleSection />
        </MobileAlternatingSection>

        {/* Page 6: Contact — Pops up from the RIGHT side on mobile */}
        <MobileAlternatingSection direction="right" id="contact-mobile-wrap">
          <ContactSection />
        </MobileAlternatingSection>
      </main>
    </div>
  );
}
