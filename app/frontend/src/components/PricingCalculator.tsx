import { useState } from "react";
import { Sliders, Sparkles, Check, Info, ShieldCheck, FileText, ArrowRight } from "lucide-react";

type ProgramMode = "fulltime" | "parttime";
type PaymentMethod = "upfront" | "installments" | "deferred";
type ScholarshipType = "none" | "stem" | "diversity" | "changer";

export default function PricingCalculator() {
  const [mode, setMode] = useState<ProgramMode>("fulltime");
  const [payment, setPayment] = useState<PaymentMethod>("upfront");
  const [scholarship, setScholarship] = useState<ScholarshipType>("none");

  // Calculate base pricing
  const getBasePrice = () => {
    return mode === "fulltime" ? 4800 : 2800;
  };

  const getScholarshipDiscount = () => {
    switch (scholarship) {
      case "stem": return 600;
      case "diversity": return 800;
      case "changer": return 500;
      default: return 0;
    }
  };

  const calculatePricing = () => {
    const base = getBasePrice();
    const discount = getScholarshipDiscount();
    let subtotal = base - discount;
    
    if (payment === "upfront") {
      // 10% upfront discount
      const upfrontDiscount = Math.round(subtotal * 0.10);
      return {
        total: subtotal - upfrontDiscount,
        monthly: null,
        savings: discount + upfrontDiscount,
        terms: "Pay once on acceptance. No interest, no extra fees."
      };
    } else if (payment === "installments") {
      // split into 4 payments
      const payments = mode === "fulltime" ? 4 : 8;
      return {
        total: subtotal,
        monthly: Math.round(subtotal / payments),
        savings: discount,
        terms: `Split into ${payments} consecutive equal monthly installments.`
      };
    } else {
      // Deferred ISA
      return {
        total: 0,
        monthly: null,
        savings: 0,
        terms: "Pay $0 upfront. Once placed in a role making >$65k, pay 10% of monthly income for 12 months."
      };
    }
  };

  const pricing = calculatePricing();

  return (
    <section id="pricing-section" className="py-24 bg-immersive-bg relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-immersive-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold text-immersive-secondary bg-immersive-secondary/10 border border-immersive-border px-3 py-1 rounded-full uppercase tracking-widest inline-flex items-center space-x-1.5">
            <Sliders className="w-3.5 h-3.5" />
            <span>TUITION ESTIMATOR</span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-sans font-extrabold text-immersive-text-primary tracking-tight">
            Transparent, flexible tuition options
          </h2>
          <p className="text-lg text-immersive-text-secondary">
            Use our interactive estimator to configure payment schemes, apply custom background grants, and map your financial roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto text-left">
          
          {/* Controls Box */}
          <div className="lg:col-span-7 bg-immersive-card border border-immersive-border rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-[0_0_20px_var(--immersive-shadow)]">
            <div className="space-y-6">
              
              {/* Mode Toggle */}
              <div className="space-y-3">
                <label className="text-xs font-mono text-immersive-secondary uppercase tracking-wider font-semibold block">1. Select Cohort Velocity</label>
                <div className="grid grid-cols-2 gap-3 bg-immersive-bg p-1.5 rounded-2xl border border-immersive-border">
                  <button
                    onClick={() => setMode("fulltime")}
                    className={`py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                      mode === "fulltime"
                        ? "bg-immersive-primary/10 border border-immersive-secondary text-immersive-secondary shadow-[0_0_15px_rgba(62,0,255,0.15)]"
                        : "text-immersive-text-secondary hover:text-immersive-text-primary"
                    }`}
                  >
                    8-Week Immersive
                  </button>
                  <button
                    onClick={() => setMode("parttime")}
                    className={`py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                      mode === "parttime"
                        ? "bg-immersive-primary/10 border border-immersive-secondary text-immersive-secondary shadow-[0_0_15px_rgba(62,0,255,0.15)]"
                        : "text-immersive-text-secondary hover:text-immersive-text-primary"
                    }`}
                  >
                    16-Week Flex Part-time
                  </button>
                </div>
              </div>

              {/* Payment Method Toggle */}
              <div className="space-y-3">
                <label className="text-xs font-mono text-immersive-secondary uppercase tracking-wider font-semibold block">2. Payment Schedule</label>
                <div className="grid grid-cols-3 gap-2 bg-immersive-bg p-1 rounded-xl border border-immersive-border">
                  <button
                    onClick={() => setPayment("upfront")}
                    className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      payment === "upfront"
                        ? "bg-immersive-primary/10 border border-immersive-secondary text-immersive-secondary shadow-[0_0_15px_rgba(62,0,255,0.15)]"
                        : "text-immersive-text-secondary hover:text-immersive-text-primary"
                    }`}
                  >
                    Upfront (Save 10%)
                  </button>
                  <button
                    onClick={() => setPayment("installments")}
                    className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      payment === "installments"
                        ? "bg-immersive-primary/10 border border-immersive-secondary text-immersive-secondary shadow-[0_0_15px_rgba(62,0,255,0.15)]"
                        : "text-immersive-text-secondary hover:text-immersive-text-primary"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setPayment("deferred")}
                    className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      payment === "deferred"
                        ? "bg-immersive-primary/10 border border-immersive-secondary text-immersive-secondary shadow-[0_0_15px_rgba(62,0,255,0.15)]"
                        : "text-immersive-text-secondary hover:text-immersive-text-primary"
                    }`}
                  >
                    ISA / Deferred
                  </button>
                </div>
              </div>

              {/* Scholarship selection */}
              <div className="space-y-3">
                <label className="text-xs font-mono text-immersive-secondary uppercase tracking-wider font-semibold block">3. Background Grant / Scholarships</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setScholarship("none")}
                    className={`p-3.5 border rounded-xl text-left text-xs font-bold transition-all cursor-pointer ${
                      scholarship === "none"
                        ? "border-immersive-secondary bg-immersive-bg text-immersive-text-primary shadow-[0_0_15px_rgba(0,209,255,0.2)]"
                        : "border-immersive-border hover:border-immersive-secondary bg-immersive-bg/30 text-immersive-text-secondary hover:text-immersive-text-primary"
                    }`}
                  >
                    <div>Self-Sponsored</div>
                    <div className="text-[10px] text-immersive-text-secondary/70 font-mono font-medium mt-1">No custom grants</div>
                  </button>

                  <button
                    onClick={() => setScholarship("stem")}
                    className={`p-3.5 border rounded-xl text-left text-xs font-bold transition-all cursor-pointer ${
                      scholarship === "stem"
                        ? "border-immersive-secondary bg-immersive-bg text-immersive-text-primary shadow-[0_0_15px_rgba(0,209,255,0.2)]"
                        : "border-immersive-border hover:border-immersive-secondary bg-immersive-bg/30 text-immersive-text-secondary hover:text-immersive-text-primary"
                    }`}
                  >
                    <div>STEM Academic Grant</div>
                    <div className="text-[10px] text-immersive-secondary font-mono font-bold mt-1">-$600 applied</div>
                  </button>

                  <button
                    onClick={() => setScholarship("diversity")}
                    className={`p-3.5 border rounded-xl text-left text-xs font-bold transition-all cursor-pointer ${
                      scholarship === "diversity"
                        ? "border-immersive-secondary bg-immersive-bg text-immersive-text-primary shadow-[0_0_15px_rgba(0,209,255,0.2)]"
                        : "border-immersive-border hover:border-immersive-secondary bg-immersive-bg/30 text-immersive-text-secondary hover:text-immersive-text-primary"
                    }`}
                  >
                    <div>Diversity in Tech</div>
                    <div className="text-[10px] text-immersive-secondary font-mono font-bold mt-1">-$800 applied</div>
                  </button>

                  <button
                    onClick={() => setScholarship("changer")}
                    className={`p-3.5 border rounded-xl text-left text-xs font-bold transition-all cursor-pointer ${
                      scholarship === "changer"
                        ? "border-immersive-secondary bg-immersive-bg text-immersive-text-primary shadow-[0_0_15px_rgba(0,209,255,0.2)]"
                        : "border-immersive-border hover:border-immersive-secondary bg-immersive-bg/30 text-immersive-text-secondary hover:text-immersive-text-primary"
                    }`}
                  >
                    <div>Career Pivot Grant</div>
                    <div className="text-[10px] text-immersive-secondary font-mono font-bold mt-1">-$500 applied</div>
                  </button>
                </div>
              </div>

            </div>

            <div className="border-t border-immersive-border pt-6 flex items-center space-x-2 text-xs text-immersive-text-secondary font-medium">
              <ShieldCheck className="w-4 h-4 text-immersive-secondary flex-shrink-0" />
              <span>Full refund guarantee up to 14 days after cohort launch. No questions asked.</span>
            </div>
          </div>

          {/* Pricing Result Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-immersive-bg via-immersive-primary/10 to-immersive-card border border-immersive-border rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_0_25px_var(--immersive-shadow)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-immersive-secondary/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 text-left">
              <div>
                <span className="text-xs font-mono font-bold text-immersive-secondary uppercase tracking-widest block">YOUR PERSONAL ESTIMATE</span>
                <h4 className="text-2xl font-extrabold text-immersive-text-primary mt-1">
                  {mode === "fulltime" ? "8-Week Immersive" : "16-Week Flex"}
                </h4>
              </div>

              {/* Price Display */}
              <div className="space-y-1">
                {payment === "deferred" ? (
                  <div className="space-y-1">
                    <span className="text-5xl font-mono font-extrabold text-immersive-text-primary tracking-tight">$0</span>
                    <span className="text-sm font-semibold text-immersive-text-secondary block">Upfront Tuition Cost</span>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <span className="text-5xl font-mono font-extrabold text-immersive-text-primary tracking-tight">
                      ${pricing.monthly ? pricing.monthly : pricing.total}
                    </span>
                    <span className="text-xs text-immersive-text-secondary/80 font-mono">
                      {pricing.monthly ? "/ MONTHLY PAYMENT" : " TOTAL ONE-TIME PAY"}
                    </span>
                  </div>
                )}

                {pricing.savings > 0 && (
                  <div className="text-xs text-immersive-secondary font-bold bg-immersive-secondary/15 border border-immersive-secondary/25 shadow-[0_0_10px_rgba(0,209,255,0.1)] rounded-lg px-2.5 py-1.5 inline-flex items-center space-x-1.5 mt-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Applied savings of ${pricing.savings}</span>
                  </div>
                )}
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-2 text-xs">
                  <Info className="w-4 h-4 text-immersive-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-immersive-text-secondary leading-relaxed font-medium">
                    {pricing.terms}
                  </p>
                </div>
              </div>

              {/* Included items */}
              <div className="border-t border-immersive-border pt-4 space-y-2.5">
                <span className="text-[10px] font-mono text-immersive-text-secondary/60 uppercase block font-semibold">ESTIMATE INCLUDES:</span>
                <div className="space-y-1.5 text-xs text-immersive-text-secondary font-medium">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-immersive-secondary" />
                    <span>Real-World Client Brief Intake</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-immersive-secondary" />
                    <span>1-on-1 industry mentor reviews</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-immersive-secondary" />
                    <span>Peer collaborative development labs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-immersive-secondary" />
                    <span>Employer network screening pipelines</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="#hero-section"
                className="w-full inline-flex items-center justify-center space-x-2 py-4 rounded-2xl font-bold text-immersive-text-primary bg-immersive-primary hover:brightness-110 shadow-[0_0_15px_rgba(62,0,255,0.3)] transition"
              >
                <span>Lock in Tuition & Apply</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
