import React from 'react';
import { 
  DollarSign, CheckCircle2, ArrowRight, TrendingUp, Landmark, 
  Sparkles, BadgePercent, Building2, Layers 
} from 'lucide-react';
import { FINANCE_SERVICES } from '../data/mockData';
import MortgageCalculator from './MortgageCalculator';

export default function FinanceMortgagesView({ onOpenQuote, onOpenAppointment }) {
  return (
    <div className="py-12 lg:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Landmark className="w-3.5 h-3.5 text-amber-700" />
            <span>Strategic New Zealand Mortgage &amp; Finance Advisory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Lending Architecture Built Around Your Financial Objectives
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            We operate across all major registered New Zealand trading banks (ANZ, ASB, BNZ, Westpac) and competitive non-bank lenders to optimize interest structures, negotiate cashbacks, and secure rapid pre-approvals.
          </p>

          {/* Bank Logo Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 pt-4 border-t border-slate-200">
            <span className="text-xs font-bold uppercase text-slate-400">Accredited With:</span>
            <div className="flex items-center gap-4">
              <img src="/logos/anz.svg" alt="ANZ" className="h-7 w-auto" />
              <img src="/logos/asb.svg" alt="ASB" className="h-7 w-auto" />
              <img src="/logos/bnz.svg" alt="BNZ" className="h-7 w-auto" />
              <img src="/logos/westpac.svg" alt="Westpac" className="h-7 w-auto" />
            </div>
          </div>
        </div>

        {/* 4 Pillars of Finance with Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {FINANCE_SERVICES.map((srv) => (
            <div 
              key={srv.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-44 overflow-hidden">
                  <img 
                    src={srv.image} 
                    alt={srv.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-6">
                    <span className="text-xs font-extrabold text-amber-300 uppercase tracking-wider">
                      {srv.tagline}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-extrabold text-navy-950">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {srv.desc}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {srv.perks.map((p, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0 flex items-center justify-between border-t border-slate-100">
                <span className="text-xs text-slate-400 font-medium">
                  Free Advisory Service*
                </span>
                <button
                  onClick={() => onOpenQuote('mortgage')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-800 bg-brand-50 hover:bg-brand-100 px-3.5 py-2 rounded-xl transition-colors"
                >
                  <span>Apply for Pre-Approval</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Mortgage Calculator Embedded */}
        <MortgageCalculator onOpenQuote={onOpenQuote} />

        {/* Why Use Angy's Finance For Mortgages Callout */}
        <div className="bg-gradient-to-r from-navy-950 to-brand-950 text-white rounded-3xl p-8 lg:p-12 border border-navy-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase font-extrabold tracking-wider text-amber-300">
                The Angy's Finance Lending Edge
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Why Kiwis Choose Angy's Finance Over Walking Directly into a Bank Branch
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                When you walk into a single bank, they can only offer their own restricted credit criteria and standard board rates. Our independent advisers compare policies across the entire New Zealand banking spectrum, aggressively negotiate rate discounts, and structure your loan across fixed and revolving facilities to minimize lifetime interest.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-bold text-white text-sm">NZ$3,000–$8,000</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">Average bank cash contribution negotiated for clients</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-bold text-white text-sm">0.25% - 0.50%</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">Discounts secured below advertised carded rates</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-bold text-white text-sm">Simultaneous</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">Building insurance arranged simultaneously for easy settlement</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => onOpenQuote('mortgage')}
                className="w-full py-3.5 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-navy-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-all text-center"
              >
                Start Fast Mortgage Assessment
              </button>
              <button
                onClick={onOpenAppointment}
                className="w-full py-3 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all text-center"
              >
                Book 1-on-1 Mortgage Strategy Session
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
