import React from "react";

const LeftAbout = () => {
  return (
    <div className="about-photo-wrap mx-auto w-full max-w-[min(18rem,74vw)] sm:max-w-[21rem] lg:sticky lg:top-20 lg:mx-0 lg:max-w-none">
      {/* 2/3 matches the 1024x1536 source, so the portrait is shown uncropped. */}
      <div className="about-photo relative aspect-[2/3] w-full overflow-hidden rounded-xl border border-border-strong bg-surface shadow-[var(--ui-shadow)]">
        <img
          src="/profile.png"
          alt="Profile"
          className="block h-full w-full object-cover"
        />
        <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 rounded-lg border border-border bg-surface/85 px-3 py-1.5 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-success ring-2 ring-success/25" />
          <span className="text-xs font-medium tracking-[0.02em] text-text">
            Available for opportunities
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeftAbout;
