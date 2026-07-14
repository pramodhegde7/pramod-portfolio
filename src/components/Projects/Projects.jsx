import { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

import "./Projects.css";
import projects from "../../constants/projects";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
function Projects() {
  
const [expandedProject, setExpandedProject] = useState(null);
const [openLightbox, setOpenLightbox] = useState(false);
const [lightboxProject, setLightboxProject] = useState(null);
const [lightboxIndex, setLightboxIndex] = useState(0);
const [selectedProject, setSelectedProject] = useState(0);
const currentProject = projects[selectedProject];
  /* ===========================
     CASE STUDY
  =========================== */

  const toggleCaseStudy = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    
    <section className="projects" id="projects">
      <div className="container">

        <h2 className="section-title">
        Featured <span>Projects</span>
        </h2>

        
        <div className="project-card">

            {/* CONTENT */}

            <div className="project-content">

              <span className="project-badge">
                🏆 Featured Project
              </span>

              <h3>{currentProject.title}</h3>

              <h4>{currentProject.subtitle}</h4>

              <p>{currentProject.description}</p>

              <div className="project-info">

                <span>🟢 <strong>Status:</strong> {currentProject.status}</span>

                <span>👨‍💻 <strong>Role:</strong> {currentProject.role}</span>

                <span>📅 <strong>Duration:</strong> {currentProject.duration}</span>

              </div>

              {/* Metrics */}

              <div className="project-metrics">
              {currentProject.metrics.map((metric, index) => (
              <div className="metric" key={index}>
              {metric}
              </div>
        ))}
      </div>


              {/* Technologies */}
              <h5>Technology Stack</h5>
              <div className="tech-stack">
              {currentProject.technologies.map((tech, index) => (
              <span key={index}>
              {tech}
              </span>
            ))}
          </div>

              {/* Buttons */}

              <div className="project-buttons">

                <a
                  href={currentProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="live-btn"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  <FaGithub />
                  Source Code
                </a>

              </div>
              
               <div
  className="project-gallery-preview"
  onClick={() => {
    setLightboxProject(currentProject);
    setLightboxIndex(0);
    setOpenLightbox(true);
  }}
>

 
  <div className="gallery-stack">

    <img
      src={currentProject.images[2].src}
      alt=""
      className="stack-img back"
    />

    <img
      src={currentProject.images[1].src}
      alt=""
      className="stack-img middle"
    />

    <img
      src={currentProject.images[0].src}
      alt=""
      className="stack-img front"
    />

    <div className="gallery-overlay">

    <span className="gallery-icon">📱</span>

    <h4>Application Screens</h4>

    <p>
  {currentProject.images
    .slice(0, 3)
    .map((img) => img.title)
    .join(" • ")}

  {currentProject.images.length > 3 && " • +More"}
</p>

    <small>
        {currentProject.images.length} Screens • Click to Explore
    </small>

</div>
  </div>
</div>

              {/* Case Study Button */}

              <button
                className="case-btn"
                onClick={() => toggleCaseStudy(currentProject.id)}
              >

                {expandedProject === currentProject.id ? (
                  <>
                    Hide Case Study
                    <FaChevronUp />
                  </>
                ) : (
                  <>
                    View Case Study
                    <FaChevronDown />
                  </>
                )}

              </button>

              {/* Expandable Case Study */}

              {expandedProject === currentProject.id && (

                <div className="case-study">

                  <div className="case-box">

                    <h4>🎯 Problem</h4>

                    <p>{currentProject.caseStudy.problem}</p>

                  </div>

                  <div className="case-box">

                    <h4>💡 Solution</h4>

                    <p>{currentProject.caseStudy.solution}</p>

                  </div>

                  <div className="case-box">

                    <h4>⚡ Challenges</h4>

                    <ul>

                      {currentProject.caseStudy.challenges.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}

                    </ul>

                  </div>

                  <div className="case-box">

                    <h4>📈 Outcome</h4>

                    <ul>

                      {currentProject.caseStudy.outcome.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}

                    </ul>

                  </div>

                  <div className="case-box full">

                    <h4>🎓 What I Learned</h4>

                    <ul>

                      {currentProject.caseStudy.learned.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}

                    </ul>

                  </div>

                </div>

              )}

            </div>

          </div>

      {/* Other Projects */}

<div className="project-browser">

  {projects
    .filter((_, index) => index !== selectedProject)
    .map((project) => (

      <div
        className="browser-card"
        key={project.id}
        onClick={() => {

          const newIndex = projects.findIndex(
            p => p.id === project.id
          );

          setSelectedProject(newIndex);
          setExpandedProject(null);

          document
            .getElementById("projects")
            ?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });

        }}
      >

        <img
          src={project.images[0].src}
          alt={project.title}
        />

        <div className="browser-content">

          <h4>{project.title}</h4>

          <p>{project.subtitle}</p>

          <div className="browser-tech">

            {project.technologies
              .slice(0,3)
              .map((tech,index)=>(

                <span key={index}>
                  {tech}
                </span>

            ))}

          </div>

          <button>

            Open Project →

          </button>

        </div>

      </div>

    ))}

</div>

      </div>

      {lightboxProject && (
  <Lightbox
    open={openLightbox}
    close={() => setOpenLightbox(false)}
    index={lightboxIndex}
    slides={lightboxProject.images.map((img) => ({
      src: img.src,
    }))}
  />
)}
    </section>
  );
}

export default Projects;