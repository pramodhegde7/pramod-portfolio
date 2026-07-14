import "./Hero.css";
import heroImage from "../../assets/images/hero.png";
import personal from "../../constants/personal";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* Left Side */}
        <div className="hero-left">

          <p className="hero-greeting">
            <span className="hero-greeting">
    👋 Hello, I'm
</span>
          </p>

          <h1 className="hero-name">
            {personal.basic.name}
          </h1>

          <h2 className="hero-role">
            {personal.basic.role}
          </h2>

          <p className="hero-description">
            {personal.basic.description}
          </p>

          <p className="hero-college">
            {personal.basic.college}
          </p>

          <p className="hero-location">
    📍 {personal.contact.location}
</p> <br />

          <div className="hero-buttons">

            <a
              href={personal.contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
             📄 Resume
            </a>

            <a
              href={personal.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              💻 GitHub
            </a>

            <a
              href={personal.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              💼 LinkedIn
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="hero-right">

          <div className="hero-image-wrapper">

            <div className="hero-glow"></div>

            <img
              src={heroImage}
              alt={personal.basic.name}
              className="hero-image"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;