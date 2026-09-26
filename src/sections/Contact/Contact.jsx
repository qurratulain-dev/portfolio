import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import SectionHeading from "../../components/SectionHeading";

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
    className="card card-interactive group block"
  >
    <div className="flex items-start gap-4">
      <span className="icon-badge">
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        <h3 className="card-title mb-1">
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
    <section id="contact" className="site-section section-divider-soft scroll-mt-20">
      <div className="container-site">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Work Together."
          subtitle="Open to full-time roles, freelance projects, and remote opportunities."
        />

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