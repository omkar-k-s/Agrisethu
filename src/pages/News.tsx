import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { NEWS_ITEMS, NewsItem } from '../data/newsData';
import {
  BookOpen,
  Calendar,
  Search,
  X,
  ExternalLink,
  ShieldCheck,
  Building2,
  Tag,
  ArrowRight,
  Filter,
  CheckCircle2,
} from 'lucide-react';

export const News: React.FC = () => {
  const { isKannada } = useLanguage();
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalItem, setActiveModalItem] = useState<NewsItem | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Check if query param specifies an item id
    const params = new URLSearchParams(location.search);
    const targetId = params.get('id');
    if (targetId) {
      const match = NEWS_ITEMS.find((n) => n.id === targetId);
      if (match) {
        setActiveModalItem(match);
      }
    }
  }, [location.search]);

  const categories = [
    { id: 'all', labelEn: 'All Updates', labelKn: 'ಎಲ್ಲಾ ಸುದ್ದಿಗಳು' },
    { id: 'schemes', labelEn: 'Government Schemes', labelKn: 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು' },
    { id: 'advisory', labelEn: 'Crop Advisories', labelKn: 'ಬೆಳೆ ಸಲಹೆಗಳು' },
    { id: 'inputs', labelEn: 'Seeds & Fertilizers', labelKn: 'ಬೀಜ ಮತ್ತು ಗೊಬ್ಬರ' },
    { id: 'equipment', labelEn: 'Farm Machinery', labelKn: 'ಕೃಷಿ ಯಂತ್ರೋಪಕರಣ' },
    { id: 'platform', labelEn: 'RaithaSetu News', labelKn: 'ರೈತಸೇತು ಸುದ್ದಿ' },
  ];

  const filteredNews = useMemo(() => {
    return NEWS_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.titleEn.toLowerCase().includes(q) ||
        item.titleKn.toLowerCase().includes(q) ||
        item.summaryEn.toLowerCase().includes(q) ||
        item.summaryKn.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#F8FAF9] text-[#17352A]">
      {/* ========================================================================= */}
      {/* 1. GOVERNMENT-PORTAL HERO HEADER                                         */}
      {/* ========================================================================= */}
      <section className="relative bg-[#064D2C] text-white pt-12 pb-14 px-4 sm:px-6 lg:px-8 border-b-4 border-[#E8B83F] overflow-hidden">
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute left-10 bottom-0 w-80 h-80 rounded-full bg-emerald-300 blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-emerald-100 mb-4 backdrop-blur-xs">
            <ShieldCheck className="w-4 h-4 text-[#E8B83F]" />
            <span className="font-kannada">ಅಧಿಕೃತ ಕೃಷಿ ವಾರ್ತೆಗಳು</span>
            <span className="text-white/40">•</span>
            <span>Verified Agricultural News Bulletin</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {isKannada ? (
                <>
                  ಕರ್ನಾಟಕ ಕೃಷಿ <span className="text-[#E8B83F]">ಸುದ್ದಿ ಮತ್ತು ಅಪ್ಡೇಟ್ಸ್</span>
                </>
              ) : (
                <>
                  Agricultural <span className="text-[#E8B83F]">News & Updates</span>
                </>
              )}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal">
              {isKannada
                ? 'ಕರ್ನಾಟಕದ ರೈತರಿಗೆ ಅಗತ್ಯವಾದ ಇತ್ತೀಚಿನ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು, ಸಬ್ಸಿಡಿ ಸೌಲಭ್ಯಗಳು, ಋತುಮಾನ ಬೆಳೆ ಸಲಹೆಗಳು ಹಾಗೂ ಯಂತ್ರೋಪಕರಣ ಬಾಡಿಗೆಯ ಪ್ರಮುಖ ಮಾಹಿತಿ ಸಂಗ್ರಹ.'
                : 'Verified information on government subsidies, seasonal farming advisories, certified seed stock availability, and agricultural mechanization services across Karnataka.'}
            </p>
          </div>

          {/* Quick Notice Pill */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-emerald-200/90">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E8B83F]" />
              <span>Dept. of Agriculture, GoK Sourced</span>
            </span>
            <span className="text-white/40">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E8B83F]" />
              <span>UAS Bangalore & Dharwad Advisories</span>
            </span>
            <span className="text-white/40">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E8B83F]" />
              <span>Raitha Samparka Kendra Real-Time Data</span>
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FILTER & SEARCH CONTROL BAR                                           */}
      {/* ========================================================================= */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#DCE8DF] shadow-xs py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <Filter className="w-4 h-4 text-[#087A3D] flex-shrink-0 mr-1 hidden sm:block" />
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  type="button"
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#087A3D] text-white shadow-xs'
                      : 'bg-[#F4FAF6] text-[#17352A] hover:bg-[#EAF7EC] border border-[#DCE8DF]'
                  }`}
                >
                  {isKannada ? cat.labelKn : cat.labelEn}
                </button>
              );
            })}
          </div>

          {/* In-Page Keyword Search */}
          <div className="relative w-full md:w-80 flex-shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A9B93] pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isKannada ? 'ಸುದ್ದಿಗಳಲ್ಲಿ ಹುಡುಕಿ...' : 'Filter news by keyword...'}
              className="w-full bg-[#F6FBF6] text-xs sm:text-sm text-[#17352A] pl-10 pr-9 py-2 rounded-full border border-[#DCE8DF] focus:outline-none focus:border-[#087A3D] focus:ring-2 focus:ring-[#087A3D]/10 transition-all placeholder-[#8A9B93]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A9B93] hover:text-[#17352A] p-0.5 rounded-full"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. NEWS CARDS GRID                                                       */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {filteredNews.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#DCE8DF] shadow-xs">
            <BookOpen className="w-12 h-12 text-[#8A9B93] mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-bold text-[#17352A]">
              {isKannada ? 'ಯಾವುದೇ ಸುದ್ದಿ ಕಂಡುಬಂದಿಲ್ಲ' : 'No news found'}
            </h3>
            <p className="text-xs sm:text-sm text-[#61706A] mt-1 max-w-md mx-auto">
              {isKannada
                ? 'ನಿಮ್ಮ ಹುಡುಕಾಟದ ಪದಗಳನ್ನು ಬದಲಿಸಿ ಅಥವಾ ಇತರ ವರ್ಗವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ.'
                : 'Try adjusting your search query or select another category filter to explore updates.'}
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#087A3D] text-white text-xs font-bold hover:bg-[#064D2C] transition-colors"
            >
              {isKannada ? 'ಎಲ್ಲಾ ಸುದ್ದಿಗಳನ್ನು ತೋರಿಸಿ' : 'Reset Filters'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((news) => (
              <article
                key={news.id}
                className="flex flex-col justify-between bg-white rounded-2xl border border-[#DCE8DF] shadow-xs hover:shadow-md hover:border-[#087A3D]/40 transition-all duration-200 overflow-hidden group"
              >
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  {/* Category & Date Metadata */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#EAF7EC] text-[#087A3D] border border-emerald-200/60">
                      <Tag className="w-3 h-3" />
                      <span>{isKannada ? news.categoryLabelKn : news.categoryLabelEn}</span>
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-[#61706A] font-medium">
                      <Calendar className="w-3 h-3 text-[#8A9B93]" />
                      <span>{news.date}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#17352A] group-hover:text-[#087A3D] transition-colors leading-snug mb-2.5">
                    {isKannada ? news.titleKn : news.titleEn}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#61706A] leading-relaxed line-clamp-3 mb-4 flex-1">
                    {isKannada ? news.summaryKn : news.summaryEn}
                  </p>

                  {/* Source Agency Badge */}
                  <div className="flex items-center gap-1.5 text-[11px] text-[#4A6B5D] bg-[#F6FBF6] p-2 rounded-lg border border-[#E4EEE7]">
                    <Building2 className="w-3.5 h-3.5 text-[#087A3D] flex-shrink-0" />
                    <span className="truncate">{news.source}</span>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-5 py-3.5 bg-[#FAFDFB] border-t border-[#E4EEE7] flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#087A3D]">
                    {isKannada ? 'ಪರಿಶೀಲಿತ ಮಾಹಿತಿ' : 'Verified Resource'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveModalItem(news)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087A3D] hover:text-[#064D2C] group-hover:translate-x-0.5 transition-all cursor-pointer"
                  >
                    <span>{isKannada ? 'ಸಂಪೂರ್ಣ ಓದಿ' : 'Read More'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* 4. MODAL DIALOG FOR FULL ARTICLE READING                                 */}
      {/* ========================================================================= */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setActiveModalItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#DCE8DF] overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#064D2C] text-white p-6 relative">
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-[#E8B83F] text-[#064D2C] mb-3">
                <Tag className="w-3 h-3" />
                <span>
                  {isKannada ? activeModalItem.categoryLabelKn : activeModalItem.categoryLabelEn}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                {isKannada ? activeModalItem.titleKn : activeModalItem.titleEn}
              </h2>

              <div className="mt-3 flex items-center gap-4 text-xs text-emerald-200/90 font-medium">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#E8B83F]" />
                  <span>{activeModalItem.date}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#E8B83F]" />
                  <span>{activeModalItem.source}</span>
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4 text-[#17352A] text-sm leading-relaxed">
              <div className="p-3.5 rounded-xl bg-[#EAF7EC] border border-[#D0DFD6] text-xs text-[#064D2C] font-semibold">
                {isKannada ? activeModalItem.summaryKn : activeModalItem.summaryEn}
              </div>

              <div className="whitespace-pre-line text-xs sm:text-sm text-[#2C4A3E] leading-relaxed">
                {isKannada ? activeModalItem.contentKn : activeModalItem.contentEn}
              </div>

              {activeModalItem.officialUrl && (
                <div className="pt-4 border-t border-[#E4EEE7] flex items-center justify-between">
                  <span className="text-xs text-[#61706A]">
                    {isKannada ? 'ಹೆಚ್ಚಿನ ಅಧಿಕೃತ ವಿವರಗಳಿಗಾಗಿ:' : 'Official Portal Link:'}
                  </span>
                  <a
                    href={activeModalItem.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#087A3D] text-white text-xs font-bold hover:bg-[#064D2C] transition-colors"
                  >
                    <span>{isKannada ? 'ವೆಬ್‌ಸೈಟ್‌ಗೆ ಭೇಟಿ ನೀಡಿ' : 'Visit Official Portal'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="bg-[#FAFDFB] p-4 border-t border-[#E4EEE7] flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="px-5 py-2 rounded-xl bg-[#E4EEE7] hover:bg-[#D0DFD6] text-[#17352A] text-xs font-bold transition-colors cursor-pointer"
              >
                {isKannada ? 'ಮುಚ್ಚಿ' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
