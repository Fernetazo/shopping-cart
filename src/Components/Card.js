import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

const Card = (props) => {
  const e = props.card;
  return (
    <div className="cardContainer">
      <div className="cardUpperSide">
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
        <div className="price">${e.price}</div>
        <div className="description">{e.description}</div>
      </div>
    </div>
  );
};

export default Card;
