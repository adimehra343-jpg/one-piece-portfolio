import React, { useState } from 'react';
import { SantoryuSwordsSVG } from './Artwork';
import { soundManager } from '../utils/audio';
import { zoroSkills, animeQuotes } from '../data/portfolioData';

export const ZoroDojo = () => {
  const [slashedCard, setSlashedCard] = useState(null);

  const handleCardMouseEnter = (id) => {
    setSlashedCard(id);
    soundManager.playSwordSlash();
  };

  const handleCardMouseLeave = () => {
    setSlashedCard(null);
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 sm:py-32 bg-gradient-to-b from-[#0A1220] via-[#091526] to-[#0A101D] text-slate-100 overflow-hidden"
    >
      {/* Background Japanese Dojo lattice & subtle mist */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: `
          repeating-linear-gradient(45deg, #FFF 0, #FFF 1px, transparent 0, transparent 40px),
          repeating-linear-gradient(-45deg, #FFF 0, #FFF 1px, transparent 0, transparent 40px)
        `
      }} />

      {/* Emerald & Purple Haki Glow in corners */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 font-mono text-xs tracking-widest uppercase">
            <span>⚔️</span> Section 02 • Zoro's Dojo
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-white">
            Santoryu Technical Mastery
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Honed through thousands of hours of rigorous problem solving. Disciplined, battle-tested software engineering across client, server, and neural architectures.
          </p>

          {/* Three Swords Visual Showcase */}
          <div className="pt-4 flex flex-col items-center">
            <SantoryuSwordsSVG className="w-full max-w-md h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" />
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs font-mono text-slate-400 mt-2">
              <span className="flex items-center gap-1.5 text-slate-200">
                <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#FFF]" />
                Wado Ichimonji (Frontend & Langs)
              </span>
              <span className="flex items-center gap-1.5 text-red-300">
                <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#EF4444]" />
                Sandai Kitetsu (Backend & DBs)
              </span>
              <span className="flex items-center gap-1.5 text-purple-300">
                <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#A855F7]" />
                Enma (AI/ML & Cloud)
              </span>
            </div>
          </div>
        </div>

        {/* 6 Skill Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {zoroSkills.map((category) => {
            const isSlashed = slashedCard === category.id;

            return (
              <div
                key={category.id}
                onMouseEnter={() => handleCardMouseEnter(category.id)}
                onMouseLeave={handleCardMouseLeave}
                className="group relative rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden flex flex-col justify-between cursor-default"
                style={{
                  boxShadow: isSlashed ? `0 12px 35px ${category.glowColor}` : 'none',
                  borderColor: isSlashed ? 'rgba(255,255,255,0.3)' : undefined
                }}
              >
                {/* ================= DYNAMIC SWORD-SLASH ANIMATION EFFECT ================= */}
                {isSlashed && (
                  <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
                    {/* Diagonal Razor Slash Blade Beam */}
                    <div
                      className="absolute w-[200%] h-1 bg-gradient-to-r from-transparent via-white to-transparent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 animate-[slashStreak_0.35s_ease-out_forwards]"
                      style={{
                        boxShadow: `0 0 20px 4px ${category.glowColor}`
                      }}
                    />
                    {/* Flash Sheen */}
                    <div className="absolute inset-0 bg-white/5 animate-[pulse_0.3s_ease-out]" />
                  </div>
                )}

                {/* Card Top: Sword Association Pill & Category */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-800/80 text-amber-300 border border-amber-400/20">
                      {category.sword}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {category.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-black text-white group-hover:text-amber-200 transition-colors">
                    {category.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {category.description}
                  </p>
                </div>

                {/* Card Bottom: Technology Badges (NO FAKE PERCENTAGES) */}
                <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Mastered Competencies</span>
                    <span className="text-amber-400/80">60 FPS Ready</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {category.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="p-2 rounded-xl bg-slate-950/70 border border-slate-800/80 group-hover:border-slate-700 transition-colors flex flex-col justify-between"
                      >
                        <span className="text-xs font-semibold text-slate-200">
                          {tech.name}
                        </span>
                        <span className="text-[10px] font-mono text-amber-300/80 mt-0.5">
                          {tech.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sword Aura Footer Accent */}
                <div className="mt-4 pt-2 flex items-center gap-2 text-[10px] font-mono text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>{category.swordAura}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Zoro Quote Callout */}
        <div className="mt-16 p-6 rounded-2xl bg-slate-900/40 border border-slate-800 max-w-2xl mx-auto text-center backdrop-blur-sm">
          <p className="font-serif italic text-sm text-slate-300 leading-relaxed">
            "{animeQuotes[1].quote}"
          </p>
          <p className="text-xs font-mono text-emerald-400 mt-2 font-semibold">
            — {animeQuotes[1].author} • {animeQuotes[1].role}
          </p>
        </div>

      </div>
    </section>
  );
};
