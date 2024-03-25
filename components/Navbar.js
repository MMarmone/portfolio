import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from 'next/image'
import DarkModeToggle from "./theme/DarkModeToggle";

const handleScroll = (event, link) => {
  event.preventDefault();
  const targetSection = document.getElementById(link.substring(1));
  if (targetSection) {
    const offset = targetSection.offsetTop - 40;
    window.scrollTo({ top: offset, behavior: "smooth" });
  }
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      name: "About me",
      link: "#aboutMe",
    },
    {
      id: 2,
      name: "Experience",
      link: "#experience"
    },
    {
      id: 3,
      name:"Contact Me",
      link: "#contactMe"
    },
    {
      id: 4,
      name:"Resume",
      link: "/cv.pdf",
    }
  ];
  return (
    <header className="flex justify-between shadow-xl items-center w-full h-10 sm:h-20 px-4 text-white bg-gray-800 fixed nav z-10" >
      <div>
        <div className="ml-4">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <div className="relative sm:w-16 sm:h-16 w-8 h-8">
              <Image
                src="/logo.png"
                layout="fill"
                objectFit="contain"
                alt="Picture of the author"
              />
            </div>
          </a>
        </div>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, name }) => (
          <li
            key={id}
            className={`${name === 'Resume' ? 'rounded-lg border-secondcolor border border-solid text-secondcolor' : 'text-gray-500' } nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline`}
          >
            {name === 'Resume' ? <a href={link}>{name}</a> :
            <Link onClick={(event) => { handleScroll(event,link) }} href={link}>{name}</Link>}
          </li>
        ))}
        <div className="items-center border-l border-slate-200 m-auto ml-6 pl-6">
          <li className="text-gray-500 hover:scale-105 hover:text-gray-800 hover:text-white duration-200">
            <DarkModeToggle />
          </li>
        </div>
      </ul>
      <div className="md:hidden ml-auto mr-3 pr-3">
          <div className="text-gray-500 hover:scale-105 hover:text-gray-800 hover:text-white duration-200">
            <DarkModeToggle size={25}/>
          </div>
          </div>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <>
        
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link, name }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link onClick={(event) => {
                  setNav(!nav);
                  handleScroll(event, link);
                }} href={link}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </header>
  );
};

export default Navbar;