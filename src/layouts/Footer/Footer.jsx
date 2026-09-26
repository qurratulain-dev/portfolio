import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";


const Footer = () => {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <FiLinkedin size={16} />, href: "http://www.linkedin.com/in/qurratulain-reactdeveloper", label: "LinkedIn" },
    { icon: <FiGithub size={16} />, href: "https://github.com/qurratulain-dev", label: "GitHub" },
    { icon: <FiMail size={16} />, href: "mailto:dev.quratulain@gmail.com", label: "Email" },
  ];

  return (
    <footer className="site-footer text-faint pt-8 sm:pt-10 pb-6">
      <div className="container-site grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
        <div className="text-left">
          <a href="#home" aria-label="Go to home" className="text-xl sm:text-2xl font-bold text-text tracking-tight no-underline">
            Quratulain<span className="text-accent">.dev</span>
          </a>
        </div>

        <div className="text-center">
          <div className="flex flex-nowrap justify-center gap-x-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted hover:text-accent no-underline text-sm font-semibold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="btn-icon ghost-btn"
              >
                <span className="ghost-sweep" />
                <span className="relative z-10">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs text-muted leading-relaxed font-semibold whitespace-nowrap">
            &copy; 2026 QURATULAIN — ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;