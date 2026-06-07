import React from "react";
import { FiClock } from "react-icons/fi";

const Experience = () => {
  return (
    <section id="experience" className="section-surface-primary section-divider-soft scroll-mt-20 py-10 sm:py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 text-center">
          Experience
        </h2>

        <p className="text-center my-3 text-[#b8b8b8] max-w-2xl mx-auto">
          My professional journey and work history
        </p>

        <div className="mt-12 flex flex-col items-center justify-center text-center">
          <span className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10 text-4xl text-blue-400">
            <FiClock />
          </span>
          <h3 className="text-2xl font-semibold text-white">Coming Soon</h3>
          <p className="mt-3 max-w-md text-[#b8b8b8]">
            This section is under development. I'll be adding my work experience and professional timeline here soon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
