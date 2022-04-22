import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  const { cart } = props;

  const [cartIndicator, setCartIndicator] = useState(0);
  const [classCartIndicator, setClassCartIndicator] = useState(
    "cartIndicatorHidden"
  );

  const getNewCartIndicator = () => {
    let quantity = 0;
    cart.forEach((e) => {
      quantity = e.quantity + quantity;
    });
    return quantity;
  };

  useEffect(() => {
    let newCartIndicator = getNewCartIndicator();
    setCartIndicator(newCartIndicator);

    newCartIndicator > 0
      ? setClassCartIndicator("cartIndicator")
      : setClassCartIndicator("cartIndicatorHidden");
  }, [cart]);

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
        <div className={classCartIndicator}>{cartIndicator}</div>
      </div>
    </div>
  );
}

export default NavBar;
