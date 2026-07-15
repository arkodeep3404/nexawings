import React, { useState } from "react";
import { Element } from "react-scroll";

const INTEGRATIONS_DATA = [
  {
    id: "workday",
    name: "Workday",
    category: "HRIS",
    status: "Active",
    color: "#ff8a00",
    json: {
      integration: "Workday",
      data_model: "UnifiedEmployee",
      sync_status: "synced",
      last_sync: "12ms ago",
      employee: {
        id: "emp_wd982",
        first_name: "Sarah",
        last_name: "Jenkins",
        work_email: "s.jenkins@enterprise.com",
        job_title: "Principal Architect",
        department: "AI Platforms",
        compensation: {
          salary: 195000,
          currency: "USD",
          pay_frequency: "Bi-Weekly",
        },
      },
    },
  },
  {
    id: "salesforce",
    name: "Salesforce",
    category: "CRM",
    status: "Active",
    color: "#00a1e0",
    json: {
      integration: "Salesforce",
      data_model: "UnifiedAccount",
      sync_status: "synced",
      last_sync: "4ms ago",
      account: {
        id: "sf_acc_482",
        name: "Acme Corporate Corp",
        annual_revenue: 12500000,
        deal_value: 450000,
        stage: "Closed Won",
        agent_actions: {
          assigned_pod: "pod_billing_sync",
          status: "Processed",
        },
      },
    },
  },
  {
    id: "bamboohr",
    name: "BambooHR",
    category: "HRIS",
    status: "Active",
    color: "#5ca823",
    json: {
      integration: "BambooHR",
      data_model: "UnifiedTimeOff",
      sync_status: "synced",
      last_sync: "18ms ago",
      request: {
        employee_id: "emp_bb890",
        leave_type: "Paid Time Off",
        start_date: "2026-07-20",
        end_date: "2026-07-24",
        total_days: 5,
        approval_status: "Pending AI Audit",
      },
    },
  },
  {
    id: "greenhouse",
    name: "Greenhouse",
    category: "ATS",
    status: "Active",
    color: "#00b074",
    json: {
      integration: "Greenhouse",
      data_model: "UnifiedCandidate",
      sync_status: "synced",
      last_sync: "32ms ago",
      candidate: {
        id: "gh_cand_726",
        name: "Marcus Aurelius",
        email: "marcus.aurelius@rome.org",
        role: "Lead ML Research Scientist",
        interview_stage: "Executive Presentation",
        score: "9.8/10 (Exceptional)",
      },
    },
  },
  {
    id: "hubspot",
    name: "HubSpot",
    category: "CRM",
    status: "Active",
    color: "#ff7a59",
    json: {
      integration: "HubSpot",
      data_model: "UnifiedContact",
      sync_status: "synced",
      last_sync: "8ms ago",
      contact: {
        id: "hs_cont_911",
        email: "ceo@growthscale.io",
        lifecycle_stage: "Sales Qualified Lead",
        lead_score: 92,
        owner_id: "agent_pod_sales_outreach",
      },
    },
  },
  {
    id: "lever",
    name: "Lever",
    category: "ATS",
    status: "Idle",
    color: "#4e5be6",
    json: {
      integration: "Lever",
      data_model: "UnifiedJobPosting",
      sync_status: "idle",
      last_sync: "3h ago",
      posting: {
        id: "lev_post_209",
        title: "Senior Product Manager - AI Integrations",
        department: "Product Management",
        location: "Bengaluru, India",
        status: "Open",
      },
    },
  },
  {
    id: "adp",
    name: "ADP Run",
    category: "Payroll",
    status: "Active",
    color: "#ad2121",
    json: {
      integration: "ADP Run",
      data_model: "UnifiedPayrollHistory",
      sync_status: "synced",
      last_sync: "50ms ago",
      payroll: {
        pay_period_id: "pay_2026_06",
        disbursed_total: 894300,
        currency: "USD",
        execution_date: "2026-06-30",
        security_hash: "0x89abfcd302",
      },
    },
  },
  {
    id: "slack",
    name: "Slack Notify",
    category: "Comms",
    status: "Active",
    color: "#4a154b",
    json: {
      integration: "Slack Notify",
      data_model: "UnifiedMessageOut",
      sync_status: "synced",
      last_sync: "1ms ago",
      payload: {
        channel_id: "#ops-alerts",
        text: ":rotating_light: Alert: Intelligence Pod completed sync reconciliation.",
        username: "NexaWings Agent Pod",
        attachment_fields: {
          records_synced: 1450,
          latency: "12ms",
        },
      },
    },
  },
  {
    id: "stripe",
    name: "Stripe",
    category: "Payments",
    status: "Active",
    color: "#635bff",
    json: {
      integration: "Stripe",
      data_model: "UnifiedInvoice",
      sync_status: "synced",
      last_sync: "9ms ago",
      invoice: {
        id: "in_19f3a",
        customer_email: "billing@acmecorp.com",
        amount_due: 149900,
        currency: "usd",
        status: "paid",
        metadata: {
          source: "NexaWings Pro Plan",
        },
      },
    },
  },
];

