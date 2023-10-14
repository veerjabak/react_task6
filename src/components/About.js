import React from "react";
import "./About.css";

function About() {
  return (
    <div id="about" style={{ margin: "0 auto", backgroundColor: "black" }}>
      <div className="card1">
        <div className="content1">
          <p className="heading1">About Me</p>
          <p className="para1">
            Hello and welcome to my portfolio! I am Veer H Jabak, a passionate
            Full Stack Web Developer with a deep love for creating web
            applications that are not only functional but also aesthetically
            pleasing. My journey in the world of web development has been an
            exciting one, and I am thrilled to share my work with you.
          </p>
          <p>
            I specialize in various web technologies, including HTML, CSS,
            JavaScript, SASS, React.js, Node.js, MongoDB, and Express.js.
          </p>
          <p>
            I am also showing a strong interest in data analytics and am
            currently learning and expanding my skills in this field.
          </p>
          <button className="btn">Read more</button>
        </div>
      </div>
    </div>
  );
}

export default About;
