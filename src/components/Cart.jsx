//Styles
import "./Cart.css";

//Assets
import drop from '../assets/drop.svg'

//Components
import NavBar from "../components/NavBar";
import Card from "../components/Card";

//Redux
import { useSelector } from "react-redux";

//Hooks
import { useState, useEffect } from "react";

export const Cart = () => {
    const productList = useSelector(state => state.cart.product )
    const [favorites, setFavorites] = useState([])

useEffect(() => {
  const favsInLocal = localStorage.getItem('favs')
  if (favsInLocal != null){
    const favsArray = JSON.parse(favsInLocal)
    setFavorites(favsArray)
  }
}, [])



  return (
    <div>
      <NavBar />
      <div className='cart-container'>
        <div className='cart-title'>Cart</div>
        <div className='cart'>
          {productList?
          <ul className='cart-list'>
            {productList.map((book) => (
              <li key={book.id} className='cart-item'>
                <Card book={book}/>
                <div>descargar</div>
                <div><img src={drop} alt="drop" /></div>
              </li>
            ))}
          </ul> : 
          'Tu carrito está vacío'}
        </div>
      </div>
    </div>
  );
};

export default Cart;
