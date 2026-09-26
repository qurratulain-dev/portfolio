import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const reduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const MobileMenu = ({ navLinks, isMenu, activeSection, onNavigate }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const menu = menuRef.current;
    const links = menu.querySelectorAll(".menu-link");

    if (reduceMotion()) {
      gsap.set(menu, { opacity: isMenu ? 1 : 0, scale: 1, y: 0 });
      gsap.set(links, { opacity: 1, x: 0, stagger: 0 });
      return;
    }

    if (isMenu) {
      gsap.fromTo(
        menu,
        { opacity: 0, scale: 0.9, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
      gsap.fromTo(
        links,
        { opacity: 0, x: 24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: "power3.out",
          delay: 0.05,
        }
      );
    } else {
      gsap.to(menu, {
        opacity: 0,
        scale: 0.95,
        duration: 0.25,
        ease: "power1.inOut",
      });
    }
  }, [isMenu]);

  return (
    <ul
      ref={menuRef}
      id="mobile-menu"
      aria-hidden={!isMenu}
      className="mobile-panel flex flex-col gap-1 p-3 lg:hidden absolute top-20 left-4 right-4 sm:left-10 sm:right-10 z-[1000]"
      style={{ pointerEvents: isMenu ? "auto" : "none" }}
    >
      {navLinks.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.link}`}
            onClick={(e) => onNavigate(e, item.link)}
            className={`menu-link${activeSection === item.link ? " menu-link-active" : ""}`}
            aria-current={activeSection === item.link ? "true" : undefined}
            tabIndex={isMenu ? 0 : -1}
          >
            {item.Element}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;