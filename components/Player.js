import React, { Component, useState } from "react";
import { findDOMNode } from "react-dom";
import { hot } from "react-hot-loader";
import screenfull from "screenfull";

import ReactPlayer from "react-player";
import { Icon } from "@iconify/react";
import Duration from "./Duration";
import Keyevent from "react-keyevent";

class App extends React.Component {
  state = {
    url: null,
    pip: false,
    playing: true,
    controls: false,
    light: false,
    volume: 1,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    info: false,
    full: false,
  };

  load = (url) => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false,
    });
  };

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing });
  };

  handleStop = () => {
    this.setState({ url: null, playing: false });
  };

  handleToggleControls = () => {
    const url = this.state.url;
    this.setState(
      {
        controls: !this.state.controls,
        url: null,
      },
      () => this.load(url)
    );
  };

  handleToggleLight = () => {
    this.setState({ light: !this.state.light });
  };

  handleToggleLoop = () => {
    this.setState({ loop: !this.state.loop });
  };

  handleVolumeChange = (e) => {
    this.setState({ volume: parseFloat(e.target.value) });
  };

  handleToggleMuted = () => {
    this.setState({ muted: !this.state.muted });
  };

  handleSetPlaybackRate = (e) => {
    this.setState({ playbackRate: e.target.value });
  };

  handleOnPlaybackRateChange = (speed) => {
    this.setState({ playbackRate: parseFloat(speed) });
  };

  handleTogglePIP = () => {
    this.setState({ pip: !this.state.pip });
  };

  handlePlay = () => {
    console.log("onPlay");
    this.setState({ playing: true });
  };

  handleEnablePIP = () => {
    console.log("onEnablePIP");
    this.setState({ pip: true });
  };

  handleDisablePIP = () => {
    console.log("onDisablePIP");
    this.setState({ pip: false });
  };

  handlePause = () => {
    console.log("onPause");
    this.setState({ playing: false });
  };

  handleSeekMouseDown = (e) => {
    this.setState({ seeking: true });
  };

  handleSeekChange = (e) => {
    this.setState({ played: parseFloat(e.target.value) });
  };

  handleSeekMouseUp = (e) => {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  };

  handleProgress = (state) => {
    console.log("onProgress", state);
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  };

  handleToogleInfo = () => {
    this.setState({ info: !this.state.info });
  };

  handleEnded = () => {
    console.log("onEnded");
    this.setState({ playing: this.state.loop });
  };

  handleDuration = (duration) => {
    console.log("onDuration", duration);
    this.setState({ duration });
  };

  handleClickFullscreen = () => {
    var bar = document.getElementById("bar");
    screenfull.request(findDOMNode(bar));
    this.setState({ full: true });
    console.log(this.state.full);
    console.log(findDOMNode("bar"));
  };

  handleExitFullScreen = () => {
    screenfull.exit(findDOMNode(this.player));
    this.setState({ full: false });
    console.log(this.state.full);
  };

  renderLoadButton = (url, label) => {
    return <button onClick={() => this.load(url)}>{label}</button>;
  };

  ref = (player) => {
    this.player = player;
  };

  ref = (player) => {
    this.player = player;
  };

  componentDidMount() {
    this.showSaveCover();
  }

  showSaveCover() {
    this.setState({
      isWarning: true,
    });
    this.hideSaveCover();
  }

  hideSaveCover() {
    var self = this;
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      self.setState({
        isWarning: false,
      });
    }, 9999);
  }

  render() {
    const { url } = this.props;
    const {
      playing,
      controls,
      light,
      volume,
      muted,
      loop,
      played,
      loaded,
      duration,
      playbackRate,
      pip,
      info,
      full,
    } = this.state;
    const SEPARATOR = " · ";

    const onEsc = () => {
      console.log("ESC");
      screenfull.exit(findDOMNode(this.bar));
      this.setState({ full: false });
      console.log(this.state.full);
    };

    const onSpace = () => {
      this.setState({ playing: !this.state.playing });
      console.log(this.state.playing);
    };

    function cn(...classes) {
      return classes.filter(Boolean).join(" ");
    }

    return (
      <div id="bar">
        <Keyevent
          className="App"
          events={{
            onEsc,
            onSpace,
          }}
        >
          {played === 0 && loaded < 1 && (
            <>
              <div className="skeleton max-w-2xl sm:max-w-3xl mx-auto mt-4 sm:mt-8 animate-pulse w-full h-0 rounded-lg"></div>
            </>
          )}
          <div
            onTouchEnd={() => this.showSaveCover()}
            onMouseEnter={() => this.showSaveCover()}
            onMouseDown={() => this.showSaveCover()}
            onClick={() => this.showSaveCover()}
            className={cn(
              "mx-auto animate__animated animate__fadeIn z9",
              played === 0 && loaded < 1 ? "hidden" : "block",
              full === false
                ? "max-w-2xl sm:max-w-3xl "
                : "w-screen mx-auto h-screen min-w-screen"
            )}
          >
            <ReactPlayer
              ref={this.ref}
              className="rounded-lg mt-4 sm:mt-8 video react-player z-0"
              style={{ zIndex: 0 }}
              width="100%"
              height="0px"
              url={url}
              pip={pip}
              playing={playing}
              controls={controls}
              light={light}
              loop={loop}
              playbackRate={playbackRate}
              volume={volume}
              muted={muted}
              onReady={() => console.log("onReady")}
              onStart={() => console.log("onStart")}
              onPlay={this.handlePlay}
              onEnablePIP={this.handleEnablePIP}
              onDisablePIP={this.handleDisablePIP}
              onPause={this.handlePause}
              onBuffer={() => console.log("onBuffer")}
              onPlaybackRateChange={this.handleOnPlaybackRateChange}
              onSeek={(e) => console.log("onSeek", e)}
              onEnded={this.handleEnded}
              onError={(e) => console.log("onError", e)}
              onProgress={this.handleProgress}
              onDuration={this.handleDuration}
            />
          </div>
          {info === true ? (
            <div
              className={cn(
                "text-xs sm:text-sm text-zinc-200 absolute rounded-br-lg z-50 top-[10rem] sm:top-[9rem] px-4 sm:px-2 py-3 sm:py-16 leading-relaxed w-2/3 sm:w-1/3",
                full === false
                  ? "max-w-2xl sm:max-w-3xl mx-auto inset-x-0"
                  : "inset-x-0 left-0 sm:left-96"
              )}
            >
              <p>Video Information:</p>
              <p className="overflow-hidden flex flex-row flex-nowrap select-all">
                {url}
              </p>
              <p className="overflow-hidden flex flex-row flex-nowrap">
                loaded: {loaded}
              </p>
              <p className="overflow-hidden flex flex-row flex-nowrap">
                played: {played}
              </p>
              <p className="overflow-hidden flex flex-row flex-nowrap after:content-['x']">
                speed: {playbackRate}
              </p>
              <p>fullscreen: {full === false ? <>false</> : <>true</>}</p>
              <p className="">loop: {loop ? <>true</> : <>false</>}</p>
              <button onClick={this.handleToogleInfo}>
                [x] close this video's detail page
              </button>
            </div>
          ) : (
            <></>
          )}
          <div
            className={cn(
              "full width transition-all duration-500 flex flex-col inset-x-0 space-y-1.5 z-30 mt-2 px-4  py-2 rounded-lg",
              full === false
                ? "inset-x-0"
                : "absolute inset-0 top-96 sm:top-[36rem] bottom-96"
            )}
          >
            <div className="z-40 mx-auto flex flex-row justify-between space-x-4 sm:space-x-6">
              <div className="flex flex-row space-x-2">
                <button onClick={this.handleToggleMuted}>
                  {muted || volume === 0 ? (
                    <>
                      <Icon
                        className="w-4 h-4 sm:w-6 sm:h-6"
                        icon="foundation:volume-strike"
                      />
                    </>
                  ) : (
                    <>
                      <Icon
                        icon="foundation:volume"
                        className="w-4 h-4 sm:w-6 sm:h-6"
                      />
                    </>
                  )}
                </button>
                {muted === false ? (
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step="any"
                    value={volume}
                    onChange={this.handleVolumeChange}
                    className="volume w-12 sm:w-16 mt-2.5 sm:mt-3.5"
                  />
                ) : (
                  <input
                    type="range"
                    min={0}
                    max={0}
                    step="any"
                    value={volume}
                    onChange={this.handleVolumeChange}
                    className="volume w-12 sm:w-16 mt-2.5 sm:mt-3.5"
                  />
                )}
              </div>
              <div className="opacity-75 flex flex-row space-x-2 sm:space-x-4 text-xs sm:text-sm">
                {playbackRate === 0.5 && (
                  <button>
                    <Icon
                      className="opacity-50 font-bold w-6 h-6 sm:w-8 sm:h-8"
                      icon="bi:rewind-fill"
                    />
                  </button>
                )}
                {playbackRate === 0.75 && (
                  <button onClick={this.handleSetPlaybackRate} value="0.5">
                    <Icon
                      className="font-bold w-6 h-6 sm:w-8 sm:h-8"
                      icon="bi:rewind-fill"
                    />
                  </button>
                )}
                {playbackRate === 1 && (
                  <button onClick={this.handleSetPlaybackRate} value="0.75">
                    <Icon
                      className="font-bold w-6 h-6 sm:w-8 sm:h-8"
                      icon="bi:rewind-fill"
                    />
                  </button>
                )}
                {playbackRate === 1.5 && (
                  <button onClick={this.handleSetPlaybackRate} value="1">
                    <Icon
                      className="font-bold w-6 h-6 sm:w-8 sm:h-8"
                      icon="bi:rewind-fill"
                    />
                  </button>
                )}
                {playbackRate === 2 && (
                  <button onClick={this.handleSetPlaybackRate} value="1.5">
                    <Icon
                      className="font-bold w-6 h-6 sm:w-8 sm:h-8"
                      icon="bi:rewind-fill"
                    />
                  </button>
                )}
                <button onClick={this.handlePlayPause}>
                  {playing ? (
                    <>
                      <Icon
                        className="font-bold w-6 h-6 sm:w-8 sm:h-8"
                        icon="clarity:pause-solid"
                      />
                    </>
                  ) : (
                    <>
                      <Icon
                        className="font-bold w-6 h-6 sm:w-8 sm:h-8"
                        icon="clarity:play-solid"
                      />
                    </>
                  )}
                </button>
                {playbackRate === 0.5 && (
                  <button onClick={this.handleSetPlaybackRate} value={0.75}>
                    <Icon
                      className="font-bold w-6 h-6 sm:w-8 sm:h-8"
                      icon="bi:fast-forward-fill"
                    />
                  </button>
                )}
                {playbackRate === 0.75 && (
                  <button onClick={this.handleSetPlaybackRate} value={1}>
                    <Icon
                      className="font-bold w-6 h-6 sm:w-8 sm:h-8"
                      icon="bi:fast-forward-fill"
                    />
                  </button>
                )}
                {playbackRate === 1 && (
                  <button onClick={this.handleSetPlaybackRate} value={1.5}>
                    <Icon
                      className="font-bold w-6 h-6 sm:w-8 sm:h-8"
                      icon="bi:fast-forward-fill"
                    />
                  </button>
                )}
                {playbackRate === 1.5 && (
                  <button onClick={this.handleSetPlaybackRate} value={2}>
                    <Icon
                      className="font-bold w-6 h-6 sm:w-8 sm:h-8"
                      icon="bi:fast-forward-fill"
                    />
                  </button>
                )}
                {playbackRate === 2 && (
                  <button>
                    <Icon
                      className="opacity-50 font-bold w-6 h-6 sm:w-8 sm:h-8"
                      icon="bi:fast-forward-fill"
                    />
                  </button>
                )}
              </div>
              <div className="flex flex-row space-x-1.5 sm:space-x-3">
                {full === false ? (
                  <button onClick={this.handleClickFullscreen}>
                    <Icon
                      className="w-4 h-4 sm:w-6 sm:h-6 mt-0"
                      icon="mdi-light:fullscreen"
                    />
                  </button>
                ) : (
                  <button onClick={this.handleExitFullScreen}>
                    <Icon
                      className="w-4 h-4 sm:w-6 sm:h-6 mt-0"
                      icon="mdi-light:fullscreen"
                    />
                  </button>
                )}
                <button onClick={this.handleToogleInfo}>
                  <Icon
                    className="w-4 h-4 sm:w-6 sm:h-6 mt-0"
                    icon="mdi-light:information"
                  />
                </button>
                {pip === false ? (
                  <button onClick={this.handleEnablePIP}>
                    <Icon
                      className="w-4 h-4 sm:w-6 sm:h-6 mt-0"
                      icon="mdi-light:pin"
                    />
                  </button>
                ) : (
                  <button onClick={this.handleDisablePIP}>
                    <Icon
                      className="w-4 h-4 sm:w-6 sm:h-6 mt-0"
                      icon="mdi-light:pin-off"
                    />
                  </button>
                )}
              </div>
            </div>
            <div className="w-full flex flex-row space-x-4 mx-auto max-w-md center justify-between">
              <div className="mt-[0.15rem]">
                <Duration seconds={duration * played} />
              </div>
              <div className="w-3/4">
                <input
                  type="range"
                  min={0}
                  max={1}
                  step="any"
                  value={played}
                  onMouseDown={this.handleSeekMouseDown}
                  onChange={this.handleSeekChange}
                  onMouseUp={this.handleSeekMouseUp}
                  onTouchMove={this.handleSeekChange}
                  onTouchStart={this.handleSeekMouseDown}
                  onTouchEnd={this.handleSeekMouseUp}
                  className="-mt-2 mb-1.5 sm:mb-3 w-full"
                />
              </div>
              <div className="mt-[0.15rem]">
                -<Duration seconds={duration * (1 - played)} />
              </div>
            </div>
          </div>
        </Keyevent>
      </div>
    );
  }
}

export default hot(module)(App);
