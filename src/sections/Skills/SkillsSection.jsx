import React from "react";
import { FaServer, FaLaptopCode, FaDatabase, FaCogs } from "react-icons/fa";

const icons = {
  Backend: <FaServer className="w-5 h-5 text-white" />,
  Frontend: <FaLaptopCode className="w-5 h-5 text-white" />,
  Database: <FaDatabase className="w-5 h-5 text-white" />,
  "DevOps & Tools": <FaCogs className="w-5 h-5 text-white" />,
};

const gradients = {
  Backend: "bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-indigo-500/25",
  Frontend: "bg-gradient-to-br from-cyan-500 to-cyan-600 shadow-cyan-500/25",
  Database: "bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-emerald-500/25",
  "DevOps & Tools": "bg-gradient-to-br from-purple-500 to-purple-600 shadow-purple-500/25",
  "AI Tools": "bg-gradient-to-br from-amber-500 to-orange-500 shadow-amber-500/25",
};

const bgStyles = {
  Backend: "bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20",
  Frontend: "bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20",
  Database: "bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20",
  "DevOps & Tools": "bg-purple-500/10 text-purple-300 hover:bg-purple-500/20",
  "AI Tools": "bg-amber-500/10 text-amber-300 hover:bg-amber-500/20",
};

const SkillsSection = ({ category }) => {
  const { title, skills } = category;

  return (
    <div className="group relative bg-white dark:bg-slate-800/80 rounded-2xl border border-gray-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col items-start mb-5">
        <div className={`p-2.5 rounded-xl shadow-lg mb-3 ${gradients[title]}`}>
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
