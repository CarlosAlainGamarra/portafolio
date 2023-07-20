//Styles
import "./Card.css";

//Assets
import favoriteOn from "../assets/favoriteOn.svg";
import favoriteOff from "../assets/favoriteOff.svg";

//Hooks
import { useState } from "react";


export const Card = ({ book }) => {
  const [favorite, setFavorite] = useState(false)




  const handleFavorite = () => {
    setFavorite(!favorite); 
  } 

  return (
    <div className='card-container'>
      <div className='card-image'>
        <img src={book.cover} alt={book.title} />
      </div>
      <div className='card-title'>{book.title}</div>
      <div className='card-author'>{book.author}</div>
      <div className='favorite' onClick={handleFavorite} id={book.id}>
        {favorite ? (
          <img src={favoriteOn} alt='' />
        ) : (
          <img src={favoriteOff} alt='' />
        )}
      </div>
    </div>
  );
};

export default Card;
