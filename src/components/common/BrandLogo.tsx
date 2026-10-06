import React from 'react';
import { Link } from 'react-router-dom';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'light', className = '' }) => {
  const isDarkBg = variant === 'dark';

  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 transition-transform duration-200 hover:scale-[1.01] ${className}`} aria-label="AgriSethu Home">
      {/* Custom AgriSethu Emblem: Bridge Arch + Sprout */}
      <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#087A3D] shadow-sm transition-all duration-300 group-hover:bg-[#064D2C]">
        <svg viewBox="0 0 40 40" fill="none" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg">
          {/* Bridge Arch */}
          <path
            d="M7 28C11 18 29 18 33 28"
            stroke="#F4C95D"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M8 30.5H32"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Sprout emerging from center of bridge */}
          <path
            d="M20 20V11"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M20 15C16 13 15 9 19 7C20 10 20 13 20 15Z"
            fill="#F4C95D"
          />
          <path
            d="M20 13C24 11 25 7 21 5C20 8 20 11 20 13Z"
            fill="#EAF7EC"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <span className={`text-xl font-bold tracking-tight leading-none ${isDarkBg ? 'text-white' : 'text-[#087A3D]'}`}>
          Agri<span className={isDarkBg ? 'text-[#F4C95D]' : 'text-[#064D2C]'}>Sethu</span>
        </span>
        <span className={`text-[10px] font-medium tracking-wide mt-1 uppercase ${isDarkBg ? 'text-emerald-200/80' : 'text-[#61706A]'}`}>
          AgriTech Bridge • ಕರ್ನಾಟಕ
        </span>
      </div>
    </Link>
  );
};
