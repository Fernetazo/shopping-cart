import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Cart from "./Cart";
import Payment from "./Payment";
import ShopItem from "./ShopItem";
import FAQ from "./FAQ";
import Contact from "./Contact";

// If was 'Routes' it will conflict with react router dom 'Routes' import => so 'routes'
const routes = (props) => {
  const { cards, cart, setCart, addItemToCart } = props;
  return (
    <Routes>
      <Route path="/shopping-cart/" element={<Home />} />
      <Route
        path="/shopping-cart/shop"
        element={
          <Shop
            cards={cards}
            cart={cart}
            setCart={setCart}
            addItemToCart={addItemToCart}
          />
        }
      />
      <Route path="/shopping-cart/about" element={<About />} />
      <Route
        path="/shopping-cart/cart"
        element={
          <Cart
            cards={cards}
            cart={cart}
            setCart={setCart}
            addItemToCart={addItemToCart}
          />
        }
      />
      <Route path="/shopping-cart/payment" element={<Payment />} />
      <Route
        path="/shopping-cart/shop/*"
        element={<ShopItem addItemToCart={addItemToCart} />}
      />
      <Route path="/shopping-cart/faq" element={<FAQ />} />
      <Route path="/shopping-cart/contact" element={<Contact />} />
    </Routes>
  );
};

export default routes;
