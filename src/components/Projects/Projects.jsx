import "./Projects.css";
import projects from "../../constants/projects";
import { useEffect, useState } from "react";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";

function Projects() {
  const [currentImage, setCurrentImage] = useState(0);
  const nextImage = () => {
  setCurrentImage((prev) => (prev + 1) % projects[0].images.length);
};

const prevImage = () => {
  setCurrentImage(
    (prev) =>
      (prev - 1 + projects[0].images.length) %
      projects[0].images.length
  );
};

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % projects[0].images.length);
  }, 3500);

  return () => clearInterval(interval);
}, []);
  return (
    <section id="projects" className="projects">
      <div className="container">

        <h2 className="section-title">
          Featured <span>Project</span>
        </h2>

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

           <div className="project-image">

  <span className="featured-badge">
    <FaStar />
    Featured
  </span>

  <img
    src={project.images[currentImage]}
    alt={project.title}
  />

  <button
    className="slider-btn left"
    onClick={prevImage}
  >
    <FaChevronLeft />
  </button>

  <button
    className="slider-btn right"
    onClick={nextImage}
  >
    <FaChevronRight />
  </button>

  <div className="slider-dots">

    {project.images.map((_, index) => (

      <span
        key={index}
        className={
          currentImage === index
            ? "dot active"
            : "dot"
        }
        onClick={() => setCurrentImage(index)}
      ></span>

    ))}

  </div>

</div>

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <div className="feature-list">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </div>

              <div className="project-buttons">

  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
  >
    <FaGithub />
    Source Code
  </a>

  {project.demo && project.demo !== "#" ? (
  <a
    href={project.demo}
    target="_blank"
    rel="noreferrer"
  >
    <FaExternalLinkAlt />
    Live Demo
  </a>
) : (
  <button className="coming-soon-btn" disabled>
    🚧 Coming Soon
  </button>
)}

</div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;