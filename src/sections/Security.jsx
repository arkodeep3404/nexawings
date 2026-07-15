import React from "react";
import { Element } from "react-scroll";

const SECURITY_CARDS = [
  {
    title: "AWS & GCP VPC Hosting",
    desc: "Host the entire agentic stack—databases, models, and execution loops—inside your virtual private cloud. Your data never touches public infrastructure.",
    icon: (
      <svg className="size-6 text-p1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "voiceSHIELD™ Protection",
    desc: "A proprietary speech-to-text safety model that protects voice agents from prompt injections, acoustic attacks, and adversarial speech inputs.",
    icon: (
      <svg className="size-6 text-p3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: "Dynamic Data Masking",
    desc: "Strict policy guardrails automatically mask PII, HIPAA details, compensation values, and employee SSNs before passing tokens to LLMs.",
    icon: (
      <svg className="size-6 text-p1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
      </svg>
    ),
  },
];

const Security = () => {
  return (
    <section className="relative py-28 border-t border-s3/20 bg-s1">
      <Element name="security" className="relative z-2">
        <div className="container">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 max-md:mb-10">
            <div className="caption small-2 uppercase text-p3 mb-4 tracking-widest">
              Zero-Trust Architecture
            </div>
            <h2 className="h2 max-md:h4 text-p4 mb-4 uppercase">
              Security &amp; Governance
            </h2>
            <p className="body-2 text-p5 max-w-lg mx-auto">
              NexaWings is engineered for high-stakes, regulated industries requiring absolute privacy and strict access auditing.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            {SECURITY_CARDS.map((card, idx) => (
              <div key={idx} className="p-8 rounded-3xl border-2 border-s3/40 bg-s2/40 hover:border-s3 transition-all duration-300">
                <div className="size-12 rounded-xl bg-s3/20 flex items-center justify-center mb-6 border border-s3/40">
                  {card.icon}
                </div>
                <h3 className="text-sm font-bold text-p4 uppercase tracking-wider mb-3 text-left">{card.title}</h3>
                <p className="text-[11px] sm:text-xs text-p5 leading-relaxed text-left">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Compliance Logos Bar */}
          <div className="border-t border-s3/20 pt-12 text-center max-w-4xl mx-auto">
            <h4 className="text-[9px] font-bold text-p5/40 uppercase tracking-widest mb-8">
              Certified Enterprise Compliance Frameworks
            </h4>
            
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
              {/* SOC-2 badge */}
              <div className="flex flex-col items-center">
                <div className="text-xs font-bold text-p4 font-mono border-2 border-s3 rounded px-3 py-1 mb-1">SOC 2 TYPE II</div>
                <span className="text-[8px] text-p5/60 uppercase">Certified Audit</span>
              </div>
              {/* ISO 27001 badge */}
              <div className="flex flex-col items-center">
                <div className="text-xs font-bold text-p4 font-mono border-2 border-s3 rounded px-3 py-1 mb-1">ISO 27001</div>
                <span className="text-[8px] text-p5/60 uppercase">InfoSec Standard</span>
              </div>
              {/* HIPAA badge */}
              <div className="flex flex-col items-center">
                <div className="text-xs font-bold text-p4 font-mono border-2 border-s3 rounded px-3 py-1 mb-1">HIPAA</div>
                <span className="text-[8px] text-p5/60 uppercase">Protected Health Info</span>
              </div>
              {/* GDPR badge */}
              <div className="flex flex-col items-center">
                <div className="text-xs font-bold text-p4 font-mono border-2 border-s3 rounded px-3 py-1 mb-1">GDPR</div>
                <span className="text-[8px] text-p5/60 uppercase">EU Privacy Act</span>
              </div>
            </div>
          </div>

        </div>
      </Element>

      {/* Halo decoration */}
      <div className="absolute left-1/3 top-1/3 -z-1 w-[400px] h-[400px] bg-p2/5 rounded-full blur-[140px] pointer-events-none" />
    </section>
  );
};

export default Security;
