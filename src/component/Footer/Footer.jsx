import React from "react";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className=" text-gray-500 pt-12 sm:pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <h3 className="text-white text-3xl font-bold mb-3">
            Quratulain
          </h3>
          <p className="text-sm leading-relaxed mb-4">
            Frontend Developer passionate about crafting interactive,
            responsive, and visually pleasing digital experiences.
          </p>
          
        </div>

        {/* 2️⃣ Quick Links Section */}
        <div className="lg:ml-10">
          <h4 className="text-white font-semibold text-lg mb-4">
            Quick Links
          </h4>
          <ul className="space-y-1 text-md">
            <li>
              <a href="#home" className="hover:text-emerald-500  hover:underline transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-emerald-500 hover:underline transition">
                About
              </a>
            </li>
            
            <li>
              <a href="#skills" className="hover:text-emerald-500 hover:underline transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-emerald-500 hover:underline transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* 3️⃣ Contact Info Section */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">
            Get in Touch
          </h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <FiMail className="text-emerald-500 text-lg" />
              <p className="hover:text-gray-400 break-all">dev.quratulain@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FiLinkedin className="text-emerald-500 text-lg" />
              <a
                href="http://www.linkedin.com/in/qurratulain-reactdeveloper"
                target="_blank"
                className="hover:text-gray-400 transition"
              >
                linkedin.com/in/quratulain
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FiGithub className="text-emerald-500 text-lg" />
              <a
                href="https://github.com/qurratulain-dev"
                target="_blank"
                className="hover:text-gray-400 transition"
              >
                github.com/qurratulain-dev
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-6">

        <p className="text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Quratulain — Designed with 💚 in
          React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
