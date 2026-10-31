import Globe from "../components/Globe.jsx";
import { BOOKING_URL } from "../content.js";

const Hero = () => (
  <section id="top" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink">
    <div className="grid-lines pointer-events-none absolute inset-0" />
    <Globe className="pointer-events-none absolute inset-0 h-full w-full max-lg:-translate-y-[10%] max-lg:opacity-40 lg:left-[38%] lg:w-[62%]" />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/90 via-transparent to-transparent max-lg:hidden" />

    <div className="wrap relative pb-14 pt-40 md:pb-20">
      <p className="label mb-8 flex items-center gap-3">
        <span className="size-1.5 bg-signal" />
        Offensive security · Defence · Decision intelligence
      </p>
      <h1 className="display max-w-[15ch]">Defend what the world depends on.</h1>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-300 md:text-xl">
        NexaWings partners with governments, law enforcement and the world&apos;s largest
        organisations to deliver AI-powered cybersecurity, penetration testing and red teaming,
        monitoring, fraud detection and decision-making solutions, with custom software built and
        deployed at global scale.
      </p>
      <div className="mt-12 flex flex-col gap-4 sm:flex-row">
        <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="btn-solid sm:min-w-[260px]">
          Request a briefing
        </a>
        <a href="#capabilities" className="btn-line sm:min-w-[260px]">
          Explore capabilities
        </a>
      </div>
    </div>

    <div className="wrap relative">
      <div className="flex items-center justify-between border-t border-line py-5">
        <span className="label">Scroll</span>
        <span className="label">Confidential by default</span>
      </div>
    </div>
  </section>
);

export default Hero;
