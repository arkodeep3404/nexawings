import { Element } from "react-scroll";
import Button from "../components/Button.jsx";
import InteractiveWorkspaceMockup from "../components/InteractiveWorkspaceMockup.jsx";

const Hero = () => {
  return (
    <section className="relative pt-48 pb-32 max-lg:pt-40 max-lg:pb-24 max-md:pt-28 max-md:pb-20 overflow-hidden">
      <Element name="hero">
        <div className="container relative z-2 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6">
          {/* Left Column: Product Branding Copy */}
          <div className="w-full lg:w-[50%] flex flex-col items-start text-left">
            <div className="caption small-2 uppercase text-p3 mb-4 tracking-widest">
              Sovereign AI &amp; Agentic Action OS
            </div>
            <h1 className="mb-6 text-[40px] sm:text-[60px] xl:text-[72px] leading-[1.05] font-black uppercase text-p4 tracking-tight">
              Sovereign AI.<br />
              Orchestrated.<br />
              <span className="text-p1">Executed.</span>
            </h1>
            <p className="max-w-md mb-10 text-[16px] sm:text-[18px] text-p5 leading-relaxed">
              NexaWings unifies sovereign domain-expert brains, stateful multi-agent workflows, and secure sandboxed tool execution. Natively powered by AWS Bedrock for sovereign model pipelines and AWS KMS for encrypted credential isolation.
            </p>
            <a
              href="https://calendar.app.google/sgKVt8mp3mmCS6Ca8"
              target="_blank"
              rel="noreferrer"
              className="inline-block"
            >
              <Button icon="/images/zap.svg">Book AWS VC Pitch Call</Button>
            </a>
          </div>

          {/* Right Column: Visual Interactive Workspace */}
          <div className="w-full lg:w-[48%] flex justify-center lg:justify-end">
            <div className="w-full max-w-xl">
              <InteractiveWorkspaceMockup />
            </div>
          </div>
        </div>

        {/* Futuristic Background Lights */}
        <div className="absolute top-0 left-1/4 -z-1 w-[600px] h-[600px] bg-p2/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 -z-1 w-[400px] h-[400px] bg-p1/5 rounded-full blur-[140px] pointer-events-none" />
      </Element>
    </section>
  );
};

export default Hero;
