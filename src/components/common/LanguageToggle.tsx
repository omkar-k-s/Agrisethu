import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '', variant = 'light' }) => {
  const { language, setLanguage, isKannada } = useLanguage();
  const isDark = variant === 'dark';

  return (
    <div
      role="group"
      aria-label="Language selection"
      className={`inline-flex items-center rounded-full p-1 border transition-all ${
        isDark
          ? 'bg-emerald-950/60 border-emerald-800/80 text-emerald-100'
          : 'bg-[#F5FBF5] border-[#DCE8DF] text-[#183028]'
      } ${className}`}
    >
      <div className="flex items-center pl-1.5 pr-1 text-[#087A3D]" aria-hidden="true">
        <Globe className={`w-3.5 h-3.5 ${isDark ? 'text-[#F4C95D]' : 'text-[#087A3D]'}`} />
      </div>

      <button
        type="button"
        onClick={() => setLanguage('kn')}
        aria-pressed={isKannada}
        className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
          isKannada
            ? 'bg-[#087A3D] text-white shadow-sm'
            : isDark
            ? 'text-emerald-200 hover:text-white'
            : 'text-[#61706A] hover:text-[#087A3D]'
        }`}
      >
        ಕನ್ನಡ
      </button>

      <span className={`text-xs px-0.5 select-none ${isDark ? 'text-emerald-700' : 'text-[#DCE8DF]'}`}>|</span>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={!isKannada}
        className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
          !isKannada
            ? 'bg-[#087A3D] text-white shadow-sm'
            : isDark
            ? 'text-emerald-200 hover:text-white'
            : 'text-[#61706A] hover:text-[#087A3D]'
        }`}
      >
        English
      </button>
    </div>
  );
};
