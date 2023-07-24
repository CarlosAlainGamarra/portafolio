//Components
import Index from "./Index.jsx";
import Wellcome from "./Wellcome.jsx";
import BookGrid from "./components/BookGrid.jsx";
import Cart from "./components/Cart.jsx";
import ModalBook from "./components/ModalBook";
import PopC from "./components/PopC.jsx";
import ReadBook from "./components/ReadBook.jsx";
import NavBar from "./components/NavBar.jsx";

//Router
import { Routes, Route } from "react-router-dom";

//Hooks
import { useState, useEffect } from "react";
//SweetAlert
import Swal from "sweetalert2";

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


      //Alert
      let timerInterval;
      Swal.fire({
        title: "Genial!",
        html: `Agregaste ${bookData.title} al carrito`,
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
    } else {
      let booksLeft = tempBooksInFavs.filter(
        (books) => books.id !== bookData.id
      );

      localStorage.setItem("favs", JSON.stringify(booksLeft));
      setFavorites(booksLeft);

      
      //Alert
      let timerInterval;
      Swal.fire({
        title: "=(",
        html: `Eliminaste ${bookData.title} del carrito`,
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
    }
  };

  return (
    <div>
      <NavBar favorites={favorites} />
      <Routes>
        <Route path='/' element={<Wellcome />} />
        <Route path='/main' element={<Index />} />
        <Route path='/book/:id' element={<ReadBook />} />
        <Route path='/modal' element={<ModalBook />} />
        <Route path='/popculture' element={<PopC />} />
        <Route
          path='/books'
          element={<BookGrid addFavs={addFavs} favorites={favorites} />}
        />
        <Route
          path='/cart'
          element={<Cart addFavs={addFavs} favorites={favorites} />}
        />
      </Routes>
    </div>
  );
};

export default App;
