import React, { useRef, useState, useEffect, useCallback } from 'react';
import { KarnatakaMapSilhouette } from '../common/KarnatakaMapSilhouette';
import { Users, Cog, Tractor, Sprout, Handshake } from 'lucide-react';

export const EcosystemSection: React.FC = () => {
  // Container & Card Refs for dynamic connector lines
  const containerRef = useRef<HTMLDivElement>(null);
  const farmersRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const equipmentRef = useRef<HTMLDivElement>(null);
  const supplierRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  interface ConnectorCoords {
    farmersToCenter: { startX: number; startY: number; endX: number; endY: number } | null;
    serviceToCenter: { startX: number; startY: number; endX: number; endY: number } | null;
    equipmentToCenter: { startX: number; startY: number; endX: number; endY: number } | null;
    supplierToCenter: { startX: number; startY: number; endX: number; endY: number } | null;
    partnersToCenter: { startX: number; startY: number; endX: number; endY: number } | null;
  }

  const [coords, setCoords] = useState<ConnectorCoords>({
    farmersToCenter: null,
    serviceToCenter: null,
    equipmentToCenter: null,
    supplierToCenter: null,
    partnersToCenter: null,
  });

  const updateConnectorPositions = useCallback(() => {
    if (
      !containerRef.current ||
      !farmersRef.current ||
      !serviceRef.current ||
      !equipmentRef.current ||
      !supplierRef.current ||
      !partnersRef.current ||
      !centerRef.current
    ) {
      return;
    }

    const cRect = containerRef.current.getBoundingClientRect();
    const fRect = farmersRef.current.getBoundingClientRect();
    const sRect = serviceRef.current.getBoundingClientRect();
    const eRect = equipmentRef.current.getBoundingClientRect();
    const supRect = supplierRef.current.getBoundingClientRect();
    const pRect = partnersRef.current.getBoundingClientRect();
    const centerRect = centerRef.current.getBoundingClientRect();

    setCoords({
      // Farmers: right-center of card -> upper-left of center hub
      farmersToCenter: {
        startX: fRect.right - cRect.left,
        startY: fRect.top + fRect.height / 2 - cRect.top,
        endX: centerRect.left - cRect.left,
        endY: centerRect.top + centerRect.height * 0.35 - cRect.top,
      },
      // Service Providers: right-center of card -> lower-left of center hub
      serviceToCenter: {
        startX: sRect.right - cRect.left,
        startY: sRect.top + sRect.height / 2 - cRect.top,
        endX: centerRect.left - cRect.left,
        endY: centerRect.top + centerRect.height * 0.65 - cRect.top,
      },
      // Equipment Owners: left-center of card -> upper-right of center hub
      equipmentToCenter: {
        startX: eRect.left - cRect.left,
        startY: eRect.top + eRect.height / 2 - cRect.top,
        endX: centerRect.right - cRect.left,
        endY: centerRect.top + centerRect.height * 0.35 - cRect.top,
      },
      // Suppliers: left-center of card -> lower-right of center hub
      supplierToCenter: {
        startX: supRect.left - cRect.left,
        startY: supRect.top + supRect.height / 2 - cRect.top,
        endX: centerRect.right - cRect.left,
        endY: centerRect.top + centerRect.height * 0.65 - cRect.top,
      },
      // Partners: top-center of card -> bottom-center of center hub
      partnersToCenter: {
        startX: pRect.left + pRect.width / 2 - cRect.left,
        startY: pRect.top - cRect.top,
        endX: centerRect.left + centerRect.width / 2 - cRect.left,
        endY: centerRect.bottom - cRect.top,
      },
    });
  }, []);

  useEffect(() => {
    updateConnectorPositions();
    window.addEventListener('resize', updateConnectorPositions);
    const timer1 = setTimeout(updateConnectorPositions, 100);
    const timer2 = setTimeout(updateConnectorPositions, 400);

    return () => {
      window.removeEventListener('resize', updateConnectorPositions);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [updateConnectorPositions]);

  // Helper to generate smooth curved 90-degree bezier connector paths
  const generateCurvedPath = (
    sx: number,
    sy: number,
    ex: number,
    ey: number,
    direction: 'left-to-right' | 'right-to-left'
  ) => {
    const r = 16;
    const midX = sx + (ex - sx) * 0.5;

    if (direction === 'left-to-right') {
      if (sy < ey) {
        return `M ${sx} ${sy} L ${midX - r} ${sy} Q ${midX} ${sy} ${midX} ${sy + r} L ${midX} ${ey - r} Q ${midX} ${ey} ${midX + r} ${ey} L ${ex} ${ey}`;
      } else {
        return `M ${sx} ${sy} L ${midX - r} ${sy} Q ${midX} ${sy} ${midX} ${sy - r} L ${midX} ${ey + r} Q ${midX} ${ey} ${midX + r} ${ey} L ${ex} ${ey}`;
      }
    } else {
      if (sy < ey) {
        return `M ${sx} ${sy} L ${midX + r} ${sy} Q ${midX} ${sy} ${midX} ${sy + r} L ${midX} ${ey - r} Q ${midX} ${ey} ${midX - r} ${ey} L ${ex} ${ey}`;
      } else {
        return `M ${sx} ${sy} L ${midX + r} ${sy} Q ${midX} ${sy} ${midX} ${sy - r} L ${midX} ${ey + r} Q ${midX} ${ey} ${midX - r} ${ey} L ${ex} ${ey}`;
      }
    }
  };

  return (
    <section
      id="ecosystem"
      className="relative bg-[#FFFDF5] text-[#173C2E] pt-7 sm:pt-9 lg:pt-10 pb-14 sm:pb-16 lg:pb-18 overflow-hidden select-none"
    >
      {/* ========================================================================= */}
      {/* 1. TOP AGRICULTURAL LANDSCAPE BACKDROP (Palms, Hills, Oxen & Tractor)      */}
      {/* ========================================================================= */}
      <div className="absolute top-0 left-0 right-0 h-[400px] sm:h-[460px] lg:h-[500px] pointer-events-none select-none overflow-hidden z-0">
        {/* Authentic rural Karnataka landscape illustration */}
        <img
          src="/images/vision_top_bg.jpg"
          alt="Karnataka agricultural panorama"
          className="w-full h-full object-cover object-top opacity-85 sm:opacity-90 mix-blend-multiply"
        />

        {/* Faint Karnataka State Map Silhouette on Upper-Right */}
        <div className="absolute top-4 sm:top-6 right-4 sm:right-12 lg:right-24 w-36 sm:w-48 lg:w-56 pointer-events-none select-none opacity-20">
          <KarnatakaMapSilhouette
            className="w-full h-full"
            fillColor="transparent"
            strokeColor="#B5A162"
          />
        </div>

        {/* Soft Radial Cream Mask to guarantee text contrast */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 65% 65% at 50% 25%, rgba(255, 253, 245, 0.96) 0%, rgba(255, 253, 245, 0.82) 48%, rgba(255, 253, 245, 0.15) 88%)',
          }}
        />

        {/* Bottom fade into solid #FFFDF5 */}
        <div
          className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, #FFFDF5 100%)',
          }}
        />
      </div>

      {/* ========================================================================= */}
      {/* 2. SUBTLE DECORATIVE HERITAGE ARTWORK (Behind container, zero extra height)*/}
      {/* ========================================================================= */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none select-none z-0 overflow-hidden flex justify-center items-end opacity-20 mix-blend-multiply max-h-[190px] sm:max-h-[220px]">
        <img
          src="/images/vision_bottom_heritage.jpg"
          alt=""
          aria-hidden="true"
          className="w-full max-w-[1360px] h-full object-contain object-bottom"
        />
      </div>

      {/* ========================================================================= */}
      {/* 3. MAIN SECTION CONTENT CONTAINER                                         */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-7">
        
        {/* ----------------------------------------------------------------------- */}
        {/* HERO INTRODUCTION (Compact & Focused)                                   */}
        {/* ----------------------------------------------------------------------- */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-2.5 pt-1">
          {/* Small Rounded Pale-Green Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF6ED] border border-[#087A3D]/25 text-[#087A3D] text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-2xs">
            <span>RESOURCE INTEGRATION</span>
            <span className="text-[#88A690]">•</span>
            <span className="font-kannada font-bold text-xs sm:text-[13px]">ಸಂಪನ್ಮೂಲಗಳ ಸಂಪರ್ಕ</span>
          </div>

          {/* Main Bilingual Headings */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-black text-[#075C38] tracking-tight leading-[1.15]">
              A Connected Agricultural Ecosystem
            </h2>
            <p className="text-xl sm:text-2xl lg:text-[30px] font-black text-[#075C38] font-kannada leading-snug mt-1">
              ಸಂಪರ್ಕಿತ ಕೃಷಿ ಪರಿಸರ
            </p>
          </div>

          {/* Bilingual Descriptions */}
          <div className="space-y-0.5 text-xs sm:text-sm font-medium max-w-2xl mx-auto pt-0.5">
            <p className="text-[#4A6253]">
              RaithaSetu serves as the coordinating bridge uniting all stakeholders in rural agriculture.
            </p>
            <p className="font-kannada text-[#2B4738] text-[12.5px] sm:text-[13.5px]">
              ರೈತರು, ಯಂತ್ರೋಪಕರಣಗಳ ಮಾಲೀಕರು, ಸೇವಾದಾರರು ಮತ್ತು ಕೃಷಿ ಪೂರೈಕೆದಾರರನ್ನು ಒಂದೇ ಸಂಪರ್ಕಿತ ವೇದಿಕೆಯಲ್ಲಿ ಒಗ್ಗೂಡಿಸುವುದು ರೈತಸೇತುವಿನ ಉದ್ದೇಶ.
            </p>
          </div>
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* MAIN ECOSYSTEM DIAGRAM CONTAINER                                        */}
        {/* ----------------------------------------------------------------------- */}
        <div
          ref={containerRef}
          className="relative rounded-[24px] sm:rounded-[28px] p-4 sm:p-6 lg:p-7 border border-[#D6E8DB] bg-white/75 backdrop-blur-xs shadow-[0_8px_28px_rgba(8,122,61,0.05)]"
        >
          {/* ===================================================================== */}
          {/* SVG CONNECTOR LINES LAYER (Active on Desktop)                         */}
          {/* ===================================================================== */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 1. Farmers -> Center Hub */}
            {coords.farmersToCenter && (
              <g>
                <path
                  d={generateCurvedPath(
                    coords.farmersToCenter.startX,
                    coords.farmersToCenter.startY,
                    coords.farmersToCenter.endX,
                    coords.farmersToCenter.endY,
                    'left-to-right'
                  )}
                  stroke="#087A3D"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Gold Connection Node at Card Edge */}
                <circle
                  cx={coords.farmersToCenter.startX}
                  cy={coords.farmersToCenter.startY}
                  r="5"
                  fill="#E7B93E"
                  stroke="#087A3D"
                  strokeWidth="2"
                />
              </g>
            )}

            {/* 2. Service Providers -> Center Hub */}
            {coords.serviceToCenter && (
              <g>
                <path
                  d={generateCurvedPath(
                    coords.serviceToCenter.startX,
                    coords.serviceToCenter.startY,
                    coords.serviceToCenter.endX,
                    coords.serviceToCenter.endY,
                    'left-to-right'
                  )}
                  stroke="#087A3D"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Gold Connection Node at Card Edge */}
                <circle
                  cx={coords.serviceToCenter.startX}
                  cy={coords.serviceToCenter.startY}
                  r="5"
                  fill="#E7B93E"
                  stroke="#087A3D"
                  strokeWidth="2"
                />
              </g>
            )}

            {/* 3. Equipment Owners -> Center Hub */}
            {coords.equipmentToCenter && (
              <g>
                <path
                  d={generateCurvedPath(
                    coords.equipmentToCenter.startX,
                    coords.equipmentToCenter.startY,
                    coords.equipmentToCenter.endX,
                    coords.equipmentToCenter.endY,
                    'right-to-left'
                  )}
                  stroke="#087A3D"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Gold Connection Node at Card Edge */}
                <circle
                  cx={coords.equipmentToCenter.startX}
                  cy={coords.equipmentToCenter.startY}
                  r="5"
                  fill="#E7B93E"
                  stroke="#087A3D"
                  strokeWidth="2"
                />
              </g>
            )}

            {/* 4. Agricultural Suppliers -> Center Hub */}
            {coords.supplierToCenter && (
              <g>
                <path
                  d={generateCurvedPath(
                    coords.supplierToCenter.startX,
                    coords.supplierToCenter.startY,
                    coords.supplierToCenter.endX,
                    coords.supplierToCenter.endY,
                    'right-to-left'
                  )}
                  stroke="#087A3D"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Gold Connection Node at Card Edge */}
                <circle
                  cx={coords.supplierToCenter.startX}
                  cy={coords.supplierToCenter.startY}
                  r="5"
                  fill="#E7B93E"
                  stroke="#087A3D"
                  strokeWidth="2"
                />
              </g>
            )}

            {/* 5. Partners -> Center Hub (Vertical) */}
            {coords.partnersToCenter && (
              <g>
                <line
                  x1={coords.partnersToCenter.startX}
                  y1={coords.partnersToCenter.startY}
                  x2={coords.partnersToCenter.endX}
                  y2={coords.partnersToCenter.endY}
                  stroke="#087A3D"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* Gold Connection Node at Partners Card Edge */}
                <circle
                  cx={coords.partnersToCenter.startX}
                  cy={coords.partnersToCenter.startY}
                  r="5"
                  fill="#E7B93E"
                  stroke="#087A3D"
                  strokeWidth="2"
                />
                {/* Gold Connection Node at Center Hub Edge */}
                <circle
                  cx={coords.partnersToCenter.endX}
                  cy={coords.partnersToCenter.endY}
                  r="5"
                  fill="#E7B93E"
                  stroke="#087A3D"
                  strokeWidth="2"
                />
              </g>
            )}
          </svg>

          {/* ===================================================================== */}
          {/* THREE-COLUMN ECOSYSTEM GRID LAYOUT                                    */}
          {/* ===================================================================== */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-center">
            
            {/* ------------------------------------------------------------------- */}
            {/* LEFT COLUMN: Farmers & Service Providers (4 Cols)                   */}
            {/* ------------------------------------------------------------------- */}
            <div className="lg:col-span-4 space-y-4 sm:space-y-5">
              
              {/* CARD 1 — FARMERS */}
              <div
                ref={farmersRef}
                className="relative rounded-[18px] sm:rounded-[20px] bg-white border border-[#DCECE0] shadow-[0_4px_16px_rgba(8,122,61,0.05)] p-3 sm:p-3.5 hover:shadow-[0_8px_24px_rgba(8,122,61,0.09)] hover:border-[#087A3D]/40 transition-all group flex items-center"
              >
                {/* Left Photograph */}
                <div className="w-[105px] h-[115px] sm:w-[115px] sm:h-[125px] rounded-[13px] overflow-hidden flex-shrink-0 bg-[#EAF6ED]">
                  <img
                    src="/images/ecosystem_farmer.jpg"
                    alt="Karnataka farmer holding paddy sheaves"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Right Content */}
                <div className="flex-1 pl-3 sm:pl-3.5 min-w-0">
                  {/* Icon */}
                  <div className="w-7 h-7 rounded-full bg-[#EAF6ED] border border-[#CDE5D2] flex items-center justify-center text-[#087A3D] mb-1 shadow-2xs">
                    <Users className="w-3.5 h-3.5 stroke-[2.2]" />
                  </div>

                  {/* Titles */}
                  <h3 className="text-base sm:text-lg font-black text-[#173C2E] leading-tight">
                    Farmers
                  </h3>
                  <p className="text-xs sm:text-[13px] font-bold text-[#087A3D] font-kannada leading-tight mt-0.5">
                    ರೈತರು
                  </p>

                  {/* Descriptions */}
                  <p className="text-[11px] sm:text-xs text-[#55695D] leading-snug mt-1">
                    Smallholders accessing machinery and quality inputs.
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-[#2B4738] font-kannada leading-snug mt-0.5">
                    ಕೃಷಿ ಯಂತ್ರೋಪಕರಣಗಳು ಮತ್ತು ಗುಣಮಟ್ಟದ ಇನ್ಪುಟ್ಗಳನ್ನು ಪಡೆಯುವ ಸಣ್ಣ ರೈತರು.
                  </p>
                </div>
              </div>

              {/* CARD 2 — SERVICE PROVIDERS */}
              <div
                ref={serviceRef}
                className="relative rounded-[18px] sm:rounded-[20px] bg-white border border-[#DCECE0] shadow-[0_4px_16px_rgba(8,122,61,0.05)] p-3 sm:p-3.5 hover:shadow-[0_8px_24px_rgba(8,122,61,0.09)] hover:border-[#087A3D]/40 transition-all group flex items-center"
              >
                {/* Left Photograph */}
                <div className="w-[105px] h-[115px] sm:w-[115px] sm:h-[125px] rounded-[13px] overflow-hidden flex-shrink-0 bg-[#EAF6ED]">
                  <img
                    src="/images/ecosystem_service_provider.jpg"
                    alt="Agricultural service provider and tractor operator"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Right Content */}
                <div className="flex-1 pl-3 sm:pl-3.5 min-w-0">
                  {/* Icon */}
                  <div className="w-7 h-7 rounded-full bg-[#EAF6ED] border border-[#CDE5D2] flex items-center justify-center text-[#087A3D] mb-1 shadow-2xs">
                    <Cog className="w-3.5 h-3.5 stroke-[2.2]" />
                  </div>

                  {/* Titles */}
                  <h3 className="text-base sm:text-lg font-black text-[#173C2E] leading-tight">
                    Service Providers
                  </h3>
                  <p className="text-xs sm:text-[13px] font-bold text-[#087A3D] font-kannada leading-tight mt-0.5">
                    ಸೇವಾ ಪೂರೈಕೆದಾರರು
                  </p>

                  {/* Descriptions */}
                  <p className="text-[11px] sm:text-xs text-[#55695D] leading-snug mt-1">
                    Local farm-service providers and transport operators.
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-[#2B4738] font-kannada leading-snug mt-0.5">
                    ಸ್ಥಳೀಯ ಕೃಷಿ ಸೇವಾ ಪೂರೈಕೆದಾರರು ಮತ್ತು ಸಾರಿಗೆ ನಿರ್ವಾಹಕರು.
                  </p>
                </div>
              </div>

            </div>

            {/* ------------------------------------------------------------------- */}
            {/* CENTER COLUMN: Central RaithaSetu Hub Card (4 Cols)                 */}
            {/* ------------------------------------------------------------------- */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center py-1 sm:py-2">
              
              <div
                ref={centerRef}
                className="w-full max-w-[320px] rounded-[22px] sm:rounded-[24px] bg-[#075C38] border border-[#0D6B42] shadow-[0_16px_36px_rgba(7,92,56,0.26)] p-5 sm:p-6 text-white text-center flex flex-col items-center justify-center relative overflow-hidden group"
              >
                {/* Background Subtle Gradient Glow */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-40"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 25%, rgba(75, 156, 67, 0.45) 0%, transparent 70%)',
                  }}
                />

                {/* Central Emblem Illustration: Sunrise, Green Sprout & Tractor */}
                <div className="relative z-10 w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-gradient-to-b from-[#0F7645] to-[#04331C] p-2 border border-[#1CA562]/35 shadow-inner flex items-center justify-center mb-2.5">
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    {/* Golden Morning Sunrise Half-Disk */}
                    <circle cx="50" cy="54" r="28" fill="url(#sun-grad-2)" />
                    
                    {/* Radiating Sun Rays */}
                    <path d="M50 20 L50 14" stroke="#FFD24C" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M28 32 L24 28" stroke="#FFD24C" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M72 32 L76 28" stroke="#FFD24C" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M18 52 L12 52" stroke="#FFD24C" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M82 52 L88 52" stroke="#FFD24C" strokeWidth="2.5" strokeLinecap="round" />

                    {/* Furrowed Field Base Curves */}
                    <path
                      d="M16 66 C28 58 42 62 50 64 C62 66 74 60 84 66 C80 82 20 82 16 66 Z"
                      fill="#1E7A43"
                    />
                    <path
                      d="M20 74 C34 68 64 68 80 74"
                      stroke="#145A32"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />

                    {/* Fresh Green Sprout Leaves */}
                    <path
                      d="M50 56 C44 44 32 40 28 30 C40 30 48 38 50 56 Z"
                      fill="#4ADE80"
                    />
                    <path
                      d="M50 56 C56 44 68 40 72 30 C60 30 52 38 50 56 Z"
                      fill="#22C55E"
                    />
                    <path
                      d="M50 56 C48 38 46 26 50 16 C54 26 52 38 50 56 Z"
                      fill="#86EFAC"
                    />
                    <path
                      d="M50 56 L50 64"
                      stroke="#15803D"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    {/* Tractor Silhouette in Field */}
                    <path
                      d="M62 68 H68 V64 H64 L62 68 Z M68 64 H72 V68 H74 V70 H60 V68 H62 Z"
                      fill="#052E1B"
                    />
                    <circle cx="63" cy="70" r="3" fill="#052E1B" />
                    <circle cx="71" cy="69" r="4" fill="#052E1B" />

                    {/* Definitions */}
                    <defs>
                      <linearGradient id="sun-grad-2" x1="50" y1="26" x2="50" y2="54" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#FFA028" />
                        <stop offset="100%" stopColor="#FF6B00" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Brand Name */}
                <h3 className="relative z-10 text-2xl sm:text-[26px] font-black tracking-tight text-white leading-tight">
                  RaithaSetu
                </h3>

                {/* Gold Uppercase Label */}
                <span className="relative z-10 text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#E7B93E] mt-0.5 block">
                  THE DIGITAL BRIDGE
                </span>

                {/* Supporting Text */}
                <p className="relative z-10 text-[11px] sm:text-xs text-[#E2F0E7] font-medium leading-relaxed mt-2 max-w-[260px]">
                  Connecting farmers, equipment sharing and opportunities across Karnataka.
                </p>

                {/* Small Outlined Information Strip */}
                <div className="relative z-10 mt-3 px-3 py-1 rounded-full bg-[#043E24] border border-[#1CA562]/40 text-[10px] sm:text-[10.5px] font-semibold tracking-wide text-[#A6DEBA]">
                  <span>Informational</span>
                  <span className="text-[#E7B93E] mx-1">•</span>
                  <span>Bilingual</span>
                  <span className="text-[#E7B93E] mx-1">•</span>
                  <span>Community First</span>
                </div>
              </div>

            </div>

            {/* ------------------------------------------------------------------- */}
            {/* RIGHT COLUMN: Equipment Owners & Agricultural Suppliers (4 Cols)    */}
            {/* ------------------------------------------------------------------- */}
            <div className="lg:col-span-4 space-y-4 sm:space-y-5">
              
              {/* CARD 3 — EQUIPMENT OWNERS */}
              <div
                ref={equipmentRef}
                className="relative rounded-[18px] sm:rounded-[20px] bg-white border border-[#DCECE0] shadow-[0_4px_16px_rgba(8,122,61,0.05)] p-3 sm:p-3.5 hover:shadow-[0_8px_24px_rgba(8,122,61,0.09)] hover:border-[#087A3D]/40 transition-all group flex items-center"
              >
                {/* Left Photograph */}
                <div className="w-[105px] h-[115px] sm:w-[115px] sm:h-[125px] rounded-[13px] overflow-hidden flex-shrink-0 bg-[#EAF6ED]">
                  <img
                    src="/images/ecosystem_equipment.jpg"
                    alt="Red agricultural tractor in farm field"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Right Content */}
                <div className="flex-1 pl-3 sm:pl-3.5 min-w-0">
                  {/* Icon */}
                  <div className="w-7 h-7 rounded-full bg-[#EAF6ED] border border-[#CDE5D2] flex items-center justify-center text-[#087A3D] mb-1 shadow-2xs">
                    <Tractor className="w-3.5 h-3.5 stroke-[2.2]" />
                  </div>

                  {/* Titles */}
                  <h3 className="text-base sm:text-lg font-black text-[#173C2E] leading-tight">
                    Equipment Owners
                  </h3>
                  <p className="text-xs sm:text-[13px] font-bold text-[#087A3D] font-kannada leading-tight mt-0.5">
                    ಯಂತ್ರೋಪಕರಣಗಳ ಮಾಲೀಕರು
                  </p>

                  {/* Descriptions */}
                  <p className="text-[11px] sm:text-xs text-[#55695D] leading-snug mt-1">
                    Tractor and harvester owners sharing equipment availability.
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-[#2B4738] font-kannada leading-snug mt-0.5">
                    ಟ್ರ್ಯಾಕ್ಟರ್ ಮತ್ತು ಹಾರ್ವೆಸ್ಟರ್ ಮಾಲೀಕರು ತಮ್ಮ ಯಂತ್ರೋಪಕರಣಗಳ ಲಭ್ಯತೆಯನ್ನು ಹಂಚಿಕೊಳ್ಳುತ್ತಾರೆ.
                  </p>
                </div>
              </div>

              {/* CARD 4 — AGRICULTURAL SUPPLIERS */}
              <div
                ref={supplierRef}
                className="relative rounded-[18px] sm:rounded-[20px] bg-white border border-[#DCECE0] shadow-[0_4px_16px_rgba(8,122,61,0.05)] p-3 sm:p-3.5 hover:shadow-[0_8px_24px_rgba(8,122,61,0.09)] hover:border-[#087A3D]/40 transition-all group flex items-center"
              >
                {/* Left Photograph */}
                <div className="w-[105px] h-[115px] sm:w-[115px] sm:h-[125px] rounded-[13px] overflow-hidden flex-shrink-0 bg-[#EAF6ED]">
                  <img
                    src="/images/ecosystem_supplier.jpg"
                    alt="Agricultural inputs storekeeper with seed and fertilizer supplies"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Right Content */}
                <div className="flex-1 pl-3 sm:pl-3.5 min-w-0">
                  {/* Icon */}
                  <div className="w-7 h-7 rounded-full bg-[#EAF6ED] border border-[#CDE5D2] flex items-center justify-center text-[#087A3D] mb-1 shadow-2xs">
                    <Sprout className="w-3.5 h-3.5 stroke-[2.2]" />
                  </div>

                  {/* Titles */}
                  <h3 className="text-base sm:text-lg font-black text-[#173C2E] leading-tight">
                    Agricultural Suppliers
                  </h3>
                  <p className="text-xs sm:text-[13px] font-bold text-[#087A3D] font-kannada leading-tight mt-0.5">
                    ಕೃಷಿ ಪೂರೈಕೆದಾರರು
                  </p>

                  {/* Descriptions */}
                  <p className="text-[11px] sm:text-xs text-[#55695D] leading-snug mt-1">
                    Agri-input stores, FPOs and certified input providers.
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-[#2B4738] font-kannada leading-snug mt-0.5">
                    ಕೃಷಿ ಇನ್ಪುಟ್ ಅಂಗಡಿಗಳು, FPOಗಳು ಮತ್ತು ಪ್ರಮಾಣೀಕೃತ ಕೃಷಿ ಪೂರೈಕೆದಾರರು.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* ------------------------------------------------------------------- */}
          {/* BOTTOM ROW: Partners Card (Centered underneath central hub)         */}
          {/* ------------------------------------------------------------------- */}
          <div className="relative z-10 pt-4 sm:pt-5 flex justify-center">
            
            <div
              ref={partnersRef}
              className="w-full max-w-[390px] rounded-[18px] sm:rounded-[20px] bg-white border border-[#DCECE0] shadow-[0_4px_16px_rgba(8,122,61,0.05)] p-3 sm:p-3.5 hover:shadow-[0_8px_24px_rgba(8,122,61,0.09)] hover:border-[#087A3D]/40 transition-all group flex items-center"
            >
              {/* Left Photograph */}
              <div className="w-[115px] h-[110px] sm:w-[125px] sm:h-[115px] rounded-[13px] overflow-hidden flex-shrink-0 bg-[#EAF6ED]">
                <img
                  src="/images/ecosystem_partners.jpg"
                  alt="Agronomist field officer with digital tablet collaborating with farmers"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right Content */}
              <div className="flex-1 pl-3 sm:pl-3.5 min-w-0">
                {/* Icon */}
                <div className="w-7 h-7 rounded-full bg-[#EAF6ED] border border-[#CDE5D2] flex items-center justify-center text-[#087A3D] mb-1 shadow-2xs">
                  <Handshake className="w-3.5 h-3.5 stroke-[2.2]" />
                </div>

                {/* Titles */}
                <h3 className="text-base sm:text-lg font-black text-[#173C2E] leading-tight">
                  Partners
                </h3>
                <p className="text-xs sm:text-[13px] font-bold text-[#087A3D] font-kannada leading-tight mt-0.5">
                  ಪಾಲುದಾರರು
                </p>

                {/* Descriptions */}
                <p className="text-[11px] sm:text-xs text-[#55695D] leading-snug mt-1">
                  Agronomists, NGOs and agricultural community groups.
                </p>
                <p className="text-[10px] sm:text-[11px] text-[#2B4738] font-kannada leading-snug mt-0.5">
                  ಕೃಷಿ ತಜ್ಞರು, NGOಗಳು ಮತ್ತು ಕೃಷಿ ಸಮುದಾಯದ ಗುಂಪುಗಳು.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* 4. SWEEPING CURVED GREEN-AND-GOLD WAVE DIVIDER AT BOTTOM EDGE             */}
      {/* ========================================================================= */}
      <div className="absolute inset-x-0 bottom-0 w-full overflow-hidden leading-none pointer-events-none select-none z-10 -mb-0.5">
        <svg
          viewBox="0 0 1440 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-14 lg:h-16 block"
          preserveAspectRatio="none"
        >
          {/* Top Warm Gold Accent Wave */}
          <path
            d="M0,32 C320,62 680,8 1020,40 C1220,56 1360,22 1440,28"
            stroke="#E7B93E"
            strokeWidth="3.5"
            fill="none"
          />
          {/* Secondary Leaf-Green Accent Wave */}
          <path
            d="M0,37 C320,67 680,13 1020,45 C1220,61 1360,27 1440,33"
            stroke="#4B9C43"
            strokeWidth="2.2"
            fill="none"
            opacity="0.9"
          />
          {/* Main Deep Green Wave Fill */}
          <path
            d="M0,41 C320,71 680,17 1020,49 C1220,65 1360,31 1440,37 L1440,76 L0,76 Z"
            fill="#075C38"
          />
        </svg>
      </div>

    </section>
  );
};
