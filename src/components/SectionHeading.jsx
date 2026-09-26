import React from "react";

const SectionHeading = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="section-header">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;