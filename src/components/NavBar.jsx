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
import down from "../assets/down.svg";
import cart from "../assets/cart.png";

//components
import Dropdown from "./Dropdown";

const NavBar = ({favorites}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const data = favorites
 

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  //Close Modal
  window.addEventListener("mouseup", (e) => {
    const box = document.getElementById("box");
    if (e.target != box && e.target.parentNode != box) {
      box.style.display = "none";
      setTimeout(() => {
        Dropdown ? setOpenDropdown(false) : "";
      }, 0.000001);
    }
  });

  return (
    <>
      <nav>
        <div className='logo'>
          <Link to='/main'>
            <img src={logo} alt='Logo' />
          </Link>
        </div>
        <div className={`nav-items ${menuOpen ? "open" : ""}`}>
          <ul className='nav-list'>
            <li className='nav-item'>
              <Link to='/books' className='a1'>
                Biblioteca
              </Link>
            </li>
            <li className='nav-item'>
              <a
                href='https://cgprojectsfelika.web.app/'
                className='a2'
                rel='noreferrer'
                target='_blank'
              >
                Feliverso
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='a3' onClick={handleDropdown}>
                Historias
                <img src={down} alt='down' className='item3Icon' />
              </a>
            </li>
            <li className='nav-cart'>
              <Link to='/cart'>
                <img src={cart} alt='cart' />
                <div className="cart-length">{data.length}</div>
              </Link>
              
              
            </li>
          </ul>
        </div>
        <div className='nav-cart2'>
              <Link to='/cart'>
                <img src={cart} alt='cart' />
                <div className="cart-length">{data.length}</div>
              </Link>
              
            </div>
        <div className='menu-toggle' onClick={handleMenuToggle}>
          <img
            src={!menuOpen ? menuOpenIcon : menuCloseIcon}
            alt='menuIcon'
            className={`${menuOpen ? "menu-icon-open" : "menu-icon-close"}`}
          />
        </div>
      </nav>
      {openDropdown && (
        <div className='dropdown' id='box'>
          <Dropdown />
        </div>
      )}
    </>
  );
};

export default NavBar;
