import React from 'react';

const educationData = [
  {
    title: { es: 'Programación Web Inicial', en: 'Intro to Web Programming' },
    institution: 'Universidad Tecnológica Nacional',
    year: '2022',
    description: {
      es: 'Fundamentos de desarrollo web, HTML, CSS y JavaScript. Creación de páginas web estáticas y dinámicas.',
      en: 'Fundamentals of web development, HTML, CSS, and JavaScript. Creation of static and dynamic web pages.',
    },
  },
  {
    title: { es: 'Curso de JavaScript', en: 'JavaScript Course' },
    institution: 'Coderhouse',
    year: '2023',
    description: {
      es: 'Lógica de programación, manipulación del DOM y uso de APIs.',
      en: 'Programming logic, DOM manipulation, and API usage.',
    },
  },
  {
    title: { es: 'Curso de React JS', en: 'React JS Course' },
    institution: 'Coderhouse',
    year: '2023',
    description: {
      es: 'Ciclo de vida de componentes, hooks y manejo de estados en React.',
      en: 'Component lifecycle, hooks, and state management in React.',
    },
  },
  {
    title: { es: 'Curso de Programación Backend', en: 'Backend Programming Course' },
    institution: 'Coderhouse',
    year: 'Julio 2023 - Enero 2024',
    description: {
      es: 'Node.js, Express, bases de datos y creación de APIs RESTful.',
      en: 'Node.js, Express, databases, and creating RESTful APIs.',
    },
  },
  {
    title: { es: 'Diseño UX/UI', en: 'UX/UI Design' },
    institution: 'Coderhouse',
    year: 'Marzo 2024 - Junio 2024',
    description: {
      es: 'Principios de diseño centrado en el usuario, wireframes y prototipos en Figma.',
      en: 'User-centered design principles, wireframing, and prototyping in Figma.',
    },
  },
  {
    title: { es: 'Desarrollo de Aplicaciones', en: 'Application Development' },
    institution: 'Coderhouse',
    year: 'Marzo 2024 - Mayo 2024',
    description: {
      es: 'Desarrollo de aplicaciones móviles con React Native.',
      en: 'Mobile application development with React Native.',
    },
  },
  {
    title: { es: 'SQL', en: 'SQL' },
    institution: 'Coderhouse',
    year: 'Agosto 2024 - Noviembre 2024',
    description: {
      es: 'Manejo de bases de datos relacionales y consultas avanzadas en MySQL.',
      en: 'Managing relational databases and advanced queries in MySQL.',
    },
  },
];

interface EducationProps {
  isEnglish: boolean;
}

const Education: React.FC<EducationProps> = ({ isEnglish }) => {
  return (
    <section className="py-12 px-4 md:px-12 text-white" id='education'>
      <h2 className="text-4xl font-semibold mb-8 text-center text-orange-500">
        {isEnglish ? 'Education' : 'Educación'}
      </h2>
      <div className="space-y-8">
        {educationData.map((item, index) => (
          <div key={index} className="border border-gray-700 p-4 rounded-lg">
            <h3 className="text-2xl font-semibold mb-1">{isEnglish ? item.title.en : item.title.es}</h3>
            <p className="text-lg font-medium mb-1">{item.institution}</p>
            <p className="text-sm mb-4">{item.year}</p>
            <p className="text-base">{isEnglish ? item.description.en : item.description.es}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
