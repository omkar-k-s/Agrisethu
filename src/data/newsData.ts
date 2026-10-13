export interface NewsItem {
  id: string;
  titleEn: string;
  titleKn: string;
  category: 'schemes' | 'advisory' | 'inputs' | 'equipment' | 'platform';
  categoryLabelEn: string;
  categoryLabelKn: string;
  date: string;
  source: string;
  summaryEn: string;
  summaryKn: string;
  contentEn: string;
  contentKn: string;
  tags: string[];
  officialUrl?: string;
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'krishi-bhagya-micro-irrigation',
    titleEn: 'Krishi Bhagya Scheme: Farm Ponds & Solar Micro-Irrigation Assistance',
    titleKn: 'ಕೃಷಿ ಭಾಗ್ಯ ಯೋಜನೆ: ಕೃಷಿ ಹೊಂಡ ಹಾಗೂ ಸೌರ ಸೂಕ್ಷ್ಮ ನೀರಾವರಿ ಸಹಾಯಧನ',
    category: 'schemes',
    categoryLabelEn: 'Government Schemes',
    categoryLabelKn: 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು',
    date: 'October 10, 2026',
    source: 'Department of Agriculture, Govt. of Karnataka',
    summaryEn: 'Karnataka Agriculture Department extends Krishi Bhagya provisions across dry-land districts, offering financial subsidies for polythene-lined farm ponds and diesel/solar pumpsets.',
    summaryKn: 'ಕರ್ನಾಟಕ ಕೃಷಿ ಇಲಾಖೆಯು ಮಳೆಯಾಶ್ರಿತ ಪ್ರದೇಶಗಳ ರೈತರಿಗೆ ಕೃಷಿ ಹೊಂಡ ನಿರ್ಮಾಣ, ಪಾಲಿಥೀನ್ ಹೊದಿಕೆ ಹಾಗೂ ಡೀಸೆಲ್/ಸೌರ ಪಂಪ್‌ಸೆಟ್‌ಗಳಿಗೆ ಆರ್ಥಿಕ ಸಬ್ಸಿಡಿಯನ್ನು ವಿಸ್ತರಿಸಿದೆ.',
    contentEn: `The Krishi Bhagya scheme continues to support dryland farmers across Karnataka in conserving rainwater and securing assured irrigation.
    
Key Provisions:
• Financial assistance of up to 80%-90% subsidy for SC/ST farmers and up to 50% for general farmers for constructing polythene-lined farm ponds (Krishi Honda).
• Subsidy support for diesel and solar powered pumpsets to lift water during critical crop growth stages.
• Micro-irrigation packages (drip and sprinkler systems) bundled for maximum water-use efficiency.

Eligible farmers can apply through their nearest Raitha Samparka Kendra (RSK) or via the Karnataka Raitha Portal (K-Kisan).`,
    contentKn: `ಕರ್ನಾಟಕದ ಮಳೆಯಾಶ್ರಿತ ಪ್ರದೇಶಗಳ ರೈತರಿಗೆ ಮಳೆನೀರು ಕೊಯ್ಲು ಮತ್ತು ರಕ್ಷಣಾತ್ಮಕ ನೀರಾವರಿ ಕಲ್ಪಿಸಲು ಕೃಷಿ ಭಾಗ್ಯ ಯೋಜನೆಯು ಮುಂದುವರಿದಿದೆ.

ಮುಖ್ಯ ಸೌಲಭ್ಯಗಳು:
• ಪರಿಶಿಷ್ಟ ಜಾತಿ ಮತ್ತು ಪರಿಶಿಷ್ಟ ಪಂಗಡದ ರೈತರಿಗೆ ಶೇ. ೮೦ ರಿಂದ ೯೦ ರವರೆಗೆ ಹಾಗೂ ಸಾಮಾನ್ಯ ವರ್ಗದ ರೈತರಿಗೆ ಶೇ. ೫೦ ರವರೆಗೆ ಕೃಷಿ ಹೊಂಡ ನಿರ್ಮಾಣಕ್ಕೆ ಸಹಾಯಧನ.
• ಬೆಳೆಯ ಸಂದಿಗ್ಧ ಹಂತದಲ್ಲಿ ನೀರಾವರಿ ಒದಗಿಸಲು ಡೀಸೆಲ್ ಅಥವಾ ಸೌರ ಪಂಪ್‌ಸೆಟ್‌ಗಳಿಗೆ ಆರ್ಥಿಕ ನೆರವು.
• ಹನಿ ನೀರಾವರಿ ಮತ್ತು ತುಂತುರು ನೀರಾವರಿ ಘಟಕಗಳ ಅಳವಡಿಕೆಗೆ ಹೆಚ್ಚುವರಿ ಸಬ್ಸಿಡಿ.

ಆಸಕ್ತ ರೈತರು ತಮ್ಮ ಹತ್ತಿರದ ರೈತ ಸಂಪರ್ಕ ಕೇಂದ್ರ (RSK) ಅಥವಾ ಕರ್ನಾಟಕ ರೈತ ಪೋರ್ಟಲ್ ಮೂಲಕ ಅರ್ಜಿ ಸಲ್ಲಿಸಬಹುದು.`,
    tags: ['krishi bhagya', 'subsidy', 'farm pond', 'irrigation', 'ಕೃಷಿ ಭಾಗ್ಯ', 'ಹೊಂಡ', 'ನೀರಾವರಿ'],
    officialUrl: 'https://raitamitra.karnataka.gov.in',
  },
  {
    id: 'kharif-harvesting-rabi-advisory',
    titleEn: 'Seasonal Crop Advisory: Post-Monsoon Harvesting & Rabi Sowing Guidelines',
    titleKn: 'ಋತುಮಾನ ಬೆಳೆ ಸಲಹೆ: ಮುಂಗಾರು ಕೊಯ್ಲು ಮತ್ತು ಹಿಂಗಾರು ಬಿತ್ತನೆ ಮಾರ್ಗಸೂಚಿಗಳು',
    category: 'advisory',
    categoryLabelEn: 'Crop Advisory',
    categoryLabelKn: 'ಬೆಳೆ ಸಲಹೆಗಳು',
    date: 'October 08, 2026',
    source: 'University of Agricultural Sciences (UAS), Bengaluru & Dharwad',
    summaryEn: 'Agricultural scientists issue crucial advisories for drying harvested paddy and maize, along with optimal soil-moisture preparation for Rabi pulses like Bengal gram and sorghum.',
    summaryKn: 'ಕೃಷಿ ವಿಜ್ಞಾನಿಗಳು ಮುಂಗಾರು ಭತ್ತ ಮತ್ತು ಮೆಕ್ಕೆಜೋಳದ ಕೊಯ್ಲು ನಂತರದ ಧಾನ್ಯ ಸಂರಕ್ಷಣೆ ಹಾಗೂ ಕಡಲೆ, ಜೋಳ ಬಿತ್ತನೆಗೆ ಸೂಕ್ತ ಮಣ್ಣಿನ ತೇವಾಂಶ ನಿರ್ವಹಣೆಯ ಮಾರ್ಗಸೂಚಿಗಳನ್ನು ಬಿಡುಗಡೆ ಮಾಡಿದ್ದಾರೆ.',
    contentEn: `With post-monsoon showers moderating across south and north interior Karnataka, farm universities have issued specific guidance:

• Paddy & Maize: Ensure moisture content is brought down to below 12% before storage to prevent aflatoxin and fungal spoilage.
• Bengal Gram (Chana) Sowing: Ideal sowing window is between October 15 and November 10. Seed treatment with Trichoderma viride (4g/kg) and Rhizobium culture is recommended to prevent wilt disease.
• Soil Moisture: Deep plowing with disc harrow or rotavator immediately following harvest helps conserve residual subsoil moisture for rainfed Rabi crops.`,
    contentKn: `ಹಿಂಗಾರು ಆರಂಭದ ಹಿನ್ನೆಲೆಯಲ್ಲಿ ಕೃಷಿ ವಿಶ್ವವಿದ್ಯಾಲಯಗಳು ರೈತರಿಗೆ ಈ ಕೆಳಗಿನ ಪ್ರಮುಖ ಸಲಹೆಗಳನ್ನು ನೀಡಿವೆ:

• ಭತ್ತ ಮತ್ತು ಮೆಕ್ಕೆಜೋಳ: ಕಣಜದಲ್ಲಿ ಶೇಖರಿಸುವ ಮುನ್ನ ಧಾನ್ಯದಲ್ಲಿ ತೇವಾಂಶ ಶೇ. ೧೨ ಕ್ಕಿಂತ ಕಡಿಮೆ ಇರುವಂತೆ ಚೆನ್ನಾಗಿ ಒಣಗಿಸಿ ಶಿಲೀಂಧ್ರ ಬಾಧೆ ತಡೆಯಿರಿ.
• ಕಡಲೆ ಬಿತ್ತನೆ: ಅಕ್ಟೋಬರ್ ೧೫ ರಿಂದ ನವೆಂಬರ್ ೧೦ ರವರೆಗೆ ಕಡಲೆ ಬಿತ್ತನೆಗೆ ಅತ್ಯಂತ ಸೂಕ್ತ ಸಮಯ. ಸೊರಗು ರೋಗ ತಡೆಗಟ್ಟಲು ಬೀಜೋಪಚಾರಕ್ಕಾಗಿ ಟ್ರೈಕೋಡರ್ಮಾ (೪ ಗ್ರಾಂ/ಕೆಜಿ) ಬಳಸಿ.
• ಮಣ್ಣಿನ ತೇವಾಂಶ: ಮುಂಗಾರು ಬೆಳೆ ಕೊಯ್ಲಿನ ನಂತರ ಕೂಡಲೇ ರೋಟಾವೇಟರ್ ಬಳಸಿ ಉಳುಮೆ ಮಾಡುವುದರಿಂದ ಭೂಮಿಯಲ್ಲಿ ಉಳಿದ ತೇವಾಂಶ ಸಂರಕ್ಷಣೆಯಾಗುತ್ತದೆ.`,
    tags: ['crop advisory', 'rabi', 'paddy', 'bengal gram', 'harvest', 'ಬೆಳೆ ಸಲಹೆ', 'ಹಿಂಗಾರು', 'ಕಡಲೆ'],
  },
  {
    id: 'certified-seeds-fertilizer-distribution',
    titleEn: 'KSSCA Certified Rabi Seeds & Balanced Fertilizer Stock at RSKs',
    titleKn: 'ರೈತ ಸಂಪರ್ಕ ಕೇಂದ್ರಗಳಲ್ಲಿ KSSCA ಪ್ರಮಾಣೀಕೃತ ಹಿಂಗಾರು ಬೀಜ ಹಾಗೂ ರಸಗೊಬ್ಬರ ಲಭ್ಯತೆ',
    category: 'inputs',
    categoryLabelEn: 'Agri Inputs',
    categoryLabelKn: 'ಕೃಷಿ ಇನ್ಪುಟ್‌ಗಳು',
    date: 'October 05, 2026',
    source: 'Karnataka State Seed Corporation (KSSC)',
    summaryEn: 'High-yielding certified seed varieties of chickpea (JAKI 9218, JG 11), ragi (GPU 28, ML 365), and bio-fertilizers are now stocked at subsidized rates across all district RSKs.',
    summaryKn: 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಬೀಜ ನಿಗಮದಿಂದ ಪ್ರಮಾಣೀಕೃತ ಕಡಲೆ (JAKI 9218, JG 11) ಮತ್ತು ರಾಗಿ ಬೀಜಗಳು ರಿಯಾಯಿತಿ ದರದಲ್ಲಿ ಎಲ್ಲಾ ತಾಲೂಕು ರೈತ ಸಂಪರ್ಕ ಕೇಂದ್ರಗಳಲ್ಲಿ ದಾಸ್ತಾನು ಲಭ್ಯವಿದೆ.',
    contentEn: `The Karnataka State Seed Corporation has mobilized certified seed stocks across all 740+ Raitha Samparka Kendras:

Available Seed Stocks:
• Bengal Gram: JAKI 9218, JG 11, BGD 103 (drought-tolerant, wilt-resistant).
• Ragi: GPU 28, ML 365, KMR 301.
• Wheat & Sunflower: Recommended hybrids for northern Karnataka black-soil belts.

Subsidy Details:
• Up to 50% seed subsidy under National Food Security Mission (NFSM) for eligible small and marginal farmers.
• Nano Urea and Nano DAP bottles are readily available alongside conventional fertilizer allocations at primary agricultural cooperative societies (PACS).`,
    contentKn: `ಕರ್ನಾಟಕ ರಾಜ್ಯ ಬೀಜ ನಿಗಮವು ರಾಜ್ಯದ ೭೪೦ಕ್ಕೂ ಹೆಚ್ಚು ರೈತ ಸಂಪರ್ಕ ಕೇಂದ್ರಗಳಲ್ಲಿ ಪ್ರಮಾಣೀಕೃತ ಬೀಜಗಳನ್ನು ದಾಸ್ತಾನು ಮಾಡಿದೆ:

ಲಭ್ಯವಿರುವ ಬೀಜ ತಳಿಗಳು:
• ಕಡಲೆ: JAKI 9218, JG 11, BGD 103 (ಬರ ನಿರೋಧಕ ಮತ್ತು ಅಧಿಕ ಇಳುವರಿ ತಳಿಗಳು).
• ರಾಗಿ: ಜಿಪಿಯು ೨೮, ಎಂಎಲ್ ೩೬೫, ಕೆಎಂಆರ್ ೩೦೧.
• ಗೋಧಿ ಮತ್ತು ಸೂರ್ಯಕಾಂತಿ: ಉತ್ತರ ಕರ್ನಾಟಕದ ಕಪ್ಪು ಮಣ್ಣಿಗೆ ಸೂಕ್ತ ತಳಿಗಳು.

ಸಹಾಯಧನ ವಿವರ:
• ರಾಷ್ಟ್ರೀಯ ಆಹಾರ ಭದ್ರತಾ ಅಭಿಯಾನದಡಿ (NFSM) ಸಣ್ಣ ಮತ್ತು ಅತಿ ಸಣ್ಣ ರೈತರಿಗೆ ಶೇ. ೫೦ ರವರೆಗೆ ರಿಯಾಯಿತಿ ದರ.
• ಪ್ರಾಥಮಿಕ ಕೃಷಿ ಪತ್ತಿನ ಸಹಕಾರ ಸಂಘಗಳಲ್ಲಿ (PACS) ನ್ಯಾನೋ ಯೂರಿಯಾ ಮತ್ತು ನ್ಯಾನೋ ಡಿಎಪಿ ಪೂರೈಕೆ ಲಭ್ಯವಿದೆ.`,
    tags: ['seeds', 'fertilizer', 'rsk', 'kssc', 'ಬೀಜಗಳು', 'ರಸಗೊಬ್ಬರ', 'ಆರ್‌ಎಸ್‌ಕೆ'],
    officialUrl: 'https://kssca.karnataka.gov.in',
  },
  {
    id: 'krishi-yantra-dhare-custom-hiring',
    titleEn: 'Krishi Yantra Dhare: Subsidized Farm Machinery Rental for Sowing Season',
    titleKn: 'ಕೃಷಿ ಯಂತ್ರ ಧಾರೆ: ಬಿತ್ತನೆ ಕಾಲಕ್ಕೆ ರಿಯಾಯಿತಿ ದರದ ಬಾಡಿಗೆ ಯಂತ್ರೋಪಕರಣ ಸೇವೆ',
    category: 'equipment',
    categoryLabelEn: 'Equipment & Services',
    categoryLabelKn: 'ಯಂತ್ರೋಪಕರಣ ಸೇವೆಗಳು',
    date: 'September 28, 2026',
    source: 'Custom Hiring Centres (CHC) Directorate, Karnataka',
    summaryEn: 'Over 850 Custom Hiring Centres across Karnataka are equipped with laser land levellers, seed-cum-fertilizer drills, and 4WD tractors available at regulated hourly rental tariffs.',
    summaryKn: 'ಕರ್ನಾಟಕದ ೮೫೦ಕ್ಕೂ ಹೆಚ್ಚು ಕೃಷಿ ಯಂತ್ರ ಧಾರೆ ಕೇಂದ್ರಗಳಲ್ಲಿ ಲೇಸರ್ ಲೆವೆಲರ್, ಬೀಜ ಮತ್ತು ಗೊಬ್ಬರ ಕೂರಿಗೆ ಯಂತ್ರಗಳು ಹಾಗೂ ಟ್ರ್ಯಾಕ್ಟರ್‌ಗಳು ರಿಯಾಯಿತಿ ಬಾಡಿಗೆ ದರದಲ್ಲಿ ರೈತರಿಗೆ ಲಭ್ಯವಿದೆ.',
    contentEn: `Small and marginal farmers who cannot invest in heavy mechanization can access advanced farm equipment through government-partnered Custom Hiring Service Centres (Krishi Yantra Dhare):

Available Machinery:
• Seed-cum-Fertilizer Drills (ಕೂರಿಗೆ): Ensures accurate seed spacing and fertilizer placement, reducing seed wastage by 25%.
• Laser Land Levellers: Saves up to 20% irrigation water by establishing flat seedbeds.
• Tractors & Rotavators: 45HP-55HP tractors with reversible mouldboard plows.

Rental tariffs are fixed 30-40% below open market rates. Bookings can be made directly at the local hobli CHC or mapped through the upcoming RaithaSetu machinery integration module.`,
    contentKn: `ದುಬಾರಿ ಕೃಷಿ ಯಂತ್ರೋಪಕರಣಗಳನ್ನು ಖರೀದಿಸಲು ಸಾಧ್ಯವಾಗದ ಸಣ್ಣ ಮತ್ತು ಅತಿ ಸಣ್ಣ ರೈತರಿಗೆ ಕೃಷಿ ಯಂತ್ರ ಧಾರೆ ಕೇಂದ್ರಗಳ ಮೂಲಕ ಸೇವೆ ಒದಗಿಸಲಾಗುತ್ತಿದೆ:

ಲಭ್ಯವಿರುವ ಉಪಕರಣಗಳು:
• ಬೀಜ-ಗೊಬ್ಬರ ಕೂರಿಗೆ ಯಂತ್ರ: ಸಮಪ್ರಮಾಣದಲ್ಲಿ ಬೀಜ ಮತ್ತು ರಸಗೊಬ್ಬರ ಬಿತ್ತನೆಗೆ ನೆರವಾಗುತ್ತದೆ.
• ಲೇಸರ್ ಲೆವೆಲರ್: ಭೂಮಿಯನ್ನು ಸಮತಟ್ಟು ಮಾಡಿ ನೀರಾವರಿ ನೀರಿನ ಪೋಲಾಗುವಿಕೆಯನ್ನು ಶೇ. ೨೦ ರಷ್ಟು ಉಳಿಸುತ್ತದೆ.
• ಟ್ರ್ಯಾಕ್ಟರ್ ಮತ್ತು ರೋಟಾವೇಟರ್: ಆಳವಾದ ಉಳುಮೆಗಾಗಿ ೪೫-೫೫ ಹೆಚ್‌ಪಿ ಟ್ರ್ಯಾಕ್ಟರ್‌ಗಳು.

ಬಾಡಿಗೆ ದರಗಳು ಮಾರುಕಟ್ಟೆ ದರಕ್ಕಿಂತ ಶೇ. ೩೦ ರಿಂದ ೪೦ ರಷ್ಟು ಕಡಿಮೆಯಾಗಿರುತ್ತವೆ. ರೈತರು ತಮ್ಮ ಹೋಬಳಿ ಕೇಂದ್ರಗಳಲ್ಲಿ ಮುಂಗಡವಾಗಿ ಬುಕ್ ಮಾಡಿಕೊಳ್ಳಬಹುದು.`,
    tags: ['custom hiring', 'tractor rental', 'krishi yantra dhare', 'equipment', 'ಯಂತ್ರ ಧಾರೆ', 'ಬಾಡಿಗೆ ಟ್ರ್ಯಾಕ್ಟರ್'],
  },
  {
    id: 'raithasetu-machinery-owner-onboarding',
    titleEn: 'RaithaSetu Platform: Verified Tractor & Implement Owners Network Expands',
    titleKn: 'ರೈತಸೇತು ವೇದಿಕೆ: ಪರಿಶೀಲಿತ ಟ್ರ್ಯಾಕ್ಟರ್ ಮತ್ತು ಉಪಕರಣ ಮಾಲೀಕರ ಜಾಲ ವಿಸ್ತರಣೆ',
    category: 'platform',
    categoryLabelEn: 'Platform Updates',
    categoryLabelKn: 'ರೈತಸೇತು ಅಪ್ಡೇಟ್ಸ್',
    date: 'September 22, 2026',
    source: 'RaithaSetu Digital Infrastructure Team',
    summaryEn: 'RaithaSetu completes onboarding pilot of 1,200 village-level tractor owners across Belagavi, Mysuru, and Davanagere to provide peer-to-peer machinery access for smallholders.',
    summaryKn: 'ಬೆಳಗಾವಿ, ಮೈಸೂರು ಮತ್ತು ದಾವಣಗೆರೆ ಜಿಲ್ಲೆಗಳಲ್ಲಿ ೧,೨೦೦ಕ್ಕೂ ಹೆಚ್ಚು ಹಳ್ಳಿ ಮಟ್ಟದ ಟ್ರ್ಯಾಕ್ಟರ್ ಮಾಲೀಕರನ್ನು ರೈತಸೇತು ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ಯಶಸ್ವಿಯಾಗಿ ನೋಂದಾಯಿಸಲಾಗಿದೆ.',
    contentEn: `RaithaSetu is accelerating its mission to eliminate rural equipment shortages and excessive machinery loan burdens through synchronized digital sharing.

Pilot Highlights:
• Transparent hourly equipment booking between neighboring village farmers.
• Direct connection with zero middleman commissions for tractor and harvester operators.
• Local Kannada audio-guidance integration for smooth booking workflows.
• Expansion into Mandya, Tumakuru, and Hassan planned for next phase.`,
    contentKn: `ಗ್ರಾಮೀಣ ಭಾಗದಲ್ಲಿ ದುಬಾರಿ ಯಂತ್ರಗಳ ಸಾಲದ ಹೊರೆಯನ್ನು ಕಡಿಮೆ ಮಾಡಲು ರೈತಸೇತು ಡಿಜಿಟಲ್ ಸಂಪರ್ಕ ವೇದಿಕೆಯನ್ನು ಬಲಪಡಿಸುತ್ತಿದೆ.

ಪ್ರಮುಖ ಪ್ರಗತಿ:
• ಹತ್ತಿರದ ಗ್ರಾಮಗಳ ರೈತರ ನಡುವೆ ಪಾರದರ್ಶಕ ಗಂಟೆವಾರು ಯಂತ್ರೋಪಕರಣ ಬಾಡಿಗೆ ಸೌಲಭ್ಯ.
• ಟ್ರ್ಯಾಕ್ಟರ್ ಮತ್ತು ಕೊಯ್ಲು ಯಂತ್ರ ಮಾಲೀಕರೊಂದಿಗೆ ಯಾವುದೇ ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲದೆ ನೇರ ಸಂಪರ್ಕ.
• ಕನ್ನಡ ಧ್ವನಿ ಮಾರ್ಗದರ್ಶನ ಸೌಲಭ್ಯದೊಂದಿಗೆ ಸರಳ ಮೊಬೈಲ್ ಪ್ರವೇಶ.
• ಮುಂದಿನ ಹಂತದಲ್ಲಿ ಮಂಡ್ಯ, ತುಮಕೂರು ಮತ್ತು ಹಾಸನ ಜಿಲ್ಲೆಗಳಿಗೆ ವಿಸ್ತರಣೆ.`,
    tags: ['raithasetu', 'app', 'tractor sharing', 'platform', 'ರೈತಸೇತು', 'ಅಪ್ಲಿಕೇಶನ್'],
  },
  {
    id: 'pm-kisan-karnataka-raitha-siri',
    titleEn: 'PM-KISAN & State Raitha Siri Direct Benefit Transfer Verification',
    titleKn: 'ಪಿಎಂ-ಕಿಸಾನ್ ಮತ್ತು ರಾಜ್ಯ ರೈತ ಸಿರಿ ನೇರ ನಗದು ವರ್ಗಾವಣೆ ಪರಿಶೀಲನೆ',
    category: 'schemes',
    categoryLabelEn: 'Government Schemes',
    categoryLabelKn: 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು',
    date: 'September 15, 2026',
    source: 'Department of Agriculture & FRUITS Portal',
    summaryEn: 'Farmers are advised to complete e-KYC and land seeding on the FRUITS Karnataka database to ensure uninterrupted DBT credit of farmer support installments.',
    summaryKn: 'ರೈತರು ತಮ್ಮ FRUITS ಐಡಿ ಜೊತೆಗೆ ಆಧಾರ್ ಇ-ಕೆವೈಸಿ ಮತ್ತು ಬ್ಯಾಂಕ್ ಖಾತೆ ಲಿಂಕ್ ಮಾಡಿಕೊಳ್ಳುವ ಮೂಲಕ ಧನಸಹಾಯದ ಕಂತುಗಳನ್ನು ನೇರವಾಗಿ ಪಡೆಯಲು ಸೂಚಿಸಲಾಗಿದೆ.',
    contentEn: `To ensure seamless disbursement of direct farmer assistance under PM-KISAN and Karnataka millet promotion schemes (Raitha Siri):

Mandatory Steps:
1. Verify FID (Farmer Identification Number) on the Karnataka FRUITS portal (fruits.karnataka.gov.in).
2. Complete Aadhaar e-KYC through the PM-KISAN portal or nearby Common Service Centre (CSC / Grama One).
3. Ensure active NPCI bank account mapping to avoid DBT transaction failures.`,
    contentKn: `ಪಿಎಂ-ಕಿಸಾನ್ ಮತ್ತು ಸಿರಿಧಾನ್ಯ ಉತ್ತೇಜನದ ರೈತ ಸಿರಿ ಯೋಜನೆಯ ಆರ್ಥಿಕ ನೆರವು ಪಡೆಯಲು ರೈತರು ಈ ಕೆಳಗಿನ ಕ್ರಮ ಕೈಗೊಳ್ಳಬೇಕು:

ಅಗತ್ಯ ಕ್ರಮಗಳು:
೧. ಕರ್ನಾಟಕ ಫ್ರೂಟ್ಸ್ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ (FRUITS ID) ತಮ್ಮ ಭೂಮಿ ವಿವರಗಳು ಸರಿಯಾಗಿರುವುದನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.
೨. ಗ್ರಾಮ ಒನ್ ಅಥವಾ ಸಿಎಸ್‌ಸಿ ಕೇಂದ್ರಗಳಲ್ಲಿ ಆಧಾರ್ ಇ-ಕೆವೈಸಿ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ.
೩. ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಎನ್‌ಪಿಸಿಐ (NPCI) ಮ್ಯಾಪಿಂಗ್ ಸಕ್ರಿಯವಾಗಿರುವುದನ್ನು ಬ್ಯಾಂಕಿನಲ್ಲಿ ದೃಢಪಡಿಸಿಕೊಳ್ಳಿ.`,
    tags: ['pm kisan', 'raitha siri', 'dbt', 'fruits', 'ಪಿಎಂ ಕಿಸಾನ್', 'ರೈತ ಸಿರಿ', 'ಫ್ರೂಟ್ಸ್'],
    officialUrl: 'https://fruits.karnataka.gov.in',
  },
];
