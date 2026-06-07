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
    { icon: <FiLinkedin size={14} />, href: "http://www.linkedin.com/in/qurratulain-reactdeveloper", label: "LinkedIn" },
    { icon: <FiGithub size={14} />, href: "https://github.com/qurratulain-dev", label: "GitHub" },
    { icon: <FiMail size={14} />, href: "mailto:dev.quratulain@gmail.com", label: "Email" },
  ];

  return (
    <footer className="section-surface-secondary text-[#888888] pt-8 sm:pt-10 pb-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 items-center">
        <div className="text-left">
          <a href="#home" aria-label="Go to home" className="text-xl sm:text-2xl font-bold text-white tracking-tight no-underline">
            Quratulain<span className="text-blue-500">.dev</span>
          </a>
        </div>

        <div className="text-center">
          <div className="flex flex-nowrap justify-center gap-x-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#b8b8b8] hover:text-blue-500 no-underline font-semibold"
                style={{ fontSize: "0.92rem", transition: "color 0.2s" }}
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
                className="relative overflow-hidden border border-blue-400/60 text-white w-7 h-7 rounded-md 
                           inline-flex items-center justify-center text-sm transition-all duration-500 group"
              >
                <span className="relative z-10">{icon}</span>
                <span
                  className="absolute top-0 left-0 w-full h-full bg-accent-gradient origin-bottom-left 
                             -rotate-90 group-hover:rotate-0 transition-transform duration-500 ease-in-out z-0"
                ></span>
              </a>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-[13px] text-[#b8b8b8] leading-relaxed font-semibold whitespace-nowrap">
            &copy; 2026 QURATULAIN — ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
