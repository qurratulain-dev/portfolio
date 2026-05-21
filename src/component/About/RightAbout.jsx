import React from "react";

const RightAbout = () => {
  const aboutCards = [
    {
      icon: "🎓",
      title: "Education",
      content: (
        <p className="text-gray-300 text-sm leading-relaxed">
          BS in Computer Science — Specializing in React & Modern Web Design / Development
        </p>
      ),
    },
    {
      icon: "🚀",
      title: "Interests",
      content: (
        <ul className="text-gray-300 space-y-2 text-sm">
          <li>🎨 UI/UX Design</li>
          <li>⚙️ Web Animations</li>
          <li>📚 Learning New Frameworks</li>
        </ul>
      ),
    },
    {
      icon: "💻",
      title: "Experience",
      content: (
        <ul className="text-gray-300 space-y-2 text-sm">
          <li>Freelance — Frontend Projects (React, Tailwind)</li>
        </ul>
      ),
    },
    {
      icon: "🏆",
      title: "Achievements",
      content: (
        <ul className="text-gray-300 space-y-2 text-sm">
          <li>💻 Developed School Management System in PHP</li>
        </ul>
      ),
    },
  ];
  const cardStyle =
    "font-semibold tracking-wider text-gray-100 px-4 py-5 rounded-2xl relative transition-all duration-300 ease-in-out bg-gray-900 border border-emerald-600/30 hover:bg-emerald-500/10 hover:text-emerald-400";

  return (
    <div className="basis-full md:basis-[58%] w-full">
      <p className="font-light text-emerald-500 text-xl sm:text-2xl mb-2">ABOUT ME</p>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-snug text-white">
        Building Engaging & Interactive <br /> Web Experiences
      </h2>

      <p className="text-gray-500 leading-relaxed mb-8 max-w-2xl">
        I’m a Front-End Developer passionate about creating modern, responsive,
        and animated interfaces using React.js, Tailwind CSS, and GSAP.
        My focus is on writing clean code and crafting user-friendly experiences
        that make a lasting impact.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {aboutCards.map(({ icon, title, content }, index) => (
          <div key={index} className={cardStyle}>
            <div className="text-3xl mb-3">{icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-emerald-400">{title}</h3>
            {content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightAbout;
