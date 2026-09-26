import React from "react";
import SocialLinks from "./SocialLinks";
import HeroActions from "./HeroActions";

const stats = [
  { value: "6+", label: "Months Exp." },
  { value: "15+", label: "Projects" },
  { value: "10k+", label: "Daily Users" },
  { value: "3.65", label: "CGPA" },
];

const Hero = () => {
  return (
    <section id="home" className="relative scroll-mt-20 overflow-hidden">
      {/* Subtle dot-grid background (depth without clutter) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-accent) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Soft glow top-right */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container-site pt-28 pb-20">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-success/30 bg-success/10 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          <span className="font-mono text-xs text-success tracking-wide">
            Open to new opportunities
          </span>
        </div>

        {/* Terminal prompt line (eye-catching dev touch) */}
        <p className="font-mono text-sm text-faint mb-4">
          <span className="text-success">➜</span>{" "}
          <span className="text-accent">~/quratulain</span> whoami
          <span className="animate-pulse text-text">_</span>
        </p>

        {/* Markdown-style heading */}
        <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text tracking-tight mb-8">
          <span className="text-accent mr-3">#</span>Full-Stack
          <br />
          Developer<span className="text-accent">.</span>
        </h1>

        {/* Intro with bold keywords */}
        <p className="text-base sm:text-lg md:text-xl text-muted leading-relaxed max-w-3xl mb-10">
          <span className="text-text font-semibold">Quratulain Naseem</span> — I build
          production-grade web applications:{" "}
          <span className="text-text font-semibold">
            multi-tenant SaaS platforms, REST APIs, admin dashboards, and payment systems
          </span>
          . Currently serving{" "}
          <span className="text-text font-semibold">10k+ daily users</span> with Laravel
          &amp; React at BitStorm Solutions.
        </p>

        {/* CTAs */}
        <div className="mb-12">
          <HeroActions />
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-faint uppercase tracking-wider">
            // connect
          </span>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Hero;