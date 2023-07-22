//Styles
import "./BookGrid.css";

//Assets
import { books } from "../content/content";
import favoriteOn from "../assets/favoriteOn.svg";
import favoriteOff from "../assets/favoriteOff.svg";

//Components
//import NavBar from "../components/NavBar";
import Card from "../components/Card";

export const BookGrid = ({ addFavs }) => {
  return (
    <div>
      {/*<NavBar />*/}
      <div className='grid-container'>
        <div className='grid-title'>LIBRERÍA</div>
        <div className='grid'>
          <ul className='grid-list'>
            {books.map((book) => (
              <li key={book.id} className='grid-item'>
                <Card book={book} addFavs={addFavs} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookGrid;
