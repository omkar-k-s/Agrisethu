import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { SEARCH_INDEX, SearchResultItem } from '../../data/searchIndex';
import {
  Search,
  X,
  ArrowRight,
  Tractor,
  Sprout,
  FileText,
  Megaphone,
  BookOpen,
  HelpCircle,
  CornerDownLeft,
} from 'lucide-react';

interface SearchDropdownProps {
  isMobile?: boolean;
  onCloseMobile?: () => void;
}

export const SearchDropdown: React.FC<SearchDropdownProps> = ({
  isMobile = false,
  onCloseMobile,
}) => {
  const { isKannada } = useLanguage();
  const navigate = useNavigate();

  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Quick popular search tags
  const popularSearches = [
    { labelEn: 'Tractor Rental', labelKn: 'ಟ್ರ್ಯಾಕ್ಟರ್ ಬಾಡಿಗೆ', q: 'tractor' },
    { labelEn: 'Certified Seeds', labelKn: 'ಪ್ರಮಾಣೀಕೃತ ಬೀಜ', q: 'seeds' },
    { labelEn: 'Krishi Bhagya', labelKn: 'ಕೃಷಿ ಭಾಗ್ಯ', q: 'krishi bhagya' },
    { labelEn: 'Crop Insurance', labelKn: 'ಬೆಳೆ ವಿಮೆ', q: 'insurance' },
    { labelEn: 'Harvester', labelKn: 'ಕೊಯ್ಲು ಯಂತ್ರ', q: 'harvester' },
  ];

  // Filter results dynamically
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    return SEARCH_INDEX.filter((item) => {
      const matchTitleEn = item.titleEn.toLowerCase().includes(q);
      const matchTitleKn = item.titleKn.toLowerCase().includes(q);
      const matchDescEn = item.descriptionEn.toLowerCase().includes(q);
      const matchDescKn = item.descriptionKn.toLowerCase().includes(q);
      const matchCategory =
        item.category.toLowerCase().includes(q) ||
        item.categoryLabelEn.toLowerCase().includes(q) ||
        item.categoryLabelKn.toLowerCase().includes(q);
      const matchKeywords = item.keywords.some((kw) =>
        kw.toLowerCase().includes(q)
      );

      return (
        matchTitleEn ||
        matchTitleKn ||
        matchDescEn ||
        matchDescKn ||
        matchCategory ||
        matchKeywords
      );
    }).slice(0, 7);
  }, [query]);

  // Handle clicking outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Reset selected index on query change
  useEffect(() => {
    setSelectedIndex(-1);
  }, [query]);

  const handleSelectResult = (item: SearchResultItem) => {
    setIsOpen(false);
    setQuery('');
    if (onCloseMobile) onCloseMobile();
    navigate(item.path);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen && e.key === 'ArrowDown') {
      setIsOpen(true);
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (results.length > 0) {
        setSelectedIndex((prev) => (prev + 1) % results.length);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (results.length > 0) {
        setSelectedIndex((prev) =>
          prev <= 0 ? results.length - 1 : prev - 1
        );
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && selectedIndex < results.length) {
        handleSelectResult(results[selectedIndex]);
      } else if (results.length > 0) {
        handleSelectResult(results[0]);
      } else if (query.trim()) {
        // If no direct result, navigate to what-we-do
        setIsOpen(false);
        navigate(`/what-we-do?q=${encodeURIComponent(query)}`);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Equipment':
        return <Tractor className="w-3.5 h-3.5 text-[#087A3D]" />;
      case 'Inputs':
        return <Sprout className="w-3.5 h-3.5 text-emerald-600" />;
      case 'News':
        return <BookOpen className="w-3.5 h-3.5 text-blue-600" />;
      case 'Announcements':
        return <Megaphone className="w-3.5 h-3.5 text-amber-600" />;
      case 'Schemes':
        return <FileText className="w-3.5 h-3.5 text-purple-600" />;
      default:
        return <HelpCircle className="w-3.5 h-3.5 text-gray-500" />;
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative ${isMobile ? 'w-full' : 'w-48 sm:w-60 md:w-72 lg:w-80'}`}
    >
      {/* Search Input Bar */}
      <div className="relative flex items-center">
        <Search className="absolute left-3.5 w-4 h-4 text-[#63736B] pointer-events-none" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
          placeholder={
            isKannada
              ? 'ಹುಡುಕಿ (ಉದಾ: ಟ್ರ್ಯಾಕ್ಟರ್, ಬೀಜ, ಯೋಜನೆ)...'
              : 'Search resources, equipment, schemes...'
          }
          className="w-full bg-white text-xs sm:text-sm text-[#17352A] pl-10 pr-9 py-2 sm:py-2.5 rounded-full border border-[#DCE8DF] shadow-2xs placeholder-[#8A9B93] focus:outline-none focus:border-[#087A3D] focus:ring-2 focus:ring-[#087A3D]/15 transition-all"
          aria-label="Search RaithaSetu resources"
          aria-expanded={isOpen}
          role="combobox"
        />

        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              inputRef.current?.focus();
            }}
            className="absolute right-3 p-1 rounded-full text-[#8A9B93] hover:text-[#17352A] hover:bg-black/5 transition-colors"
            title="Clear search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Live Dropdown Overlay */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-xl border border-[#DCE8DF] overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150 max-h-[85vh] sm:max-h-[480px] flex flex-col">
          
          {/* Active Query Results */}
          {query.trim().length > 0 ? (
            results.length > 0 ? (
              <div className="overflow-y-auto py-2">
                <div className="px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#63736B] border-b border-[#E4EEE7] flex items-center justify-between">
                  <span>
                    {isKannada
                      ? `${results.length} ಫಲಿತಾಂಶಗಳು`
                      : `${results.length} Matching Results`}
                  </span>
                  <span className="text-[10px] text-[#8A9B93] hidden sm:flex items-center gap-1 font-normal">
                    <span>Use ↑ ↓ to navigate</span>
                    <CornerDownLeft className="w-2.5 h-2.5" />
                  </span>
                </div>

                <ul role="listbox" className="divide-y divide-[#F0F5F2]">
                  {results.map((item, idx) => {
                    const isSelected = selectedIndex === idx;
                    return (
                      <li
                        key={item.id}
                        role="option"
                        aria-selected={isSelected}
                        onClick={() => handleSelectResult(item)}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`px-4 py-2.5 cursor-pointer transition-colors flex items-start gap-3 ${
                          isSelected
                            ? 'bg-[#EAF7EC] text-[#064D2C]'
                            : 'hover:bg-[#F6FBF6]'
                        }`}
                      >
                        <div className="mt-0.5 p-1 rounded-md bg-white border border-[#DCE8DF] shadow-2xs flex-shrink-0">
                          {getCategoryIcon(item.category)}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-xs sm:text-sm font-bold text-[#17352A] truncate">
                              {isKannada ? item.titleKn : item.titleEn}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#F0F5F2] text-[#4A6B5D] flex-shrink-0">
                              {isKannada ? item.categoryLabelKn : item.categoryLabelEn}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#61706A] line-clamp-1">
                            {isKannada ? item.descriptionKn : item.descriptionEn}
                          </p>
                        </div>

                        <ArrowRight className="w-3.5 h-3.5 text-[#8A9B93] self-center flex-shrink-0" />
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              // No Results Found State
              <div className="p-6 text-center">
                <HelpCircle className="w-10 h-10 text-[#8A9B93] mx-auto mb-2 opacity-60" />
                <p className="text-sm font-bold text-[#17352A]">
                  {isKannada ? `ಯಾವುದೇ ಫಲಿತಾಂಶ ಕಂಡುಬಂದಿಲ್ಲ` : 'No matching results found'}
                </p>
                <p className="text-xs text-[#61706A] mt-1 max-w-xs mx-auto">
                  {isKannada
                    ? `"${query}" ಗಾಗಿ ಯಾವುದೇ ಸಂಪನ್ಮೂಲ ಸಿಗಲಿಲ್ಲ. ಬೇರೆ ಪದ ಬಳಸಿ ಪ್ರಯತ್ನಿಸಿ.`
                    : `No agricultural resources matched "${query}". Try searching for equipment, seeds, or schemes.`}
                </p>

                {/* Suggestions */}
                <div className="mt-4 pt-3 border-t border-[#E4EEE7]">
                  <p className="text-[11px] font-bold text-[#63736B] mb-2 uppercase tracking-wide">
                    {isKannada ? 'ಜನಪ್ರಿಯ ಶೋಧನೆಗಳು:' : 'Try searching for:'}
                  </p>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {popularSearches.map((pop) => (
                      <button
                        key={pop.q}
                        type="button"
                        onClick={() => {
                          setQuery(pop.q);
                          inputRef.current?.focus();
                        }}
                        className="px-2.5 py-1 rounded-full bg-[#EAF7EC] text-[#087A3D] text-[11px] font-bold hover:bg-[#D7EFE0] transition-colors"
                      >
                        {isKannada ? pop.labelKn : pop.labelEn}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )
          ) : (
            // Empty State on Focus: Quick Suggestions
            <div className="p-4">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E4EEE7]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#63736B]">
                  {isKannada ? 'ಜನಪ್ರಿಯ ಕೃಷಿ ವಿಷಯಗಳು' : 'Quick Popular Searches'}
                </span>
                <span className="text-[10px] text-[#8A9B93]">
                  {isKannada ? 'ಕ್ಲಿಕ್ ಮಾಡಿ' : 'Tap to search'}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {popularSearches.map((pop) => (
                  <button
                    key={pop.q}
                    type="button"
                    onClick={() => {
                      setQuery(pop.q);
                      inputRef.current?.focus();
                    }}
                    className="px-3 py-1.5 rounded-xl bg-[#F6FBF6] hover:bg-[#EAF7EC] border border-[#DCE8DF] text-xs font-semibold text-[#17352A] hover:text-[#087A3D] transition-colors flex items-center gap-1.5"
                  >
                    <Search className="w-3 h-3 text-[#8A9B93]" />
                    <span>{isKannada ? pop.labelKn : pop.labelEn}</span>
                  </button>
                ))}
              </div>

              <div className="pt-2 border-t border-[#E4EEE7] text-[11px] text-[#8A9B93] text-center">
                {isKannada
                  ? 'ಕನ್ನಡ ಅಥವಾ ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ ಶೋಧಿಸಿ'
                  : 'Type in English or Kannada to discover resources'}
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
};
