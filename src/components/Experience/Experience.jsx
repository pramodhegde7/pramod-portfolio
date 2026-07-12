import "./Experience.css";
import experience from "../../constants/experience";

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">

        <h2 className="section-title">
          Education & <span>Experience</span>
        </h2>

        <div className="timeline">

          {experience.map((item, index) => (

            <div className="timeline-item" key={index}>

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <span className="timeline-date">
                  {item.duration}
                </span>

                <h3>{item.title}</h3>

                <h4>{item.company}</h4>

                <p>{item.description}</p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;