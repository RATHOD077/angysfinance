import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle2, 
  Send, ShieldCheck, Building2, HelpCircle 
} from 'lucide-react';
import { COMPANY_INFO, FAQS } from '../data/mockData';

export default function ContactView({ onOpenAppointment }) {
  const [formSent, setFormSent] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Commercial Insurance Review',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="py-12 lg:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-brand-600" />
            <span>Connect with our New Zealand Advisory Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            We Are Ready to Assist You
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Reach out directly to speak with an accredited insurance broker or mortgage specialist. Consultations are available in-person across Waikato &amp; Auckland, or via secure nationwide video call.
          </p>
        </div>

        {/* 2-Column: Office Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Direct Contact Info with Visual Badges */}
          <div className="lg:col-span-5 space-y-5">
            {/* Primary Office Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-950 text-base">
                    Hamilton Headquarters &amp; Registered Office
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {COMPANY_INFO.registeredAddress}
                  </p>
                  <div className="text-[11px] font-semibold text-brand-700 mt-1">
                    NZBN: {COMPANY_INFO.nzbn}
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-950 text-sm">
                    Auckland Client Consultation Suite
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {COMPANY_INFO.aucklandOffice}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Phone & Email Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-slate-500">Direct Office Mobile</div>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="font-bold text-slate-900 text-sm hover:text-brand-600">
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-slate-100 pt-3">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-slate-500">Corporate Enquiries</div>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="font-bold text-slate-900 hover:text-brand-600">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-slate-100 pt-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-slate-500">Operating Hours</div>
                  <div className="font-semibold text-slate-800">
                    {COMPANY_INFO.hours}
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Banner with Photo Background */}
            <div className="relative overflow-hidden rounded-3xl text-white border border-navy-800 shadow-lg text-xs">
              <img 
                src="/images/corporate-office.jpg" 
                alt="Office Consultation" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-brand-950/90"></div>
              
              <div className="relative z-10 p-6">
                <div className="font-bold text-sm text-white mb-1">
                  Prefer a Scheduled Strategy Session?
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Choose a guaranteed 30-minute window for an in-depth policy review or mortgage assessment.
                </p>
                <button
                  onClick={onOpenAppointment}
                  className="w-full py-2.5 px-4 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-bold uppercase tracking-wider text-center transition-all shadow"
                >
                  Launch Advisor Booking Calendar
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl">
            {formSent ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-navy-950">
                  Message Transmitted Successfully!
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you, {contactData.name}. Your inquiry has been routed to our duty adviser. We will reply to {contactData.email} within 2 business hours.
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="px-6 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-xl font-extrabold text-navy-950">
                    Send an Advisory Inquiry
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Our registered advisers reply within 2 hours during normal business operations.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Williams"
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      className="w-full text-xs font-medium border border-slate-300 rounded-xl p-2.5 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Contact Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="021 555 1234"
                      value={contactData.phone}
                      onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                      className="w-full text-xs font-medium border border-slate-300 rounded-xl p-2.5 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="david@company.co.nz"
                      value={contactData.email}
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      className="w-full text-xs font-medium border border-slate-300 rounded-xl p-2.5 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Inquiry Subject
                    </label>
                    <select
                      value={contactData.subject}
                      onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                      className="w-full text-xs font-medium border border-slate-300 rounded-xl p-2.5 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                    >
                      <option value="Commercial Insurance Review">Commercial Insurance Audit</option>
                      <option value="Commercial Fleet Cover">Transport / Fleet Coverage</option>
                      <option value="Home & Contents Package">Home &amp; Contents Insurance</option>
                      <option value="Mortgage Pre-Approval & Refix">Mortgage Advice / Refixing</option>
                      <option value="Urgent Claims Support">Existing Policy Claims Support</option>
                      <option value="General Corporate Inquiry">Other General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Message / Situation Overview *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details on your current policy, business operations, or mortgage goals..."
                    value={contactData.message}
                    onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                    className="w-full text-xs font-medium border border-slate-300 rounded-xl p-2.5 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-brand-600/30 flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Advisory Team</span>
                  </button>
                </div>

                <div className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5 pt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Protected by New Zealand Privacy Act 2020. No third-party spam.</span>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* FAQs */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-extrabold uppercase tracking-wider text-brand-700">
              Clear Answers
            </span>
            <h3 className="text-2xl font-extrabold text-navy-950 mt-1">
              Frequently Asked Questions by New Zealand Clients
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS.map((faq, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h4 className="text-sm font-bold text-navy-950 flex items-start gap-2 mb-2">
                  <HelpCircle className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
