import React from "react";

const AnimatedLinkButton = ({ icon, text, href, variant = "outlined", style: customStyle }) => {
  const isExternal = href && (href.startsWith("http") || href.startsWith("//"));
  const isFilled = variant === "filled";

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`text-white px-5 sm:px-6 py-3 rounded-lg 
       font-medium inline-flex items-center justify-center gap-2 
       ${isFilled
             ? "hover:-translate-y-1 transition-all duration-300"
            : "ghost-btn"
       }`}
      style={{
        backgroundColor: isFilled ? "#3B82F6" : undefined,
        border: isFilled ? "1px solid #3B82F6" : undefined,
        ...customStyle,
      }}
    >
      {!isFilled && <span className="ghost-sweep" />}
      <span className="w-5 h-5 relative z-10">{icon}</span>
      <span className="relative z-10">{text}</span>
    </a>
  );
};

export default AnimatedLinkButton;
