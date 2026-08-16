import React from "react";

const LeftAbout = () => {
  return (
    <div className="about-photo-wrap w-full max-w-[340px] mx-auto sm:max-w-none sm:mx-0" style={{ position: "sticky", top: "80px" }}>
      <div className="about-photo" style={{ width: "100%", aspectRatio: "3/4", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", position: "relative" }}>
        <img src="/profile.png" alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(9,9,11,0.95), transparent)", padding: "2rem 1rem 1rem", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.7rem", color: "var(--color-muted)", letterSpacing: "0.08em" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 6px #22C55E", flexShrink: 0 }} />
          Available for opportunities
        </div>
      </div>
    </div>
  )
}

export default LeftAbout
