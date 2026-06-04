import React from "react";
import { FiCode, FiClock, FiEye } from "react-icons/fi";

const upcomingHighlights = [
  {
    icon: <FiCode />,
    title: "Frontend Projects",
    text: "Modern React interfaces and responsive website work will be added here.",
  },
  {
    icon: <FiEye />,
    title: "Live Previews",
    text: "Selected projects will include short details, screenshots, and demo links.",
  },
  {
    icon: <FiClock />,
    title: "Coming Soon",
    text: "This section is being prepared and will be updated with real work soon.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-surface-secondary section-divider-soft scroll-mt-20 py-10 sm:py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-emerald-500 text-center">
          Projects
        </h2>

        <p className="text-center my-3 text-[#b8b8b8] max-w-2xl mx-auto">
          My portfolio projects are being organized and will be displayed here
          soon.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingHighlights.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-emerald-500/20 bg-[#111827]/85 p-5 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:bg-[#111827]"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/10 text-2xl text-emerald-400">
                {item.icon}
              </span>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-[#b8b8b8]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
