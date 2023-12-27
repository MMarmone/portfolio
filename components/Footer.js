import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaHeart } from 'react-icons/fa'; 

const medias = [
    {link:"https://www.linkedin.com/in/michel-marmone-marini-69441b172/",icon:<FaLinkedin/>,index:1},
    {link:"https://github.com/MMarmone", icon:<FaGithub/>,index:2}, 
    {link:"https://www.instagram.com/", icon:<FaInstagram/>, index:3},
    {link:"https://twitter.com", icon:<FaTwitter/>, index:4}
  ]

const Footer = () => (<footer>
<div className="flex bottom-0 p-3 ">
      <div className='flex ml-auto mr-auto dark:text-white text-black'>Made in React/NextJs by me with &nbsp;<FaHeart/></div>
      <div className="md:hidden mr-1 ml-auto">
          <nav >
          {medias.map(({ link, icon, index }) => (
            <a key={index} href={link} className="inline-block mb-1">
              {React.cloneElement(icon, {
                className: 'hover:scale-105 hover:text-gray-800 dark:hover:text-white duration-200 text-2xl mr-3 text-gray-500',
              })}
            </a>
          ))}
          </nav>
        </div>
    </div>

</footer>)

export default Footer;