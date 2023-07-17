//Styles
import "./NavBar.css";

//Router
import { Link } from "react-router-dom";

//Hooks
import { useState } from "react";

//Assets
import menuOpenIcon from "../assets/menuOpenIcon.svg";
import menuCloseIcon from "../assets/menuCloseIcon.svg";
import logo from "../assets/logo.png";
import down from '../assets/down.svg'

//components
import Dropdown from "./Dropdown";



const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false)

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDropdown = () => {
   setOpenDropdown(!openDropdown)
  }


  //Close Modal
  window.addEventListener('mouseup', (e) => {
    const box = document.getElementById('box')
    if(e.target != box && e.target.parentNode != box){    
      box.style.display = 'none'
      setTimeout(() => {
        Dropdown? setOpenDropdown(false) : ''   
      }, 0.000001);   
    }
  })

  return (
    <>
    <nav>
      <div className='logo'>
        <img src={logo} alt='Logo' />
      </div>
      <div className={`nav-items ${menuOpen ? "open" : ""}`}>
        <ul className='nav-list'>
          <li className='nav-item'>
            <Link to='/book' className='a1'>
              Pop-C
            </Link>
          </li>
          <li className='nav-item'>
            <a href='#' className='a2'>
              Feliverso
            </a>
          </li>
          <li className='nav-item'>
            <a 
              href='#' 
              className='a3' 
              onClick={handleDropdown}
              >
              Historias
              <img src={down} alt="down" className='item3Icon'/>
            </a>  
          </li>
        </ul>
      </div>
      <div className='menu-toggle' onClick={handleMenuToggle}>
        <img
          src={!menuOpen ? menuOpenIcon : menuCloseIcon}
          alt='menuIcon'
          className={`${menuOpen ? "menu-icon-open" : "menu-icon-close"}`}
        />
      </div>
    </nav>
    {openDropdown && <div className="dropdown" id="box"><Dropdown /></div>}
    </>
  );
};

export default NavBar;
