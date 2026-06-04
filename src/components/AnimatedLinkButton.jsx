import React from "react";

const AnimatedLinkButton = ({ icon, text, href, variant = "outlined" }) => {
  const isExternal = href && (href.startsWith("http") || href.startsWith("//"));
  const isFilled = variant === "filled";

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`relative overflow-hidden text-white px-5 sm:px-6 py-3 rounded-lg 
       font-medium inline-flex items-center justify-center gap-2 transition-all duration-500 group
       ${isFilled
           ? "bg-emerald-500 border-2 border-emerald-500 hover:-translate-y-1"
          : "border-2 border-emerald-500 hover:border-emerald-500"
        }`}
    >
      <span className={`w-5 h-5 relative z-10 ${isFilled ? "text-white" : ""}`}>{icon}</span>
      <span className="relative z-10">{text}</span>

      {!isFilled && (
        <span
          className="absolute top-0 left-0 w-full h-full bg-emerald-500 origin-bottom-left 
           -rotate-90 group-hover:rotate-0 transition-transform duration-500 ease-in-out z-0"
        ></span>
      )}
    </a>
  );
};

export default AnimatedLinkButton;
