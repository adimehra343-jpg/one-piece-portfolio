import React, { useState, useRef } from 'react';
import { soundManager } from '../utils/audio';
import { sanjiProjects, animeQuotes } from '../data/portfolioData';

// Individual 3D Tilt Project Card
const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7; // max 7 deg tilt
    const rotateY = ((x - centerX) / centerX) * 7;

    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: 'transform 0.15s ease-out, box-shadow 0.25s ease'
      }}
      className="group relative rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-amber-400/40 p-6 sm:p-7 backdrop-blur-md shadow-xl flex flex-col justify-between overflow-hidden"
    >
      {/* Dynamic Cursor Light Glow following mouse */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 220px at ${glowPos.x}% ${glowPos.y}%, rgba(245, 158, 11, 0.15), transparent 70%)`
        }}
      />

      {/* Card Header & Recipe Badge */}
      <div className="space-y-3 relative z-10">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-400/30 font-semibold tracking-wider uppercase">
            {project.badge}
          </span>
          <span className="text-[11px] font-mono text-slate-400">
            {project.category}
          </span>
        </div>

        <div>
          <span className="text-[11px] font-mono text-amber-400/80 flex items-center gap-1.5">
            <span>🔥</span> {project.flavor}
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-black text-white group-hover:text-amber-200 transition-colors mt-1">
            {project.title}
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
          {project.description}
        </p>

        {/* Technical Stats Highlight */}
        {project.stats && (
          <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-2xl bg-slate-950/60 border border-slate-800/80 text-center font-mono">
            {Object.entries(project.stats).map(([k, v]) => (
              <div key={k}>
                <span className="block text-[10px] text-slate-400 uppercase tracking-wider">{k}</span>
                <span className="block text-xs font-bold text-amber-300">{v}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300 text-[11px] font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer: Action Buttons */}
      <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between gap-3 relative z-10">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => soundManager.playClick()}
          className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-serif font-black text-xs text-center shadow-lg hover:shadow-amber-500/30 transition-all active:scale-95 flex items-center justify-center gap-1.5"
        >
          <span>View Project</span>
          <span>↗</span>
        </a>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => soundManager.playClick()}
          className="py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white font-mono text-xs border border-slate-700 hover:border-slate-600 transition-all active:scale-95 flex items-center gap-1.5"
          title="Inspect Source Code on GitHub"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
};

export const SanjiKitchen = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "AI & Machine Learning",
    "Computer Vision",
    "Full-Stack Web",
    "Systems & Security"
  ];

  const filteredProjects = activeFilter === "All"
    ? sanjiProjects
    : sanjiProjects.filter(p => p.category === activeFilter);

  const handleFilterClick = (cat) => {
    soundManager.playClick();
    setActiveFilter(cat);
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 sm:py-32 bg-gradient-to-b from-[#0A101D] via-[#0C1527] to-[#0A0F1D] text-slate-100 overflow-hidden"
    >
      {/* Background Subtle Flame and Maritime Patterns */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 font-mono text-xs tracking-widest uppercase">
            <span>🍳</span> Section 03 • Sanji's Kitchen
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-white">
            Gourmet Engineering Creations
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Prepared with passion, refined architectural ingredients, and uncompromising attention to detail. Every project crafted to feed curiosity and deliver real utility.
          </p>

          {/* GitHub Profile Verification Badge */}
          <div className="pt-2 flex justify-center">
            <a
              href="https://github.com/adimehra343-jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700 hover:border-amber-400/50 text-xs font-mono text-slate-300 hover:text-amber-300 transition-colors shadow-sm"
            >
              <span>⚓ Verified GitHub:</span>
              <span className="font-bold text-amber-400">@adimehra343-jpg</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-12 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterClick(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-serif font-bold transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/30 scale-105'
                  : 'bg-slate-900/60 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat === "All" ? "🍽️ All Courses" : cat}
            </button>
          ))}
        </div>

        {/* Floating 3D Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Sanji Culinary Quote */}
        <div className="mt-20 p-6 rounded-2xl bg-slate-900/40 border border-slate-800 max-w-2xl mx-auto text-center backdrop-blur-sm">
          <p className="font-serif italic text-sm text-slate-300 leading-relaxed">
            "{animeQuotes[2].quote}"
          </p>
          <p className="text-xs font-mono text-amber-400 mt-2 font-semibold">
            — {animeQuotes[2].author} • {animeQuotes[2].role}
          </p>
        </div>

      </div>
    </section>
  );
};
