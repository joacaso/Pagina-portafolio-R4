import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <motion.section 
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Hola, soy Joaquin</h1>
      <p>Soy un desarrollador web con experiencia en Frontend.</p>
    </motion.section>
  );
};

export default About;
