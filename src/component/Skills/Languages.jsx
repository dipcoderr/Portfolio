import React from 'react';
import { Tilt } from "react-tilt";

const Languages = () => {
    const tiltOptions = {
        max: 45,
        scale: 1,
        speed: 750
    };

    return (
        <Tilt className="skills-content" options={tiltOptions}>
            <h3 className="skills-title">Languages & CS Fundamentals</h3>

            <div className="skills-box">
                <div className="skills-group">
                    <div className="skills-data">
                        <div>
                            <i className="bx bx-code-alt skills-icon cpp"></i>
                            <h3 className="skills-name">C++</h3>
                        </div>
                    </div>

                    <div className="skills-data">
                        <div>
                            <i className="bx bx-cube-alt skills-icon oop"></i>
                            <h3 className="skills-name">OOPs</h3>
                        </div>
                    </div>

                    <div className="skills-data">
                        <div>
                            <i className="bx bx-desktop skills-icon os"></i>
                            <h3 className="skills-name">Operating Systems</h3>
                        </div>
                    </div>
                </div>

                <div className="skills-group">
                    <div className="skills-data">
                        <div>
                            <i className="bx bx-data skills-icon dbms"></i>
                            <h3 className="skills-name">DBMS</h3>
                        </div>
                    </div>

                    <div className="skills-data">
                        <div>
                            <i className="bx bxl-python skills-icon python"></i>
                            <h3 className="skills-name">Python</h3>
                        </div>
                    </div>

                    <div className="skills-data">
                        <div>
                            <i className="bx bx-network-chart skills-icon ds"></i>
                            <h3 className="skills-name">Data Structures</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Tilt>
    );
};

export default Languages;