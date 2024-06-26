import { FaJava, FaDocker,FaReact, FaNodeJs, FaJs, FaDev,FaGitlab, FaDatabase } from "react-icons/fa";
import ScrollRevealImage from '../animation/ScrollRevealImage';

const AboutMe = () => {

    const javaTech = [
        {icon:"",name:"SpringBoot"},{icon:"",name:"Maven"},{icon:"",name:"hibernates/jetty"}
    ]

    const dataBaseTech = [
        {icon:"",name:"MySql"},{icon:"",name:"MongoDb"},{icon:"",name:"Elastisearch"}
    ]

    const deploymentTech = [
        {icon:<FaDocker/>,name:"Docker"},
        {icon:"",name:"Kubernetes"},
        {icon:<FaGitlab/>,name:"GitlabCi"}
    ]

    return <section id="aboutMe">
        <div className='content-div'>
            <div className='flex items-center'>
                <h1>About Me</h1>
            </div>
            <div className="md:grid md:grid-cols-3 gap-4 flex flex-wrap">
                <div className="col-span-2">
                Passionate software engineer in Sophia Antipolis, France, specializing in back-end development. Committed to crafting robust solutions and staying ahead in evolving technologies. Let's build the future together!                   
                 <div className="m-3 border-t border-gray-300 h-px"></div>
                    <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                        <li key="1" className="pb-3 sm:pb-4 hover:bg-secondcolor hover:bg-opacity-30">
                            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                <div>
                                    <FaJava />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium truncate">
                                    Java
                                    </p>
                                    <p className="flex text-sm overflow-auto">
                                    {javaTech.map(({icon, name},index) =>
                                        <span key={index} className="flex bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">{icon} {name}</span> 
                                    )}
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    5+ year exp
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4 hover:bg-secondcolor hover:bg-opacity-30">
                            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                <div>
                                    <FaJs />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium trunoverflow-autocate">
                                    JavaScript
                                    </p>
                                    <p className="flex text-sm overflow-auto ">
                                    <span className="flex bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300"><FaReact />&nbsp;ReactJs/NextJs</span> 
                                    <span className="flex bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300"><FaNodeJs/>&nbsp;NodeJs</span> 
                                    <span className="flex bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">npm</span> 
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    2+ year exp
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4 hover:bg-secondcolor hover:bg-opacity-30">
                            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                <div>
                                    <FaDev />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-gray-900 truncate dark:text-white">
                                    Deployments
                                    </p>
                                    <p className="flex text-sm overflow-auto">
                                    {deploymentTech.map(({icon, name},index) =>
                                        <span key={index} className="flex bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">{icon} {name}</span> 
                                    )}
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4 hover:bg-secondcolor hover:bg-opacity-30">
                            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                <div>
                                    <FaDatabase />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-gray-900 truncate dark:text-white">
                                    Databases
                                    </p>
                                    <p className="flex text-sm overflow-auto">
                                    {dataBaseTech.map(({icon, name}, index) =>
                                        <span key={index} className="flex bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">{icon} {name}</span> 
                                    )}
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>

                </div>
                <div className="col-start-3 mx-auto">
                    <ScrollRevealImage
                        src="/pp.jpeg"
                    />
                </div>
            </div>
        </div>
    </section>
}

export default AboutMe;

