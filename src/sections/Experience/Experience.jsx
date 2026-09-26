import React from "react";
import SectionHeading from "../../components/SectionHeading";

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
    <section id="experience" className="site-section section-divider-soft scroll-mt-20">
      <div className="container-site">
        <SectionHeading
          eyebrow="Experience"
          title="6+ month in production."
          subtitle="My journey building products and leading teams. Real projects, real users, real impact."
        />

        {/* Single breakpoint: below lg the period and badge sit above the entry and the
            rail runs down the left, so 320-1023px never squeezes the body into a slot. */}
        <ol className="flex flex-col">
          {experiences.map((exp, idx) => {
            const isCurrent = exp.badge.variant === "current";
            const isLast = idx === experiences.length - 1;

            return (
              <li
                key={exp.period}
                className="grid grid-cols-1 gap-y-4 py-6 sm:py-8 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-x-8"
              >
                <div className="flex flex-col items-start">
                  <p className="font-mono text-xs leading-6 text-muted">{exp.period}</p>
                  <span
                    className={`chip mt-2 uppercase tracking-wider ${isCurrent ? "chip-success" : ""}`}
                  >
                    {exp.badge.label}
                  </span>
                </div>

                <div className="flex max-w-[42rem] gap-4">
                  <div className="flex w-4 shrink-0 flex-col items-center">
                    {/* my-2 + h-2 = 24px, matching the role line box, so the marker
                        sits on the title's centre line without offset maths. */}
                    <span
                      className={`my-2 h-2 w-2 shrink-0 rounded-full ${isCurrent ? "bg-success" : "bg-faint"}`}
                    />
                    {!isLast && <span className="w-px flex-1 bg-border" />}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold leading-snug tracking-tight text-text">
                      {exp.title}
                    </h3>
                    <p className="mt-1.5 text-sm font-medium text-accent">{exp.company}</p>
                    <ul className="mt-4 flex flex-col gap-3">
                      {exp.points.map((point) => (
                        <li key={point} className="flex items-baseline gap-3 text-body">
                          <span className="shrink-0 select-none text-faint" aria-hidden="true">
                            •
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
