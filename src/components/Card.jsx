//Styles
import "./Card.css";

//Assets
import favoriteOn from "../assets/favoriteOn.svg";
import favoriteOff from "../assets/favoriteOff.svg";
import pdf from "../assets/pdf.png";
import epub from "../assets/epub.png";

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
          src={favoriteOn}
          /*style={{ display: "none" }}*/
        />
      </button>
    </div>
  );
};

export default Card;
