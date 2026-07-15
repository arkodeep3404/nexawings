import { Element } from "react-scroll";
import { useState } from "react";
import clsx from "clsx";
import CountUp from "react-countup";
import { plans } from "../constants/index.jsx";
import Button from "../components/Button.jsx";

const Pricing = () => {
  const [monthly, setMonthly] = useState(false);

  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
              Flexible Pricing Built for Enterprise Scale
            </h3>

            <div className="relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]">
              <button
                className={clsx("pricing-head_btn", monthly && "text-p4")}
                onClick={() => setMonthly(true)}
              >
                Monthly
              </button>
              <button
                className={clsx("pricing-head_btn", !monthly && "text-p4")}
                onClick={() => setMonthly(false)}
              >
                Annual
              </button>

              <div
                className={clsx(
                  "g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500",
                  !monthly && "translate-x-full"
                )}
              />
            </div>

            <div className="pricing-bg">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>

          {/*  pricing section*/}
          <div className="scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)]"
              >
                {index === 1 && (
                  <div className="g4 absolute h-330 left-0 right-0 top-0 z-1 rounded-tl-3xl rounded-tr-3xl" />
                )}

                <div
                  className={clsx(
                    "absolute left-0 right-0 z-2 flex items-center justify-center",
                    index === 1 ? "-top-6" : "-top-6 xl:-top-11"
                  )}
                >
                  <img
                    src={plan.logo}
                    alt={plan.title}
                    className={clsx(
                      "object-contain drop-shadow-2xl",
                      index === 1 ? "size-[120px]" : "size-[88px]"
                    )}
                  />
                </div>

                <div
                  className={clsx(
                    "relative flex flex-col items-center",
                    index === 1 ? "pt-24" : "pt-12"
                  )}
                >
                  <div
                    className={clsx(
                      "small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase",
                      index === 1 ? "border-p3 text-p3" : "border-p1 text-p1"
                    )}
                  >
                    {plan.title}
                  </div>

                  <div className="relative z-2 flex items-center justify-center">
                    <div
                      className={clsx(
                        "h-num flex items-start",
                        index === 1 ? "text-p3" : "text-p4"
                      )}
                    >
                      ${" "}
                      <CountUp
                        start={plan.priceMonthly}
                        end={monthly ? plan.priceMonthly : plan.priceYearly}
                        duration={0.4}
                        useEasing={false}
                        preserveValue
                      />
                    </div>
                    <div className="small-1 relative top-3 ml-1 uppercase">
                      / mo
                    </div>
                  </div>
                </div>

                <div
                  className={clsx(
                    "body-1 relative z-2 mb-10 w-full border-b-s2 pb-9 text-center text-p4",
                    index === 1 && "border-b"
                  )}
                >
                  {plan.caption}
                </div>

                <ul className="mx-auto space-y-4 xl:px-7">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="relative flex items-center gap-5"
                    >
                      <img
                        src={"/images/check.png"}
                        alt="check"
                        className="size-10 object-contain"
                      />
                      <p className="flex-1">{feature}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex w-full justify-center">
                  <a
                    href="https://calendar.app.google/sgKVt8mp3mmCS6Ca8"
                    target="_blank"
                  >
                    <Button icon={plan.icon}>Get Started</Button>
                  </a>
                </div>

                {index === 1 && (
                  <p className="small-compact mt-9 text-center text-p3 before:mx-2.5 before:content-['-'] after:mx-2.5 after:content-['-']">
                    Limited time offer
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Feature Comparison Matrix */}
          <div className="mt-28 max-w-4xl mx-auto hidden md:block">
            <h3 className="h5 text-p4 text-center uppercase tracking-wider mb-10">
              Detailed Feature Comparison Matrix
            </h3>
            <div className="rounded-3xl border-2 border-s3 bg-s1/60 overflow-hidden shadow-500">
              <table className="w-full text-left border-collapse text-xs font-mono">
                <thead>
                  <tr className="border-b border-s3 bg-s2/40">
                    <th className="p-5 font-bold text-p4 uppercase tracking-wider">Features</th>
                    <th className="p-5 font-bold text-p1 uppercase tracking-wider text-center">Core</th>
                    <th className="p-5 font-bold text-p3 uppercase tracking-wider text-center">Pro</th>
                    <th className="p-5 font-bold text-p4 uppercase tracking-wider text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Sovereign AI Brains", core: "5 Brains", pro: "Unlimited", ent: "Unlimited + Custom RAG" },
                    { name: "Stateful Intelligence Pods", core: "10 Pods", pro: "50 Pods", ent: "Unlimited" },
                    { name: "Unified Connectors", core: "50+ Connectors", pro: "All 100+ Connectors", ent: "All + Custom Schemas" },
                    { name: "VPC & On-Prem Hosting", core: "✕", pro: "✕", ent: "✓" },
                    { name: "voiceSHIELD™ Audio Filter", core: "✕", pro: "✓", ent: "✓" },
                    { name: "SSO & Advanced Governance", core: "✕", pro: "✓", ent: "✓" },
                    { name: "Dedicated Solutions Architect", core: "✕", pro: "✕", ent: "✓" },
                    { name: "Support Response Time", core: "Next-day SLA", pro: "4-Hour Priority", ent: "15-Min Dedicated" },
                  ].map((feature, idx) => (
                    <tr key={idx} className="border-b border-s3/20 hover:bg-s2/20 transition-all duration-300">
                      <td className="p-5 text-p4 font-bold text-left">{feature.name}</td>
                      <td className={`p-5 text-center ${feature.core === "✕" ? "text-p5/30" : "text-p5/70"}`}>{feature.core}</td>
                      <td className={`p-5 text-center ${feature.pro === "✕" ? "text-p5/30" : "text-p5/80"}`}>{feature.pro}</td>
                      <td className="p-5 text-p4 font-bold text-center text-p3">{feature.ent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
