import { motion } from "framer-motion";
import "../About/about.css";
import resume from "../../assets/dipanshu_mishra_resume.pdf";

export default function About() {
  return (
    <motion.section
      variants={{
        hidden: { opacity: 0, x: -175 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, delay: 0.5 }}
      className="about section"
      id="about"
    >
      <h2 className="section-title">About Me</h2>
      <span className="section-subtitle">My Introduction</span>

      <div className="about-container container grid">
        <div className="about-data">
          <p className="about-description">
            <strong>AI Engineer, Full-Stack Developer &amp; Forward Deployed Engineer</strong> — I am Dipanshu
            Kumar Mishra from Varanasi. B.Tech in Electrical Engineering from NIT Agartala (2022–2026, CGPA: 7.57/10).
            I architect agentic AI systems using LangChain, LangGraph, RAG, and Ollama, and ship full-stack
            products with React, Node.js, Express, and MongoDB — bridging cutting-edge AI with production-ready deployment.
          </p>
          <p className="about-description">
            <strong>Engineering Experience</strong> — As an SDE Intern at BlueStock, I led a 10-member
            team to build a full-stack IPO platform with 30+ IPO listings, live CMP updates, listing gains
            tracking, and RHP/DRHP PDF access. Designed 10+ secure RESTful APIs with JWT, Mongoose, and
            Multer + AWS S3 handling 100+ company assets. At IIT Patna, I orchestrated an end-to-end
            Computer Vision pipeline using PyTorch and an Attention-Gated Residual U-Net (R2U-Net),
            achieving 15% higher Mean IoU and cutting training latency by 40%.
          </p>
          <p className="about-description">
            <strong>AI Projects &amp; Problem Solving</strong> — Built Aria, a full-stack agentic AI
            assistant using LangGraph &amp; LangChain orchestrating 5+ tools (web search, arithmetic,
            multimodal parsing across PDF, DOCX, CSV, TXT) with PostgreSQL persistent memory on Supabase,
            speech-to-text, audio synthesis, and a 5MB file pipeline hosted on Render. Solved 1,000+
            LeetCode problems (max rating 1807) and 3-star on CodeChef (max rating 1611).
          </p>

          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500 }}
            href={resume}
            download=""
            className="button button-flex"
            target="_blank"
          >
            Download Resume
            <svg
              className="button__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                fill="var(--container-color)"
              ></path>
              <path
                d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                fill="var(--container-color)"
              ></path>
              <path
                d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                fill="var(--container-color)"
              ></path>
              <path
                d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                fill="var(--container-color)"
              ></path>
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
