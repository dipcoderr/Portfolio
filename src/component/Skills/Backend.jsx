import node from "../../assets/node.png"
import express from "../../assets/express.png"
import mongodb from "../../assets/mongodb.png"
import mysql from "../../assets/mysql.png"
import postgresql from "../../assets/postgresql.jpg"
import flask from "../../assets/flask.webp"
import fastapi from "../../assets/fastapi.png"
import { Tilt } from "react-tilt";

const Backend = () => {
    const tiltOptions = { max: 45, scale: 1, speed: 750 };

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
                            <img src={flask} alt="flask" className="skills-img skills-img-flask" />
                            <h3 className="skills-name">Flask</h3>
                        </div>
                    </div>
                    <div className="skills-data">
                        <div>
                            <img src={fastapi} alt="fastapi" className="skills-img skills-img-fastapi" />
                            <h3 className="skills-name">FastAPI</h3>
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
                            <img src={postgresql} alt="postgresql" className="skills-img skills-img-postgresql" />
                            <h3 className="skills-name">PostgreSQL</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Tilt>
    );
};

export default Backend;
