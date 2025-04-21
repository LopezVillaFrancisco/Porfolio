import React from 'react';

const groupedEducationData = [
  {
    institution: 'Universidad Argentina de la Empresa (UADE)',
    year: '2025 - 2028',
    courses: [
      {
        title: { es: 'Tecnicatura en Desarrollo de Software', en: 'Software Development Associate Degree' },
        description: { es: '', en: '' },
      },
    ],
    isMain: true,
  },
  {
    institution: 'Coderhouse',
    year: '2023 - 2024',
    courses: [
      {
        title: { es: 'JavaScript', en: 'JavaScript' },
        description: {
          es: 'DOM, lógica y APIs.',
          en: 'DOM, logic, and APIs.',
        },
      },
      {
        title: { es: 'React JS', en: 'React JS' },
        description: {
          es: 'Hooks, estado y ciclo de vida.',
          en: 'Hooks, state, and lifecycle.',
        },
      },
      {
        title: { es: 'Backend', en: 'Backend' },
        description: {
          es: 'Node.js, Express y APIs REST.',
          en: 'Node.js, Express, and REST APIs.',
        },
      },
      {
        title: { es: 'UX/UI', en: 'UX/UI' },
        description: {
          es: 'Diseño centrado en el usuario y Figma.',
          en: 'User-centered design and Figma.',
        },
      },
      {
        title: { es: 'Aplicaciones móviles', en: 'Mobile Apps' },
        description: {
          es: 'React Native.',
          en: 'React Native.',
        },
      },
      {
        title: { es: 'SQL', en: 'SQL' },
        description: {
          es: 'Consultas en MySQL.',
          en: 'MySQL queries.',
        },
      },
    ],
  },
  {
    institution: 'Universidad Tecnológica Nacional',
    year: '2022',
    courses: [
      {
        title: { es: 'Programación Web Inicial', en: 'Intro to Web Programming' },
        description: {
          es: 'Fundamentos de desarrollo web, HTML, CSS y JavaScript.',
          en: 'Fundamentals of web development, HTML, CSS, and JavaScript.',
        },
      },
    ],
  },
];

interface EducationProps {
  isEnglish: boolean;
}

const Education: React.FC<EducationProps> = ({ isEnglish }) => {
  return (
    <section className="py-10 px-4 md:px-12 text-white" id="education">
      <h2 className="text-3xl font-semibold mb-6 text-center text-orange-500">
        {isEnglish ? 'Education' : 'Educación'}
      </h2>
      <div className="space-y-6">
        {groupedEducationData.map((group, index) => (
          <div
            key={index}
            className="border border-gray-700 p-4 rounded-md"
          >
            <div
              className={`mb-1 ${group.isMain ? 'text-2xl font-bold' : 'text-sm font-semibold text-gray-300'}`}
            >
              {group.institution}
            </div>
            <div className={`${group.isMain ? 'text-sm text-gray-300' : 'text-xs text-gray-400'} mb-3`}>
              {group.year}
            </div>
            <div className={`grid grid-cols-1 ${group.isMain ? 'text-base' : 'md:grid-cols-2 gap-y-2 text-xs text-gray-300'}`}>
              {group.courses.map((course, idx) => (
                <div key={idx}>
                  <strong>{isEnglish ? course.title.en : course.title.es}</strong>
                  {course.description.es && (
                    <>
                      {' – '}
                      <span>
                        {isEnglish ? course.description.en : course.description.es}
                      </span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
