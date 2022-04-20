import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

const CartItem = (props) => {
  const { item, cart, addItemToCart } = props;

  const handleInputChange = () => {};

  const manageOneMoreItem = () => {
    let id = item.id;
    let name = item.name;
    let price = item.price;
    let description = item.description;

    let newItem = { id, name, price, description };

    addItemToCart(newItem);
  };

  const manageOneLessItem = () => {};

  const manageDeleteItem = () => {};

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
            ${new Intl.NumberFormat().format(item.price)}
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
            <input className="cartInput" onChange={handleInputChange}></input>
          </div>
          <button
            className="oneLessItemButton material-icons"
            onClick={manageOneLessItem}
          >
            remove
          </button>
        </div>
        <div>Subtotal TODO</div>
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
