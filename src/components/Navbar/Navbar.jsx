import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.webp";
import avatar from "../../assets/images/avatar.webp";
import heroImage from "../../assets/images/hero.webp";
import navigation from "../../constants/navigation";
import personal from "../../constants/personal";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [openLightbox, setOpenLightbox] = useState(false);

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

    <>

      <header className="navbar">

        <div className="navbar-container">

          {/* ===========================
              DESKTOP LOGO
          =========================== */}

          <a
            href="#home"
            className="desktop-logo"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src={logo}
              alt="Pramod Hegde"
              className="logo-image"
              loading="eager"
              decoding="async"
            />
          </a>

          {/* ===========================
              MOBILE AVATAR
          =========================== */}

          <button
            className="mobile-avatar"
            onClick={() => setOpenLightbox(true)}
            aria-label="View Profile Photo"
          >
            <img
            src={avatar}
            alt="Pramod Hegde"
            className="avatar-image"
            loading="eager"
            decoding="async"
          />
          </button>

          {/* ===========================
              HAMBURGER
          =========================== */}

          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* ===========================
              NAVIGATION
          =========================== */}

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
                    {/* ===========================
              RESUME BUTTON
          =========================== */}

          <a
            href={personal.contact.resume}
            target="_blank"
            rel="noreferrer"
            className="resume-btn"
          >
            Resume
          </a>

        </div>
      </header>

      {/* ===========================
          PROFILE IMAGE VIEWER
      =========================== */}

      <Lightbox
        open={openLightbox}
        close={() => setOpenLightbox(false)}
        slides={[
          {
            src: heroImage,
          },
        ]}
      />

    </>

  );
}

export default Navbar;