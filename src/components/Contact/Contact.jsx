import "./Contact.css";
import personal from "../../constants/personal";
import socials from "../../constants/socials";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-title">
        <h2>
          Contact <span>Me</span>
        </h2>
        <p>Let's connect and build something amazing together.</p>
      </div>

      <div className="contact-grid">
        {/* Email */}
        <div className="contact-card">
          <h3>📧 Email</h3>
          <a href={`mailto:${personal.email}`}>
            {personal.email}
          </a>
        </div>

        {/* Location */}
        <div className="contact-card">
          <h3>📍 Location</h3>
          <p>{personal.location}</p>
        </div>

        {/* Social Links */}
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <div className="contact-card" key={social.name}>
              <h3>
                <Icon
                  style={{
                    marginRight: "8px",
                    verticalAlign: "middle",
                  }}
                />
                {social.name}
              </h3>

              <a
                href={social.link}
                target="_blank"
                rel="noreferrer"
              >
                Open {social.name}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Contact;