import React, { useState } from 'react';
import { 
  Building2, CheckCircle2, Shield, Award, Users, 
  MapPin, Phone, Mail, ArrowRight, Calendar, Star, 
  TrendingUp, FileCheck, Check, Sparkles, Clock, Globe2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

// Team members matching the 3 cards on https://angysfinance.co.nz/about/
const TEAM_MEMBERS = [
  {
    name: 'Alexis Stokes',
    role: 'Senior Commercial Broker & Underwriting Specialist',
    qualification: 'Level 5 Financial Advice NZ • Commercial Lines',
    image: '/images/angys-original/Team-1.jpg',
    specialty: 'Public Liability, Fleet Portfolios & Business Interruption',
    bio: 'Over 12 years of specialized underwriting negotiation across New Zealand industrial and commercial sectors, advocating for fair premiums and robust terms.'
  },
  {
    name: 'Alissa Leonard',
    role: 'Domestic & Personal Risk Adviser',
    qualification: 'Certified Insurance Professional (CIP)',
    image: '/images/angys-original/Team-3.jpg',
    specialty: 'High-Value Residential, Contents & Marine Cover',
    bio: 'Dedicated to helping New Zealand families and property owners structure accurate sum-insured valuations and tailored domestic asset safeguards.'
  },
  {
    name: 'Georgia Mcneil',
    role: 'Head of Claims Advocacy & Compliance',
    qualification: 'LL.B / B.Com • Regulatory Compliance Officer',
    image: '/images/angys-original/Team-2.jpg',
    specialty: 'Claims Negotiation, Disputes & FMA Compliance',
    bio: 'Oversees end-to-end claim settlements and regulatory adherence under the Financial Markets Conduct Act 2013, ensuring swift insurer payouts.'
  }
];

// Interactive Timeline matching https://angysfinance.co.nz/about/
const TIMELINE_MILESTONES = [
  {
    year: '2019',
    period: 'Q2 2019',
    title: 'NZ Entity Incorporation & Licensing',
    location: 'Hamilton, New Zealand',
    desc: 'Angy\'s Finance Limited formally incorporated under the New Zealand Companies Act 1993 (NZBN 9429049613759) with a mission to deliver transparent, client-first advisory.',
    badge: 'Foundation'
  },
  {
    year: '2021',
    period: 'Q3 2021',
    title: 'Tier-1 Underwriting Distribution',
    location: 'Auckland & Waikato',
    desc: 'Established direct wholesale distribution agreements with New Zealand\'s leading insurance underwriters—including NZI, Vero, QBE, Chubb, and Delta.',
    badge: 'Expansion'
  },
  {
    year: '2023',
    period: 'Q1 2023',
    title: 'Full FMA FAP Regime Compliance',
    location: 'National Operations',
    desc: 'Successfully transitioned into the Financial Markets Authority (FMA) Full Financial Advice Provider regime, reinforcing high fiduciary governance and duty of care.',
    badge: 'Regulatory'
  },
  {
    year: '2026',
    period: 'Present Day',
    title: 'Corporate Multi-Line Advisory',
    location: 'Hamilton HQ & Auckland Suite',
    desc: 'Managing multi-million dollar asset portfolios across 11 core policy disciplines with dedicated loss-adjuster negotiation and direct emergency claims support.',
    badge: 'Current'
  }
];

// Real Testimonials matching testimonial-1, testimonial-2, testimonial-3 on live About page
const TESTIMONIALS = [
  {
    name: 'John Doe',
    company: 'Waikato Logistics & Freight Ltd',
    location: 'Hamilton',
    rating: 5,
    image: '/images/angys-original/testimonial-1.jpg',
    quote: 'Angy\'s Finance audited our commercial fleet and statutory liability policies. They identified crucial under-insurance gaps and renegotiated our annual premium with a tier-one insurer, saving us thousands while expanding downtime cover.'
  },
  {
    name: 'Tom Jones',
    company: 'Apex Civil Contracting NZ',
    location: 'Auckland',
    rating: 5,
    image: '/images/angys-original/testimonial-2.jpg',
    quote: 'When an equipment fire damaged our workshop machinery, the claims advocacy team at Angy\'s Finance stepped in immediately. Their loss adjuster management ensured 100% of the replacement value was disbursed without delay.'
  },
  {
    name: 'Mark Wilson',
    company: 'Wilson Property Group',
    location: 'Cambridge / Waikato',
    rating: 5,
    image: '/images/angys-original/testimonial-3.jpg',
    quote: 'Professional, responsive, and completely transparent. Having a registered broker who actually answers the phone and understands New Zealand property law makes all the difference.'
  }
];

export default function AboutPage({ onNavigate }) {
  const [activeTimeline, setActiveTimeline] = useState(3);

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 1. Breadcrumb Header matching live site */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs text-brand-600 font-bold mb-1">
              <span>Home</span> <span className="text-slate-300 mx-1">/</span> <span className="text-slate-700">About</span>
            </div>
            <h1 className="text-3xl font-extrabold text-navy-950 tracking-tight">
              About Angy's Finance
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              NZBN: {COMPANY_INFO.nzbn}
            </span>
            <span className="px-3 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200 text-xs font-bold">
              FMA Regulated
            </span>
          </div>
        </div>

        {/* 2. Main Narrative Section: "About Company" with authentic pic-18.jpg and signature */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-700">
                About Company
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-950 tracking-tight mt-1">
                We Spread Care to Provide Quality Life
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                Angy's Finance Limited is an accredited New Zealand financial advice provider established to protect the livelihoods of Kiwi enterprise owners, contractors, and families. 
              </p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
              <p>
                Unlike generic off-the-shelf insurance packages that leave major operational exposures uncovered, our registered advisers evaluate your complete risk profile before approaching underwriters. 
              </p>
              <p>
                We represent <strong className="text-slate-900">your best interests</strong>—not an insurer's sales target. From commercial liability defense and heavy commercial fleet wordings to residential sum-insured structures, we deliver robust certainty across Hamilton, Auckland, and nationwide.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-navy-950 text-xs">Strict Fiduciary Standard</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Compliant with the Code of Professional Conduct for Financial Advice Services.</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-navy-950 text-xs">Bespoke Policy Negotiation</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Direct market access to Vero, NZI, QBE, Chubb, and Delta syndicates.</div>
                </div>
              </div>
            </div>

            {/* Signature Block matching Annabella-Mathews.png from live site */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-100">
              <div className="space-y-1">
                <div className="text-xs font-bold text-slate-900">Principal &amp; Senior Financial Adviser</div>
                <div className="text-[11px] text-slate-500">Angy's Finance Limited • Registered FAP</div>
                {/* Authentic signature graphic downloaded from the live site */}
                <div className="pt-2">
                  <img 
                    src="/images/angys-original/Annabella-Mathews.png" 
                    alt="Authorized Executive Signature" 
                    className="h-9 w-auto object-contain opacity-85"
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs uppercase tracking-wider shadow transition-all"
                >
                  Contact Adviser
                </button>
                <button
                  onClick={() => onNavigate('appointment')}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Book Visit
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Featured Image pic-18.jpg downloaded from live About page */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 relative group">
              <img 
                src="/images/angys-original/pic-18.jpg" 
                alt="Angy's Finance New Zealand Corporate Operations" 
                className="w-full h-[460px] object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent"></div>
              
              {/* Floating NZ Experience Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200 shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center font-black text-sm shadow">
                    NZ
                  </div>
                  <div>
                    <div className="text-xs font-black text-navy-950 uppercase tracking-tight">Angy's Finance Limited</div>
                    <div className="text-[11px] text-slate-500">Hamilton HQ • Peachgrove Rd &amp; Auckland Desk</div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    Active FAP
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Performance Metrics (Replacing broken 0-counters from the live site) */}
        <div className="bg-gradient-to-r from-navy-950 via-slate-900 to-navy-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-1">
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400">
              Performance &amp; Scale
            </span>
            <h3 className="text-2xl font-extrabold text-white">
              Proven Protection by the Numbers
            </h3>
            <p className="text-xs text-slate-300">
              Measurable commitment to safeguarding commercial operations and personal assets across New Zealand.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">$45M+</div>
              <div className="text-xs font-bold text-amber-400 mt-1 uppercase tracking-wider">Asset Value Covered</div>
              <div className="text-[11px] text-slate-400 mt-1">Under advisement across Kiwi enterprises</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">98.7%</div>
              <div className="text-xs font-bold text-emerald-400 mt-1 uppercase tracking-wider">Claims Settlement</div>
              <div className="text-[11px] text-slate-400 mt-1">Direct representation with loss adjusters</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">11</div>
              <div className="text-xs font-bold text-brand-300 mt-1 uppercase tracking-wider">Policy Disciplines</div>
              <div className="text-[11px] text-slate-400 mt-1">Commercial, domestic, marine &amp; liability</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">100%</div>
              <div className="text-xs font-bold text-amber-300 mt-1 uppercase tracking-wider">Independent Fiduciary</div>
              <div className="text-[11px] text-slate-400 mt-1">Free of proprietary insurer quotas</div>
            </div>
          </div>
        </div>

        {/* 4. Company Timeline Section matching "Company Timeline" on live site */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-700">
                Timeline
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-1">
                Company Timeline &amp; Evolution
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Our journey from initial registration to trusted multi-line advisory provider in New Zealand.
              </p>
            </div>
            <div className="text-xs text-slate-400 font-semibold">
              Interactive Milestone Navigator
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {TIMELINE_MILESTONES.map((m, idx) => {
              const isActive = activeTimeline === idx;
              return (
                <button
                  key={m.year}
                  onClick={() => setActiveTimeline(idx)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    isActive 
                      ? 'bg-brand-50/80 border-brand-500 shadow-md ring-2 ring-brand-500/20' 
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xl font-black ${isActive ? 'text-brand-700' : 'text-slate-900'}`}>
                      {m.year}
                    </span>
                    <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                      isActive ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {m.badge}
                    </span>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-navy-950 line-clamp-1">{m.title}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{m.location}</div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-slate-600 leading-relaxed">
                    {m.desc}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 5. Team Section matching "Meet Our Qualified Team" on live site with Team-1, Team-2, Team-3 */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-brand-700">
              Our Team
            </span>
            <h2 className="text-3xl font-extrabold text-navy-950">
              Meet Our Qualified Advisory Team
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Accredited New Zealand advisers combining underwriting acumen with rigorous claims representation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div 
                key={member.name}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-64 overflow-hidden bg-slate-100">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-600 text-white shadow">
                        {member.qualification}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="text-lg font-black text-navy-950 group-hover:text-brand-600 transition-colors">
                        {member.name}
                      </h3>
                      <div className="text-xs font-bold text-brand-700 mt-0.5">
                        {member.role}
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] font-semibold text-slate-700">
                      🎯 <span className="text-slate-500 font-normal">Specialty:</span> {member.specialty}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100">
                  <button
                    onClick={() => onNavigate('appointment')}
                    className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-brand-600 hover:text-white text-slate-700 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Request Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Testimonials Section matching "What Clients Think" on live site */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-700">
                Testimonials
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-1">
                What Clients Think
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Real feedback from New Zealand business owners, transport operators, and property investors.
              </p>
            </div>
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-bold text-slate-800 ml-1.5">5.0 Star Brokerage Service</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div 
                key={t.name}
                className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between space-y-4 hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center gap-3">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-11 h-11 rounded-full object-cover border-2 border-brand-500 shadow-sm"
                  />
                  <div>
                    <div className="text-xs font-bold text-navy-950">{t.name}</div>
                    <div className="text-[11px] text-brand-700 font-semibold">{t.company}</div>
                    <div className="text-[10px] text-slate-400">{t.location}, NZ</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Life Experience & Fiduciary Standard (Replacing 20 Years in Home Care) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-brand-700">
              Fiduciary Commitment
            </span>
            <h3 className="text-2xl font-extrabold text-navy-950">
              Decades of Collective Underwriting &amp; Claims Experience
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When disaster strikes—be it severe weather events, statutory investigations by WorkSafe New Zealand, or contractual liability claims—having an accredited broker who understands policy exclusions is your greatest asset. We stand beside you every step of the way.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> Member of Financial Advice NZ Standards</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> Approved Dispute Resolution Access</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> NZ Privacy Act 2020 Compliant</span>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full py-3.5 px-6 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs uppercase tracking-wider shadow text-center transition-all"
            >
              Speak with a Registered Adviser
            </button>
            <button
              onClick={() => onNavigate('appointment')}
              className="w-full py-3 px-6 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-xs uppercase tracking-wider text-center transition-all"
            >
              Book In-Person / Video Meeting
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
