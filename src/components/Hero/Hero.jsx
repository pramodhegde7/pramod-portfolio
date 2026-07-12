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
            Hello, I'm 👋
          </p>

          <h1 className="hero-name">
            {personal.name}
          </h1>

          <h2 className="hero-role">
            {personal.role}
          </h2>

          <p className="hero-description">
            {personal.description}
          </p>

          <p className="hero-college">
            {personal.college}
          </p>

          <div className="hero-buttons">

            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              📄 Resume
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              🐙 GitHub
            </a>

            <a
              href={personal.linkedin}
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
              alt={personal.name}
              className="hero-image"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;