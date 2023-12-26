import React, { useState } from 'react';

const Tab = ({ label, active, onClick }) => (
  <li
    className={`flex cursor-pointer rounded-lg border-white border border-solid text-white py-2 px-2 border-b ${active ? 'border-green-500' : 'border-gray-300'} ${active ? 'bg-ac9c80' : 'bg-white'}`}
    onClick={onClick}
  >
    {label}
  </li>
);

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="flex">
      {/* Onglets */}
      <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
        <Tab label="Tab 1" active={activeTab === 1} onClick={() => handleTabClick(1)} />
        <Tab label="Tab 2" active={activeTab === 2} onClick={() => handleTabClick(2)} />
        <Tab label="Tab 3" active={activeTab === 3} onClick={() => handleTabClick(3)} />
      </ul>

      {/* Contenu des onglets */}
      <div className="w-3/4 p-4">
        {/* Contenu du Tab 1 */}
        {activeTab === 1 && <div>Contenu du Tab 1</div>}

        {/* Contenu du Tab 2 */}
        {activeTab === 2 && <div>Contenu du Tab 2</div>}

        {/* Contenu du Tab 3 */}
        {activeTab === 3 && <div>Contenu du Tab 3</div>}
      </div>
    </div>
  );
};

export default Tabs;