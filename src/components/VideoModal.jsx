import React from 'react';
import { X, Play, Shield } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-navy-950 text-white rounded-3xl shadow-2xl border border-slate-700 max-w-2xl w-full overflow-hidden animate-in fade-in zoom-in-95">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white">
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">
                Angy's Finance Corporate Overview
              </h3>
              <p className="text-[11px] text-slate-400">
                New Zealand Financial Services &amp; Commercial Insurance
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center">
            {/* High quality corporate video cover / embed */}
            <img 
              src="/images/angys-original/insurance-services.jpg" 
              alt="Video presentation cover" 
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>
            
            <div className="relative z-10 text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-brand-600/90 text-white flex items-center justify-center mx-auto shadow-xl ring-4 ring-brand-500/30 animate-pulse">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>
              <div className="text-lg font-extrabold text-white">
                The New Standard in Commercial Insurance
              </div>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Discover how Angy's Finance structures customized liability, building, and fleet programs tailored for New Zealand enterprises.
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
            <span>Direct consultation: {COMPANY_INFO.phoneDisplay}</span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold"
            >
              Close Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
