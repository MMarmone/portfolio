import React, { useState } from 'react';

const Tab = ({ label, active, onClick }) => (
  <div
    className={`flex cursor-pointer rounded-lg border-white border border-solid py-2 px-2 border-b ${active ? 'border-green-500' : 'border-gray-300'} ${active ? 'bg-ac9c80' : ''}`}
    onClick={(e) => {
      onClick();
      e.preventDefault();
    }}
  >
    {label}
  </div>
);

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Onglets */}
      <div className="flex-column h-full space-y space-y-4 text-sm font-medium md:me-4 mb-4 md:mb-0">
        <Tab label="Sii" active={activeTab === 1} onClick={() => handleTabClick(1)} />
        <Tab label="Sictiam" active={activeTab === 2} onClick={() => handleTabClick(2)} />
        <Tab label="Orange" active={activeTab === 3} onClick={() => handleTabClick(3)} />
      </div>

      {/* Contenu des onglets */}
      <div className="p-4 min-h-full">
        {/* Contenu du Tab 1 */}
        {activeTab === 1 && <div className="min-h-full">
          <h3 className='font-bold text-ac9c80' >Consultant at Orange</h3>
          <p className='text-gray-300 italic'>2 years and 3 months (Ongoing) | SII, Sophia Antipolis</p>
          <br/>
            Since joining SII as a consultant at Orange, I've been immersed in a challenging and dynamic role. Focused on an application central to handling Orange metadata, my responsibilities extend across various aspects:
          <br/><br/>
        <ul className="list-disc">
          <li>
            <span className='font-bold'>Methodologies</span>: Engaging in both Scrum and SAFe methodologies, I've played a pivotal role in ensuring streamlined development processes and effective collaboration within the team.
          </li>
          <li>
          <span className='font-bold'>Microservices Architecture</span>: Leveraging Java 17 and Spring Boot 3, I've been instrumental in building robust and scalable microservices. Additionally, I've contributed to PHP 8 development, adding versatility to the tech stack.
          </li>
          <li>
          <span className='font-bold'>Functional Expertise</span>: With a profound understanding of the application's functionality, I actively contribute to decision-making processes and propose innovative ideas for continuous improvement.
          </li>
        </ul>
        <br/>
        Working within a stimulating team, my journey at SII has been marked by continuous learning and impactful decision-making.</div>}
        {/* Contenu du Tab 2 */}
        {activeTab === 2 && <div className="min-h-full">
        <h3 className='font-bold text-ac9c80' >Full Stack Developer </h3> 
        <p className='text-gray-300 italic'>1-year Role | SICTIAM</p>
        <br></br>
        As a Full Stack Developer at SICTIAM, I navigated a diverse range of projects, contributing of three distinct applications:
        <br></br>
        <br></br>
        <ul className="list-disc">
          <li>
            <span className='font-bold'>NodeJS / Bootstrap</span>: Development of the backend in NodeJS paired with a Bootstrap frontend.
          </li>
          <li>
            <span className='font-bold'>PHP Symfony / React</span>: Implemented robust solutions with a PHP Symfony backend and a React frontend.
          </li>
          <li>
          <span className='font-bold'>Microservices Java on K8s / React </span>: Development of a Microservices architecture in Java deployed on Kubernetes, complemented by a React frontend .
          </li>
        </ul> 
        <br></br>
        Workin with Scrum methodology, I actively participated in sprint planning, translating client needs into estimations and actionable tasks. Throughout my tenure, I played a key role in introducing new features, enhancing application stability, and optimizing performance across the board.
              
        </div>}

        {/* Contenu du Tab 3 */}
        {activeTab === 3 && <div className="min-h-full">
          <h3 className='font-bold text-ac9c80' >Software Engineering Intern </h3>
          <p className='text-gray-300 italic'>5-month Internship | Orange, Sophia Antipolis</p>
          <br></br>
          I had the privilege of interning at Orange in Sophia Antipolis, where I played a pivotal role in shaping the architecture of an internal testing application. My responsibilities included delving into <span className='font-bold'>Java Spring Boot and Angular</span>, actively contributing to the development process.
          <br></br>
          <br></br>
          Engaging directly with clients, I sought to understand their product needs, ensuring alignment with our architectural choices. This experience not only enhanced my technical proficiency but also honed my ability to make informed decisions for optimizing system architecture.
          <br></br>
          <br></br>
          This dynamic role allowed me to bridge the gap between client expectations and technical implementation, setting the foundation for my journey in software engineering.</div>}
      </div>
    </div>
  );
};

export default Tabs;