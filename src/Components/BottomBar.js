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
      <div className="bottomBarOptions">
        <div className="option sign">Web design by Fernetazo</div>
        <div className="option">ABOUT</div>
        <div className="option">FAQ</div>
        <div className="option">CONTACT</div>
        <div className="option material-icons" onClick={scrollToTop}>
          arrow_upward
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
