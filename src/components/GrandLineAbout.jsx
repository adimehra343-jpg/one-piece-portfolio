import React, { useState } from 'react';
import { LogPoseIcon } from './Artwork';
import { soundManager } from '../utils/audio';
import { aboutGrandLine, developerInfo } from '../data/portfolioData';

export const GrandLineAbout = () => {
  const [activeMilestone, setActiveMilestone] = useState(0);

  const handleSelectMilestone = (idx) => {
    soundManager.playClick();
    setActiveMilestone(idx);
  };

  return (
    <section
      id="about"
      className="relative min-h-screen py-24 sm:py-32 bg-gradient-to-b from-[#080D1A] via-[#0D1829] to-[#0A1220] overflow-hidden text-slate-100"
    >
      {/* Nautical Cartography Grid & Map Lines in Background */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{
        backgroundImage: `
          radial-gradient(circle at 50% 50%, #F59E0B 1px, transparent 1px),
          linear-gradient(to right, #38BDF8 1px, transparent 1px),
          linear-gradient(to bottom, #38BDF8 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px, 80px 80px, 80px 80px'
      }} />

      {/* Floating Island / Grand Line Map Route SVGs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 font-mono text-xs tracking-widest uppercase">
            <span>🗺️</span> Section 01 • The Grand Line
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-white">
            About The Navigator
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Charting a course through complex computational landscapes. From foundational algorithms to bleeding-edge neural frontiers.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          
          {/* Card 1: My Journey into Programming */}
          <div className="group relative rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-amber-400/50 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:shadow-[0_10px_30px_rgba(245,158,11,0.15)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                ⛵
              </div>
              <h3 className="text-xl font-serif font-bold text-amber-200">
                The Maiden Voyage: Journey into Code
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {aboutGrandLine.journey}
              </p>
            </div>
            <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between text-xs font-mono text-amber-300/80">
              <span>ORIGIN: East Blue Terminal</span>
              <span>EST. YEARS OF SAILING</span>
            </div>
          </div>

          {/* Card 2: Interests in Web & AI/ML */}
          <div className="group relative rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-sky-400/50 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:shadow-[0_10px_30px_rgba(56,189,248,0.15)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                🧠
              </div>
              <h3 className="text-xl font-serif font-bold text-sky-200">
                Dual Mastery: Web Engineering & AI/ML
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {aboutGrandLine.interests}
              </p>
            </div>
            <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between text-xs font-mono text-sky-300/80">
              <span>SPECIALIZATION: Deep Learning</span>
              <span>STACK: PyTorch • Next.js</span>
            </div>
          </div>

          {/* Card 3: Ambitions */}
          <div className="group relative rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-purple-400/50 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                🌟
              </div>
              <h3 className="text-xl font-serif font-bold text-purple-200">
                The New World: Long-Term Ambitions
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {aboutGrandLine.ambition}
              </p>
            </div>
            <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between text-xs font-mono text-purple-300/80">
              <span>TARGET: Foundational AI Impact</span>
              <span>GLOBAL SCALE</span>
            </div>
          </div>

          {/* Card 4: Problem-Solving Approach */}
          <div className="group relative rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-orange-400/50 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:shadow-[0_10px_30px_rgba(249,115,22,0.15)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                👑
              </div>
              <h3 className="text-xl font-serif font-bold text-orange-200">
                The Captain's Mindset: Problem Solving
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {aboutGrandLine.problemSolvingApproach}
              </p>
            </div>
            <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between text-xs font-mono text-orange-300/80">
              <span>PHILOSOPHY: Relentless Momentum</span>
              <span>NO SHORTCUTS</span>
            </div>
          </div>

        </div>

        {/* ================= MAP-INSPIRED TIMELINE WITH ANIMATED MILESTONES ================= */}
        <div className="mt-24 pt-12 border-t border-slate-800/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-mono text-amber-400 uppercase tracking-widest flex items-center gap-2">
                <span>📍</span> Nautical Route Chart
              </p>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                Grand Line Waypoints & Milestones
              </h3>
            </div>
            <p className="text-xs text-slate-400 max-w-sm font-light">
              Click each island waypoint along the sea route to inspect historical voyages, technical discoveries, and breakthroughs.
            </p>
          </div>

          {/* Sea Route Progress Bar / Island Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {aboutGrandLine.milestones.map((ms, idx) => {
              const isSelected = activeMilestone === idx;
              return (
                <button
                  key={ms.id}
                  onClick={() => handleSelectMilestone(idx)}
                  className={`p-4 rounded-2xl text-left border transition-all duration-300 relative overflow-hidden ${
                    isSelected
                      ? 'bg-amber-500/15 border-amber-400 shadow-[0_4px_20px_rgba(245,158,11,0.25)]'
                      : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                  }`}
                >
                  {/* Waypoint Number Pill */}
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                    }`}>
                      0{idx + 1}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{ms.period}</span>
                  </div>
                  <h4 className={`text-sm font-serif font-bold ${
                    isSelected ? 'text-amber-200' : 'text-slate-300'
                  }`}>
                    {ms.island}
                  </h4>
                  <p className="text-[11px] text-slate-400 truncate mt-1">
                    {ms.coordinates}
                  </p>
                  {/* Active Indicator Underline */}
                  {isSelected && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Milestone Detailed Island Card */}
          {(() => {
            const current = aboutGrandLine.milestones[activeMilestone];
            return (
              <div className="relative rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-amber-400/30 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Coordinates & Island Emblem */}
                  <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 text-center space-y-4">
                    <div className="w-20 h-20 rounded-full bg-amber-500/10 border-2 border-amber-400/40 flex items-center justify-center text-4xl shadow-inner">
                      🏝️
                    </div>
                    <div>
                      <span className="text-xs font-mono text-amber-400/80 uppercase tracking-wider">
                        Waypoint 0{activeMilestone + 1}
                      </span>
                      <h4 className="text-xl font-serif font-black text-amber-100 mt-1">
                        {current.island}
                      </h4>
                      <p className="text-xs font-mono text-slate-400 mt-1">
                        {current.coordinates}
                      </p>
                    </div>
                    <div className="w-full pt-3 border-t border-slate-800 flex justify-center">
                      <span className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-mono">
                        <LogPoseIcon className="w-4 h-4 text-amber-400" />
                        Log Pose Locked
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Narrative & Technical Discoveries */}
                  <div className="lg:col-span-8 space-y-5">
                    <div>
                      <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                        Expedition Record • {current.period}
                      </span>
                      <h4 className="text-2xl sm:text-3xl font-serif font-black text-white mt-1">
                        {current.title}
                      </h4>
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                      {current.description}
                    </p>

                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Battle-Tested Skills Acquired at this Port:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {current.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-200 text-xs font-mono shadow-sm"
                          >
                            ⚔️ {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })()}

        </div>

      </div>
    </section>
  );
};
