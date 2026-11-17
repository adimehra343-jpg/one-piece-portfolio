import React, { useEffect, useState, useRef } from 'react';
import { soundManager } from '../utils/audio';
import { MangaMeatSVG } from './Artwork';

export const LuffyStretchingArm = ({ onReachBottom }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [hasCelebrated, setHasCelebrated] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [confettiParticles, setConfettiParticles] = useState([]);
  
  const trackRef = useRef(null);
  const animationFrameRef = useRef(null);
  const targetProgress = useRef(0);
  const currentProgress = useRef(0);
  const velocity = useRef(0);
  const lastScrollY = useRef(0);
  const wobbleRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const p = Math.max(0, Math.min(1, window.scrollY / scrollHeight));
        targetProgress.current = p;
        velocity.current = (window.scrollY - lastScrollY.current) / (scrollHeight || 1);
        lastScrollY.current = window.scrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Physics loop for smooth elastic stretching & recoil
    const updatePhysics = () => {
      // Elastic spring interpolation
      const diff = targetProgress.current - currentProgress.current;
      currentProgress.current += diff * 0.14; // smooth follow
      wobbleRef.current += 0.08;

      setScrollProgress(currentProgress.current);

      // Check bottom threshold
      const reached = currentProgress.current >= 0.95;
      setIsAtBottom(reached);

      animationFrameRef.current = requestAnimationFrame(updatePhysics);
    };

    animationFrameRef.current = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  // Trigger celebration once when reaching bottom
  useEffect(() => {
    if (isAtBottom && !hasCelebrated) {
      setHasCelebrated(true);
      setBannerVisible(true);
      soundManager.playMeatGrabCelebration();

      // Screen bounce
      document.body.classList.add('screen-bounce-active');
      setTimeout(() => {
        document.body.classList.remove('screen-bounce-active');
      }, 700);

      // Spawn celebratory golden confetti particles
      const particles = Array.from({ length: 42 }).map((_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 180,
        y: (Math.random() - 0.5) * 180,
        color: ['#F59E0B', '#EF4444', '#FBBF24', '#3B82F6', '#10B981', '#FFF'][i % 6],
        size: Math.random() * 8 + 4,
        rot: Math.random() * 360
      }));
      setConfettiParticles(particles);

      if (onReachBottom) onReachBottom();
    } else if (!isAtBottom && currentProgress.current < 0.88) {
      setHasCelebrated(false);
    }
  }, [isAtBottom, hasCelebrated, onReachBottom]);

  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dimensions for SVG rubber arm
  // The track is fixed on the right: width ~ 64px, height ~ 70vh
  const trackHeight = 440;
  const startX = 32;
  const startY = 56;
  const targetY = startY + (trackHeight - 110) * scrollProgress;

  // Elastic wobble calculation: arm curves slightly with motion velocity
  const curvature = Math.sin(scrollProgress * Math.PI * 3 + wobbleRef.current) * (4 + Math.abs(velocity.current) * 80);
  const midX = startX + curvature;
  const midY = (startY + targetY) / 2;

  // Rubber elasticity: arm gets slightly thinner as it stretches
  const armThickness = Math.max(5.5, 9.5 - scrollProgress * 3.5);

  return (
    <>
      {/* Vertical Fixed Indicator Track on the Right */}
      <aside
        aria-label="Interactive Grand Line Scroll Progress"
        className="fixed right-2 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center select-none"
        style={{ height: `${trackHeight}px` }}
      >
        {/* Background Guide Rail (Nautical Golden Cord / Gauge) */}
        <div className="absolute top-12 bottom-12 w-1.5 bg-gradient-to-b from-amber-400/20 via-sky-500/20 to-orange-500/30 rounded-full backdrop-blur-sm pointer-events-none" />
        
        {/* Nautical Waypoint Ticks */}
        <div className="absolute top-14 bottom-14 flex flex-col justify-between items-center pointer-events-none opacity-40">
          <span className="w-2.5 h-0.5 bg-amber-400/80 rounded" title="East Blue" />
          <span className="w-2 h-0.5 bg-sky-400/80 rounded" title="Grand Line" />
          <span className="w-2.5 h-0.5 bg-purple-400/80 rounded" title="New World" />
          <span className="w-2 h-0.5 bg-rose-400/80 rounded" title="Laugh Tale" />
        </div>

        {/* SVG Canvas for Luffy Bust, Stretching Arm, and Hand */}
        <svg
          ref={trackRef}
          width="74"
          height={trackHeight}
          className="overflow-visible pointer-events-none"
          viewBox={`0 0 74 ${trackHeight}`}
        >
          <defs>
            <linearGradient id="armFlesh" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F5CD9B" />
              <stop offset="50%" stopColor="#FDE6C8" />
              <stop offset="100%" stopColor="#EAB308" />
            </linearGradient>
            <filter id="rubberGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#F59E0B" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* ================= LUFFY BUST AT TOP ================= */}
          <g transform="translate(12, 2)">
            {/* Straw Hat */}
            <ellipse cx="25" cy="18" rx="24" ry="7" fill="#FBBF24" stroke="#78350F" strokeWidth="1.5" />
            <path d="M12 18 C 12 7, 38 7, 38 18 Z" fill="#FBBF24" stroke="#78350F" strokeWidth="1.5" />
            <path d="M12 16 Q 25 14 38 16 L 38 19 Q 25 17 12 19 Z" fill="#DC2626" />
            
            {/* Black Hair */}
            <path d="M14 20 C 12 28, 16 32, 20 30 C 23 34, 28 34, 32 30 C 35 32, 38 28, 36 20 Z" fill="#111827" />

            {/* Face */}
            <ellipse cx="25" cy="27" rx="10" ry="9" fill="#FDE6C8" stroke="#78350F" strokeWidth="1" />
            {/* Scar under left eye */}
            <path d="M20 29 L 23 30" stroke="#DC2626" strokeWidth="1" />
            {/* Big Smile */}
            <path d="M19 30 Q 25 35 31 30 Z" fill="#FFF" stroke="#111827" strokeWidth="1" />
            {/* Eyes */}
            <circle cx="21" cy="26" r="1.5" fill="#111827" />
            <circle cx="29" cy="26" r="1.5" fill="#111827" />

            {/* Red Vest Torso */}
            <path d="M16 34 L 14 48 L 36 48 L 34 34 Z" fill="#DC2626" stroke="#991B1B" strokeWidth="1.2" />
            {/* Yellow sash snippet */}
            <rect x="15" y="46" width="20" height="4" fill="#F59E0B" />

            {/* Left Arm Anchoring to track */}
            <path d="M14 36 Q 4 42 10 48" stroke="#FDE6C8" strokeWidth="4" strokeLinecap="round" fill="none" />
            <circle cx="10" cy="48" r="3" fill="#F5CD9B" stroke="#78350F" strokeWidth="1" />

            {/* Right Shoulder (where stretching arm originates) */}
            <circle cx="34" cy="38" r="4" fill="#F5CD9B" stroke="#9A3412" strokeWidth="1" />
          </g>

          {/* ================= ELASTIC STRETCHING ARM ================= */}
          {/* Outer stroke / Muscle outline */}
          <path
            d={`M ${startX} ${startY} Q ${midX} ${midY} ${startX} ${targetY}`}
            fill="none"
            stroke="#9A3412"
            strokeWidth={armThickness + 2}
            strokeLinecap="round"
          />
          {/* Inner Flesh with highlight */}
          <path
            d={`M ${startX} ${startY} Q ${midX} ${midY} ${startX} ${targetY}`}
            fill="none"
            stroke="url(#armFlesh)"
            strokeWidth={armThickness}
            strokeLinecap="round"
            filter="url(#rubberGlow)"
          />

          {/* Arm Elastic Joint Rings (visual rubber rings showing tension) */}
          {[0.25, 0.5, 0.75].map((factor, i) => {
            const yPos = startY + (targetY - startY) * factor;
            const xPos = startX + Math.sin(factor * Math.PI) * curvature * 0.8;
            return (
              <ellipse
                key={i}
                cx={xPos}
                cy={yPos}
                rx={armThickness / 2 + 1}
                ry={2}
                fill="#FBBF24"
                opacity={0.65}
              />
            );
          })}

          {/* ================= LUFFY'S HAND (SCROLL THUMB) ================= */}
          <g transform={`translate(${startX - 18}, ${targetY - 14})`}>
            {isAtBottom ? (
              // CLENCHED GRABBING HAND (TIGHTLY GRIPPING THE MEAT)
              <g className="animate-pulse">
                {/* Clenched Fist Fingers wrapping around bone */}
                <ellipse cx="18" cy="18" rx="10" ry="8" fill="#FDE6C8" stroke="#78350F" strokeWidth="1.5" />
                {/* Knuckles clamped */}
                <path d="M11 15 Q 18 12 25 15" stroke="#9A3412" strokeWidth="2" fill="none" />
                <path d="M12 18 Q 18 15 24 18" stroke="#9A3412" strokeWidth="2" fill="none" />
                <path d="M13 21 Q 18 19 23 21" stroke="#9A3412" strokeWidth="2" fill="none" />
                {/* Golden Haki grip spark */}
                <circle cx="18" cy="18" r="14" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 3" className="animate-spin" />
              </g>
            ) : (
              // REACHING OPEN HAND (Eagerly stretching toward the meat)
              <g>
                {/* Palm */}
                <ellipse cx="18" cy="14" rx="7" ry="6" fill="#FDE6C8" stroke="#78350F" strokeWidth="1.2" />
                {/* 5 Eager outstretched fingers pointing down */}
                <path d="M12 15 L 10 24" stroke="#FDE6C8" strokeWidth="3" strokeLinecap="round" />
                <path d="M15 17 L 14 27" stroke="#FDE6C8" strokeWidth="3" strokeLinecap="round" />
                <path d="M18 17 L 18 28" stroke="#FDE6C8" strokeWidth="3" strokeLinecap="round" />
                <path d="M21 17 L 22 26" stroke="#FDE6C8" strokeWidth="3" strokeLinecap="round" />
                <path d="M24 15 L 26 22" stroke="#FDE6C8" strokeWidth="2.5" strokeLinecap="round" />
                {/* Finger outlines */}
                <path d="M10 24 L 10 25 M 14 27 L 14 28 M 18 28 L 18 29 M 22 26 L 22 27" stroke="#9A3412" strokeWidth="1.5" strokeLinecap="round" />
              </g>
            )}
          </g>
        </svg>

        {/* ================= THE GIANT MANGA MEAT AT THE BOTTOM ================= */}
        <div
          className={`absolute bottom-0 z-20 flex flex-col items-center transition-all duration-300 pointer-events-auto ${
            isAtBottom ? 'scale-110 drop-shadow-[0_0_25px_rgba(245,158,11,0.9)]' : 'scale-90 hover:scale-100 opacity-90'
          }`}
          title="Luffy's Grand Prize: Giant Manga Meat!"
        >
          {/* Golden Pedestal */}
          <div className="w-14 h-2 bg-gradient-to-r from-amber-600 via-amber-300 to-amber-700 rounded-full shadow-md mb-1" />

          {/* The Meat */}
          <MangaMeatSVG className="w-14 h-14" isGrabbed={isAtBottom} />

          {/* Manga Action Lines & Onomatopoeia on Grab */}
          {isAtBottom && (
            <div className="absolute -top-10 -right-6 animate-bounce select-none">
              <span className="inline-block px-2 py-0.5 bg-gradient-to-r from-red-600 to-amber-500 text-white font-serif font-black text-xs tracking-wider rounded shadow-lg border border-yellow-300">
                ドン!! (DON!!)
              </span>
            </div>
          )}
        </div>

        {/* Small Scroll Progress Tooltip */}
        <div className="absolute -left-14 top-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity bg-slate-900/90 text-amber-300 text-[10px] font-mono px-2 py-1 rounded border border-amber-500/30 whitespace-nowrap pointer-events-none">
          {Math.round(scrollProgress * 100)}% Voyage
        </div>
      </aside>

      {/* ================= ADVENTURE COMPLETED MODAL / BANNER ================= */}
      {bannerVisible && isAtBottom && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-lg w-[92%] sm:w-auto animate-in fade-in slide-in-from-bottom-6 duration-500"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 border-2 border-amber-400 shadow-[0_20px_50px_rgba(245,158,11,0.35)] backdrop-blur-xl">
            {/* Shimmer Rim */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent -translate-x-full animate-[shimmer_2.5s_infinite]" />

            {/* Confetti Explosion Burst */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {confettiParticles.map((p) => (
                <div
                  key={p.id}
                  className="absolute left-1/2 top-1/2 rounded-full animate-ping"
                  style={{
                    backgroundColor: p.color,
                    width: `${p.size}px`,
                    height: `${p.size}px`,
                    transform: `translate(${p.x}px, ${p.y}px) rotate(${p.rot}deg)`,
                    animationDuration: '1.2s'
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              {/* Meat Trophy Icon */}
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center p-2 shrink-0 shadow-inner">
                <MangaMeatSVG className="w-12 h-12" isGrabbed={true} />
              </div>

              {/* Text Info */}
              <div className="flex-1">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-widest bg-amber-500/20 text-amber-300 border border-amber-400/40 uppercase">
                    Grand Line Conquered
                  </span>
                  <span className="text-xs text-amber-200">🍖 Feast Time!</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-black text-amber-300 tracking-wide mt-1">
                  Adventure Completed!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                  Luffy successfully claimed the giant roasted meat! Ready to embark on your next engineering voyage together?
                </p>
              </div>

              {/* Actions */}
              <div className="flex sm:flex-col gap-2 shrink-0 mt-2 sm:mt-0">
                <button
                  onClick={scrollToTop}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold text-xs sm:text-sm shadow-lg hover:shadow-amber-500/50 transition-all active:scale-95 flex items-center gap-1.5"
                >
                  <span>⚓ Sail to Top</span>
                </button>
                <button
                  onClick={() => setBannerVisible(false)}
                  className="px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
