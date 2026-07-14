import "./Skills.css";
import skills from "../../constants/skills";

const categories = ["Frontend", "Backend", "Database", "Tools"];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">

        <h2 className="section-title">
          Technical <span>Skills</span>
        </h2>

        {categories.map((category) => (
          <div key={category} className="skills-category">

            <h3 className="category-title">{category}</h3>

            <div className="skills-grid">

              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => {
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

                    </div>
                  );
                })}

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Skills;