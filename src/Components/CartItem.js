import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

const CartItem = (props) => {
  const { item, cart, setCart, addItemToCart } = props;

  const handleInputChange = (e) => {
    let newQuantity = parseInt(e.target.value);
    let index = cart.findIndex((o) => {
      return o.id === item.id;
    });
    let copyCart = cart;

    copyCart[index].quantity = newQuantity;

    setCart([...copyCart]);
  };

  const manageOneMoreItem = () => {
    let copyCart = cart;

    let index = cart.findIndex((o) => {
      return o.id === item.id;
    });
    let newQuantity = copyCart[index].quantity + 1;

    // Same as: copyCart[index].quantity = newQuantity;
    copyCart[index] = {
      ...copyCart[index],
      quantity: newQuantity,
    };

    setCart([...copyCart]);
  };

  const manageOneLessItem = () => {
    let copyCart = cart;
    let index = cart.findIndex((o) => {
      return o.id === item.id;
    });
    let newQuantity = copyCart[index].quantity - 1;

    if (newQuantity >= 1) {
      copyCart[index].quantity = newQuantity;

      setCart([...copyCart]);
    }
  };

  const manageDeleteItem = () => {
    let index = cart.findIndex((o) => {
      return o.id === item.id;
    });
    let filteredCart = cart.filter((e, i) => i !== index);
    setCart(filteredCart);
  };

  return (
    <div className="cartItemContainer">
      <div className="cartItemUpperSide">
        <div
          className="cartImageContainer"
          id={item.id}
          key={item.id}
          name={item.name}
        >
          <img
            className="cartCardImage"
            style={{ pointerEvents: "none" }} //Prevents img events to fire, thus not firing checkSelection
            src={item.name}
            alt={item.name}
          ></img>
        </div>
        <div className="cartItemMiddle">
          <div className="cartDescription">{item.description}</div>
          <div className="cartPrice">
            Price per unit ${new Intl.NumberFormat().format(item.price)}
          </div>
        </div>
        <div className="cartInputButtons">
          <button
            className="oneMoreItemButton material-icons"
            onClick={manageOneMoreItem}
          >
            add
          </button>
          <div className="cartInputContainer">
            <input
              className="cartInput"
              value={item.quantity}
              onChange={handleInputChange}
            ></input>
          </div>
          <button
            className="oneLessItemButton material-icons"
            onClick={manageOneLessItem}
          >
            remove
          </button>
        </div>
        <div className="subtotalPrice">
          ${new Intl.NumberFormat().format(item.price * item.quantity)}
        </div>
      </div>
      <div className="cardBottomSide">
        <button
          className="deleteItemButton material-icons"
          onClick={manageDeleteItem}
        >
          delete
        </button>
        Remove
      </div>
    </div>
  );
};

export default CartItem;
