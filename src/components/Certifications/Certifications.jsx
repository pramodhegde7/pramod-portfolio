import { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

import "./Certifications.css";
import certificates from "../../constants/certificates";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Certifications() {
  const [openLightbox, setOpenLightbox] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const [expandedCategory, setExpandedCategory] =
    useState("programming");

  // Categories having at least one certificate
  const visibleCategories = certificates.filter(
    (category) => category.certificates.length > 0
  );

  // Automatically show cards if only one category exists
  const singleCategory = visibleCategories.length === 1;

  return (
    <section
      className="certifications"
      id="certifications"
    >
      <div className="container">

        <h2 className="section-title">
          My <span>Certificates</span>
        </h2>

        {visibleCategories.map((category) => (

          <div
            className="certificate-category"
            key={category.id}
          >

            {/* Category Header */}

            {!singleCategory && (

              <div
                className="category-title"
                onClick={() =>
                  setExpandedCategory(
                    expandedCategory === category.id
                      ? ""
                      : category.id
                  )
                }
              >

                <div className="category-left">

                  <img
                    src={category.certificates[0].image}
                    alt={category.title}
                    className="category-preview"
                  />

                  <div className="category-details">

                    <div className="category-heading">

                      <span className="category-icon">
                        {category.icon}
                      </span>

                      <h3>{category.title}</h3>

                    </div>

                    <p>

                      {category.certificates
                        .slice(0, 2)
                        .map((item) => item.title)
                        .join(" • ")}

                      {category.certificates.length > 2 &&
                        ` • +${category.certificates.length - 2} More`}

                    </p>

                    <div className="certificate-count">

                      {category.certificates.length}

                      {" "}

                      {category.certificates.length === 1
                        ? "Certificate"
                        : "Certificates"}

                    </div>

                  </div>

                </div>

                <div className="category-right">

                  {expandedCategory === category.id ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronRight />
                  )}

                </div>

              </div>

            )}

            {(singleCategory ||
              expandedCategory === category.id) && (

              <div className="certificate-grid">

                {category.certificates.map((certificate) => (

                  <div
                    className="certificate-card"
                    key={certificate.id}
                  >

                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="certificate-image"
                    />

                    <div className="certificate-content">

                      <h4>{certificate.title}</h4>

                      <p>{certificate.issuer}</p>

                      <div
                        className="view-certificate"
                        onClick={() => {
                          setSelectedCertificate(certificate);
                          setOpenLightbox(true);
                        }}
                      >
                        ↗ View Certificate
                      </div>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>

        ))}

      </div>

      {selectedCertificate && (

        <Lightbox
          open={openLightbox}
          close={() => {
            setOpenLightbox(false);
            setSelectedCertificate(null);
          }}
          slides={[
            {
              src: selectedCertificate.image,
            },
          ]}
        />

      )}

    </section>
  );
}

export default Certifications;