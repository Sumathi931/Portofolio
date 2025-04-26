import React, { useEffect, useState } from "react";
import "./home.css";
import helloImg from "../images/hello.avif";
import { Link } from "react-scroll";

const roles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
];

const Home = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let charIndex = 0;

    const typeEffect = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setDisplayedText(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeEffect);
      }
    }, 100);

    const roleChangeTimeout = setTimeout(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => {
      clearInterval(typeEffect);
      clearTimeout(roleChangeTimeout);
    };
  }, [currentRoleIndex]);

  const handleResumeDownload = () => {
    const confirmed = window.confirm("Do you want to download the resume?");
    if (confirmed) {
      const link = document.createElement("a");
      link.href = "/Sumathi_Resume.pdf";
      link.download = "Sumathi_Resume.pdf";
      link.click();
    }
  };

  return (
    <div className="home-container">
      <div className="home-left">
        <h2 className="gradient-text">I'm Sumathi</h2>
        <h3 className="role-typewriter">{displayedText}</h3>
        <h4 className="stack">React • Node • MongoDB • Express</h4>

        <div className="buttons">
          <button onClick={handleResumeDownload} className="get-resume">
            📄 Get Resume
          </button>
          <button>
            <Link to="projects">🚀 Projects</Link>{" "}
          </button>
        </div>
      </div>

      <div className="home-right">
        <img src={helloImg} alt="Hello waving" className="waving-img" />
      </div>
    </div>
  );
};

export default Home;
