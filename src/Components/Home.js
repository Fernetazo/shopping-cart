import React from "react";
import { Link } from "react-router-dom";

function Home() {
  /* EXAMPLE USING NAVIGATE
  let navigate = useNavigate();

  const goToShop = () => {
    navigate("/shop");
  };
  */
  return (
    <div className="home">
      <div className="speech">
        Welcome! Here you can buy the most modern Androidz
      </div>
      <Link to="shop">
        <button className="blueButton">Start shopping!</button>
      </Link>
    </div>
  );
}

export default Home;
