import React from 'react';
import { FaArrowDown } from "react-icons/fa";

const scrollToSection = () => {
    // Remplacez 'sectionId' par l'ID de la section vers laquelle vous souhaitez faire défiler.
    const section = document.getElementById('aboutMe');

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


const Introduction = () => {
    return <><section id='introduction'>
        <div className='content-div'>
            <div>
                <h3 className='font-bold' style={{'color' :'#a7a084'}}>
                    Hey, I'm 
                </h3>
                <h1 className='font-bold typing-text'  style={{'color' :'#a7a084'}}>
                Michel Marmone Marini.
                </h1>
                <h2 className='font-bold text-gray-500'>
                I'm passionate about the tech world. I build amazing applications.
                </h2>
            </div>
        </div>
        
    </section>
    <button className='flex flex-col justify-center m-auto w-10 moving-object-container rounded-full border-secondcolor border border-solid text-secondcolor p-2 '
            onClick={scrollToSection}>
        <FaArrowDown className='moving-object'/>
    </button>
    </>
}

export default Introduction;