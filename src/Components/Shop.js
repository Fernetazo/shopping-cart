import CardsGrid from "./CardsGrid";

function Shop(props) {
  const { cart, addItemToCart } = props;

  return <CardsGrid cart={cart} addItemToCart={addItemToCart}></CardsGrid>;
}

export default Shop;
