import React from 'react';
import { 
  Shield, Award, Users, CheckCircle2, Building2, MapPin, 
  ArrowRight, Landmark, FileText, Globe 
} from 'lucide-react';
import { COMPANY_INFO, COMPLIANCE_ITEMS } from '../data/mockData';

export default function AboutView({ onOpenAppointment, onOpenQuote }) {
  return (
    <div className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3 border border-brand-200">
            <Building2 className="w-3.5 h-3.5" />
            <span>Corporate Background &amp; Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Independent, Client-First Financial &amp; Insurance Advisory
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Registered in New Zealand under NZBN {COMPANY_INFO.nzbn}, Angy's Finance was founded to bridge the gap between large institutional underwriters and hard-working New Zealand businesses and families.
          </p>

          {/* Official Verification Badges Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <img src="/logos/nzbn-badge.svg" alt="NZBN Registered" className="h-10 w-auto" />
            <img src="/logos/steadfast.svg" alt="Steadfast Network" className="h-10 w-auto" />
            <img src="/logos/fma-badge.svg" alt="FMA Code of Conduct" className="h-10 w-auto" />
          </div>
        </div>

        {/* Narrative & Visual Photography Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-5 text-sm text-slate-600 leading-relaxed">
            <h3 className="text-2xl font-bold text-navy-950 tracking-tight">
              We Work for You — Not the Insurance Companies
            </h3>
            <p>
              When a business owner or family buys insurance directly from an insurance company or walks into a retail bank branch, they are speaking to agents whose primary obligation is to their parent corporation's profit margins and strict criteria.
            </p>
            <p>
              <strong>Angy's Finance is fundamentally different.</strong> As independent insurance brokers and mortgage advisers, our legal fiduciary duty under the New Zealand Financial Markets Conduct Act 2013 is to you, our client. We survey the entire marketplace—including NZI, Vero, QBE, Chubb, Allianz, Delta, and all major retail banks—to engineer tailored policies and loan structures that safeguard your assets and minimize your costs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-navy-950 text-xs">Hamilton &amp; Waikato Registered</div>
                <div className="text-slate-500 text-[11px] mt-0.5">{COMPANY_INFO.registeredAddress}</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-navy-950 text-xs">Official New Zealand NZBN</div>
                <div className="text-slate-500 text-[11px] mt-0.5">NZBN: {COMPANY_INFO.nzbn} (Active Status)</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <img 
              src="/images/adviser-consultation.jpg" 
              alt="Angy's Finance Team Consultation" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>
            <div className="absolute bottom-5 left-6 right-6 text-white text-xs">
              <div className="text-amber-300 font-extrabold uppercase tracking-wider text-[10px]">
                Advisory Integrity
              </div>
              <div className="text-base font-bold mt-0.5">
                On-Site Field Assessments Across Waikato &amp; Auckland
              </div>
              <div className="text-slate-300 text-[11px] mt-1">
                We meet with you in person to evaluate physical risks directly.
              </div>
            </div>
          </div>
        </div>

        {/* 4 Corporate Commitments Cards */}
        <div className="bg-gradient-to-br from-navy-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-navy-800 shadow-2xl mb-16">
          <div className="text-xs uppercase font-extrabold text-brand-300 tracking-wider mb-2 text-center">
            Our 4 Corporate Commitments
          </div>
          <h4 className="text-2xl font-extrabold text-white mb-8 text-center tracking-tight">
            The Angy's Finance Standard of Excellence
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <div className="font-bold text-white text-sm">True Independence</div>
              <p className="text-slate-300 leading-relaxed">
                Unbiased market comparison across over 160 general insurance policies and 20+ mortgage lenders.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <div className="font-bold text-white text-sm">Field-Based Advisory</div>
              <p className="text-slate-300 leading-relaxed">
                We visit client worksites, depots, and premises rather than forcing you into automated phone trees.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <div className="font-bold text-white text-sm">Proactive Reviews</div>
              <p className="text-slate-300 leading-relaxed">
                Never let policies rollover with outdated sums-insured or uncompetitive interest rate margins.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <div className="font-bold text-white text-sm">Claims Advocacy</div>
              <p className="text-slate-300 leading-relaxed">
                In the event of catastrophic loss, our senior brokers lead the settlement negotiations directly with underwriters.
              </p>
            </div>
          </div>
        </div>

        {/* NZ Compliance & FMA Standards Section */}
        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-extrabold uppercase tracking-wider text-brand-700">
              New Zealand Financial Regulatory Transparency
            </span>
            <h3 className="text-xl font-bold text-navy-950 mt-1">
              Operated in Strict Alignment with FMA Guidelines
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              We take compliance, professional conduct, and transparency with the utmost seriousness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COMPLIANCE_ITEMS.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 text-xs">
                <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-brand-600" />
                  {item.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
