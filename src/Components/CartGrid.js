import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const CartGrid = (props) => {
  const [totalAmount, setTotalAmount] = useState(0);

  const { cart, setCart, addItemToCart } = props;

  const getTotalAmount = () => {
    let tempTotalAmount = 0;
    cart.forEach((e) => {
      tempTotalAmount = e.price * e.quantity + tempTotalAmount;
    });
    setTotalAmount(tempTotalAmount);
  };

  useEffect(() => {
    getTotalAmount();
  }, [cart]);

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
      <div className="totalAmountContainer">
        <div className="totalAmountText">Total amount:</div>
        <div className="totalAmount">
          $ {new Intl.NumberFormat().format(totalAmount)}
        </div>
      </div>
      <div className="paymentContainer">
        <Link to="/payment">
          <div className="paymentButton">Go to payment site</div>
        </Link>
      </div>
    </div>
  );
};

export default CartGrid;
