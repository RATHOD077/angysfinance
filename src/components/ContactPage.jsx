import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle2, 
  Send, ShieldCheck, Building2, HelpCircle, Globe2, ExternalLink
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export default function ContactPage() {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
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
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* 1. Breadcrumb Header */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs text-brand-600 font-semibold mb-1">
              <span>Home</span> <span className="text-slate-400">/</span> <span className="text-slate-700">Contact</span>
            </div>
            <h1 className="text-3xl font-extrabold text-navy-950 tracking-tight">
              Contact Us
            </h1>
          </div>
          <div className="text-xs text-slate-500">
            NZBN: <strong className="text-slate-800">{COMPANY_INFO.nzbn}</strong> • Hamilton &amp; Auckland Desks
          </div>
        </div>

        {/* 2. 4 Contact Info Cards — matching "Office Address", "Phone Number", "Office Email", "Working Hour" from live site */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Office Address */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-300 transition-all group">
            <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4 group-hover:bg-brand-600 group-hover:text-white transition-all">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-extrabold text-navy-950 uppercase tracking-wider mb-2">
              Office Address
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {COMPANY_INFO.registeredAddress}
            </p>
            <div className="mt-2 text-[11px] font-semibold text-brand-600">
              Hamilton HQ (Fairfield)
            </div>
          </div>

          {/* Phone Number */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all group">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-extrabold text-navy-950 uppercase tracking-wider mb-2">
              Phone Number
            </h3>
            <a 
              href={`tel:${COMPANY_INFO.phone}`}
              className="text-sm font-bold text-slate-800 hover:text-brand-600 block"
            >
              {COMPANY_INFO.phoneDisplay}
            </a>
            <div className="mt-1 text-[11px] text-slate-500">
              Direct Mobile &amp; WhatsApp
            </div>
            <div className="mt-1 text-[11px] font-semibold text-emerald-700">
              24/7 Emergency Claims Line
            </div>
          </div>

          {/* Office Email */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-extrabold text-navy-950 uppercase tracking-wider mb-2">
              Office Email
            </h3>
            <a 
              href={`mailto:${COMPANY_INFO.email}`}
              className="text-xs font-bold text-slate-800 hover:text-brand-600 block truncate"
            >
              {COMPANY_INFO.email}
            </a>
            <div className="mt-1 text-[11px] text-slate-500">
              {COMPANY_INFO.corporateEmail}
            </div>
          </div>

          {/* Working Hour */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all group">
            <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition-all">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-extrabold text-navy-950 uppercase tracking-wider mb-2">
              Working Hour
            </h3>
            <p className="text-xs text-slate-700 font-semibold">
              8:30 AM – 5:30 PM
            </p>
            <p className="text-xs text-slate-500">Monday – Friday</p>
            <div className="mt-2 text-[11px] font-bold text-red-600">
              Emergency Claims 24/7
            </div>
          </div>
        </div>

        {/* 3. Main "Get in Touch with Us!" section + contact form */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Office details matching live contact page "Main Office" + "LA Office" structure */}
          {/* Replaced with Hamilton HQ + Auckland Consultation Suite (NZ-localized) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-700">
                Contact Us
              </span>
              <h2 className="text-3xl font-extrabold text-navy-950 tracking-tight mt-1">
                Get in Touch with Us!
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                Whether you need commercial liability advice, a fleet policy review, or sum-insured protection for your home — our registered New Zealand advisers are here to help.
              </p>
            </div>

            {/* Hamilton Main Office */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="font-bold text-navy-950 flex items-center gap-2 text-sm">
                <Building2 className="w-4 h-4 text-brand-600" />
                <span>Main Office — Hamilton HQ</span>
              </div>
              <div className="text-xs text-slate-600 space-y-1.5">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.registeredAddress}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phone}`} className="font-bold text-slate-800 hover:text-brand-600">
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-600 hover:text-brand-600">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Auckland Office */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="font-bold text-navy-950 flex items-center gap-2 text-sm">
                <Building2 className="w-4 h-4 text-brand-600" />
                <span>Auckland CBD Consultation Suite</span>
              </div>
              <div className="text-xs text-slate-600 space-y-1.5">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.aucklandOffice}</span>
                </div>
                <div className="text-[11px] text-slate-400 italic">
                  Available by prior appointment for corporate policy reviews.
                </div>
              </div>
            </div>

            {/* Emergency Desk */}
            <div className="p-5 rounded-2xl bg-navy-950 text-white space-y-2">
              <div className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                Emergency Claims 24/7
              </div>
              <div className="text-sm font-bold">
                {COMPANY_INFO.claimsHotline}
              </div>
              <div className="text-[11px] text-slate-300">
                After-hours emergency loss notification and urgent claims triage.
              </div>
            </div>

            {/* Google Maps embed placeholder with address */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 h-40 flex items-center justify-center">
              <a 
                href="https://maps.google.com/?q=338+Peachgrove+Road,+Fairfield,+Hamilton,+New+Zealand"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-slate-500 hover:text-brand-600 transition-colors"
              >
                <Globe2 className="w-8 h-8" />
                <span className="text-xs font-semibold">View on Google Maps</span>
                <span className="text-[11px] text-slate-400">338 Peachgrove Rd, Fairfield, Hamilton</span>
                <span className="text-[10px] flex items-center gap-1 text-brand-600 font-bold">
                  Open Maps <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT: Interactive Contact Form */}
          <div className="lg:col-span-7">
            {formSent ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-navy-950">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you, {formData.name}. Your inquiry has been routed to our duty adviser. We will reply to {formData.email} within 2 business hours.
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="px-6 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs shadow"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="text-lg font-extrabold text-navy-950">Send us a Message</h3>
                  <p className="text-xs text-slate-500 mt-1">We respond to all inquiries within 2 business hours.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Williams"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs font-medium border border-slate-300 rounded-xl p-3 bg-white focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Mobile *</label>
                    <input
                      type="tel"
                      required
                      placeholder="022 393 4656"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs font-medium border border-slate-300 rounded-xl p-3 bg-white focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="david@company.co.nz"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs font-medium border border-slate-300 rounded-xl p-3 bg-white focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Inquiry Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full text-xs font-medium border border-slate-300 rounded-xl p-3 bg-white focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                    >
                      <option>Commercial Insurance Review</option>
                      <option>Employers &amp; Statutory Liability</option>
                      <option>Commercial Motor &amp; Fleet</option>
                      <option>Home &amp; Contents Insurance</option>
                      <option>Business Interruption &amp; Building</option>
                      <option>Directors &amp; Officers Liability</option>
                      <option>Claims Assistance</option>
                      <option>Other General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Message / Situation Overview *</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Describe your current policy situation, specific risk exposures, or questions. The more detail you provide, the faster we can assist..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs font-medium border border-slate-300 rounded-xl p-3 bg-white focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-brand-600/30 flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Message to Advisers</span>
                </button>

                <div className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Protected by NZ Privacy Act 2020. Strictly confidential advisory communication.</span>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
