import React from 'react';
import { 
  Home, ShieldCheck, Car, Building, HeartPulse, 
  ArrowRight, Check, Sparkles, Award 
} from 'lucide-react';
import { PERSONAL_SERVICES } from '../data/mockData';

const iconMap = {
  Home: Home,
  ShieldCheck: ShieldCheck,
  Car: Car,
  Building: Building,
  HeartPulse: HeartPulse
};

export default function PersonalInsuranceView({ onOpenQuote }) {
  return (
    <div className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Personal &amp; Domestic Asset Protection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Safeguarding Your Family Home, Vehicles &amp; Personal Wealth
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            In an era of rising construction costs and unpredictable weather events across New Zealand, ensure your home and possessions are protected with precision sum-insured policies.
          </p>
        </div>

        {/* 5-Card Feature Grid with Real Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PERSONAL_SERVICES.map((srv) => {
            const Icon = iconMap[srv.icon] || ShieldCheck;
            return (
              <div 
                key={srv.id}
                className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/90 hover:border-brand-500 hover:bg-white hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={srv.image} 
                      alt={srv.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-4">
                      <span className="p-2 rounded-xl bg-white/90 text-brand-600 shadow-md inline-flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-navy-950 group-hover:text-brand-700 transition-colors">
                      {srv.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {srv.desc}
                    </p>

                    <div className="mt-5 pt-4 border-t border-slate-200/70 space-y-2">
                      {srv.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenQuote('domestic')}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Get Fast Domestic Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Quick Consultation Highlight Card */}
          <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-brand-950 text-white rounded-3xl p-7 border border-navy-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-500/20 text-brand-300 text-[11px] font-bold uppercase mb-4">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Multi-Policy Advantage</span>
              </div>
              <h3 className="text-xl font-extrabold text-white leading-snug">
                Bundle Home, Contents &amp; Vehicles
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Combine your personal assets under an Angy's Finance managed portfolio to access multi-policy discounts, single-excess claims when one event damages multiple items, and a dedicated broker.
              </p>
              <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-amber-200">
                ⭐ One broker. One point of contact. Zero hold times.
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onOpenQuote('domestic')}
                className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-navy-950 font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all"
              >
                Request Personal Portfolio Review
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
