import React, { useState } from 'react';
import { 
  Shield, CheckCircle2, ArrowRight, Building, Truck, FileText, 
  Users, ShieldAlert, ShieldCheck, TrendingUp, Award, Car, Home,
  Star, Phone, Clock, Zap
} from 'lucide-react';
import { ALL_SERVICES, COMPANY_INFO } from '../data/mockData';

const iconMap = {
  Users: Users,
  ShieldAlert: ShieldAlert,
  ShieldCheck: ShieldCheck,
  TrendingUp: TrendingUp,
  Building: Building,
  Award: Award,
  Truck: Truck,
  Car: Car,
  Home: Home,
  Shield: Shield
};

// Service blocks matched to the 6 real images on angysfinance.co.nz/services/ (pic-22 to pic-29)
// The live site has 6 service card images + 2 section images (pic-33, pic-25)
const SERVICE_IMAGES = [
  '/images/angys-original/pic-24.jpg',
  '/images/angys-original/pic-23.jpg',
  '/images/angys-original/pic-22.jpg',
  '/images/angys-original/pic-27.jpg',
  '/images/angys-original/pic-29.jpg',
  '/images/angys-original/pic-28.jpg',
];

// "Our Amenities / How It Looks" section maps to the skills/stats area on live site
const AMENITIES = [
  { label: 'Commercial Insurance Placement', pct: 98, color: 'bg-brand-600' },
  { label: 'Claims Settlement Rate', pct: 97, color: 'bg-emerald-600' },
  { label: 'Client Retention NZ', pct: 95, color: 'bg-amber-500' },
  { label: 'FMA Compliance Score', pct: 100, color: 'bg-purple-600' },
];

export default function ServicesPage({ onNavigate, onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = ALL_SERVICES.filter(s => {
    if (activeCategory === 'commercial') return s.category === 'Commercial Insurance';
    if (activeCategory === 'domestic') return s.category === 'Domestic Insurance';
    return true;
  });

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 1. Breadcrumb Header */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs text-brand-600 font-semibold mb-1">
              <span>Home</span> <span className="text-slate-400">/</span> <span className="text-slate-700">Services</span>
            </div>
            <h1 className="text-3xl font-extrabold text-navy-950 tracking-tight">
              What Service We Provide
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeCategory === 'all' ? 'bg-brand-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              All ({ALL_SERVICES.length})
            </button>
            <button
              onClick={() => setActiveCategory('commercial')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeCategory === 'commercial' ? 'bg-brand-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              Commercial
            </button>
            <button
              onClick={() => setActiveCategory('domestic')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeCategory === 'domestic' ? 'bg-brand-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              Domestic
            </button>
          </div>
        </div>

        {/* 2. Service Image Mosaic — 6 real images (pic-22 to pic-29) matching live site layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {SERVICE_IMAGES.map((imgSrc, idx) => {
            const srv = ALL_SERVICES[idx] || ALL_SERVICES[0];
            const Icon = iconMap[srv?.icon] || Shield;
            return (
              <div 
                key={idx}
                className="relative rounded-2xl overflow-hidden group cursor-pointer"
                style={{ aspectRatio: '696/800' }}
              >
                <img 
                  src={imgSrc}
                  alt={srv?.title || 'Insurance Service'}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                {/* Service label */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 rounded-lg bg-brand-600 flex items-center justify-center shadow">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/20 text-white backdrop-blur-sm">
                      {srv?.category}
                    </span>
                  </div>
                  <h3 className="text-sm font-black text-white leading-tight">{srv?.title}</h3>
                  <p className="text-[11px] text-slate-300 mt-0.5 leading-snug line-clamp-2">{srv?.desc}</p>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="mt-2 text-[10px] font-bold text-amber-300 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    Get a Quote <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. Full Services Grid — all 11 policies */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-1">
            <span className="text-xs font-extrabold uppercase tracking-wider text-brand-700">All Policies</span>
            <h2 className="text-2xl font-extrabold text-navy-950">
              {filteredServices.length} Insurance Disciplines Available
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((srv, idx) => {
              const Icon = iconMap[srv.icon] || Shield;
              const fallbackImg = SERVICE_IMAGES[idx % SERVICE_IMAGES.length];
              return (
                <div 
                  key={srv.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-400 transition-all duration-300 flex flex-col group"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img 
                      src={srv.image || fallbackImg}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-600 text-white shadow">
                        {srv.category}
                      </span>
                      <div className="p-1.5 rounded-lg bg-white/90 text-navy-950 shadow">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-extrabold text-navy-950 group-hover:text-brand-600 transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="mt-4 w-full py-2.5 px-4 rounded-xl bg-slate-900 group-hover:bg-brand-600 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow"
                    >
                      <span>Request Policy Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. "Quality Home Care" section — matching live site "We Provide Quality Home Care & Private Nursing" */}
        {/* Reworded for NZ Finance context using pic-33.jpg (team photo) and pic-25 (office photo) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-700">
                Quality Advisory Service
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-1">
                We Provide Quality Insurance &amp; Financial Advice
              </h2>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                Every policy we place is individually structured for your specific risk profile. We survey NZ's entire underwriting market — Vero, NZI, QBE, Chubb, Delta, and specialist syndicates — ensuring you receive optimal coverage wordings, not just the cheapest premium.
              </p>
            </div>

            {/* Our Amenities / Skills Progress Bars — matching "Skills" section on live site */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-navy-950 border-b border-slate-100 pb-2">
                Our Amenities &amp; How It Looks Like
              </h3>
              {AMENITIES.map((a) => (
                <div key={a.label}>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                    <span>{a.label}</span>
                    <span className="text-brand-700">{a.pct}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${a.color} transition-all duration-700`}
                      style={{ width: `${a.pct}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right col: pic-33.jpg from live services page */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="/images/angys-original/pic-33.jpg"
              alt="Angy's Finance Quality Advisory NZ"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center font-black">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-navy-950">FMA Licensed Advisers</div>
                  <div className="text-[11px] text-slate-500">Hamilton HQ &amp; Auckland Desk</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. "Get More Consultations" CTA banner — matching live services page CTA section, using pic-25 */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 min-h-[220px] flex items-center">
          <img 
            src="/images/angys-original/pic-25-1024x675.jpg"
            alt="Get More Consultations NZ Insurance"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-brand-900/60"></div>
          <div className="relative z-10 p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 w-full">
            <div className="space-y-2 max-w-lg">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400">
                Need Any Help?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Get More Consultations
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether you need a rapid commercial liability review, a fleet endorsement, or a domestic sum-insured valuation — our registered NZ advisers are ready to help.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <button
                onClick={() => onNavigate('appointment')}
                className="px-8 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs uppercase tracking-wider shadow-xl whitespace-nowrap transition-all"
              >
                Book a Consultation
              </button>
              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="px-8 py-3 rounded-xl border border-white/30 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/10 text-center transition-all whitespace-nowrap"
              >
                Call {COMPANY_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
