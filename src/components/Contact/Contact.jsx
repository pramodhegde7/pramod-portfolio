import { useState } from "react";
import "./Contact.css";

import personal from "../../constants/personal";
import socials from "../../constants/socials";

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.contact.email);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const github = socials.find(
    (item) => item.name === "GitHub"
  );

  const linkedin = socials.find(
    (item) => item.name === "LinkedIn"
  );

  const GithubIcon = github.icon;
  const LinkedinIcon = linkedin.icon;

  return (
    <section className="contact" id="contact">
      <div className="container">

        <div className="section-title">

          <h2>
            Contact <span>Me</span>
          </h2>

          <h4>{personal.connect.subtitle}</h4>

          <p>{personal.connect.description}</p>

        </div>

        <div className="contact-grid">

          {/* Email */}

          <div className="contact-card left">

            <h3>
              📧 Email
            </h3>

            <p>{personal.contact.email}</p>

            <button
              className="contact-link"
              onClick={copyEmail}
            >
              {copied
                ? "✓ Email Copied"
                : "Copy Email →"}
            </button>

          </div>

          {/* GitHub */}

          <div className="contact-card right">

            <h3>
              <GithubIcon />
              GitHub
            </h3>

            <p>github.com/pramodhegde7</p>

            <a
              href={personal.contact.github}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub →
            </a>

          </div>

          {/* LinkedIn */}

          <div className="contact-card left">

            <h3>
              <LinkedinIcon />
              LinkedIn
            </h3>

            <p>linkedin.com/in/pramodhegde7</p>

            <a
              href={personal.contact.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              View LinkedIn →
            </a>

          </div>

          {/* Resume */}

          <div className="contact-card right">

            <h3>
              📄 Resume
            </h3>

            <p>Latest Portfolio Resume</p>

            <a
              href={personal.contact.resume}
              target="_blank"
              rel="noreferrer"
            >
              Download Resume →
            </a>

          </div>

          {/* Current Status */}

          <div className="contact-card full">

            <h3>
              🎓 {personal.connect.current.title}
            </h3>

            <p>
              <strong>
                {personal.connect.current.role}
              </strong>

              <br />

              {personal.connect.current.organization}
            </p>

            <div className="availability">

              {personal.connect.current.availability.map(
                (item, index) => (
                  <span key={index}>
                    🟢 {item}
                  </span>
                )
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;