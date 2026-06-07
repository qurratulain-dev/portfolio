import React from "react";
import { TypeAnimation } from "react-type-animation";
import SocialLinks from "./SocialLinks";
import HeroActions from "./HeroActions";

const Hero = () => {
  return (
    <section id="home" className="section-surface-secondary scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-6 sm:pt-28 sm:pb-8 lg:pt-30 xl:pt-28 xl:pb-10 flex items-center justify-center flex-col-reverse md:flex-row">
        <div className="w-full max-w-3xl mx-auto text-center">
          {/* Intro */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 sm:mb-8">
            <span className="block font-light text-emerald-500 text-lg sm:text-xl md:text-2xl mb-2">I AM</span>
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">Quratulain</span>, a{" "}
          </h1>

          {/* Typewriter Roles */}
          <div className="mb-6 sm:mb-8">
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                2000,
                "Laravel  Developer",
                2000,
                "Backend  Developer",
                2000,
                "React  Developer",
                2000,
                "Web Application Developer",
                2000,
              ]}
              wrapper="h2"
              cursor={true}
              repeat={Infinity}
              className="block min-h-16 text-xl sm:text-2xl md:text-4xl font-semibold text-emerald-500 hero-typewriter"
            />
          </div>

          {/* Paragraph */}
          <p className="text-[#b8b8b8] max-w-xl mx-auto leading-relaxed text-sm sm:text-base mb-6">
            Full-Stack Developer skilled in building responsive and user-friendly web applications using React, Laravel, PHP, MySQL, and REST APIs.
            Passionate about creating modern interfaces, developing secure backend functionality, and contributing to real-world projects.
          </p>

          {/* Availability */}
          <div className="inline-flex items-center gap-2 mx-auto px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-7">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[10px] sm:text-xs font-medium text-emerald-400/80 tracking-wide uppercase">
              Available for new opportunities
            </span>
          </div>

          {/* Buttons */}
          <div className="mb-10 sm:mb-12">
            <HeroActions />
          </div>

          {/* Social */}
          <div className="flex flex-col items-start -ml-1 sm:-ml-2">
            <p className="font-light text-[#b8b8b8] text-xs sm:text-sm tracking-wider uppercase mb-3">Find me on</p>
            <SocialLinks />
          </div>
        </div>
      </div>

      {/* Scroll down arrow */}
      <a href="#about" className="flex justify-center pb-3">
        <span className="text-emerald-500 text-2xl cursor-pointer" style={{ animation: "bounceY 1.5s ease-in-out infinite" }}>
          &#10095;
        </span>
      </a>

      <style>{`
        @keyframes bounceY {
          0%, 100% { transform: translateY(0) rotate(90deg); }
          50% { transform: translateY(10px) rotate(90deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;

