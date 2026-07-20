import React, { useState } from "react";
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Playground from "./sections/Playground.jsx";
import Download from "./sections/Download.jsx";
import DeveloperDocs from "./sections/DeveloperDocs.jsx";
import Security from "./sections/Security.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Footer from "./sections/Footer.jsx";
import PrivacyPage from "./sections/PrivacyPage.jsx";

const App = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <main className="overflow-hidden">
      {showPrivacy ? (
        <PrivacyPage onClose={() => setShowPrivacy(false)} />
      ) : (
        <>
          <Header />
          <Hero />
          <Features />
          <Playground />
          <Download />
          <DeveloperDocs />
          <Security />
          <Pricing />
          <Faq />
          <Testimonials />
          <Footer onOpenPrivacy={() => setShowPrivacy(true)} />
        </>
      )}
    </main>
  );
};

export default App;
