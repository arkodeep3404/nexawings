import { useEffect, useState } from "react";
import clsx from "clsx";
import { BOOKING_URL, navItems } from "../content.js";

export const Wordmark = ({ className }) => (
  <span className={clsx("flex items-center gap-3", className)}>
    <img src="/images/icon.png" alt="" width={34} height={28} className="h-7 w-auto" />
    <span className="font-mono text-[13px] font-medium uppercase tracking-label text-fg">
      NexaWings
    </span>
  </span>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open
          ? "border-b border-line bg-ink/95 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="wrap flex h-[72px] items-center justify-between">
        <a href="#top" aria-label="NexaWings home" onClick={() => setOpen(false)}>
          <Wordmark />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-mono text-[12px] uppercase tracking-label text-mute transition-colors hover:text-fg"
            >
              {item.label}
            </a>
          ))}
          <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="btn-line min-h-[40px] px-5">
            Request a briefing
          </a>
        </nav>

        <button
          type="button"
          className="flex size-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-6">
            <span
              className={clsx(
                "absolute left-0 h-px w-6 bg-fg transition-all duration-300",
                open ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={clsx(
                "absolute left-0 h-px w-6 bg-fg transition-all duration-300",
                open ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[72px] overflow-y-auto bg-ink lg:hidden"
      >
        <nav aria-label="Mobile" className="wrap flex flex-col py-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="border-b border-line py-6 text-3xl font-light tracking-tight text-fg"
            >
              {item.label}
            </a>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-solid mt-10"
            onClick={() => setOpen(false)}
          >
            Request a briefing
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
