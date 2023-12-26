import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'; 

const medias = [
    {link:"https://www.linkedin.com/in/michel-marmone-marini-69441b172/",icon:<FaLinkedin/>,index:1},
    {link:"https://github.com/MMarmone", icon:<FaGithub/>,index:2}, 
    {link:"https://www.instagram.com/", icon:<FaInstagram/>, index:3},
    {link:"https://twitter.com", icon:<FaTwitter/>, index:4}
  ]

const Footer = () => {<footer><div className="flex ml-6 bottom-0 p-5 hidden sm:block z-10">
      <div>
          <nav >
          {medias.map(({ link, icon, index }) => (
            <a key={index} href={link} className="block mb-4">
              {React.cloneElement(icon, {
                className: 'inline-block hover:scale-105 hover:text-gray-800 dark:hover:text-white duration-200 text-3xl text-gray-500',
              })}
            </a>
          ))}
          </nav>
        </div>
    </div>
</footer>}

export default Footer;