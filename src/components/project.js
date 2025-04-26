import React from "react";
import "./project.css";
import dp from "../images/dp.png";
import j1 from "../images/j1.png";
import PF from "../images/PF.png";

const projects = [
  {
    title: "Portfolio Website",
    image: PF,
    link:"https://dailyplanner-sumathi.vercel.app/",
    description:
      "A responsive personal portfolio website built using React.js and CSS. The site showcases my work, skills, and contact information in a clean and organized layout. It features smooth navigation, modern styling, and reusable React components for scalability and maintainability.",
  },
  {
    title: "E-Commerce App",
    image: j1,
    link:"https://dailyplanner-sumathi.vercel.app/",
    description:
      "A full-stack e-commerce application using MERN stack with features like user authentication, shopping cart, and Stripe integration. Explore a wide range of products, manage your cart, and experience a seamless checkout process.",
  },
  {
    title: "Daily Planner",
    image: dp,
    link:"https://dailyplanner-sumathi.vercel.app/",
    description:
      "A simple and efficient task management application built using React.js and CSS. This app allows users to add, edit and delete. It focuses on clean design, user-friendly interactions, and component-based architecture.",
  },
];

const Project = () => {
  return (
    <>
      <section className="project-section" id="projects">
        <h2 className="project-heading">My Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <a 
            href={project.link}
            rel="noopener noreferrer"
            key={index}
            className="project-card"
            target="_blank">
            <div
              className="project-card"
              key={index}
              // style={{ "--delay": `${index * 0.15}s` }}
            >
              <div className="image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>
                </div>
              </div>
             
            </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;
