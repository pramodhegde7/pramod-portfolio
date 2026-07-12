import "./Certifications.css";
import certificates from "../../constants/certificates";

function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <div className="container">

        <h2 className="section-title">
          My <span>Certifications</span>
        </h2>

        <div className="certificate-grid">

          {certificates.map((certificate, index) => (
            <div className="certificate-card" key={index}>

              <h3>{certificate.title}</h3>

              <p>{certificate.issuer}</p>

              <span>{certificate.year}</span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;