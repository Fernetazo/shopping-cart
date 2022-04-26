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
      <div className="mainTitle">THE ANDROIDZ SHOP</div>
      <div className="navigationOptions">
        <Link to="/" className="option">
          <div>HOME</div>
        </Link>
        <Link to="/shop" className="option">
          <div>SHOP</div>
        </Link>
        <Link to="/about" className="option">
          <div>ABOUT</div>
        </Link>
        <Link to="/cart" className="option">
          <div className="option material-icons">shopping_cart</div>
        </Link>
        <div className={classCartIndicator}>{cartIndicator}</div>
      </div>
    </div>
  );
}

export default NavBar;
