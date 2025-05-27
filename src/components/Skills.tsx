import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

const skillsData = [
  { name: { es: 'HTML5', en: 'HTML5' }, icon: <FaHtml5 size={40} />, color: '#E34F26' },
  { name: { es: 'CSS3', en: 'CSS3' }, icon: <FaCss3Alt size={40} />, color: '#1572B6' },
  { name: { es: 'JavaScript', en: 'JavaScript' }, icon: <FaJs size={40} />, color: '#F7DF1E' },
  { name: { es: 'React', en: 'React' }, icon: <FaReact size={40} />, color: '#61DAFB' },
  { name: { es: 'Node JS', en: 'Node JS' }, icon: <FaNode size={40} />, color: '#47A248' },
  { name: { es: 'React Native', en: 'React Native' }, icon: <FaReact size={40} />, color: '#61DAFB' },
  { name: { es: 'Tailwind CSS', en: 'Tailwind CSS' }, icon: <SiTailwindcss size={40} />, color: '#38B2AC' },
  { name: { es: 'MySQL', en: 'MySQL' }, icon: <FaDatabase size={40} />, color: '#4479A1' },
  { name: { es: 'MongoDB', en: 'MongoDB' }, icon: <SiMongodb size={40} />, color: '#47A248' },
];

interface SkillsProps {
  isEnglish: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isEnglish }) => {
  return (
    <section className="py-12 px-4 md:px-12 text-white" id='skills'>
      <h2 className="text-4xl font-semibold mb-8 text-center text-cyan-500">
        {isEnglish ? 'Skills' : 'Habilidades'}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-6 rounded-lg border"
          >
            <div className="flex items-center gap-4">
              <span style={{ color: skill.color }}>{skill.icon}</span>
              <span className="text-xl font-medium text-white">{isEnglish ? skill.name.en : skill.name.es}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
