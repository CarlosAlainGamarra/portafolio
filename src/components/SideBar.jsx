//Styles
import "./SideBar.css";

//Hooks
import { useState } from "react";

//Assets
import up from "../assets/up.svg";

const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
      <button className='toggle-btn' onClick={handleSidebar}>
        {isExpanded ? (
          <img src={up} alt='expand' className='b-hide' />
        ) : (
          <img src={up} alt='expanded' className='b-expand' />
        )}
      </button>
      {isExpanded && (
        <div className='sidebar-content'>
          <div className='sideBar-title'>Indice</div>
          <a href='#'>Capitulo 1</a>
          <a href='#'>Capitulo 2</a>
          <a href='#'>Capitulo 3</a>
          <a href='#'>Capitulo 4</a>
        </div>
      )}
    </div>
  );
};

export default SideBar;
