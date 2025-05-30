import React from "react";
import emsImage from "../assets/pg_ss.png";
import portfolioImage from "../assets/port_ss.png";
import voterz from "../assets/voterz.png";

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    technologies: "ReactJS, Tailwind CSS",
    image: portfolioImage,
    github: "https://github.com/RiddhiDeogade/Portfolio_new",
  },
  {
    id: 2,
    name: "Expense Management System",
    technologies: "React, MySQL, Spring Boot",
    image: emsImage,
    github: "https://github.com/RiddhiDeogade/Piggy-Bank",
  },
  {
    id: 3,
    name: "PetrolPartner",
    technologies: "React, Tailwind CSS",
    image: voterz,
    github:"" ,
  },
  {
    id: 4,
    name: "Voterz",
    technologies: "Spring Boot, Thymleaf",
    image: voterz,
    github: "https://github.com/RiddhiDeogade/voterz",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-5 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
