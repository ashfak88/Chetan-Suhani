import React, { useState } from 'react';
import { OpeningCurtain } from './components/OpeningCurtain';
import { HeroSection } from './components/HeroSection';
import { CherishSection } from './components/CherishSection';
import { CountdownSection } from './components/CountdownSection';
import { InLovingMemorySection } from './components/InLovingMemorySection';
import { CoupleDetailsSection } from './components/CoupleDetailsSection';
import { MomentsGallery } from './components/MomentsGallery';
import { CelebrationsSection } from './components/CelebrationsSection';
import { VenueSection } from './components/VenueSection';
import { SpecialRegardsSection } from './components/SpecialRegardsSection';
import { Footer } from './components/Footer';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-ivory text-foreground selection:bg-gold/20">
      {/* Opening Invitation Screen Modal */}
      <OpeningCurtain isOpen={isOpen} onOpen={() => setIsOpen(true)} />

      {/* Main Invitation Page */}
      <main className="relative bg-ivory">
        <HeroSection />
        <CherishSection />
        <CountdownSection />
        <InLovingMemorySection />
        <CoupleDetailsSection />
        <MomentsGallery />
        <CelebrationsSection />
        <VenueSection />
        <SpecialRegardsSection />
        <Footer />
      </main>
    </div>
  );
}
