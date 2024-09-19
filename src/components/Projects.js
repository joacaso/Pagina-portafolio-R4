import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  { name: 'Proyecto 1', description: 'Proyecto sobre pagina de autos' },
  { name: 'Proyecto 2', description: 'Proyecto de lista-tareas' },
];

const Projects = () => {
  return (
    <motion.section 
      id="projects"
      initial={{ y: '100vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <h2>Proyectos</h2>
      <div className="projects-container">
        {projects.map(project => (
          <div key={project.name} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
