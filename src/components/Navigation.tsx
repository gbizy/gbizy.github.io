import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav>
      <div className="container">
        {/* Logo */}
        <Link className="logo" to="/" onClick={closeMenu}>
          HOME
        </Link>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu" onClick={toggleMenu}>
          ☰
        </div>

        {/* Menu Items */}
        <ul className={`menu ${showMenu ? "show" : ""}`}>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          {/* <li>
            <Link
              to="/route"
              onClick={(event) => {
                event.preventDefault();
                closeMenu();
                window.open("/guy_benyishai_resume.pdf");
              }}
            >
              Resume
            </Link>
          </li> */}
          <li>
            <Link to="/mywork" onClick={closeMenu}>
              My Work
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
