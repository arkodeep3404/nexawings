import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import Button from "../components/Button.jsx";

const WORKFLOW_STEPS = [
  {
    id: 1,
    title: "1. Event Trigger",
    subtitle: "Real-time Webhook",
    desc: "Webhook fires upon event creation in external source systems (e.g., Stripe invoice paid).",
    status: "waiting", // 'waiting', 'active', 'completed'
    system: "Stripe",
    badgeColor: "#635bff",
    icon: (
      <svg className="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "2. Schema Normalization",
    subtitle: "Integrations Fabric",
    desc: "NexaWings normalizes custom payload variables into unified, standard data models.",
    status: "waiting",
    system: "Bindbee Core",
    badgeColor: "#2EF2FF",
    icon: (
      <svg className="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "3. Sovereign Brain Audit",
    subtitle: "Zero-Hallucination Agent",
    desc: "Secure Llama-3-70B model parses details and checks against internal PDF audit rules inside your VPC.",
    status: "waiting",
    system: "EMVO Brain",
    badgeColor: "#3C52D9",
    icon: (
      <svg className="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "4. Autonomous Actions",
    subtitle: "Stateful Pod writeback",
    desc: "Intelligence pod triggers writebacks to Salesforce CRM and reports success via Slack alerts.",
    status: "waiting",
    system: "Langslide Pods",
    badgeColor: "#C8EA80",
    icon: (
      <svg className="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

const Playground = () => {
  const [steps, setSteps] = useState(WORKFLOW_STEPS);
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(null);
  const [simLogs, setSimLogs] = useState([]);

  const addLog = (msg) => {
    const time = new Date().toTimeString().split(" ")[0];
    setSimLogs((prev) => [...prev, `[${time}] ${msg}`]);
  };

  const startSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setSimLogs([]);
    setActiveStep(1);
    
    // Reset steps
    setSteps(WORKFLOW_STEPS.map(s => ({ ...s, status: "waiting" })));
  };

  useEffect(() => {
    if (!isRunning || activeStep === null) return;

    if (activeStep > steps.length) {
      setIsRunning(false);
      setActiveStep(null);
      addLog("✔ PIPELINE SUCCESS: Workflow execution complete with 100% reliability.");
      return;
    }

    // Mark current step active
    setSteps((prevSteps) =>
      prevSteps.map((s) => {
        if (s.id === activeStep) {
          return { ...s, status: "active" };
        } else if (s.id < activeStep) {
          return { ...s, status: "completed" };
        }
        return s;
      })
    );

    // Run animation log sequence
    let timer;
    if (activeStep === 1) {
      addLog("Initializing Stripe event listener...");
      timer = setTimeout(() => {
        addLog("Event matched: Invoice #INV-89104 Paid ($1,499.00).");
        setActiveStep(2);
      }, 2500);
    } else if (activeStep === 2) {
      addLog("Invoking Bindbee integrations fabric...");
      timer = setTimeout(() => {
        addLog("Mapping custom data to 'UnifiedInvoice' JSON schema.");
        addLog("Data normalized: base_amount: 1499.00, currency: USD.");
        setActiveStep(3);
      }, 2500);
    } else if (activeStep === 3) {
      addLog("Spinning up EMVO Sovereign Brain inside AWS VPC...");
      timer = setTimeout(() => {
        addLog("RAG query matched: checking compliance guidelines Section 4.2.");
        addLog("Llama-3 audit verdict: Invoice fits policy. No hallucinations detected.");
        setActiveStep(4);
      }, 3000);
    } else if (activeStep === 4) {
      addLog("Orchestrating autonomous actions with Langslide Pod...");
      timer = setTimeout(() => {
        addLog("Triggering bi-directional writeback to Salesforce CRM.");
        addLog("Salesforce Opportunity synced successfully.");
        addLog("Dispatching webhook notification to Slack channel #billing-ops.");
        setActiveStep(5);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [isRunning, activeStep]);

  return (
    <section className="relative py-28 border-t border-s3/20 bg-s1">
      <Element name="playground" className="relative z-2">
        <div className="container">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 max-md:mb-10">
            <div className="caption small-2 uppercase text-p3 mb-4 tracking-widest">
              Live Interactive Simulator
            </div>
            <h2 className="h2 max-md:h4 text-p4 mb-4 uppercase">
              Agentic Pipeline Playroom
            </h2>
            <p className="body-2 text-p5 max-w-lg mx-auto">
              Simulate a multi-agent workflow live. Watch how data flows securely from sync triggers to autonomous writebacks.
            </p>
          </div>

          {/* Interactive Interface */}
          <div className="flex flex-col lg:flex-row gap-10 items-stretch">
            
            {/* Visual Workflow Canvas */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {steps.map((step) => {
                  const isActive = step.status === "active";
                  const isCompleted = step.status === "completed";
                  return (
                    <div
                      key={step.id}
                      className={`relative p-6 rounded-3xl border-2 transition-all duration-500 ${
                        isActive
                          ? "border-p1 bg-s2 shadow-200 scale-102"
                          : isCompleted
                          ? "border-p3/50 bg-s1 shadow-400"
                          : "border-s3/30 bg-s2/40 opacity-70"
                      }`}
                    >
                      {/* Connection status indicator */}
                      <div className="absolute top-4 right-4 flex items-center space-x-1.5">
                        {isActive && (
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-p1 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-p1"></span>
                          </span>
                        )}
                        {isCompleted && (
                          <svg className="size-4 text-p3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                        <span className={`text-[8px] font-mono font-bold uppercase tracking-wider ${
                          isActive ? "text-p1" : isCompleted ? "text-p3" : "text-p5/40"
                        }`}>
                          {step.status}
                        </span>
                      </div>

                      {/* Icon */}
                      <div
                        className="size-12 rounded-xl flex items-center justify-center mb-4 border"
                        style={{
                          backgroundColor: `${step.badgeColor}20`,
                          borderColor: `${step.badgeColor}40`,
                        }}
                      >
                        <span style={{ color: step.badgeColor }}>{step.icon}</span>
                      </div>

                      <h3 className="text-sm font-bold text-p4 uppercase tracking-wider mb-1">{step.title}</h3>
                      <span className="text-[10px] text-p5/60 font-semibold uppercase block mb-3">{step.subtitle}</span>
                      <p className="text-[11px] text-p5 leading-relaxed mb-4">{step.desc}</p>
                      
                      <div className="text-[9px] font-mono text-p5/40">
                        Running on: <span className="text-p4 font-bold">{step.system}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Trigger Button */}
              <div className="mt-8 flex justify-center lg:justify-start">
                <Button
                  onClick={startSimulation}
                  icon="/images/zap.svg"
                  containerClassName={isRunning ? "opacity-55 pointer-events-none" : ""}
                >
                  {isRunning ? "Running Simulation..." : "Launch Pipeline Simulator"}
                </Button>
              </div>
            </div>

            {/* Simulated Live Console Log */}
            <div className="w-full lg:w-[420px] flex flex-col">
              <div className="flex-1 rounded-3xl border-2 border-s3 bg-black-100 p-6 flex flex-col font-mono shadow-500 min-h-[380px] justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-s3/20 mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-p1 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-p1"></span>
                      </span>
                      <span className="text-[10px] font-bold text-p4 uppercase tracking-wider">PIPELINE_ORCHESTRATOR_OUTPUT</span>
                    </div>
                    <button 
                      onClick={() => setSimLogs([])} 
                      className="text-[9px] text-p5/40 hover:text-p4 transition-colors"
                      disabled={isRunning}
                    >
                      Clear
                    </button>
                  </div>

                  <div className="space-y-2.5 text-[10px] leading-relaxed">
                    {simLogs.length === 0 ? (
                      <div className="text-p5/30 italic text-center py-10">
                        Press "Launch Pipeline Simulator" to run the autonomous system demonstration.
                      </div>
                    ) : (
                      simLogs.map((log, index) => {
                        const isSuccess = log.includes("✔");
                        return (
                          <div
                            key={index}
                            className={`flex items-start ${
                              isSuccess ? "text-p3 font-bold" : "text-p4"
                            }`}
                          >
                            <span className="text-p5/40 select-none mr-2">&gt;</span>
                            <span className="flex-1 break-all">{log}</span>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>

                <div className="text-[9px] text-p5/30 mt-6 border-t border-s3/10 pt-3 text-right">
                  System: {isRunning ? "SYNCING_ACTIVE" : "STANDBY"}
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Ambient Halo */}
        <div className="absolute right-0 top-1/4 -z-1 w-[400px] h-[400px] bg-p3/5 rounded-full blur-[140px] pointer-events-none" />
      </Element>
    </section>
  );
};

export default Playground;
