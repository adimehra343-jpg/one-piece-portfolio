// Custom One Piece Scalable SVG Artwork & Components
import React from 'react';

// Thousand Sunny sailing vessel on the horizon
export const ThousandSunnySVG = ({ className = "w-48 h-36" }) => (
  <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFDF7" />
        <stop offset="100%" stopColor="#EADEC7" />
      </linearGradient>
      <linearGradient id="hullGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#C97A3E" />
        <stop offset="100%" stopColor="#7E3F18" />
      </linearGradient>
      <linearGradient id="maneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFDE59" />
        <stop offset="100%" stopColor="#FF914D" />
      </linearGradient>
      <filter id="sunnyGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="glow" />
        <feComposite in="SourceGraphic" in2="glow" operator="over" />
      </filter>
    </defs>

    {/* Wake water ripples */}
    <ellipse cx="200" cy="265" rx="140" ry="8" fill="rgba(255,255,255,0.25)" />
    <ellipse cx="180" cy="268" rx="90" ry="5" fill="rgba(255,255,255,0.4)" />

    {/* Ship Hull */}
    <path
      d="M90 230 C 130 255, 270 255, 310 220 L 320 200 C 270 215, 130 215, 80 200 Z"
      fill="url(#hullGrad)"
      stroke="#5A2808"
      strokeWidth="2.5"
    />
    {/* Hull Upper Rail & Deck details */}
    <path d="M80 200 L 320 200 L 315 190 L 85 190 Z" fill="#FFE5A3" stroke="#875323" strokeWidth="1.5" />
    <circle cx="130" cy="218" r="4" fill="#2E1C0C" />
    <circle cx="170" cy="222" r="4" fill="#2E1C0C" />
    <circle cx="210" cy="222" r="4" fill="#2E1C0C" />
    <circle cx="250" cy="218" r="4" fill="#2E1C0C" />

    {/* Lion Figurehead (Sunny's Face) */}
    <g transform="translate(310, 180) scale(0.65)" filter="url(#sunnyGlow)">
      {/* Mane Petals */}
      <circle cx="20" cy="20" r="32" fill="url(#maneGrad)" stroke="#E67E22" strokeWidth="2" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
        <path
          key={i}
          d="M 20 20 L 14 -18 C 18 -26, 22 -26, 26 -18 Z"
          fill="#FFB703"
          transform={`rotate(${deg} 20 20)`}
        />
      ))}
      {/* Lion Head */}
      <circle cx="20" cy="20" r="18" fill="#FDF6E2" stroke="#4A2810" strokeWidth="2" />
      {/* Eyes & Smile */}
      <circle cx="13" cy="16" r="3" fill="#222" />
      <circle cx="27" cy="16" r="3" fill="#222" />
      <path d="M14 24 Q 20 30 26 24" fill="none" stroke="#222" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="20" cy="20" r="3" fill="#D9534F" />
    </g>

    {/* Masts */}
    <rect x="155" y="60" width="7" height="135" fill="#6B3E11" rx="2" />
    <rect x="235" y="80" width="6" height="115" fill="#6B3E11" rx="2" />

    {/* Crow's Nest */}
    <rect x="150" y="70" width="17" height="12" fill="#E89843" stroke="#4A2810" strokeWidth="1.5" rx="2" />

    {/* Main Sails (with Straw Hat Jolly Roger) */}
    <path
      d="M100 85 Q 160 70 220 85 Q 215 145 160 150 Q 105 145 100 85 Z"
      fill="url(#sailGrad)"
      stroke="#B89B72"
      strokeWidth="2"
    />
    {/* Straw Hat Skull on Sail */}
    <g transform="translate(142, 98) scale(0.6)">
      {/* Straw Hat */}
      <ellipse cx="30" cy="18" rx="28" ry="7" fill="#F4C430" stroke="#875323" strokeWidth="1.5" />
      <path d="M14 18 C 14 6, 46 6, 46 18 Z" fill="#F4C430" stroke="#875323" strokeWidth="1.5" />
      <path d="M14 17 Q 30 14 46 17 L 46 19 Q 30 16 14 19 Z" fill="#DC2626" />
      {/* Skull */}
      <circle cx="30" cy="28" r="12" fill="#FFFDF7" stroke="#2B2D42" strokeWidth="1.5" />
      <ellipse cx="25" cy="26" rx="3" ry="4" fill="#2B2D42" />
      <ellipse cx="35" cy="26" rx="3" ry="4" fill="#2B2D42" />
      <path d="M25 35 L 35 35 M 27 33 L 27 37 M 30 33 L 30 37 M 33 33 L 33 37" stroke="#2B2D42" strokeWidth="1.5" />
      {/* Crossed Bones */}
      <line x1="6" y1="8" x2="54" y2="48" stroke="#FFFDF7" strokeWidth="4" strokeLinecap="round" />
      <line x1="6" y1="48" x2="54" y2="8" stroke="#FFFDF7" strokeWidth="4" strokeLinecap="round" />
    </g>

    {/* Fore Sail */}
    <path
      d="M235 95 Q 275 90 300 110 Q 285 155 240 155 Z"
      fill="url(#sailGrad)"
      stroke="#B89B72"
      strokeWidth="1.5"
    />

    {/* Rigging Ropes */}
    <line x1="160" y1="65" x2="90" y2="195" stroke="#4A2810" strokeWidth="1" strokeDasharray="3 2" />
    <line x1="160" y1="65" x2="230" y2="195" stroke="#4A2810" strokeWidth="1" strokeDasharray="3 2" />
    <line x1="240" y1="85" x2="310" y2="195" stroke="#4A2810" strokeWidth="1" strokeDasharray="3 2" />

    {/* Small Jolly Roger Flag at top */}
    <path d="M162 60 L 180 65 L 162 70 Z" fill="#1A1A1A" />
    <circle cx="168" cy="65" r="2" fill="#FFF" />
  </svg>
);

