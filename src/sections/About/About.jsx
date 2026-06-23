import React from "react";
import LeftAbout from "./LeftAbout";
import RightAbout from "./RightAbout";

const About = () => {
    

    return (
        <section id="about" className="section-divider-soft scroll-mt-20 py-10 sm:py-12 lg:py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 sm:mb-14">
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <span className="w-8 h-px bg-blue-400/40 inline-block" />
                        <span className="text-xs font-semibold uppercase tracking-[0.2em]"
                              style={{ color: "#3B82F6" }}>
                            About
                        </span>
                    </div>
                    <h2
                        className="font-extrabold"
                        style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "#FAFAFA", letterSpacing: "-0.02em" }}
                    >
                        Building things that work in production.
                    </h2>
                    <p style={{ fontSize: "0.95rem", color: "#71717A", maxWidth: "480px", lineHeight: 1.7 }} className="mx-auto mt-3">
                        Full-stack developer focused on clean architecture, maintainable code, and real business delivery.
                    </p>
                </div>
                <div className="about-layout" style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: "5rem", alignItems: "start" }}>
                    <LeftAbout />
                    <RightAbout />
                </div>
            </div>
        </section>
    );
};

export default About;
