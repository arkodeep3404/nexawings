import Reveal from "../components/Reveal.jsx";

const Statement = () => (
  <section className="bg-paper py-28 md:py-44">
    <div className="wrap">
      <Reveal>
        <p className="label-dark mb-10 flex items-center gap-3">
          <span className="size-1.5 bg-black" />
          Our mission
        </p>
        <p className="font-display text-[clamp(2rem,5.4vw,5rem)] font-normal leading-[1.04] tracking-[-0.04em] text-black">
          For institutions that cannot afford to be breached, misled or slowed down.
        </p>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-neutral-600 md:text-xl">
          We work with public and private organisations across the world, from national
          governments and police forces to the largest listed companies, to find weaknesses
          before adversaries do, watch for threats as they emerge, and put intelligence in the
          hands of the people who decide.
        </p>
      </Reveal>
    </div>
  </section>
);

export default Statement;
