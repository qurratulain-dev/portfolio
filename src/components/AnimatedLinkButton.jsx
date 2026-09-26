import React from "react";

const AnimatedLinkButton = ({ icon, text, href, variant = "outlined", style: customStyle }) => {
  const isExternal = href && (href.startsWith("http") || href.startsWith("//"));
  const isFilled = variant === "filled";

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`btn ${isFilled ? "btn-primary" : "btn-outline"}`}
      style={customStyle}
    >
      {!isFilled && <span className="ghost-sweep" />}
      <span className="w-5 h-5 relative z-10">{icon}</span>
      <span className="relative z-10">{text}</span>
    </a>
  );
};

export default AnimatedLinkButton;