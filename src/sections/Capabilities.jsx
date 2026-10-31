import { useState } from "react";
import clsx from "clsx";
import Reveal from "../components/Reveal.jsx";
import { capabilities } from "../content.js";

const Capabilities = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="capabilities" className="bg-paper py-28 md:py-44">
      <div className="wrap">
        <Reveal className="grid gap-10 lg:grid-cols-[5fr_7fr]">
          <p className="label-dark flex items-center gap-3">
            <span className="size-1.5 bg-black" />
            Capabilities
          </p>
          <h2 className="heading !text-black">
            Intelligence, security and software, built around your mission.
          </h2>
        </Reveal>

        <ul className="mt-24 border-t border-black/20">
          {capabilities.map((c, i) => {
            const isOpen = open === i;
            return (
              <li key={c.title} className="border-b border-black/20">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`cap-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="group flex w-full items-center gap-5 py-7 text-left md:gap-10 md:py-9"
                  >
                    <span className="label-dark w-8 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <span
                      className={clsx(
                        "flex-1 font-display text-[clamp(1.6rem,3.6vw,3.25rem)] font-normal leading-tight tracking-[-0.035em] transition-colors duration-300 group-hover:text-black",
                        isOpen ? "text-black" : "text-neutral-400",
                      )}
                    >
                      {c.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className="relative block size-5 shrink-0 text-black"
                    >
                      <span className="absolute left-0 top-1/2 h-px w-5 bg-current" />
                      <span
                        className={clsx(
                          "absolute left-1/2 top-0 h-5 w-px bg-current transition-transform duration-300",
                          isOpen && "scale-y-0",
                        )}
                      />
                    </span>
                  </button>
                </h3>
                <div
                  id={`cap-${i}`}
                  role="region"
                  aria-label={c.title}
                  className={clsx(
                    "grid transition-[grid-template-rows] duration-500 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className={clsx("overflow-hidden", !isOpen && "invisible")}>
                    <div className="grid gap-8 pb-12 md:grid-cols-[calc(2rem+2.5rem)_1fr_1fr] md:gap-10">
                      <span className="hidden md:block" />
                      <p className="max-w-xl text-lg leading-relaxed text-neutral-700 md:text-xl">
                        {c.summary}
                      </p>
                      <ul className="space-y-3">
                        {c.points.map((p) => (
                          <li key={p} className="flex items-start gap-4 text-[15px] text-neutral-800">
                            <span className="mt-[9px] size-1.5 shrink-0 bg-black" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Capabilities;
