import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Cart from "./Cart";
import Payment from "./Payment";

// If was 'Routes' it will conflict with react router dom 'Routes' import => so 'routes'
const routes = (props) => {
  const { cards, cart, setCart, addItemToCart } = props;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/shop"
        element={
          <Shop
            cards={cards}
            cart={cart}
            setCart={setCart}
            addItemToCart={addItemToCart}
          />
        }
      />
      <Route path="/about" element={<About />} />
      <Route
        path="/cart"
        element={
          <Cart
            cards={cards}
            cart={cart}
            setCart={setCart}
            addItemToCart={addItemToCart}
          />
        }
      />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
};

export default routes;
