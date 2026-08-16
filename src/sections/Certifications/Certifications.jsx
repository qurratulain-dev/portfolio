import React from "react";

const certifications = [
  { title: "Laravel Certification", issuer: "Bytewise Community", year: "2024" },
  { title: "Meta Backend Developer", issuer: "Meta — Coursera", year: "2024" },
  { title: "Meta Frontend Developer", issuer: "Meta — Coursera", year: "2024" },
  { title: "Programming with JavaScript", issuer: "Meta — Coursera", year: "2023" },
  { title: "React Basics", issuer: "Meta — Coursera", year: "2023" },
  {
    title: "One Million Prompters Initiative",
    issuer: "Dubai Crown Prince — AI Prompt Engineering",
    year: "2026",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-divider-soft scroll-mt-20 py-10 sm:py-12 lg:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-px bg-accent/40 inline-block" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "var(--color-accent)" }}>
              Certifications
            </span>
            <span className="w-8 h-px bg-accent/40 inline-block" />
          </div>
          <h2
            className="font-extrabold"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--color-text)", letterSpacing: "-0.02em" }}
          >
            {certifications.length}+ verified credentials.
          </h2>
          <p style={{ fontSize: "0.95rem", color: "var(--color-muted)", maxWidth: "480px", lineHeight: 1.7 }} className="mx-auto mt-3">
            Continuous learning across backend, frontend, databases, and professional skills.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="group border border-white/10 rounded-lg p-5 bg-white/[0.02] hover:border-accent/40 hover:bg-accent/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-md bg-accent/10 text-accent font-mono text-sm">
                  ✓
                </span>
                <span className="font-mono text-xs text-faint">{cert.year}</span>
              </div>
              <h3 className="text-text font-semibold mb-1">
                {cert.title}
              </h3>
              <p className="font-mono text-xs text-faint">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
