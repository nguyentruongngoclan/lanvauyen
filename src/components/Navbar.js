import "./Navbar.css";

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
			<div className="navbar-container">
				<ul>
					<li>
						<Link to="/our_story">Our Story</Link>
					</li>
					<li>
						<Link to="/experience">The experience</Link>
					</li>
					<li>
						<Link to="/rsvp">RSVP</Link>
					</li>
				</ul>
			</div>			
    </nav>
  )
}

export default Navbar