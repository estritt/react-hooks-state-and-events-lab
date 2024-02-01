import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);
  const btnText = inCart ? "Remove From Cart" : "Add to Cart";
  const inCartClass = inCart ? "in-cart" : "";

  function handleCartClick(e) {
    setInCart(inCart => !inCart);
  }

  return (
    <li className={inCartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={e => handleCartClick(e)} className="add">{btnText}</button>
    </li>
  );
}

export default Item;
