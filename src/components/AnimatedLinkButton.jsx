import React from "react";

/* Icon swap: the icon sits after the label by default and slides to the front
   on hover / keyboard focus. It is rendered twice (both decorative) and the
   two slots trade width + opacity. The collapsed slot carries a -0.5rem margin
   that cancels the .btn flex gap, so the button keeps the same width in both
   states and nothing around it shifts. Tailwind v4's hover variant only applies
   on devices that can hover, so touch screens simply show the default layout.
   Reduced motion: no transition, the swap is instant. */
const iconSlot =
  "relative z-10 inline-flex h-5 shrink-0 items-center justify-center overflow-hidden " +
  "[&>svg]:h-5 [&>svg]:w-5 [&>svg]:shrink-0 " +
  "transition-[width,margin,opacity,transform] duration-300 ease-out motion-reduce:transition-none";

const leadingIcon =
  `${iconSlot} w-0 -mr-2 opacity-0 -translate-x-2 ` +
  "group-hover:w-5 group-hover:mr-0 group-hover:opacity-100 group-hover:translate-x-0 " +
  "group-focus-visible:w-5 group-focus-visible:mr-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0";

const trailingIcon =
  `${iconSlot} w-5 opacity-100 translate-x-0 ` +
  "group-hover:w-0 group-hover:-ml-2 group-hover:opacity-0 group-hover:translate-x-2 " +
  "group-focus-visible:w-0 group-focus-visible:-ml-2 group-focus-visible:opacity-0 group-focus-visible:translate-x-2";

const AnimatedLinkButton = ({ icon, text, href, variant = "outlined", style: customStyle }) => {
  const isExternal = href && (href.startsWith("http") || href.startsWith("//"));
  const isFilled = variant === "filled";

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`group btn ${isFilled ? "btn-primary" : "btn-outline"}`}
      style={customStyle}
    >
      {!isFilled && <span className="ghost-sweep" />}
      {/* Decorative: the visible label already names the link. */}
      <span className={leadingIcon} aria-hidden="true">{icon}</span>
      <span className="relative z-10">{text}</span>
      <span className={trailingIcon} aria-hidden="true">{icon}</span>
    </a>
  );
};

export default AnimatedLinkButton;
