// Projects.js
import React from "react";
import Projectcards from "./Projectcards";

const projects = [
  {
    name: "OmniFoods",
    description: "A website built using HTML, CSS, and JavaScript.",
    techStack: "HTML, CSS, JavaScript",
    image: "https://omnifood.dev/img/hero-min.png",
  },
  {
    name: "Calculator",
    description: "A simple calculator app built using React.js.",
    techStack: "React.js",
    image: "https://omnifood.dev/img/hero-min.png",
  },
  {
    name: "ColorPicker",
    description: "A color picker tool created with React.js and colorz.",
    techStack: "React.js",
    image: "https://omnifood.dev/img/hero-min.png",
  },
  {
    name: "Weather App",
    description: "A weather forecasting application developed using React.js.",
    techStack: "React.js",
    image: "https://omnifood.dev/img/hero-min.png",
  },
];

const Projects = () => {
  return (
    <div id="projects" style={{ backgroundColor: "black", padding: "4rem 0" }}>
      <div
        className="container "
        style={{
          backgroundColor: "black",
          color: "white",
          border: "1px solid white",
        }}
      >
        <h2>PROJECTS</h2>
        <p className="title">Here are some of the Project i Have Worked on</p>
        <div className="row">
          {projects.map((project, index) => (
            <div
              className="col-xl-4 gap-3 mb-5"
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
              key={index}
            >
              <Projectcards {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
