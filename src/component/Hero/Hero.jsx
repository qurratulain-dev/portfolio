import React from "react";
import { TypeAnimation } from "react-type-animation";
import NavLinks from "../Navbar/NavLinks";
import HeroButton from "./HeroButton";
const Hero = () => {

  return (
    <section id="home" className=" mb-10 md:mb-2">
      <div className="max-w-6xl mx-auto px-10 min-h-screen  md:mt-[14vh] mt-[11vh] flex items-center justify-center text-center gap-10 flex-col-reverse md:flex-row ">
        <div className="space-y-5">
          {/* Intro */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white ">
            <p className="font-light text-emerald-500 text-2xl text-start md:ml-[11vw] ml-[18vw]">I AM</p>
            <span>Quratulain</span>, a{" "}
          </h1>

          {/* Typewriter Roles */}
          <TypeAnimation
            sequence={[
              "Junior Full-Stack Developer",
              2000,
              "React  Developer",
              2000,
              "Laravel  Developer",
              2000,
              "Web Developer",
              2000,
            ]}
            wrapper="h2"
            cursor={true}
            repeat={Infinity}
            className="text-2xl md:text-4xl font-semibold text-emerald-500 hero-typewriter"
          />

          {/* Paragraph */}
          <p className="text-gray-300 max-w-xl">
           Junior Full-Stack Developer skilled in building responsive, user-friendly web applications using React, Laravel, PHP, and MySQL. Passionate about creating modern interfaces, 
           developing backend functionality, and contributing to real-world projects.
          </p>

          {/* Buttons */}
            <HeroButton />


          {/* Social */}
          <p className="font-light text-white text-xl mt-[10vh] text-left">Find me on</p>
          <NavLinks />
        </div>
      </div>
    </section>
  );
};

export default Hero;
