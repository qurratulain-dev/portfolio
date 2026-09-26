import React from "react";
import { FiCode, FiClock, FiEye } from "react-icons/fi";
import SectionHeading from "../../components/SectionHeading";

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
    <section id="projects" className="site-section section-divider-soft scroll-mt-20">
      <div className="container-site">
        <SectionHeading
          eyebrow="Projects"
          title="What I'm Working On."
          subtitle="My portfolio projects are being organized and will be displayed here soon."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingHighlights.map((item) => (
            <article
              key={item.title}
              className="card card-interactive"
            >
              <span className="mb-4 icon-badge">
                {item.icon}
              </span>
              <h3 className="card-title">{item.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;