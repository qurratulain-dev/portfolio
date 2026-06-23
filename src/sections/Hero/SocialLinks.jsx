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
    <div className="flex items-center gap-5">
      {socialLinks.map(({ id, icon, href }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-item w-10 h-10 text-white 
                     inline-flex items-center justify-center rounded-lg text-xl transition-all duration-500 ghost-btn"
          style={{ border: "1px solid #3F3F46" }}
        >
          <span className="ghost-sweep" />
          <span className="relative z-10">{icon}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
