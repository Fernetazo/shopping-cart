import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Cart from "./Cart";

// If was 'Routes' it will conflict with react router dom 'Routes' import => so 'routes'
const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default routes;
