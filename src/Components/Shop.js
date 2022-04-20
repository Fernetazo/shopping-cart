import CardsGrid from "./CardsGrid";

function Shop(props) {
  const { cards, cart, addItemToCart } = props;

  return (
    <CardsGrid
      cards={cards}
      cart={cart}
      addItemToCart={addItemToCart}
    ></CardsGrid>
  );
}

export default Shop;
