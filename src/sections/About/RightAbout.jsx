import React from "react";

const stats = [
  { value: "6+", label: "Months Exp." },
  { value: "15+", label: "Projects" },
  { value: "10k+", label: "Daily Users" },
];

const features = [
  "Full-stack feature ownership — from schema to deployment",
  "Clean, maintainable code with focus on long-term architecture",
  "Real-world experience with payment processing, auth, and reporting",
  "Independent delivery with minimal supervision",
];

const RightAbout = () => {
  return (
    <div className="about-content mx-auto max-w-[40rem] lg:mx-0">
      <h3 className="text-xl font-bold leading-snug tracking-tight text-text sm:text-2xl">
        I'm <span className="text-accent">QURATULAIN</span>, a Full Stack Developer based in
        Gujranwala, Pakistan.
      </h3>

      <div className="mt-6 space-y-5">
        <p className="text-body">
          I specialize in Laravel and React, building applications that handle real business
          workflows — session tracking, contract signing, multi-role access, payment processing,
          reporting, and file management. I care about clean architecture and code that stays
          maintainable long after delivery.
        </p>

        <p className="text-body">
          Currently working at{" "}
          <strong className="text-text font-medium">BitStorm Solutions</strong> as a Full Stack
          Developer, where I built a complete SaaS product from the ground up. My primary focus
          is on backend development with Laravel — architecting RESTful APIs, designing database
          schemas, implementing business logic, and ensuring system scalability and
          maintainability.
        </p>

        <p className="text-body">
          I hold a BS in Computer Science from{" "}
          <strong className="text-text font-medium">
            Virtual University of Pakistan (CGPA 3.65, August 2026)
          </strong>
          . Alongside my job, I'm building PolyCV — a Laravel SaaS using the Claude API for
          AI-powered resume tailoring with an async queue pipeline.
        </p>
      </div>

      {/* Stats — open layout, no container box. A single hairline above the row
          and hairline dividers between cells, so the numbers read as one band. */}
      <ul className="mt-10 grid grid-cols-3 border-t border-token">
        {stats.map(({ value, label }, i) => (
          <li
            key={label}
            className={`flex flex-col items-center gap-1.5 px-2 py-6 sm:px-4 ${i > 0 ? "border-l border-token" : ""}`}
          >
            <span className="text-2xl font-extrabold leading-none tracking-tight text-text sm:text-3xl">
              {value}
            </span>
            <span className="font-mono text-xs uppercase leading-tight tracking-wider text-muted">
              {label}
            </span>
          </li>
        ))}
      </ul>

      {/* Supporting points */}
      <ul className="mt-8 flex flex-col gap-4">
        {features.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted">
            <span className="inline-flex h-6 w-4 shrink-0 items-center justify-center text-accent">
              <svg
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
                aria-hidden="true"
                focusable="false"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightAbout;
