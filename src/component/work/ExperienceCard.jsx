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
            BlueStock – SDE Intern
          </h2>
          <div className="experience-duration">Apr 2025 – May 2025 &nbsp;|&nbsp; Remote</div>
          <ul>
            <li>Led a 10-member team to build a full-stack IPO platform using Node.js, Express, MongoDB, React, and Tailwind CSS, featuring 30+ IPO listings, live CMP updates, listing gains tracking, and RHP/DRHP PDF access.</li>
            <li>Designed and implemented 10+ secure RESTful APIs with JWT authentication, Mongoose schemas, and Multer + AWS S3 integration to handle 100+ company assets.</li>
            <li>Streamlined Agile workflows using GitHub and Postman, accelerating feature delivery speed by 25% while managing admin dashboards and database structuring.</li>
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

      {/* IIT Patna Experience */}
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
            IIT Patna – Machine Learning Research Intern
          </h2>
          <div className="experience-duration">Oct 2023 – Jan 2024 &nbsp;|&nbsp; Patna, Bihar</div>
          <ul>
            <li>Orchestrated an end-to-end Computer Vision pipeline using PyTorch and an Attention-Gated Residual U-Net (R2U-Net), training on 1.2M+ parameters for flood-water semantic segmentation across 500+ multispectral patches.</li>
            <li>Curated and augmented 100+ high-resolution satellite rasters using Label Studio and OpenCV, boosting segmentation precision and achieving a 15% higher Mean IoU / Dice coefficient on test validation.</li>
            <li>Optimized data preprocessing loaders and environment runtime configurations via Anaconda and CUDA, reducing training pipeline latency by 40% across 50+ test iterations.</li>
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
