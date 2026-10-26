import React, { useState } from 'react';
import { 
  Calendar, Clock, Video, Phone, MapPin, CheckCircle2, 
  User, Mail, ArrowRight, ShieldCheck, Award, Sparkles,
  Star, ChevronDown, ChevronUp, Shield, FileText
} from 'lucide-react';
import { COMPANY_INFO, ALL_SERVICES } from '../data/mockData';

// FAQ data matching "You Can Find All Answers Here" from angysfinance.co.nz/appointment/
const FAQS = [
  {
    q: 'How do I start a new insurance policy with Angy\'s Finance?',
    a: 'Simply book a consultation — in-person at our Hamilton HQ (Peachgrove Road), by phone, or via video call. Our adviser will assess your current situation, identify coverage gaps, and source competitive market quotes from Vero, NZI, QBE, Chubb, and Delta within 24–48 hours.'
  },
  {
    q: 'What steps should I take to make a claims notification?',
    a: 'Contact us immediately on 022 393 4656 (24/7 emergency claims line). We will log the incident, provide your insurer with the required First Notification of Loss (FNOL), and manage the loss adjuster process on your behalf from start to final settlement.'
  },
  {
    q: 'How do I choose the right commercial insurance for my NZ business?',
    a: 'Start by understanding your exposures: Employers Liability is compulsory for all NZ employers, while Public and Statutory Liability protect against third-party claims. Our advisers conduct a full risk audit of your operations, assets, and contractual obligations before recommending a multi-line policy structure.'
  },
  {
    q: 'Can I renew or restructure my existing policy mid-term?',
    a: 'Yes. Many policyholders approach us after experiencing inadequate insurer response at claim time. We can review your existing wordings, identify exclusions or sub-limits that expose you to risk, and facilitate an endorsement or transfer at next renewal — often with no break in cover.'
  },
  {
    q: 'Do you service clients outside of Hamilton and Auckland?',
    a: 'Absolutely. We service businesses and homeowners nationwide across New Zealand. In-person consultations are available across the North Island; video and phone consultations are available for all regions including Wellington, Christchurch, and rural areas.'
  }
];

// Why Choose Us cards matching "Quality Of Care Services", "Satisfaction Guarantee", "24/7 Home Care Services"
// from angysfinance.co.nz/appointment/ — with real images pic-19, pic-20, pic-21
const WHY_CHOOSE_US = [
  {
    image: '/images/angys-original/pic-19.png',
    title: 'Quality of Advisory Services',
    desc: 'Every recommendation made by our advisers is backed by comprehensive market analysis, ensuring you access the best coverage at fair market premiums.',
    badge: 'Precision'
  },
  {
    image: '/images/angys-original/pic-20.png',
    title: 'Satisfaction Guarantee',
    desc: 'If we cannot improve your coverage or pricing compared to your existing insurer, we will tell you honestly. No pressure, no opaque commission motives.',
    badge: 'Transparent'
  },
  {
    image: '/images/angys-original/pic-21.png',
    title: '24/7 Claims & Emergency Desk',
    desc: 'When disaster strikes outside business hours, our emergency claims desk is available around the clock to file FNOL and coordinate urgent loss adjuster attendance.',
    badge: 'Always On'
  }
];