// Monkey D. Luffy Hero Artwork
export const LuffyHeroArtwork = ({ className = "w-full max-w-md h-auto" }) => (
  <svg viewBox="0 0 500 680" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FDE6C8" />
        <stop offset="100%" stopColor="#F5CD9B" />
      </linearGradient>
      <linearGradient id="vestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#B91C1C" />
      </linearGradient>
      <linearGradient id="hatGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FDE047" />
        <stop offset="100%" stopColor="#EAB308" />
      </linearGradient>
      <linearGradient id="sashGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FBBF24" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
      <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="2" dy="8" stdDeviation="10" floodColor="#080D1A" floodOpacity="0.35" />
      </filter>
      <filter id="heroAura" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Warm subtle sun aura behind Luffy */}
    <circle cx="250" cy="300" r="220" fill="radial-gradient(circle, rgba(251, 191, 36, 0.25) 0%, rgba(239, 68, 68, 0) 70%)" />

    <g filter="url(#softShadow)">
      {/* Fluttering Black Coat / Cape Drape behind back */}
      <path
        d="M170 250 C 130 340, 110 460, 120 580 C 170 540, 200 500, 210 420 Z"
        fill="#111827"
        stroke="#1F2937"
        strokeWidth="2"
      />
      <path
        d="M330 250 C 370 340, 390 460, 380 580 C 330 540, 300 500, 290 420 Z"
        fill="#111827"
        stroke="#1F2937"
        strokeWidth="2"
      />

      {/* Legs & Jean Shorts */}
      {/* Left Leg */}
      <path d="M195 440 L 180 570 L 210 570 L 225 440 Z" fill="url(#skinGrad)" stroke="#78350F" strokeWidth="2" />
      {/* Right Leg */}
      <path d="M275 440 L 290 570 L 320 570 L 305 440 Z" fill="url(#skinGrad)" stroke="#78350F" strokeWidth="2" />

      {/* Blue Jean Shorts */}
      <path
        d="M185 370 L 170 450 L 235 450 L 250 410 L 265 450 L 330 450 L 315 370 Z"
        fill="#2563EB"
        stroke="#1E3A8A"
        strokeWidth="2.5"
      />
      {/* White Fluffy Cuff on Shorts */}
      <path d="M165 445 C 180 460, 220 460, 238 445 L 235 455 C 220 468, 180 468, 168 455 Z" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.5" />
      <path d="M262 445 C 280 460, 320 460, 335 445 L 332 455 C 320 468, 280 468, 265 455 Z" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.5" />

      {/* Straw Sandals */}
      <ellipse cx="195" cy="580" rx="22" ry="7" fill="#D97706" stroke="#78350F" strokeWidth="2" />
      <path d="M185 577 L 195 568 L 205 577" stroke="#92400E" strokeWidth="3" fill="none" />
      <ellipse cx="305" cy="580" rx="22" ry="7" fill="#D97706" stroke="#78350F" strokeWidth="2" />
      <path d="M295 577 L 305 568 L 315 577" stroke="#92400E" strokeWidth="3" fill="none" />

      {/* Torso & Muscular Chest with Iconic X-Scar */}
      <path
        d="M200 230 C 185 280, 185 340, 205 380 L 295 380 C 315 340, 315 280, 300 230 Z"
        fill="url(#skinGrad)"
        stroke="#9A3412"
        strokeWidth="2"
      />
      {/* Iconic Large Chest X-Scar */}
      <path
        d="M215 255 Q 250 295 285 335 M 285 255 Q 250 295 215 335"
        stroke="#DC2626"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* Abdominal muscle definition */}
      <path d="M250 280 L 250 360 M 230 320 Q 250 325 270 320 M 235 345 Q 250 350 265 345" stroke="#C2410C" strokeWidth="1.8" fill="none" opacity="0.6" />

      {/* Yellow Sash Belt around Waist */}
      <path
        d="M195 365 Q 250 380 305 365 L 310 395 Q 250 410 190 395 Z"
        fill="url(#sashGrad)"
        stroke="#B45309"
        strokeWidth="2"
      />
      {/* Sash Knot & Tails fluttering */}
      <path d="M280 375 C 310 400, 325 430, 340 480 L 320 485 C 305 440, 290 410, 275 390 Z" fill="url(#sashGrad)" stroke="#B45309" strokeWidth="1.5" />

      {/* Open Red Sleeveless Vest */}
      {/* Left Vest Side */}
      <path
        d="M175 220 L 160 300 C 160 350, 175 375, 200 380 L 208 340 C 190 300, 195 250, 205 220 Z"
        fill="url(#vestGrad)"
        stroke="#7F1D1D"
        strokeWidth="2.5"
      />
      {/* Right Vest Side */}
      <path
        d="M325 220 L 340 300 C 340 350, 325 375, 300 380 L 292 340 C 310 300, 305 250, 295 220 Z"
        fill="url(#vestGrad)"
        stroke="#7F1D1D"
        strokeWidth="2.5"
      />

      {/* Arms */}
      {/* Left Arm: Confident fist on hip */}
      <path
        d="M185 225 C 145 250, 125 300, 140 345 L 175 340 C 165 305, 175 270, 200 240 Z"
        fill="url(#skinGrad)"
        stroke="#9A3412"
        strokeWidth="2"
      />
      {/* Left Hand Knuckles */}
      <circle cx="180" cy="345" r="14" fill="url(#skinGrad)" stroke="#9A3412" strokeWidth="2" />

      {/* Right Arm: Raised with thumb up / confident fist */}
      <path
        d="M315 225 C 355 245, 375 285, 365 330 L 335 320 C 345 285, 335 255, 305 235 Z"
        fill="url(#skinGrad)"
        stroke="#9A3412"
        strokeWidth="2"
      />
      <circle cx="345" cy="325" r="14" fill="url(#skinGrad)" stroke="#9A3412" strokeWidth="2" />

      {/* Neck & Face */}
      <path d="M228 180 L 228 225 Q 250 235 272 225 L 272 180 Z" fill="url(#skinGrad)" stroke="#9A3412" strokeWidth="2" />
      {/* Face Contour */}
      <path
        d="M210 135 C 205 180, 230 215, 250 215 C 270 215, 295 180, 290 135 Z"
        fill="url(#skinGrad)"
        stroke="#9A3412"
        strokeWidth="2"
      />
      {/* Left Eye Scar (Two stitches below left eye) */}
      <line x1="228" y1="165" x2="238" y2="167" stroke="#B91C1C" strokeWidth="2" />
      <line x1="230" y1="162" x2="231" y2="170" stroke="#B91C1C" strokeWidth="1.5" />
      <line x1="236" y1="163" x2="237" y2="171" stroke="#B91C1C" strokeWidth="1.5" />

      {/* Eyes: Big, determined anime eyes */}
      <circle cx="233" cy="150" r="7" fill="#111827" />
      <circle cx="231" cy="148" r="2.5" fill="#FFFFFF" />
      <circle cx="267" cy="150" r="7" fill="#111827" />
      <circle cx="265" cy="148" r="2.5" fill="#FFFFFF" />

      {/* Broad, unmistakable Luffy grin */}
      <path
        d="M225 175 Q 250 205 275 175 Z"
        fill="#FFFFFF"
        stroke="#111827"
        strokeWidth="2"
      />
      {/* Teeth grid */}
      <path d="M228 178 L 272 178 M 240 178 L 240 190 M 250 178 L 250 195 M 260 178 L 260 190" stroke="#CBD5E1" strokeWidth="1.2" />

      {/* Spiky Black Anime Hair */}
      <path
        d="M195 130 C 190 90, 220 85, 230 90 C 235 75, 255 75, 260 88 C 270 70, 295 80, 300 110 C 315 130, 310 160, 295 170 C 285 140, 280 130, 275 130 C 265 140, 255 135, 250 125 C 240 140, 225 135, 220 125 C 210 145, 200 150, 195 130 Z"
        fill="#111827"
      />

      {/* Iconic Straw Hat */}
      {/* Brim */}
      <ellipse cx="250" cy="108" rx="85" ry="24" fill="url(#hatGrad)" stroke="#854D0E" strokeWidth="2.5" />
      {/* Hat Crown */}
      <path
        d="M200 105 C 195 45, 305 45, 300 105 Z"
        fill="url(#hatGrad)"
        stroke="#854D0E"
        strokeWidth="2.5"
      />
      {/* Red Ribbon on Hat */}
      <path
        d="M199 92 C 220 86, 280 86, 301 92 L 300 105 C 280 99, 220 99, 200 105 Z"
        fill="#DC2626"
        stroke="#991B1B"
        strokeWidth="1.5"
      />
      {/* Straw texture marks */}
      <path d="M220 65 Q 250 68 280 65 M 215 80 Q 250 84 285 80" stroke="#CA8A04" strokeWidth="1.5" strokeDasharray="3 3" />
      {/* Hat String hanging down */}
      <path d="M195 118 Q 185 160 215 190" stroke="#CA8A04" strokeWidth="2.5" fill="none" />
      <path d="M305 118 Q 315 160 285 190" stroke="#CA8A04" strokeWidth="2.5" fill="none" />
    </g>
  </svg>
);

