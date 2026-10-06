import React, { useState, useEffect } from 'react';
import { NavLink, useLocation as useRouterLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import {
  MapPin,
  BookOpen,
  Megaphone,
  HelpCircle,
  Globe,
  Search,
  Home,
  Users,
  Sprout,
  Settings,
  Target,
  Smartphone,
  Mail,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, setLanguage, isKannada } = useLanguage();
  const routerLocation = useRouterLocation();
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [fontSizeLevel, setFontSizeLevel] = useState<'sm' | 'md' | 'lg'>('md');

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [routerLocation.pathname]);

  // Handle font size accessibility switcher
  const handleFontSizeChange = (level: 'sm' | 'md' | 'lg') => {
    setFontSizeLevel(level);
    const root = document.documentElement;
    if (level === 'sm') root.style.fontSize = '15px';
    else if (level === 'md') root.style.fontSize = '16px';
    else if (level === 'lg') root.style.fontSize = '17.5px';
  };

  // Search input handler
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    // Route to what-we-do or home with query
    navigate(`/what-we-do?q=${encodeURIComponent(searchQuery)}`);
  };

  // Navigation Items
  const navItems = [
    {
      to: '/',
      labelEn: 'Home',
      labelKn: 'ಮುಖಪುಟ',
      icon: Home,
      hasDropdown: false,
    },
    {
      to: '/about',
      labelEn: 'About Us',
      labelKn: 'ನಮ್ಮ ಬಗ್ಗೆ',
      icon: Users,
      hasDropdown: true,
    },
    {
      to: '/what-we-do',
      labelEn: 'What We Do',
      labelKn: 'ನಾವು ಮಾಡುವುದು',
      icon: Sprout,
      hasDropdown: true,
    },
    {
      to: '/how-it-works',
      labelEn: 'How It Works',
      labelKn: 'ಇದು ಹೇಗೆ ಕೆಲಸಮಾಡುತ್ತದೆ',
      icon: Settings,
      hasDropdown: true,
    },
    {
      to: '/vision',
      labelEn: 'Our Vision',
      labelKn: 'ನಮ್ಮ ದೃಷ್ಟಿಕೋನ',
      icon: Target,
      hasDropdown: false,
    },
    {
      to: '/app',
      labelEn: 'Our App',
      labelKn: 'ನಮ್ಮ ಆ್ಯಪ್',
      icon: Smartphone,
      hasDropdown: false,
    },
    {
      to: '/contact',
      labelEn: 'Contact',
      labelKn: 'ಸಂಪರ್ಕಿಸಿ',
      icon: Mail,
      hasDropdown: false,
    },
  ];

  return (
    <header className="contents">
      
      {/* ========================================================================= */}
      {/* 1. TOP UTILITY BAR (Static - Scrolls Away with Page)                       */}
      {/* ========================================================================= */}
      <div className="utility-bar bg-[#005A3C] text-white h-10 sm:h-11 overflow-hidden">
        <div className="max-w-[1440px] mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          
          {/* Left: Location Pin & Official Public Slogan */}
          <div className="flex items-center gap-2 font-medium truncate">
            <MapPin className="w-3.5 h-3.5 text-emerald-200 flex-shrink-0" />
            <span className="font-kannada font-semibold text-white truncate">
              ಕರ್ನಾಟಕದ ರೈತರಿಗಾಗಿ ಒಂದು ಡಿಜಿಟಲ್ ಸೇತು
            </span>
            <span className="text-emerald-300/60 hidden md:inline">|</span>
            <span className="text-emerald-100/90 hidden md:inline font-normal truncate">
              A Digital Bridge for Karnataka's Farmers
            </span>
          </div>

          {/* Right: Public Portal Utility Links & Font Size Switcher */}
          <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
            <div className="hidden lg:flex items-center gap-5 text-white/90 text-[11px] font-medium">
              <a
                href="#news"
                className="flex items-center gap-1.5 hover:text-emerald-200 transition-colors"
                title="News & Updates"
              >
                <BookOpen className="w-3.5 h-3.5 text-emerald-300" />
                <span>News & Updates</span>
              </a>

              <a
                href="#announcements"
                className="flex items-center gap-1.5 hover:text-emerald-200 transition-colors"
                title="Announcements"
              >
                <Megaphone className="w-3.5 h-3.5 text-emerald-300" />
                <span>Announcements</span>
              </a>

              <NavLink
                to="/contact"
                className="flex items-center gap-1.5 hover:text-emerald-200 transition-colors"
                title="Help & Support"
              >
                <HelpCircle className="w-3.5 h-3.5 text-emerald-300" />
                <span>Help</span>
              </NavLink>

              <button
                type="button"
                onClick={() => handleFontSizeChange(fontSizeLevel === 'md' ? 'lg' : 'md')}
                className="flex items-center gap-1.5 hover:text-emerald-200 transition-colors cursor-pointer"
                title="Accessibility Options"
              >
                <Globe className="w-3.5 h-3.5 text-emerald-300" />
                <span>Accessibility</span>
              </button>
            </div>

            {/* Vertical Divider */}
            <span className="hidden sm:inline text-emerald-300/40">|</span>

            {/* Font Size Adjusters (A- | A | A+) */}
            <div className="flex items-center gap-1 text-[11px] font-bold text-white/90 select-none">
              <button
                type="button"
                onClick={() => handleFontSizeChange('sm')}
                className={`px-1.5 py-0.5 rounded hover:bg-white/20 transition-colors cursor-pointer ${
                  fontSizeLevel === 'sm' ? 'bg-white/25 text-white font-extrabold' : ''
                }`}
                title="Smaller Font"
              >
                A-
              </button>
              <button
                type="button"
                onClick={() => handleFontSizeChange('md')}
                className={`px-1.5 py-0.5 rounded hover:bg-white/20 transition-colors cursor-pointer ${
                  fontSizeLevel === 'md' ? 'bg-white/25 text-white font-extrabold' : ''
                }`}
                title="Standard Font"
              >
                A
              </button>
              <button
                type="button"
                onClick={() => handleFontSizeChange('lg')}
                className={`px-1.5 py-0.5 rounded hover:bg-white/20 transition-colors cursor-pointer ${
                  fontSizeLevel === 'lg' ? 'bg-white/25 text-white font-extrabold' : ''
                }`}
                title="Larger Font"
              >
                A+
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. BRAND / LOGO HEADER (Static - Scrolls Away with Page)                  */}
      {/* ========================================================================= */}
      <div className="brand-header relative bg-white border-b border-[#E4EEE7] overflow-hidden">
        {/* Subtle, Faded Karnataka Agricultural Panorama Background */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <img
            src="/images/header_karnataka_panorama.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-right opacity-45 mix-blend-multiply"
          />
          {/* Smooth gradient mask dissolving illustration softly into clean white on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 sm:via-white/60 to-transparent" />
        </div>

        {/* Brand Container */}
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-5 flex items-center justify-between gap-4">
          
          {/* Left: AgriSethu Emblem + Brand Name + Institutional Tagline */}
          <div className="flex items-center gap-4 sm:gap-6">
            
            {/* Clickable Main Brand Logo */}
            <NavLink
              to="/"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="AgriSethu Home"
            >
              {/* Sprout & Bridge Icon Emblem matching reference */}
              <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center">
                <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Top Golden Leaf */}
                  <path
                    d="M24 16C24 16 16 14 16 6C22 6 25 11 25 11"
                    stroke="#E8B83F"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    fill="#FDF0CD"
                  />
                  {/* Right Golden Sprout Leaf */}
                  <path
                    d="M24 16C24 16 32 14 32 6C26 6 23 11 23 11"
                    stroke="#E8B83F"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    fill="#FDF0CD"
                  />
                  {/* Center Stem */}
                  <path
                    d="M24 12V24"
                    stroke="#087A3D"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  {/* Bridge Arch & Bottom Cradle Leaves */}
                  <path
                    d="M10 34C14 26 34 26 38 34"
                    stroke="#087A3D"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 37H36"
                    stroke="#005A3C"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M24 24C19 23 15 28 17 33C21 33 24 28 24 24Z"
                    fill="#087A3D"
                  />
                  <path
                    d="M24 24C29 23 33 28 31 33C27 33 24 28 24 24Z"
                    fill="#087A3D"
                  />
                </svg>
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col">
                <div className="flex items-baseline leading-none">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#087A3D] tracking-tight">
                    Agri<span className="text-[#064D2C]">Sethu</span>
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.14em] text-[#17352A] uppercase mt-1">
                  AGRITECH BRIDGE • ಕರ್ನಾಟಕ ರೈತ
                </span>
              </div>
            </NavLink>

            {/* Vertical Institutional Divider */}
            <div className="hidden sm:block h-10 w-[1.5px] bg-[#D0DFD6]" />

            {/* Government-style Motto: Farmers • Resources • Progress */}
            <div className="hidden md:flex flex-col justify-center">
              <span className="font-kannada font-bold text-sm sm:text-base text-[#17352A] leading-tight">
                ರೈತರು • ಸಂಪನ್ಮೂಲಗಳು • ಪ್ರಗತಿ
              </span>
              <span className="text-xs font-semibold text-[#4A6B5D] mt-0.5 tracking-wide">
                Farmers • Resources • Progress
              </span>
            </div>

          </div>

          {/* Right: Institutional Search Bar */}
          <div className="flex items-center gap-3">
            <form
              onSubmit={handleSearchSubmit}
              className="relative hidden sm:block w-48 md:w-60 lg:w-72"
            >
              <div className="relative flex items-center">
                <Search className="absolute left-3.5 w-4 h-4 text-[#63736B] pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={isKannada ? 'ಹುಡುಕಿ...' : 'Search...'}
                  className="w-full bg-white text-xs sm:text-sm text-[#17352A] pl-10 pr-4 py-2.5 rounded-full border border-[#DCE8DF] shadow-2xs placeholder-[#8A9B93] focus:outline-none focus:border-[#087A3D] focus:ring-2 focus:ring-[#087A3D]/10 transition-all"
                />
              </div>
            </form>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. MAIN NAVIGATION ROW (Sticky at top: 0, z-index: 1000)                  */}
      {/* ========================================================================= */}
      <nav className="main-navigation sticky top-0 z-[1000] w-full bg-white border-b border-[#E4EEE7] shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
        {/* Desktop Navigation Row (Hidden on mobile) */}
        <div className="hidden lg:block max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Primary Navigation Links with Lucide Icons + Bilingual Subtitles */}
            <div className="flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `group relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl transition-all duration-200 select-none ${
                        isActive
                          ? 'bg-[#EAF7EC] text-[#087A3D]'
                          : 'text-[#17352A] hover:bg-[#F6FBF6] hover:text-[#087A3D]'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {/* Lucide React Icon */}
                        <div
                          className={`flex items-center justify-center transition-colors ${
                            isActive
                              ? 'text-[#087A3D]'
                              : 'text-[#63736B] group-hover:text-[#087A3D]'
                          }`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>

                        {/* Stacked Bilingual Labels */}
                        <div className="flex flex-col text-left">
                          <div className="flex items-center gap-1">
                            <span
                              className={`text-xs xl:text-sm leading-tight transition-colors ${
                                isActive ? 'font-bold text-[#087A3D]' : 'font-semibold text-[#17352A] group-hover:text-[#087A3D]'
                              }`}
                            >
                              {item.labelEn}
                            </span>
                            {item.hasDropdown && (
                              <ChevronDown className="w-3 h-3 text-[#8A9B93] group-hover:text-[#087A3D] transition-transform group-hover:translate-y-0.5" />
                            )}
                          </div>
                          <span
                            className={`text-[10px] xl:text-[11px] font-kannada leading-tight mt-0.5 ${
                              isActive ? 'text-[#064D2C] font-semibold' : 'text-[#63736B] group-hover:text-[#087A3D]'
                            }`}
                          >
                            {item.labelKn}
                          </span>
                        </div>

                        {/* Government Portal Active Indicator Underline */}
                        {isActive && (
                          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#087A3D] rounded-full" />
                        )}
                      </>
                    )}
                  </NavLink>
                );
              })}
            </div>

            {/* Right Controls: Premium Language Toggle + Explore App CTA */}
            <div className="flex items-center gap-3 xl:gap-4 flex-shrink-0">
              
              {/* Premium Public-Portal Language Switcher */}
              <div className="flex items-center p-1 rounded-xl bg-[#F6FBF6] border border-[#DCE8DF] shadow-2xs">
                {/* Kannada Option */}
                <button
                  type="button"
                  onClick={() => setLanguage('kn')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isKannada
                      ? 'bg-[#087A3D] text-white shadow-xs'
                      : 'text-[#17352A] hover:text-[#087A3D]'
                  }`}
                  aria-pressed={isKannada}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span className="font-kannada">ಕನ್ನಡ</span>
                  <ChevronDown className="w-3 h-3 opacity-80" />
                </button>

                {/* English Option */}
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    !isKannada
                      ? 'bg-[#087A3D] text-white shadow-xs'
                      : 'text-[#17352A] hover:text-[#087A3D]'
                  }`}
                  aria-pressed={!isKannada}
                >
                  <span>English</span>
                </button>
              </div>

              {/* Main CTA: Explore App Button */}
              <NavLink
                to="/app"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 xl:px-6 xl:py-3 rounded-2xl bg-[#087A3D] text-white text-xs xl:text-sm font-bold shadow-[0_4px_16px_rgba(8,122,61,0.22)] hover:bg-[#064D2C] hover:shadow-[0_6px_20px_rgba(8,122,61,0.32)] hover:-translate-y-0.5 transition-all group"
              >
                <Smartphone className="w-4 h-4 text-emerald-100 flex-shrink-0" />
                <span>Explore App</span>
                <ArrowRight className="w-4 h-4 text-emerald-200 group-hover:translate-x-1 transition-transform" />
              </NavLink>

            </div>

          </div>
        </div>

        {/* Mobile Sticky Navigation Row (Visible only on mobile) */}
        <div className="lg:hidden flex items-center justify-between px-4 sm:px-6 h-14 bg-white">
          {/* Mobile Brand Emblem & Title */}
          <NavLink
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="AgriSethu Home"
          >
            <div className="relative flex h-8 w-8 flex-shrink-0 items-center justify-center">
              <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 16C24 16 16 14 16 6C22 6 25 11 25 11" stroke="#E8B83F" strokeWidth="3.2" strokeLinecap="round" fill="#FDF0CD" />
                <path d="M24 16C24 16 32 14 32 6C26 6 23 11 23 11" stroke="#E8B83F" strokeWidth="3.2" strokeLinecap="round" fill="#FDF0CD" />
                <path d="M24 12V24" stroke="#087A3D" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M10 34C14 26 34 26 38 34" stroke="#087A3D" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M12 37H36" stroke="#005A3C" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M24 24C19 23 15 28 17 33C21 33 24 28 24 24Z" fill="#087A3D" />
                <path d="M24 24C29 23 33 28 31 33C27 33 24 28 24 24Z" fill="#087A3D" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold text-[#087A3D] tracking-tight leading-none">
                Agri<span className="text-[#064D2C]">Sethu</span>
              </span>
              <span className="text-[9px] font-bold tracking-wider text-[#17352A] uppercase leading-none mt-0.5">
                ಕರ್ನಾಟಕ ರೈತ
              </span>
            </div>
          </NavLink>

          {/* Mobile Right Controls: Language Switcher + Accessible Hamburger Menu */}
          <div className="flex items-center gap-2">
            <div className="flex items-center p-0.5 rounded-lg bg-[#F6FBF6] border border-[#DCE8DF]">
              <button
                type="button"
                onClick={() => setLanguage('kn')}
                className={`px-2 py-1 rounded text-[11px] font-bold transition-all ${
                  isKannada ? 'bg-[#087A3D] text-white shadow-2xs' : 'text-[#17352A]'
                }`}
              >
                ಕನ್ನಡ
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded text-[11px] font-bold transition-all ${
                  !isKannada ? 'bg-[#087A3D] text-white shadow-2xs' : 'text-[#17352A]'
                }`}
              >
                Eng
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#17352A] hover:bg-[#F6FBF6] border border-[#DCE8DF] transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#087A3D]" /> : <Menu className="w-5 h-5 text-[#17352A]" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DRAWER */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E4EEE7] bg-white px-4 pt-4 pb-8 shadow-2xl animate-fadeIn max-h-[calc(100vh-60px)] overflow-y-auto">
            {/* Mobile Search Bar */}
            <form onSubmit={handleSearchSubmit} className="mb-4">
              <div className="relative flex items-center">
                <Search className="absolute left-3.5 w-4 h-4 text-[#63736B]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={isKannada ? 'ಹುಡುಕಿ...' : 'Search...'}
                  className="w-full bg-[#F6FBF6] text-sm text-[#17352A] pl-10 pr-4 py-2.5 rounded-xl border border-[#DCE8DF] focus:outline-none focus:border-[#087A3D]"
                />
              </div>
            </form>

            {/* Mobile Nav Links */}
            <div className="space-y-1.5">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                        isActive
                          ? 'bg-[#EAF7EC] text-[#087A3D] font-bold'
                          : 'text-[#17352A] hover:bg-[#F6FBF6]'
                      }`
                    }
                  >
                    <IconComponent className="w-5 h-5 flex-shrink-0" />
                    <div className="flex flex-col">
                      <span>{item.labelEn}</span>
                      <span className="text-xs font-kannada text-[#63736B]">
                        {item.labelKn}
                      </span>
                    </div>
                  </NavLink>
                );
              })}
            </div>

            {/* Mobile Controls: Language & Explore App */}
            <div className="pt-5 mt-4 border-t border-[#E4EEE7] space-y-4">
              {/* Language Switcher */}
              <div className="flex items-center justify-between px-2">
                <span className="text-xs font-bold text-[#63736B] uppercase tracking-wider">
                  Language / ಭಾಷೆ
                </span>
                <div className="flex items-center p-1 rounded-xl bg-[#F6FBF6] border border-[#DCE8DF]">
                  <button
                    type="button"
                    onClick={() => setLanguage('kn')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      isKannada ? 'bg-[#087A3D] text-white' : 'text-[#17352A]'
                    }`}
                  >
                    ಕನ್ನಡ
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      !isKannada ? 'bg-[#087A3D] text-white' : 'text-[#17352A]'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              {/* Explore App CTA */}
              <NavLink
                to="/app"
                className="w-full flex items-center justify-center gap-2.5 py-3 rounded-2xl bg-[#087A3D] text-white font-bold text-sm shadow-md hover:bg-[#064D2C]"
              >
                <Smartphone className="w-4 h-4" />
                <span>Explore App</span>
                <ArrowRight className="w-4 h-4" />
              </NavLink>
            </div>
          </div>
        )}

      </nav>

    </header>
  );
};
