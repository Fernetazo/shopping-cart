import React, { useState } from "react";
import CartGrid from "./CartGrid";

function Cart(props) {
  const { cart, setCart, addItemToCart } = props;

  return (
    <CartGrid
      cart={cart}
      setCart={setCart}
      addItemToCart={addItemToCart}
    ></CartGrid>
  );
}

export default Cart;
