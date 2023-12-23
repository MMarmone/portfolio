// components/Sidebar.js
import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Utilisez les icônes appropriées

const VerticalLine = () => (
    <div className="absolute left-1/2 z-10 h-40 bg-gray-800 w-0.5 transform -translate-x-1/2"></div>
  );
  

const Sidebar = () => {
    
  return (
    <div className="ml-6 fixed left-0 bottom-12 p-5">
        <nav >
        {/* Utilisez des icônes à la place du texte */}
        <a href="https://www.linkedin.com/" className="block mb-4">
            <FaLinkedin className="inline-block text-3xl" style={{color:'#1f2937'}}/>
        </a>
        <a href="https://github.com/" className="block mb-4">
            <FaGithub className="inline-block text-3xl" style={{color:'#1f2937'}}/>
        </a>
        <a href="https://www.instagram.com/" className="block mb-4">
            <FaInstagram className="inline-block text-3xl" style={{color:'#1f2937'}}/>
        </a>
        {/* Ajoutez d'autres liens et icônes selon vos besoins */}
        </nav>
        <VerticalLine/>
    </div>
    
  );
};

export default Sidebar;