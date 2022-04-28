import { useNavigate } from "react-router-dom";

function BottomBar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const navigate = useNavigate();
  const goToAbout = () => {
    navigate("/about");
  };
  const goToFAQ = () => {
    navigate("/faq");
  };
  const goToContact = () => {
    navigate("/contact");
  };
  const goToGithub = () => {
    window.open("https://github.com/Fernetazo");
  };

  return (
    <div className="bottomBar">
      <div className="bottomBarOptions">
        <div
          className="option sign"
          onClick={goToGithub}
          title="Will open a new tab"
        >
          Web design by Fernetazo
        </div>
        <div className="option" onClick={goToAbout}>
          ABOUT
        </div>
        <div className="option" onClick={goToFAQ}>
          FAQ
        </div>
        <div className="option" onClick={goToContact}>
          CONTACT
        </div>
        <div className="option material-icons" onClick={scrollToTop}>
          arrow_upward
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
