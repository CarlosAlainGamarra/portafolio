//Styles
import './Board.css'

//Assets
import add from '../assets/add.svg'
import drop from '../assets/drop.svg'
import { books } from '../content/content'

//Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//Hooks
import { useState } from 'react';

//Redux
import { useDispatch} from 'react-redux'
import { setProduct, unsetProduct } from '../reducers/cart/cartSlice'

//Content
import { news } from '../content/content'



export const Board = () => {
  //handle Add button
  const [added, setAdded] = useState(false)
  const dispatch = useDispatch()


  const handleAdded = () => {
    setAdded(!added)
    {
      dispatch(setProduct({
          product: {
              title: books[0].title,
              cover: books[0].cover,
              author: books[0].author,
              id: books[0].id
      }
    }))}
  }


  //Slide settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
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
            <img src={books[0].cover} alt={books[0].title} />
          </div>
          <div className='slider-image-container'>
            <img src={books[1].cover} alt={books[1].title} className='image'/>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Board