const Download = () => {
  const [selectedInt, setSelectedInt] = useState(INTEGRATIONS_DATA[0]);
  const [showModal, setShowModal] = useState(false);
  const [modalStage, setModalStage] = useState("list"); // 'list', 'auth', 'syncing', 'success'
  const [modalPlatform, setModalPlatform] = useState(null);
  const [syncProgress, setSyncProgress] = useState(0);
  const [toastMessage, setToastMessage] = useState("");

  const handleOpenWidget = () => {
    setShowModal(true);
    setModalStage("list");
    setModalPlatform(null);
    setSyncProgress(0);
  };

  const handleSelectPlatform = (platform) => {
    setModalPlatform(platform);
    setModalStage("auth");
  };

  const triggerSyncSequence = (e) => {
    e.preventDefault();
    setModalStage("syncing");
    setSyncProgress(0);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setSyncProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setModalStage("success");
        setToastMessage(`${modalPlatform.name} connected successfully! Real-time syncing active.`);
        
        // Hide success message automatically and close modal after delay
        setTimeout(() => {
          setShowModal(false);
          setToastMessage("");
        }, 2000);
      }
    }, 250);
  };

  return (
    <section>
      <Element
        name="integrations"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container relative z-2">
          {/* Toast Notification */}
          {toastMessage && (
            <div className="fixed bottom-10 right-10 z-[100] px-6 py-4 rounded-2xl bg-s2 border-2 border-p3 shadow-500 flex items-center space-x-3 animate-bounce">
              <span className="size-2.5 rounded-full bg-p3 animate-ping" />
              <span className="text-xs font-mono text-p4 font-bold uppercase tracking-wider">{toastMessage}</span>
            </div>
          )}

          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16 max-w-5xl">
            <div className="max-w-2xl text-left">
              <div className="caption small-2 uppercase text-p3 mb-4 tracking-widest">
                Unified Integration Fabric
              </div>
              <h2 className="h2 text-p4 uppercase max-md:text-3xl mb-6">
                Connect 100+ Systems. <span className="text-p1">One Schema.</span>
              </h2>
              <p className="body-2 text-p5 max-w-xl">
                Integrate with all your HRIS, ATS, ERP, and CRM platforms with a single unified, bi-directional API. Let your AI agents securely read and write data in real-time.
              </p>
            </div>

            {/* Launch Widget Button */}
            <button
              onClick={handleOpenWidget}
              className="px-6 py-4 rounded-2xl bg-p1/10 hover:bg-p1/25 border-2 border-p1/35 hover:border-p1 text-p1 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-300"
            >
              Demo Connect SDK Widget
            </button>
          </div>

          {/* Interactive Fabric Display */}
          <div className="flex flex-col lg:flex-row items-stretch gap-10">
            
            {/* Left side: Integrations Grid */}
            <div className="flex-1">
              <h3 className="h5 text-p4 mb-6 uppercase tracking-wider text-left">Select Database / Connector</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {INTEGRATIONS_DATA.map((item) => {
                  const isSelected = selectedInt.id === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedInt(item)}
                      className={`relative p-5 rounded-2xl border text-left transition-all duration-300 ${
                        isSelected
                          ? "border-p1 bg-s2/90 shadow-100 scale-102"
                          : "border-s3/40 bg-s1/60 hover:border-s3 hover:bg-s1/90"
                      }`}
                    >
                      {/* Left color bar */}
                      <div
                        className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl"
                        style={{ backgroundColor: item.color }}
                      />
                      
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold text-p4 tracking-wide">{item.name}</span>
                        <span className="text-[8px] font-mono uppercase bg-s3/30 text-p5/80 px-2 py-0.5 rounded border border-s3/40">
                          {item.category}
                        </span>
                      </div>

                      <div className="flex items-center space-x-1.5">
                        <span className={`size-1.5 rounded-full ${item.status === "Active" ? "bg-p3" : "bg-p5/40"}`} />
                        <span className="text-[9px] text-p5/60 uppercase tracking-wider">{item.status}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
              <div className="mt-8 text-p5/60 text-xs text-left">
                * Built-in support for OAuth, token rotation, webhook pooling, and automatic rate-limit management.
              </div>
            </div>

            {/* Right side: Live Code / JSON Display */}
            <div className="w-full lg:w-[480px] flex flex-col">
              <h3 className="h5 text-p4 mb-6 uppercase tracking-wider text-left">Unified Normalized Schema</h3>
              <div className="flex-1 bg-black-100 border border-s3/40 rounded-2xl overflow-hidden font-mono shadow-500 flex flex-col">
                {/* Header of JSON Editor */}
                <div className="flex items-center justify-between border-b border-s3/20 px-4 py-2.5 bg-s2/40">
                  <div className="flex space-x-1.5">
                    <div className="size-2 bg-p1/40 rounded-full" />
                    <span className="text-[10px] text-p5/50 uppercase tracking-wider">Response payload</span>
                  </div>
                  <span className="text-[10px] text-p3 uppercase tracking-wider font-bold">200 OK</span>
                </div>
                {/* JSON Content */}
                <div className="p-5 flex-1 text-[11px] text-p1 overflow-x-auto select-all leading-relaxed whitespace-pre bg-s1/30 text-left">
                  {JSON.stringify(selectedInt.json, null, 2)}
                </div>
                {/* Footer of JSON Editor */}
                <div className="border-t border-s3/10 px-4 py-2 bg-s2/20 text-right text-[9px] text-p5/40">
                  content-type: application/json
                </div>
              </div>
            </div>

          </div>

        </div>
      </Element>

      {/* Embeddable Magic Link SDK Modal Simulator */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-[6px] transition-all duration-300">
          <div className="relative w-full max-w-md rounded-3xl border-2 border-s3 bg-s2 p-6 shadow-500 overflow-hidden flex flex-col">
            
            {/* Window title bar */}
            <div className="flex justify-between items-center pb-4 border-b border-s3/20 mb-6">
              <div className="flex items-center space-x-2">
                <svg className="size-5 text-p1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <span className="text-xs font-bold text-p4 uppercase tracking-wider font-mono">NexaWings Connect SDK</span>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="text-p5/40 hover:text-p4 transition-colors font-bold text-lg leading-none"
              >
                &times;
              </button>
            </div>

            {/* Stage 1: SELECT PLATFORM */}
            {modalStage === "list" && (
              <div>
                <h4 className="text-sm font-bold text-p4 mb-2 uppercase tracking-wide">Connect SaaS Software</h4>
                <p className="text-[11px] text-p5/70 mb-4 leading-relaxed">
                  Allow NexaWings to sync datasets from your third-party systems. Choose a platform to verify permissions:
                </p>
                <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                  {INTEGRATIONS_DATA.filter(i => i.id !== "slack" && i.id !== "stripe").map((platform) => (
                    <button
                      key={platform.id}
                      onClick={() => handleSelectPlatform(platform)}
                      className="w-full flex items-center justify-between p-3 rounded-xl border border-s3/35 bg-s1/60 hover:border-p1 hover:bg-s1 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="size-2 rounded-full" style={{ backgroundColor: platform.color }} />
                        <span className="text-xs font-bold text-p4">{platform.name}</span>
                      </div>
                      <span className="text-[9px] uppercase font-mono px-2 py-0.5 rounded bg-s3/40 text-p5/70">{platform.category}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Stage 2: AUTHENTICATION */}
            {modalStage === "auth" && (
              <form onSubmit={triggerSyncSequence}>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="size-3 rounded-full" style={{ backgroundColor: modalPlatform.color }} />
                  <h4 className="text-sm font-bold text-p4 uppercase tracking-wide">Sync with {modalPlatform.name}</h4>
                </div>
                
                <p className="text-[11px] text-p5/70 mb-4 leading-relaxed">
                  Provide credentials for <span className="font-bold text-p4">{modalPlatform.name}</span>. Credentials remain encrypted under zero-knowledge key custody inside your VPC.
                </p>

                <div className="space-y-3 mb-6">
                  <div>
                    <label className="text-[9px] font-bold text-p5/40 uppercase block mb-1">Tenant Domain Url</label>
                    <input 
                      type="text" 
                      required 
                      defaultValue={`https://tenant.${modalPlatform.id}.com`}
                      className="w-full px-3 py-2 rounded-xl bg-s1/80 border border-s3/50 text-xs font-mono text-p4 focus:outline-none focus:border-p1" 
                    />
                  </div>
                  <div>
                    <label className="text-[9px] font-bold text-p5/40 uppercase block mb-1">API Key / Token</label>
                    <input 
                      type="password" 
                      required 
                      defaultValue="••••••••••••••••••••••••"
                      className="w-full px-3 py-2 rounded-xl bg-s1/80 border border-s3/50 text-xs font-mono text-p4 focus:outline-none focus:border-p1" 
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setModalStage("list")}
                    className="text-xs text-p5/60 hover:text-p4 transition-colors uppercase tracking-wider"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-p1 text-s1 font-bold text-xs uppercase tracking-wider hover:bg-p1/90 transition-all duration-300"
                  >
                    Authorize Connect
                  </button>
                </div>
              </form>
            )}

            {/* Stage 3: SYNCING PROGRESS */}
            {modalStage === "syncing" && (
              <div className="text-center py-6">
                <h4 className="text-sm font-bold text-p4 uppercase tracking-wider mb-2">Syncing Data Structures</h4>
                <p className="text-[11px] text-p5/70 mb-6 font-mono">
                  Establishing handshakes &amp; importing schema maps...
                </p>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-s3/20 rounded-full overflow-hidden mb-3">
                  <div 
                    className="h-full bg-p1 rounded-full transition-all duration-200"
                    style={{ width: `${syncProgress}%` }}
                  />
                </div>
                <div className="text-xs font-mono text-p1 font-bold">
                  {syncProgress}% Complete
                </div>
              </div>
            )}

            {/* Stage 4: SUCCESS */}
            {modalStage === "success" && (
              <div className="text-center py-6 flex flex-col items-center">
                <div className="size-12 rounded-full bg-p3/20 border-2 border-p3 flex items-center justify-center mb-4">
                  <svg className="size-6 text-p3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-sm font-bold text-p4 uppercase tracking-wider mb-2">Platform Connected</h4>
                <p className="text-[11px] text-p5/70 leading-relaxed font-mono">
                  Bi-directional webhooks verified.<br />
                  Data modeling normalized successfully.
                </p>
              </div>
            )}

          </div>
        </div>
      )}
    </section>
  );
};

export default Download;
