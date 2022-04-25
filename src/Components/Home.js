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
    <div>
      <div className="home">Here you can buy the most modern Androidz.</div>
      <Link to="shop">
        <button>Start shopping!</button>
      </Link>
    </div>
  );
}

export default Home;
