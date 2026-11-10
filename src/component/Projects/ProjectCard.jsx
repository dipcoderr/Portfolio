import React from 'react'
import { Tilt } from "react-tilt";
import githubIcon from "../../assets/github.png";

const ProjectCard = ({project, centered}) => {
    const tiltOptions = {
        max: 45,
        scale: 1,
        speed: 750,
    };

    const hasImage = !!project.image;
    const hasLogo  = !!project.logo;

    return (
        <Tilt
            className={`tilt-card${centered ? ' tilt-card--centered' : ''}`}
            style={{
                backgroundImage: hasImage
                    ? `url(${project.image})`
                    : `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            options={tiltOptions}
        >
            <div className="tilt-card-content">
                {hasLogo ? (
                    <div className="tilt-card-logo-wrap">
                        <img src={project.logo} alt={`${project.name} logo`} className="tilt-card-logo" />
                    </div>
                ) : (
                    <div className="tilt-card-spacer" />
                )}

                <h2>{project.name}</h2>

                <div className="button-container">
                    {project.GithubURL && (
                        <a href={project.GithubURL} target="_blank" rel="noreferrer" className="github-icon-link">
                            <img src={githubIcon} alt="GitHub" className="github-icon-img" />
                        </a>
                    )}
                </div>
            </div>
        </Tilt>
    );
};

export default ProjectCard;
