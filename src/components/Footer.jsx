import React from 'react';
import { 
  Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck 
} from 'lucide-react';
import { COMPANY_INFO, UNDERWRITERS_AND_BANKS } from '../data/mockData';

export default function Footer({ onNavigate, onOpenCompliance }) {
  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main 4-Column Footer matching https://angysfinance.co.nz/ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand Logo & Company Description */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3 select-none">
              <img 
                src={COMPANY_INFO.logoSrc} 
                alt="Angy's Finance NZ" 
                className="h-14 w-auto object-contain bg-white/10 p-1 rounded-xl"
              />
              <div>
                <span className="text-xl font-black tracking-tight text-white font-sans">
                  ANGY'S<span className="text-brand-400 ml-1">FINANCE</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-brand-900 text-brand-300 border border-brand-700 ml-1.5">
                  NZ
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Angy's Finance Limited (NZBN {COMPANY_INFO.nzbn}). We provide comprehensive insurance and finance solutions for businesses and individuals across Hamilton, Auckland, and nationwide.
            </p>

            <div className="pt-2 text-xs space-y-1.5 text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>NZBN: <strong className="text-white">{COMPANY_INFO.nzbn}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-400"></span>
                <span>FMA Financial Advice Services Regulated</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links matching https://angysfinance.co.nz/ */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors text-left">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('appointment')} className="hover:text-white transition-colors text-left">
                  Appointment
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors text-left">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors text-left">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Useful Links matching https://angysfinance.co.nz/ */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white">
              Useful Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={onOpenCompliance} className="hover:text-white transition-colors text-left">
                  Privacy Policy (NZ Privacy Act 2020)
                </button>
              </li>
              <li>
                <button onClick={onOpenCompliance} className="hover:text-white transition-colors text-left">
                  Terms and Conditions
                </button>
              </li>
              <li>
                <button onClick={onOpenCompliance} className="hover:text-white transition-colors text-left">
                  Disclaimer &amp; FAP Disclosures
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors text-left">
                  Support &amp; Inquiries
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors text-left">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Work Hours matching https://angysfinance.co.nz/ */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white">
              Work Hours &amp; Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  8:30 AM – 5:30 PM<br />
                  Monday – Friday NZST
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-white font-bold hover:underline">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-300 hover:text-white truncate">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.registeredAddress}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Underwriter Badges Bar */}
        <div className="pt-8 border-t border-navy-900/90 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Angy's Finance Limited. All Rights Reserved. Incorporated in New Zealand (NZBN {COMPANY_INFO.nzbn}).
          </div>
          <div className="flex items-center gap-3">
            <img src="/logos/nzbn-badge.svg" alt="NZBN" className="h-6 w-auto" />
            <img src="/logos/steadfast.svg" alt="Steadfast" className="h-6 w-auto" />
            <img src="/logos/fma-badge.svg" alt="FMA" className="h-6 w-auto" />
          </div>
        </div>

      </div>
    </footer>
  );
}
