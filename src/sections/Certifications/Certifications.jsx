import React from "react";
import SectionHeading from "../../components/SectionHeading";

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
    <section id="certifications" className="site-section section-divider-soft scroll-mt-20">
      <div className="container-site">
        <SectionHeading
          eyebrow="Certifications"
          title={`${certifications.length}+ verified credentials.`}
          subtitle="Continuous learning across backend, frontend, databases, and professional skills."
        />

        {/* Hairline rows instead of boxed cards: with a top border per item, uneven
            title lengths leave no visible card-shaped gaps, and 6 accent-tile +
            lift-hover combinations disappear entirely. */}
        <ul className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <li key={cert.title} className="border-t border-border pt-5">
              <h3 className="text-base font-semibold leading-snug tracking-tight text-text">
                {/* Decorative only: the heading already states "verified credentials". */}
                <span className="mr-1.5 select-none text-sm text-faint" aria-hidden="true">
                  ✓
                </span>
                {cert.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{cert.issuer}</p>
              <p className="mt-1.5 font-mono text-xs leading-6 text-muted">{cert.year}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
