import React, { useState, useEffect } from 'react';
import { LogPoseIcon } from './Artwork';
import { soundManager } from '../utils/audio';
import { developerInfo } from '../data/portfolioData';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = soundManager.toggle();
    setSoundOn(newState);
  };

  const navLinks = [
    { label: "Captain", href: "#hero" },
    { label: "The Grand Line", href: "#about" },
    { label: "Zoro's Dojo", href: "#skills" },
    { label: "Sanji's Kitchen", href: "#projects" },
    { label: "The Crew", href: "#contact" }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    soundManager.playClick();
    setMobileMenuOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-slate-950/80 backdrop-blur-md border-b border-amber-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-gradient-to-b from-slate-950/80 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Log Pose */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative">
            <LogPoseIcon className="w-8 h-8 text-amber-400 group-hover:rotate-45 transition-transform duration-500" />
            <div className="absolute inset-0 bg-amber-400/20 blur-md rounded-full group-hover:bg-amber-400/40 transition-colors" />
          </div>
          <div>
            <span className="font-serif font-black tracking-wider text-base sm:text-lg text-amber-100 group-hover:text-amber-400 transition-colors">
              {developerInfo.name.toUpperCase()}
            </span>
            <span className="block text-[10px] font-mono tracking-widest text-amber-400/70 -mt-1 uppercase">
              Grand Line Fleet
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-amber-500/20 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-amber-300 rounded-full hover:bg-amber-400/10 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          {/* Sound FX Ambiance Toggle */}
          <button
            onClick={handleSoundToggle}
            className={`p-2 rounded-xl text-xs font-medium flex items-center gap-2 border transition-all ${
              soundOn
                ? 'bg-amber-500/20 text-amber-300 border-amber-400/60 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
            }`}
            title={soundOn ? "Mute Ocean Audio" : "Play Ocean Sea Breeze & Audio FX"}
          >
            <span className="text-sm">{soundOn ? "🔊" : "🔈"}</span>
            <span className="hidden sm:inline font-mono text-[11px]">
              {soundOn ? "SEA SOUNDS ON" : "AUDIO FX"}
            </span>
          </button>

          {/* Bounty Badge */}
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-300 text-xs font-mono">
            <span className="text-amber-400">⚔️</span>
            <span>{developerInfo.bounty}</span>
          </div>

          {/* GitHub Quick Link */}
          <a
            href={developerInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-slate-900/60 text-slate-300 hover:text-white border border-slate-800 hover:border-amber-500/40 transition-colors"
            title="GitHub Profile"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-amber-400 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-amber-500/20 px-4 pt-2 pb-6 space-y-2 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-300 hover:text-amber-300 hover:bg-slate-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex items-center justify-between border-t border-slate-800">
            <span className="text-xs text-amber-400/80 font-mono">Bounty: {developerInfo.bounty}</span>
            <a
              href={developerInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-sky-400 hover:underline"
            >
              LinkedIn Profile ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
