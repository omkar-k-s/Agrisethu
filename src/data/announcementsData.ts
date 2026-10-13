export interface AnnouncementItem {
  id: string;
  titleEn: string;
  titleKn: string;
  category: 'schemes' | 'events' | 'advisory' | 'platform';
  categoryLabelEn: string;
  categoryLabelKn: string;
  priority: 'urgent' | 'high' | 'normal';
  date: string;
  deadline: string | null;
  descriptionEn: string;
  descriptionKn: string;
  eligibilityEn?: string;
  eligibilityKn?: string;
  actionUrl?: string;
  actionTextEn?: string;
  actionTextKn?: string;
}

export const ANNOUNCEMENT_ITEMS: AnnouncementItem[] = [
  {
    id: 'ann-krishi-mela-2026',
    titleEn: 'State Level Krishi Mela 2026 at GKVK Campus, Bengaluru',
    titleKn: 'ಬೆಂಗಳೂರಿನ ಜಿಕೆವಿಕೆ ಆವರಣದಲ್ಲಿ ರಾಜ್ಯ ಮಟ್ಟದ ಕೃಷಿ ಮೇಳ ೨೦೨೬',
    category: 'events',
    categoryLabelEn: 'Agricultural Events',
    categoryLabelKn: 'ಕೃಷಿ ಕಾರ್ಯಕ್ರಮಗಳು',
    priority: 'high',
    date: 'October 12, 2026',
    deadline: 'Nov 05 - Nov 08, 2026',
    descriptionEn: 'The 4-day annual Krishi Mela will showcase climate-resilient crop varieties, automated agricultural machinery demonstrations, animal husbandry exhibits, and direct consultations with farm scientists.',
    descriptionKn: '೪ ದಿನಗಳ ಕಾಲ ನಡೆಯುವ ಕೃಷಿ ಮೇಳದಲ್ಲಿ ಹವಾಮಾನ ಸಹಿಷ್ಣು ಬೆಳೆ ತಳಿಗಳ ಪರಿಚಯ, ಸುಧಾರಿತ ಕೃಷಿ ಯಂತ್ರೋಪಕರಣಗಳ ಪ್ರಾತ್ಯಕ್ಷಿಕೆ, ಪಶುಸಂಗೋಪನೆ ಮತ್ತು ಕೃಷಿ ವಿಜ್ಞಾನಿಗಳೊಂದಿಗೆ ನೇರ ಸಂವಾದ ಕಾರ್ಯಕ್ರಮಗಳು ನಡೆಯಲಿವೆ.',
    eligibilityEn: 'Open to all farmers, rural entrepreneurs, students, and agricultural stakeholders. Free entry and technical seminars in Kannada.',
    eligibilityKn: 'ರಾಜ್ಯದ ಎಲ್ಲಾ ರೈತರು, ಕೃಷಿ ಆಸಕ್ತರು ಹಾಗೂ ಸಾರ್ವಜನಿಕರಿಗೆ ಮುಕ್ತ ಪ್ರವೇಶ. ಕನ್ನಡದಲ್ಲಿ ರೈತ-ವಿಜ್ಞಾನಿ ಸಂವಾದ ಗೋಷ್ಠಿಗಳು.',
    actionUrl: 'https://uasbangalore.edu.in',
    actionTextEn: 'View Event Schedule',
    actionTextKn: 'ಕಾರ್ಯಕ್ರಮ ವಿವರ ನೋಡಿ',
  },
  {
    id: 'ann-drip-irrigation-subsidy-window',
    titleEn: 'Pradhan Mantri Krishi Sinchayee Yojana (PMKSY) Drip Irrigation Subsidy Application',
    titleKn: 'ಪ್ರಧಾನ ಮಂತ್ರಿ ಕೃಷಿ ಸಿಂಚಾಯಿ ಯೋಜನೆ (PMKSY) ಹನಿ ನೀರಾವರಿ ಸಹಾಯಧನ ಅರ್ಜಿ ಸಲ್ಲಿಕೆ',
    category: 'schemes',
    categoryLabelEn: 'Government Schemes',
    categoryLabelKn: 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು',
    priority: 'urgent',
    date: 'October 09, 2026',
    deadline: 'October 31, 2026',
    descriptionEn: 'Applications are invited for micro-irrigation systems (drip and sprinkler) under PMKSY. Financial assistance of up to 90% for SC/ST and up to 45%-55% for other farmers.',
    descriptionKn: 'ಪಿಎಂಕೆಎಸ್‌ವೈ ಯೋಜನೆಯಡಿ ಹನಿ ಹಾಗೂ ತುಂತುರು ನೀರಾವರಿ ಘಟಕಗಳ ಅಳವಡಿಕೆಗೆ ರೈತರಿಂದ ಅರ್ಜಿ ಆಹ್ವಾನಿಸಲಾಗಿದೆ. ಪರಿಶಿಷ್ಟ ಜಾತಿ/ಪಂಗಡದ ರೈತರಿಗೆ ಶೇ. ೯೦ ರವರೆಗೆ ಹಾಗೂ ಇತರ ರೈತರಿಗೆ ಶೇ. ೪೫-೫೫ ರವರೆಗೆ ಸಹಾಯಧನ.',
    eligibilityEn: 'Farmers possessing updated land RTC and FRUITS ID with water source facility (borewell/open well/canal).',
    eligibilityKn: 'ಚಾಲ್ತಿ ಪಹಣಿ (RTC), ಫ್ರೂಟ್ಸ್ ಐಡಿ (FRUITS ID) ಹೊಂದಿರುವ ಹಾಗೂ ಖಚಿತ ನೀರಾವರಿ ಮೂಲವಿರುವ ರೈತರು ಅರ್ಹರು.',
    actionUrl: 'https://horticulturedir.karnataka.gov.in',
    actionTextEn: 'Apply on Horticulture Portal',
    actionTextKn: 'ತೋಟಗಾರಿಕೆ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ',
  },
  {
    id: 'ann-soil-health-card-campaign',
    titleEn: 'District-Level Soil Health Card Testing Campaign Across Hobli RSKs',
    titleKn: 'ಹೋಬಳಿ ಮಟ್ಟದ ರೈತ ಸಂಪರ್ಕ ಕೇಂದ್ರಗಳಲ್ಲಿ ಮಣ್ಣು ಆರೋಗ್ಯ ಕಾರ್ಡ್ ಪರೀಕ್ಷಾ ಅಭಿಯಾನ',
    category: 'advisory',
    categoryLabelEn: 'Advisories & Tests',
    categoryLabelKn: 'ಸಲಹೆ ಮತ್ತು ಪರೀಕ್ಷೆ',
    priority: 'normal',
    date: 'October 06, 2026',
    deadline: 'November 15, 2026',
    descriptionEn: 'Soil testing laboratories at RSKs are collecting field soil samples for macronutrient (N, P, K) and micronutrient (Zinc, Boron) analysis to guide balanced fertilizer application and reduce input costs.',
    descriptionKn: 'ರೈತ ಸಂಪರ್ಕ ಕೇಂದ್ರಗಳ ಮಣ್ಣು ಪರೀಕ್ಷಾ ಪ್ರಯೋಗಾಲಯಗಳಲ್ಲಿ ಮಣ್ಣಿನ ಪೋಷಕಾಂಶಗಳ ಪರೀಕ್ಷೆ ನಡೆಯುತ್ತಿದ್ದು, ವೈಜ್ಞಾನಿಕ ರಸಗೊಬ್ಬರ ಬಳಕೆಯ ಮೂಲಕ ವೆಚ್ಚ ಕಡಿತಕ್ಕೆ ಸಲಹೆ ನೀಡಲಾಗುತ್ತಿದೆ.',
    eligibilityEn: 'Farmers should collect V-shaped soil samples from 6-8 spots in their field prior to rabi sowing and submit to their local RSK.',
    eligibilityKn: 'ರೈತರು ಬಿತ್ತನೆಗೆ ಮುನ್ನ ಹೊಲದಲ್ಲಿ ೬-೮ ಸ್ಥಳಗಳಲ್ಲಿ ವಿ-ಆಕಾರದ ಮಾದರಿ ಮಣ್ಣು ಸಂಗ್ರಹಿಸಿ ಸ್ಥಳೀಯ ಆರ್‌ಎಸ್‌ಕೆ ಕೇಂದ್ರಕ್ಕೆ ನೀಡಬಹುದು.',
    actionUrl: 'https://soilhealth.dac.gov.in',
    actionTextEn: 'Soil Health Guidelines',
    actionTextKn: 'ಮಣ್ಣು ಪರೀಕ್ಷೆ ಮಾರ್ಗಸೂಚಿ',
  },
  {
    id: 'ann-raithasetu-village-volunteer-network',
    titleEn: 'RaithaSetu Village Farmer Champions & Machinery Coordinators Network',
    titleKn: 'ರೈತಸೇತು ಗ್ರಾಮ ಮಟ್ಟದ ರೈತ ನಾಯಕರು ಮತ್ತು ಯಂತ್ರ ಸಂಯೋಜಕರ ನೆಟ್‌ವರ್ಕ್',
    category: 'platform',
    categoryLabelEn: 'Platform Updates',
    categoryLabelKn: 'ರೈತಸೇತು ಪ್ರಕಟಣೆಗಳು',
    priority: 'normal',
    date: 'September 30, 2026',
    deadline: 'Ongoing',
    descriptionEn: 'RaithaSetu invites progressive rural youth and village farmers to register as local Machinery Coordinators to assist elder farmers in digital equipment booking and seed discovery.',
    descriptionKn: 'ಹಳ್ಳಿಗಳಲ್ಲಿ ಹಿರಿಯ ರೈತರಿಗೆ ಮೊಬೈಲ್ ಮೂಲಕ ಟ್ರ್ಯಾಕ್ಟರ್ ಬುಕಿಂಗ್ ಮತ್ತು ಬೀಜಗಳ ಲಭ್ಯತೆ ಮಾಹಿತಿ ಪಡೆಯಲು ನೆರವಾಗಲು ಪ್ರಗತಿಪರ ಯುವ ರೈತರನ್ನು ರೈತಸೇತು ಸಂಯೋಜಕರಾಗಿ ನೋಂದಾಯಿಸಿಕೊಳ್ಳಲಾಗುತ್ತಿದೆ.',
    eligibilityEn: 'Rural youth with basic smartphone literacy and strong agricultural background in Karnataka.',
    eligibilityKn: 'ಕರ್ನಾಟಕದ ಗ್ರಾಮೀಣ ಭಾಗದ ಕೃಷಿ ಹಿನ್ನೆಲೆಯುಳ್ಳ ಮತ್ತು ಸ್ಮಾರ್ಟ್‌ಫೋನ್ ಬಳಸುವ ಯುವಕರು/ರೈತರು ಭಾಗವಹಿಸಬಹುದು.',
    actionUrl: '/contact',
    actionTextEn: 'Register as Coordinator',
    actionTextKn: 'ಸಂಯೋಜಕರಾಗಿ ನೋಂದಾಯಿಸಿ',
  },
  {
    id: 'ann-pm-fasal-bima-kharif-claims',
    titleEn: 'PMFBY Kharif Crop Insurance Crop Cutting Experiment & Claim Processing',
    titleKn: 'ಪ್ರಧಾನ ಮಂತ್ರಿ ಫಸಲ್ ಬಿಮಾ ಯೋಜನೆ: ಮುಂಗಾರು ಬೆಳೆ ಕಟಾವು ಪ್ರಯೋಗ ಹಾಗೂ ಪರಿಹಾರ ಪರಿಶೀಲನೆ',
    category: 'schemes',
    categoryLabelEn: 'Government Schemes',
    categoryLabelKn: 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು',
    priority: 'high',
    date: 'September 25, 2026',
    deadline: 'October 25, 2026',
    descriptionEn: 'Joint yield assessment and Crop Cutting Experiments (CCE) are underway across notified gram panchayats. Enrolled farmers who suffered localized unseasonal rain loss must report within 72 hours via the Samrakshane portal or toll-free number.',
    descriptionKn: 'ಅಧಿಸೂಚಿತ ಗ್ರಾಮ ಪಂಚಾಯಿತಿಗಳಲ್ಲಿ ಬೆಳೆ ಕಟಾವು ಪ್ರಯೋಗಗಳು ನಡೆಯುತ್ತಿವೆ. ಅಕಾಲಿಕ ಮಳೆಯಿಂದ ಬೆಳೆ ಹಾನಿಗೊಳಗಾದ ವಿಮೆದಾರ ರೈತರು ೭೨ ಗಂಟೆಗಳ ಒಳಗೆ ಸಂರಕ್ಷಣೆ ಪೋರ್ಟಲ್ ಅಥವಾ ಸಹಾಯವಾಣಿ ಮೂಲಕ ದೂರು ದಾಖಲಿಸಬೇಕು.',
    eligibilityEn: 'Farmers who paid premium for notified crops under PMFBY Kharif 2026.',
    eligibilityKn: 'ಮುಂಗಾರು ೨೦೨೬ ಬೆಳೆ ವಿಮೆ ಪ್ರೀಮಿಯಂ ಪಾವತಿಸಿರುವ ಅರ್ಹ ರೈತರು.',
    actionUrl: 'https://samrakshane.karnataka.gov.in',
    actionTextEn: 'Track Claim on Samrakshane',
    actionTextKn: 'ಸಂರಕ್ಷಣೆ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿ',
  },
  {
    id: 'ann-custom-hiring-harvester-prebooking',
    titleEn: 'Advance Booking of Paddy and Maize Combine Harvesters for November',
    titleKn: 'ನವೆಂಬರ್ ತಿಂಗಳ ಭತ್ತ ಮತ್ತು ಮೆಕ್ಕೆಜೋಳ ಕೊಯ್ಲು ಯಂತ್ರಗಳ ಮುಂಗಡ ಕಾಯ್ದಿರಿಸುವಿಕೆ',
    category: 'events',
    categoryLabelEn: 'Equipment & Services',
    categoryLabelKn: 'ಯಂತ್ರೋಪಕರಣ ಸೇವೆಗಳು',
    priority: 'normal',
    date: 'September 20, 2026',
    deadline: 'October 30, 2026',
    descriptionEn: 'To prevent peak-harvest labor shortages and machinery rental price surges, RaithaSetu and district CHCs have enabled advance slot booking for multi-crop combine harvesters across Tungabhadra and Cauvery basin districts.',
    descriptionKn: 'ಕೊಯ್ಲಿನ ಸಮಯದಲ್ಲಿ ಯಂತ್ರಗಳ ಕೊರತೆ ಮತ್ತು ಅಧಿಕ ಬಾಡಿಗೆ ದರವನ್ನು ತಡೆಯಲು, ತುಂಗಭದ್ರಾ ಹಾಗೂ ಕಾವೇರಿ ಅಚ್ಚುಕಟ್ಟು ಪ್ರದೇಶಗಳಲ್ಲಿ ಭತ್ತ ಮತ್ತು ಮೆಕ್ಕೆಜೋಳ ಕೊಯ್ಲು ಯಂತ್ರಗಳ ಮುಂಗಡ ಬುಕಿಂಗ್ ಸೌಲಭ್ಯ ಆರಂಭಿಸಲಾಗಿದೆ.',
    eligibilityEn: 'Paddy and maize growers in Raichur, Koppal, Bellary, Mandya, and Davanagere.',
    eligibilityKn: 'ರಾಯಚೂರು, ಕೊಪ್ಪಳ, ಬಳ್ಳಾರಿ, ಮಂಡ್ಯ, ದಾವಣಗೆರೆ ಜಿಲ್ಲೆಗಳ ಭತ್ತ ಹಾಗೂ ಮೆಕ್ಕೆಜೋಳ ಬೆಳೆಗಾರರು.',
    actionUrl: '/what-we-do',
    actionTextEn: 'Explore Machinery Details',
    actionTextKn: 'ಯಂತ್ರೋಪಕರಣ ವಿವರ ನೋಡಿ',
  },
];
