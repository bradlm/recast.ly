//instructions:
//1) make sure node.js is installed
//2) run npm install
//3) run install -g babel-cli
//4) run npm run initialize
//5) run npm start
class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // Initialize the state of App to keep track of all the videos in the video list and the current video in the player. Pass this state down as props to its children components. Continue to use the example data.
      videos: [], 
      currentVideo: null
    };
  }

  componentWillMount () {
    this.getYouTubeVideos('nyan cat');
  }

  getYouTubeVideos (query) {
    let options = {
      key: this.props.API_KEY, 
      query: query
    };
    this.props.searchYouTube(options, _.debounce(videos => {
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      });
    }, 500));
  }

  onClickHandler (video) {
    this.setState({
      currentVideo: video
    });
  }

  render () {
    return (
      <div>
        <Nav searchHandler={
          this.getYouTubeVideos.bind(this)
        }/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} onClickHandler={this.onClickHandler.bind(this)}/>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
