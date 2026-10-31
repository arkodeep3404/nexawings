import Reveal from "../components/Reveal.jsx";
import { principles } from "../content.js";

const Principles = () => (
  <section id="principles" className="bg-paper py-28 md:py-44">
    <div className="wrap">
      <Reveal className="grid gap-10 lg:grid-cols-[5fr_7fr]">
        <p className="label-dark flex items-center gap-3">
          <span className="size-1.5 bg-black" />
          Principles
        </p>
        <h2 className="heading !text-black">
          Work this sensitive demands a particular standard.
        </h2>
      </Reveal>

      <dl className="mt-24 grid gap-x-16 gap-y-16 md:grid-cols-2">
        {principles.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 90} className="border-t border-black/20 pt-8">
            <dt className="font-display text-3xl font-normal tracking-[-0.03em] text-black">
              {p.title}
            </dt>
            <dd className="mt-4 max-w-lg text-lg leading-relaxed text-neutral-700">{p.text}</dd>
          </Reveal>
        ))}
      </dl>
    </div>
  </section>
);

export default Principles;
