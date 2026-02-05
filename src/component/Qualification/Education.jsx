import React from "react";
import "./education.css";
import {motion} from "framer-motion";
import nitAgartala from "../../assets/nit-agartala.png";
import tulsiVidyaNiketan from "../../assets/tulsi-vidya-niketan.png";

function Education() {
  return (
    <motion.section
    variants={{
        hidden : {opacity:0,y:60},
        visible : {opacity:1,y:0}
    }}
    initial="hidden"
    animate="visible"
    transition={{duration:1}}
    className="education section" id="qualification">
        <h2 className="section-title">Qualification</h2>
        <span className="section-subtitle">My journey</span>

        <div className="education-container container">
            <div className="education-tabs">
                <div className="education-button button-flex">
                    <i className="uil uil-graduation-cap education-active education-icon"></i>{" "}Education
                </div>
            </div>

            <div className="education-sections">
                <div className="education-content">
                    {/* Bachelors in Technology */}
                    <div className="education-data">
                        <div>
                            <span className="education-rounder"></span>
                            <span className="education-line"></span>
                        </div>
                        <div className="education-content-wrapper">
                            <img src={nitAgartala} alt="NIT Agartala" className="education-logo" />
                            <div className="education-info">
                                <h3 className="education-title">B.Tech in Electrical Engineering</h3>
                                <span className="education-subtitle">National Institute of Technology Agartala</span>
                                <div className="education-calender">
                                    <i className="uil uil-calendar-alt"></i>2022-2026
                                </div>
                                <div className="education-grade">CGPA: 7.53/10</div>
                            </div>
                        </div>
                    </div>

                    {/* 12th */}
                    <div className="education-data">
                        <div>
                            <span className="education-rounder"></span>
                            <span className="education-line"></span>
                        </div>

                        <div className="education-content-wrapper">
                            <img src={tulsiVidyaNiketan} alt="Tulsi Vidya Niketan" className="education-logo" />
                            <div className="education-info">
                                <h3 className="education-title">CBSE Class XII</h3>
                                <span className="education-subtitle">Tulsi Vidya Niketan, Varanasi</span>
                                <div className="education-calender">
                                    <i className="uil uil-calendar-alt"></i>2022
                                </div>
                                <div className="education-grade">Percentage: 91.8%</div>
                            </div>
                        </div>
                    </div>

                    {/* 10th */}
                    <div className="education-data">
                        <div>
                            <span className="education-rounder"></span>
                            {/* <span className="education-line"></span> */}
                        </div>

                        <div className="education-content-wrapper">
                            <img src={tulsiVidyaNiketan} alt="Tulsi Vidya Niketan" className="education-logo" />
                            <div className="education-info">
                                <h3 className="education-title">CBSE Class X</h3>
                                <span className="education-subtitle">Tulsi Vidya Niketan, Varanasi</span>
                                <div className="education-calender">
                                    <i className="uil uil-calendar-alt"></i>2020
                                </div>
                                <div className="education-grade">Percentage: 93.2%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </motion.section>
  );
}

export default Education;
