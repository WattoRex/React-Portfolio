import React from "react";
import ProjectsCode from "../components/Projets/ProjetsCode";
import ProjectOther from "../components/Projets/AutreProjets";
import "../components/Projets/Projets.css";

const Portfolio = ({ data }) => {
  return (
    <div>
      <ProjectsCode data={data} />
      <ProjectOther data={data} />
    </div>
  );
};

export default Portfolio;
