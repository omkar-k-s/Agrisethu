import React, { useEffect } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { TrustStrip } from '../components/home/TrustStrip';
import { AboutSection } from '../components/home/AboutSection';
import { ProblemSection } from '../components/home/ProblemSection';
import { WhatWeDoSection } from '../components/home/WhatWeDoSection';
import { HowItWorksSection } from '../components/home/HowItWorksSection';
import { ForFarmersSection } from '../components/home/ForFarmersSection';
import { EcosystemSection } from '../components/home/EcosystemSection';
import { KarnatakaAppSection } from '../components/home/KarnatakaAppSection';
import { VisionMissionSection } from '../components/home/VisionMissionSection';
import { WhoCanJoinSection } from '../components/home/WhoCanJoinSection';
import { WhyAgriSethuSection } from '../components/home/WhyAgriSethuSection';
import { RoadmapSection } from '../components/home/RoadmapSection';
import { ContactSection } from '../components/home/ContactSection';

export const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TrustStrip />
      <AboutSection />
      <ProblemSection />
      <WhatWeDoSection />
      <HowItWorksSection />
      <ForFarmersSection />
      <EcosystemSection />
      <VisionMissionSection />
      <KarnatakaAppSection />
      <WhoCanJoinSection />
      <WhyAgriSethuSection />
      <RoadmapSection />
      <ContactSection />
    </div>
  );
};
