import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ScrollRevealImage = ({src}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 650; 

      if (scrollPosition > triggerPosition) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`image-container ${isVisible ? 'visible' : ''}`}>
      <Image src={src} 
        className={`hover:scale-105 hover:text-white transition duration-300 ${isHovered ? 'filter-none' : 'grayscale'}`}
        width={300}
        height={500}
        alt="Picture of the author"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
       />
    </div>
  );
};

export default ScrollRevealImage;