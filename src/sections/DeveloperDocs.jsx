import React, { useState } from "react";
import { Element } from "react-scroll";

const CODE_TEMPLATES = {
  python: {
    language: "python",
    code: `import nexawings

# Initialize client in your Sovereign VPC
client = nexawings.Client(
    api_key="nw_live_8390f...",
    host="https://sovereign.nexawings.internal"
)

# 1. Query Sovereign RAG Brain (Connected via AWS Bedrock)
brain = client.brains.get("invoice-compliance-agent")
response = brain.query(
    prompt="Audit invoice #8910 against internal corporate guidelines",
    temperature=0.0
)

# 2. Trigger an Intelligence Pod Workflow
run = client.pods.trigger(
    pod_id="billing-reconciliation",
    variables={
        "invoice_data": response.extracted_fields,
        "erp_target": "internal-erp-database"
    }
)

print(f"Workflow triggered: {run.id} | Status: {run.status}")`,
  },
  javascript: {
    language: "javascript",
    code: `import { NexaWings } from '@nexawings/sdk';

// Initialize Client
const client = new NexaWings({
  apiKey: process.env.NEXAWINGS_API_KEY,
  endpoint: 'https://sovereign.nexawings.internal'
});

// Sync data via Unified Integrations Schema
const employees = await client.integrations.queryUnified({
  category: 'HRIS',
  fields: ['id', 'first_name', 'last_name', 'compensation.base_salary'],
  filter: { 'status': 'active' }
});

// Run safety audit via VoiceShield speech safety guardrails
const auditResult = await client.security.voiceShield({
  audioStream: audioInput,
  policies: ['compliance-rule-4a', 'anti-phishing']
});

console.log(\`Sync status: \${employees.records.length} records. Voice Shield: \${auditResult.passed}\`);`,
  },
  curl: {
    language: "bash",
    code: `# Query Sovereign Brain Endpoint
curl -X POST "https://sovereign.nexawings.internal/v1/brains/query" \\
  -H "Authorization: Bearer nw_live_8390f..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "brain_id": "corporate-financial-policy",
    "query": "Is travel reimbursement over $200 permitted?",
    "guardrails": {
      "hallucination_filter": true,
      "pii_masking": true
    }
  }'`,
  },
};

const DeveloperDocs = () => {
  const [activeTab, setActiveTab] = useState("python");

  return (
    <section className="relative py-28 border-t border-s3/20 bg-s1/50 overflow-hidden">
      <Element name="developer" className="relative z-2">
        <div className="container">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 max-md:mb-10">
            <div className="caption small-2 uppercase text-p3 mb-4 tracking-widest">
              Developer First Interface
            </div>
            <h2 className="h2 max-md:h4 text-p4 mb-4 uppercase">
              Developer Code Sandbox
            </h2>
            <p className="body-2 text-p5 max-w-lg mx-auto">
              Implement unified APIs and trigger sovereign agent actions in minutes with native SDKs.
            </p>
          </div>

          {/* Code sandbox interface */}
          <div className="max-w-4xl mx-auto rounded-3xl border-2 border-s3 bg-s2/90 shadow-500 overflow-hidden backdrop-blur-md">
            
            {/* Sandbox Header with tabs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-b border-s3/30 bg-s1/50 px-6 py-4 gap-4">
              <div className="flex items-center space-x-1.5">
                <div className="size-2.5 rounded-full bg-red-500" />
                <div className="size-2.5 rounded-full bg-yellow-500" />
                <div className="size-2.5 rounded-full bg-green-500" />
                <span className="text-[11px] font-mono text-p5/40 ml-3 uppercase tracking-wider">nexawings-sdk-editor</span>
              </div>
              
              <div className="flex space-x-2">
                {Object.keys(CODE_TEMPLATES).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold uppercase transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-p1/10 border border-p1/30 text-p1 shadow-100"
                        : "border border-transparent text-p5/50 hover:text-p4 hover:bg-s3/10"
                    }`}
                  >
                    {tab === "javascript" ? "Node.js" : tab === "curl" ? "cURL" : "Python"}
                  </button>
                ))}
              </div>
            </div>

            {/* Code Body */}
            <div className="relative">
              {/* Code Panel */}
              <div className="p-6 font-mono text-[11px] sm:text-xs leading-relaxed text-p4 overflow-x-auto whitespace-pre bg-s1/40 text-left select-all min-h-[380px]">
                {CODE_TEMPLATES[activeTab].code}
              </div>

              {/* Copy Indicator */}
              <div className="absolute bottom-4 right-4 bg-s3/20 border border-s3/40 rounded px-2.5 py-1 text-[9px] font-bold text-p5/60 uppercase tracking-widest select-none pointer-events-none">
                Double click code to select
              </div>
            </div>

          </div>

        </div>
      </Element>

      {/* Decorative Light Halos */}
      <div className="absolute left-0 bottom-0 -z-1 w-[350px] h-[350px] bg-p1/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default DeveloperDocs;
