import { useState } from 'react';
import Image from 'next/image'
import { FaJava, FaDocker,FaReact, FaNodeJs, FaJs, FaDev,FaGitlab, FaDatabase } from "react-icons/fa";

const AboutMe = () => {

    const [isHovered, setIsHovered] = useState(false);

    return <section id="aboutMe">
        <div className='content-div'>
            <div className='flex items-center'>
                <h1>About Me</h1>
                <div className="ml-14 border-t border-gray-300 h-px"></div>
            </div>
            <div className="font-ibmplexmono md:grid md:grid-cols-3 gap-4 flex flex-wrap">
                <div className="col-span-2">
                Passionate software engineer in Sophia Antipolis, France, specializing in back-end development. Committed to crafting robust solutions and staying ahead in evolving technologies. Let's build the future together!                    <div className="m-3 border-t border-gray-300 h-px"></div>
                    <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                        <li key="1" className="pb-3 sm:pb-4 hover:bg-ac9c80">
                            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                <div>
                                    <FaJava />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium truncate">
                                    Java
                                    </p>
                                    <p className="text-sm truncate ">
                                    Spring boot, Maven, hibernates/jetty
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    5+ year exp
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4 hover:bg-ac9c80">
                            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                <div>
                                    <FaJs />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium truncate">
                                    JavaScript
                                    </p>
                                    <p className="flex text-sm truncate ">
                                    <FaReact />&nbsp;ReactJs/NextJs,&nbsp;<FaNodeJs/>&nbsp;NodeJs, npm
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    2+ year exp
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4 hover:bg-ac9c80">
                            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                <div>
                                    <FaDev />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-gray-900 truncate dark:text-white">
                                    Deployments
                                    </p>
                                    <p className="flex text-sm truncate">
                                    <FaDocker/>&nbsp;Docker, Kubernetes,&nbsp;<FaGitlab/>&nbsp;GitlabCi
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4 hover:bg-ac9c80">
                            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                <div>
                                    <FaDatabase />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-gray-900 truncate dark:text-white">
                                    Databases
                                    </p>
                                    <p className="flex text-sm truncate">
                                    MySql, MongoDb, Elastisearch
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>

                </div>
                <div className="col-start-3">
                    <Image
                        className={`hover:scale-105 hover:text-white transition duration-300 ${isHovered ? 'filter-none' : 'grayscale'}`}
                        src="/pp.jpeg"
                        width={300}
                        height={500}
                        alt="Picture of the author"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    />
                </div>
            </div>
        </div>
    </section>
}

export default AboutMe;

