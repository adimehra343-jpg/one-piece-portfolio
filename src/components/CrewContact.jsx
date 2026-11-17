import React, { useState } from 'react';
import { CrewSunsetSVG, LogPoseIcon } from './Artwork';
import { soundManager } from '../utils/audio';
import { developerInfo } from '../data/portfolioData';

export const CrewContact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const handleCopyEmail = () => {
    soundManager.playClick();
    navigator.clipboard.writeText(developerInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    soundManager.playChime();
    setFormSent(true);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 sm:py-32 bg-gradient-to-b from-[#0A0F1D] via-[#141529] to-[#080D1A] text-slate-100 overflow-hidden"
    >
      {/* Sunset Glow Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-orange-500/15 via-amber-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-400/30 text-orange-300 font-mono text-xs tracking-widest uppercase">
            <span>🌅</span> Section 04 • The Crew
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-white leading-tight">
            Every great adventure needs a crew.
          </h2>
          <p className="text-base sm:text-lg text-amber-200/90 font-serif font-medium">
            Have an idea? Let's build something amazing together.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
            Whether you are looking to recruit a dedicated AI & Full-Stack engineer, collaborate on breakthrough software, or discuss distributed systems over tea, my transponder snail is always active.
          </p>
        </div>

        {/* ================= BREATHTAKING SUNSET SCENE WITH LUFFY, ZORO & SANJI ================= */}
        <div className="my-14 flex justify-center">
          <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden border border-amber-500/30 bg-slate-950/80 shadow-[0_20px_50px_rgba(249,115,22,0.2)] backdrop-blur-xl">
            <CrewSunsetSVG className="w-full h-auto" />
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-amber-300/80">
              <span className="flex items-center gap-1.5">
                <span>⚓</span> Straw Hat Trio • Grand Line Horizon
              </span>
              <span className="hidden sm:inline">Coord: 35°41'N, 139°46'E</span>
            </div>
          </div>
        </div>

        {/* Contact Links & Transmission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-12">
          
          {/* Left Column: Direct Links & Badges */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* GitHub Card */}
            <a
              href={developerInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playClick()}
              className="group p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-400/50 flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-200 group-hover:text-amber-400 group-hover:border-amber-400/40 transition-colors">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider">GitHub Profile</span>
                <h4 className="text-base font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                  github.com/adimehra343-jpg
                </h4>
                <p className="text-xs text-slate-400">Repositories, architectures, and open source</p>
              </div>
              <span className="text-slate-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all">↗</span>
            </a>

            {/* LinkedIn Card */}
            <a
              href={developerInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playClick()}
              className="group p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-sky-400/50 flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-200 group-hover:text-sky-400 group-hover:border-sky-400/40 transition-colors">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider">LinkedIn Network</span>
                <h4 className="text-base font-serif font-bold text-white group-hover:text-sky-300 transition-colors">
                  Aditya Mehra on LinkedIn
                </h4>
                <p className="text-xs text-slate-400">Professional connections & endorsements</p>
              </div>
              <span className="text-slate-400 group-hover:text-sky-400 group-hover:translate-x-1 transition-all">↗</span>
            </a>

            {/* Email Direct & Copy Card */}
            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-amber-400 text-xl">
                  ✉️
                </div>
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider">Direct Transponder Snail</span>
                  <h4 className="text-sm sm:text-base font-serif font-bold text-white">
                    {developerInfo.email}
                  </h4>
                  <p className="text-xs text-slate-400">Replies usually within 24 hours</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-mono border border-slate-700 transition-colors"
                >
                  {copiedEmail ? "✓ Copied!" : "Copy"}
                </button>
                <a
                  href={`mailto:${developerInfo.email}`}
                  className="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 text-xs font-mono border border-amber-500/40 transition-colors text-center"
                >
                  Mailto
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              <div className="text-xs">
                <span className="font-bold text-emerald-300">Open for Immediate Voyage:</span>
                <span className="text-slate-300 ml-1">AI / ML Engineer, Full-Stack Developer, or Software Engineering Internships & Full-Time.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Den Den Mushi Transmission Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/80 border border-amber-500/30 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-xl">
                  🐚
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold text-amber-200">
                    Transponder Snail (Den Den Mushi)
                  </h4>
                  <p className="text-xs font-mono text-slate-400">
                    Puru-puru-puru... transmit your message directly
                  </p>
                </div>
              </div>

              {formSent ? (
                <div className="p-8 rounded-2xl bg-amber-500/10 border border-amber-400/40 text-center space-y-4">
                  <div className="text-4xl animate-bounce">📡✨</div>
                  <h4 className="text-xl font-serif font-black text-amber-200">
                    Transmission Dispatched to the Thousand Sunny!
                  </h4>
                  <p className="text-sm text-slate-300 font-light max-w-md mx-auto">
                    Thank you for reaching out, {formState.name || 'Nakama'}! Aditya will review your signal and contact you promptly at {formState.email || 'your email'}.
                  </p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="px-5 py-2 rounded-xl bg-slate-800 text-amber-300 text-xs font-mono border border-slate-700 hover:bg-slate-700 transition-colors"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-amber-300/80 uppercase mb-1">
                        Your Name / Crew
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Captain Monkey, Recruiter, Client"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-amber-400 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-amber-300/80 uppercase mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="your.email@domain.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-amber-400 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-amber-300/80 uppercase mb-1">
                      Voyage Proposal / Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about your team, project idea, or open roles..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-amber-400 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-serif font-black text-sm tracking-wide shadow-lg hover:shadow-amber-500/40 transition-all active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    <span>Transmit Signal (Den Den Mushi)</span>
                    <span>🐚⚡</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
