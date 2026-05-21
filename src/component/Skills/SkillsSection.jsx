import React, { useEffect, useRef, useState } from "react";

const SkillsSection = ({ title, leftSkills, rightSkills }) => {
  const sectionRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const [visible, setVisible] = useState(false);
  const [progressLeft, setProgressLeft] = useState(leftSkills.map(() => 30));
  const [progressRight, setProgressRight] = useState(rightSkills.map(() => 30));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let start = null;
    let animationFrameId = null;
    const duration = 2000;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progressTime = timestamp - start;
      const eased = Math.min(progressTime / duration, 1);

      setProgressLeft(
        leftSkills.map((skill) => Math.floor(30 + (skill.level - 30) * eased))
      );
      setProgressRight(
        rightSkills.map((skill) => Math.floor(30 + (skill.level - 30) * eased))
      );

      if (eased < 1) animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [visible, leftSkills, rightSkills]);

  const renderSkills = (skills, progressArray) => (
    <div className="w-full md:w-1/2 space-y-8 sm:space-y-10">
      {skills.map((skill, index) => (
        <div key={index} className="relative">
          <div className="flex items-center gap-2 mb-3">
            {skill.icon}
            <span className="font-medium">{skill.name}</span>
          </div>
          <span
            className="absolute -top-1 text-emerald-400 font-semibold transition-transform duration-300"
            style={{
              left: `${progressArray[index]}%`,
              transform: "translateX(-50%)",
            }}
          >
            {progressArray[index]}%
          </span>
          <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden relative">
            <div
              className="bg-linear-to-r from-emerald-500 to-emerald-700 h-3 rounded-full transition-[width] duration-75 ease-linear"
              style={{
                width: `${progressArray[index]}%`,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div ref={sectionRef} className="text-white flex-1 mt-10 sm:mt-12">
      <h2 className="text-2xl font-bold text-white my-5 sm:my-6">{title}</h2>
      <div className="flex flex-col md:flex-row justify-between gap-10 lg:gap-16">
        {renderSkills(leftSkills, progressLeft)}
        {renderSkills(rightSkills, progressRight)}
      </div>
    </div>
  );
};

export default SkillsSection;
