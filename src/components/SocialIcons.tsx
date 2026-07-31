import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import HoverLinks from "./HoverLinks";
import { config } from "../config";

const SocialIcons = () => {
  return (
    <div className="icons-section">
      <nav className="social-icons" aria-label="Social links">
        <a
          href={config.social.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
          data-cursor="disable"
        >
          <FaGithub />
        </a>
        <a
          href={config.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
          data-cursor="disable"
        >
          <FaLinkedinIn />
        </a>
        <a
          href={`mailto:${config.social.email}`}
          aria-label="Email Mohamed"
          title="Email"
          data-cursor="disable"
        >
          <MdEmail />
        </a>
      </nav>
      <a
        className="resume-button"
        href={config.social.resume}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="disable"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;