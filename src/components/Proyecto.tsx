import React from 'react';
import Image from 'next/image';
import { FaReact, FaCss3Alt } from 'react-icons/fa';
import { Github, Globe } from 'lucide-react';

const techIcons = {
  'React': <FaReact color="#61DAFB" size={26} />,
  'CSS': <FaCss3Alt color="#264DE4" size={26} />,
  'Tailwind CSS': <FaCss3Alt color="#264DE4" size={26} />,
};

//@ts-expect-error @ts-ignore
const Proyecto = ({ imagen, descripcion, tecnologias, enlaceWeb, enlaceGithub, isEnglish }) => {
  return (
    <div className="text-white rounded-lg overflow-hidden shadow-lg border">
      <div className="relative w-full h-48">
        <Image
          src={imagen}
          alt={isEnglish ? "Project image" : "Imagen del proyecto"}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4 border-t">
        <p className="mb-4">{descripcion}</p>
        <div className="flex flex-wrap gap-2 mb-4"> 
          {/*@ts-expect-error @ts-ignore*/}
          {tecnologias.map((tech, index) => (
            <span key={index} className="flex items-center gap-1 text-gray-300 px-2 py-1 rounded-full text-sm">
              {/*@ts-expect-error @ts-ignore*/}
              {techIcons[tech]} {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {enlaceWeb && (
            <a href={enlaceWeb} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-300 hover:text-blue-300">
              <Globe size={20} /> {isEnglish ? "View on Web" : "Ver en Web"}
            </a>
          )}
          {enlaceGithub && (
            <a href={enlaceGithub} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-300 hover:text-gray-300">
              <Github size={20} /> {isEnglish ? "View on Github" : "Ver en Github"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Proyecto;
