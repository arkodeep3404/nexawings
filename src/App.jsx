import { useState } from "react";
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Statement from "./sections/Statement.jsx";
import Sectors from "./sections/Sectors.jsx";
import Capabilities from "./sections/Capabilities.jsx";
import Approach from "./sections/Approach.jsx";
import DataProtection from "./sections/DataProtection.jsx";
import Principles from "./sections/Principles.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import PrivacyPage from "./sections/PrivacyPage.jsx";

const App = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  if (showPrivacy) {
    return <PrivacyPage onClose={() => setShowPrivacy(false)} />;
  }

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-fg focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Statement />
        <Sectors />
        <Capabilities />
        <Approach />
        <DataProtection />
        <Principles />
        <Contact />
      </main>
      <Footer onOpenPrivacy={() => setShowPrivacy(true)} />
    </>
  );
};

export default App;
