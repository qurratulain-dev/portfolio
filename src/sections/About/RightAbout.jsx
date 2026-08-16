import React from "react";

const RightAbout = () => {
  return (
    <div className="about-content">
      <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--color-text)", letterSpacing: "-0.02em", marginBottom: "1.5rem", lineHeight: 1.3 }}>
        I'm <span style={{ color: "var(--color-accent)" }}>QURATULAIN</span>, a Full Stack Developer based in Gujranwala, Pakistan.
      </h3>

      <p className="text-muted text-sm sm:text-base leading-relaxed mb-5" style={{ color: "var(--color-muted)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.2rem" }}>
        I specialize in Laravel and React, building applications that handle real business workflows — session tracking,
        contract signing, multi-role access, payment processing, reporting, and file management. I care about clean
        architecture and code that stays maintainable long after delivery.
      </p>

      <p style={{ color: "var(--color-muted)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.2rem" }}>
        Currently working at <strong className="text-text font-medium">BitStorm Solutions</strong> as a Full Stack Developer,
        where I built a complete SaaS product from the ground up. My primary focus is on backend development with Laravel —
        architecting RESTful APIs, designing database schemas, implementing business logic, and ensuring system scalability
        and maintainability.
      </p>

      <p style={{ color: "var(--color-muted)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.2rem" }}>
        I hold a BS in Computer Science from <strong className="text-text font-medium">Virtual University of Pakistan (CGPA 3.65, August 2026)</strong>.
        Alongside my job, I'm building PolyCV — a Laravel SaaS using the Claude API for AI-powered resume
        tailoring with an async queue pipeline.
      </p>

      {/* Stats */}
      <div className="flex border border-white/10  overflow-hidden mt-8" style={{ borderRadius: "var(--r, 12px)" }}>
        <div className="flex-1 py-5 px-4 text-center border-r border-white/10">
          <span className="text-2xl sm:text-3xl font-extrabold text-accent block leading-none tracking-tight">6+</span>
          <span className="text-[10px] font-mono text-muted uppercase tracking-widest mt-1 block">Months Exp.</span>
        </div>
        <div className="flex-1 py-5 px-4 text-center border-r border-white/10">
          <span className="text-2xl sm:text-3xl font-extrabold text-accent block leading-none tracking-tight">15+</span>
          <span className="text-[10px] font-mono text-muted uppercase tracking-widest mt-1 block">Projects</span>
        </div>
        <div className="flex-1 py-5 px-4 text-center">
          <span className="text-2xl sm:text-3xl font-extrabold text-accent block leading-none tracking-tight">10k+</span>
          <span className="text-[10px] font-mono text-muted uppercase tracking-widest mt-1 block">Daily Users</span>
        </div>
      </div>

      {/* What I Bring */}
      <div className="mt-8 flex flex-col gap-3">
        {[
          "Full-stack feature ownership — from schema to deployment",
          "Clean, maintainable code with focus on long-term architecture",
          "Real-world experience with payment processing, auth, and reporting",
          "Independent delivery with minimal supervision",
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.88rem", color: "var(--color-muted)", lineHeight: 1.6 }}>
            <svg className="w-3 h-3 text-accent mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightAbout;
