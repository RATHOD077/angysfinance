import React, { useState } from 'react';
import { 
  X, Calendar, Clock, Video, Phone, MapPin, CheckCircle2, 
  User, Mail, ArrowRight, ShieldCheck 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export default function AppointmentModal({ isOpen, onClose }) {
  const [booked, setBooked] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [bookingData, setBookingData] = useState({
    advisorType: 'Commercial Risk Specialist',
    meetingFormat: 'Video Call (Google Meet / Zoom)',
    date: '2026-10-28',
    timeSlot: '10:00 AM - 10:45 AM',
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    agenda: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = 'BK-' + Math.floor(10000 + Math.random() * 90000);
    setBookingRef(ref);
    setBooked(true);
  };

  const handleReset = () => {
    setBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-xl w-full overflow-hidden transition-all duration-200 animate-in fade-in zoom-in-95">
        
        {/* Header with Authentic Brandmark */}
        <div className="bg-gradient-to-r from-navy-950 to-brand-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={COMPANY_INFO.logoSrc} 
              alt="Angy's Finance" 
              className="h-8 w-auto object-contain bg-white/10 p-0.5 rounded"
            />
            <div>
              <h3 className="text-base font-bold text-white leading-tight">
                Schedule an Advisory Session
              </h3>
              <p className="text-[11px] text-slate-300">
                1-on-1 with an Accredited New Zealand Financial Adviser
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {booked ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-navy-950">
                Appointment Confirmed!
              </h4>
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-left max-w-md mx-auto space-y-2 text-xs">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Booking Reference:</span>
                  <span className="font-mono font-bold text-brand-700">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Date &amp; Time:</span>
                  <span className="font-semibold text-slate-800">{bookingData.date} @ {bookingData.timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Format:</span>
                  <span className="font-semibold text-slate-800">{bookingData.meetingFormat}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Adviser Desk:</span>
                  <span className="font-semibold text-slate-800">{bookingData.advisorType}</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                A calendar invite with video link and dial-in details has been dispatched to {bookingData.clientEmail}.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-brand-600 text-white font-bold text-xs rounded-xl shadow"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Advisory Focus *
                </label>
                <select
                  value={bookingData.advisorType}
                  onChange={(e) => setBookingData({ ...bookingData, advisorType: e.target.value })}
                  className="w-full text-xs font-medium border border-slate-300 rounded-xl p-2.5 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                >
                  <option value="Commercial Risk Specialist">Commercial Risk &amp; Business Insurance Specialist</option>
                  <option value="Fleet & Heavy Transport Broker">Heavy Fleet &amp; Transport Logistics Broker</option>
                  <option value="Residential Mortgage Adviser">Mortgage Adviser (First Home / Refinancing)</option>
                  <option value="Domestic Property Specialist">Home, Contents &amp; Landlord Specialist</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Meeting Location / Format *
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {[
                    { id: 'Video Call (Google Meet / Zoom)', icon: Video, label: 'Video Call' },
                    { id: 'Phone Consultation', icon: Phone, label: 'Phone Call' },
                    { id: 'In-Person (Hamilton / Auckland)', icon: MapPin, label: 'In-Person' }
                  ].map((m) => {
                    const Icon = m.icon;
                    const isSelected = bookingData.meetingFormat === m.id;
                    return (
                      <button
                        type="button"
                        key={m.id}
                        onClick={() => setBookingData({ ...bookingData, meetingFormat: m.id })}
                        className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                          isSelected 
                            ? 'border-brand-600 bg-brand-50 text-brand-700 font-bold' 
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

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={bookingData.date}
                    onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                    className="w-full text-xs font-medium border border-slate-300 rounded-xl p-2.5 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Time Window *
                  </label>
                  <select
                    value={bookingData.timeSlot}
                    onChange={(e) => setBookingData({ ...bookingData, timeSlot: e.target.value })}
                    className="w-full text-xs font-medium border border-slate-300 rounded-xl p-2.5 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                  >
                    <option value="9:00 AM - 9:45 AM">9:00 AM – 9:45 AM</option>
                    <option value="10:00 AM - 10:45 AM">10:00 AM – 10:45 AM</option>
                    <option value="1:30 PM - 2:15 PM">1:30 PM – 2:15 PM</option>
                    <option value="3:00 PM - 3:45 PM">3:00 PM – 3:45 PM</option>
                    <option value="4:30 PM - 5:15 PM">4:30 PM – 5:15 PM</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Liam Taylor"
                    value={bookingData.clientName}
                    onChange={(e) => setBookingData({ ...bookingData, clientName: e.target.value })}
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
                    placeholder="022 393 4656"
                    value={bookingData.clientPhone}
                    onChange={(e) => setBookingData({ ...bookingData, clientPhone: e.target.value })}
                    className="w-full text-xs font-medium border border-slate-300 rounded-xl p-2.5 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="liam@example.co.nz"
                  value={bookingData.clientEmail}
                  onChange={(e) => setBookingData({ ...bookingData, clientEmail: e.target.value })}
                  className="w-full text-xs font-medium border border-slate-300 rounded-xl p-2.5 bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-brand-600/30 flex items-center justify-center gap-2 transition-all"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confirm Calendar Reservation</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
