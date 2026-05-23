import React from "react";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaJs } from "react-icons/fa";
import { MdAnimation } from "react-icons/md";
import { SiJquery, SiLaravel, SiMysql, SiPhp, SiTailwindcss } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import SkillsSection from "./SkillsSection";

const frontEndLeftSkills = [
  { name: "HTML", level: 90, icon: <FaHtml5 color="#E44D26" size={24} /> },
  { name: "CSS", level: 80, icon: <FaCss3Alt color="#1572B6" size={24} /> },
  { name: "JavaScript", level: 70, icon: <FaJs color="#F7DF1E" size={24} /> },
  { name: "jQuery / AJAX", level: 60, icon: <SiJquery color="#0769AD" size={24} /> },
];

const frontEndRightSkills = [
  { name: "React", level: 62, icon: <FaReact color="#61DBFB" size={24} /> },
  { name: "Tailwind CSS", level: 70, icon: <SiTailwindcss color="#38BDF8" size={24} /> },
  { name: "Bootstrap", level: 80, icon: <FaBootstrap color="#7952B3" size={24} /> },
  { name: "Animation", level: 40, icon: <MdAnimation color="#F97316" size={24} /> },
];

const backEndLeftSkills = [
  { name: "MySQL", level: 55, icon: <SiMysql className="text-[#00758F]" size={24} /> },
  { name: "Laravel", level: 50, icon: <SiLaravel className="text-[#FF2D20]" size={24} /> },
];

const backEndRightSkills = [
  { name: "PHP", level: 60, icon: <SiPhp className="text-[#777BB4]" size={24} /> },
  { name: "RESTful API", level: 75, icon: <TbApi className="text-emerald-400" size={24} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-emerald-500 text-center">
          Skills
        </h2>

        <p className="capitalize text-center my-3 text-[#b8b8b8] max-w-2xl mx-auto">
          Here's an overview of my technical expertise and proficiency level
        </p>

        <div>
          <SkillsSection
            title="Front End"
            leftSkills={frontEndLeftSkills}
            rightSkills={frontEndRightSkills}
          />
          <SkillsSection
            title="Back End"
            leftSkills={backEndLeftSkills}
            rightSkills={backEndRightSkills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;

