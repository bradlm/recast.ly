var VideoPlayer = ({video}) => (
  !video ? 
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/insM7oUYNOE?autoplay=1" allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>Looks like things aren't working.</h3>
        <div>Try shortening your search or reloading the page.</div>
      </div>
    </div> 
  : <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${video.id.videoId}`} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{video.snippet.title}</h3>
        <div>{video.snippet.description}</div>
      </div>
    </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  //video: React.PropTypes.object.isRequired bugged
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;
