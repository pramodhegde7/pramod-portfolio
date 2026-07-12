import "./About.css";
import personal from "../../constants/personal";

import {
  FaGraduationCap,
  FaCode,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">

        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about-content">

          <p className="about-text">
            Hello! I'm <strong>{personal.name}</strong>, currently pursuing
            <strong> Master of Computer Applications (MCA)</strong> at
            <strong> Manipal Institute of Technology</strong>.

            <br /><br />

            I am passionate about building modern web applications using
            React, Python, Flask and MongoDB. I enjoy learning new
            technologies, solving real-world problems and creating
            clean, user-friendly software.
          </p>

          <div className="about-cards">

            <div className="about-card">
              <FaGraduationCap />
              <h3>Education</h3>
              <p>MCA</p>
            </div>

            <div className="about-card">
              <FaCode />
              <h3>Specialization</h3>
              <p>Full Stack Development</p>
            </div>

            <div className="about-card">
              <FaMapMarkerAlt />
              <h3>Location</h3>
              <p>{personal.location}</p>
            </div>

            <div className="about-card">
              <FaEnvelope />
              <h3>Email</h3>
              <p>{personal.email}</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;