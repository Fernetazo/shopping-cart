function BottomBar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bottomBar">
      <div className="sign">Web design by Fernetazo</div>
      <div className="option">About</div>
      <div className="option">FAQ</div>
      <div className="option">Contact</div>
      <div className="material-icons" onClick={scrollToTop}>
        arrow_upward
      </div>
    </div>
  );
}

export default BottomBar;
