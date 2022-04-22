import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import CartItem from "./CartItem";

const CartGrid = (props) => {
  const { cart, setCart, addItemToCart } = props;

  // Filter duplicate items in cart
  //let filteredCart = [...new Map(cart.map((v) => [v.id, v])).values()];

  return (
    <div className="cartGrid">
      {cart.map((e, index) => {
        return (
          <CartItem
            key={index}
            item={e}
            cart={cart}
            setCart={setCart}
            addItemToCart={addItemToCart}
          ></CartItem>
        );
      })}
    </div>
  );
};

export default CartGrid;
