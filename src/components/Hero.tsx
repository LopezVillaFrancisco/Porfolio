import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 text-white px-4 md:px-12 w-full ">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500">Frontend Developer</h1>
        <p className="text-left md:text-lg">
          Soy un desarrollador Frontend especializado en React y Next.js. Disfruto de crear interfaces modernas y eficientes que ofrezcan experiencias fluidas. Busco proyectos desafiantes donde pueda aplicar mis habilidades para resolver problemas de forma innovadora.
        </p>
      </div>
    </section>
  );
}

export default Hero;
