//Styles
import "./Board.css";

//Assets
import add from "../assets/add.svg";
import { books } from "../content/content";

//Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//Content
import { news } from "../content/content";

//Router
import { Link } from "react-router-dom";

export const Board = () => {
  //Slide settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className='board-container'>
      <div className='board-content-container'>
        <div className='board-content'>
          <h3 className="board-title">—FELIKA</h3>
          {news}
          </div>
        <div>
          <Link Link to={`/book/${books[0].id}`}>
            <div className='add-button'>
              Leer
              <img src={add} alt='add' className='add-button-icon' />
            </div>
          </Link>
        </div>
      </div>

      <div className='board-slider-container'>
        <Slider {...settings}>
          <div className='slider-image-container'>
            <img src={books[0].cover} alt={books[0].title} />
          </div>
          <div className='slider-image-container'>
            <img src={books[0].cover2} alt={books[1].title} className='image' />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Board;
