//styles
import "./ReadBook.css";

//Router
import { Link, useParams } from "react-router-dom";

//Assets
import home from '../assets/home.svg'

//Components
import SideBar from "./SideBar";

//Content
import {books} from '../content/content'


export const ReadBook = () => {
  let params = useParams().id
  const book = books[params-1]
 
  return (
    <div className='container'>
      <div className="home-button">
        <Link to="/">
          <img src={home} alt="home" className="home-icon"/>
        </Link>
      </div>
      <div className='content-container'>
        <div className='readbook-title'>{book.title}</div>
        <div className='content'>content</div>
      </div>
      <SideBar />
    </div>
  );
};

export default ReadBook;
