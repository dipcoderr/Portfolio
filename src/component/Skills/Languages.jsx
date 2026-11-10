import { Tilt } from "react-tilt";
import python from "../../assets/python.png";
import cpp from "../../assets/c++.jpg";
import dbms from "../../assets/dbms.png";
import computerNetworks from "../../assets/computer-network.jpg";
import os from "../../assets/operating system.png";

const Languages = () => {
    const tiltOptions = { max: 45, scale: 1, speed: 750 };

    return (
        <Tilt className="skills-content languages-skills" options={tiltOptions}>
            <h3 className="skills-title">Languages & CS Fundamentals</h3>

            <div className="skills-box">
                <div className="skills-group">
                    <div className="skills-data">
                        <div>
                            <img src={cpp} alt="C++" className="skills-img" />
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
                            <img src={dbms} alt="DBMS" className="skills-img" />
                            <h3 className="skills-name">DBMS</h3>
                        </div>
                    </div>

                    <div className="skills-data">
                        <div>
                            <img src={computerNetworks} alt="Computer Networks" className="skills-img" />
                            <h3 className="skills-name">CN</h3>
                        </div>
                    </div>
                </div>

                <div className="skills-group">
                    <div className="skills-data">
                        <div>
                            <img src={python} alt="Python" className="skills-img" />
                            <h3 className="skills-name">Python</h3>
                        </div>
                    </div>

                    <div className="skills-data">
                        <div>
                            <i className="bx bx-network-chart skills-icon ds"></i>
                            <h3 className="skills-name">DSA</h3>
                        </div>
                    </div>

                    <div className="skills-data">
                        <div>
                            <i className="bx bx-sitemap skills-icon system-design"></i>
                            <h3 className="skills-name">System Design</h3>
                        </div>
                    </div>

                    <div className="skills-data">
                        <div>
                            <img src={os} alt="Operating System" className="skills-img" />
                            <h3 className="skills-name">OS</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Tilt>
    );
};

export default Languages;
