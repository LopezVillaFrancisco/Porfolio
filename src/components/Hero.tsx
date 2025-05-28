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
    ? 'Frontend developer with experience in React and Next.js, focused on building modern interfaces and solving real problems through practical and efficient solutions.'
    : 'Desarrollador frontend con experiencia en React y Next.js, enfocado en construir interfaces modernas y resolver problemas reales con soluciones prácticas y eficientes.'}
</p>
        <div className='flex mt-4 gap-4'>
          <Link href={'https://www.linkedin.com/in/francisco-lopez-villa-91b317260/'} className='flex gap-1 flex-row border p-1 bg-[#0A66C2] px-2 rounded-xl' target='_blank' rel="noopener noreferrer">
            <CiLinkedin size={26} color=''/> 
            <span>LinkedIn</span>
          </Link> 
          <Link href={'https://github.com/LopezVillaFrancisco'} className='flex gap-1 flex-row border p-1 bg-[#6C757D] px-2 rounded-xl' target='_blank' rel="noopener noreferrer">
            <FaGithub size={26} color=''/> 
            <span>GitHub</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
