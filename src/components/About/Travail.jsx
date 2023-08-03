import React from "react";

const Work = ({ work }) => {
  const workList = work.map((workItem) => (
    <div key={workItem.company}>
      <h3 className="titre">{workItem.company}</h3>
      <p className="info">
        {workItem.title} <span>&bull;</span>
        <em className="date">{workItem.years}</em>
      </p>
      <p className="description">{workItem.description}</p>
    </div>
  ));

  return (
    <div className="row work">
      <div className="GridTitre">
        <h1>
          <span>Expérience Professionelle</span>
        </h1>
      </div>
      <div className="LiteProTra">{workList}</div>
    </div>
  );
};

export default Work;
