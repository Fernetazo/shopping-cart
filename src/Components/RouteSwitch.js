import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Cart from "./Cart";

// If was 'Routes' it will conflict with react router dom 'Routes' import => so 'routes'
const routes = (props) => {
  const { cards, cart, addItemToCart } = props;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/shop"
        element={
          <Shop cards={cards} cart={cart} addItemToCart={addItemToCart} />
        }
      />
      <Route path="/about" element={<About />} />
      <Route
        path="/cart"
        element={
          <Cart cards={cards} cart={cart} addItemToCart={addItemToCart} />
        }
      />
    </Routes>
  );
};

export default routes;
