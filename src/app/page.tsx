'use client'
import React, { useState } from 'react';
import ContactForm from '@/components/ContactForm';
import Education from '@/components/Education';
import Experiencia from '@/components/Experience';
import Hero from '@/components/Hero';
import Particles from '@/components/Particles';
import Proyectos from '@/components/Proyectos'; 
import Skills from '@/components/Skills';
import Header from '@/components/Header'; 

const Page: React.FC = () => {
  const [isEnglish, setIsEnglish] = useState<boolean>(false);

  const handleLanguageChange = (newLanguage: boolean) => {
    setIsEnglish(newLanguage);
  };

  return (
    <main className="relative">
      <div className="flex flex-col min-h-screen bg-no-repeat bg-gradient-cover">
        <Particles />
        <div className='bg-black/30'>
          <Header onLanguageChange={handleLanguageChange} />
          <Hero isEnglish={isEnglish} />
          <Experiencia isEnglish={isEnglish} />
          <Proyectos isEnglish={isEnglish} /> 
          <Skills isEnglish={isEnglish} /> 
          <Education isEnglish={isEnglish} /> 
          <ContactForm isEnglish={isEnglish} /> 
        </div>
      </div>
    </main>
  );
}

export default Page;
