import React from "react";
import { TypeAnimation } from "react-type-animation";
import NavLinks from "../Navbar/NavLinks";
import HeroButton from "./HeroButton";
const Hero = () => {

  return (
    <section id="home" className="scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 sm:pt-28 sm:pb-12 lg:pt-30 xl:pt-28 xl:pb-14 flex items-center justify-center gap-8 flex-col-reverse md:flex-row">
        <div className="w-full max-w-3xl mx-auto space-y-5 text-center">
          {/* Intro */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            <span className="block font-light text-emerald-500 text-lg sm:text-xl md:text-2xl mb-2">I AM</span>
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">Quratulain</span>, a{" "}
          </h1>

          {/* Typewriter Roles */}
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              2000,
              "Laravel  Developer",
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

          {/* Paragraph */}
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
           Junior Full-Stack Developer skilled in building responsive, user-friendly web applications using React, Laravel, PHP, and MySQL. Passionate about creating modern interfaces, 
           developing backend functionality, and contributing to real-world projects.
          </p>

          {/* Buttons */}
            <HeroButton />


          {/* Social */}
          <div className="flex w-fit flex-col items-start mt-8">
            <p className="font-light text-white text-lg sm:text-xl mb-3">Find me on</p>
            <NavLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
