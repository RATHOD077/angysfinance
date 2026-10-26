import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, ArrowRight, CheckCircle2, Phone, Play, 
  ChevronLeft, ChevronRight, Users, ShieldAlert, Shield, 
  TrendingUp, Building, Award, Truck, Car, Home, Layers, Clock, Sparkles, Check
} from 'lucide-react';
import { 
  HERO_SLIDES, ALL_SERVICES, CLIENT_STORIES, COMPANY_INFO, 
  UNDERWRITERS_AND_BANKS 
} from '../data/mockData';

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

export default function HomeView({ onNavigate, onOpenVideo }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [serviceFilter, setServiceFilter] = useState('all');
  const [aboutTab, setAboutTab] = useState('who');

  // Auto-advance slides every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  const filteredServices = ALL_SERVICES.filter(srv => {
    if (serviceFilter === 'commercial') return srv.category === 'Commercial Insurance';
    if (serviceFilter === 'domestic') return srv.category === 'Domestic Insurance';
    return true;
  });

  return (
    <div className="space-y-16 lg:space-y-24 bg-white text-slate-800">
      
      {/* 1. BRIGHT CORPORATE HERO (Marble Insurance & Wealthpoint Style) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/60 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/80">
        
        {/* Subtle background ambient accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Crisp Typography & Value */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Trust Badge Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-bold tracking-tight shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
                <span>{slide.tag} • NZBN {COMPANY_INFO.nzbn}</span>
              </div>

              {/* Slide Title matching site */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                {slide.title}
              </h1>

              {/* Description matching site */}
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                {slide.description}
              </p>

              {/* Key Trust Checks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-slate-700 font-semibold">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>NZI, Vero, QBE &amp; Chubb Access</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>On-Site Reviews Across Waikato &amp; Auckland</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>24/7 Dedicated Legal Claims Advocacy</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>FMA Financial Conduct Regulated</span>
                </div>
              </div>

              {/* Action Buttons matching site: Contact us Now & See Features */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-7 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-brand-600/25 hover:shadow-brand-600/35 hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
                >
                  <span>{slide.primaryCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-300 shadow-sm hover:shadow hover:-translate-y-0.5 transition-all"
                >
                  {slide.secondaryCta}
                </button>
              </div>

              {/* Direct Desk Reassurance */}
              <div className="pt-2 text-xs text-slate-500">
                Direct Hamilton &amp; Auckland Advisory Desk: {' '}
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-brand-700 font-bold hover:underline">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>

              {/* Slide Switcher Controls */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
                <div className="flex gap-2">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        currentSlide === idx ? 'w-8 bg-brand-600' : 'w-2.5 bg-slate-200 hover:bg-slate-400'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-slate-400 font-medium">
                  0{currentSlide + 1} / 0{HERO_SLIDES.length}
                </span>
              </div>

            </div>

            {/* Right Column: Original Image Card with Clean Floating Pills */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white rounded-3xl p-3 shadow-2xl border border-slate-200/90 relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[5/4]">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                </div>

                {/* Floating Metric 1 */}
                <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-slate-900">160+ Policies</div>
                    <div className="text-[10px] text-slate-500">Evaluated for Best Wordings</div>
                  </div>
                </div>

                {/* Floating Metric 2 */}
                <div className="absolute -top-4 -right-4 sm:-right-5 bg-navy-950 text-white rounded-2xl p-3.5 shadow-xl border border-slate-800 flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-brand-300" />
                  <div>
                    <div className="text-xs font-bold text-white">24/7 Loss Support</div>
                    <div className="text-[10px] text-slate-300">0800 Claims Hotline</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* 2. CORPORATE UNDERWRITING & LENDER PARTNERS (Marble & Wealthpoint Corporate Standard) */}
      <section className="border-y border-slate-200/80 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/80 py-10 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-brand-700">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse"></span>
                Accredited Brokerage Network
              </div>
              <h3 className="text-xl font-black text-slate-900 tracking-tight mt-0.5">
                Direct Wholesale Capacity Across New Zealand's Foremost Underwriters
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>12 Licensed Partner Insurers &amp; Institutional Lenders</span>
            </div>
          </div>

          {/* Marquee with left & right gradient fade masks */}
          <div className="relative overflow-hidden py-2">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>

            <div className="animate-marquee flex items-center gap-6 sm:gap-8">
              {UNDERWRITERS_AND_BANKS.concat(UNDERWRITERS_AND_BANKS).map((u, i) => (
                <div 
                  key={i} 
                  className="flex-shrink-0 flex items-center justify-center px-7 py-3.5 rounded-2xl bg-white border border-slate-200/90 hover:border-brand-500 hover:shadow-lg transition-all duration-300 group shadow-2xs"
                >
                  <img 
                    src={u.logoSrc} 
                    alt={u.name} 
                    className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE PROVIDE (2-Column Visual Section with insurance-services.jpg from live site) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                What We Provide
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                Tailored Protection for Kiwi Businesses &amp; Families
              </h2>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                We provide comprehensive insurance solutions for businesses and individuals, covering commercial risks like business interruption, liability, and property damage, as well as personal needs such as home, contents, and vehicle protection. Trust us to safeguard your future.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {/* Commercial Insurance Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-500 hover:bg-white hover:shadow-md transition-all space-y-2">
                <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold shadow">
                  <Building className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900">Commercial Insurance</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Protects businesses against financial losses from risks like property damage, liability, and disruptions.
                </p>
                <ul className="text-[11px] text-slate-500 space-y-1 pt-1">
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Employers &amp; Statutory Liability</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Public &amp; Product Liability</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Commercial Fleet &amp; Marine Cargo</li>
                </ul>
              </div>

              {/* Domestic Insurance Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:bg-white hover:shadow-md transition-all space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow">
                  <Home className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900">Domestic Insurance</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Secures personal assets including residential buildings, contents, and private vehicles with sum-insured accuracy.
                </p>
                <ul className="text-[11px] text-slate-500 space-y-1 pt-1">
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Residential Home Rebuild Cover</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> High-Value Contents &amp; Valuables</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Private Motor &amp; EV Protection</li>
                </ul>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onNavigate('services')}
                className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs uppercase tracking-wider shadow transition-colors inline-flex items-center gap-2"
              >
                <span>Explore All 11 Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image: insurance-services.jpg from live site */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 relative group">
              <img 
                src="/images/angys-original/insurance-services.jpg" 
                alt="What We Provide - Angy's Finance" 
                className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200 shadow-xl flex items-center justify-between">
                <div>
                  <div className="text-xs font-black text-navy-950 uppercase tracking-tight">Angy's Finance Limited</div>
                  <div className="text-[11px] text-slate-500">Commercial &amp; Domestic Risk Architecture</div>
                </div>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-brand-100 text-brand-800">
                  New Zealand
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SERVICES FLIP GRID - All 11 Real Policies from https://angysfinance.co.nz/ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
            Policy Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Core Insurance Disciplines
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Explore our 11 core policy disciplines, structured to defend commercial viability and family security.
          </p>

          {/* Filter Tabs matching website categories */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {[
              { id: 'all', label: 'All Coverages (11)' },
              { id: 'commercial', label: 'Commercial Insurance (8)' },
              { id: 'domestic', label: 'Domestic Insurance (3)' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setServiceFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-tight transition-all ${
                  serviceFilter === tab.id 
                    ? 'bg-brand-600 text-white shadow-sm' 
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 11 Services Grid in Clean White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map(srv => {
            const Icon = iconMap[srv.icon] || ShieldCheck;
            return (
              <div 
                key={srv.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brand-500 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 border border-brand-100 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-xs font-bold text-brand-600 group-hover:text-brand-700 flex items-center gap-1.5"
                  >
                    <span>Inquire Cover</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. ABOUT SECTION matching https://angysfinance.co.nz/ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50/70 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Real Photo from site: block-2-817x900-.jpg */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white p-2">
            <img 
              src="/images/angys-original/block-2.jpg" 
              alt="Secure Your Future with Careful Precision" 
              className="w-full h-full rounded-xl object-cover max-h-[460px]"
            />
            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-slate-200 shadow-md">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-700">
                Angy's Finance Limited
              </span>
              <div className="text-xs font-bold text-slate-900 mt-0.5">
                We Secure Your Future with Careful Precision
              </div>
            </div>
          </div>

          {/* Exact Text from https://angysfinance.co.nz/ */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-700">
                About Angy's Finance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                We Secure Your Future with Careful Precision
              </h2>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                Finest solutions tailored for every financial need. Unwavering dedication to protecting your assets and peace of mind. All complexities handled with unmatched expertise and increasing diligence. Seamless service designed to meet your expectations and ensure your satisfaction. Trust us to safeguard your tomorrow, today.
              </p>
            </div>

            {/* 3 Real Checkmarks matching live site */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-900">Comprehensive Protection for Your Business</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-900">Mitigate Risks, Maximize Security</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-900">Stay Prepared for Uncertainties</span>
              </div>
            </div>

            {/* Interactive Tabs for "Who We Are" and "What We Provide" */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-white space-y-4 shadow-2xs">
              <div className="flex gap-3 border-b border-slate-100 pb-3">
                <button
                  onClick={() => setAboutTab('who')}
                  className={`text-xs font-bold px-3.5 py-1.5 rounded-lg transition-all ${
                    aboutTab === 'who' ? 'bg-brand-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Who We Are
                </button>
                <button
                  onClick={() => setAboutTab('what')}
                  className={`text-xs font-bold px-3.5 py-1.5 rounded-lg transition-all ${
                    aboutTab === 'what' ? 'bg-brand-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  What We Provide
                </button>
              </div>

              {aboutTab === 'who' ? (
                <div className="text-xs text-slate-600 space-y-2 animate-in fade-in duration-200">
                  <p>
                    Angy's Finance Limited is an independent New Zealand-registered financial services and insurance brokerage firm (NZBN {COMPANY_INFO.nzbn}). Headquartered in Hamilton with dedicated client desks in Auckland, we act on behalf of our clients to source the best commercial, asset, and domestic protection from leading underwriters.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 font-bold text-brand-700">
                      NZBN: {COMPANY_INFO.nzbn}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 font-semibold text-slate-700">
                      FMA Regulated
                    </span>
                  </div>
                </div>
              ) : (
                <div className="text-xs text-slate-600 space-y-2 animate-in fade-in duration-200">
                  <p>
                    We provide comprehensive insurance solutions for businesses and individuals, covering commercial risks like business interruption, liability, and property damage, as well as personal needs such as home, contents, and vehicle protection. Trust us to safeguard your future.
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] font-semibold text-slate-800">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Commercial Insurance</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Domestic Insurance</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 pt-1">
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-brand-600 text-white font-bold text-xs uppercase tracking-wider shadow transition-colors"
              >
                Read More About Us
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 6. WHY CHOOSE US matching https://angysfinance.co.nz/ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-wider text-brand-700">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Reliable Protection, Personalized Support.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              At Angy's Finance, we offer reliable, tailored insurance solutions to meet your unique needs. Our extensive range of coverage options ensures your business and personal assets are well-protected. With expert guidance, personalized service, and a commitment to excellence, we provide peace of mind, so you can focus on what matters most. Choose us for comprehensive protection and unmatched support.
            </p>

            {/* Feature Cards matching site */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Video Presentation trigger */}
              <div 
                onClick={onOpenVideo}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-500 hover:bg-white hover:shadow-md cursor-pointer transition-all flex items-center gap-3.5 group"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 group-hover:text-brand-600">
                    Video Presentation
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Watch our corporate overview
                  </p>
                </div>
              </div>

              {/* Emergency Call */}
              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:bg-white hover:shadow-md cursor-pointer transition-all flex items-center gap-3.5 group"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 group-hover:text-emerald-700">
                    Emergency Call
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5 font-semibold">
                    {COMPANY_INFO.phoneDisplay}
                  </p>
                </div>
              </a>
            </div>

            <div className="pt-2 text-xs text-slate-500 font-medium">
              We can provide personalized support for all your insurance needs.
            </div>
          </div>

          {/* Right Image: Reliable-Protection-833x1000-1.jpg in clean frame */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white p-2">
            <img 
              src="/images/angys-original/reliable-protection.jpg" 
              alt="Reliable Protection" 
              className="w-full h-full rounded-xl object-cover max-h-[460px]"
            />
          </div>

        </div>
      </section>

      {/* 7. CLIENT FEEDBACK with stories.jpg on left matching https://angysfinance.co.nz/ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase font-extrabold tracking-wider text-brand-700">
            Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
            Stories From Our Clients
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Real experiences from New Zealand business directors, property investors, and transport operators.
          </p>
        </div>

        {/* 2-Column: stories.jpg left portrait + 3 Testimonials right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: stories.jpg from live site */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white p-2">
            <img 
              src="/images/angys-original/stories.jpg" 
              alt="Stories From Our Clients" 
              className="w-full h-full rounded-2xl object-cover max-h-[500px]"
            />
            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200 shadow-md">
              <div className="text-amber-500 text-sm mb-1">★★★★★</div>
              <div className="text-xs font-bold text-navy-950">
                Trusted by Kiwi Enterprise Owners
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                Hamilton, Auckland &amp; Nationwide Advisory
              </div>
            </div>
          </div>

          {/* Right: 3 Real Testimonials matching John M., Emily R., Mark T. */}
          <div className="lg:col-span-7 space-y-4">
            {CLIENT_STORIES.map((client) => (
              <div 
                key={client.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-amber-400 text-xs">
                      {'★'.repeat(client.rating)}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-50 text-brand-700">
                      Verified Review
                    </span>
                  </div>
                  {client.title && (
                    <h4 className="text-sm font-extrabold text-navy-950 mb-1.5">
                      {client.title}
                    </h4>
                  )}
                  <p className="text-xs text-slate-600 italic leading-relaxed">
                    "{client.quote}"
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-3">
                  <img 
                    src={client.avatar} 
                    alt={client.name} 
                    className="w-10 h-10 rounded-full object-cover border border-brand-500/20 shadow-xs"
                  />
                  <div>
                    <div className="font-extrabold text-slate-900 text-xs">{client.name}</div>
                    <div className="text-[11px] text-slate-500">{client.role} • {client.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. 24/7 AVAILABILITY BANNER matching https://angysfinance.co.nz/ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="relative overflow-hidden rounded-3xl bg-brand-600 text-white p-8 sm:p-14 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <span className="text-xs uppercase font-extrabold tracking-wider text-amber-300">
              24/7 Availability
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              We Are Here for Insurance Consultations
            </h2>
            <p className="text-xs sm:text-sm text-blue-50 leading-relaxed">
              Providing tailored solutions with exceptional care and expertise. Every detail of your needs is thoughtfully considered, ensuring comprehensive protection. Experience seamless service designed to secure your future with confidence and ease. At Angy’s Finance, your peace of mind is our priority.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto flex-shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-xs uppercase tracking-wider text-center shadow transition-all"
            >
              Call Us Today
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-brand-800 font-bold text-xs uppercase tracking-wider text-center shadow transition-all"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
