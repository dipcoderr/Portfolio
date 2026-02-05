import redgold from "./assets/redgold.png"
import slcs from "./assets/slcs.png"

export const projects = [
    {
        id:1,
        name:"Redgold",
        image:redgold,
        description: "Full-Stack Blood Bank Management Web Application using MERN stack (MongoDB, Express, React, Node.js), supporting secure user authentication, blood inventory tracking, and appointment booking for 100+ simulated users. Engineered 10+ RESTful APIs with JWT-based authentication, bcrypt encryption, and role-based access (User/Admin), achieving 100% API reliability. Built responsive React frontend with React Router and Context API, enabling real-time synchronization.",
        gradient:["#142D46", "#2E4964"],
        GithubURL:"https://github.com/dipcoderr/redgold",
        LiveURL:"#",
        tech:["react","node.js","express","mongodb","jwt"]
    },
    {
        id:2,
        name:"SLCS",
        image:slcs,
        description: "Role-based complaint management system using Node.js, Express.js, MongoDB, and Mongoose, enabling 100+ simulated users to register, authenticate via JWT, and submit civic complaints with real-time status tracking. Architected 10+ secure RESTful APIs with authentication, authorization middleware, and Admin/User role separation. Integrated image uploads via Multer and Cloudinary, optimized database schemas, and reduced manual complaint tracking by 40%.",
        gradient:["#142D46", "#2E4964"],
        GithubURL:"https://github.com/dipcoderr/slcs",
        LiveURL:"https://street-light-complaint-system-o7do.onrender.com",
        tech:["node.js","express","mongodb","jwt","multer","cloudinary"]
    },
]