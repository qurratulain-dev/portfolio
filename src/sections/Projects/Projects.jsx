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

/* Panel furniture: quiet monospace metadata that frames the list without ever
   competing with the row titles. */
const panelMeta = "font-mono text-xs uppercase tracking-[0.18em] text-faint";

/* Row geometry. A fixed index column keeps every numeral on one vertical line;
   the tile column only appears from md up, where there is room for it without
   squeezing the copy at 320px. */
const rowLayout =
  "grid grid-cols-[1.75rem_minmax(0,1fr)] gap-x-3 px-5 py-7 sm:px-8 md:grid-cols-[3rem_minmax(0,1fr)_2.75rem] md:gap-x-8 md:px-10 md:py-8";

/* Flat surface, not a button: these rows are not links, so the tile carries no
   hover, shadow, or lift that would imply a destination. Display is left to the
   `hidden md:inline-flex` pair at the call site — Tailwind emits `inline-flex`
   after `hidden`, so owning it here would leak the tile into the mobile grid. */
const rowTile =
  "h-11 w-11 items-center justify-center rounded-lg border border-border bg-page text-accent [&>svg]:h-5 [&>svg]:w-5";

const Projects = () => {
  return (
    <section
      id="projects"
      className="projects-section site-section section-divider-soft scroll-mt-20"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow="Projects"
          title="What I'm Working On."
          subtitle="My portfolio projects are being organized and will be displayed here soon."
        />

        <div className="project-panel">
          {/* relative/z-10 keeps the content above the panel's grid texture. */}
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 sm:px-8 md:px-10">
              <span className={panelMeta}>Project index</span>
              <span className={panelMeta}>
                {String(upcomingHighlights.length).padStart(2, "0")} planned
              </span>
            </div>

            <ol className="divide-y divide-border">
              {upcomingHighlights.map((item, index) => (
                <li key={item.title} className={rowLayout}>
                  {/* Decorative only: the <ol> already announces the position. */}
                  <span
                    aria-hidden="true"
                    className="col-start-1 row-start-1 font-mono text-xs leading-6 tabular-nums text-faint"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="col-start-2 row-start-1 min-w-0">
                    <h3 className="text-lg font-semibold leading-snug tracking-tight text-text sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[60ch] text-[0.95rem] leading-relaxed text-muted">
                      {item.text}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className={`${rowTile} hidden md:col-start-3 md:row-start-1 md:inline-flex md:justify-self-end`}
                  >
                    {item.icon}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
