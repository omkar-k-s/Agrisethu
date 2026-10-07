import React, { useEffect } from 'react';
import { HowItWorksSection } from '../components/home/HowItWorksSection';

export const HowItWorks: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFDF5' }}>
      <HowItWorksSection />
    </div>
  );
};
