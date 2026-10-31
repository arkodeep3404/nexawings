import Reveal from "../components/Reveal.jsx";
import { dataProtection } from "../content.js";

const DataProtection = () => (
  <section id="data-protection" className="border-t border-line bg-panel py-28 md:py-44">
    <div className="wrap grid gap-16 lg:grid-cols-[5fr_7fr] lg:gap-24">
      <Reveal>
        <p className="label mb-10 flex items-center gap-3">
          <span className="size-1.5 bg-signal" />
          Data protection
        </p>
        <h2 className="heading">Your data stays private, encrypted and under lock.</h2>
        <p className="mt-8 max-w-md text-lg leading-relaxed">
          Everyone who works with us trusts us with their most sensitive information. We protect
          it at every stage: in transit, at rest and in our vaults.
        </p>
      </Reveal>

      <dl className="grid gap-px bg-line sm:grid-cols-2">
        {dataProtection.map((d, i) => (
          <Reveal key={d.tag} delay={(i % 2) * 90} className="bg-panel p-8 md:p-10">
            <p className="label text-signal">{d.tag}</p>
            <dt className="mt-14 font-display text-2xl font-normal tracking-[-0.02em] text-fg">
              {d.title}
            </dt>
            <dd className="mt-4 leading-relaxed">{d.text}</dd>
          </Reveal>
        ))}
      </dl>
    </div>
  </section>
);

export default DataProtection;
