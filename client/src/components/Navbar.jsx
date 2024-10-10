import { useNavigate } from "react-router-dom"; // Importer useNavigate
import Logo from "../svg/Logo";
import homeLogo from "../assets/images/home.png";
import returnLogo from "../assets/images/RETURN.png";

import "./styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate(); // Hook pour naviguer

  const handleHomeClick = () => {
    navigate("/"); // Redirige vers la page d'accueil
  };

  const handleReturnClick = () => {
    navigate(-1); // Redirige vers la page précédente
  };

  const handleKeyPressHome = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      handleHomeClick();
    }
  };

  const handleKeyPressReturn = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      handleReturnClick();
    }
  };

  return (
    <div className="navbar">
      <div
        className="navbar__logo-home"
        onClick={handleHomeClick}
        onKeyPress={handleKeyPressHome}
        role="button"
        tabIndex={0} // Rendre focusable
      >
        <img src={homeLogo} alt="logohome" />
      </div>
      <div className="navbar__center">
        <div className="navbar__Logo">
          <Logo width={150} height={150} />
        </div>
        <div className="navbar__Items">
          <ul className="navbar__List">
            <li>DEV Blog Management</li>
          </ul>
        </div>
      </div>
      <div
        className="navbar__logo-return"
        onClick={handleReturnClick}
        onKeyPress={handleKeyPressReturn}
        role="button"
        tabIndex={0} // Rendre focusable
      >
        <img src={returnLogo} alt="logoreturn" />
      </div>
    </div>
  );
}

export default Navbar;
