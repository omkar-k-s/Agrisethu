import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ANNOUNCEMENT_ITEMS, AnnouncementItem } from '../data/announcementsData';
import {
  Megaphone,
  Calendar,
  AlertCircle,
  Clock,
  Search,
  X,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Filter,
  ArrowRight,
  Info,
} from 'lucide-react';

export const Announcements: React.FC = () => {
  const { isKannada } = useLanguage();
  const location = useLocation();

  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const params = new URLSearchParams(location.search);
    const targetId = params.get('id');
    if (targetId) {
      setHighlightedId(targetId);
    }
  }, [location.search]);

  const filters = [
    { id: 'all', labelEn: 'All Notices', labelKn: 'ಎಲ್ಲಾ ಪ್ರಕಟಣೆಗಳು' },
    { id: 'important', labelEn: 'Important & Urgent', labelKn: 'ಮುಖ್ಯ ಮತ್ತು ತುರ್ತು' },
    { id: 'schemes', labelEn: 'Schemes & Subsidies', labelKn: 'ಯೋಜನೆಗಳು' },
    { id: 'events', labelEn: 'Events & Krishi Mela', labelKn: 'ಕಾರ್ಯಕ್ರಮಗಳು' },
    { id: 'platform', labelEn: 'Platform Updates', labelKn: 'ರೈತಸೇತು ಅಪ್ಡೇಟ್ಸ್' },
  ];

  const filteredAnnouncements = useMemo(() => {
    return ANNOUNCEMENT_ITEMS.filter((item) => {
      let matchesFilter = true;
      if (selectedFilter === 'important') {
        matchesFilter = item.priority === 'urgent' || item.priority === 'high';
      } else if (selectedFilter === 'schemes') {
        matchesFilter = item.category === 'schemes';
      } else if (selectedFilter === 'events') {
        matchesFilter = item.category === 'events';
      } else if (selectedFilter === 'platform') {
        matchesFilter = item.category === 'platform';
      }

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.titleEn.toLowerCase().includes(q) ||
        item.titleKn.toLowerCase().includes(q) ||
        item.descriptionEn.toLowerCase().includes(q) ||
        item.descriptionKn.toLowerCase().includes(q) ||
        (item.eligibilityEn && item.eligibilityEn.toLowerCase().includes(q)) ||
        (item.eligibilityKn && item.eligibilityKn.toLowerCase().includes(q));

      return matchesFilter && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-[#F8FAF9] text-[#17352A]">
      {/* ========================================================================= */}
      {/* 1. GOVERNMENT-PORTAL HERO HEADER                                         */}
      {/* ========================================================================= */}
      <section className="relative bg-[#064D2C] text-white pt-12 pb-14 px-4 sm:px-6 lg:px-8 border-b-4 border-[#E8B83F] overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute right-10 bottom-0 w-80 h-80 rounded-full bg-emerald-300 blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-emerald-100 mb-4 backdrop-blur-xs">
            <Megaphone className="w-4 h-4 text-[#E8B83F]" />
            <span className="font-kannada">ಸಾರ್ವಜನಿಕ ಪ್ರಕಟಣಾ ಫಲಕ</span>
            <span className="text-white/40">•</span>
            <span>Public Agricultural Notice Board</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {isKannada ? (
                <>
                  ರೈತರ ಪ್ರಕಟಣೆಗಳು <span className="text-[#E8B83F]">ಮತ್ತು ಗಡುವುಗಳು</span>
                </>
              ) : (
                <>
                  Official Farmer <span className="text-[#E8B83F]">Announcements</span>
                </>
              )}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal">
              {isKannada
                ? 'ಕೃಷಿ ಯೋಜನೆಗಳ ಅರ್ಜಿ ಸಲ್ಲಿಕೆ ಗಡುವು, ಕೃಷಿ ಮೇಳ ಕಾರ್ಯಕ್ರಮಗಳು, ಮಣ್ಣು ಪರೀಕ್ಷಾ ಅಭಿಯಾನ ಹಾಗೂ ರೈತಸೇತು ವೇದಿಕೆಯ ಪ್ರಮುಖ ಸಾರ್ವಜನಿಕ ನೋಟಿಸ್‌ಗಳು.'
                : 'Priority notices, subsidy application deadlines, Krishi Mela schedules, farmer training events, and verified public circulars across Karnataka.'}
            </p>
          </div>

          {/* Key Notice Stats */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-emerald-200/90 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E8B83F]" />
              <span>Timely Scheme Updates</span>
            </span>
            <span className="text-white/40">•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#E8B83F]" />
              <span>Application Deadline Tracking</span>
            </span>
            <span className="text-white/40">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E8B83F]" />
              <span>Official Department Portals</span>
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FILTER & SEARCH CONTROL BAR                                           */}
      {/* ========================================================================= */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#DCE8DF] shadow-xs py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Priority / Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <Filter className="w-4 h-4 text-[#087A3D] flex-shrink-0 mr-1 hidden sm:block" />
            {filters.map((f) => {
              const isActive = selectedFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setSelectedFilter(f.id)}
                  type="button"
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#087A3D] text-white shadow-xs'
                      : 'bg-[#F4FAF6] text-[#17352A] hover:bg-[#EAF7EC] border border-[#DCE8DF]'
                  }`}
                >
                  {isKannada ? f.labelKn : f.labelEn}
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
              placeholder={isKannada ? 'ಪ್ರಕಟಣೆಗಳಲ್ಲಿ ಹುಡುಕಿ...' : 'Search announcements...'}
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
      {/* 3. ANNOUNCEMENTS LIST / CARDS                                            */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {filteredAnnouncements.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#DCE8DF] shadow-xs">
            <Megaphone className="w-12 h-12 text-[#8A9B93] mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-bold text-[#17352A]">
              {isKannada ? 'ಯಾವುದೇ ಪ್ರಕಟಣೆ ಕಂಡುಬಂದಿಲ್ಲ' : 'No announcements found'}
            </h3>
            <p className="text-xs sm:text-sm text-[#61706A] mt-1 max-w-md mx-auto">
              {isKannada
                ? 'ಬೇರೆ ಫಿಲ್ಟರ್ ಆಯ್ಕೆ ಮಾಡಿ ಅಥವಾ ಹುಡುಕಾಟದ ಪದವನ್ನು ಬದಲಾಯಿಸಿ.'
                : 'Try adjusting your search criteria or switch to another filter category.'}
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#087A3D] text-white text-xs font-bold hover:bg-[#064D2C] transition-colors"
            >
              {isKannada ? 'ಎಲ್ಲಾ ಪ್ರಕಟಣೆಗಳನ್ನು ತೋರಿಸಿ' : 'Reset Filters'}
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredAnnouncements.map((item) => {
              const isUrgent = item.priority === 'urgent';
              const isHigh = item.priority === 'high';
              const isTargeted = highlightedId === item.id;

              return (
                <div
                  key={item.id}
                  id={item.id}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-xs hover:shadow-md ${
                    isTargeted
                      ? 'border-[#087A3D] ring-2 ring-[#087A3D]/20 bg-emerald-50/20'
                      : isUrgent
                      ? 'border-amber-300'
                      : 'border-[#DCE8DF]'
                  }`}
                >
                  <div className="p-5 sm:p-7">
                    {/* Header Row: Priority Badge + Category + Date */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <div className="flex flex-wrap items-center gap-2">
                        {/* Priority Badge */}
                        {isUrgent && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                            <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
                            <span>{isKannada ? 'ತುರ್ತು ಗಮನ' : 'Urgent Notice'}</span>
                          </span>
                        )}
                        {isHigh && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-[#064D2C] border border-emerald-300">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#087A3D]" />
                            <span>{isKannada ? 'ಮುಖ್ಯ ಪ್ರಕಟಣೆ' : 'High Priority'}</span>
                          </span>
                        )}

                        {/* Category Badge */}
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F4FAF6] text-[#2C4A3E] border border-[#DCE8DF]">
                          {isKannada ? item.categoryLabelKn : item.categoryLabelEn}
                        </span>
                      </div>

                      {/* Publication Date */}
                      <div className="flex items-center gap-1.5 text-xs text-[#61706A]">
                        <Calendar className="w-3.5 h-3.5 text-[#8A9B93]" />
                        <span>{item.date}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-lg sm:text-xl font-bold text-[#17352A] hover:text-[#087A3D] transition-colors leading-snug">
                      {isKannada ? item.titleKn : item.titleEn}
                    </h2>

                    {/* Description */}
                    <p className="mt-3 text-xs sm:text-sm text-[#4A6B5D] leading-relaxed">
                      {isKannada ? item.descriptionKn : item.descriptionEn}
                    </p>

                    {/* Eligibility & Criteria (if present) */}
                    {(item.eligibilityEn || item.eligibilityKn) && (
                      <div className="mt-4 p-3.5 rounded-xl bg-[#F6FBF6] border border-[#E0EFE5] flex items-start gap-3">
                        <Info className="w-4 h-4 text-[#087A3D] flex-shrink-0 mt-0.5" />
                        <div className="text-xs text-[#1F4032]">
                          <span className="font-bold">
                            {isKannada ? 'ಅರ್ಹತಾ ಮಾನದಂಡ:' : 'Eligibility:'}
                          </span>{' '}
                          <span>
                            {isKannada ? item.eligibilityKn : item.eligibilityEn}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Deadline and Action Link */}
                    <div className="mt-5 pt-4 border-t border-[#E4EEE7] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      {item.deadline ? (
                        <div className="flex items-center gap-2 text-xs font-bold text-[#A84B0B] bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200/80">
                          <Clock className="w-4 h-4 text-[#C05621]" />
                          <span>
                            {isKannada ? 'ಅಂತಿಮ ದಿನಾಂಕ:' : 'Deadline:'} {item.deadline}
                          </span>
                        </div>
                      ) : (
                        <div className="text-xs text-[#61706A] italic">
                          {isKannada ? 'ಸಾರ್ವಜನಿಕ ಮಾಹಿತಿ' : 'General Circular'}
                        </div>
                      )}

                      {item.actionUrl && (
                        <a
                          href={item.actionUrl}
                          target={item.actionUrl.startsWith('http') ? '_blank' : '_self'}
                          rel={item.actionUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#087A3D] hover:bg-[#064D2C] text-white text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer self-start sm:self-auto"
                        >
                          <span>
                            {isKannada
                              ? item.actionTextKn || 'ವಿವರ ನೋಡಿ'
                              : item.actionTextEn || 'View Details'}
                          </span>
                          {item.actionUrl.startsWith('http') ? (
                            <ExternalLink className="w-3.5 h-3.5" />
                          ) : (
                            <ArrowRight className="w-3.5 h-3.5" />
                          )}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};
