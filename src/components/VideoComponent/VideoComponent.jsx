// ReactPlayer
import ReactPlayer from "react-player";
// Styles
import "./videoComponent.scss";

const VideoComponent = ({ video })=> {
  return (
    <div className="video-component">
      <div className="video-container">
        <div className="player-container">
          <ReactPlayer
            url={video.url}
            className="desktop-player"
            width="50%"
            height="50%"
            controls={false}
          />
          <div className="desktop-title">
            <p>{video.title}</p>
            <p>{video.artist}</p>
          </div>
          <ReactPlayer
            url={video.url}
            className="mobile-player"
            width="100%"
            height="100%"
            controls={false}
          />
        </div>
      </div>
      <div className="mobile-title">
        <h2>{video.title}</h2>
        <h2>{video.artist}</h2>
      </div>
      <div className="video-details">
        <p>{`${video.details}`}</p>
      </div>
    </div>
  );
};

export default VideoComponent;
