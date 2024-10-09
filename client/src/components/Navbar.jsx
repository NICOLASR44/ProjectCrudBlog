import Logo from "../svg/Logo";
import "./styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__Logo">
        <Logo width={150} height={150} />
      </div>
      <div className="navbar__Items">
        <ul className="navbar__List">
          <li>DEV Blog Management</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
