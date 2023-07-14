//Styles
import './Board.css'

//Assets
import cero from '../assets/cero.png'
import logo from '../assets/logo.png'
import add from '../assets/add.svg'
import drop from '../assets/drop.svg'

//Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//Hooks
import { useState } from 'react';

//Content
import { news } from '../content/content'



export const Board = () => {
  //handle Add button
  const [added, setAdded] = useState(false)
  const handleAdded = () => {
    setAdded(!added)
  }


  //Slide settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <div className="board-container">
      <div className='board-content-container'>
        <div className='board-content'>
          {news}
        </div>
        <div onClick={handleAdded}>
          {!added? <div className='add-button'>Add<img src={add} alt="add" className='add-button-icon'/></div> : 
            <div className='add-button'>Drop<img src={drop} alt="Drop" className='drop-button-icon'/></div>
          }  
        </div>
      </div>

      <div className='board-slider-container'>
        <Slider {...settings}>
          <div className='slider-image-container'>
            <img src={cero} alt="cero" />
          </div>
          <div className='slider-image-container'>
            <img src={logo} alt="logo" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Board