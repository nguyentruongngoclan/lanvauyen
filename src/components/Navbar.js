import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	}
	
	window.addEventListener('resize', showButton);

  return (
    <nav className="navbar">
			<Link to='/lanvauyen' className='navbar-logo' onClick={closeMobileMenu}>
				Lan & Uyen's Wedding					
			</Link>
      <div className="navbar-container">				
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/our_story"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Our Story
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/experience"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              The experience
            </Link>
          </li>
					<li className="nav-item">
            <Link
              to="/travel"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Travel
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/rsvp" className="nav-links" onClick={closeMobileMenu}>
              RSVP
            </Link>
          </li>
        </ul>
				{button}
      </div>
    </nav>
  );
}

export default Navbar;
