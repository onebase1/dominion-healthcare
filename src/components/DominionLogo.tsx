import React from 'react';

interface DominionLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'light' | 'white';
  height?: number | string;
}

export const DominionLogo: React.FC<DominionLogoProps> = ({
  className = '',
  variant = 'full',
  height = 42
}) => {
  const isWhite = variant === 'white';
  const textColor = isWhite ? '#ffffff' : '#064e3b';
  const subtextColor = isWhite ? '#a7f3d0' : '#047857';
  const figureColor = isWhite ? '#34d399' : '#047857';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg
        height={height}
        viewBox="0 0 340 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-auto max-h-12 sm:max-h-14 overflow-visible"
        aria-label="Dominion Healthcare Services Ltd Logo"
      >
        <defs>
          <linearGradient id="dhcs-green-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isWhite ? '#ffffff' : '#064e3b'} />
            <stop offset="100%" stopColor={isWhite ? '#a7f3d0' : '#059669'} />
          </linearGradient>
        </defs>

        {/* ================= LEFT SIDE: DHCS EMBLEM ================= */}
        {/* 'D' */}
        <path
          d="M 12 12 L 28 12 C 40 12 48 20 48 31 C 48 42 40 50 28 50 L 12 50 Z M 23 21 L 23 41 L 27 41 C 33 41 37 37 37 31 C 37 25 33 21 27 21 Z"
          fill="url(#dhcs-green-grad)"
        />

        {/* 'H' */}
        <path
          d="M 54 12 L 65 12 L 65 26 L 79 26 L 79 12 L 90 12 L 90 50 L 79 50 L 79 36 L 65 36 L 65 50 L 54 50 Z"
          fill="url(#dhcs-green-grad)"
        />

        {/* 'C' */}
        <path
          d="M 128 22 C 124 16 117 12 109 12 C 96 12 87 22 87 31 C 87 40 96 50 109 50 C 118 50 124 46 128 40 L 119 35 C 117 38 114 41 109 41 C 102 41 98 36 98 31 C 98 26 102 21 109 21 C 114 21 117 24 119 27 Z"
          fill="url(#dhcs-green-grad)"
        />

        {/* 'S' */}
        <path
          d="M 134 40 L 143 38 C 144 42 147 44 152 44 C 157 44 160 41 160 38 C 160 34 156 33 148 31 C 138 28 134 25 134 19 C 134 14 140 10 149 10 C 158 10 164 15 165 21 L 156 23 C 155 19 152 17 148 17 C 144 17 142 19 142 21 C 142 24 145 25 152 27 C 162 29 167 33 167 39 C 167 45 161 50 151 50 C 141 50 135 45 134 40 Z"
          fill="url(#dhcs-green-grad)"
        />

        {/* ================= LINKED HEALTHCARE TEAM (4 FIGURES HOLDING HANDS) ================= */}
        <g fill={figureColor} transform="translate(10, 56)">
          {/* Figure 1 */}
          <circle cx="12" cy="6" r="4.5" />
          <path d="M 12 12 C 9 12 6 15 6 18 L 6 25 L 9 25 L 9 32 L 15 32 L 15 25 L 18 25 L 18 18 C 18 15 15 12 12 12 Z" />
          {/* Left arm out */}
          <line x1="6" y1="18" x2="0" y2="24" stroke={figureColor} strokeWidth="3" strokeLinecap="round" />
          {/* Hand clasp 1-2 */}
          <line x1="18" y1="18" x2="28" y2="24" stroke={figureColor} strokeWidth="3" strokeLinecap="round" />

          {/* Figure 2 */}
          <circle cx="48" cy="6" r="4.5" />
          <path d="M 48 12 C 45 12 42 15 42 18 L 42 25 L 45 25 L 45 32 L 51 32 L 51 25 L 54 25 L 54 18 C 54 15 51 12 48 12 Z" />
          {/* Hand clasp 2-3 */}
          <line x1="42" y1="18" x2="28" y2="24" stroke={figureColor} strokeWidth="3" strokeLinecap="round" />
          <line x1="54" y1="18" x2="64" y2="24" stroke={figureColor} strokeWidth="3" strokeLinecap="round" />

          {/* Figure 3 */}
          <circle cx="84" cy="6" r="4.5" />
          <path d="M 84 12 C 81 12 78 15 78 18 L 78 25 L 81 25 L 81 32 L 87 32 L 87 25 L 90 25 L 90 18 C 90 15 87 12 84 12 Z" />
          {/* Hand clasp 3-4 */}
          <line x1="78" y1="18" x2="64" y2="24" stroke={figureColor} strokeWidth="3" strokeLinecap="round" />
          <line x1="90" y1="18" x2="100" y2="24" stroke={figureColor} strokeWidth="3" strokeLinecap="round" />

          {/* Figure 4 */}
          <circle cx="120" cy="6" r="4.5" />
          <path d="M 120 12 C 117 12 114 15 114 18 L 114 25 L 117 25 L 117 32 L 123 32 L 123 25 L 126 25 L 126 18 C 126 15 123 12 120 12 Z" />
          {/* Hand clasp 4 right */}
          <line x1="114" y1="18" x2="100" y2="24" stroke={figureColor} strokeWidth="3" strokeLinecap="round" />
          <line x1="126" y1="18" x2="132" y2="24" stroke={figureColor} strokeWidth="3" strokeLinecap="round" />

          {/* Linked Hands Indicator Dots */}
          <circle cx="28" cy="24" r="2.5" />
          <circle cx="64" cy="24" r="2.5" />
          <circle cx="100" cy="24" r="2.5" />
        </g>

        {/* Thin vertical separator divider */}
        <line x1="182" y1="10" x2="182" y2="82" stroke={isWhite ? 'rgba(255,255,255,0.25)' : '#cbd5e1'} strokeWidth="1.5" />

        {/* ================= RIGHT SIDE: FULL NAME TYPOGRAPHY ================= */}
        {variant !== 'compact' && (
          <g transform="translate(196, 0)">
            <text
              x="0"
              y="28"
              fontFamily="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif"
              fontSize="23"
              fontWeight="900"
              letterSpacing="-0.5px"
              fill={textColor}
            >
              Dominion
            </text>
            <text
              x="0"
              y="53"
              fontFamily="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif"
              fontSize="22"
              fontWeight="800"
              letterSpacing="-0.5px"
              fill={textColor}
            >
              Healthcare
            </text>
            <text
              x="0"
              y="77"
              fontFamily="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif"
              fontSize="20"
              fontWeight="700"
              letterSpacing="-0.3px"
              fill={subtextColor}
            >
              Services Ltd
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
