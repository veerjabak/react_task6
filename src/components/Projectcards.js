import React from "react";

const Projectcards = ({ name, description, techStack, image }) => {
  return (
    <div className="card">
      <img
        src={image}
        className="card-img-top"
        alt={name}
        style={{ width: "100%", height: "100px" }}
      />
      <div className="card-body">
        <h5 className="card-title text-dark">{name}</h5>
        <p className="card-text text-dark">Description: {description}</p>
        <p className="card-text text-dark">Tech Stack: {techStack}</p>
      </div>
    </div>
  );
};

export default Projectcards;
