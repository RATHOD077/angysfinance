import React, { useState } from 'react';
import { 
  FileText, Calendar, Clock, ArrowRight, X, 
  Share2, Shield, CheckCircle2, Tag, Search,
  ChevronRight, BookOpen
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

// 6 real blog post images (Post-1 through Post-6) from angysfinance.co.nz/blog/
// Original titles were nursing-home care template — replaced with NZ Insurance topics
const BLOG_POSTS = [
  {
    id: 1,
    image: '/images/angys-original/Post-2.jpg',
    category: 'Commercial Insurance',
    date: 'September 15, 2026',
    readTime: '5 min read',
    title: 'Ensuring Peace of Mind: Public Liability Insurance for NZ Contractors',
    summary: 'New Zealand contractors face significant third-party injury and property damage exposures. Discover what a well-structured Public Liability policy covers, common exclusions, and how to ensure your coverage wording is enforceable at claim time.',
    body: `Public Liability insurance is one of the most fundamental safeguards for NZ businesses and sole traders. When a member of the public or a client suffers injury or property damage as a result of your business operations, you face the full financial weight of legal costs and compensation — unless you carry adequate cover.\n\nIn New Zealand, while ACC covers workplace injuries, it does not provide compensation for third-party property damage or legal defense costs arising from your business activities. This is where a well-structured Public Liability policy becomes essential.\n\nKey considerations for NZ contractors include:\n• Ensuring the coverage limit is appropriate for your contract values (many principal contracts require $2M minimum)\n• Checking for project-specific exclusions relating to defective workmanship\n• Understanding the difference between "occurrence-based" and "claims-made" triggers\n• Confirming broad-form property damage coverage including care, custody and control\n\nOur advisers at Angy's Finance will review your contractual requirements, operational footprint, and policy wordings to ensure your coverage is genuine protection — not just a compliance checkbox.`
  },
  {
    id: 2,
    image: '/images/angys-original/Post-5.jpg',
    category: 'Business Continuity',
    date: 'October 3, 2026',
    readTime: '7 min read',
    title: 'Celebrating Business Continuity: Business Interruption Insurance Explained',
    summary: 'A fire, a flood, or a major equipment failure can halt your revenue stream for months. Business Interruption insurance replaces lost profit and covers fixed costs during enforced closure — here\'s how to calculate your indemnity period correctly.',
    body: `Business Interruption (BI) insurance — also referred to as Business Income coverage — is the financial lifeline that keeps your enterprise viable when a physical damage event forces you to cease or reduce operations.\n\nUnlike Material Damage insurance which covers the cost of repairing or replacing your physical assets, BI covers the financial consequences: lost gross profit, ongoing fixed costs (rent, wages, loan repayments), and additional increased cost of working expenses.\n\nCritical parameters NZ business owners must understand:\n\n1. Indemnity Period: This is the maximum period for which BI benefits are paid. Many businesses underestimate how long a full recovery takes after a major loss event — particularly in construction or hospitality. 12 months is typically inadequate; 24-36 months is more realistic for medium-sized operations.\n\n2. Insured Gross Profit: This must be calculated correctly using your financial statements. Many businesses under-declare gross profit at renewal, resulting in average clauses being applied at claim time.\n\n3. Waiting Period: Most BI policies have a 72-hour waiting period before benefits commence.\n\nAngy's Finance will review your indemnity period, sum insured calculations, and dependent property exposures to ensure your BI coverage genuinely matches your enterprise risk profile.`
  },
  {
    id: 3,
    image: '/images/angys-original/Post-6.jpg',
    category: 'Claims Management',
    date: 'October 10, 2026',
    readTime: '4 min read',
    title: 'A Policy That Feels Like Home: How Claims Advocacy Works at Angy\'s Finance',
    summary: 'Filing an insurance claim should not be a battle. Our claims advocacy service manages the entire process — from First Notification of Loss to final settlement — ensuring you receive what you are genuinely entitled to under your policy wording.',
    body: `When a loss event occurs, most business owners are overwhelmed by the immediate operational challenges — restoring operations, managing staff, communicating with clients. The last thing you need is to simultaneously navigate complex insurer claim processes, loss adjuster appointments, and policy interpretation disputes.\n\nAt Angy's Finance, our claims advocacy service takes that entire burden off your hands.\n\nOur claims management process:\n\n1. First Notification of Loss (FNOL): We notify your insurer immediately, establishing the claim record and triggering the response obligations under your policy.\n\n2. Loss Adjuster Liaison: We attend loss adjuster inspections with you, ensuring all relevant evidence is presented and your interests are professionally represented.\n\n3. Quantum Review: We review the adjuster's quantification report and challenge any under-settlement positions with documented evidence.\n\n4. Final Settlement Negotiation: We negotiate on your behalf until a fair and complete settlement is achieved, including any Business Interruption or additional increased cost claims.\n\nOur clients consistently recover more through professional claims advocacy than they would managing the process alone. Contact us at 022 393 4656 to discuss any open claims.`
  },
  {
    id: 4,
    image: '/images/angys-original/Post-1.jpg',
    category: 'Employers Liability',
    date: 'August 22, 2026',
    readTime: '6 min read',
    title: 'Understanding Employers Liability: Every NZ Employer\'s Essential Shield',
    summary: 'ACC covers physical workplace injuries, but Employers Liability bridges the gap — covering legal costs when an employee brings a claim related to stress, discrimination, or other non-physical employment matters.',
    body: `Many New Zealand employers incorrectly assume that ACC coverage eliminates all employment-related liability exposure. While ACC provides no-fault compensation for physical injuries, it does not cover:\n\n• Mental injury claims (stress, anxiety, bullying, harassment)\n• Claims relating to discrimination under the Human Rights Act 1993\n• Legal defense costs even when the claim is ultimately unsuccessful\n• Awards made by the Employment Relations Authority or Employment Court\n\nEmployers Liability insurance bridges this gap, providing legal defense costs and indemnification for judgments arising from employment matters.\n\nKey coverage areas in a comprehensive NZ Employers Liability policy:\n• Wrongful termination and constructive dismissal claims\n• Workplace harassment and bullying allegations\n• Discrimination on grounds of sex, race, disability, or religion\n• Employment Relations Authority proceedings\n• Personal grievance defense costs\n\nThe risk exposure is particularly significant for businesses with high staff turnover, complex restructuring events, or operations in high-stress industries. Speak to our advisers about combining Employers Liability with Statutory Liability and Directors & Officers cover for comprehensive management protection.`
  },
  {
    id: 5,
    image: '/images/angys-original/Post-4.jpg',
    category: 'Domestic Insurance',
    date: 'October 18, 2026',
    readTime: '5 min read',
    title: 'Enhancing Quality of Life: Getting Your Home Sum Insured Right in NZ',
    summary: 'The post-earthquake and extreme weather environment has made accurate sum-insured home valuations critical for NZ homeowners. Underinsurance is now the single largest domestic claim dispute — here\'s how to protect yourself.',
    body: `Following the Canterbury earthquake sequence and successive severe weather events across New Zealand, the insurance industry shifted from replacement cost agreements to sum-insured home policies. This puts the onus squarely on homeowners to correctly estimate their property's full replacement cost.\n\nWhy underinsurance is a crisis issue in New Zealand:\n\nStudies suggest that up to 80% of NZ homes are underinsured relative to their true replacement cost. When a total loss occurs, many homeowners discover that their insured sum covers only a fraction of the actual rebuild cost — leaving them to fund hundreds of thousands of dollars personally.\n\nFactors that affect your correct sum insured:\n• Construction materials (concrete, brick, timber frame all have different rebuild costs)\n• Floor area (GFA including attached garages, decks, patios)\n• Architectural features and finishes\n• Site-specific challenges (slope access, distance from building suppliers)\n• Consent and compliance costs\n• Demolition and debris removal costs\n• Professional fees (architects, engineers, project managers)\n\nAngy's Finance recommends commissioning a formal replacement cost assessment from a registered quantity surveyor at least every 3 years, and ensuring your insured sum is indexed annually to the relevant construction cost index. Contact us to review your current dwelling schedule.`
  },
  {
    id: 6,
    image: '/images/angys-original/Post-3.jpg',
    category: 'Commercial Motor',
    date: 'September 28, 2026',
    readTime: '4 min read',
    title: 'Creating a Safe Fleet: Commercial Motor Insurance for NZ Transport Operators',
    summary: 'Operating a commercial fleet in New Zealand without the right motor policy exposes your business to catastrophic uninsured losses. From agreed vehicle values to business interruption extensions, here\'s what your fleet policy should include.',
    body: `Commercial Motor insurance for NZ transport operators, trades contractors, and courier businesses is considerably more complex than domestic private motor cover. The stakes are also significantly higher — a serious accident involving an uninsured commercial vehicle can result in a multi-million dollar third-party property damage or injury claim.\n\nKey coverage components every NZ fleet policy should include:\n\n1. Agreed Value vs Market Value: Commercial vehicles should always be insured on agreed value, not market value, to ensure full replacement coverage after a total loss without depreciation disputes.\n\n2. Third-Party Liability: Minimum $20M is recommended for heavy commercial vehicles, particularly those transporting hazardous goods or operating in high-traffic CBD environments.\n\n3. Downtime / Business Interruption Extension: Revenue loss during a vehicle repair period can significantly impact your business — a fleet downtime extension covers hired replacement vehicle costs and lost revenue.\n\n4. Driver Extensions: Ensure your policy covers all authorized drivers, including contractors, subcontractors, and any driver over a specified age threshold.\n\n5. Goods in Transit: If you are transporting client property or freight, a separate Marine Cargo / Goods in Transit endorsement may be required.\n\nOur fleet advisers at Angy's Finance will assess your vehicle schedule, driver profile, and operational routes to structure appropriate coverage with NZ's leading commercial motor underwriters.`
  }
];

const CATEGORIES = ['All', 'Commercial Insurance', 'Business Continuity', 'Claims Management', 'Employers Liability', 'Domestic Insurance', 'Commercial Motor'];

export default function BlogPage({ onNavigate }) {
  const [activeArticle, setActiveArticle] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(p => p.category === activeCategory);

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* 1. Breadcrumb Header */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs text-brand-600 font-semibold mb-1">
              <span>Home</span> <span className="text-slate-400">/</span> <span className="text-slate-700">Blog</span>
            </div>
            <h1 className="text-3xl font-extrabold text-navy-950 tracking-tight">
              Latest News
            </h1>
          </div>
          <div className="text-xs text-slate-500">
            Insurance &amp; Financial Insights for New Zealand
          </div>
        </div>

        {/* 2. Category Filter */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat 
                  ? 'bg-brand-600 text-white shadow-md' 
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. Featured Post (first post) — large card */}
        {activeCategory === 'All' && BLOG_POSTS[0] && (
          <div 
            className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-2 group cursor-pointer"
            onClick={() => setActiveArticle(BLOG_POSTS[0])}
          >
            <div className="relative overflow-hidden">
              <img 
                src={BLOG_POSTS[0].image}
                alt={BLOG_POSTS[0].title}
                className="w-full h-full min-h-[280px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-950/20"></div>
              <div className="absolute top-4 left-4">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-600 text-white shadow">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-8 sm:p-10 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-brand-50 text-brand-700">
                    {BLOG_POSTS[0].category}
                  </span>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {BLOG_POSTS[0].date}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy-950 group-hover:text-brand-600 transition-colors leading-snug">
                  {BLOG_POSTS[0].title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {BLOG_POSTS[0].summary}
                </p>
              </div>
              <div className="pt-6 flex items-center gap-2 text-brand-600 font-bold text-xs">
                <BookOpen className="w-4 h-4" />
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        )}

        {/* 4. Blog Grid — all 6 post images from live site */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeCategory === 'All' ? filteredPosts.slice(1) : filteredPosts).map(post => (
            <div 
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => setActiveArticle(post)}
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-brand-600 text-white shadow">
                      {post.category}
                    </span>
                    <span className="text-[11px] text-slate-200 bg-navy-950/70 px-2 py-0.5 rounded backdrop-blur-sm flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-base font-extrabold text-navy-950 group-hover:text-brand-600 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-5 border-t border-slate-100 pt-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-800">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 5. Article Reader Modal */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-2xl w-full overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={activeArticle.image} 
                  alt={activeArticle.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent"></div>
                <button 
                  onClick={() => setActiveArticle(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-navy-950/70 text-white hover:bg-navy-900 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-brand-600 text-white shadow">
                    {activeArticle.category}
                  </span>
                  <h2 className="text-xl font-extrabold text-white mt-2 leading-snug">
                    {activeArticle.title}
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-4">
                <div className="flex items-center gap-3 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {activeArticle.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {activeArticle.readTime}</span>
                </div>
                <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                  {activeArticle.body}
                </div>
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => { setActiveArticle(null); onNavigate('contact'); }}
                    className="flex-1 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs uppercase tracking-wider shadow transition-all"
                  >
                    Speak with an Adviser
                  </button>
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="flex-1 py-3 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs uppercase tracking-wider hover:bg-slate-50 transition-all"
                  >
                    Back to Blog
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
