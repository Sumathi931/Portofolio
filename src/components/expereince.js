import React from "react";
import "./Experience.css";
const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="experience-heading">Experience</h2>
      <div className="experience-timeline">
        <div className="experience-item">
          <div className="experience-content">
            <div className="role-title">Senior Systems Engineer</div>
            <div className="duration">Jan 2025 – Present</div>
          </div>
        </div>

        <div className="experience-item">
          <div className="experience-content">
            <div className="role-title">Systems Engineer</div>
            <div className="duration">Oct 2022 – Dec 2024</div>
          </div>
          <div className="company-circle">Infosys</div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
