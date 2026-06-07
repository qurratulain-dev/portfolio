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
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-px bg-blue-400/40 inline-block" />
            <span className="text-xs font-semibold text-blue-400/80 uppercase tracking-[0.2em]">
              Tech Stack
            </span>
          </div>
          <h2
            className="text-white font-extrabold tracking-tight"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800 }}
          >
            Tools I Used In Production.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#b8b8b8] max-w-2xl mx-auto">
            Technologies I rely on daily to build, ship, and maintain real-world applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((cat) => (
            <SkillsSection key={cat.title} category={cat} />
          ))}
        </div>

        <div className="mt-16">
          <div className="relative bg-white dark:bg-slate-800/80 rounded-2xl border border-gray-200 dark:border-slate-700 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-indigo-500 via-purple-500 to-cyan-500" />
            <div className="relative z-10 text-center mx-auto max-w-180">
              <p className="text-base sm:text-lg font-medium text-[#b8b8b8] leading-relaxed">
                I'm always exploring new technologies and using AI tools to work smarter and deliver better results faster. My stack keeps evolving with the industry while staying rooted in solid software architecture and time-tested best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
