import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
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
    icon: <FaWhatsapp className="w-5 h-5" />,
    title: "WhatsApp",
    description: "Let's chat on WhatsApp",
    value: "+92 315 7753260",
    href: "https://wa.me/923157753260",
  },
];

const ContactCard = ({ icon, title, description, value, href }) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    className="card card-interactive group block w-full"
  >
    <div className="flex items-start gap-4">
      <span className="icon-badge" aria-hidden="true">
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        <h3 className="card-title mb-1">
          {title}
        </h3>
        <p className="font-mono text-xs text-faint mb-2">{description}</p>
        <p className="text-sm text-muted truncate">
          {value}
        </p>
      </div>
      {/* Affordance arrow only - the card is already a link with a full text
          name, so the glyph must stay out of the accessibility tree. */}
      <svg
        className="w-4 h-4 text-faint group-hover:translate-x-1 transition-transform shrink-0 mt-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
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

        {/* A list, so the three contact methods are announced as three items
            with a count rather than as loose links. Classes are unchanged, so
            the grid lays out exactly as before. */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contacts.map((card) => (
            <li key={card.title} className="flex">
              <ContactCard {...card} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;