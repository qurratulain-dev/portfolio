import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiLinkedin, FiGithub } from "react-icons/fi";

const contacts = [
  {
    icon: <HiOutlineMail className="w-5 h-5" />,
    title: "Email",
    description: "Drop me a line anytime",
    value: "dev.quratulain@gmail.com",
    href: "mailto:dev.quratulain@gmail.com",
  },
  {
    icon: <FiLinkedin className="w-5 h-5" />,
    title: "LinkedIn",
    description: "Let's connect professionally",
    value: "Qurratulain",
    href: "http://www.linkedin.com/in/qurratulain-reactdeveloper",
  },
  {
    icon: <FiGithub className="w-5 h-5" />,
    title: "GitHub",
    description: "Check out my projects",
    value: "qurratulain-dev",
    href: "https://github.com/qurratulain-dev",
  },
];

const ContactCard = ({ icon, title, description, value, href }) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    className="group border border-white/10 rounded-lg p-5 bg-white/[0.02] hover:border-accent/40 hover:bg-accent/5 hover:-translate-y-1 transition-all duration-300 block"
  >
    <div className="flex items-start gap-4">
      <span className="flex items-center justify-center w-10 h-10 rounded-md bg-accent/10 text-accent shrink-0">
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        <h3 className="text-text font-semibold mb-1">
          {title}
        </h3>
        <p className="font-mono text-xs text-faint mb-2">{description}</p>
        <p className="text-sm text-muted truncate group-hover:text-accent transition-colors">
          {value}
        </p>
      </div>
      <svg
        className="w-4 h-4 text-faint group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0 mt-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </a>
);

const Contact = () => {
  return (
    <section id="contact" className="section-divider-soft scroll-mt-20 py-10 sm:py-12 lg:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-px bg-accent/40 inline-block" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "var(--color-accent)" }}>
              Contact
            </span>
            <span className="w-8 h-px bg-accent/40 inline-block" />
          </div>
          <h2
            className="font-extrabold"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--color-text)", letterSpacing: "-0.02em" }}
          >
            Let's Work Together.
          </h2>
          <p style={{ fontSize: "0.95rem", color: "var(--color-muted)", maxWidth: "480px", lineHeight: 1.7 }} className="mx-auto mt-3">
            Open to full-time roles, freelance projects, and remote opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contacts.map((card) => (
            <ContactCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;