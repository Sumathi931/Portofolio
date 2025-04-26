import "./App.css";
import React from "react";
import Home from "./components/Home";
import Skills from "./components/skills";
import Experience from "./components/expereince";
import Nav from "./components/navbar";
import Project from "./components/project";
import ContactME from "./components/contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <div id="home">
        <Home />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="experience">
        <Experience />
      </div>

      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <ContactME />
      </div>
    </div>
  );
}

export default App;
