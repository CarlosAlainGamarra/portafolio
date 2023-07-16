//Styles
import "./Books.css";

//Assets
import { books } from "../content/content";

//Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Books = () => {
  //Slide settings
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className='books-container'>
      <ul>
        <Slider {...settings}>
          {books.map((book) => (
            <a href='#' key={book.id}>
              <li>
                <div className='books-image-container'>
                  <img
                    src={book.cover}
                    alt={book.title}
                    className='book-image'
                  />
                </div>
              </li>
            </a>
          ))}
        </Slider>
      </ul>
    </div>
  );
};

export default Books;
