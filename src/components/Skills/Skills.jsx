import "./Skills.css";
import skills from "../../constants/skills";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">

        <h2 className="section-title">
          My <span>Skills</span>
        </h2>

        <div className="skills-grid">

          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div className="skill-card" key={index}>

                <div className="skill-header">

                  <div className="skill-title">
                    <Icon className="skill-icon" />
                    <h3>{skill.name}</h3>
                  </div>

                  <span className="skill-level">
                    {skill.level}
                  </span>

                </div>

                <div className="progress-bar">

                  <div
                    className="progress-fill"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>

                </div>

                <p className="skill-percent">
                  {skill.percentage}%
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Skills;