import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const SocialLinks = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaGithub />,
      href: "https://github.com/qurratulain-dev",
    },
    {
      id: 2,
      icon: <FaLinkedin />,
      href: "http://www.linkedin.com/in/qurratulain-reactdeveloper",
    },
    {
      id: 3,
      icon: <FaWhatsapp />,
      href: "https://wa.me/923157753260",
    },
  ];

  return (
    <div className="flex items-center gap-3">
      {socialLinks.map(({ id, icon, href }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${icon.type.displayName || "Social"} link`}
          className="btn-icon ghost-btn animate-item"
        >
          <span className="ghost-sweep" />
          <span className="relative z-10">{icon}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;