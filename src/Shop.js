import NavBar from "./Components/NavBar";
import BottomBar from "./Components/BottomBar";
import "./styles/styles.css";
import CardsGrid from "./Components/CardsGrid";

function Shop() {
  return (
    <div>
      <NavBar></NavBar>
      <CardsGrid></CardsGrid>
      <BottomBar></BottomBar>
    </div>
  );
}

export default Shop;