// Zoro's Three Swords (Santoryu) Visual Motif
export const SantoryuSwordsSVG = ({ className = "w-full max-w-sm h-auto" }) => (
  <svg viewBox="0 0 500 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="whiteBlade" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="60%" stopColor="#E2E8F0" />
        <stop offset="100%" stopColor="#94A3B8" />
      </linearGradient>
      <linearGradient id="kitetsuHamon" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#EF4444" />
        <stop offset="50%" stopColor="#DC2626" />
        <stop offset="100%" stopColor="#7F1D1D" />
      </linearGradient>
      <linearGradient id="enmaAura" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#A855F7" />
        <stop offset="50%" stopColor="#7C3AED" />
        <stop offset="100%" stopColor="#4C1D95" />
      </linearGradient>
      <filter id="swordGleam" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="4" result="glow" />
        <feComposite in="SourceGraphic" in2="glow" operator="over" />
      </filter>
    </defs>

    {/* Sword 1: Wado Ichimonji (Top - Pure White & Gold) */}
    <g transform="translate(30, 30) rotate(-4)">
      <line x1="80" y1="20" x2="420" y2="20" stroke="url(#whiteBlade)" strokeWidth="6" strokeLinecap="round" />
      <line x1="80" y1="18" x2="410" y2="18" stroke="#FFFFFF" strokeWidth="2" filter="url(#swordGleam)" />
      {/* Tsuba (Guard) */}
      <ellipse cx="80" cy="20" rx="4" ry="12" fill="#EAB308" stroke="#78350F" strokeWidth="1.5" />
      {/* White Hilt Wrap */}
      <rect x="15" y="15" width="65" height="10" rx="3" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
      {/* Gold Pommel */}
      <circle cx="15" cy="20" r="5" fill="#EAB308" stroke="#78350F" strokeWidth="1" />
    </g>

    {/* Sword 2: Sandai Kitetsu (Middle - Scarlet Demon Hamon) */}
    <g transform="translate(20, 80) rotate(1)">
      <line x1="90" y1="20" x2="440" y2="20" stroke="#CBD5E1" strokeWidth="6" strokeLinecap="round" />
      {/* Flame Hamon */}
      <path
        d="M90 22 Q 130 18 170 23 Q 210 19 250 23 Q 290 18 330 23 Q 370 19 410 23 L 440 20"
        stroke="url(#kitetsuHamon)"
        strokeWidth="3"
        fill="none"
      />
      {/* Cross Guard */}
      <rect x="85" y="10" width="8" height="20" rx="2" fill="#B91C1C" stroke="#450A0A" strokeWidth="1.5" />
      {/* Red & Black Cord Wrap */}
      <rect x="20" y="15" width="65" height="10" rx="3" fill="#991B1B" stroke="#18181B" strokeWidth="1.5" />
      <line x1="32" y1="15" x2="26" y2="25" stroke="#18181B" strokeWidth="2" />
      <line x1="45" y1="15" x2="39" y2="25" stroke="#18181B" strokeWidth="2" />
      <line x1="58" y1="15" x2="52" y2="25" stroke="#18181B" strokeWidth="2" />
      <line x1="71" y1="15" x2="65" y2="25" stroke="#18181B" strokeWidth="2" />
    </g>

    {/* Sword 3: Enma (Bottom - Royal Purple & Gold Haki) */}
    <g transform="translate(30, 130) rotate(5)" filter="url(#swordGleam)">
      <line x1="85" y1="20" x2="430" y2="20" stroke="url(#enmaAura)" strokeWidth="6" strokeLinecap="round" />
      <line x1="85" y1="18" x2="420" y2="18" stroke="#E9D5FF" strokeWidth="2" />
      {/* Clover-shaped Trefoil Guard */}
      <circle cx="85" cy="14" r="5" fill="#EAB308" stroke="#78350F" strokeWidth="1" />
      <circle cx="85" cy="26" r="5" fill="#EAB308" stroke="#78350F" strokeWidth="1" />
      <circle cx="81" cy="20" r="4" fill="#EAB308" stroke="#78350F" strokeWidth="1" />
      {/* Purple Floral Hilt */}
      <rect x="18" y="15" width="67" height="10" rx="3" fill="#581C87" stroke="#EAB308" strokeWidth="1.5" />
      {/* Gold Pommel */}
      <ellipse cx="18" cy="20" rx="4" ry="7" fill="#EAB308" stroke="#78350F" strokeWidth="1" />
    </g>
  </svg>
);

