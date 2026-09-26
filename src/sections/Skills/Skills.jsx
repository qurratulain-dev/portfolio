import React from "react";
import { FiServer, FiMonitor, FiDatabase, FiTerminal, FiZap } from "react-icons/fi";
import SectionHeading from "../../components/SectionHeading";

const skillCategories = [
  {
    icon: <FiServer className="w-4 h-4" />,
    title: "Backend",
    skills: ["PHP", "Laravel", "Authentication", "Queues/Jobs", "Sanctum Auth", "Roles/Permissions", "AJAX"],
  },
  {
    icon: <FiMonitor className="w-4 h-4" />,
    title: "Frontend",
    skills: ["JavaScript (ES6+)", "React.js", "Bootstrap", "Tailwind CSS", "HTML / CSS", "jQuery", "GSAP"],
  },
  {
    icon: <FiDatabase className="w-4 h-4" />,
    title: "Database",
    skills: ["MySQL", "Database Design", "Query Optimization"],
  },
  {
    icon: <FiTerminal className="w-4 h-4" />,
    title: "DevOps & Tools",
    skills: ["Git", "CI/CD", "VS Code", "Postman"],
  },
  {
    icon: <FiZap className="w-4 h-4" />,
    title: "APIs & Integrations",
    skills: ["REST APIs", "API Integration"],
  },
];

/* One hairline top and bottom bound the whole list, so the categories read as a
   single system rather than five separate boxes. A 12rem definition column keeps
   every chip row starting on the same vertical line at md and up, while leaving
   the wider share of the row to the skills themselves. */
const rowLayout =
  "grid grid-cols-1 items-start gap-x-8 gap-y-3 border-b border-token py-6 md:grid-cols-[12rem_minmax(0,1fr)]";

/* h-8 on both the category name and the chips keeps their text optically centred
   on the same line without any offset maths. */
const categoryTitle = "flex h-8 items-center gap-3";

const skillChip =
  "inline-flex h-8 items-center whitespace-nowrap rounded-md border border-token bg-surface px-3 font-sans text-sm font-medium leading-none text-muted";

const Skills = () => {
  return (
    <section id="skills" className="site-section section-divider-soft scroll-mt-20">
      <div className="container-site">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I Used In Production."
          subtitle="Technologies I rely on daily to build, ship, and maintain real-world applications."
        />

        <dl className="border-t border-token">
          {skillCategories.map((cat) => (
            <div key={cat.title} className={rowLayout}>
              <dt className={categoryTitle}>
                <span className="shrink-0 text-accent" aria-hidden="true">
                  {cat.icon}
                </span>
                <span className="text-base font-semibold tracking-tight text-text">
                  {cat.title}
                </span>
              </dt>
              <dd className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className={skillChip}>
                    {skill}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Skills;
