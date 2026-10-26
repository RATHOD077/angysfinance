import React, { useState } from 'react';
import { 
  Shield, CheckCircle2, ArrowRight, TrendingUp, Building, 
  Car, Home, DollarSign, Award, Users, FileCheck, Phone, Sparkles,
  ChevronDown, ChevronUp, Layers, Check 
} from 'lucide-react';
import { 
  COMMERCIAL_SERVICES, PERSONAL_SERVICES, FINANCE_SERVICES, 
  TESTIMONIALS, COMPANY_INFO, UNDERWRITERS_AND_BANKS, INDUSTRY_PACKAGES, FAQS 
} from '../data/mockData';
import MortgageCalculator from './MortgageCalculator';

export default function HomeOverview({ 
  onNavigate, 
  onOpenQuote, 
  onOpenAppointment, 
  onOpenCompliance 
}) {
  const [selectedIndustry, setSelectedIndustry] = useState(INDUSTRY_PACKAGES[0]);
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <div className="space-y-16">
      
      {/* 3 Core Pillars with Real Photography */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
            Comprehensive Financial Protection Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight mt-3">
            Integrated Solutions Built for Every Stage of Risk &amp; Growth
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Whether running a high-stakes civil contracting business, leasing commercial premises, or structuring a first home mortgage, our dual insurance and lending capability provides seamless execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: Commercial */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/images/construction-trades.jpg" 
                  alt="Commercial Civil and Construction Risk" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
                  <span className="text-xs font-extrabold uppercase tracking-wider bg-brand-600 text-white px-2.5 py-1 rounded-lg shadow">
                    Commercial &amp; Trades
                  </span>
                  <span className="text-[11px] font-bold text-slate-200 bg-navy-950/80 px-2 py-0.5 rounded backdrop-blur-sm">
                    Up to $20M+ Limits
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-extrabold text-navy-950 group-hover:text-brand-700 transition-colors">
                  Commercial Insurance
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Public liability up to $20M+, statutory liability defense, business interruption, fleet transport, and construction contract works.
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Public &amp; Statutory Liability</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Commercial Property &amp; Interruption</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Heavy Vehicle Fleets &amp; Transport</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => onNavigate('commercial')}
                className="w-full py-3 px-4 rounded-xl bg-navy-950 hover:bg-brand-600 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow"
              >
                <span>Explore Commercial Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Pillar 2: Personal */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/images/modern-home.jpg" 
                  alt="Modern New Zealand Architectural Home" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
                  <span className="text-xs font-extrabold uppercase tracking-wider bg-emerald-600 text-white px-2.5 py-1 rounded-lg shadow">
                    Domestic &amp; Lifestyle
                  </span>
                  <span className="text-[11px] font-bold text-slate-200 bg-navy-950/80 px-2 py-0.5 rounded backdrop-blur-sm">
                    Sum-Insured Backed
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-extrabold text-navy-950 group-hover:text-emerald-700 transition-colors">
                  Personal &amp; Landlord Cover
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Sum-insured residential home protection, high-value contents, landlord rental default, and life &amp; income insurance.
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Comprehensive Home &amp; Dwelling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Landlord &amp; Tenancy Default</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Vehicle &amp; Electric Vehicle Policies</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => onNavigate('personal')}
                className="w-full py-3 px-4 rounded-xl bg-navy-950 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow"
              >
                <span>Explore Personal Cover</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Pillar 3: Mortgages */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/images/financial-planning.jpg" 
                  alt="Mortgage and Lending Advisory Planning" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
                  <span className="text-xs font-extrabold uppercase tracking-wider bg-amber-500 text-navy-950 px-2.5 py-1 rounded-lg shadow">
                    Mortgages &amp; Lending
                  </span>
                  <span className="text-[11px] font-bold text-slate-200 bg-navy-950/80 px-2 py-0.5 rounded backdrop-blur-sm">
                    Major Bank Access
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-extrabold text-navy-950 group-hover:text-amber-600 transition-colors">
                  Mortgage Advisory &amp; Refixing
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Unlock competitive rates across ANZ, ASB, BNZ, and Westpac. First home Kiwisaver, bank refix discounts, and property investment loans.
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Free Mortgage Broker Service*</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Bank Cashback Up to $5,000+</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Fast 48-Hour Pre-Approvals</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => onNavigate('finance')}
                className="w-full py-3 px-4 rounded-xl bg-navy-950 hover:bg-amber-600 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow"
              >
                <span>Explore Mortgages</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Risk Solution Matrix (Inspired by Marble Insurance & Gerrards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl overflow-hidden relative">
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400">
              Sector Specialization
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              Custom Built Risk Packages for New Zealand Industries
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Every Kiwi sector carries distinct liabilities. Click an industry below to see how we structure protection:
            </p>
          </div>

          {/* Industry Tabs */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {INDUSTRY_PACKAGES.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all ${
                  selectedIndustry.id === ind.id 
                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30 -translate-y-0.5' 
                    : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700/80'
                }`}
              >
                {ind.name}
              </button>
            ))}
          </div>

          {/* Active Industry Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-800/80 rounded-2xl p-6 sm:p-8 border border-slate-700">
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden h-64 shadow-lg">
              <img 
                src={selectedIndustry.image} 
                alt={selectedIndustry.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                  Targeted Package
                </span>
                <div className="text-lg font-extrabold text-white">
                  {selectedIndustry.name}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">
                  {selectedIndustry.subtitle}
                </span>
                <h4 className="text-xl font-bold text-white mt-0.5">
                  What Keeps This Industry Vulnerable Without Custom Brokerage
                </h4>
              </div>

              {/* Core risks */}
              <div>
                <div className="text-[11px] font-extrabold uppercase text-slate-400 mb-2">
                  Key Exposure Threats:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedIndustry.coreRisks.map((risk, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 text-slate-300 border border-slate-700/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                      <span>{risk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Lines */}
              <div>
                <div className="text-[11px] font-extrabold uppercase text-slate-400 mb-2">
                  Angy's Finance Recommended Architecture:
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {selectedIndustry.recommendedLines.map((line, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-brand-900/60 border border-brand-500/40 text-brand-200 font-medium">
                      ✓ {line}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => onOpenQuote('commercial')}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
                >
                  Request {selectedIndustry.name} Review
                </button>
                <span className="text-xs text-slate-400">
                  Benchmarked against Steadfast terms
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Live Mortgage Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MortgageCalculator onOpenQuote={onOpenQuote} />
      </section>

      {/* Why Choose Angy's Finance Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-extrabold tracking-wider text-brand-700">
              The Broker Advantage
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-1">
              Why New Zealand Businesses Choose Angy's Finance
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Compare dealing with an independent broker versus standard direct insurance channels:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4 font-extrabold">Feature / Service Standard</th>
                  <th className="py-3 px-4 font-extrabold text-brand-700 bg-brand-50/60 rounded-t-xl">Angy's Finance NZ</th>
                  <th className="py-3 px-4 font-extrabold text-slate-500">Direct Insurers (e.g. State / AMI)</th>
                  <th className="py-3 px-4 font-extrabold text-slate-500">Retail Bank Branch</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-3.5 px-4 font-bold text-navy-950">Market Choice &amp; Underwriters</td>
                  <td className="py-3.5 px-4 font-semibold text-brand-800 bg-brand-50/30">160+ Policies (NZI, Vero, QBE, Chubb, etc.)</td>
                  <td className="py-3.5 px-4 text-slate-500">Single in-house policy only</td>
                  <td className="py-3.5 px-4 text-slate-500">Only bank-branded packaged insurer</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-navy-950">Claims Settlement Advocacy</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-700 bg-brand-50/30">Independent broker fights for your payout</td>
                  <td className="py-3.5 px-4 text-slate-500">Insurer claims desk looks to reduce payout</td>
                  <td className="py-3.5 px-4 text-slate-500">Referred to external call center</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-navy-950">Worksite &amp; Field Visits</td>
                  <td className="py-3.5 px-4 font-semibold text-brand-800 bg-brand-50/30">Yes, on-site across Waikato &amp; Auckland</td>
                  <td className="py-3.5 px-4 text-slate-500">Strictly telephone / online bot</td>
                  <td className="py-3.5 px-4 text-slate-500">Branch appointment only</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-navy-950">Integrated Mortgage Advisory</td>
                  <td className="py-3.5 px-4 font-semibold text-brand-800 bg-brand-50/30">Simultaneous mortgage + insurance coordination</td>
                  <td className="py-3.5 px-4 text-slate-500">None available</td>
                  <td className="py-3.5 px-4 text-slate-500">Only that single bank's credit rules</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-navy-950">Annual Policy Re-Tendering</td>
                  <td className="py-3.5 px-4 font-semibold text-brand-800 bg-brand-50/30">Proactive market review before renewal</td>
                  <td className="py-3.5 px-4 text-slate-500">Automatic renewal with price increases</td>
                  <td className="py-3.5 px-4 text-slate-500">Default rate rollover</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Real New Zealand Client Testimonials with Avatars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase font-extrabold tracking-wider text-brand-700">
            Verified Client Reviews
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-1">
            Trusted by Businesses &amp; Families Across Aotearoa
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-200 shadow-md flex flex-col justify-between hover:shadow-xl transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-50 text-brand-700 border border-brand-200">
                    {t.badge}
                  </span>
                  <div className="text-amber-400 text-xs font-bold tracking-wider">★★★★★</div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-3">
                <img 
                  src={t.avatar} 
                  alt={t.client} 
                  className="w-11 h-11 rounded-full object-cover border-2 border-brand-500/20 shadow-sm"
                />
                <div>
                  <div className="font-bold text-navy-950 text-xs">{t.client}</div>
                  <div className="text-[11px] text-slate-500">{t.role}</div>
                  <div className="text-[10px] text-brand-600 font-semibold">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Accordion FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs uppercase font-extrabold tracking-wider text-brand-700">
            Clarifying Common Questions
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-1">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div 
                key={i} 
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-navy-950 hover:text-brand-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-brand-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Final Action Banner with Executive Office Photography */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="relative overflow-hidden rounded-3xl text-white border border-navy-800 shadow-2xl">
          <img 
            src="/images/adviser-consultation.jpg" 
            alt="Executive Financial Consultation" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-brand-950/85"></div>

          <div className="relative z-10 p-8 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-xl">
              <span className="text-xs uppercase font-extrabold tracking-wider text-amber-300">
                Ready for a Comprehensive Audit?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Let's Review Your Existing Policies &amp; Lending Today
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Send us your policy schedule or loan statement for an obligation-free comparative analysis. We identify dangerous underinsurance gaps and uncover premium savings.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button
                onClick={() => onOpenQuote()}
                className="px-6 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-brand-500/30 text-center transition-all"
              >
                Get Fast Policy Quote
              </button>
              <button
                onClick={onOpenAppointment}
                className="px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider border border-slate-600 text-center transition-all backdrop-blur-sm"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
