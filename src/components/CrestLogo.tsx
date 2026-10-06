import React from 'react';

interface CrestLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const CrestLogo: React.FC<CrestLogoProps> = ({
  variant = 'light',
  size = 'md',
  showSubtitle = true,
}) => {
  const isDark = variant === 'dark';

  const iconSizes = {
    sm: 'w-8 h-9',
    md: 'w-10 h-11',
    lg: 'w-12 h-14',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  };

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Handcrafted Academic Crest SVG */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 100 115"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Outer Shield Border */}
          <path
            d="M50 4L92 20V58C92 84 74 103 50 111C26 103 8 84 8 58V20L50 4Z"
            fill={isDark ? '#0B1329' : '#0F172A'}
            stroke="#D97706"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Inner Inset Shield Border */}
          <path
            d="M50 11L85 24V56C85 79 69 96 50 103C31 96 15 79 15 56V24L50 11Z"
            stroke="#F59E0B"
            strokeWidth="1.2"
            strokeOpacity="0.75"
            strokeDasharray="2 1.5"
          />

          {/* Laurel Wreath Left */}
          <path
            d="M28 42C23 48 24 58 29 65C31 68 35 71 39 72M25 50C21 54 22 62 26 67"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Laurel Wreath Right */}
          <path
            d="M72 42C77 48 76 58 71 65C69 68 65 71 61 72M75 50C79 54 78 62 74 67"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Open Book of Wisdom */}
          <path
            d="M34 68C39 65 46 65 50 67C54 65 61 65 66 68V51C61 48 54 48 50 50C46 48 39 48 34 51V68Z"
            fill="#F8FAFC"
            stroke="#F59E0B"
            strokeWidth="1.5"
          />
          <path
            d="M50 50V67"
            stroke="#0F172A"
            strokeWidth="1.5"
          />

          {/* Torch of Knowledge */}
          <path
            d="M47 34H53V44L50 48L47 44V34Z"
            fill="#F59E0B"
            stroke="#D97706"
            strokeWidth="1"
          />
          {/* Torch Flame */}
          <path
            d="M50 21C53 25 55 28 53 32C51 34 49 34 47 32C45 28 48 24 50 21Z"
            fill="#F59E0B"
          />
          <circle cx="50" cy="28" r="2.5" fill="#FEF3C7" />

          {/* Monogram 'Y' */}
          <path
            d="M44 78L50 83L56 78M50 83V89"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Est 1998 Banner ribbon at bottom */}
          <path
            d="M26 94H74L68 102H32L26 94Z"
            fill="#070D1E"
            stroke="#D97706"
            strokeWidth="1"
          />
          <text
            x="50"
            y="100"
            textAnchor="middle"
            fill="#F59E0B"
            fontSize="5.8"
            fontFamily="sans-serif"
            fontWeight="bold"
            letterSpacing="0.8"
          >
            EST. 1998
          </text>
        </svg>
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col text-left">
        <span
          className={`font-display tracking-tight font-bold leading-none ${titleSizes[size]} ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          YOUR OWN
        </span>
        <span
          className={`font-display tracking-widest text-[11px] font-bold uppercase leading-tight mt-0.5 ${
            isDark ? 'text-amber-400' : 'text-blue-600'
          }`}
        >
          ACADEMY
        </span>
        {showSubtitle && (
          <span
            className={`text-[9px] tracking-wider uppercase font-medium mt-0.5 ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            Collegiate & International Studies
          </span>
        )}
      </div>
    </div>
  );
};
