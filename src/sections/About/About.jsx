import React from "react";
import LeftAbout from "./LeftAbout";
import RightAbout from "./RightAbout";
import SectionHeading from "../../components/SectionHeading";

const About = () => {
  return (
    <section id="about" className="site-section section-divider-soft scroll-mt-nav">
      <div className="container-site">
        <SectionHeading
          title="Crafting Scalable Web Solutions with Purpose"
          subtitle="Full-stack developer with production experience in Laravel, React, and MySQL, growing toward AI-powered web applications."
        />
        {/* Two columns only from lg. The portrait column is capped at 22rem so the
            text column keeps a ~65-80 character reading measure at every width. */}
        <div className="about-layout grid grid-cols-1 items-start gap-10 sm:gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] xl:gap-16">
          <LeftAbout />
          <RightAbout />
        </div>
      </div>
    </section>
  );
};

export default About;
