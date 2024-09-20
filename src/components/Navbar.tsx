'use client'
import { FaBook, FaCode, FaComment, FaBriefcase, FaTools } from "react-icons/fa"; 
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export const itemsNavbar = [
    {
        id: 1,
        title: "About Me",
        icon: <FaBriefcase size={25} color="#fff" />,
        link: "/#experiencia",
        sectionId: "experiencia",
    },
    {
        id: 2,
        title: "Projects",
        icon: <FaCode size={25} color="#fff" />,
        link: "/#projects",
        sectionId: "projects",
    },
    {
        id: 3,
        title: "Skills", 
        icon: <FaTools size={25} color="#fff" />,
        link: "/#skills", 
        sectionId: "skills",
    },
    {
        id: 4,
        title: "Education",
        icon: <FaBook size={25} color="#fff" />,
        link: "/#education",
        sectionId: "education",
    },
    {
        id: 5,
        title: "Contact",
        icon: <FaComment size={25} color="#fff" />,
        link: "/#contacto",
        sectionId: "contacto",
    },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.3, 
    });

    itemsNavbar.forEach((item) => {
      const section = document.getElementById(item.sectionId);
      if (section) observer.observe(section);
    });

    return () => {
      itemsNavbar.forEach((item) => {
        const section = document.getElementById(item.sectionId);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-40 w-full flex justify-center">
      <nav>
        <div className="flex items-center justify-center px-4 py-1 gap-2 rounded-full bg-black/20">
          {itemsNavbar.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-black/10 ${
                activeSection === item.sectionId ? "bg-black/20" : ""
              }`}
            >
              <span>{item.icon}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
