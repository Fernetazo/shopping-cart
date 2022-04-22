import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import Routes from "./Components/RouteSwitch";
import BottomBar from "./Components/BottomBar";
import uniqid from "uniqid";
import "./styles/styles.css";

import alphamini from "./images/alphamini.jpg";
import cate from "./images/cate.jpg";
import cleaner from "./images/cleaner.jpg";
import cyx5 from "./images/cyx5.jpg";
import deli from "./images/deli.jpg";
import drawer from "./images/drawer.jpg";
import go1 from "./images/go1.jpg";
import if3129 from "./images/if3129.png";
import jedi from "./images/jedi.png";
import padbotx1s from "./images/padbotx1s.png";
import pepper from "./images/pepper.png";
import reeman from "./images/reeman.jpg";
import spider from "./images/spider.jpg";
import stemk12 from "./images/stemk12.png";
import tonybot from "./images/tonybot.png";
import vacuum from "./images/vacuum.jpeg";

function App() {
  const [cards, setCards] = useState([
    {
      id: uniqid(),
      name: alphamini,
      price: 2000,
      description: "Alpha mini - Smart toy",
    },
    {
      id: uniqid(),
      name: cate,
      price: 15000,
      description: "Catering serving robot",
    },
    {
      id: uniqid(),
      name: cleaner,
      price: 1200,
      description: "Smart floor cleaner",
    },
    {
      id: uniqid(),
      name: cyx5,
      price: 14000,
      description: "Service robot with AI",
    },
    {
      id: uniqid(),
      name: deli,
      price: 4500,
      description: "Delivery smart robot",
    },
    {
      id: uniqid(),
      name: drawer,
      price: 120,
      description: "Automatic drawer smart robot",
    },
    {
      id: uniqid(),
      name: go1,
      price: 25000,
      description: "GO-1 autonomous dog with AI",
    },
    {
      id: uniqid(),
      name: if3129,
      price: 230,
      description: "IF-3129 defense unit. Smart robot with face-recognition",
    },
    {
      id: uniqid(),
      name: jedi,
      price: 19000,
      description: "Delivery truck with GPS and AI",
    },
    {
      id: uniqid(),
      name: padbotx1s,
      price: 11000,
      description: "Helper robot",
    },
    {
      id: uniqid(),
      name: pepper,
      price: 17500,
      description: "Pepper - Multifunction smart robot with AI",
    },
    {
      id: uniqid(),
      name: reeman,
      price: 4150,
      description: "Reeman - Indoor delivery robot",
    },
    {
      id: uniqid(),
      name: spider,
      price: 99,
      description: "Spider robot - Spycam",
    },
    {
      id: uniqid(),
      name: stemk12,
      price: 3300,
      description: "STEM-K-12 ultra smart kid robot",
    },
    {
      id: uniqid(),
      name: tonybot,
      price: 5800,
      description: "TonyBot smart AI robot",
    },
    {
      id: uniqid(),
      name: vacuum,
      price: 175,
      description: "Roomba vacuum cleaner",
    },
  ]);

  const [cart, setCart] = useState([]);

  const addItemToCart = (e) => {
    let id = e.id;
    let name = e.name;
    let price = e.price;
    let description = e.description;
    let quantity = 1;

    let checkDuplicate = cart.some((o) => {
      return o.id === id;
    });

    if (!checkDuplicate) {
      let newItem = { id, name, price, description, quantity };
      setCart(cart.concat(newItem));
    } else {
      let copyCart = cart;
      let index = cart.findIndex((o) => {
        return o.id === id;
      });
      let newQuantity = copyCart[index].quantity + 1;

      // Same as: copyCart[index].quantity = newQuantity;
      copyCart[index] = {
        ...copyCart[index],
        quantity: newQuantity,
      };

      setCart([...copyCart]);
    }
  };

  return (
    <div>
      <NavBar></NavBar>
      <Routes
        cards={cards}
        cart={cart}
        setCart={setCart}
        addItemToCart={addItemToCart}
      ></Routes>
      <BottomBar></BottomBar>
    </div>
  );
}

export default App;
