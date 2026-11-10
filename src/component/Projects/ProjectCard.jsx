import React from 'react'
import { Tilt } from "react-tilt";

const ProjectCard = ({project}) => {
    const tiltOptions = {
        max: 45,
        scale: 1,
        speed: 750,
      };

  return (
    <Tilt
            // key={project.id}
            className="tilt-card"
            style={{
              backgroundImage: project.image
                ? `url(${project.image})`
                : `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            options={tiltOptions}
          >
            <div className="tilt-card-content">
              <h2>{project.name}</h2>
              {project.summary && <p className="project-summary">{project.summary}</p>}
              <div className="button-container">
                {project.GithubURL && (
                  <button className="custom-button">
                    <a href={project.GithubURL} target="_blank" rel="noreferrer">
                      Github
                    </a>
                  </button>
                )}
                {project.LiveURL && (
                  <button className="custom-button">
                    <a href={project.LiveURL} target="_blank" rel="noreferrer">
                      Demo
                    </a>
                  </button>
                )}
              </div>
            </div>
          </Tilt>
  )
}

export default ProjectCard;
