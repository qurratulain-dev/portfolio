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
    <footer className="site-footer">
      <div className="container-site pt-10 pb-7 sm:pt-12 sm:pb-8">
        {/* One row at xl and up, where the 72rem container has room for the
            brand, the legal line and the link groups on a single line
            (measured ~1009px of 1152px). Below that it stacks rather than
            squeezing the copy, so nothing can overflow a narrow screen. */}
        <div className="flex flex-col items-center gap-6 xl:flex-row xl:items-center xl:justify-between xl:gap-10">
          {/* Exact Navbar brand treatment: nav-brand sets the size ramp, weight,
              tracking and colour, nav-brand-accent puts ".dev" in JetBrains Mono
              at the accent colour. No animate-item — that is a GSAP hook scoped
              to the Navbar's own ref and would do nothing down here. */}
          {/* The wordmark is the accessible name; adding an aria-label here
              would replace the visible text and break WCAG 2.5.3. */}
          <a href="#home" className="nav-brand shrink-0">
            Quratulain<span className="nav-brand-accent">.dev</span>
          </a>

          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
            <nav aria-label="Footer">
              <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-medium text-muted transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Navbar/Header social treatment: ghost-btn + ghost-sweep, unchanged
                so the hover, timing and sheen are literally the same component.
                Only the box size differs (h-9 instead of .btn-icon's 2.5rem). */}
            <ul className="flex items-center gap-2.5">
              {socialLinks.map(({ icon, href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="ghost-btn inline-flex h-9 w-9 items-center justify-center rounded-lg"
                  >
                    <span className="ghost-sweep" />
                    <span className="relative z-10" aria-hidden="true">
                      {icon}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className="shrink-0 text-center text-sm text-muted">
            &copy; 2026 QURATULAIN — ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
