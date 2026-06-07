import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MobileMenu = ({ navLinks, isMenu }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const menu = menuRef.current;
    const links = menu.querySelectorAll(".menu-link");

    if (isMenu) {
      //  Menu container appear 
      gsap.fromTo(
        menu,
        { opacity: 0, scale: 0.9, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
      //  Links slide 
      gsap.fromTo(
        links,
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.1,
        }
      );
    } else {
      //  Menu container hide
      gsap.to(menu, {
        opacity: 0,
        scale: 0.95,
        duration: 0.3,
        ease: "power1.inOut",
      });
    }
  }, [isMenu]);

  return (
    <ul
      ref={menuRef} className="flex flex-col space-y-6 p-6 rounded-xl bg-gray-950 border border-blue-500/20 md:hidden justify-between items-center absolute top-20 left-4 right-4 sm:left-10 sm:right-10 z-[1000] shadow-2xl" 
      style={{ pointerEvents: isMenu ? "auto" : "none" }}>

      {navLinks.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.link}`}
            className="menu-link font-semibold tracking-wider text-gray-100 hover:text-blue-400 transition duration-300"
          >
            {item.Element}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;
