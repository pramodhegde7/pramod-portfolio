import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import navigation from "../../constants/navigation";
import personal from "../../constants/personal";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");

      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}

        <a
  href="#home"
  className="logo"
  onClick={() => setMenuOpen(false)}
>
  <img src={logo} alt="Pramod Hegde Logo" className="logo-image" />
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
                  className={
                    activeSection === item.link.substring(1)
                      ? "active"
                      : ""
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item.title}
                </a>

              </li>

            ))}

          </ul>

        </nav>

        {/* Resume */}

        <a
          href={personal.contact.resume}
          target="_blank"
          rel="noreferrer"
          className="resume-btn"
        >
          Resume ↓
        </a>

      </div>
    </header>
  );
}

export default Navbar;