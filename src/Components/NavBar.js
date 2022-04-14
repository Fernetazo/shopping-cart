import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <div className="mainTitle">Androidz</div>
      <div className="navigationOptions">
        <Link to="/">
          <div className="option">Home</div>
        </Link>
        <Link to="/shop">
          <div className="option">Shop</div>
        </Link>
        <Link to="/about">
          <div className="option">About</div>
        </Link>
        <Link to="/cart">
          <div className="option material-icons">shopping_cart</div>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
