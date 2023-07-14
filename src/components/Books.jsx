//Styles
import './Books.css'

//Assets
import cero from '../assets/cero.png'

//Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Books= () => {
    //Slide settings
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: 'linear'
    }


  return (
    <div className='books-container'>
      <Slider {...settings}>
        <div className='books-image-container'>
          <img src={cero} alt="cero" className='book-image'/>
        </div>

        <div className='books-image-container'>
          <img src={cero} alt="cero" className='book-image'/>
        </div>

        <div className='books-image-container'>
          <img src={cero} alt="cero" className='book-image'/>
        </div>

        <div className='books-image-container'>
          <img src={cero} alt="cero" className='book-image'/>
        </div>

        <div className='books-image-container'>
          <img src={cero} alt="cero" className='book-image'/>
        </div>

        <div className='books-image-container'>
          <img src={cero} alt="cero" className='book-image'/>
        </div>
      </Slider>
    </div>
  )
}

export default Books
