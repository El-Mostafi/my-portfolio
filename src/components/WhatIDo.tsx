import "./styles/WhatIDo.css";
import { config } from "../config";

const WhatIDo = () => {
  const { profile } = config.skills;

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <span className="what-title-line">
            &nbsp;I<span className="do-h2"> DO</span>
          </span>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in what-box-in-single">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <article className="what-content what-content-single">
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>{profile.title}</h3>
              <h4>{profile.description}</h4>
              <p>{profile.details}</p>
              <h5>Core capabilities</h5>
              <div className="what-content-flex">
                {profile.capabilities.map((capability) => (
                  <div key={capability} className="what-tags">
                    {capability}
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;