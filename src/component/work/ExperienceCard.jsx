import React from 'react';
import { motion } from 'framer-motion';
import './ExperienceCard.css';
import bluestockLogo from '../../assets/bluestock.png';
import iitPatnaLogo from '../../assets/iit-patna.png';

const ExperienceCard = () => {
  return (
    <div className="experience-timeline">
      {/* BlueStock Experience */}
      <motion.div 
        className="experience-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="experience-content">
          <h2>
            <img src={bluestockLogo} alt="BlueStock" className="company-logo" />
            BlueStock - SDE Intern
          </h2>
          <div className="experience-duration">April 2025 - May 2025 (Remote)</div>
          <ul>
            <li>Led a 10-member team to develop a Full-Stack IPO Web Application using Node.js, Express, MongoDB, React, JWT, and CSS, featuring 30+ API endpoints, listing game, ranking, and real-time notifications</li>
            <li>Designed and guided the secure RESTful APIs with JWT authentication, Mongoose models, and Multer + AWS S3 integration</li>
            <li>Streamlined development workflows in an Agile environment, using GitHub for version control and Postman for API testing, improving feature delivery speed by 25%, and increasing admin dashboard and database efficiency</li>
          </ul>
        </div>
        <motion.a
          href="https://drive.google.com/file/d/1i5V26P-AaUCpM1uy1k_5lyh-NMGV7Bli/view"
          target="_blank"
          rel="noreferrer"
          className="experience-role"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.1 }}
        >
          View Certificate
        </motion.a>
      </motion.div>

      {/* IT Paisa Experience */}
      <motion.div 
        className="experience-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="experience-content">
          <h2>
            <img src={iitPatnaLogo} alt="IIT Patna" className="company-logo" />
            IIT Patna - Winter Engineering Intern
          </h2>
          <div className="experience-duration">October 2023 - January 2024 (Patna)</div>
          <ul>
            <li>Contributed to the Flood Area Segmentation project involving an Attention-Gate & Recurrent-Residual
CNN-based U-Net model, by curating and labeling over 100+ satellite images to build a precise and
structured dataset.</li>
            <li>Tagged and annotated 100+ satellite images using Label Studio, creating a well-structured, high-quality dataset for
model training and validation that boosted segmentation accuracy by 15%.</li>
            <li>Utilized Anaconda for environment setup and dependency management, reducing setup time by 40% and
ensuring consistent deep-learning framework configuration.</li>
          </ul>
        </div>
        <motion.a
          href="https://drive.google.com/file/d/1itHD-oPJIyElvlzjzt2hrQ-W5Jy56Oum/view"
          target="_blank"
          rel="noreferrer"
          className="experience-role"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.1 }}
        >
          View Certificate
        </motion.a>
      </motion.div>
    </div>
  );
};

export default ExperienceCard;
