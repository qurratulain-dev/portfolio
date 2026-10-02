import React, { useEffect, useRef } from "react";

const techStack = [
  "PHP", "Laravel", "React.js", "SaaS & Multi-Tenant Systems",
  "MySQL", "REST APIs", "JavaScript", "Tailwind CSS", "Bootstrap",
  "JQuery", "AJAX", "GSAP", "Git", "Responsive Design", "CI/CD", "HTML5", "CSS3",
];

const Ticker = () => {
  const trackRef = useRef(null);

  /* The marquee is a 45s infinite transform animation, so it used to keep
     compositing a frame every vsync for the whole time the page was open,
     including the long stretches where the strip sits far off-screen and
     nobody can see it. An IntersectionObserver parks it with
     animation-play-state while it is out of view and releases it again on the
     way back in, so the animation is untouched whenever it is actually
     visible - it still resumes at the same point in the cycle rather than
     restarting. Observing costs nothing when the tab is idle or backgrounded,
     and the observer is disconnected on unmount. The reduced-motion rule
     below is unaffected: it removes the animation outright, and a paused
     animation that is never going to run is the same thing either way. */
  useEffect(() => {
    const track = trackRef.current;
    if (!track || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        track.style.animationPlayState = entry.isIntersecting ? "running" : "paused";
      },
      { threshold: 0 }
    );
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="ticker">
      {/* Non-moving, screen-reader accessible copy of the stack (the moving
          track below is decorative and hidden from assistive tech). */}
      <p className="sr-only">
        <span className="font-medium text-text">Tech stack:</span>{" "}
        {techStack.join(" \u00b7 ")}
      </p>

      <div className="ticker-viewport" aria-hidden="true">
        <div className="ticker-track" ref={trackRef}>
          {[0, 1].map((copy) => (
            <div className="ticker-group" key={copy}>
              {techStack.map((tech) => (
                <span className="tick-item" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ticker {
          /* Spacing / motion tokens */
          --tick-pad: clamp(1rem, 2.2vw, 1.6rem);
          --tick-fade: clamp(1.75rem, 5vw, 4.5rem);
          --tick-duration: 45s;

          position: relative;
          /* Pulled up into the Hero's bottom padding so the strip reads as
             the Hero's closing detail rather than a standalone section. */
          margin-top: calc(var(--section-y) * -0.4);
          padding-block: clamp(0.75rem, 1.4vw, 1rem);
          background: var(--ui-section);
          border-top: 1px solid var(--ui-border);
          border-bottom: 1px solid var(--ui-border);
          overflow: hidden;
        }

        /* Clipping window: the marquee is free to move horizontally here while
           the document itself never gains a horizontal scrollbar. */
        .ticker-viewport {
          display: flex;
          align-items: center;
          -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 var(--tick-fade), #000 calc(100% - var(--tick-fade)), transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0, #000 var(--tick-fade), #000 calc(100% - var(--tick-fade)), transparent 100%);
        }

        /* One animation on the whole track. -50% equals exactly one group
           width, so copy 2 hands over to copy 1 with no visible jump. */
        .ticker-track {
          display: flex;
          align-items: center;
          width: max-content;
          will-change: transform;
          animation: tick-scroll var(--tick-duration) linear infinite;
        }

        .ticker-group {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .tick-item {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          flex-shrink: 0;
          padding-inline: var(--tick-pad);
          font-family: var(--font-sans);
          font-size: clamp(0.75rem, 0.7rem + 0.15vw, 0.8125rem);
          font-weight: 500;
          line-height: 1;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ui-text-muted);
          white-space: nowrap;
        }

        /* Separator: a small geometric marker, deliberately quieter than the
           technology name. Drawn in CSS so it never depends on glyph
           coverage or fallback fonts. */
        .tick-item::before {
          content: "";
          flex-shrink: 0;
          width: 0.25rem;
          height: 0.25rem;
          border-radius: 1px;
          background: color-mix(in srgb, var(--ui-accent) 52%, transparent);
        }

        /* Items are informational, not links/buttons \u2014 so the only affordance
           is a pause on hover, to make reading easier. */
        .ticker:hover .ticker-track {
          animation-play-state: paused;
        }

        @keyframes tick-scroll {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .ticker-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Ticker;
