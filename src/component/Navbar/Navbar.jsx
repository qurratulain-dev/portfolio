import React, { useState, useEffect, useRef } from "react";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { gsap } from "gsap";
import MobileMenu from "./MobileMenu";
import logo from "../../assets/logo-navbar.png";

const Navbar = () => {
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
            className={`fixed top-0 left-0 w-full z-9999 transition-all duration-500 ${scrolled ? "bg-[#1f242d]" : "bg-[#1f242d]/90"
                } backdrop-blur-lg shadow-md`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16 sm:h-18 lg:h-20">
                <a
                    href="#home"
                    className="animate-item shrink-0 relative group"
                    aria-label="Go to home"
                >
                    <img
                        src={logo}
                        alt="Qurat portfolio logo"
                        className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
                    />
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-emerald-400 to-teal-400 rounded-full transition-all duration-500 group-hover:w-full"></span>
                </a>

                {/* Nav Links */}
                <ul className="md:flex hidden items-center gap-2 lg:gap-6 ml-auto">
                    {navLinks.map((item) => (
                        <li key={item.id} className="animate-item">
                            <a
                                href={`#${item.link}`}
                                onClick={(e) => handleClick(e, item.link)}
                                className={`font-semibold tracking-wider text-gray-100 px-3 py-1.5 rounded-md relative inline-block 
                                transition-all duration-300 ease-in-out 
                                ${activeSection === item.link
                                        ? "bg-emerald-500/10 text-emerald-400"
                                        : "hover:bg-emerald-500/10 hover:text-emerald-400"
                                    }`}
                            >
                                {item.Element}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile menu button */}
                <div className="ml-auto md:ml-4 flex items-center gap-3 sm:gap-5">
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
    { id: 4, Element: "Projects", link: "projects" },
    { id: 5, Element: "Contact", link: "contact" },
];

export default Navbar;

