import { useState } from 'react';
import { Tooltip } from '../floaters';

function Sidebar({ children }) {
  const [currentTab, setCurrentTab] = useState(0);

  const sidebarIcons = children.map((tab, index) =>
    <Tooltip key={index} title={tab.props.title} position="right">
      <div
        className={"sidebar-icon" + (index === currentTab ? " selected" : "")}
        onClick={() => {setCurrentTab(index)}}
        key={index}
      >
        {tab.props.icon}
      </div>
    </Tooltip>
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
