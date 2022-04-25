import React from "react";
import Card from "./Card";

const CardsGrid = (props) => {
  const { cards, cart, addItemToCart } = props;

  return (
    <div className="cardsGrid">
      {cards.map((item, index) => {
        return (
          <Card
            e={item}
            key={index}
            cart={cart}
            addItemToCart={addItemToCart}
          ></Card>
        );
      })}
    </div>
  );
};

export default CardsGrid;
