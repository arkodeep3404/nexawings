import Reveal from "../components/Reveal.jsx";
import Globe from "../components/Globe.jsx";
import { BOOKING_URL, CONTACT_EMAIL } from "../content.js";

const Contact = () => (
  <section id="contact" className="relative overflow-hidden bg-ink py-28 md:py-48">
    <Globe className="pointer-events-none absolute -right-[20%] top-1/2 h-[140%] w-[80%] -translate-y-1/2 opacity-40 max-lg:opacity-20" />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
    <Reveal className="wrap relative">
      <p className="label mb-10 flex items-center gap-3">
        <span className="size-1.5 bg-signal" />
        Contact
      </p>
      <h2 className="display max-w-[12ch]">Start the conversation.</h2>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-300 md:text-xl">
        Tell us about your mission. We will arrange a confidential briefing with the right
        people on our team.
      </p>
      <div className="mt-12 flex flex-col gap-4 sm:flex-row">
        <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="btn-solid sm:min-w-[260px]">
          Request a briefing
        </a>
        <a href={`mailto:${CONTACT_EMAIL}`} className="btn-line normal-case tracking-normal sm:min-w-[260px]">
          {CONTACT_EMAIL}
        </a>
      </div>
    </Reveal>
  </section>
);

export default Contact;
