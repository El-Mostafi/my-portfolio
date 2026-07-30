import "./styles/Career.css";
import "./styles/Education.css";
import { config } from "../config";

const Education = () => {
  return (
    <section className="education-section section-container">
      <div className="career-container">
        <h2>
          My <span>education</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline education-timeline">
            <div className="career-dot education-dot"></div>
          </div>
          {config.education.map((item, index) => (
            <div key={index} className="career-info-box education-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.degree}</h4>
                  <h5>{item.institution}</h5>
                </div>
                <h3 className="career-period">{item.period}</h3>
              </div>
              <div className="education-location">
                <span>Location</span>
                <p>{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;