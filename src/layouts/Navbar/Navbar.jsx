import React, { useState, useEffect, useRef } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { gsap } from "gsap";
import MobileMenu from "./MobileMenu";


const Navbar = ({ isDarkMode, onToggleTheme }) => {
    const [isMenu, setIsMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const navRef = useRef(null);

    const menuToggle = () => {
        setIsMenu(!isMenu);
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

    // ✅ GSAP entry animation
    useEffect(() => {
        const elements = navRef.current.querySelectorAll(".animate-item");
        gsap.fromTo(
            elements,
            { opacity: 0, y: 25 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.15,
                ease: "power3.out",
            }
        );
    }, []);

    return (
        <header
            ref={navRef}
            className="site-navbar fixed top-0 left-0 w-full z-9999 transition-all duration-500 backdrop-blur-lg"
            style={{ backgroundColor: scrolled ? "var(--color-navbar-bg)" : "var(--color-navbar-bg-soft)" }}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16 sm:h-18 lg:h-20">
                <a
                    href="#home"
                    className="animate-item shrink-0"
                    aria-label="Go to home"
                >
                    <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        Quratulain<span className="text-blue-500">.dev</span>
                    </span>
                </a>

                {/* Right side group */}
                <div className="flex items-center gap-4 ml-auto">
                    {/* Nav Links */}
                    <ul className="md:flex hidden items-center gap-2 lg:gap-6">
                        {navLinks.map((item) => (
                            <li key={item.id} className="animate-item">
                                <a
                                    href={`#${item.link}`}
                                    onClick={(e) => handleClick(e, item.link)}
                                    className={`font-semibold tracking-wider text-gray-100 px-3 py-1.5 rounded-md relative inline-block 
                                 transition-all duration-300 ease-in-out 
                                 ${activeSection === item.link
                                            ? "bg-blue-500/10 text-blue-400"
                                            : "hover:bg-blue-500/10 hover:text-blue-400"
                                        }`}
                                >
                                    {item.Element}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Vertical divider */}
                    <div className="hidden md:block w-px h-6 bg-gray-500/40"></div>

                    {/* Mobile menu button */}
                    <div className="flex items-center gap-3 sm:gap-5">
                        <button
                            type="button"
                            onClick={onToggleTheme}
                            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                            aria-pressed={!isDarkMode}
                            className="theme-toggle animate-item relative overflow-hidden h-10 w-10 shrink-0 items-center justify-center inline-flex border-2 border-blue-400/60 text-gray-100 rounded-lg text-xl transition-all duration-500 group"
                        >
                            <span className="relative z-10">{isDarkMode ? <FiSun /> : <FiMoon />}</span>
                            <span className="absolute top-0 left-0 w-full h-full bg-accent-gradient origin-bottom-left -rotate-90 group-hover:rotate-0 transition-transform duration-500 ease-in-out z-0"></span>
                        </button>

                        <a
                            href="#"
                            className="text-gray-100 text-3xl md:hidden animate-item"
                            onClick={(e) => {
                                e.preventDefault();
                                menuToggle();
                            }}
                        >
                            {isMenu ? <TbMenu3 /> : <TbMenu2 />}
                        </a>
                    </div>
                </div>

                {/* Mobile Menu */}
                <MobileMenu navLinks={navLinks} isMenu={isMenu} />
            </nav>
        </header>
    );
};

const navLinks = [
    { id: 1, Element: "Home", link: "home" },
    { id: 2, Element: "About", link: "about" },
    { id: 3, Element: "Skills", link: "skills" },
    { id: 4, Element: "Experience", link: "experience" },
    { id: 5, Element: "Projects", link: "projects" },
    { id: 6, Element: "Contact", link: "contact" },
];

export default Navbar;

