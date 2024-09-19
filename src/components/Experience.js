import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience">
      <motion.h2 whileHover={{ scale: 1.1 }}>Experiencia</motion.h2>
      <ul>
        <li>Empresa X - Desarrollador (2022 - Presente)</li>
        <li>Empresa Y - Asistente Técnico (2021 - 2022)</li>
      </ul>
    </section>
  );
};

export default Experience;
