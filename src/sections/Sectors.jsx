import Reveal from "../components/Reveal.jsx";
import { sectors } from "../content.js";

const Sectors = () => (
  <section id="sectors" className="bg-ink py-28 md:py-44">
    <div className="wrap">
      <Reveal className="grid gap-10 lg:grid-cols-[5fr_7fr]">
        <p className="label flex items-center gap-3">
          <span className="size-1.5 bg-signal" />
          Who we serve
        </p>
        <h2 className="heading">
          Trusted where the stakes are highest, across the public and private sectors, worldwide.
        </h2>
      </Reveal>

      <ul className="mt-24 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
        {sectors.map((s, i) => (
          <Reveal
            as="li"
            key={s.title}
            delay={(i % 3) * 80}
            className="group relative border-b border-r border-line p-8 transition-colors duration-500 hover:bg-white/[0.04] md:p-10"
          >
            <div className="mb-20 flex items-center justify-between">
              <p className="label">{String(i + 1).padStart(2, "0")}</p>
              <span
                aria-hidden="true"
                className="text-xl text-mute transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
              >
                ↗
              </span>
            </div>
            <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-fg md:text-[28px]">
              {s.title}
            </h3>
            <p className="mt-4 leading-relaxed">{s.text}</p>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

export default Sectors;
