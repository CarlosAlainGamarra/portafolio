//Styles
import "./Cart.css";

//Assets
import pdf from "../assets/pdf.png";
import epub from "../assets/epub.png";

//Components
//import NavBar from "../components/NavBar";
import Card from "../components/Card";

//Hooks
import { useState, useEffect } from "react";

export const Cart = ({ addFavs, favorites }) => {
  const data = favorites;

  return (
    <div>
      {/*<NavBar />*/}
      <div className='cart-container'>
        <div className='cart-title'>Cart</div>
        <div className='cart'>
          {data.length !== 0 ? (
            <ul className='cart-list'>
              {favorites.map((book) => (
                <li key={favorites.id} className='cart-item'>
                  <Card book={book} addFavs={addFavs} />
                  <div className='pdf-icon'>
                    <a href='#'>
                      <img src={pdf} alt='download' />
                    </a>
                    ¡Descargame!
                    <a href='#'>
                      <img src={epub} alt='download' width={48} />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className='empty'>Tu carrito está vacío</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
