import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

const CartGrid = (props) => {
  const { cart } = props;

  return (
    <div className="cartGrid">
      {cart.map((e, index) => {
        return <div>{e}</div>;
      })}
    </div>
  );
};

export default CartGrid;
