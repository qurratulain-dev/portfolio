import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import logo from "../../assets/logo-navbar.png";

const Footer = () => {
  const contactItemClass =
    "group flex items-center gap-3 transition duration-300 hover:text-emerald-400";
  const contactIconClass =
    "text-emerald-500 text-lg shrink-0 transition duration-300 group-hover:text-emerald-400 group-hover:scale-110";

  const socialLinks = [
    {
      icon: <FiGithub />,
      label: "GitHub",
      href: "https://github.com/qurratulain-dev",
    },
    {
      icon: <FiLinkedin />,
      label: "LinkedIn",
      href: "http://www.linkedin.com/in/qurratulain-reactdeveloper",
    },
  ];

  return (
    <footer className="text-[#888888] pt-12 sm:pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] gap-10 lg:gap-12">
        <div>
          <a href="#home" aria-label="Go to home" className="inline-block mb-3">
            <img
              src={logo}
              alt="Qurat portfolio logo"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </a>
          <p className="text-base text-[#b8b8b8] leading-[1.7] mb-4 max-w-xl">
            Full-Stack Developer & UI/UX focused creator building clean,
            responsive digital experiences that feel modern and meaningful.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="relative overflow-hidden border-2 border-emerald-500 text-white w-10 h-10 rounded-lg 
                           inline-flex items-center justify-center text-xl transition-all duration-500 group"
              >
                <span className="relative z-10">{icon}</span>
                <span
                  className="absolute top-0 left-0 w-full h-full bg-emerald-500 origin-bottom-left 
                             -rotate-90 group-hover:rotate-0 transition-transform duration-500 ease-in-out z-0"
                ></span>
              </a>
            ))}
          </div>
        </div>

        <div className="lg:ml-10">
          <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-1 text-md text-[#b8b8b8]">
            <li>
              <a href="#home" className="hover:text-emerald-500  transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-emerald-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-emerald-500  transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-emerald-500 transition">
                Portfolio / Projects
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Contact Info</h4>
          <div className="space-y-3 text-sm text-[#b8b8b8]">
            <div className={contactItemClass}>
              <FiMail className={contactIconClass} />
              <a
                href="mailto:dev.quratulain@gmail.com"
                className="break-all transition duration-300 group-hover:text-emerald-400"
              >
                dev.quratulain@gmail.com
              </a>
            </div>
            <div className={contactItemClass}>
              <FiPhone className={contactIconClass} />
              <a
                href="tel:+923157753260"
                className="transition duration-300 group-hover:text-emerald-400"
              >
                +92 3157753260
              </a>
            </div>
            <div className={contactItemClass}>
              <FiMapPin className={contactIconClass} />
              <p className="transition duration-300 group-hover:text-emerald-400">
                Gujranwal, Punjab, Pakistan
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-6">
        <p className="text-center text-xs text-[#b8b8b8]">
          (©) {new Date().getFullYear()} Quratulain - Built with 💚 React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
