import React, { useState, useEffect } from "react";

const Project = ({ data }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (data) {
      const projectsData = data.projects.map((project) => {
        const projectImage = `images/portfolio/${project.image}`;
        return (
          <div key={project.title} className="projet_card">
            <div className="projet-image">
              <img alt={project.title} src={projectImage} />
              <div className="overlay">
                <div className="projet-info">
                  <div className="projet-header">
                    <h>{project.title}</h>
                    <p>{project.category}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="icone">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-link"></i>
              </a>
            </div>
          </div>
        );
      });
      setProjects(projectsData);
    }
  }, [data]);

  return (
    <div className="projets-page">
      <h1 className="TitreListeProjets">Liste des projets</h1>
      <div className="projets-grid">{projects}</div>
    </div>
  );
};

export default Project;
