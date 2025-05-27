import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

interface HeroProps {
  isEnglish: boolean;
}

const Hero: React.FC<HeroProps> = ({ isEnglish }) => {
  return (
    <section className="flex flex-col items-center justify-center py-8 text-white px-4 md:px-12 w-full" id='home'>
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-500">
          {isEnglish ? 'Frontend Developer' : 'Desarrollador Frontend'}
        </h1>
        <p className="text-left md:text-lg">
          {isEnglish 
            ? 'I am a Frontend Developer specializing in React and Next.js. I enjoy creating modern and efficient interfaces that provide smooth experiences. I seek challenging projects where I can apply my skills to solve problems innovatively.' 
            : 'Soy un desarrollador Frontend especializado en React y Next.js. Disfruto de crear interfaces modernas y eficientes que ofrezcan experiencias fluidas. Busco proyectos desafiantes donde pueda aplicar mis habilidades para resolver problemas de forma innovadora.'}
        </p> 
        <div className='flex mt-4 gap-4'>
          <Link href={'https://www.linkedin.com/in/francisco-lopez-villa-91b317260/'} className='flex gap-1 flex-row border p-1 bg-[#0A66C2] px-2 rounded-xl' target='_blank'>
            <CiLinkedin size={26} color=''/> 
            <span>Linkedin</span>
          </Link> 
          <Link href={'https://github.com/LopezVillaFrancisco'} className='flex gap-1 flex-row border p-1 bg-[#6C757D] px-2 rounded-xl' target='_blank'>
            <FaGithub size={26} color=''/> 
            <span>Github</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
