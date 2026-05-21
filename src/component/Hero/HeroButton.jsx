// 📁 components/HeroButton.jsx
import React from "react";
import { FiDownload, FiMail } from "react-icons/fi";
import ButtonItem from "../ButtonItem/ButtonItem";

const HeroButton = () => {
  const buttons = [
    {
      id: 1,
      icon: <FiDownload />,
      text: "Download Resume",
      href:"https://drive.google.com/file/d/1YsMcjmsusuTedAWlwRNyTTbbMm_FGqFI/view?usp=drive_link"
    },
    {
      id: 2,
      icon: <FiMail />,
      text: "Contact Me",
      href: "#contact",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-8 justify-center">
      {buttons.map((btn) => (
        <ButtonItem key={btn.id} icon={btn.icon} text={btn.text} href={btn.href} />
      ))}
    </div>
  );
};

export default HeroButton;
