import redgold from "./assets/redgold.png"
import slcs from "./assets/slcs.png"
import aria from "./assets/aria.png"

export const projects = [
    {
        id:0,
        name:"Aria – AI Assistant",
        image:aria,
        summary:"A multimodal AI assistant with persistent memory and agentic workflows, built with LangGraph, LangChain, Flask, and Ollama Cloud. Orchestrates 5+ tools for web search, arithmetic, and parsing PDF, DOCX, CSV, and TXT files.",
        gradient:["#142D46", "#2E4964"],
        GithubURL:"https://github.com/dipcoderr/aria-assistant",
        tech:["python","flask","langchain","langgraph","postgresql"]
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
        description: "Role-based complaint management system using Node.js, Express.js, MongoDB, and Mongoose, enabling 100+ simulated users to register, authenticate via JWT, and submit civic complaints with real-time status tracking. Architected 10+ secure RESTful APIs with authentication, authorization middleware, and Admin/User role separation. Integrated image uploads via Multer and Cloudinary, optimized database schemas, and reduced manual complaint tracking by 40%.",
        gradient:["#142D46", "#2E4964"],
        GithubURL:"https://github.com/dipcoderr/SLCS_codebase",
        LiveURL:"https://street-light-complaint-system-o7do.onrender.com",
        tech:["node.js","express","mongodb","jwt","multer","cloudinary"]
    },
]