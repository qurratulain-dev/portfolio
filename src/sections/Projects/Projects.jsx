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
    <section id="projects" className="section-divider-soft scroll-mt-20 py-10 sm:py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-px bg-accent/40 inline-block" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "var(--color-accent)" }}>
              Projects
            </span>
            <span className="w-8 h-px bg-accent/40 inline-block" />
          </div>
          <h2
            className="font-extrabold"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--color-text)", letterSpacing: "-0.02em" }}
          >
            What I'm Working On.
          </h2>
          <p style={{ fontSize: "0.95rem", color: "var(--color-muted)", maxWidth: "480px", lineHeight: 1.7 }} className="mx-auto mt-3">
            My portfolio projects are being organized and will be displayed here soon.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingHighlights.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-accent/20 bg-primary p-5 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-accent/50"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-2xl text-accent">
                {item.icon}
              </span>
              <h3 className="text-xl font-semibold text-text">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
