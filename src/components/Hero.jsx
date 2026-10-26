import React from 'react';
import { 
  ShieldCheck, ArrowRight, CheckCircle2, TrendingUp, Award, 
  Building2, Phone, Sparkles, FileText, Lock 
} from 'lucide-react';
import { COMPANY_INFO, UNDERWRITERS_AND_BANKS } from '../data/mockData';

export default function Hero({ onOpenQuote, onOpenAppointment, onNavigate }) {
  return (
    <div className="relative overflow-hidden text-white pt-10 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Photography with Deep Corporate Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/auckland-skyline.jpg" 
          alt="Auckland New Zealand Financial District Skyline" 
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Multilayered corporate gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-slate-900/90 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-transparent to-navy-950"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition & Authority */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust Pill with Official NZBN badge */}
            <div className="inline-flex flex-wrap items-center gap-2.5 justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-900/80 border border-brand-400/40 text-brand-200 text-xs font-semibold backdrop-blur-md shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Independent NZ Brokerage • NZBN {COMPANY_INFO.nzbn}</span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Active Financial Advice Provider</span>
              </div>
            </div>

            {/* Main Headline with Corporate Typography */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Enterprise-Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-200 to-amber-200">Insurance &amp; Financial</span> Architecture for New Zealand.
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              We replace generic off-the-shelf policies with tailored commercial risk management, robust domestic asset protection, and strategic mortgage advisory across Hamilton, Auckland, and nationwide.
            </p>

            {/* Key Value Checks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm text-slate-200 font-medium">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Market Access to 160+ Policies (NZI, Vero, QBE)</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Zero Fee Home Loan Advisory &amp; Bank Refixing</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Dedicated Legal Claims Advocacy, Not Call Centers</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Full FMA &amp; Financial Conduct Compliance</span>
              </div>
            </div>

            {/* Hero Action Buttons with Micro-interactions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-3 justify-center lg:justify-start">
              <button
                onClick={() => onOpenQuote()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <span>Request an Instant Fast Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenAppointment}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 backdrop-blur-sm transition-all"
              >
                <Phone className="w-4 h-4 text-brand-300" />
                <span>Book Advisor Call</span>
              </button>
            </div>

            {/* Direct Phone reassurance */}
            <div className="pt-1 text-xs text-slate-400">
              Need immediate assistance? Call our Waikato &amp; Auckland Desk: {' '}
              <a href={`tel:${COMPANY_INFO.phone}`} className="text-amber-400 font-bold hover:underline">
                {COMPANY_INFO.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Quick Quote Initiation Box */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 text-slate-900 rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200/90 backdrop-blur-md relative">
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider shadow">
                2-Minute Fast Intake
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-extrabold text-navy-950 tracking-tight">
                  Tailor Your Protection
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Select your primary requirement for a rapid underwriter comparative report:
                </p>
              </div>

              {/* Quick Select Options with Thumbnails */}
              <div className="space-y-2.5 mb-5">
                {[
                  { 
                    id: 'commercial', 
                    title: 'Commercial & Trades Liability', 
                    desc: 'Public liability, material damage, plant & tools',
                    img: '/images/construction-trades.jpg'
                  },
                  { 
                    id: 'fleet', 
                    title: 'Commercial Transport & Fleet', 
                    desc: 'Heavy transport, delivery fleets, business utes',
                    img: '/images/commercial-fleet.jpg'
                  },
                  { 
                    id: 'domestic', 
                    title: 'Home, Contents & Landlord', 
                    desc: 'Sum-insured residential & tenancy protection',
                    img: '/images/modern-home.jpg'
                  },
                  { 
                    id: 'mortgage', 
                    title: 'Home Loans & Mortgage Refixing', 
                    desc: 'First home buyers, refinancing, investment loans',
                    img: '/images/financial-planning.jpg'
                  }
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onOpenQuote(item.id)}
                    className="p-2.5 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50/50 cursor-pointer transition-all flex items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center gap-3">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-11 h-11 rounded-xl object-cover flex-shrink-0 group-hover:scale-105 transition-transform"
                      />
                      <div>
                        <div className="text-xs font-bold text-slate-800 group-hover:text-brand-700">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-600 group-hover:translate-x-1 transition-all flex-shrink-0 mr-1" />
                  </div>
                ))}
              </div>

              {/* Secondary CTA */}
              <button
                onClick={() => onOpenQuote()}
                className="w-full py-3 px-4 rounded-xl bg-navy-950 hover:bg-navy-900 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow hover:shadow-md transition-all"
              >
                <span>Launch Interactive Wizard</span>
                <ArrowRight className="w-3.5 h-3.5 text-brand-400" />
              </button>

              <div className="mt-3.5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-slate-400" /> Secure NZ SSL Encryption
                </span>
                <span className="text-brand-700 font-semibold">No Obligation Review</span>
              </div>
            </div>
          </div>

        </div>

        {/* Corporate Metrics Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">NZ$250M+</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wide">Client Assets Insured</div>
          </div>
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-brand-300 font-mono">20+</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wide">NZ Underwriters &amp; Banks</div>
          </div>
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-mono">99.4%</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wide">Claims Settlement Advocacy</div>
          </div>
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">&lt; 4 Hours</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wide">Initial Consultation Turnaround</div>
          </div>
        </div>

      </div>

      {/* Dynamic Animated Marquee of Underwriters and Banks */}
      <div className="mt-12 pt-6 border-t border-navy-800/60 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
          <span className="text-[10px] uppercase font-extrabold tracking-widest text-slate-400">
            Trusted Underwriting Syndicates &amp; Mortgage Lending Partners
          </span>
        </div>
        <div className="w-full overflow-hidden flex items-center py-2 mask-linear">
          <div className="animate-marquee flex items-center gap-10">
            {UNDERWRITERS_AND_BANKS.concat(UNDERWRITERS_AND_BANKS).map((u, i) => (
              <div key={i} className="flex-shrink-0 flex items-center gap-2.5 opacity-75 hover:opacity-100 transition-opacity">
                <img src={u.logoSrc} alt={u.name} className="h-7 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
