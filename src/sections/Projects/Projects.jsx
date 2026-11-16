import React from "react";
import { FiArrowUpRight, FiGithub, FiServer } from "react-icons/fi";
import SectionHeading from "../../components/SectionHeading";

const GITHUB = "https://github.com/qurratulain-dev";

/* Copy is taken from each repository, with no invented metrics. The Personal
   Portfolio stack is limited to what this repo actually uses. */
const projects = [
  {
    title: "Mental Health Score Prediction",
    tag: "ML · API",
    description:
      "Predicts a student's mental health score (0–10) from sleep, study, social media and lifestyle habits. A scikit-learn Random Forest pipeline, tuned with GridSearchCV, is served through a FastAPI REST API with a web form that updates the score live.",
    tech: ["Python", "scikit-learn", "Pandas", "FastAPI", "Pydantic", "Render"],
    live: "https://mental-health-score-prediction-4foq.onrender.com",
    code: [{ label: "GitHub", href: `${GITHUB}/mental-health-score-prediction` }],
    note: "Free server: the first visit can take 30–50 seconds to wake up.",
  },
  {
    title: "Blood on Click",
    tag: "Full-Stack",
    description:
      "A blood donation platform with separate dashboards for donors, blood banks and admins: donor and blood bank search, blood requests, stock management, donation records with medical reports, eligibility assessments and notifications.",
    tech: ["React", "Vite", "Tailwind CSS", "TanStack Query", "Laravel 12", "Sanctum", "PostgreSQL", "Docker"],
    live: "https://blood-on-click.vercel.app",
    code: [
      { label: "Frontend Code", href: `${GITHUB}/blood-on-click-frontend-` },
      { label: "Backend API", href: `${GITHUB}/blood-on-click-backend-`, icon: <FiServer /> },
    ],
    note: "Free backend: the first login can take 30–50 seconds to wake up.",
  },
  {
    title: "Petuk",
    tag: "Frontend",
    description:
      "An animated pizza and food delivery website with live search, filters and sorting, a cart drawer, a validated checkout flow, saved order history and a delivery tracking stepper. Fully responsive and respects reduced motion.",
    tech: ["React 19", "Vite", "Tailwind CSS", "React Router", "Framer Motion", "GSAP"],
    live: "https://petuk-ashy.vercel.app",
    code: [{ label: "GitHub", href: `${GITHUB}/Petuk` }],
  },
  {
    title: "Personal Portfolio",
    tag: "Frontend",
    description:
      "A responsive personal portfolio with GSAP animations, built with React 19, Vite and Tailwind CSS 4 and deployed on Vercel.",
    tech: ["React 19", "Vite", "Tailwind CSS 4", "GSAP", "Vercel"],
    live: "https://quratulain-naseem.vercel.app",
    code: [{ label: "Code", href: `${GITHUB}/portfolio` }],
  },
];

/* Card buttons are a size down from the hero buttons so three fit on one row. */
const cardBtn = { paddingInline: "1rem", fontSize: "0.875rem", minHeight: "2.75rem" };

const ProjectCard = ({ project }) => (
  <article
    className="project-panel card-interactive flex h-full flex-col p-6 sm:p-8"
    aria-labelledby={`project-${project.title.replace(/\s+/g, "-").toLowerCase()}`}
  >
    {/* relative/z-10 keeps the content above the panel's grid texture. */}
    <div className="relative z-10 flex min-w-0 flex-col">
      <span className="chip self-start uppercase tracking-wider">{project.tag}</span>
      <h3
        id={`project-${project.title.replace(/\s+/g, "-").toLowerCase()}`}
        className="mt-4 text-xl font-semibold leading-snug tracking-tight text-text sm:text-2xl"
      >
        {project.title}
      </h3>
      <p className="mt-3 max-w-[62ch] text-[0.95rem] leading-relaxed text-muted">
        {project.description}
      </p>
    </div>

    <div className="relative z-10 mt-6 flex flex-1 flex-col">
      <ul className="flex flex-wrap gap-2" aria-label={`${project.title} tech stack`}>
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-md border border-border bg-page px-2.5 py-1 font-mono text-xs text-muted"
          >
            {t}
          </li>
        ))}
      </ul>

      {project.note && <p className="mt-4 text-xs leading-relaxed text-muted">{project.note}</p>}

      <div className="mt-6 flex flex-wrap gap-3 pt-0 lg:mt-auto lg:pt-6">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={cardBtn}
          aria-label={`${project.title} live demo (opens in a new tab)`}
        >
          <FiArrowUpRight aria-hidden="true" className="h-4 w-4" />
          Live Demo
        </a>
        {project.code.map((c) => (
          <a
            key={c.href}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={cardBtn}
            aria-label={`${project.title} ${c.label === "GitHub" || c.label === "Code" ? "source code" : c.label} on GitHub (opens in a new tab)`}
          >
            {c.icon ? (
              <span aria-hidden="true" className="h-4 w-4 [&>svg]:h-4 [&>svg]:w-4">{c.icon}</span>
            ) : (
              <FiGithub aria-hidden="true" className="h-4 w-4" />
            )}
            {c.label}
          </a>
        ))}
      </div>
    </div>
  </article>
);

const Projects = () => {
  return (
    <section
      id="portfolio"
      className="projects-section site-section section-divider-soft scroll-mt-nav"
    >
      <div className="container-site">
        <SectionHeading
          title="A Portfolio of Innovation and Impact"
          subtitle="Showcasing innovative projects built with modern full-stack technologies."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
