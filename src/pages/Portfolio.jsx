import React from "react";
import ProjectsCode from "../components/Projets/ProjetsCode";
import ProjectOther from "../components/Projets/AutreProjets";
import Footer from "../components/Footer/Footer"
import "../components/Projets/Projets.css";


const Portfolio = ({ data }) => {
  return (
    <section>
    <div>
      <ProjectsCode data={data} />
      <ProjectOther data={data} />
    </div>
    <footer>
        <Footer/>
      </footer>
    </section>
  );
};

export default Portfolio;
