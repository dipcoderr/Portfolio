// import React from 'react'
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import js from "../../assets/javascript.png"
import git from "../../assets/github.png"
import react from "../../assets/react.png"
import tailwind from "../../assets/tailwind.png"
import { Tilt } from "react-tilt"

const Frontend = () => {
    const tiltOptions = {
        max: 45,
        scale:1,
        speed:750
    };
return (
    <Tilt className="skills-content" options={tiltOptions}>
        <h3 className="skills-title">Frontend Developer</h3>

        <div className="skills-box">
            <div className="skills-group">
                <div className="skills-data">
                    <div>
                        <img src={html} alt="html" className="skills-img" />
                        <h3 className="skills-name">HTML</h3>
                    </div>
                </div>

                <div className="skills-data">
                    <div>
                        <img src={css} alt="css" className="skills-img" />
                        <h3 className="skills-name">CSS</h3>
                    </div>
                </div>

                <div className="skills-data">
                    <div>
                        <img src={js} alt="javascript" className="skills-img" />
                        <h3 className="skills-name">JavaScript</h3>
                    </div>
                </div>
            </div>

            <div className="skills-group">
                <div className="skills-data">
                    <div>
                        <img src={react} alt="react" className="skills-img" />
                        <h3 className="skills-name">React</h3>
                    </div>
                </div>

                <div className="skills-data">
                    <div>
                        <img src={git} alt="git" className="skills-img" />
                        <h3 className="skills-name">Git/GitHub</h3>
                    </div>
                </div>

                <div className="skills-data">
                    <div>
                        <img src={tailwind} alt="tailwind" className="skills-img" />
                        <h3 className="skills-name">Tailwind</h3>
                    </div>
                </div>
            </div>
        </div>
    </Tilt>
)
}

export default Frontend;