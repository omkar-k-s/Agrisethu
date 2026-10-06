import React from 'react';

interface FreshLeavesGraphicProps {
  className?: string;
}

export const FreshLeavesGraphic: React.FC<FreshLeavesGraphicProps> = ({
  className = 'w-44 h-48',
}) => {
  return (
    <svg
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Fresh Tea and Crop Leaves Accent"
    >
      <defs>
        {/* Soft natural leaf drop shadow */}
        <filter id="leaf-drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="8" stdDeviation="10" floodColor="#064D2C" floodOpacity="0.22" />
        </filter>

        {/* Top Leaf Rich Botanical Gradient */}
        <linearGradient id="top-leaf-grad" x1="20%" y1="10%" x2="80%" y2="90%">
          <stop offset="0%" stopColor="#4ADE80" />
          <stop offset="35%" stopColor="#22C55E" />
          <stop offset="70%" stopColor="#15803D" />
          <stop offset="100%" stopColor="#0B4E26" />
        </linearGradient>

        {/* Lower Leaf Gradient */}
        <linearGradient id="bottom-leaf-grad" x1="10%" y1="20%" x2="90%" y2="80%">
          <stop offset="0%" stopColor="#86EFAC" />
          <stop offset="40%" stopColor="#22C55E" />
          <stop offset="75%" stopColor="#166534" />
          <stop offset="100%" stopColor="#0D4521" />
        </linearGradient>

        {/* Stem Gradient */}
        <linearGradient id="stem-wood-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#854D0E" />
          <stop offset="50%" stopColor="#713F12" />
          <stop offset="100%" stopColor="#452309" />
        </linearGradient>

        {/* Dew Drop Specular Highlights */}
        <radialGradient id="dew-highlight" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#E2FAD9" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#15803D" stopOpacity="0.1" />
        </radialGradient>
      </defs>

      <g filter="url(#leaf-drop-shadow)">
        {/* Woody Branch / Stem */}
        <path
          d="M 175 220
             C 168 185, 155 150, 140 115
             C 134 102, 130 90, 132 75
             C 134 60, 140 45, 142 35"
          stroke="url(#stem-wood-grad)"
          strokeWidth="7"
          strokeLinecap="round"
        />

        {/* Small Node Bud */}
        <path
          d="M 142 35 C 145 28, 148 24, 150 20 C 151 25, 147 30, 142 35"
          fill="#854D0E"
        />
        <path
          d="M 134 78 C 138 72, 143 70, 146 68 C 144 74, 139 78, 134 82"
          fill="#65A30D"
        />

        {/* TOP LEAF (Large Arching Leaf) */}
        <path
          d="M 136 102
             C 120 70, 92 40, 56 22
             C 42 15, 26 12, 18 16
             C 14 18, 12 24, 16 32
             C 24 48, 36 68, 54 88
             C 74 110, 98 126, 128 132
             C 134 133, 137 125, 136 102
             Z"
          fill="url(#top-leaf-grad)"
        />

        {/* Top Leaf Central Midrib */}
        <path
          d="M 136 102
             C 105 82, 75 60, 50 42
             C 34 30, 22 20, 18 16"
          stroke="#BBF7D0"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.85"
        />

        {/* Top Leaf Lateral Veins */}
        <path
          d="M 112 90 Q 102 78 88 74
             M 96 78 Q 82 66 70 64
             M 78 64 Q 64 52 52 52
             M 60 50 Q 48 40 38 42
             M 120 95 Q 112 108 98 114
             M 102 83 Q 92 96 78 100
             M 84 70 Q 72 82 58 86"
          stroke="#86EFAC"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Dew drops on Top Leaf */}
        <ellipse cx="64" cy="48" rx="4.5" ry="3.5" fill="url(#dew-highlight)" />
        <circle cx="63" cy="47" r="1.2" fill="#FFFFFF" />

        <ellipse cx="88" cy="74" rx="3.5" ry="2.8" fill="url(#dew-highlight)" />
        <circle cx="87" cy="73" r="1" fill="#FFFFFF" />

        {/* LOWER LEAF (Secondary Graceful Leaf) */}
        <path
          d="M 148 160
             C 130 148, 100 138, 70 134
             C 52 132, 38 136, 32 144
             C 26 152, 28 164, 38 178
             C 50 196, 70 212, 94 218
             C 114 224, 134 216, 148 198
             C 152 192, 153 176, 148 160
             Z"
          fill="url(#bottom-leaf-grad)"
        />

        {/* Lower Leaf Central Midrib */}
        <path
          d="M 148 160
             C 118 155, 86 150, 58 146
             C 44 144, 36 144, 32 144"
          stroke="#BBF7D0"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Lower Leaf Veins */}
        <path
          d="M 126 157 Q 116 144 102 142
             M 102 153 Q 90 142 78 140
             M 78 149 Q 66 138 52 138
             M 132 168 Q 120 186 104 196
             M 112 162 Q 98 180 82 190
             M 90 156 Q 76 172 62 180"
          stroke="#86EFAC"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.55"
        />

        {/* Dew drop on Lower Leaf */}
        <ellipse cx="78" cy="172" rx="4" ry="3" fill="url(#dew-highlight)" />
        <circle cx="77" cy="171" r="1.1" fill="#FFFFFF" />
      </g>
    </svg>
  );
};
