import React from "react";
import { FaServer, FaLaptopCode, FaDatabase, FaCogs } from "react-icons/fa";

const icons = {
  Backend: <FaServer className="w-5 h-5 text-white" />,
  Frontend: <FaLaptopCode className="w-5 h-5 text-white" />,
  Database: <FaDatabase className="w-5 h-5 text-white" />,
  "DevOps & Tools": <FaCogs className="w-5 h-5 text-white" />,
};

const gradients = {
  Backend: "from-indigo-500 to-indigo-600 shadow-indigo-500/25",
  Frontend: "from-blue-500 to-blue-600 shadow-blue-500/25",
  Database: "from-emerald-500 to-emerald-600 shadow-emerald-500/25",
  "DevOps & Tools": "from-orange-500 to-orange-600 shadow-orange-500/25",
};

const bgStyles = {
  Backend: "bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20",
  Frontend: "bg-blue-500/10 text-blue-300 hover:bg-blue-500/20",
  Database: "bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20",
  "DevOps & Tools": "bg-orange-500/10 text-orange-300 hover:bg-orange-500/20",
};

const SkillsSection = ({ category }) => {
  const { title, skills } = category;

  return (
    <div className="group relative bg-white dark:bg-slate-800/80 rounded-2xl border border-gray-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col items-start mb-5">
        <div className={`p-3 rounded-xl bg-gradient-to-br shadow-lg mb-3 ${gradients[title]}`}>
          {icons[title]}
        </div>
        <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
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
