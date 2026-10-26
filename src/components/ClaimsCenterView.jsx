import React, { useState } from 'react';
import { 
  AlertCircle, Phone, Clock, FileCheck, ShieldAlert, UploadCloud, 
  CheckCircle2, ArrowRight, HelpCircle, FileText, Lock 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export default function ClaimsCenterView() {
  const [claimSubmitted, setClaimSubmitted] = useState(false);
  const [claimRef, setClaimRef] = useState('');
  const [claimData, setClaimData] = useState({
    policyHolder: '',
    policyNumber: '',
    claimType: 'Commercial Motor / Fleet',
    incidentDate: new Date().toISOString().split('T')[0],
    incidentLocation: 'Hamilton, New Zealand',
    description: '',
    policeNumber: '',
    contactPhone: '',
    contactEmail: ''
  });

  const handleSubmitClaim = (e) => {
    e.preventDefault();
    const ref = 'CLM-' + Math.floor(200000 + Math.random() * 800000);
    setClaimRef(ref);
    setClaimSubmitted(true);
  };

  return (
    <div className="py-12 lg:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
            <span>24/7 Dedicated Claims Advocacy Center</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            We Stand by You When It Matters Most
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Unlike direct insurance call centers where you are treated as a policy number, our team acts as your legal claims advocate to ensure underwriters assess and settle claims swiftly.
          </p>
        </div>

        {/* Emergency Alert Hotline Banner with Photo Accent */}
        <div className="relative overflow-hidden rounded-3xl bg-red-950 text-white border border-red-800 mb-12 shadow-2xl">
          <img 
            src="/images/claims-emergency.jpg" 
            alt="Emergency On-Site Claim Assistance" 
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-950 via-red-950/95 to-slate-950/80"></div>

          <div className="relative z-10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-red-700 text-red-100 flex items-center justify-center flex-shrink-0 animate-pulse shadow-lg">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <div className="text-xs uppercase font-extrabold text-red-300 tracking-wider">
                  Emergency 24/7 Loss Notification Line
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white mt-0.5 tracking-tight">
                  {COMPANY_INFO.claimsHotline}
                </div>
                <div className="text-xs text-red-200 mt-0.5">
                  For active fires, catastrophic flood damage, urgent vehicle towing, or emergency structural securing.
                </div>
              </div>
            </div>

            <a 
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-white text-red-950 font-extrabold text-xs uppercase tracking-wider hover:bg-red-50 text-center shadow-xl transition-all"
            >
              Call Duty Claims Broker Now
            </a>
          </div>
        </div>

        {/* 2-Column: 4 Golden Rules & Digital Claim Lodgement Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: What to do in an incident */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-navy-950 mb-4 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-brand-600" />
                <span>Incident Protocol: 4 Steps</span>
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-800 font-bold flex items-center justify-center flex-shrink-0">
                    1
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-800">Ensure Life Safety &amp; Mitigate Loss</h4>
                    <p className="text-slate-500 mt-0.5">
                      Check for injuries. Take reasonable steps to prevent further property damage (e.g. tarping a breached roof or isolating water mains).
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-800 font-bold flex items-center justify-center flex-shrink-0">
                    2
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-800">Do Not Admit Liability</h4>
                    <p className="text-slate-500 mt-0.5">
                      Never accept fault or promise payments to third parties on site. State that the matter is handled by your broker and insurer.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-800 font-bold flex items-center justify-center flex-shrink-0">
                    3
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-800">Document Everything</h4>
                    <p className="text-slate-500 mt-0.5">
                      Take date-stamped photographs, video recordings, collect third-party registration plates, driver license photos, and police report numbers.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-800 font-bold flex items-center justify-center flex-shrink-0">
                    4
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-800">Lodge Promptly with Angy's Finance</h4>
                    <p className="text-slate-500 mt-0.5">
                      Submit details through the form on the right or call our desk. We appoint loss adjusters and coordinate repairs on your behalf.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial highlight with photo avatar */}
            <div className="bg-brand-900 text-white rounded-3xl p-6 border border-brand-800 shadow-md">
              <div className="text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                Real Client Settlement Case
              </div>
              <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                "When our commercial warehouse suffered severe stormwater backflow during the cyclone, Angy's Finance had an assessor on site within 24 hours. The business interruption settlement allowed us to keep all 12 staff paid without dipping into reserves."
              </p>
              <div className="mt-4 flex items-center gap-3 pt-3 border-t border-brand-800">
                <img 
                  src="/images/avatar-hamish.jpg" 
                  alt="Hamish" 
                  className="w-10 h-10 rounded-full object-cover border border-brand-400"
                />
                <div className="text-xs">
                  <div className="font-bold text-white">Hamish MacIntyre</div>
                  <div className="text-brand-300">CEO, Freight Logistics Waikato</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Digital Claim Lodgement Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl">
            {claimSubmitted ? (
              <div className="text-center py-8 space-y-4 animate-in fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-navy-950">
                  Claim Lodgement Received
                </h3>
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-left max-w-md mx-auto space-y-2 text-xs">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Claim Incident Ref:</span>
                    <span className="font-mono font-bold text-brand-700 text-sm">{claimRef}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Policyholder:</span>
                    <span className="font-semibold text-slate-800">{claimData.policyHolder}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Claim Category:</span>
                    <span className="font-semibold text-slate-800">{claimData.claimType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Designated Claims Officer:</span>
                    <span className="font-semibold text-emerald-700">Hamish Boyd (Senior Claims Advocate)</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Your designated claims advocate has been notified and will review your file with the relevant underwriter (NZI, Vero, QBE, Chubb). You will receive SMS &amp; email updates as the claim progresses.
                </p>
                <button
                  onClick={() => setClaimSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-navy-950 text-white font-bold text-xs"
                >
                  Lodge Another Incident or Return
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitClaim} className="space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-xl font-extrabold text-navy-950">
                    Online Claim Lodgement
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill in known incident details. You do not need all documentation right now to initiate your claim.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Policyholder / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Transport Ltd or Jane Doe"
                      value={claimData.policyHolder}
                      onChange={(e) => setClaimData({ ...claimData, policyHolder: e.target.value })}
                      className="w-full text-xs font-medium border border-slate-300 rounded-xl p-2.5 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Policy Number / Broker Reference (if known)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. POL-84729 or unknown"
                      value={claimData.policyNumber}
                      onChange={(e) => setClaimData({ ...claimData, policyNumber: e.target.value })}
                      className="w-full text-xs font-medium border border-slate-300 rounded-xl p-2.5 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Claim Classification *
                    </label>
                    <select
                      value={claimData.claimType}
                      onChange={(e) => setClaimData({ ...claimData, claimType: e.target.value })}
                      className="w-full text-xs font-medium border border-slate-300 rounded-xl p-2.5 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                    >
                      <option value="Commercial Motor / Fleet">Commercial Motor / Fleet Accident</option>
                      <option value="Commercial Property & Damage">Commercial Building / Material Damage</option>
                      <option value="Public Liability Allegation">Public / Statutory Liability Claim</option>
                      <option value="Residential Home & Contents">Residential Home &amp; Contents Loss</option>
                      <option value="Tradies Tools & Contract Works">Contract Works &amp; Tool Theft</option>
                      <option value="Marine Cargo Damage">Marine Cargo &amp; Transit Loss</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Date of Incident *
                    </label>
                    <input
                      type="date"
                      required
                      value={claimData.incidentDate}
                      onChange={(e) => setClaimData({ ...claimData, incidentDate: e.target.value })}
                      className="w-full text-xs font-medium border border-slate-300 rounded-xl p-2.5 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Incident Location (Street / City)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 14 Victoria St, Hamilton Central"
                    value={claimData.incidentLocation}
                    onChange={(e) => setClaimData({ ...claimData, incidentLocation: e.target.value })}
                    className="w-full text-xs font-medium border border-slate-300 rounded-xl p-2.5 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Description of Loss / Circumstances *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Please outline what happened, property damaged, and any third party details involved..."
                    value={claimData.description}
                    onChange={(e) => setClaimData({ ...claimData, description: e.target.value })}
                    className="w-full text-xs font-medium border border-slate-300 rounded-xl p-2.5 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Primary Contact Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="022 393 4656"
                      value={claimData.contactPhone}
                      onChange={(e) => setClaimData({ ...claimData, contactPhone: e.target.value })}
                      className="w-full text-xs font-medium border border-slate-300 rounded-xl p-2.5 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Contact Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="claims-contact@domain.co.nz"
                      value={claimData.contactEmail}
                      onChange={(e) => setClaimData({ ...claimData, contactEmail: e.target.value })}
                      className="w-full text-xs font-medium border border-slate-300 rounded-xl p-2.5 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                </div>

                {/* Upload simulation */}
                <div className="p-4 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50 text-center hover:bg-slate-100/60 cursor-pointer transition-colors">
                  <UploadCloud className="w-6 h-6 text-slate-400 mx-auto mb-1" />
                  <div className="text-xs font-semibold text-slate-700">
                    Attach Photos, Invoices, or Police Report
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Drag and drop files here (JPG, PNG, PDF up to 25MB)
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-brand-600/30 flex items-center justify-center gap-2 transition-all"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Lodge Claim with Angy's Finance</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
