import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface ExperienciaProps {
  isEnglish: boolean;
}

const Experiencia: React.FC<ExperienciaProps> = ({ isEnglish }) => {
  return (
    <section className="text-white py-12 px-4 md:px-12" id='experiencia'>
      <h1 className="text-4xl font-semibold mb-8 text-center text-cyan-500">
        {isEnglish ? 'Experience' : 'Experiencia'}
      </h1>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-2">
            {isEnglish ? 'Freelance Project' : 'Proyecto Freelance'}
          </h2>
          <p className="text-lg mb-4">
            {isEnglish ? 'Freelance web development work with various technologies.' : 'Trabajo en desarrollo web freelance con diversas tecnologías.'}
          </p>
          <a 
            href="https://allxskills.netlify.app/"
            className="text-blue-500 hover:underline flex items-center justify-center md:justify-start gap-1" 
            target='_blank'
          >
            {isEnglish ? 'View project' : 'Ver proyecto'} <FaExternalLinkAlt size={16} />
          </a>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-2">
            {isEnglish ? 'Next JS Junior Developer at DPS Advertising Software Solutions' : 'Next JS Junior Developer en DPS Advertising Software Solutions'}
          </h2>
          <p className="text-lg mb-4">
            {isEnglish ? 'March 2024 - September 2024' : 'Marzo 2024 - Septiembre 2024'}
          </p>
          <p className="text-lg">
            {isEnglish 
              ? 'Contract-based role for a specific project as a Junior Developer in Next JS, working on creating modern web applications. Using technologies like React, Next JS, and Tailwind CSS.' 
              : 'Contratación por proyecto como Desarrollador Junior en Next JS, trabajando en la creación de aplicaciones web modernas. Utilización de tecnologías como React, Next JS y Tailwind CSS.'}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experiencia;
