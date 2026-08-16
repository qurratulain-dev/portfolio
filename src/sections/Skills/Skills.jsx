import React from "react";
import { FiServer, FiMonitor, FiDatabase, FiTerminal, FiZap } from "react-icons/fi";

const skillCategories = [
  {
    icon: <FiServer className="w-5 h-5" />,
    title: "Backend",
    skills: ["PHP", "Laravel", "Authentication", "Queues/Jobs", "Sanctum Auth", "Roles/Permissions", "AJAX"],
  },
  {
    icon: <FiMonitor className="w-5 h-5" />,
    title: "Frontend",
    skills: ["JavaScript (ES6+)", "React.js", "Bootstrap", "Tailwind CSS", "HTML / CSS", "jQuery", "GSAP"],
  },
  {
    icon: <FiDatabase className="w-5 h-5" />,
    title: "Database",
    skills: ["MySQL", "Database Design", "Query Optimization"],
  },
  {
    icon: <FiTerminal className="w-5 h-5" />,
    title: "DevOps & Tools",
    skills: ["Git", "CI/CD", "VS Code", "Postman"],
  },
  {
    icon: <FiZap className="w-5 h-5" />,
    title: "APIs & Integrations",
    skills: ["REST APIs", "API Integration"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-divider-soft scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-px bg-accent/40 inline-block" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "var(--color-accent)" }}>
              Tech Stack
            </span>
          </div>
          <h2
            className="font-extrabold"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--color-text)", letterSpacing: "-0.02em" }}
          >
            Tools I Used In Production.
          </h2>
          <p style={{ fontSize: "0.95rem", color: "var(--color-muted)", maxWidth: "480px", lineHeight: 1.7 }} className="mx-auto mt-3">
            Technologies I rely on daily to build, ship, and maintain real-world applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="group border border-white/10 rounded-lg p-5 bg-white/[0.02] hover:border-accent/40 hover:bg-accent/5 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon on top, Title below */}
              <div className="flex flex-col items-start gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-md bg-accent/10 text-accent shrink-0">
                  {cat.icon}
                </span>
                <h3 className="text-text font-semibold">
                  {cat.title}
                </h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono bg-accent/10 text-accent border border-accent/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;