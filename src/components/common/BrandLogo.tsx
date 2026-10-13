import React from 'react';
import { Link } from 'react-router-dom';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'light', className = '' }) => {
  const isDarkBg = variant === 'dark';

  return (
    <Link
      to="/"
      className={`group inline-block transition-transform duration-200 hover:scale-[1.01] focus:outline-none ${
        isDarkBg ? 'bg-white rounded-2xl p-2.5 sm:p-3 shadow-sm border border-emerald-800/20' : ''
      } ${className}`}
      aria-label="RaithaSetu Home"
    >
      <img
        src="/images/raithasetu-logo.png"
        alt="RaithaSetu - A Digital Bridge for Karnataka's Farmers"
        className="w-[230px] sm:w-[265px] md:w-[285px] lg:w-[310px] max-w-full h-auto object-contain block"
      />
    </Link>
  );
};
