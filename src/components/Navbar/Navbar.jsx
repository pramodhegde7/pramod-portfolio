import { useState } from "react";
import "./Navbar.css";
import navigation from "../../constants/navigation";
import personal from "../../constants/personal";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="logo">
          <span>PH</span>
        </a>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation */}
        <nav className={menuOpen ? "nav active" : "nav"}>
          <ul className="nav-links">
            {navigation.map((item) => (
              <li key={item.title}>
                <a
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Resume Button */}
        <a
          href={personal.resume}
          target="_blank"
          rel="noreferrer"
          className="resume-btn"
        >
          Resume
        </a>

      </div>
    </header>
  );
}

export default Navbar;