import React from "react";
import { FaServer, FaLaptopCode, FaDatabase, FaCogs, FaPlug } from "react-icons/fa";

const icons = {
  Backend: <FaServer className="w-5 h-5 text-text" />,
  Frontend: <FaLaptopCode className="w-5 h-5 text-text" />,
  Database: <FaDatabase className="w-5 h-5 text-text" />,
  "DevOps & Tools": <FaCogs className="w-5 h-5 text-text" />,
  "APIs & Integrations": <FaPlug className="w-5 h-5 text-text" />,
};

const gradients = {
  Backend: "bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-500/25",
  Frontend: "bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-500/25",
  Database: "bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-500/25",
  "DevOps & Tools": "bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-500/25",
  "AI Tools": "bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-500/25",
  "APIs & Integrations": "bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-500/25",
};

const bgStyles = {
  Backend: "bg-accent/10 text-accent hover:bg-accent/20",
  Frontend: "bg-accent/10 text-accent hover:bg-accent/20",
  Database: "bg-accent/10 text-accent hover:bg-accent/20",
  "DevOps & Tools": "bg-accent/10 text-accent hover:bg-accent/20",
  "AI Tools": "bg-accent/10 text-accent hover:bg-accent/20",
  "APIs & Integrations": "bg-accent/10 text-accent hover:bg-accent/20",
};

const SkillsSection = ({ category }) => {
  const { title, skills } = category;

  return (
    <div className="group relative bg-white dark:bg-slate-800/80 rounded-2xl border border-gray-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col items-start mb-5">
        <div className={`p-2.5 rounded-xl shadow-lg mb-3 ${gradients[title]}`}>
          {icons[title]}
        </div>
        <h3 className="text-sm font-bold text-gray-900 dark:text-text uppercase tracking-wider">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill, i) => (
          <span
            key={i}
            className={`px-3 py-1.5 rounded-lg text-base font-medium transition-transform duration-200 hover:scale-105 ${bgStyles[title]}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
