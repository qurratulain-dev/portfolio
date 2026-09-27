import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const SocialLinks = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaGithub />,
      href: "https://github.com/qurratulain-dev",
      label: "GitHub",
    },
    {
      id: 2,
      icon: <FaLinkedin />,
      href: "http://www.linkedin.com/in/qurratulain-reactdeveloper",
      label: "LinkedIn",
    },
    {
      id: 3,
      icon: <FaWhatsapp />,
      href: "https://wa.me/923157753260",
      label: "WhatsApp",
    },
  ];

  /* label is written out per link on purpose. Deriving it from the icon
     component (icon.type.displayName) produced "FaGithub link", which leaks a
     library internal into the accessibility tree and changes if react-icons is
     ever upgraded. */
  return (
    <ul className="flex items-center gap-3">
      {socialLinks.map(({ id, icon, href, label }) => (
        <li key={id}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="btn-icon ghost-btn animate-item"
          >
            <span className="ghost-sweep" />
            <span className="relative z-10" aria-hidden="true">{icon}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;