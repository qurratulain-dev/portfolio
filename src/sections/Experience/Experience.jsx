import React from "react";

const experiences = [
  {
    period: "March 1st — — Present",
    badge: { label: "Current Role", variant: "current" },
    title: "Full-Stack Developer",
    company: "Bitstorm Solutions — Gujranwala, Pakistan",
    points: [
      "Architected and deployed scalable full-stack applications using Laravel & React, serving 10k+ daily active users.",
      "Led migration of legacy monolith to microservices, reducing deployment time by 60%.",
      "Collaborated with cross-functional teams to design REST APIs handling 1M+ requests/day.",
    ],
  },
  {
    period: "June 2024 — — Feb 2025",
    badge: { label: "Freelance", variant: "default" },
    title: "Full-Stack Developer",
    company: "Upwork / Fiverr — Remote",
    points: [
      "Delivered 15+ web projects for international clients, maintaining 100% job success score.",
      "Built custom CRM, e-commerce platforms, and real-time dashboards using React & Laravel.",
      "Integrated third-party APIs (Stripe, Google Maps, Twilio) ensuring seamless user experiences.",
    ],
  },
  {
    period: "Jan 2024 — — May 2024",
    badge: { label: "Internship", variant: "default" },
    title: "Backend Developer Intern",
    company: "TechVista Solutions — Remote",
    points: [
      "Developed and optimized MySQL queries, improving database response time by 35%.",
      "Assisted in building RESTful APIs and wrote unit tests using PHPUnit.",
      "Participated in daily stand-ups and code reviews following Agile methodology.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-divider-soft scroll-mt-20 py-10 sm:py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-px bg-accent/40 inline-block" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "var(--color-accent)" }}>
              Experience
            </span>
            <span className="w-8 h-px bg-accent/40 inline-block" />
          </div>
          <h2
            className="font-extrabold"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--color-text)", letterSpacing: "-0.02em" }}
          >
            6+ month in production.
          </h2>
          <p style={{ fontSize: "0.95rem", color: "var(--color-muted)", maxWidth: "480px", lineHeight: 1.7 }} className="mx-auto mt-3">
            My journey building products and leading teams. Real projects, real users, real impact.
          </p>
        </div>

        <div className="flex flex-col">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="grid grid-cols-[140px_1fr] sm:grid-cols-[180px_1fr] gap-4 sm:gap-10 py-6 sm:py-8"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "var(--color-faint)", lineHeight: 1.6, marginBottom: "0.6rem" }}>
                  {exp.period.split(" — ").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i === 0 && <br />}
                    </span>
                  ))}
                </p>
                <span
                  className={`inline-block text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded border ${
                    exp.badge.variant === "current"
                      ? "text-green-400 bg-green-500/10 border-green-500/25"
                      : "text-accent bg-accent/10 border-accent/25"
                  }`}
                >
                  {exp.badge.label}
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-text)", marginBottom: "0.2rem" }}>
                  {exp.title}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--color-accent)", marginBottom: "1rem", fontWeight: 500 }}>
                  {exp.company}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {exp.points.map((point, i) => (
                    <li key={i} style={{ fontSize: "0.88rem", color: "var(--color-muted)", lineHeight: 1.65, display: "flex", gap: "0.7rem", alignItems: "baseline" }}>
                      <span className="text-accent shrink-0">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
