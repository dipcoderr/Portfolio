import redgold from "./assets/redgold.png"
import slcs from "./assets/slcs.png"
import aria from "./assets/aria.png"

export const projects = [
    {
        id:0,
        name:"Aria – AI Assistant",
        image:aria,
        description: "Autonomous browser-based AI assistant with persistent memory and multimodal tool orchestration. Architected using LangGraph, LangChain, and Flask, orchestrating 5+ tools for web search, arithmetic, and multimodal parsing across 4 file formats (PDF, DOCX, CSV, TXT) via Ollama Cloud API. Encoded stateful conversation persistence using PostgreSQL checkpoints on Supabase, integrating speech-to-text, audio synthesis, and a 5MB file pipeline hosted with Gunicorn on Render.",
        gradient:["#142D46", "#2E4964"],
        GithubURL:"https://github.com/dipcoderr/aria-assistant",
        LiveURL:"#",
        tech:["python","flask","langchain","langgraph","postgresql","supabase"]
    },
    {
        id:1,
        name:"Redgold",
        image:redgold,
        description: "Full-Stack Blood Bank Management Web Application using MERN stack (MongoDB, Express, React, Node.js), supporting secure user authentication, blood inventory tracking, and appointment booking for 100+ simulated users. Engineered 10+ RESTful APIs with JWT-based authentication, bcrypt encryption, and role-based access (User/Admin), achieving 100% API reliability. Built responsive React frontend with React Router and Context API, enabling real-time synchronization.",
        gradient:["#142D46", "#2E4964"],
        GithubURL:"https://github.com/dipcoderr/redgold",
        LiveURL:"https://github.com/dipcoderr/redgold",
        tech:["react","node.js","express","mongodb","jwt"]
    },
    {
        id:2,
        name:"SLCS",
        image:slcs,
        description: "Role-based civic complaint management platform using Node.js, Express.js, MongoDB, and Mongoose. Developed a MERN-stack complaint lifecycle platform supporting secure authentication and real-time status tracking for 100+ simulated users. Pioneered 10+ RESTful APIs featuring JWT authentication, bcrypt hashing, role-based access control (RBAC), and multipart uploads with Multer and MongoDB. Deployed on Render.",
        gradient:["#142D46", "#2E4964"],
        GithubURL:"https://github.com/dipcoderr/SLCS_codebase",
        LiveURL:"https://street-light-complaint-system-o7do.onrender.com",
        tech:["node.js","express","mongodb","jwt","multer","cloudinary"]
    },
]
