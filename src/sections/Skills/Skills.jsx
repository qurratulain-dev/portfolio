import React from "react";
import SkillsSection from "./SkillsSection";

const skillCategories = [
  {
    title: "Backend",
    skills: ["PHP", "Laravel", "Authentication", "Queues/Jobs", "Sanctum Auth", "Roles/Permissions"],
  },
  {
    title: "Frontend",
    skills: ["JavaScript (ES6+)", "React.js", "Vue.js", "Bootstrap", "Tailwind CSS", "HTML / CSS", "jQuery", "GSAP"],
  },
  {
    title: "Database",
    skills: ["MySQL", "Database Design", "Query Optimization"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "CI/CD", "VS Code", "Postman"],
  },
  {
    title: "APIs & Integrations",
    skills: ["REST APIs", "API Integration"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-divider-soft scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-px bg-blue-400/40 inline-block" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "#3B82F6" }}>
              Tech Stack
            </span>
          </div>
          <h2
            className="font-extrabold"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "#FAFAFA", letterSpacing: "-0.02em" }}
          >
            Tools I Used In Production.
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#71717A", maxWidth: "480px", lineHeight: 1.7 }} className="mx-auto mt-3">
            Technologies I rely on daily to build, ship, and maintain real-world applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((cat) => (
            <SkillsSection key={cat.title} category={cat} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
