import { Wordmark } from "./Header.jsx";
import { CONTACT_EMAIL, navItems } from "../content.js";

const Footer = ({ onOpenPrivacy }) => (
  <footer className="border-t border-line">
    <div className="wrap flex flex-col gap-12 py-14 md:flex-row md:items-start md:justify-between">
      <div>
        <Wordmark />
        <p className="mt-6 max-w-xs text-sm leading-relaxed">
          Cybersecurity, monitoring and decision intelligence for institutions worldwide.
        </p>
      </div>

      <nav aria-label="Footer" className="grid grid-cols-2 gap-x-16 gap-y-0 font-mono text-[12px] uppercase tracking-label">
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="flex min-h-[44px] items-center text-mute transition-colors hover:text-fg">
            {item.label}
          </a>
        ))}
        <a href={`mailto:${CONTACT_EMAIL}`} className="flex min-h-[44px] items-center text-mute transition-colors hover:text-fg">
          Contact
        </a>
        <button type="button" onClick={onOpenPrivacy} className="flex min-h-[44px] items-center text-left uppercase tracking-label text-mute transition-colors hover:text-fg">
          Privacy
        </button>
      </nav>
    </div>
    <div className="wrap border-t border-line py-6 text-xs">
      © {new Date().getFullYear()} NexaWings International. All rights reserved.
    </div>
  </footer>
);

export default Footer;
