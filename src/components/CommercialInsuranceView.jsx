import React, { useState } from 'react';
import { 
  Shield, CheckCircle2, ArrowRight, Building, Truck, FileText, 
  AlertTriangle, Hammer, Lock, ChevronRight 
} from 'lucide-react';
import { COMMERCIAL_SERVICES } from '../data/mockData';

export default function CommercialInsuranceView({ onOpenQuote }) {
  const [selectedService, setSelectedService] = useState(COMMERCIAL_SERVICES[0]);

  return (
    <div className="py-12 lg:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5 text-brand-600" />
            <span>Commercial &amp; Enterprise Risk Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Protecting New Zealand Enterprises from Operational &amp; Legal Disruption
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            From Hamilton trade workshops to Auckland commercial property portfolios and national logistics fleets, we structure custom risk programs backed by New Zealand's top-tier underwriters.
          </p>
        </div>

        {/* Master-Detail Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Service Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {COMMERCIAL_SERVICES.map((srv) => {
              const isSelected = selectedService.id === srv.id;
              return (
                <div
                  key={srv.id}
                  onClick={() => setSelectedService(srv)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected 
                      ? 'bg-navy-950 text-white border-navy-900 shadow-xl shadow-navy-950/20 translate-x-1' 
                      : 'bg-white text-slate-800 border-slate-200 hover:border-brand-400 hover:bg-brand-50/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img 
                      src={srv.image} 
                      alt={srv.title} 
                      className="w-12 h-12 rounded-xl object-cover flex-shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-full ${
                          isSelected ? 'bg-brand-500/30 text-brand-200' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {srv.category}
                        </span>
                        {srv.badge && (
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                            isSelected ? 'bg-amber-400/20 text-amber-300' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {srv.badge}
                          </span>
                        )}
                      </div>
                      <h3 className={`text-sm font-bold mt-1 ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                        {srv.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 flex-shrink-0 ${isSelected ? 'text-brand-400' : 'text-slate-300'}`} />
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep Dive Panel with Rich Photography */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl">
            
            {/* Visual Photography Header */}
            <div className="relative h-56 overflow-hidden">
              <img 
                src={selectedService.image} 
                alt={selectedService.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent"></div>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-300 bg-brand-900/80 px-2.5 py-0.5 rounded backdrop-blur-sm">
                  {selectedService.category}
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-1">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedService.fullDesc}
              </p>

              {/* Coverage Inclusions */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
                  Key Policy Extensions &amp; Safeguards Included
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.coverageHighlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-slate-700 leading-snug">
                        {hl}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Industries */}
              <div className="p-4 rounded-2xl bg-brand-50/60 border border-brand-100">
                <div className="text-xs font-bold text-brand-900 mb-2">
                  Recommended For These New Zealand Sectors:
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedService.recommendedFor.map((rec, i) => (
                    <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white border border-brand-200 text-brand-800 shadow-2xs">
                      {rec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Underwriters trust badge bar */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Underwritten By:</span>
                  <div className="flex items-center gap-2">
                    <img src="/logos/nzi.svg" alt="NZI" className="h-5 w-auto" />
                    <img src="/logos/vero.svg" alt="Vero" className="h-5 w-auto" />
                    <img src="/logos/qbe.svg" alt="QBE" className="h-5 w-auto" />
                    <img src="/logos/chubb.svg" alt="Chubb" className="h-5 w-auto" />
                  </div>
                </div>

                <button
                  onClick={() => onOpenQuote('commercial')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                >
                  <span>Request Policy Schedule</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
