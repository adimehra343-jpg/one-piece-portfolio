import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroCaptain } from './components/HeroCaptain';
import { GrandLineAbout } from './components/GrandLineAbout';
import { ZoroDojo } from './components/ZoroDojo';
import { SanjiKitchen } from './components/SanjiKitchen';
import { LuffyStretchingArm } from './components/LuffyStretchingArm';
import { CrewContact } from './components/CrewContact';
import { Footer } from './components/Footer';

export function App() {
  const [reachedBottom, setReachedBottom] = useState(false);

  return (
    <div className="min-h-screen bg-[#080D1A] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 relative overflow-x-hidden">
      {/* 1. Global Navigation Bar */}
      <Navbar />

      {/* 2. Opening Hero Section — Meet the Captain (Luffy & Thousand Sunny) */}
      <main>
        <HeroCaptain />

        {/* 3. The Grand Line — About Me (CS Student Specializing in AI & Timeline) */}
        <GrandLineAbout />

        {/* 4. Zoro's Dojo — Santoryu Technical Skills (Interactive Sword Slashes) */}
        <ZoroDojo />

        {/* 5. Sanji's Kitchen — Gourmet Projects (3D Floating Tilt Cards) */}
        <SanjiKitchen />

        {/* 6. The Crew — Contact Section (Sunset Scene with Luffy, Zoro & Sanji) */}
        <CrewContact />
      </main>

      {/* 7. Signature Interaction — Luffy's Elastic Stretching Arm & Meat Grab */}
      <LuffyStretchingArm onReachBottom={() => setReachedBottom(true)} />

      {/* 8. Nautical Grand Line Footer */}
      <Footer />
    </div>
  );
}

export default App;
