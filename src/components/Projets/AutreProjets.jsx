import React, { useState, useEffect } from "react";

const Project2 = ({ data }) => {
  const [projects2, setProjects2] = useState([]);

  useEffect(() => {
    if (data) {
      const projectsData2 = data.projects2.map((project2) => {
        const projectImage = `images/portfolio/${project2.image}`;
        return (
          <div key={project2.title} className="projet_card">
            <div className="projet-image">
              <img alt={project2.title} src={projectImage} />
              <div className="overlay">
                <div className="projet-info">
                  <div className="projet-header">
                    <h2>{project2.title}</h2>
                    <p>{project2.category}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="icone">
              <a href={project2.url} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-link"></i>
              </a>
            </div>
          </div>
        );
      });
      setProjects2(projectsData2);
    }
  }, [data]);

  return (
    <div className="projets-page">
      <h1 className="TitreListeProjets">Liste des projets</h1>
      <div className="projets-grid">{projects2}</div>
    </div>
  );
};

export default Project2;
