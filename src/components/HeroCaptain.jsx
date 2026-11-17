import React from 'react';
import { OceanCanvas } from './OceanCanvas';
import { ThousandSunnySVG, LuffyHeroArtwork, LogPoseIcon } from './Artwork';
import { soundManager } from '../utils/audio';
import { developerInfo } from '../data/portfolioData';

export const HeroCaptain = () => {
  const handleScrollTo = (id) => {
    soundManager.playClick();
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 pb-16"
    >
      {/* 1. Cinematic Animated Ocean Canvas Background */}
      <OceanCanvas />

      {/* 2. Thousand Sunny sailing in the distance on the horizon */}
      <div className="absolute top-[52%] sm:top-[50%] md:top-[48%] left-[8%] sm:left-[15%] md:left-[22%] z-10 pointer-events-none transform -translate-y-1/2">
        <div className="animate-[bounce_6s_infinite_ease-in-out] opacity-85">
          <ThousandSunnySVG className="w-36 sm:w-48 md:w-56 h-auto drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]" />
        </div>
      </div>

      {/* 3. Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        
        {/* Left Column: Developer Introduction */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 pt-8 lg:pt-0">
          
          {/* Captain's Crest / Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/70 border border-amber-400/40 backdrop-blur-md w-fit shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-mono tracking-wider text-amber-200">
              CAPTAIN • {developerInfo.pirateRank.toUpperCase()}
            </span>
            <span className="text-amber-400/40 text-xs">|</span>
            <span className="text-xs text-slate-300 font-sans hidden sm:inline">
              B.Tech CS • Artificial Intelligence
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-2">
            <p className="text-amber-400 font-serif tracking-widest text-sm sm:text-base uppercase flex items-center gap-2">
              <span>⚓</span> Navigating the Grand Line of Code
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
              Hey, I'm <br />
              <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-amber-100 bg-clip-text text-transparent">
                {developerInfo.name}.
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <div className="space-y-3 max-w-2xl">
            <p className="text-lg sm:text-2xl font-serif text-amber-100/90 font-medium leading-snug">
              "{developerInfo.tagline}"
            </p>
            <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed font-sans font-light">
              Computer Science student specializing in Artificial Intelligence. Venturing through deep neural networks, distributed systems, and fluid modern interfaces with the tenacity of a pirate crew chasing the One Piece.
            </p>
          </div>

          {/* Key Quick Badges */}
          <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300 pt-1">
            <span className="px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-700/60">
              ⚡ PyTorch & Deep Learning
            </span>
            <span className="px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-700/60">
              🌊 Full-Stack Next.js / Node
            </span>
            <span className="px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-700/60">
              🎯 60 FPS UI / UX Craft
            </span>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => handleScrollTo('#about')}
              className="px-6 sm:px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-serif font-black text-sm tracking-wide shadow-[0_10px_25px_rgba(245,158,11,0.4)] hover:shadow-[0_15px_35px_rgba(245,158,11,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group"
            >
              <span>Explore My Journey</span>
              <span className="group-hover:translate-x-1 transition-transform">🧭</span>
            </button>

            <button
              onClick={() => handleScrollTo('#projects')}
              className="px-6 sm:px-8 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-amber-200 font-serif font-bold text-sm tracking-wide border border-amber-400/30 hover:border-amber-400/70 shadow-lg backdrop-blur-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <span>View My Projects</span>
              <span>🍖</span>
            </button>
          </div>

          {/* Recruiter Quick Fact */}
          <div className="pt-2 flex items-center gap-3 text-xs text-slate-300/80">
            <span className="text-amber-400">📜</span>
            <span>Looking for High-Impact Software Engineering & AI Roles</span>
          </div>
        </div>

        {/* Right Column: Monkey D. Luffy Standing Confidently */}
        <div className="lg:col-span-5 flex justify-center items-center relative mt-4 lg:mt-0">
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] animate-[pulse_4s_infinite_ease-in-out]">
            {/* Straw Hat Glow */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-48 h-48 bg-amber-400/20 rounded-full blur-3xl -z-10 pointer-events-none" />
            
            {/* Luffy SVG Illustration */}
            <LuffyHeroArtwork className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]" />

            {/* Captain's Bounty Tag floating */}
            <div className="absolute bottom-4 left-4 bg-slate-950/85 backdrop-blur-md border border-amber-500/40 rounded-xl px-3 py-2 shadow-xl flex items-center gap-2.5">
              <span className="text-xl">👒</span>
              <div>
                <p className="text-[10px] font-mono text-amber-300/80 uppercase">Captain's Bounty</p>
                <p className="text-xs font-serif font-bold text-amber-200">{developerInfo.bounty}</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 4. Subtle Animated Scroll Indicator at Bottom */}
      <div
        onClick={() => handleScrollTo('#about')}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group select-none"
      >
        <span className="text-[11px] font-mono uppercase tracking-widest text-amber-200/80 group-hover:text-amber-300 transition-colors">
          Set Sail Down The Grand Line
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-amber-400/40 group-hover:border-amber-400 flex justify-center p-1 transition-colors">
          <div className="w-1.5 h-2.5 bg-amber-400 rounded-full animate-[bounce_1.8s_infinite]" />
        </div>
      </div>
    </section>
  );
};