// Giant Roasted Manga Meat on the Bone (🍖)
export const MangaMeatSVG = ({ className = "w-20 h-20", isGrabbed = false }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="meatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C2410C" />
        <stop offset="50%" stopColor="#9A3412" />
        <stop offset="100%" stopColor="#7C2D12" />
      </linearGradient>
      <linearGradient id="boneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#E2E8F0" />
      </linearGradient>
      <filter id="meatGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#F97316" floodOpacity="0.4" />
      </filter>
    </defs>

    {/* Animated Steam Plumes */}
    <g className="animate-pulse opacity-75">
      <path d="M45 20 Q 40 10 48 5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M60 18 Q 65 8 58 3" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M75 22 Q 70 12 78 7" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />
    </g>

    {/* Top Bone Knobs */}
    <ellipse cx="50" cy="25" rx="7" ry="6" fill="url(#boneGrad)" stroke="#94A3B8" strokeWidth="2" />
    <ellipse cx="65" cy="25" rx="7" ry="6" fill="url(#boneGrad)" stroke="#94A3B8" strokeWidth="2" />
    <rect x="52" y="24" width="12" height="15" fill="url(#boneGrad)" />

    {/* Giant Roasted Meat Body */}
    <g filter="url(#meatGlow)" className={isGrabbed ? "scale-95 transition-transform" : ""}>
      <ellipse cx="60" cy="62" rx="36" ry="26" fill="url(#meatGrad)" stroke="#451A03" strokeWidth="3" />
      {/* Roasted Sear Marks & Highlights */}
      <path d="M38 52 Q 60 58 82 52" stroke="#431407" strokeWidth="3" strokeLinecap="round" />
      <path d="M36 64 Q 60 70 84 64" stroke="#431407" strokeWidth="3" strokeLinecap="round" />
      <path d="M42 74 Q 60 80 78 74" stroke="#431407" strokeWidth="2.5" strokeLinecap="round" />
      {/* Golden Juicy Highlight */}
      <ellipse cx="55" cy="50" rx="18" ry="6" fill="#FDBA74" opacity="0.45" />
    </g>

    {/* Bottom Bone Knobs */}
    <rect x="52" y="80" width="12" height="16" fill="url(#boneGrad)" />
    <ellipse cx="50" cy="98" rx="7" ry="6" fill="url(#boneGrad)" stroke="#94A3B8" strokeWidth="2" />
    <ellipse cx="65" cy="98" rx="7" ry="6" fill="url(#boneGrad)" stroke="#94A3B8" strokeWidth="2" />
  </svg>
);

