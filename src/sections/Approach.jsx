import Reveal from "../components/Reveal.jsx";
import { approach } from "../content.js";

const Approach = () => (
  <section id="approach" className="bg-ink py-28 md:py-44">
    <div className="wrap">
      <Reveal className="grid gap-10 lg:grid-cols-[5fr_7fr]">
        <p className="label flex items-center gap-3">
          <span className="size-1.5 bg-signal" />
          Approach
        </p>
        <h2 className="heading">From first conversation to global operation.</h2>
      </Reveal>

      <ol className="mt-24 grid border-t border-line md:grid-cols-2 lg:grid-cols-4">
        {approach.map((step, i) => (
          <Reveal
            as="li"
            key={step.title}
            delay={i * 90}
            className="border-b border-line py-10 md:border-b-0 md:pr-10 lg:[&:not(:last-child)]:border-r lg:pl-10 lg:first:pl-0"
          >
            <p className="font-mono text-sm text-signal">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-24 font-display text-2xl font-normal tracking-[-0.02em] text-fg">
              {step.title}
            </h3>
            <p className="mt-4 leading-relaxed">{step.text}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default Approach;
