import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import AppointmentPage from './components/AppointmentPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import QuoteWizardModal from './components/QuoteWizardModal';
import ComplianceModal from './components/ComplianceModal';
import { PhoneCall, Calculator } from 'lucide-react';
import { COMPANY_INFO } from './data/mockData';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isComplianceOpen, setIsComplianceOpen] = useState(false);

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 antialiased selection:bg-brand-500 selection:text-white">
      {/* Navigation Header matching exact menu of angysfinance.co.nz */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={handleTabChange}
        onOpenContactModal={() => handleTabChange('contact')}
      />

      {/* Main Content Area: Home, About, Services, Appointment, Blog, Contact */}
      <main className="flex-grow">
        {currentTab === 'home' && (
          <HomeView
            onNavigate={handleTabChange}
            onOpenVideo={() => setIsVideoOpen(true)}
            onOpenContact={() => handleTabChange('contact')}
          />
        )}

        {currentTab === 'about' && (
          <AboutPage 
            onNavigate={handleTabChange} 
          />
        )}

        {currentTab === 'services' && (
          <ServicesPage 
            onNavigate={handleTabChange}
            onOpenQuote={() => setIsQuoteOpen(true)}
          />
        )}

        {currentTab === 'appointment' && (
          <AppointmentPage 
            onNavigate={handleTabChange} 
          />
        )}

        {currentTab === 'blog' && (
          <BlogPage 
            onNavigate={handleTabChange} 
          />
        )}

        {currentTab === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Floating Action Button for Quick Phone & Quote */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5 items-end">
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="w-12 h-12 rounded-full bg-navy-950 text-white shadow-xl flex items-center justify-center hover:scale-110 hover:bg-navy-900 border border-slate-700 transition-all sm:hidden"
          title="Direct Phone Call"
          aria-label="Direct Phone Call"
        >
          <PhoneCall className="w-5 h-5 text-emerald-400" />
        </a>

        <button
          onClick={() => setIsQuoteOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-xl shadow-brand-600/40 hover:scale-105 transition-all"
        >
          <Calculator className="w-4 h-4" />
          <span className="hidden sm:inline">Instant Quote Calculator</span>
          <span className="sm:hidden">Get Quote</span>
        </button>
      </div>

      {/* Corporate Footer matching exact structure of angysfinance.co.nz */}
      <Footer
        onNavigate={handleTabChange}
        onOpenCompliance={() => setIsComplianceOpen(true)}
      />

      {/* Interactive Modals */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      <QuoteWizardModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />

      <ComplianceModal
        isOpen={isComplianceOpen}
        onClose={() => setIsComplianceOpen(false)}
      />
    </div>
  );
}
