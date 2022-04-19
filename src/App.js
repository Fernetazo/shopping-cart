import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import Routes from "./Components/RouteSwitch";
import BottomBar from "./Components/BottomBar";
import "./styles/styles.css";

function App() {
  const [cart, setCart] = useState([]);

  const addItemToCart = (e) => {
    let id = e.id;
    let name = e.name;
    let price = e.price;
    let description = e.description;

    let newItem = { id, name, price, description };

    setCart(cart.concat(newItem));
  };

  return (
    <div>
      <NavBar></NavBar>
      <Routes cart={cart} addItemToCart={addItemToCart}></Routes>
      <BottomBar></BottomBar>
    </div>
  );
}

export default App;
