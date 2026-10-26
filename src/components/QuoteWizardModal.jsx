import React, { useState } from 'react';
import { 
  X, Check, ArrowRight, ArrowLeft, Shield, Calculator, 
  Building, Car, Home, DollarSign, CheckCircle2, Phone, Mail, MapPin 
} from 'lucide-react';
import { NZ_REGIONS, COMPANY_INFO } from '../data/mockData';

export default function QuoteWizardModal({ isOpen, onClose, initialType = 'commercial' }) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  const [formData, setFormData] = useState({
    stream: initialType || 'commercial',
    subType: 'public-liability',
    coverageAmount: '2000000',
    entityName: '',
    industry: 'Construction & Trades',
    region: 'Waikato / Hamilton',
    fullName: '',
    email: '',
    phone: '',
    notes: '',
    urgency: 'Standard (24-48 hrs)'
  });

  if (!isOpen) return null;

  const handleStreamSelect = (stream) => {
    setFormData(prev => ({ ...prev, stream }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = 'AFNZ-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceCode(code);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-2xl w-full overflow-hidden transition-all duration-200 animate-in fade-in zoom-in-95">
        
        {/* Modal Header with Real Company Logo */}
        <div className="bg-gradient-to-r from-navy-950 to-brand-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={COMPANY_INFO.logoSrc} 
              alt="Angy's Finance" 
              className="h-9 w-auto object-contain bg-white/10 p-0.5 rounded-lg"
            />
            <div>
              <h3 className="text-base font-bold text-white leading-tight">
                Angy's Finance Quote &amp; Advice Intake
              </h3>
              <p className="text-[11px] text-slate-300">
                New Zealand Regulatory Standard Quotation Workflow (NZBN {COMPANY_INFO.nzbn})
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        {!isSubmitted && (
          <div className="bg-slate-50 px-6 py-3 border-b border-slate-200/80 flex items-center justify-between text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-1.5">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? 'bg-brand-600 text-white' : 'bg-slate-200 text-slate-500'}`}>1</span>
              <span className={step >= 1 ? 'text-brand-700 font-bold' : ''}>Policy Line</span>
            </div>
            <div className="h-0.5 w-8 bg-slate-200"></div>
            <div className="flex items-center gap-1.5">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-brand-600 text-white' : 'bg-slate-200 text-slate-500'}`}>2</span>
              <span className={step >= 2 ? 'text-brand-700 font-bold' : ''}>Scope &amp; Sum</span>
            </div>
            <div className="h-0.5 w-8 bg-slate-200"></div>
            <div className="flex items-center gap-1.5">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 3 ? 'bg-brand-600 text-white' : 'bg-slate-200 text-slate-500'}`}>3</span>
              <span className={step >= 3 ? 'text-brand-700 font-bold' : ''}>Entity &amp; NZ Region</span>
            </div>
            <div className="h-0.5 w-8 bg-slate-200"></div>
            <div className="flex items-center gap-1.5">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 4 ? 'bg-brand-600 text-white' : 'bg-slate-200 text-slate-500'}`}>4</span>
              <span className={step >= 4 ? 'text-brand-700 font-bold' : ''}>Contact</span>
            </div>
          </div>
        )}

        {/* Body Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-navy-950">
                Quotation Request Lodged Successfully!
              </h4>
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-left max-w-md mx-auto space-y-2 text-xs">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Official Lodgement Ref:</span>
                  <span className="font-mono font-bold text-brand-700 text-sm">{referenceCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Selected Product:</span>
                  <span className="font-bold text-slate-800 capitalize">{formData.stream}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Assigned Broker Office:</span>
                  <span className="font-semibold text-slate-800">Hamilton &amp; Auckland Advisory Desk</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Applicant:</span>
                  <span className="font-semibold text-slate-800">{formData.fullName} ({formData.phone})</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                A certified Financial Advice Provider from Angy's Finance will review underwriter pricing across Vero, NZI, QBE, or major lenders and reach out to you within the requested timeframe.
              </p>
              <div className="pt-3">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow transition-all"
                >
                  Close &amp; Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* STEP 1: Stream Selection */}
              {step === 1 && (
                <div className="space-y-4">
                  <div className="text-sm font-bold text-slate-800">
                    Step 1: Select the primary insurance or finance coverage:
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'commercial', title: 'Commercial Liability & Risk', icon: Shield, desc: 'Public liability, statutory defense, employers liability' },
                      { id: 'fleet', title: 'Fleet & Heavy Commercial Transport', icon: Car, desc: 'Transport fleets, trucks, couriers, trade utes' },
                      { id: 'property', title: 'Commercial Property & Interruption', icon: Building, desc: 'Buildings, plant, machinery, stock & gross profit' },
                      { id: 'trades', title: 'Builders & Tradies Pack', icon: Shield, desc: 'Contract works, tools in transit, sub-trade liability' },
                      { id: 'domestic', title: 'Home, Contents & Landlord', icon: Home, desc: 'Private dwellings, high-value contents, tenancy loss' },
                      { id: 'mortgage', title: 'Home Loan & Mortgage Advisory', icon: DollarSign, desc: 'First home Kiwisaver, bank refixing, investment loans' }
                    ].map((item) => {
                      const Icon = item.icon;
                      const selected = formData.stream === item.id;
                      return (
                        <div
                          key={item.id}
                          onClick={() => handleStreamSelect(item.id)}
                          className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                            selected 
                              ? 'border-brand-600 bg-brand-50/50 shadow-sm' 
                              : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-sm font-bold text-slate-800 flex items-center gap-2">
                              <Icon className={`w-4 h-4 ${selected ? 'text-brand-600' : 'text-slate-400'}`} />
                              {item.title}
                            </span>
                            {selected && <Check className="w-4 h-4 text-brand-600 font-bold" />}
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: Scope & Values */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="text-sm font-bold text-slate-800">
                    Step 2: Coverage Parameters &amp; Values:
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {formData.stream === 'mortgage' ? 'Estimated Loan Amount Needed (NZD)' : 'Estimated Sum Insured / Public Liability Limit'}
                    </label>
                    <select
                      value={formData.coverageAmount}
                      onChange={(e) => setFormData({ ...formData, coverageAmount: e.target.value })}
                      className="w-full text-xs font-medium border border-slate-300 rounded-xl p-2.5 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                    >
                      <option value="500000">NZ$ 500,000</option>
                      <option value="1000000">NZ$ 1,000,000</option>
                      <option value="2000000">NZ$ 2,000,000 (Standard Commercial)</option>
                      <option value="5000000">NZ$ 5,000,000 (Large Enterprise)</option>
                      <option value="10000000">NZ$ 10,000,000+ (Specialist / High Risk)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Primary Industry / Sector
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full text-xs font-medium border border-slate-300 rounded-xl p-2.5 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                    >
                      <option value="Construction & Trades">Construction, Carpentry &amp; Trades</option>
                      <option value="Transport & Logistics">Transport, Courier &amp; Heavy Freight</option>
                      <option value="Professional Services">Legal, Accounting &amp; IT Consultancy</option>
                      <option value="Hospitality & Retail">Hospitality, Café, Restaurant &amp; Retail</option>
                      <option value="Manufacturing & Warehousing">Manufacturing &amp; Storage</option>
                      <option value="Residential Property">Residential Homeowner / Landlord</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Specific Notes or Current Policy Renewal Date
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Existing policy expiring in 3 weeks, need comparison with NZI or Vero"
                      className="w-full text-xs font-medium border border-slate-300 rounded-xl p-2.5 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: Entity & Region */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="text-sm font-bold text-slate-800">
                    Step 3: Business Entity &amp; New Zealand Location:
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Registered Company Name / Trading Name (or Individual)
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Waikato Civil Works Ltd or John Smith"
                      value={formData.entityName}
                      onChange={(e) => setFormData({ ...formData, entityName: e.target.value })}
                      className="w-full text-xs font-medium border border-slate-300 rounded-xl p-2.5 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      New Zealand Region / Territory
                    </label>
                    <select
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className="w-full text-xs font-medium border border-slate-300 rounded-xl p-2.5 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                    >
                      {NZ_REGIONS.map((region, idx) => (
                        <option key={idx} value={region}>{region}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Review Priority / Urgency
                    </label>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      {['Standard (24-48 hrs)', 'Urgent (Same-Day / Pending Renewal)'].map((u) => (
                        <button
                          type="button"
                          key={u}
                          onClick={() => setFormData({ ...formData, urgency: u })}
                          className={`p-2.5 rounded-xl border text-center font-medium ${
                            formData.urgency === u 
                              ? 'border-brand-600 bg-brand-50 text-brand-700 font-bold' 
                              : 'border-slate-200 text-slate-600'
                          }`}
                        >
                          {u}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Contact Information */}
              {step === 4 && (
                <div className="space-y-4">
                  <div className="text-sm font-bold text-slate-800">
                    Step 4: Contact Details for Disclosure &amp; Policy Schedule Delivery:
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rachel Taylor"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full text-xs font-medium border border-slate-300 rounded-xl p-2.5 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        NZ Contact Phone / Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="021 234 5678 or 07 834 1234"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs font-medium border border-slate-300 rounded-xl p-2.5 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="rachel@domain.co.nz"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs font-medium border border-slate-300 rounded-xl p-2.5 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-500 flex items-start gap-2">
                    <Shield className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Privacy Act 2020 &amp; FMA Assurance:</strong> Your details will be handled strictly in confidence by Angy's Finance Limited (NZBN {COMPANY_INFO.nzbn}). We do not distribute your information to unsolicited third-party lead generators.
                    </span>
                  </div>
                </div>
              )}

              {/* Navigation Actions */}
              <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div></div>
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl shadow transition-all"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-lg shadow-emerald-600/30 transition-all"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Submit Request to Broker</span>
                  </button>
                )}
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
