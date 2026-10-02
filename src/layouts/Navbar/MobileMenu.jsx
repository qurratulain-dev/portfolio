import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const reduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const MobileMenu = ({ navLinks, isMenu, activeSection, onNavigate }) => {
  const menuRef = useRef(null);
  const openedOnce = useRef(false);

  useEffect(() => {
    const menu = menuRef.current;
    const links = menu.querySelectorAll(".menu-link");

    /* The close tween is a real animation and is kept. What is skipped is work
       whose result nobody can see, and the common cases are the first two:
         - desktop: the panel's own `xl:hidden` is display:none, so a tween on
           it animates nothing. Re-read per run so a resize across the lg
           breakpoint is picked up on the next toggle.
         - first closed mount: the menu has never been open, so there is no
           state to animate away from. Previously this ran a 250ms close tween
           on a panel that was already sitting at its closed values, which is
           what produced the full-opacity flash on every page load. The closed
           state is now declared in CSS, so this just parks it.
       Both land on the same values the tween would have produced. */
    const hidden = window.getComputedStyle(menu).display === "none";
    if (hidden || reduceMotion()) {
      gsap.set(menu, { opacity: isMenu ? 1 : 0, scale: 1, y: 0 });
      gsap.set(links, { opacity: 1, x: 0 });
      return;
    }

    if (isMenu) {
      openedOnce.current = true;
      const tween = gsap.fromTo(
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

      /* Without this a tween that is still running when the panel unmounts
         keeps writing to a detached node on every frame. */
      return () => {
        tween.kill();
        gsap.killTweensOf(menu);
        gsap.killTweensOf(links);
      };
    }

    if (openedOnce.current) {
      const tween = gsap.to(menu, {
        opacity: 0,
        scale: 0.95,
        duration: 0.25,
        ease: "power1.inOut",
      });
      return () => tween.kill();
    }

    // Never opened: park it at the closed values without tweening.
    gsap.set(menu, { opacity: 0, scale: 0.95, y: 0 });
    gsap.set(links, { opacity: 1, x: 0 });
  }, [isMenu]);

  return (
    <ul
      ref={menuRef}
      id="mobile-menu"
      aria-hidden={!isMenu}
      className="mobile-panel flex flex-col gap-1 p-3 xl:hidden absolute top-20 left-4 right-4 sm:left-10 sm:right-10 z-[1000]"
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
