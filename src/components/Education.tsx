import React from 'react';

const educationData = [
  {
    title: 'Programación Web Inicial',
    institution: 'Universidad Tecnológica Nacional',
    year: '2022',
    description: 'Fundamentos de desarrollo web, HTML, CSS y JavaScript. Creación de páginas web estáticas y dinámicas.',
  },
  {
    title: 'Curso de JavaScript',
    institution: 'Coderhouse',
    year: '2023',
    description: 'Lógica de programación, manipulación del DOM y uso de APIs.',
  },
  {
    title: 'Curso de React JS',
    institution: 'Coderhouse',
    year: '2023',
    description: 'Ciclo de vida de componentes, hooks y manejo de estados en React.',
  },
  {
    title: 'Curso de Programación Backend',
    institution: 'Coderhouse',
    year: 'Julio 2023 - Enero 2024',
    description: 'Node.js, Express, bases de datos y creación de APIs RESTful.',
  },
  {
    title: 'Diseño UX/UI',
    institution: 'Coderhouse',
    year: 'Marzo 2024 - Junio 2024',
    description: 'Principios de diseño centrado en el usuario, wireframes y prototipos en Figma.',
  },
  {
    title: 'Desarrollo de Aplicaciones',
    institution: 'Coderhouse',
    year: 'Marzo 2024 - Mayo 2024',
    description: 'Desarrollo de aplicaciones móviles con React Native.',
  },
  {
    title: 'SQL',
    institution: 'Coderhouse',
    year: 'Agosto 2024 - Noviembre 2024',
    description: 'Manejo de bases de datos relacionales y consultas avanzadas en MySQL.',
  },
];

const Education = () => {
  return (
    <section className="py-12 px-4 md:px-12 text-white" id='education'>
      <h2 className="text-4xl font-semibold mb-8 text-center text-orange-500">Educación</h2>
      <div className="space-y-8">
        {educationData.map((item, index) => (
          <div key={index} className="border border-gray-700 p-4 rounded-lg">
            <h3 className="text-2xl font-semibold mb-1">{item.title}</h3>
            <p className="text-lg font-medium mb-1">{item.institution}</p>
            <p className="text-sm mb-4">{item.year}</p>
            <p className="text-base">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
