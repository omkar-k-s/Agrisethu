import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Official Informational Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { WhatWeDo } from './pages/WhatWeDo';
import { HowItWorks } from './pages/HowItWorks';
import { Vision } from './pages/Vision';
import { AppPage } from './pages/AppPage';
import { Contact } from './pages/Contact';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-white text-[#17352A]">
          {/* Top Informational Header */}
          <Navbar />

          {/* Main Content Router */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/what-we-do" element={<WhatWeDo />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/vision" element={<Vision />} />
              <Route path="/app" element={<AppPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
