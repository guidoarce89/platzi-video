import React, { Component } from 'react';
import VideoPlayerLayout from "../components/video-player-layout";
import Video from "../components/video";
import Title from "../components/title";
import PlayPause from "../components/play-pause";
import Timer from "../components/timer";
import Controls from '../components/video-player-controls';
import { formattedTime } from '../../utilities/utilities';
import ProgressBar from "../components/progress-bar";
import Spinner from "../components/spinner";
import Volume from "../components/volume";
import FullScreen from "../components/full-screen";

class VideoPlayer extends Component {
  state = {
    pause: true,
    loading: false,
    duration: 0,
    currentTime: 0
  };

  handleToggleClick = (event) => {
    this.setState({
      pause: !this.state.pause
    });
  };

  handleLoadedMetadata = (event) => {
    this.video = event.target;
    this.setState({
      duration: this.video.duration
    });
  };

  handleTimeUpdate = (event) => {
    this.setState({
      currentTime: this.video.currentTime
    });
  };

  handleProgressChange = (event) => {
    this.video.currentTime = event.target.value;
  };

  handleVolumeChange = (event) => {
    this.video.volume = event.target.value;
  };

  handleFullScreenClick = (event) => {
    if (!document.webkitIsFullScreen) {
      this.player.webkitRequestFullScreen();
    } else {
      document.webkitExitFullscreen();
    }
  };

  handleSeeking = (event) => {
    this.setState({
      loading: true
    });
  };

  handleSeeked = (event) => {
    this.setState({
      loading: false
    });
  };

  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    });
  }

  setRef = (element) => {
    this.player = element;
  };

  render() {
    return (
      <VideoPlayerLayout
        setRef={this.setRef}
      >
        <Title
          title={this.props.title}
        />
        <Controls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.handleToggleClick}
          />
          <Timer
            currentTime={formattedTime(this.state.currentTime)}
            duration={formattedTime(this.state.duration)}
          />
          <ProgressBar
            currentTime={this.state.currentTime}
            duration={this.state.duration}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            handleVolumeChange={this.handleVolumeChange}
          />
          <FullScreen
            handleFullScreenClick={this.handleFullScreenClick}
          />
        </Controls>
        <Spinner
          loading={this.state.loading}
        />
        <Video
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          src={this.props.src}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;