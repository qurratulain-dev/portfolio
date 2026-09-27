import React from "react";

const LeftAbout = () => {
  return (
    <div className="about-photo-wrap mx-auto w-full max-w-[min(18rem,74vw)] sm:max-w-[21rem] lg:sticky lg:top-20 lg:mx-0 lg:max-w-none">
      {/* 2/3 matches the 1024x1536 source, so the portrait is shown uncropped. */}
      <div className="about-photo relative aspect-[2/3] w-full overflow-hidden rounded-xl border border-border-strong bg-surface shadow-[var(--ui-shadow)]">
        {/* Served as WebP (693 kB PNG -> 17-26 kB) via srcset, so the browser
            picks a candidate matched to the real render size. The PNG stays in
            public/ as the og:image and apple-touch-icon, not as a page asset.
            width/height mirror the 2:3 source: the aspect-ratio box already
            reserves the space, so they add intrinsic dimensions without moving
            anything. The portrait sits below the fold and is never the LCP
            element (measured: LCP is the h1 on desktop, the intro paragraph on
            mobile), so lazy + async decode is safe here. */}
        <img
          src="/profile-1024.webp"
          srcSet="/profile-704.webp 704w, /profile-1024.webp 1024w"
          sizes="(min-width: 1024px) 352px, (min-width: 640px) 336px, 288px"
          width={1024}
          height={1536}
          alt="Portrait of Quratulain Naseem, full-stack developer"
          loading="lazy"
          decoding="async"
          className="block h-full w-full object-cover"
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
