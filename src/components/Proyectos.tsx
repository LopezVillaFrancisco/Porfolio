import React from 'react';
import Proyecto from './Proyecto'; 
import AllxSkills from '../../public/AllxSkills.jpg';
import SolarPanel from '../../public/SolarPanelPro.jpg';
import RealEstate from '../../public/RealEstate.jpg';

const proyectosData = [
  {
    id: 1,
    imagen: AllxSkills, 
    descripcion: 'Proyecto freelance en el cual se utilizó React y CSS para seguir las guías de un diseño de Figma.',
    tecnologias: ['React', 'CSS'],
    enlaceWeb: 'https://allxskills.netlify.app/',
    enlaceGithub: 'https://github.com/LopezVillaFrancisco/AllxSkills',
  },
  {
    id: 2,
    imagen: SolarPanel, 
    descripcion: 'Página web para una empresa de paneles solares desarrollada con React y Tailwind CSS.',
    tecnologias: ['React', 'Tailwind CSS'],
    enlaceWeb: 'https://solarpanelpage.netlify.app/',
    enlaceGithub: 'https://github.com/LopezVillaFrancisco/SolarPanel',
  },
  {
    id: 3,
    imagen: RealEstate, 
    descripcion: 'Página web para una empresa de bienes raíces desarrollada con React y Tailwind CSS.',
    tecnologias: ['React', 'Tailwind CSS'],
    enlaceWeb: 'https://franciscolopezvillarealestate.netlify.app/',
    enlaceGithub: 'https://github.com/LopezVillaFrancisco/Real-Estate-Page',
  },
];

const Proyectos = () => {
  return (
    <section className="py-12 px-4 md:px-12 text-white" id='projects'>
      <h2 className="text-4xl font-semibold mb-8 text-center text-orange-500">Proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {proyectosData.map((proyecto) => (
          <Proyecto
            key={proyecto.id}
            imagen={proyecto.imagen}
            descripcion={proyecto.descripcion}
            tecnologias={proyecto.tecnologias}
            enlaceWeb={proyecto.enlaceWeb}
            enlaceGithub={proyecto.enlaceGithub}
          />
        ))}
      </div>
    </section>
  );
}

export default Proyectos;
