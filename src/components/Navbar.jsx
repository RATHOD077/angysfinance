import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Shield, Menu, X, 
  ArrowRight, Calculator 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export default function Navbar({ currentTab, setCurrentTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exact 6 navigation items matching https://angysfinance.co.nz/
  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'appointment', label: 'Appointment' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tabId) => {
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-xs border-b border-slate-200/90 transition-all duration-200">
      {/* Top Dispatch Bar (Clean Light Theme) */}
      <div className="bg-slate-100/90 text-slate-700 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Direct Phone & Email */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
            <a 
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-1.5 text-slate-800 hover:text-brand-600 font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-600" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <a 
              href={`mailto:${COMPANY_INFO.email}`}
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-brand-600 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-600" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span className="text-slate-300 hidden md:inline">|</span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-500 text-[11px]">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              Mon–Fri: 8:30am – 5:30pm NZST
            </span>
          </div>

          {/* NZBN & Social Links */}
          <div className="flex items-center gap-4 text-xs">
            <span className="inline-flex items-center gap-1.5 text-slate-600 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              NZBN: <strong className="text-slate-900 font-bold">{COMPANY_INFO.nzbn}</strong>
            </span>
            <div className="flex items-center gap-2.5 pl-3 border-l border-slate-300 text-slate-500">
              <a href="#" className="hover:text-brand-600 transition-colors" title="Facebook">
                <span className="sr-only">Facebook</span>
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="hover:text-brand-600 transition-colors" title="Twitter">
                <span className="sr-only">Twitter</span>
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="hover:text-brand-600 transition-colors" title="Instagram">
                <span className="sr-only">Instagram</span>
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Authentic Brand Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="cursor-pointer flex items-center gap-3 select-none group"
          >
            <img 
              src={COMPANY_INFO.logoSrc} 
              alt="Angy's Finance Limited" 
              className="h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
            />
            <div className="hidden sm:block border-l border-slate-200 pl-3">
              <span className="block text-xl font-black tracking-tight text-slate-900 font-sans">
                ANGY'S<span className="text-brand-600 ml-1">FINANCE</span>
              </span>
              <span className="block text-[11px] font-semibold text-slate-500 -mt-1 tracking-tight">
                New Zealand Financial Services
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links (Clean & Corporate) */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold tracking-tight transition-all ${
                    isActive 
                      ? 'text-brand-600 bg-brand-50/80 font-extrabold shadow-2xs' 
                      : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Header Action CTA matching https://angysfinance.co.nz/ */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl shadow-md shadow-brand-600/20 hover:shadow-brand-600/35 hover:-translate-y-0.5 transition-all"
            >
              <span>Contact us Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-brand-600 text-white text-xs font-bold px-3 py-2 rounded-lg shadow-sm"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold flex items-center justify-between ${
                  currentTab === item.id 
                    ? 'bg-brand-50 text-brand-600' 
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); handleNavClick('contact'); }}
              className="w-full py-3 px-4 rounded-xl bg-brand-600 text-white text-xs font-bold uppercase tracking-wider shadow text-center"
            >
              Contact us Now
            </button>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold uppercase tracking-wider text-center"
            >
              Call {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
