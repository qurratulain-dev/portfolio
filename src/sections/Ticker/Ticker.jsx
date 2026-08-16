import React from "react";

const techStack = [
  "PHP", "Laravel", "React.js", "SaaS & Multi-Tenant Systems",
  "MySQL", "REST APIs", "JavaScript", "Tailwind CSS", "Bootstrap", 
  "JQuery", "AJAX", "GSAP", "Git", "Responsive Design", "CI/CD",  "HTML5", "CSS3",
];

const Ticker = () => {
  return (
    <div className="ticker">
      <div className="ticker-track group">
        <div className="flex tick-animate group-hover:[animation-play-state:paused]">
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="tick-item">
              <i className="not-italic">◆</i>
              {tech}
            </span>
          ))}
        </div>
        <div className="flex tick-animate group-hover:[animation-play-state:paused]" aria-hidden="true">
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="tick-item">
              <i className="not-italic">◆</i>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .ticker {
          border-top: 1px solid rgba(59,130,246,0.15);
          border-bottom: 1px solid rgba(59,130,246,0.15);
          background: var(--bg1);
          overflow: hidden;
          padding: 0.65rem 0;
        }
        .ticker-track {
          display: flex;
          width: max-content;
        }
        .tick-animate {
          animation: tick 30s linear infinite;
        }
        @keyframes tick {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .tick-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0 1.8rem;
          white-space: nowrap;
          flex-shrink: 0;
          font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace;
          font-size: 0.72rem;
          color: var(--color-muted);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .tick-item i {
          color: var(--color-accent);
          font-size: 0.55rem;
        }
      `}</style>
    </div>
  );
};

export default Ticker;
