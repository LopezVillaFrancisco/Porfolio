import ContactForm from '@/components/ContactForm';
import Education from '@/components/Education';
import Experiencia from '@/components/Experience';
import Hero from '@/components/Hero';
import Particles from '@/components/Particles';
import Proyectos from '@/components/Proyectos'; 
import Skills from '@/components/Skills';
import React from 'react';

const page = () => {
  return (
    <main className="relative">
      <div className="flex flex-col min-h-screen  bg-no-repeat bg-gradient-cover ">
        <Particles />
        <div className='bg-black/30'>
          <Hero />
          <Experiencia />
          <Proyectos/> 
          <Skills/> 
          <Education/> 
          <ContactForm/> 
        </div>
      </div>
    </main>
  );
}

export default page;
