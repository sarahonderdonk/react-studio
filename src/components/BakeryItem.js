// TODO: create a component that displays a single bakery item

import React from "react";

const BakeryItem = ({ item, addToCart }) => {
  return (
    <div className="bakery-item">
      <img src={process.env.PUBLIC_URL + item.image} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>Price: ${item.price}</p>
        <button onClick={() => addToCart(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default BakeryItem;