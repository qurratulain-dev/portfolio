import React from "react";

const LeftAbout = () => {
  return (
    <div className="about-photo-wrap mx-auto w-full max-w-[min(18rem,74vw)] sm:max-w-[21rem] lg:sticky lg:top-20 lg:mx-0 lg:max-w-none">
      {/* Match the face framing used by apple-touch-icon, directly from the
          1024px portrait source so the small touch icon is never upscaled. */}
      <div className="about-photo relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-border-strong bg-surface shadow-[var(--ui-shadow)]">
        {/* Full-resolution WebP; the wider portrait frame reveals more of the
            source vertically while keeping the face aligned with the icon. */}
        <img
          src="/profile-1024.webp"
          width={1024}
          height={1536}
          alt="Portrait of Quratulain Naseem, full-stack developer"
          loading="lazy"
          decoding="async"
          className="absolute max-w-none"
          style={{
            width: "221.4%",
            maxWidth: "none",
            left: "-101.4%",
            top: "-9.73%",
          }}
        />
        <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 rounded-lg border border-border bg-surface/85 px-3 py-1.5 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-success ring-2 ring-success/25" aria-hidden="true" />
          <span className="text-xs font-medium tracking-[0.02em] text-text">
            Available for opportunities
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeftAbout;
