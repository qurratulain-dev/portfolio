import React from "react";
import { FiDownload, FiMail } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import AnimatedLinkButton from "../../components/AnimatedLinkButton";

const HeroActions = () => {
  const buttons = [
    {
      id: 1,
      icon: <FiArrowRight />,
      text: "View My Work",
      href: "#portfolio",
      variant: "filled",
    },
    {
      id: 2,
      icon: <FiMail />,
      text: "Get in Touch",
      href: "#contact",
      variant: "outlined",
    },
    {
      id: 3,
      icon: <FiDownload />,
      text: "Download CV",
      href:"https://drive.google.com/file/d/1vZNZJrytqlKDjruyLXL8U1hhQh1urZA9/view?usp=sharing",
      variant: "outlined",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-8 justify-center">
      {buttons.map((btn) => (
        <AnimatedLinkButton key={btn.id} icon={btn.icon} text={btn.text} href={btn.href} variant={btn.variant} />
      ))}
    </div>
  );
};

export default HeroActions;
