import { useState } from 'react';
import './styles.css';

function Sidebar({ children }) {
  const [currentTab, setCurrentTab] = useState(0);

  const sidebarIcons = children.map((tab, index) =>
    <div
      className={"sidebar-icon" + (index === currentTab ? " selected" : "")}
      onClick={() => {setCurrentTab(index)}}
      key={index}
    >
      {tab.props.icon}
    </div>
  )

  return (
    <div className="sidebar">
      <div className="sidebar-menu bg-gray-10">
        {sidebarIcons}
      </div>
      <div className="sidebar-content bg-gray-10">
        {children[currentTab]}
      </div>
    </div>
  );
}

export { Sidebar };
