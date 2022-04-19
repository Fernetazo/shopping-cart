import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

const Card = (props) => {
  const e = props.card;

  const manageAddItemToCart = () => {
    let id = e.id;
    let name = e.name;
    let price = e.price;
    let description = e.description;

    let item = { id, name, price, description };
  };

  return (
    <div className="cardContainer">
      <div className="cardUpperSide">
        <button className="addToCartButton" onClick={manageAddItemToCart}>
          add_shopping_cart
        </button>
        <div className="imageContainer" id={e.id} key={e.id} name={e.name}>
          <img
            className="cardImage"
            style={{ pointerEvents: "none" }} //Prevents img events to fire, thus not firing checkSelection
            src={e.name}
            alt={e.name}
          ></img>
        </div>
      </div>
      <div className="cardBottomSide">
        <div className="price">${new Intl.NumberFormat().format(e.price)}</div>
        <div className="description">{e.description}</div>
      </div>
    </div>
  );
};

export default Card;
