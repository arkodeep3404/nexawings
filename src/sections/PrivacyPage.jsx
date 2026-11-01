import { useEffect } from "react";
import { Wordmark } from "./Header.jsx";
import { CONTACT_EMAIL } from "../content.js";

const LAST_UPDATED = "31 October 2026";

const sections = [
  {
    title: "Who we are",
    body: [
      "NexaWings International (“NexaWings”, “we”, “us”) provides cybersecurity, monitoring, decision-intelligence and custom software services to governments, law enforcement agencies, and public and private organisations worldwide. This notice explains how we handle personal information and client data.",
    ],
  },
  {
    title: "Scope of this notice",
    body: [
      "This notice covers personal information collected through this website and the data entrusted to us by the organisations we work with. Work for clients is also governed by the confidentiality and data-protection terms of each engagement. Where those terms are stricter, they apply.",
    ],
  },
  {
    title: "Information we collect through this website",
    body: [
      "This website does not require an account. We receive personal information only when you choose to contact us, such as your name, work email address, organisation and the content of your message, whether you email us or book a briefing through our scheduling page.",
    ],
  },
  {
    title: "How we use it",
    items: [
      "To respond to your enquiry and arrange or conduct briefings.",
      "To manage our relationship with you and the organisation you represent.",
      "To meet our legal and regulatory obligations.",
    ],
    body: ["We use personal information only for the purposes below, and we do not sell it."],
  },
  {
    title: "How we protect client data",
    body: [
      "We keep the data of every organisation we work with fully private and secure. Protection applies at every stage:",
    ],
    items: [
      "Private by default: client data is used only for the work the client has asked us to do. It is never shared with third parties for their own purposes and never sold.",
      "Encryption in transit: data moving between client systems and ours is protected by strong encryption, so it cannot be read or altered on the way.",
      "Encryption at rest: data we store is encrypted at rest to a high standard, so it is unreadable without authorisation.",
      "Secure vaults: sensitive material is held in secured, access-controlled vaults, kept separate from our general systems.",
      "Restricted access: only authorised personnel who need access for an engagement can reach client data, and they are bound by strict confidentiality obligations.",
      "Confidential engagements: we do not disclose who our clients are or what we do for them without their permission.",
    ],
  },
  {
    title: "Authorised testing",
    body: [
      "Our offensive security services, including penetration testing and red team engagements, are carried out only with the client’s written permission, within an agreed scope and clear rules of engagement. Information discovered during an engagement is treated as confidential client data and is reported only to the client.",
    ],
  },
  {
    title: "Sharing",
    body: [
      "We share personal information only with service providers who help us operate our communications and scheduling, and where required by law. Our booking link is provided by a third-party scheduling service, which handles information you enter there under its own terms. Service providers act on our instructions and must protect information to an appropriate standard.",
    ],
  },
  {
    title: "International operations",
    body: [
      "We work with clients across the world. Where information moves between countries, we take steps to protect it in line with applicable law and our contractual commitments, including client requirements about where data may be stored and processed.",
    ],
  },
  {
    title: "Retention and deletion",
    body: [
      "We keep enquiry information only as long as needed for the purposes above or as the law requires. Client data is kept for the duration of the engagement and handled at its end as the client’s agreement with us provides, including return or secure deletion.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "Depending on where you live, you may have the right to access, correct, delete or restrict the use of your personal information, and to object to certain uses. To exercise these rights, contact us using the details below. We will respond within the time required by law.",
    ],
  },
  {
    title: "Security incidents",
    body: [
      "If we become aware of an incident affecting personal information or client data, we will act promptly to contain it and will notify affected parties and authorities as the law and our client agreements require.",
    ],
  },
  {
    title: "Changes to this notice",
    body: [
      "We may update this notice from time to time. The date of the latest version is shown at the top of this page.",
    ],
  },
];

const PrivacyPage = ({ onClose }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen">
      <header className="border-b border-line">
        <div className="wrap flex h-[72px] items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            aria-label="Back to NexaWings home"
            className="flex min-h-[44px] items-center"
          >
            <Wordmark />
          </button>
          <button type="button" onClick={onClose} className="btn-line min-h-[40px] px-5">
            Back to home
          </button>
        </div>
      </header>

      <main className="wrap max-w-4xl py-24 md:py-32">
        <p className="label mb-6">Legal</p>
        <h1 className="display">Privacy notice</h1>
        <p className="label mt-8">Last updated {LAST_UPDATED}</p>

        <div className="mt-20 space-y-14">
          {sections.map((s, i) => (
            <section key={s.title} className="grid gap-4 border-t border-line pt-8 md:grid-cols-[56px_1fr] md:gap-8">
              <p className="label pt-2 text-signal">{String(i + 1).padStart(2, "0")}</p>
              <div>
                <h2 className="font-display text-2xl font-normal tracking-[-0.02em] text-fg">
                  {s.title}
                </h2>
                {s.body?.map((para) => (
                  <p key={para} className="mt-4 max-w-2xl text-lg leading-relaxed">
                    {para}
                  </p>
                ))}
                {s.items && (
                  <ul className="mt-4 max-w-2xl space-y-3">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-4 text-lg leading-relaxed">
                        <span className="mt-[13px] size-1.5 shrink-0 bg-signal" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}

          <section className="grid gap-4 border-t border-line pt-8 md:grid-cols-[56px_1fr] md:gap-8">
            <p className="label pt-2 text-signal">{String(sections.length + 1).padStart(2, "0")}</p>
            <div>
              <h2 className="font-display text-2xl font-normal tracking-[-0.02em] text-fg">Contact</h2>
              <p className="mt-4 text-lg">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-block py-2 text-fg underline underline-offset-4 hover:text-signal"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPage;
