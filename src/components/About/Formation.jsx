import React from "react";

const Education = ({ education }) => {
  const educationList = education.map((educationItem) => (
    <div key={educationItem.school}>
      <h3 className="titre">{educationItem.school}</h3>
      <p className="info">
        {educationItem.degree} <span>&bull;</span>
        <em className="date">{educationItem.graduated}</em>
      </p>
      <p className="description">{educationItem.description}</p>
    </div>
  ));

  return (
    <div className="row education">
      <div className="GridTitre">
        <h1>
          <span>Mes Formations</span>
        </h1>
      </div>
      <div className="nine columns main-col">
        <div className="row item">
          <div className="LiteProTra">{educationList}</div>
        </div>
      </div>
    </div>
  );
};

export default Education;
