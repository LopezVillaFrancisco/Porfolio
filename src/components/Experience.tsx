import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Experiencia = () => {
  return (
    <section className="text-white py-12 px-4 md:px-12" id='experiencia'>
      <h1 className="text-4xl font-semibold mb-8 text-center text-orange-500">Experiencia</h1>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-2">Proyecto Freelance</h2>
          <p className="text-lg mb-4">Trabajo en desarrollo web freelance con diversas tecnologías.</p>
          <a 
            href="#"
            className="text-blue-500 hover:underline flex items-center justify-center md:justify-start gap-1"
          >
            Ver proyecto <FaExternalLinkAlt size={16} />
          </a>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-2">Next JS Junior Developer en DPS Advertising Software Solutions</h2>
          <p className="text-lg mb-4">Marzo 2024 - Septiembre 2024</p>
          <p className="text-lg">
            Desarrollador Junior en Next JS trabajando en la creación de aplicaciones web modernas. Utilización de tecnologías como React, Next JS, y Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experiencia;
