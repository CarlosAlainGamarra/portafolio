//styles
import "./ReadBook.css";

//Router
import { Link } from "react-router-dom";

//Assets
import home from '../assets/home.svg'

//Components
import SideBar from "./SideBar";


export const ReadBook = () => {

  return (
    <div className='container'>
      <div className="home-button">
        <Link to="/">
          <img src={home} alt="home" className="home-icon"/>
        </Link>
      </div>
      <div className='content-container'>
        <div className='readbook-title'>Title</div>
        <div className='content'>content</div>
      </div>
      <SideBar />
    </div>
  );
};

export default ReadBook;
