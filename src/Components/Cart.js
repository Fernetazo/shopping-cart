import React, { useState } from "react";
import CartGrid from "./CartGrid";

function Cart(props) {
  const { cart, addItemToCart } = props;

  return <CartGrid cart={cart} addItemToCart={addItemToCart}></CartGrid>;
}

export default Cart;
