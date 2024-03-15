import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import './App.css';


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  // Define state for cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add item to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);


  return (
    <div className="App">
      <h1>My Bakery</h1>

      <div className="bakery-items-container">
        {bakeryData.map((item, index) => (
          <BakeryItem key={index} item={item} addToCart={addToCart} />
        ))}
      </div>

      <div className="cart-container">
        <h2>Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>

      </div>
    </div>
  );
}

export default App;
