import React, { useState } from "react";
import CartGrid from "./CartGrid";

function Cart(props) {
  const { cart, setCart, addItemToCart } = props;

  return cart.length > 0 ? (
    <CartGrid
      cart={cart}
      setCart={setCart}
      addItemToCart={addItemToCart}
    ></CartGrid>
  ) : (
    <div>Your shopping cart is empty! Go shop around!</div>
  );
}

export default Cart;
