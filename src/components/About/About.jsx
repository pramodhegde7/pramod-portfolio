import "./About.css";
import personal from "../../constants/personal";

import {
  FaGraduationCap,
  FaCode,
  FaMapMarkerAlt,
  FaBullseye,
  FaBookOpen,
  FaFutbol,
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

            I'm passionate about building modern web applications using
            <strong> React, Python, Flask and MongoDB</strong>. I enjoy solving
            real-world problems, creating clean and user-friendly software,
            and continuously learning new technologies to improve my skills.

            <br /><br />

            Outside of coding, I enjoy playing outdoor sports, travelling,
            reading books and watching movies.
          </p>

          <div className="about-cards">

            {/* Education */}
            <div className="about-card">
              <FaGraduationCap />
              <h3>Education</h3>
              <p>
                Master of Computer Applications (MCA)
                <br />
                Manipal Institute of Technology
              </p>
            </div>

            {/* Specialization */}
            <div className="about-card">
              <FaCode />
              <h3>Specialization</h3>
              <p>
                Full Stack Development
                <br />
                React • Flask • MongoDB
              </p>
            </div>

            {/* Career Goal */}
            <div className="about-card">
              <FaBullseye />
              <h3>Career Goal</h3>
              <p>
                To become a skilled Full Stack Developer and build
                scalable, user-friendly applications that solve
                real-world problems.
              </p>
            </div>

            {/* Learning */}
            <div className="about-card">
              <FaBookOpen />
              <h3>Tech Stack</h3>
              <p>
                React<br />
                Python<br />
                Flask<br />
                Git & GitHub
              </p>
            </div>

            {/* Hobbies */}
            <div className="about-card">
              <FaFutbol />
              <h3>Hobbies & Interests</h3>
              <p>
                🏏 Cricket <br />
                🏐 Volleyball & Outdoor Games<br />
                ✈️ Travel & Road Trips<br />
                📚 Reading Books<br />
                🎬 Watching Movies  
              </p>
            </div>

            {/* Location */}
            <div className="about-card">
              <FaMapMarkerAlt />
              <h3>Location</h3>
              <p>{personal.location}</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;