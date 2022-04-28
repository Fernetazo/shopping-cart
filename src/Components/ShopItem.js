import { useLocation, useNavigate } from "react-router-dom";

function ShopItem(props) {
  const { addItemToCart } = props;

  const location = useLocation();
  const item = location.state;

  const navigate = useNavigate();
  const goToBack = () => {
    navigate(-1);
  };

  // TO DO: Zoom img when hovering it

  return (
    <div className="shopItemContainer">
      <div className="shopItemUpperSide" onClick={goToBack}>
        <div className="shopItemUpperSideButtons">
          <div className="shopItemBackButton material-icons">arrow_back</div>
          <div className="shopItemBackButtonDescription">Back to list</div>
        </div>
      </div>
      <div className="shopItemMain">
        <div className="shopItemImageContainer" id={item.id} name={item.name}>
          <img className="shopItemImage" src={item.name} alt={item.name}></img>
        </div>
        <div className="shopItemRightSide">
          <div className="shopItemDescription">{item.description}</div>
          <div className="shopItemPrice">
            $ {new Intl.NumberFormat().format(item.price)}
          </div>
          <button
            className="blueButton"
            onClick={() => {
              addItemToCart(item);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopItem;
