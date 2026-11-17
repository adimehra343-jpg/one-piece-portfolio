import React from 'react';
import { LogPoseIcon } from './Artwork';
import { soundManager } from '../utils/audio';
import { developerInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060A14] border-t border-amber-500/20 py-12 text-slate-400 text-xs overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Coordinates */}
        <div className="flex items-center gap-3">
          <LogPoseIcon className="w-6 h-6 text-amber-400" />
          <div>
            <p className="font-serif font-black text-sm text-amber-200">
              {developerInfo.name.toUpperCase()} • GRAND LINE FLEET
            </p>
            <p className="text-[11px] font-mono text-slate-500">
              Forged with React, Tailwind, and Web Audio • One Piece Artistry
            </p>
          </div>
        </div>

        {/* Center: Marine / Pirate Motto */}
        <div className="text-center md:text-left font-serif italic text-slate-400 text-xs max-w-sm">
          "Inherited Will, The Swell of the Age, and The Dreams of Its People — These are things that will never be stopped."
        </div>

        {/* Right: Quick Links & Sail to Top */}
        <div className="flex items-center gap-4">
          <a
            href={developerInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300 transition-colors"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href={developerInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300 transition-colors"
          >
            LinkedIn
          </a>
          <span>•</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400/50 text-amber-300 font-mono text-[11px] transition-colors flex items-center gap-1"
          >
            <span>Top</span>
            <span>↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
