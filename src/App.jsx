//Components
import Index from "./Index";
import Wellcome from "./Wellcome";
import BookGrid from "./components/BookGrid";
import Cart from "./components/Cart";
import ModalBook from "./components/ModalBook";
import PopC from "./components/PopC";
import ReadBook from "./components/ReadBook";
import NavBar from "./components/NavBar";

//Router
import { Routes, Route } from "react-router-dom";

//Hooks
import { useState, useEffect } from "react";


export const App = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favsInLocal = localStorage.getItem("favs");
    if (favsInLocal != null) {
      const favsArray = JSON.parse(favsInLocal);
      setFavorites(favsArray);
    }
  }, []);

  const favBooks = localStorage.getItem("favs");
  let tempBooksInFavs;
  if (favBooks === null) {
    tempBooksInFavs = [];
  } else {
    tempBooksInFavs = JSON.parse(favBooks);
  }

  const addFavs = (e) => {
    const title = e.currentTarget.id;
    const cover = e.currentTarget.firstChild.alt;
    const id = e.currentTarget.firstChild.id;
    const bookData = {
      id,
      title,
      cover,
    };

    let isBook = tempBooksInFavs.find((book) => book.id === bookData.id);
    if (!isBook) {
      tempBooksInFavs.push(bookData);
      localStorage.setItem("favs", JSON.stringify(tempBooksInFavs));
      setFavorites(tempBooksInFavs);
      console.log(`se agrego ${bookData.id}`);
    } else {
      let booksLeft = tempBooksInFavs.filter(
        (books) => books.id !== bookData.id
      );
      localStorage.setItem("favs", JSON.stringify(booksLeft));
      setFavorites(booksLeft);
      console.log(`se eliminó ${bookData.id}`);
    }
  };

  return (
    <div>
      <NavBar favorites={favorites}/>
      <Routes>
        <Route path='/' element={<Wellcome />} />
        <Route path='/main' element={<Index />} />
        <Route path='/book/:id' element={<ReadBook />} />
        <Route path='/modal' element={<ModalBook />} />
        <Route path='/popculture' element={<PopC />} />
        <Route path='/books' element={<BookGrid addFavs={addFavs} />} />
        <Route
          path='/cart'
          element={<Cart addFavs={addFavs} favorites={favorites} />}
        />
      </Routes>
    </div>
  );
};

export default App;
