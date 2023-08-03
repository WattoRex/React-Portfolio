import React from "react";

const Skill = ({ skillmessage, skills2 }) => {
  const skillsList2 = skills2.map((skills2Item) => {
    const className = "bar-expand " + skills2Item.name.toLowerCase();
    return (
      <li key={skills2Item.name}>
        <span style={{ width: skills2Item.level }} className={className}></span>
        <span className="tooltip">{skills2Item.level}</span>
        <em>{skills2Item.name}</em>
        <span className="percentage">{skills2Item.level}</span>
      </li>
    );
  });

  return (
    <div className="row skill">
      <div className="CompétenceTitre">
        <h1>
          <span>Compétence Autres</span>
        </h1>
      </div>
      <div className="bars">
        <ul className="skills">{skillsList2}</ul>
      </div>
    </div>
  );
};

export default Skill;
