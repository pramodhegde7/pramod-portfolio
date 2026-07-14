import "./Footer.css";

import personal from "../../constants/personal";
import socials from "../../constants/socials";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <h2>{personal.footer.title}</h2>

        <p>{personal.footer.description}</p>

        <div className="footer-socials">

          {socials.map((social) => {

            const Icon = social.icon;

            return (

              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <Icon />
              </a>

            );

          })}

        </div>

        <div className="footer-divider"></div>

        <p className="footer-copyright">
          {personal.footer.copyright}
        </p>

      </div>

    </footer>
  );
}

export default Footer;