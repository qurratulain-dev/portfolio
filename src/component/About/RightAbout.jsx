import React from "react";
import { FaReact } from "react-icons/fa";
import { SiLaravel } from "react-icons/si";

const iconClass = "h-8 w-8";

const EducationIcon = () => (
  <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 8.5 12 4l9 4.5-9 4.5L3 8.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M7 11v4.5c0 1.7 2.2 3 5 3s5-1.3 5-3V11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M20 9v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const InterestIcon = () => (
  <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3v3.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M18.4 5.6 16.1 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M21 12h-3.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M5.6 5.6 7.9 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M3 12h3.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M8.5 15.6h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M9.3 19h5.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M8 11a4 4 0 1 1 8 0c0 1.5-.8 2.5-1.7 3.4-.5.5-.8 1-.8 1.6h-3c0-.6-.3-1.1-.8-1.6C8.8 13.5 8 12.5 8 11Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

const RightAbout = () => {
  const aboutCards = [
    {
      icon: <EducationIcon />,
      title: "Education",
      content: (
        <p className="text-[#b8b8b8] text-sm leading-relaxed">
          BS in Computer Science - <br></br>Specializing in Full-Stack Architecture, Database Design & Modern Web Development
        </p>
      ),
    },
    {
      icon: <InterestIcon />,
      title: "Interests",
      content: (
        <ul className="text-[#b8b8b8] space-y-2 text-sm">
          <li>React & Modern UI Development</li>
          <li>Backend Development & APIs</li>
          <li>Learning Modern Technologies</li>
        </ul>
      ),
    },
    {
      icon: <SiLaravel className={iconClass} />,
      title: "Laravel Developer",
      content: (
        <ul className="text-[#b8b8b8] space-y-2 text-sm">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </ul>
      ),
    },
    {
      icon: <FaReact className={iconClass} />,
      title: "React Developer",
      content: (
        <ul className="text-[#b8b8b8] space-y-2 text-sm">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      ),
    },
  ];

  const cardStyle =
    "font-semibold tracking-wider text-gray-100 px-4 py-5 rounded-2xl relative transition-all duration-300 ease-in-out bg-gray-900 border border-emerald-600/30 hover:bg-emerald-500/10 hover:text-emerald-400";

  return (
    <div className="basis-full md:basis-[62%] w-full">
      <p className="font-light text-emerald-500 text-xl sm:text-2xl mb-2">ABOUT ME</p>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-snug text-white">
        Building Modern & Scalable Web Applications
      </h2>

      <p className="text-[#b8b8b8] leading-relaxed mb-8 max-w-2xl">
        I'm a web developer focused on building clean, responsive, and
        user-friendly digital experiences. I enjoy working with React.js for
        modern interfaces and Laravel for structured backend development, while
        continuously improving my skills through real-world projects.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {aboutCards.map(({ icon, title, content }, index) => (
          <div key={index} className={cardStyle}>
            <div className="mb-3 flex h-10 w-10 items-center justify-center text-3xl text-emerald-400">
              {icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-emerald-400">{title}</h3>
            {content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightAbout;
