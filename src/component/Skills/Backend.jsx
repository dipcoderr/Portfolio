// import React from 'react';
import node from "../../assets/node.png"
import firebase from "../../assets/firebase.png"
import java from "../../assets/java.png";
import mysql from "../../assets/mysql.png";
import mongodb from "../../assets/mongodb.png";
import express from "../../assets/express.png";
import { Tilt } from "react-tilt";


const Backend = () => {
    const tiltOptions = {
        max: 45,
        scale:1,
        speed:750
    };
return (
    <Tilt className="skills-content" options={tiltOptions}>
    <h3 className="skills-title">Backend & Database</h3>

    <div className="skills-box">
        <div className="skills-group">
            <div className="skills-data">
                <div>
                    <img src={node} alt="nodejs" className="skills-img" />
                    <h3 className="skills-name">Node.js</h3>
                </div>
            </div>

            <div className="skills-data">
                <div>
                    <img src={express} alt="express" className="skills-img" />
                    <h3 className="skills-name">Express.js</h3>
                </div>
            </div>

            <div className="skills-data">
                <div>
                    <img src={java} alt="java" className="skills-img" />
                    <h3 className="skills-name">Java</h3>
                </div>
            </div>
        </div>

        <div className="skills-group">
            <div className="skills-data">
                <div>
                    <img src={mongodb} alt="mongodb" className="skills-img" />
                    <h3 className="skills-name">MongoDB</h3>
                </div>
            </div>

            <div className="skills-data">
                <div>
                    <img src={mysql} alt="mysql" className="skills-img" />
                    <h3 className="skills-name">MySQL</h3>
                </div>
            </div>

            <div className="skills-data">
                <div>
                    <img src={firebase} alt="firebase" className="skills-img" />
                    <h3 className="skills-name">Firebase</h3>
                </div>
            </div>
        </div>
    </div>
</Tilt>
)
}

export default Backend