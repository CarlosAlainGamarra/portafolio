//Styles
import "./Books.css";

//Assets
import { books } from "../content/content";

//hooks
import { useState } from "react";

//Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import ModalBook from "../components/ModalBook";

export const Books = () => {
  const [openModal, setOpenModal] = useState(false);

  const [book, setBook] = useState("");
  const handleModal = (e) => {
    setOpenModal(!openModal);
    setBook(books[e.currentTarget.parentNode.firstChild.getAttribute("id")-1]);
  };

  //Slide settings
  const settings1 = {
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

  const settings2 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <><div className="books-title">—CATÁLOGO</div>
      <div className='books-container'>
        
        <ul className='lista1'>
          <Slider {...settings1}>
            {books.map((book) => (
              <li key={book.id} onClick={handleModal} id={book.id}>
                <div className='books-image-container'>
                  <img
                    src={book.cover}
                    alt={book.title}
                    className='book-image'
                  />
                  {book.title}
                </div>
              </li>
            ))}
          </Slider>
        </ul>

        <ul className='lista2'>
          <Slider {...settings2}>
            {books.map((book) => (
              <a href='#' key={book.id}>
                <li key={book.id} onClick={handleModal} id={book.id}>
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

      {openModal ? <ModalBook book={book} closeModal={handleModal}/> : ""}
    </>
  );
};

export default Books;
