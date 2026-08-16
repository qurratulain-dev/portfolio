import React from "react";
import LeftAbout from "./LeftAbout";
import RightAbout from "./RightAbout";

const About = () => {
    

    return (
        <section id="about" className="section-divider-soft scroll-mt-20 py-10 sm:py-12 lg:py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 sm:mb-14">
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <span className="w-8 h-px bg-accent/40 inline-block" />
                        <span className="text-xs font-semibold uppercase tracking-[0.2em]"
                              style={{ color: "var(--color-accent)" }}>
                            About
                        </span>
                        <span className="w-8 h-px bg-accent/40 inline-block" />
                    </div>
                    <h2
                        className="font-extrabold"
                        style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "var(--color-text)", letterSpacing: "-0.02em" }}
                    >
                        Building things that work in production.
                    </h2>
                    <p style={{ fontSize: "0.95rem", color: "var(--color-muted)", maxWidth: "480px", lineHeight: 1.7 }} className="mx-auto mt-3">
                        Full-stack developer focused on clean architecture, maintainable code, and real business delivery.
                    </p>
                </div>
                <div className="about-layout grid grid-cols-1 sm:grid-cols-[300px_1fr] gap-6 sm:gap-20 items-start">
                    <LeftAbout />
                    <RightAbout />
                </div>
            </div>
        </section>
    );
};

export default About;
