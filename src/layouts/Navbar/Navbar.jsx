import React, { useState, useEffect, useRef } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { gsap } from "gsap";
import MobileMenu from "./MobileMenu";

const reduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Navbar = ({ isDarkMode, onToggleTheme }) => {
    const [isMenu, setIsMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const navRef = useRef(null);
    const menuBtnRef = useRef(null);
    const menuWasOpen = useRef(false);

    const menuToggle = () => {
        setIsMenu((prev) => !prev);
    };

    const handleClick = (e, sectionId) => {
        e.preventDefault();
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionId);
        setIsMenu(false);
    };

    /* Scroll background + active-section tracking.

       The raw listener used to re-run querySelectorAll("section") and re-read
       every section's offsetTop on every scroll event, so a single flick could
       fire dozens of times and each one forced a synchronous layout. Two
       changes, same observable result:
         - the section list is resolved once instead of per event;
         - work is coalesced into one requestAnimationFrame per frame, so at
           most one read happens per painted frame however many scroll events
           arrive. A frame flag (not a timestamp) is used so a slow frame still
           ends up reading the final scroll position rather than skipping it.
       offsetTop is deliberately still read per frame rather than cached: the
       document reflows as fonts and the portrait settle, and a cached value
       would freeze the active link at a stale offset. */
    useEffect(() => {
        const sections = Array.from(document.querySelectorAll("section"));
        let frame = 0;
        let readActive = () => {
            frame = 0;
            setScrolled(window.scrollY > 50);

            // find active section while scrolling
            let current = "home";
            for (const section of sections) {
                if (window.scrollY >= section.offsetTop - 120) {
                    current = section.getAttribute("id");
                }
            }
            setActiveSection(current);
        };
        const onScroll = () => {
            if (frame) return;
            frame = requestAnimationFrame(readActive);
        };
        // sections are laid out after mount, so seed the initial state
        readActive();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            if (frame) cancelAnimationFrame(frame);
        };
    }, []);

    //  Close mobile menu on Escape
    useEffect(() => {
        if (!isMenu) return;
        const onKey = (e) => {
            if (e.key === "Escape") setIsMenu(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isMenu]);

    /* Disclosure focus handling, for every route out of the open state
       (Escape, the backdrop, or picking a link) rather than only for Escape:
         opening  -> focus the first menu link, so the next Tab stays inside
                     the panel the user just opened instead of jumping back
                     out to the page behind it;
         closing  -> hand focus back to the trigger, because the link the user
                     was on has just become aria-hidden and tabIndex -1, and
                     leaving focus there would strand them.
       Focus is deliberately not trapped while open: this is a navigation
       disclosure, not a dialog, so Tab still walks the page normally. The
       menuWasOpen ref keeps the initial closed render from stealing focus. */
    useEffect(() => {
        if (isMenu) {
            menuWasOpen.current = true;
            document
                .getElementById("mobile-menu")
                ?.querySelector(".menu-link")
                ?.focus();
        } else if (menuWasOpen.current) {
            menuWasOpen.current = false;
            menuBtnRef.current?.focus();
        }
    }, [isMenu]);

    // ✅ GSAP entry animation
    useEffect(() => {
        const elements = navRef.current.querySelectorAll(".animate-item");
        if (reduceMotion()) {
            gsap.set(elements, { opacity: 1, y: 0 });
            return;
        }
        gsap.fromTo(
            elements,
            { opacity: 0, y: 16 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.08,
                ease: "power3.out",
            }
        );
    }, []);

    return (
        <>
            {isMenu && (
                <div className="mobile-backdrop" onClick={menuToggle} aria-hidden="true" />
            )}
            <header
                ref={navRef}
                className={`site-navbar fixed top-0 left-0 w-full z-[9999] backdrop-blur-lg ${
                    scrolled ? "is-scrolled" : ""
                }`}
            >
                <nav aria-label="Primary" className="container-site flex items-center h-16 lg:h-18">
                    {/* No aria-label here on purpose: the visible wordmark
                        "Quratulain.dev" is already the link's accessible name,
                        and overriding it would break WCAG 2.5.3 Label in Name. */}
                    <a
                        href="/"
                        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setActiveSection('home'); }}
                        className="nav-brand animate-item shrink-0"
                    >
                        Quratulain<span className="nav-brand-accent">.dev</span>
                    </a>

                    {/* Right side group */}
                    <div className="flex items-center gap-2 sm:gap-3 ml-auto">
                        {/* Nav Links */}
                        <ul className="hidden lg:flex items-center gap-1">
                            {navLinks.map((item) => (
                                <li key={item.id} className="animate-item">
                                    <a
                                        href={`#${item.link}`}
                                        onClick={(e) => handleClick(e, item.link)}
                                        className={`nav-link${activeSection === item.link ? " nav-link-active" : ""}`}
                                        aria-current={activeSection === item.link ? "true" : undefined}
                                    >
                                        {item.Element}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Vertical divider */}
                        <div className="hidden lg:block w-px h-5 bg-border" aria-hidden="true"></div>

                        <div className="flex items-center gap-2 sm:gap-3">
                            {/* Theme toggle */}
                            <button
                                type="button"
                                onClick={onToggleTheme}
                                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                                title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                                className="btn-icon ghost-btn animate-item"
                            >
                                <span className="ghost-sweep" />
                                <span className="relative z-10" aria-hidden="true">{isDarkMode ? <FiSun /> : <FiMoon />}</span>
                            </button>

                            {/* Mobile menu button. The label states the action
                                the press will perform, and swaps with the state,
                                instead of the vague "Toggle navigation menu".
                                aria-expanded mirrors isMenu and aria-controls
                                points at MobileMenu's own id. */}
                            <button
                                ref={menuBtnRef}
                                type="button"
                                onClick={menuToggle}
                                aria-label={isMenu ? "Close navigation menu" : "Open navigation menu"}
                                aria-expanded={isMenu}
                                aria-controls="mobile-menu"
                                className="btn-icon ghost-btn lg:hidden animate-item"
                            >
                                <span className="ghost-sweep" />
                                <span className="relative z-10" aria-hidden="true">{isMenu ? <TbMenu3 /> : <TbMenu2 />}</span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <MobileMenu
                        navLinks={navLinks}
                        isMenu={isMenu}
                        activeSection={activeSection}
                        onNavigate={handleClick}
                    />
                </nav>
            </header>
        </>
    );
};

const navLinks = [
    { id: 1, Element: "About", link: "about" },
    { id: 3, Element: "Skills", link: "skills" },
    { id: 4, Element: "Experience", link: "experience" },
    { id: 5, Element: "Certifications", link: "certifications" },
    { id: 6, Element: "Projects", link: "projects" },
    { id: 7, Element: "Contact", link: "contact" },
];

export default Navbar;