import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiLinkedin, FiGithub } from "react-icons/fi";

const contacts = [
  {
    icon: <HiOutlineMail className="w-6 h-6 text-white" />,
    title: "Email",
    description: "Drop me a line anytime",
    value: "dev.quratulain@gmail.com",
    href: "mailto:dev.quratulain@gmail.com",
    gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
    shadow: "shadow-indigo-500/25",
  },
  {
    icon: <FiLinkedin className="w-6 h-6 text-white" />,
    title: "LinkedIn",
    description: "Let's connect professionally",
    value: "Qurratulain",
    href: "http://www.linkedin.com/in/qurratulain-reactdeveloper",
    gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
    shadow: "shadow-indigo-500/25",
  },
  {
    icon: <FiGithub className="w-6 h-6 text-white" />,
    title: "GitHub",
    description: "Check out my projects",
    value: "qurratulain-dev",
    href: "https://github.com/qurratulain-dev",
    gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
    shadow: "shadow-indigo-500/25",
  },
];

const ContactCard = ({ icon, title, description, value, href, gradient, shadow }) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    className="group bg-white dark:bg-slate-800/80 rounded-2xl border border-gray-200 dark:border-slate-700 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
  >
    <div className={`inline-flex p-4 rounded-2xl ${gradient} mb-4 shadow-lg ${shadow}`}>
      {icon}
    </div>
    <h3 className="font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{description}</p>
    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
      {value}
    </p>
  </a>
);

const Contact = () => {
  return (
    <section id="contact" className="section-divider-soft scroll-mt-20 py-10 sm:py-12 lg:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-px bg-blue-400/40 inline-block" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "#3B82F6" }}>
              Contact
            </span>
          </div>
          <h2
            className="font-extrabold"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "#FAFAFA", letterSpacing: "-0.02em" }}
          >
            Let's Work Together.
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#71717A", maxWidth: "480px", lineHeight: 1.7 }} className="mx-auto mt-3">
            Open to full-time roles, freelance projects, and remote opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {contacts.map((card) => (
            <ContactCard key={card.title} {...card} />
          ))}
        </div>

        {/* <div id="extra-card" className="mt-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 p-8 sm:p-10 text-center shadow-xl">
            <div className="absolute inset-0 hero-grid opacity-30"></div>
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-4">
                Looking for a Full-Stack Developer?
              </h3>
              <p className="text-white/90 mb-8 max-w-lg mx-auto leading-relaxed">
                I'm currently open to remote opportunities. Whether you need help building a new product, scaling your existing platform, or leading a development team, I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:dev.quratulain@gmail.com?subject=Job Opportunity"
                  className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-all duration-300 shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  Send Me an Email
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-300"
                  style={{ border: "1px solid #3F3F46" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
