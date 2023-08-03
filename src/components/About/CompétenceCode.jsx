import React from "react";

const Skill = ({ skillmessage, skills }) => {
  const skillsList = skills.map((skillsItem) => {
    const className = "bar-expand " + skillsItem.name.toLowerCase();
    return (
      <li key={skillsItem.name}>
        <span style={{ width: skillsItem.level }} className={className}></span>
        <span className="tooltip">{skillsItem.level}</span>
        <em>{skillsItem.name}</em>
        <span className="percentage">{skillsItem.level}</span>
      </li>
    );
  });

  return (
    <div className="row skill">
      <div className="CompétenceTitre">
        <h1>
          <span>Compétence en Codes</span>
        </h1>
      </div>
      <div className="bars">
        <ul className="skills">{skillsList}</ul>
      </div>
    </div>
  );
};

export default Skill;
