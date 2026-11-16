import { FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "../../components/SectionHeading";

const certifications = [
  {
    title: "Build & Publish WordPress Plugins with AI & Vibe Coding",
    issuer: "WP Academy",
    date: "16 Aug 2026",
    href: "/certificates/build-publish-wordpress-plugins-ai-vibe-coding.pdf",
  },
  {
    title: "Prompt Engineering",
    issuer: "One Million Prompters, Dubai Future Foundation",
    date: "2026",
    href: "/certificates/prompt-engineering-one-million-prompters.pdf",
  },
  {
    title: "Web Designing",
    issuer: "TEVTA LESC, Gujranwala",
    date: "Apr 2025 – Sep 2025",
    href: "/certificates/web-designing-tevta-lesc.pdf",
  },
  {
    title: "Web Development Internship",
    issuer: "Bitstorm Solutions",
    date: "Dec 2025 – Feb 2026",
    href: "/certificates/web-development-internship-bitstorm.pdf",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="site-section section-divider-soft scroll-mt-nav">
      <div className="container-site">
        <SectionHeading
          title="Certifications & Professional Training"
          subtitle="Formal credentials and ongoing learning that complement my full-stack work."
        />

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {certifications.map((cert) => (
            <li key={cert.href} className="card card-interactive flex h-full flex-col p-6">
              <h3 className="text-base font-semibold leading-snug tracking-tight text-text sm:text-lg">
                {cert.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{cert.issuer}</p>
              <p className="cert-card-date">{cert.date}</p>
              <a
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline cert-card-link mt-5 w-fit"
                style={{ paddingInline: "1rem", fontSize: "0.875rem", minHeight: "2.75rem" }}
                aria-label={`View certificate for ${cert.title} (opens in a new tab)`}
              >
                View Certificate
                <FiArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
