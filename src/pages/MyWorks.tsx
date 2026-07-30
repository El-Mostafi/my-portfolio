import { Link } from "react-router-dom";
import { config } from "../config";
import "./MyWorks.css";

const MyWorks = () => {
  return (
    <div className="myworks-page">
      <div className="myworks-header">
        <Link to="/" className="back-button" data-cursor="disable">
          Back to Home
        </Link>
        <h1>
          All <span>Works</span>
        </h1>
        <p>A collection of my projects and contributions</p>
      </div>

      <div className="myworks-grid">
        {config.projects.map((project, index) => (
          <a
            className="myworks-card"
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="disable"
          >
            <div className="myworks-card-number">0{index + 1}</div>
            <div className="myworks-card-image">
              <div className="myworks-card-fallback">
                <span>{project.category}</span>
                <h4>{project.title}</h4>
              </div>
              <img
                src={project.image}
                alt={project.title}
                onError={(event) => event.currentTarget.classList.add("image-hidden")}
              />
            </div>
            <div className="myworks-card-info">
              <h3>{project.title}</h3>
              <p className="myworks-card-category">{project.category}</p>
              <p className="myworks-card-description">{project.description}</p>
              {project.technologies && (
                <p className="myworks-card-tech">{project.technologies}</p>
              )}
              <span className="myworks-card-link">Visit Website</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MyWorks;
