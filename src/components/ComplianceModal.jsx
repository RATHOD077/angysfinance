import React from 'react';
import { X, Shield, FileText, CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export default function ComplianceModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-2xl w-full overflow-hidden transition-all duration-200 animate-in fade-in zoom-in-95">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-navy-950 to-brand-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <Shield className="w-4 h-4 text-emerald-300" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-tight">
                New Zealand Regulatory &amp; Public Disclosures
              </h3>
              <p className="text-[11px] text-slate-300">
                Financial Markets Conduct Act 2013 Disclosure Statement
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
        <div className="p-6 text-xs text-slate-600 space-y-4 max-h-[75vh] overflow-y-auto leading-relaxed">
          
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <div className="font-bold text-navy-950 text-sm">Entity Identification Details</div>
            <div><strong>Legal Name:</strong> {COMPANY_INFO.legalName}</div>
            <div><strong>Trading Name:</strong> {COMPANY_INFO.tradingName}</div>
            <div><strong>New Zealand Business Number (NZBN):</strong> {COMPANY_INFO.nzbn}</div>
            <div><strong>Registered Office:</strong> {COMPANY_INFO.registeredAddress}</div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">
              1. Financial Advice Provider Licensing
            </h4>
            <p>
              Angy's Finance Limited provides financial advice services pursuant to the Financial Markets Conduct Act 2013 (as amended by the Financial Services Legislation Amendment Act 2019). We hold appropriate registration and operate in full compliance with the Code of Professional Conduct for Financial Advice Services.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">
              2. Nature and Scope of Advice
            </h4>
            <p>
              We provide regulated financial advice on general insurance (commercial, business interruption, liability, fleet, marine cargo, and domestic insurance) as well as mortgage and lending facilities. We do not provide advice on speculative investment schemes, shares, or foreign exchange trading.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">
              3. Fees, Expenses and Remuneration
            </h4>
            <p>
              <strong>Insurance Brokerage:</strong> We typically receive commission from insurers (such as Vero, NZI, QBE, Chubb) ranging from 10% to 25% of the company premium, or a broker fee agreed upon in writing prior to policy inception.
            </p>
            <p className="mt-1">
              <strong>Mortgage Advisory:</strong> For qualifying residential lending, our services are provided without upfront client fees as lenders pay a settlement commission. Any specific fee requirements (e.g. for short-term bridging or non-bank complex facilities) are disclosed in writing prior to proceeding.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">
              4. Independent Dispute Resolution Scheme
            </h4>
            <p>
              If you have a complaint regarding our services, we operate an internal disputes process. If a resolution cannot be reached within 40 working days, you have the right to refer your complaint to an approved independent disputes resolution scheme:
            </p>
            <div className="mt-2 p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-[11px]">
              <strong>Scheme:</strong> {COMPANY_INFO.disputeScheme}<br />
              This free, independent service helps resolve financial disputes between consumers and financial providers in New Zealand.
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">
              5. Privacy Act 2020 Compliance
            </h4>
            <p>
              We collect and hold personal information only to assess risk, structure insurance placements, and process credit/mortgage applications. All client data is encrypted and handled in strict accordance with the 13 Information Privacy Principles (IPPs) under the New Zealand Privacy Act 2020.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-navy-950 text-white font-bold text-xs rounded-xl shadow hover:bg-navy-900"
          >
            I Acknowledge &amp; Understand
          </button>
        </div>

      </div>
    </div>
  );
}
