//Styles
import "./Card.css";

//Assets
import cart2 from "../assets/cart2.png";


//Hooks
import BookGrid from "./BookGrid";


export const Card = ({ book, addFavs }) => {



  return (
    <div className='card-container'>
      <div className='card-image'>
        <img src={book.cover} alt={book.title} />
      </div>
      <div className='card-title'>{book.title}</div>
      <div className='card-author'>{book.author}</div>

      <button id={book.title} onClick={addFavs} className='add-icon'>
        <img
          alt={book.cover}
          id={book.id}
          src={ cart2 }
          className="cart-icon"
          /*style={{ display: "none" }}*/
        />
      </button>
    </div>
  );
};

export default Card;
