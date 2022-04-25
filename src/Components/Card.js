import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";

const Card = (props) => {
  const { e, cart, addItemToCart } = props;
  let item = e;

  const manageAddItemToCart = (e) => {
    e.preventDefault();
    let id = item.id;
    let name = item.name;
    let price = item.price;
    let description = item.description;

    let newItem = { id, name, price, description };

    addItemToCart(newItem);
  };
  return (
    <Link to={item.id} className="cardContainer">
      <button
        className="addToCartButton material-icons"
        onClick={manageAddItemToCart}
      >
        add_shopping_cart
      </button>
      <div className="cardUpperSide">
        <div
          className="imageContainer"
          id={item.id}
          key={item.id}
          name={item.name}
        >
          <img
            className="cardImage"
            style={{ pointerEvents: "none" }} //Prevents img events to fire, thus not firing checkSelection
            src={item.name}
            alt={item.name}
          ></img>
        </div>
      </div>
      <div className="cardBottomSide">
        <div className="price">
          ${new Intl.NumberFormat().format(item.price)}
        </div>
        <div className="description">{item.description}</div>
      </div>
    </Link>
  );
};

export default Card;
