import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  laravel, // <-- Correctly imported
  // Your project images
  ocp,
  nitrogym,
  inventoryapp,
  ecomstore,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "3D Web Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Digital Development Intern",
    company_name: "OCP Group",
    icon: laravel, // <-- Correct icon
    iconBg: "#383E56",
    date: "April 1, 2025 - April 30, 2025",
    points: [
      "Developed a machine management application as part of a team.",
      "Designed and implemented the back-end with Laravel.",
      "Created the user interface with React.js.",
      "Performed front-end / back-end integration and functional testing.",
    ],
  },
  {
    title: "Web Developer (Academic)",
    company_name: "Inventory Management App",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "November 1, 2024 - March 1, 2025",
    points: [
      "Designed the user interface for a web-based inventory app using Figma.",
      "Developed the frontend application using React.js and Tailwind CSS.",
      "Contributed to the backend development with Express.js in collaboration with the team.",
    ],
  },
  {
    title: "Full Stack Developer (Academic Project)",
    company_name: "E-commerce Store (ISTA)",
    icon: mongodb,
    iconBg: "#383E56",
    date: "October 1, 2024 - November 30, 2024",
    points: [
      "Designed and developed a complete e-commerce store for gym supplements.",
      "Created a backend RESTful API with Express.js to manage users, orders, and business logic.",
      "Developed the client interface and a dedicated admin dashboard with React.js.",
      "Integrated MongoDB for storing products, inventory, and user accounts.",
    ],
  },
  {
    title: "Full Stack Developer (Client Project)",
    company_name: "NITRO GYM",
    icon: tailwind,
    iconBg: "#E6DEDD",
    date: "August 2025 - October 2025",
    points: [
      "Developed a complete web application for 'NITRO GYM' using React, Vite, and Firebase.",
      "Built a secure admin panel for the gym owner to track and manage members.",
      "Implemented Firebase Authentication for both admin and member login systems.",
      "Used Firestore to store and manage all user data and membership information.",
      "Deployed the final application using Firebase Hosting for fast and secure global content delivery.",
    ],
  },
];

const projects = [
  {
    name: "Machine Management App (OCP Group)",
    description:
      "A machine management application developed during my internship at OCP Group. This team project involved building a Laravel backend, a React.js frontend, and performing full integration testing.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: ocp,
    source_code_link: "https://github.com/Salaheddinelahdar/OCP-FINAL-VERSION-V3.git",
  },
  {
    name: "NITRO GYM",
    description:
      "A complete web application for a client's gym, built with React and Firebase. Includes a secure admin panel for tracking and managing members, with authentication and data/media storage.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
    ],
    image: nitrogym,
    source_code_link: "https://github.com/",
  },
  {
    name: "Inventory Management App",
    description:
      "An academic web application for managing inventory. I designed the UI in Figma, built the responsive frontend with React and Tailwind, and contributed to the Express.js backend.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: inventoryapp,
    source_code_link: "https://github.com/Salaheddinelahdar/OFFPT-MANAGMENT-SALAH-user.git",
  },
  {
    name: "MERN E-commerce Store",
    description:
      "An academic full-stack e-commerce store for selling gym supplements. Features a RESTful API with Express, a React frontend, and a MongoDB database for users, products, and orders.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: ecomstore,
    source_code_link: "https://github.com/",
  },
];

// Removed 'testimonials' from the export
export { services, technologies, experiences, projects };