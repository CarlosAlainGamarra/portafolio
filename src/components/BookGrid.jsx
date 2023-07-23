//Styles
import "./BookGrid.css";

//Assets
import { books } from "../content/content";

//Components
//import NavBar from "../components/NavBar";
import Card from "../components/Card";

export const BookGrid = ({ addFavs, favorites }) => {
  return (
    <div>
      {/*<NavBar />*/}
      <div className='grid-container'>
        <div className='grid-title'>BIBLIOTECA</div>
        <div className='grid'>
          <ul className='grid-list'>
            {books.map((book) => (
              <li key={book.id} className='grid-item'>
                <Card book={book} addFavs={addFavs} favorites={favorites}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookGrid;