// Grand Line Compass Rose / Log Pose Icon
export const LogPoseIcon = ({ className = "w-8 h-8 text-amber-400" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="3" strokeDasharray="4 2" />
    <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1.5" />
    {/* Compass Needle */}
    <polygon points="50,14 56,50 50,46" fill="#EF4444" />
    <polygon points="50,86 56,50 50,54" fill="#94A3B8" />
    <polygon points="50,14 44,50 50,46" fill="#DC2626" />
    <polygon points="50,86 44,50 50,54" fill="#64748B" />
    <circle cx="50" cy="50" r="4" fill="#FBBF24" stroke="#78350F" strokeWidth="2" />
  </svg>
);

// Trio Sunset Silhouette (Luffy, Zoro, Sanji) for Crew Contact Section
export const CrewSunsetSVG = ({ className = "w-full max-w-2xl h-auto" }) => (
  <svg viewBox="0 0 800 350" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sunsetSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1E1B4B" />
        <stop offset="35%" stopColor="#7C2D12" />
        <stop offset="70%" stopColor="#EA580C" />
        <stop offset="90%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#FDE68A" />
      </linearGradient>
      <linearGradient id="sunReflection" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#0B132B" stopOpacity="0.1" />
      </linearGradient>
    </defs>

    {/* Glowing Sun setting on Horizon */}
    <circle cx="400" cy="220" r="90" fill="#FEF08A" opacity="0.9" />
    <circle cx="400" cy="220" r="130" fill="#FBBF24" opacity="0.3" />

    {/* Horizon Sea Line */}
    <rect x="0" y="220" width="800" height="130" fill="#0E1A2B" />
    {/* Water Shimmer Path */}
    <polygon points="360,220 440,220 540,350 260,350" fill="url(#sunReflection)" />
    {[230, 245, 260, 275, 295, 320].map((y, i) => (
      <line
        key={i}
        x1={380 - i * 35}
        y1={y}
        x2={420 + i * 35}
        y2={y}
        stroke="#FEF08A"
        strokeWidth={3 - i * 0.3}
        opacity={0.8 - i * 0.1}
      />
    ))}

    {/* Thousand Sunny on distant right */}
    <g transform="translate(620, 185) scale(0.35)" opacity="0.85">
      <path d="M20 70 C 60 90, 140 90, 180 70 L 170 55 L 30 55 Z" fill="#0A0F1D" />
      <rect x="90" y="10" width="6" height="50" fill="#0A0F1D" />
      <path d="M60 20 Q 95 10 130 20 L 125 45 Q 95 40 65 45 Z" fill="#0A0F1D" />
    </g>

    {/* Grassy Cliff in Foreground */}
    <path
      d="M0 270 Q 200 240 400 250 Q 600 260 800 280 L 800 350 L 0 350 Z"
      fill="#080D1A"
    />

    {/* Crew Silhouettes sitting on the cliff edge */}
    {/* Zoro (Left) - Cross-legged with three swords resting beside him, green bandana silhouette */}
    <g transform="translate(240, 160) scale(0.75)" fill="#080D1A">
      {/* Body & Coat */}
      <path d="M40 70 C 20 85, 10 110, 5 130 L 75 130 C 70 110, 60 85, 40 70 Z" />
      {/* Zoro Head & Bandana knot */}
      <circle cx="40" cy="55" r="14" />
      <path d="M25 55 Q 15 50 18 62" stroke="#080D1A" strokeWidth="4" strokeLinecap="round" />
      {/* Three Swords at side */}
      <line x1="10" y1="130" x2="60" y2="40" stroke="#080D1A" strokeWidth="4" />
      <line x1="16" y1="130" x2="66" y2="40" stroke="#080D1A" strokeWidth="4" />
      <line x1="22" y1="130" x2="72" y2="40" stroke="#080D1A" strokeWidth="4" />
    </g>

    {/* Luffy (Center) - Dangling legs off cliff edge, wearing iconic Straw Hat, laughing */}
    <g transform="translate(370, 145) scale(0.85)" fill="#080D1A">
      {/* Dangling Legs */}
      <path d="M28 100 L 25 140 L 32 140 L 35 100 Z" />
      <path d="M45 100 L 48 140 L 41 140 L 38 100 Z" />
      {/* Torso & Open Vest */}
      <path d="M25 55 L 15 100 L 60 100 L 50 55 Z" />
      {/* Head */}
      <circle cx="37" cy="45" r="13" />
      {/* Straw Hat Silhouette */}
      <ellipse cx="37" cy="38" rx="30" ry="7" />
      <path d="M22 37 C 22 18, 52 18, 52 37 Z" />
      {/* Raised Arm waving toward sunset */}
      <path d="M48 65 Q 65 45 75 25" stroke="#080D1A" strokeWidth="6" strokeLinecap="round" />
      <circle cx="75" cy="23" r="5" />
    </g>

    {/* Sanji (Right) - Elegant posture, cigarette smoke curling into sunset */}
    <g transform="translate(480, 160) scale(0.75)" fill="#080D1A">
      {/* Suit & Slacks */}
      <path d="M30 65 C 15 85, 20 110, 15 130 L 65 130 C 60 110, 60 85, 45 65 Z" />
      {/* Head & Swirling Hair Fringe */}
      <circle cx="38" cy="52" r="13" />
      <path d="M42 42 Q 52 55 45 62" stroke="#080D1A" strokeWidth="3" />
      {/* Cigarette Ember & Curled Smoke */}
      <circle cx="48" cy="56" r="2" fill="#F97316" />
      <path
        d="M50 54 Q 60 45 55 35 Q 50 25 60 15"
        stroke="#FEF08A"
        strokeWidth="1.5"
        strokeDasharray="2 2"
        fill="none"
        opacity="0.8"
      />
    </g>
  </svg>
);
