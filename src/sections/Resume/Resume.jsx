import { useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const experiences = [
  {
    period: "Feb 2026 – Oct 2026",
    duration: "(9 Months)",
    title: "Junior Full-Stack Developer",
    company: "Bitstorm Solutions",
    companyUrl: "https://bitstormsolutions.com/",
    location: "Gujranwala, PK",
  },
  {
    period: "Nov 2025 – Feb 2026",
    duration: "(4 Months)",
    title: "Web Development Intern",
    company: "Bitstorm Solutions",
    companyUrl: "https://bitstormsolutions.com/",
    location: "Gujranwala, PK",
  },
];

const education = [
  {
    period: "2022 – 2026",
    title: "BS Computer Science",
    institute: "Virtual University of Pakistan",
    detail: "CGPA: 3.69 / 4.0",
  },
  {
    period: "Sep 2026 – Present",
    title: "HCCDA–Artificial Intelligence | HCPT Batch II",
    institute: "CyberPulse Institute of Technology",
    detail: "Lahore, PK",
  },
];

const reduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const ResumeCard = ({ period, duration, title, place, placeUrl, detail, revealIndex }) => {
  return (
    <article
      data-reveal
      style={{ "--reveal-delay": `${revealIndex * 80}ms` }}
      className="resume-card card card-interactive"
    >
      <p className="resume-card-period">{period}</p>
      {duration && <p className="resume-card-duration">{duration}</p>}
      <h3 className="resume-card-title">{title}</h3>
      <p className="resume-card-place">
        {placeUrl ? (
          <a
            href={placeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${place} (opens in a new tab)`}
          >
            {place}
            <FiArrowUpRight aria-hidden="true" />
          </a>
        ) : (
          place
        )}
      </p>
      {detail && <p className="resume-card-detail">{detail}</p>}
    </article>
  );
};

const Resume = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;
    const items = root.querySelectorAll("[data-reveal]");
    if (reduceMotion()) {
      items.forEach((el) => el.classList.add("is-revealed"));
      return;
    }
    root.classList.add("resume-motion");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="resume"
      ref={sectionRef}
      aria-label="Resume"
      className="site-section section-divider-soft scroll-mt-nav"
    >
      <div className="container-site">
        <div className="resume-columns">
          <div>
            <h2
              data-reveal
              style={{ "--reveal-delay": "0ms" }}
              className="resume-column-title"
            >
              My Experience
            </h2>
            <div className="resume-stack">
              {experiences.map((job, idx) => (
                <ResumeCard
                  key={`${job.title}-${job.period}`}
                  period={job.period}
                  duration={job.duration}
                  title={job.title}
                  place={job.company}
                  placeUrl={job.companyUrl}
                  detail={job.location}
                  revealIndex={idx + 1}
                />
              ))}
            </div>
          </div>

          <div>
            <h2
              data-reveal
              style={{ "--reveal-delay": "0ms" }}
              className="resume-column-title"
            >
              My Education
            </h2>
            <div className="resume-stack">
              {education.map((item, idx) => (
                <ResumeCard
                  key={`${item.title}-${item.period}`}
                  period={item.period}
                  title={item.title}
                  place={item.institute}
                  detail={item.detail}
                  revealIndex={idx + 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
