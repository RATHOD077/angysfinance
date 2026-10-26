import React, { useState, useId } from 'react';
import { Calculator, DollarSign, Percent, Calendar, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function MortgageCalculator({ onOpenQuote }) {
  const [loanAmount, setLoanAmount] = useState(750000);
  const [interestRate, setInterestRate] = useState(6.25);
  const [loanTermYears, setLoanTermYears] = useState(30);
  const [repaymentFrequency, setRepaymentFrequency] = useState('monthly'); // weekly, fortnightly, monthly
  const [repaymentType, setRepaymentType] = useState('pi'); // pi (principal & interest) or io (interest only)

  // Generate unique IDs for input fields
  const amountInputId = useId();
  const rateInputId = useId();
  const termInputId = useId();

  // Financial calculation
  const calculateRepayments = () => {
    const P = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate) / 100;
    const years = parseInt(loanTermYears);

    if (P <= 0 || annualRate <= 0 || years <= 0) {
      return { regularPayment: 0, totalInterest: 0, totalCost: 0 };
    }

    let periodsPerYear = 12;
    if (repaymentFrequency === 'weekly') periodsPerYear = 52;
    if (repaymentFrequency === 'fortnightly') periodsPerYear = 26;

    const r = annualRate / periodsPerYear;
    const n = years * periodsPerYear;

    let regularPayment = 0;
    let totalRepayments = 0;
    let totalInterest = 0;

    if (repaymentType === 'io') {
      regularPayment = P * r;
      totalInterest = regularPayment * n;
      totalRepayments = P + totalInterest;
    } else {
      // standard amortization formula
      regularPayment = (P * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
      totalRepayments = regularPayment * n;
      totalInterest = totalRepayments - P;
    }

    return {
      regularPayment: Math.round(regularPayment),
      totalInterest: Math.round(totalInterest),
      totalCost: Math.round(totalRepayments),
      principal: Math.round(P)
    };
  };

  const results = calculateRepayments();

  const formatNZD = (num) => {
    return new Intl.NumberFormat('en-NZ', { style: 'currency', currency: 'NZD', maximumFractionDigits: 0 }).format(num);
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden my-12">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto">
        {/* Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-900/60 text-brand-300 text-xs font-semibold mb-2 border border-brand-500/30">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive New Zealand Finance Tool</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Mortgage &amp; Loan Repayment Estimator
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Estimate your weekly, fortnightly, or monthly cash flow across NZ bank rates.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-800/80 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setRepaymentType('pi')}
              className={`px-3 py-1.5 rounded-lg transition-all ${repaymentType === 'pi' ? 'bg-brand-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
            >
              Principal &amp; Interest
            </button>
            <button
              onClick={() => setRepaymentType('io')}
              className={`px-3 py-1.5 rounded-lg transition-all ${repaymentType === 'io' ? 'bg-brand-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
            >
              Interest Only
            </button>
          </div>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Loan Amount */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor={amountInputId} className="text-xs font-semibold text-slate-300">
                  Loan Amount
                </label>
                <span className="text-base font-extrabold text-brand-300 font-mono">
                  {formatNZD(loanAmount)}
                </span>
              </div>
              <input
                id={amountInputId}
                type="range"
                min="100000"
                max="2500000"
                step="25000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="w-full accent-brand-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>NZ$100,000</span>
                <span>NZ$1,250,000</span>
                <span>NZ$2,500,000+</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor={rateInputId} className="text-xs font-semibold text-slate-300">
                  Current Mortgage Interest Rate (%)
                </label>
                <span className="text-base font-extrabold text-amber-300 font-mono">
                  {interestRate}% p.a.
                </span>
              </div>
              <input
                id={rateInputId}
                type="range"
                min="4.50"
                max="9.50"
                step="0.05"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>4.50% (Historic Low)</span>
                <span>6.25% (Current NZ Market Avg)</span>
                <span>9.50%</span>
              </div>
            </div>

            {/* Loan Term & Frequency */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor={termInputId} className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Loan Term (Years)
                </label>
                <select
                  id={termInputId}
                  value={loanTermYears}
                  onChange={(e) => setLoanTermYears(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl p-2.5 text-xs font-medium focus:ring-2 focus:ring-brand-500 outline-none"
                >
                  <option value="15">15 Years</option>
                  <option value="20">20 Years</option>
                  <option value="25">25 Years</option>
                  <option value="30">30 Years (Standard NZ)</option>
                </select>
              </div>

              <div>
                <span className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Repayment Frequency
                </span>
                <div className="grid grid-cols-3 gap-1 bg-slate-800 p-1 rounded-xl text-center text-xs">
                  {['weekly', 'fortnightly', 'monthly'].map((freq) => (
                    <button
                      key={freq}
                      onClick={() => setRepaymentFrequency(freq)}
                      className={`py-1.5 rounded-lg capitalize transition-all ${
                        repaymentFrequency === freq 
                          ? 'bg-brand-600 text-white font-bold' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {freq}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-slate-800/90 rounded-2xl p-6 border border-slate-700 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                Estimated Regular Repayment ({repaymentFrequency})
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
                {formatNZD(results.regularPayment)}
                <span className="text-xs text-slate-400 font-sans font-normal ml-1">/{repaymentFrequency}</span>
              </div>
            </div>

            {/* Split Breakdown */}
            <div className="space-y-3 pt-3 border-t border-slate-700/80 text-xs">
              <div className="flex justify-between items-center text-slate-300">
                <span>Principal Borrowed:</span>
                <span className="font-mono font-semibold text-white">{formatNZD(results.principal)}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Total Interest Over Term:</span>
                <span className="font-mono font-semibold text-amber-300">{formatNZD(results.totalInterest)}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300 border-t border-slate-700/50 pt-2 font-bold">
                <span>Total Loan Amount Repaid:</span>
                <span className="font-mono text-emerald-400">{formatNZD(results.totalCost)}</span>
              </div>
            </div>

            {/* Progress Bar of Principal vs Interest */}
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                <span>Principal ({Math.round((results.principal / results.totalCost) * 100)}%)</span>
                <span>Interest ({Math.round((results.totalInterest / results.totalCost) * 100)}%)</span>
              </div>
              <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden flex">
                <div 
                  className="bg-brand-500 h-full" 
                  style={{ width: `${(results.principal / results.totalCost) * 100}%` }}
                ></div>
                <div 
                  className="bg-amber-400 h-full" 
                  style={{ width: `${(results.totalInterest / results.totalCost) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* CTA inside calculator */}
            <button
              onClick={() => onOpenQuote('mortgage')}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-brand-600/30 transition-all"
            >
              <span>Get Bank Pre-Approval Advice</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
          <span>
            <strong>New Zealand Regulatory Note:</strong> Calculations are indicative estimates only for modeling purposes and do not constitute a formal loan offer. Actual loan approvals are subject to responsible lending criteria, credit scoring, bank policy, and property valuation. Angy's Finance advisers are registered under the Financial Markets Conduct Act 2013.
          </span>
        </div>
      </div>
    </div>
  );
}
