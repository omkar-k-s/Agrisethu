import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { BrandLogo } from '../common/BrandLogo';
import { LanguageToggle } from '../common/LanguageToggle';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, isKannada } = useLanguage();

  return (
    <footer className="bg-[#064D2C] text-white pt-14 pb-10 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-emerald-800/80">
          {/* Brand & Purpose (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            <BrandLogo variant="dark" />
            <p className="text-emerald-100 font-semibold text-sm leading-relaxed">
              {t.brand.tagline}
            </p>
            <p className="text-[#E8B83F] font-kannada text-xs font-bold tracking-wide">
              {t.footer.taglineKn}
            </p>
            <p className="text-emerald-200/80 text-xs leading-relaxed max-w-md">
              {t.footer.aboutDesc}
            </p>

            <div className="pt-2 flex flex-col gap-1.5 text-xs text-emerald-200/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E8B83F]" />
                <span>{isKannada ? 'ಬೆಂಗಳೂರು ಮತ್ತು ಗ್ರಾಮೀಣ ಕರ್ನಾಟಕ, ಭಾರತ' : 'Bengaluru & Rural Karnataka, India'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E8B83F]" />
                <span>+91 (080) 2800-AGRI</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E8B83F]" />
                <span>contact@agrisethu.in</span>
              </div>
            </div>
          </div>

          {/* Explore Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8B83F]">
              {t.footer.exploreTitle}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-100/90">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/what-we-do" className="hover:text-white transition-colors">
                  {t.nav.whatWeDo}
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-white transition-colors">
                  {t.nav.howItWorks}
                </Link>
              </li>
              <li>
                <Link to="/vision" className="hover:text-white transition-colors">
                  {t.nav.vision}
                </Link>
              </li>
              <li>
                <Link to="/app" className="hover:text-white transition-colors">
                  {t.nav.app}
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Social (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8B83F]">
              {t.footer.connectTitle}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-100/90">
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <a href="#instagram" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#facebook" className="hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#linkedin" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#youtube" className="hover:text-white transition-colors">
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Information & Legal (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8B83F]">
              {t.footer.infoTitle}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-100/90">
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  {isKannada ? 'ನಮ್ಮ ಧ್ಯೇಯ' : 'Mission & Ethos'}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Language, Disclaimer */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-emerald-200/80">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>{t.footer.copyright}</span>
            <div className="flex items-center gap-1.5 text-emerald-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E8B83F] flex-shrink-0" />
              <span className="text-[11px]">{t.footer.disclaimer}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <LanguageToggle variant="dark" />
          </div>
        </div>
      </div>
    </footer>
  );
};
