import React, { useState, useEffect } from "react";

const InteractiveWorkspaceMockup = () => {
  const [activeTab, setActiveTab] = useState("brain"); // 'integration', 'brain', 'pod'
  const [logs, setLogs] = useState([
    { id: 1, time: "14:40:10", msg: "AWS KMS: Decrypted API credentials successfully" },
    { id: 2, time: "14:40:12", msg: "AWS Bedrock: Loaded sovereign fine-tuned parameters" },
    { id: 3, time: "14:40:15", msg: "AWS Lambda: Active Python sandboxed tool execution started" },
  ]);

  useEffect(() => {
    const messages = [
      "Fabric: CRM record payload pulled & normalized",
      "Brain: Hallucination score: 0.00% (Semantically Grounded)",
      "Orchestrator: Billing reconciliation loop triggered",
      "Fabric: HRIS database sync webhook processed",
      "Orchestrator: Sovereign agent successfully wrote back to ERP",
      "Brain: Custom policy guidelines verified inside AWS VPC",
      "AWS KMS: Auto-rotated credentials key successfully",
      "AWS Lambda: Closed secure Python script runtime container",
    ];

    const interval = setInterval(() => {
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      const now = new Date();
      const timeStr = now.toTimeString().split(" ")[0];
      setLogs((prev) => [...prev.slice(-4), { id: Date.now(), time: timeStr, msg: randomMsg }]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full rounded-3xl border-2 border-s3 bg-s2/90 shadow-500 overflow-hidden backdrop-blur-md transition-all duration-500 hover:border-p1/40">
      {/* Title Bar */}
      <div className="flex items-center justify-between border-b border-s3/60 px-5 py-3 bg-s1/60">
        <div className="flex space-x-2">
          <div className="size-3 rounded-full bg-red-500" />
          <div className="size-3 rounded-full bg-yellow-500" />
          <div className="size-3 rounded-full bg-green-500" />
        </div>
        <div className="text-[11px] font-mono text-p5/60 uppercase tracking-widest">
          NexaWings Studio v1.0
        </div>
        <div className="flex items-center space-x-1.5 bg-p1/10 rounded-full px-2.5 py-0.5 border border-p1/20">
          <span className="relative flex size-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-p1 opacity-75"></span>
            <span className="relative inline-flex rounded-full size-1.5 bg-p1"></span>
          </span>
          <span className="text-[9px] font-bold text-p1 uppercase tracking-wider">AWS VPC SECURE</span>
        </div>
      </div>

      {/* Main Workspace Layout */}
      <div className="p-6 flex flex-col space-y-6">
        
        {/* Interactive Visual Canvas */}
        <div className="relative h-48 rounded-xl border border-s3/40 bg-s1/50 overflow-hidden flex items-center justify-between px-4 sm:px-8">
          {/* Animated Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#33467920_1px,transparent_1px),linear-gradient(to_bottom,#33467920_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

          {/* SVG Connecting Lines with Pulsing Particles */}
          <svg className="absolute inset-0 size-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            {/* Connection Line 1 to 2 */}
            <path d="M 120 96 L 240 96" stroke="#334679" strokeWidth="2" fill="none" strokeDasharray="4 4" className="hidden sm:block" />
            {/* Connection Line 2 to 3 */}
            <path d="M 280 96 L 400 96" stroke="#334679" strokeWidth="2" fill="none" strokeDasharray="4 4" className="hidden sm:block" />
            
            {/* Pulsing signal dots */}
            <circle r="4" fill="#2EF2FF" className="hidden sm:block">
              <animateMotion dur="4s" repeatCount="indefinite" path="M 120 96 L 240 96" />
            </circle>
            <circle r="4" fill="#C8EA80" className="hidden sm:block">
              <animateMotion dur="4s" begin="2s" repeatCount="indefinite" path="M 280 96 L 400 96" />
            </circle>
          </svg>

          {/* Node 1: Tool Actions & MCP Gateway */}
          <button 
            onClick={() => setActiveTab("integration")}
            className={`z-10 flex flex-col items-center p-3 rounded-xl border transition-all duration-300 ${
              activeTab === "integration" 
                ? "border-p1 bg-s2 shadow-100 scale-105" 
                : "border-s3/40 bg-s1/80 hover:border-s3 hover:scale-102"
            }`}
          >
            <div className="size-12 rounded-lg bg-p1/10 flex items-center justify-center border border-p1/30 mb-2">
              <svg className="size-6 text-p1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-[10px] font-bold text-p4 uppercase tracking-wider">Tool Actions</span>
            <span className="text-[8px] text-p5/60 mt-0.5">MCP Gateway</span>
          </button>

          {/* Node 2: Sovereign AI Brain */}
          <button 
            onClick={() => setActiveTab("brain")}
            className={`z-10 flex flex-col items-center p-3 rounded-xl border transition-all duration-300 ${
              activeTab === "brain" 
                ? "border-p2 bg-s2 shadow-200 scale-105" 
                : "border-s3/40 bg-s1/80 hover:border-s3 hover:scale-102"
            }`}
          >
            <div className="size-14 rounded-full bg-p2/20 flex items-center justify-center border-2 border-p2/40 mb-2 relative">
              {/* Outer pulsing ring */}
              <div className="absolute inset-0 rounded-full border border-p2 animate-ping opacity-45" />
              <svg className="size-8 text-p4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <span className="text-[11px] font-bold text-p4 uppercase tracking-wider">Sovereign Brain</span>
            <span className="text-[8px] text-p3 font-medium mt-0.5">AWS Bedrock</span>
          </button>

          {/* Node 3: Intelligence Pod */}
          <button 
            onClick={() => setActiveTab("pod")}
            className={`z-10 flex flex-col items-center p-3 rounded-xl border transition-all duration-300 ${
              activeTab === "pod" 
                ? "border-p3 bg-s2 shadow-100 scale-105" 
                : "border-s3/40 bg-s1/80 hover:border-s3 hover:scale-102"
            }`}
          >
            <div className="size-12 rounded-lg bg-p3/10 flex items-center justify-center border border-p3/30 mb-2">
              <svg className="size-6 text-p3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <span className="text-[10px] font-bold text-p4 uppercase tracking-wider">Orchestrator</span>
            <span className="text-[8px] text-p5/60 mt-0.5">Intelligence Pods</span>
          </button>
        </div>

        {/* Tab Detail Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Node Specs Detail Card */}
          <div className="p-4 rounded-xl border border-s3/40 bg-s1/40 flex flex-col justify-between min-h-[160px]">
            {activeTab === "integration" && (
              <div>
                <h4 className="text-xs font-bold text-p1 uppercase tracking-wider mb-2">Composio-backed Tool Actions</h4>
                <p className="text-[11px] text-p5 leading-relaxed text-left">
                  Allows agents to safely execute local code sandboxes and call secure APIs. Built-in Model Context Protocol (MCP) gateway.
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2 text-[10px] font-mono text-left">
                  <div className="text-p5/70">Tool Library: <span className="text-p4 font-bold">900+ Actions</span></div>
                  <div className="text-p5/70">Execution: <span className="text-p3 font-bold">AWS Lambda</span></div>
                  <div className="text-p5/70">Auth: <span className="text-p4 font-bold">AWS KMS Secure</span></div>
                  <div className="text-p5/70">Protocol: <span className="text-p1 font-bold">MCP Gateway</span></div>
                </div>
              </div>
            )}

            {activeTab === "brain" && (
              <div>
                <h4 className="text-xs font-bold text-p2 uppercase tracking-wider mb-2">Sovereign Brain Parameters</h4>
                <p className="text-[11px] text-p5 leading-relaxed text-left">
                  Sovereign LLMs deployed natively inside your private cloud VPC. Tuned specifically on internal documents with semantic grounding.
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2 text-[10px] font-mono text-left">
                  <div className="text-p5/70">Foundation LLM: <span className="text-p4 font-bold">AWS Bedrock Core</span></div>
                  <div className="text-p5/70">Isolation: <span className="text-p3 font-bold">AWS VPC Private</span></div>
                  <div className="text-p5/70">Guardrails: <span className="text-p4 font-bold">Policy Aligned</span></div>
                  <div className="text-p5/70">Search Context: <span className="text-p2 font-bold">Sovereign RAG</span></div>
                </div>
              </div>
            )}

            {activeTab === "pod" && (
              <div>
                <h4 className="text-xs font-bold text-p3 uppercase tracking-wider mb-2">Orchestration Parameters</h4>
                <p className="text-[11px] text-p5 leading-relaxed text-left">
                  Stateful, autonomous multi-agent pipelines. Running asynchronous jobs, self-healing retries, and hyper-localized execution.
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2 text-[10px] font-mono text-left">
                  <div className="text-p5/70">Active Pods: <span className="text-p4 font-bold">12 Running</span></div>
                  <div className="text-p5/70">Self-Healing: <span className="text-p3 font-bold">Activated</span></div>
                  <div className="text-p5/70">Language Scope: <span className="text-p4 font-bold">Hyper-Localized</span></div>
                  <div className="text-p5/70">Fail Safe: <span className="text-p3 font-bold">Active</span></div>
                </div>
              </div>
            )}

            {/* Micro Badge */}
            <div className="mt-4 pt-2 border-t border-s3/20 flex justify-between items-center text-[9px] uppercase font-bold text-p5/50 tracking-wider">
              <span>Status: Operational</span>
              <span className="text-p3">SLA: 99.99%</span>
            </div>
          </div>

          {/* Real-time Running Terminal Console */}
          <div className="p-4 rounded-xl border border-s3/40 bg-black-100 flex flex-col justify-between font-mono min-h-[160px]">
            <div>
              <div className="flex items-center space-x-1.5 mb-2 pb-1.5 border-b border-s3/20">
                <div className="size-1.5 rounded-full bg-p1 animate-pulse" />
                <span className="text-[10px] font-bold text-p4 uppercase tracking-wider">SYSTEM_LOGS</span>
              </div>
              <div className="space-y-1.5 text-[9px] leading-relaxed select-none text-left">
                {logs.map((log) => (
                  <div key={log.id} className="flex items-start">
                    <span className="text-p5/40 mr-2">[{log.time}]</span>
                    <span className="text-p4 flex-1 break-all">{log.msg}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-[8px] text-p5/30 text-right mt-2">
              Listening for events...
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default InteractiveWorkspaceMockup;
