import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import Welcome from "./Components/Welcome";
import BottomBar from "./Components/BottomBar";
import "./styles/styles.css";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Welcome></Welcome>
      <BottomBar></BottomBar>
    </div>
  );
}

export default App;
