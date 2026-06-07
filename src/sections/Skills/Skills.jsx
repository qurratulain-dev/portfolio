import React from "react";
import SkillsSection from "./SkillsSection";

const skillCategories = [
  {
    title: "Backend",
    skills: ["PHP", "Laravel", "REST APIs", "Authentication", "API Integration"],
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
    skills: ["Git", "CI/CD", "VS Code"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-surface-primary section-divider-soft scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-xs font-semibold text-emerald-400/60 uppercase tracking-[0.2em] mb-3">
            Tech Stack
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-emerald-500 tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500 tracking-wide uppercase">
            Technologies I Work With
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
