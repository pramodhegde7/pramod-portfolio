import "./Navbar.css";
import navigation from "../../constants/navigation";
import personal from "../../constants/personal";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="logo">
          <span>PH</span>
        </a>

        {/* Navigation */}
        <nav>
          <ul className="nav-links">
            {navigation.map((item) => (
              <li key={item.title}>
                <a href={item.link}>{item.title}</a>
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