export default function AppointmentPage({ onNavigate }) {
  const [booked, setBooked] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [formData, setFormData] = useState({
    service: 'Public Liability',
    format: 'In-Person (Hamilton HQ / Auckland)',
    date: '',
    timeSlot: '10:00 AM - 10:45 AM',
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = 'BK-' + Math.floor(10000 + Math.random() * 90000);
    setBookingRef(ref);
    setBooked(true);
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 1. Breadcrumb Header */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs text-brand-600 font-semibold mb-1">
              <span>Home</span> <span className="text-slate-400">/</span> <span className="text-slate-700">Appointment</span>
            </div>
            <h1 className="text-3xl font-extrabold text-navy-950 tracking-tight">
              Make an Appointment
            </h1>
          </div>
          <div className="text-xs text-slate-500">
            Emergency Desk: <strong className="text-brand-700">{COMPANY_INFO.phoneDisplay}</strong>
          </div>
        </div>

        {/* 2. Hero Banner with pic-7.jpg + tagline matching "Compassionate Care Is What We Provide" */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 min-h-[240px] flex items-center">
          <img 
            src="/images/angys-original/pic-7.jpg"
            alt="Book Appointment Angy's Finance NZ"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-brand-900/60"></div>
          <div className="relative z-10 p-8 sm:p-12 max-w-2xl text-white space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400">
              Appointment
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              We Spread Care to Provide Quality Life
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Book a no-obligation consultation with a registered Angy's Finance adviser — in-person at Hamilton HQ, by phone, or via video call across New Zealand.
            </p>
          </div>
        </div>

        {/* 3. "Book Visit Now" — 2-column: Form + Why Choose Us */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl">
            {booked ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-navy-950">
                  Appointment Confirmed!
                </h3>
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-left max-w-md mx-auto space-y-2 text-xs">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Booking Reference:</span>
                    <span className="font-mono font-bold text-brand-700 text-sm">{bookingRef}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Service:</span>
                    <span className="font-semibold text-slate-800">{formData.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Date &amp; Time:</span>
                    <span className="font-semibold text-slate-800">{formData.date} @ {formData.timeSlot}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Format:</span>
                    <span className="font-semibold text-slate-800">{formData.format}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Client:</span>
                    <span className="font-semibold text-slate-800">{formData.clientName}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  A confirmation has been dispatched to {formData.clientEmail}. Our adviser will contact you shortly.
                </p>
                <button
                  onClick={() => setBooked(false)}
                  className="px-6 py-2.5 rounded-xl bg-navy-950 text-white font-bold text-xs"
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-brand-700">
                    Book Visit Now
                  </span>
                  <h2 className="text-2xl font-extrabold text-navy-950 mt-1">
                    Schedule Your Insurance Consultation
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Select your preferred consultation time with a registered Angy's Finance adviser.
                  </p>
                </div>

                {/* Insurance Line */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Insurance / Financial Line *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full text-xs font-medium border border-slate-300 rounded-xl p-3 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                  >
                    {ALL_SERVICES.map(srv => (
                      <option key={srv.id} value={srv.title}>{srv.title} ({srv.category})</option>
                    ))}
                  </select>
                </div>

                {/* Format Picker */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Consultation Format *
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {[
                      { id: 'In-Person (Hamilton HQ / Auckland)', icon: MapPin, label: 'In-Person' },
                      { id: 'Phone Consultation', icon: Phone, label: 'Phone Call' },
                      { id: 'Video Call (Zoom / Google Meet)', icon: Video, label: 'Video Call' }
                    ].map((m) => {
                      const Icon = m.icon;
                      const isSelected = formData.format === m.id;
                      return (
                        <button
                          type="button"
                          key={m.id}
                          onClick={() => setFormData({ ...formData, format: m.id })}
                          className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all ${
                            isSelected 
                              ? 'border-brand-600 bg-brand-50 text-brand-700 font-bold ring-2 ring-brand-500/30' 
                              : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          <span className="text-[11px]">{m.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Date + Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Date *</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full text-xs font-medium border border-slate-300 rounded-xl p-3 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Time Slot *</label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full text-xs font-medium border border-slate-300 rounded-xl p-3 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                    >
                      <option value="9:00 AM - 9:45 AM">9:00 AM – 9:45 AM</option>
                      <option value="10:00 AM - 10:45 AM">10:00 AM – 10:45 AM</option>
                      <option value="11:00 AM - 11:45 AM">11:00 AM – 11:45 AM</option>
                      <option value="1:30 PM - 2:15 PM">1:30 PM – 2:15 PM</option>
                      <option value="3:00 PM - 3:45 PM">3:00 PM – 3:45 PM</option>
                      <option value="4:30 PM - 5:15 PM">4:30 PM – 5:15 PM</option>
                    </select>
                  </div>
                </div>

                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Henderson"
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      className="w-full text-xs font-medium border border-slate-300 rounded-xl p-3 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Mobile *</label>
                    <input
                      type="tel"
                      required
                      placeholder="022 393 4656"
                      value={formData.clientPhone}
                      onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                      className="w-full text-xs font-medium border border-slate-300 rounded-xl p-3 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.co.nz"
                    value={formData.clientEmail}
                    onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                    className="w-full text-xs font-medium border border-slate-300 rounded-xl p-3 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Specific Notes / Existing Policy Renewal Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your specific risks, current renewal date, or questions..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full text-xs font-medium border border-slate-300 rounded-xl p-3 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-brand-600/30 flex items-center justify-center gap-2 transition-all"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confirm Consultation Booking</span>
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: Why Choose Us with pic-32.jpg from appointment page */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md">
              <img 
                src="/images/angys-original/pic-32.jpg"
                alt="Why Choose Angy's Finance Appointment"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 space-y-3">
                <span className="text-[10px] uppercase font-bold text-brand-700 tracking-wider">
                  Why Choose Angy's Finance
                </span>
                <h3 className="text-lg font-bold text-navy-950">
                  We Spread Care to Provide Quality Life
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every appointment ends with a clear, actionable advisory report. You receive total transparency on premiums, policy terms, and coverage gaps — no jargon, no pressure.
                </p>
              </div>
            </div>

            <div className="bg-navy-950 text-white rounded-3xl p-6 border border-navy-800 shadow-sm space-y-3">
              <div className="text-amber-400 text-xs font-bold uppercase tracking-wider">Direct Contact</div>
              <div className="text-lg font-bold text-white">Need Immediate Help?</div>
              <div className="text-xs text-slate-300">
                Call our direct advisory line at{' '}
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-white font-bold underline">
                  {COMPANY_INFO.phoneDisplay}
                </a>
                {' '}or email{' '}
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-amber-300 font-semibold">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Why Choose Us — 3 cards with pic-19, pic-20, pic-21 matching live appointment page */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-extrabold uppercase tracking-wider text-brand-700">Why Choose Us</span>
            <h2 className="text-2xl font-extrabold text-navy-950">
              We Spread Care to Provide Quality Life
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <div key={item.title} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all group">
                <div className="relative h-48 overflow-hidden bg-slate-50 flex items-center justify-center p-4">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="h-full w-auto object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-100 text-brand-700">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-sm font-extrabold text-navy-950 group-hover:text-brand-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. FAQ Section — matching "You Can Find All Answers Here" from live page */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-extrabold uppercase tracking-wider text-brand-700">FAQ</span>
            <h2 className="text-2xl font-extrabold text-navy-950 mt-1">
              You Can Find All Answers Here
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Common questions about insurance advisory, policy reviews, and claims management in New Zealand.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm font-bold text-navy-950 pr-4">{faq.q}</span>
                  {expandedFaq === idx 
                    ? <ChevronUp className="w-4 h-4 text-brand-600 flex-shrink-0" />
                    : <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  }
                </button>
                {expandedFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
