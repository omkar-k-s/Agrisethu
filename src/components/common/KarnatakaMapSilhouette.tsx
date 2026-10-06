import React from 'react';

interface KarnatakaMapProps {
  className?: string;
  fillColor?: string;
  strokeColor?: string;
}

export const KarnatakaMapSilhouette: React.FC<KarnatakaMapProps> = ({
  className = 'w-36 h-52 sm:w-44 sm:h-64',
  fillColor = '#FBF6DD',
  strokeColor = '#E6DCB0',
}) => {
  return (
    <svg
      viewBox="0 0 320 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Official Karnataka State Map Silhouette"
    >
      <defs>
        {/* Soft shadow for tactile 3D relief */}
        <filter id="karnataka-shadow-realistic" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#04331C" floodOpacity="0.25" />
        </filter>
        {/* Warm ivory and golden cream gradient */}
        <linearGradient id="karnataka-cream-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFDF2" />
          <stop offset="60%" stopColor={fillColor} />
          <stop offset="100%" stopColor="#F4ECC8" />
        </linearGradient>
      </defs>

      {/* Main Geographic State Outline of Karnataka */}
      <path
        d="M 202 24
           C 185 38, 155 58, 132 74
           C 108 90, 78 88, 54 98
           C 40 105, 34 122, 33 140
           C 31 162, 32 188, 35 212
           C 38 238, 44 266, 48 290
           C 52 312, 57 334, 62 354
           C 66 372, 70 388, 76 400
           C 84 414, 102 426, 120 436
           C 134 444, 142 458, 146 474
           C 152 478, 162 470, 172 456
           C 184 440, 198 428, 214 420
           C 230 412, 248 412, 260 406
           C 264 402, 260 388, 252 374
           C 244 358, 234 346, 230 334
           C 222 314, 206 294, 204 278
           C 202 268, 214 262, 232 258
           C 248 254, 258 244, 262 230
           C 268 210, 270 190, 266 172
           C 260 150, 246 136, 238 118
           C 230 100, 226 76, 222 52
           C 220 38, 214 26, 202 24
           Z"
        fill="url(#karnataka-cream-grad)"
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        filter="url(#karnataka-shadow-realistic)"
      />

      {/* Internal Geographic Features (Western Ghats & River Basins) */}
      {/* Western Ghats Ridge line */}
      <path
        d="M 52 170 Q 56 240 68 310 Q 78 370 110 420"
        stroke="#DED3A4"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        fill="none"
        opacity="0.75"
      />
      {/* Krishna Basin in North */}
      <path
        d="M 80 120 Q 150 115 210 125 T 255 160"
        stroke="#D6CB99"
        strokeWidth="1.2"
        fill="none"
        opacity="0.65"
      />
      {/* Tungabhadra Basin */}
      <path
        d="M 70 260 Q 130 250 180 265 T 250 240"
        stroke="#D6CB99"
        strokeWidth="1.2"
        fill="none"
        opacity="0.65"
      />
      {/* Kaveri Basin in South */}
      <path
        d="M 95 410 Q 140 405 180 415 T 225 410"
        stroke="#D6CB99"
        strokeWidth="1.2"
        fill="none"
        opacity="0.65"
      />

      {/* Key City Anchor Points */}
      {/* Bengaluru */}
      <circle cx="218" cy="410" r="3.5" fill="#087A3D" />
      <circle cx="218" cy="410" r="7" stroke="#087A3D" strokeWidth="1" opacity="0.35" />
      
      {/* Mysuru */}
      <circle cx="160" cy="442" r="3" fill="#E8B83F" />
      
      {/* Dharwad / Hubballi */}
      <circle cx="95" cy="225" r="3" fill="#E8B83F" />
      
      {/* Kalaburagi */}
      <circle cx="210" cy="110" r="3" fill="#E8B83F" />
    </svg>
  );
};
