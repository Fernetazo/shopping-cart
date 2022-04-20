import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import CartItem from "./CartItem";

const CartGrid = (props) => {
  const { cart, addItemToCart } = props;

  // Filter duplicate items in cart
  let filteredCart = [...new Map(cart.map((v) => [v.id, v])).values()];

  return (
    <div className="cartGrid">
      {filteredCart.map((e, index) => {
        return (
          <CartItem
            item={e}
            cart={cart}
            addItemToCart={addItemToCart}
          ></CartItem>
        );
      })}
    </div>
  );
};

export default CartGrid;
