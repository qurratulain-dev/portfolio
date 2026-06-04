import React from "react";
import LeftAbout from "./LeftAbout";
import RightAbout from "./RightAbout";

const About = () => {
    

    return (
        <section id="about" className="section-surface-secondary section-divider-soft scroll-mt-20 py-10 sm:py-12 lg:py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row gap-8 lg:gap-16 items-center">
                <LeftAbout />
                {/* RIGHT SIDE */}
               <RightAbout />
            </div>
        </section>
    );
};

export default About;
