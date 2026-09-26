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

    const menuToggle = () => {
        setIsMenu((prev) => !prev);
    };

    const handleClick = (e, sectionId) => {
        e.preventDefault();
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionId);
        setIsMenu(false);
    };

    //  Scroll background effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // find active section while scrolling
            const sections = document.querySelectorAll("section");
            let current = "home";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 120;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute("id");
                }
            });
            setActiveSection(current);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
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
                <nav className="container-site flex items-center h-16 lg:h-18">
                    <a
                        href="/"
                        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setActiveSection('home'); }}
                        className="nav-brand animate-item shrink-0"
                        aria-label="Go to home"
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
                                aria-pressed={!isDarkMode}
                                title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                                className="btn-icon ghost-btn animate-item"
                            >
                                <span className="ghost-sweep" />
                                <span className="relative z-10">{isDarkMode ? <FiSun /> : <FiMoon />}</span>
                            </button>

                            {/* Mobile menu button */}
                            <button
                                type="button"
                                onClick={menuToggle}
                                aria-label="Toggle navigation menu"
                                aria-expanded={isMenu}
                                aria-controls="mobile-menu"
                                className="btn-icon ghost-btn lg:hidden animate-item"
                            >
                                <span className="ghost-sweep" />
                                <span className="relative z-10">{isMenu ? <TbMenu3 /> : <TbMenu2 />}</span>
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