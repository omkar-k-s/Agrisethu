export interface ImpactCardData {
  id: string;
  iconName: 'farmer' | 'resources' | 'karnataka' | 'community';
  titleEn: string;
  titleKn: string;
  subtitleEn?: string;
  subtitleKn?: string;
  // Optional verified statistic metric if available in the future (e.g., '100%')
  statMetric?: string;
}

export const HERO_IMPACT_CARDS: ImpactCardData[] = [
  {
    id: 'farmer-first',
    iconName: 'farmer',
    titleEn: 'Farmer First',
    titleKn: 'ರೈತರಿಗೆ ಮೊದಲ ಆದ್ಯತೆ',
    subtitleEn: 'Empowering local farmers',
    subtitleKn: 'ಕೃಷಿಕರ ಹಿತಾಸಕ್ತಿಯೇ ನಮ್ಮ ಮೊದಲ ಗುರಿ',
  },
  {
    id: 'agri-resources',
    iconName: 'resources',
    titleEn: 'Agri Resources',
    titleKn: 'ಕೃಷಿ ಸಂಪನ್ಮೂಲಗಳು',
    subtitleEn: 'Tools, inputs & advisory',
    subtitleKn: 'ಯಂತ್ರೋಪಕರಣ, ಪರಿಕರ ಮತ್ತು ಮಾರ್ಗದರ್ಶನ',
  },
  {
    id: 'karnataka-focus',
    iconName: 'karnataka',
    titleEn: 'Karnataka Focus',
    titleKn: 'ಕರ್ನಾಟಕದ ಮೇಲೆ ಗಮನ',
    subtitleEn: 'Statewide rural outreach',
    subtitleKn: 'ರಾಜ್ಯದ ಪ್ರತಿಯೊಂದು ಕೃಷಿ ವಲಯಕ್ಕೂ ಸೇವೆ',
  },
  {
    id: 'connected-community',
    iconName: 'community',
    titleEn: 'Connected Community',
    titleKn: 'ಸಂಪರ್ಕಿತ ಕೃಷಿ ಸಮುದಾಯ',
    subtitleEn: 'FPOs, owners & partners',
    subtitleKn: 'ಎಫ್‌ಪಿಒ ಮತ್ತು ಸ್ಥಳೀಯ ಪಾಲುದಾರರೊಂದಿಗೆ',
  },
];
