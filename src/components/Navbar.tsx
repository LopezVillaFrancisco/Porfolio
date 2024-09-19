'use client'
import { FaHome, FaBook, FaCode, FaComment, FaBriefcase } from "react-icons/fa";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <FaHome size={25} color="#fff" />,
        link: "/",
    },
    {
        id: 2,
        title: "About Me",
        icon: <FaBriefcase size={25} color="#fff" />,
        link: "/#experiencia",
    },
    {
        id: 3,
        title: "Education",
        icon: <FaBook size={25} color="#fff" />,
        link: "/#education",
    },
    {
        id: 4,
        title: "Projects",
        icon: <FaCode size={25} color="#fff" />,
        link: "/#projects",
    },
    {
        id: 5,
        title: "Contact",
        icon: <FaComment size={25} color="#fff" />,
        link: "/#contacto",
    },
];

const Navbar = () => {
  const router = usePathname();

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-40 w-full flex justify-center">
      <nav>
        <div className="flex items-center justify-center px-4 py-1 gap-2 rounded-full bg-black/20">
          {itemsNavbar.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-black/10 ${router === item.link ? "bg-black/20" : ""}`}
            >
              <span>{item.icon}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
