import React from "react";
import aws from "../images/aws.png";
import css from "../images/css.png";
import express from "../images/express.png";
import git from "../images/git.png";
import js from "../images/js.png";
import mongo from "../images/mongo.jpg";
import react from "../images/react.png";
import node from "../images/node.jpg";
import "./skill.css";

const skills=[aws,css,express,git,js,mongo,react,node];
const Skills=()=>{
    return (
        <section className="skills-section">
          <h2 className="skills-heading">2+ Years Experience</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <img src={skill} alt={skill.name} />
        
              </div>
            ))}
          </div>
        </section>
      );
}

export default Skills;