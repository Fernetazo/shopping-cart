import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Welcome() {
  let navigate = useNavigate();

  const goToShop = () => {
    navigate("/shop");
  };

  return (
    <div>
      <div className="welcome">
        Welcome. Here you can buy the most modern Androidz.
      </div>
      <button onClick={goToShop}>Start shopping!</button>
      <Link to="shop">
        <button>Start shopping! 2</button>
      </Link>
    </div>
  );
}

export default Welcome;
