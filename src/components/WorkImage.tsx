import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image?: string;
  alt?: string;
  title: string;
  category: string;
  video?: string;
  link?: string;
}

const WorkImage = ({ image, alt, title, category, video: videoSource, link }: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const [imageFailed, setImageFailed] = useState(false);

  const handleMouseEnter = async () => {
    if (videoSource) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${videoSource}`);
      const blob = await response.blob();
      setVideo(URL.createObjectURL(blob));
    }
  };

  const projectVisual = image && !imageFailed ? (
    <img src={image} alt={alt ?? title} onError={() => setImageFailed(true)} />
  ) : (
    <div className="work-image-fallback">
      <span>{category}</span>
      <h5>{title}</h5>
    </div>
  );

  const content = (
    <>
      {link && (
        <div className="work-link">
          <MdArrowOutward />
        </div>
      )}
      {projectVisual}
      {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
    </>
  );

  return (
    <div className="work-image">
      {link ? (
        <a
          className="work-image-in"
          href={link}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setIsVideo(false)}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="disable"
        >
          {content}
        </a>
      ) : (
        <div
          className="work-image-in"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setIsVideo(false)}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default WorkImage;
