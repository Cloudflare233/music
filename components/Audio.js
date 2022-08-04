import React, { Component } from "react";

class Audio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rateList: [0.5, 0.75, 1.0, 1.25, 1.5, 2.0],
      playRate: 1.0,
      isPlay: true,
      isEnd: false,
      isMuted: false,
      volume: 100,
      allTime: 0,
      currentTime: 0,
    };
  }

  componentDidMount() {}

  formatSecond(time) {
    const second = Math.floor(time % 60);
    let minite = Math.floor(time / 60);
    return `${minite}:${second >= 10 ? second : `0${second}`}`;
  }

  // 该视频已准备好开始播放
  onCanPlay = () => {
    const { id } = this.props;
    const audio = document.getElementById(`audio${id}`);
    audio.play();
    this.setState({
      allTime: audio.duration,
      isPlay: true,
    });
  };

  onEnded = () => {
    const { id } = this.props;
    const audio = document.getElementById(`audio${id}`);
    this.setState({
      allTime: audio.duration,
      isEnd: true,
      isPlay: false,
    });
  };

  playAudio = () => {
    const { id } = this.props;
    const audio = document.getElementById(`audio${id}`);
    audio.play();
    this.setState({
      isPlay: true,
    });
  };

  pauseAudio = () => {
    const { id } = this.props;
    const audio = document.getElementById(`audio${id}`);
    audio.pause();
    this.setState({
      isPlay: false,
    });
  };

  onMuteAudio = () => {
    const { id } = this.props;
    const audio = document.getElementById(`audio${id}`);
    this.setState({
      isMuted: !audio.muted,
    });
    audio.muted = !audio.muted;
  };

  changeTime = (e) => {
    const { value } = e.target;
    const { id } = this.props;
    const audio = document.getElementById(`audio${id}`);
    this.setState({
      currentTime: value,
    });
    audio.currentTime = value;
    if (value === audio.duration) {
      this.setState({
        isPlay: false,
      });
    }
  };

  // 当前播放位置改变时执行
  onTimeUpdate = () => {
    const { id } = this.props;
    const audio = document.getElementById(`audio${id}`);

    this.setState({
      currentTime: audio.currentTime,
    });
    if (audio.currentTime === audio.duration) {
      this.setState({
        isPlay: false,
      });
    }
  };

  changeVolume = (e) => {
    const { value } = e.target;
    const { id } = this.props;
    const audio = document.getElementById(`audio${id}`);
    audio.volume = value / 100;

    this.setState({
      volume: value,
      isMuted: !value,
    });
  };

  // 倍速播放
  changePlayRate = (num) => {
    this.audioDom.playbackRate = num;
    this.setState({
      playRate: num,
    });
  };

  render() {
    const { src, id, isPlaying } = this.props;

    const {
      isPlay,
      isMuted,
      isEnd,
      volume,
      allTime,
      currentTime,
      rateList,
      playRate,
    } = this.state;

    return (
      <div className="mt-3">
        <h1 className="text-sm font-medium mt-2 mb-5 sm:mt-0 opacity-60 text-center">
          Now Playing: {isPlaying}
        </h1>
        <audio
          id={`audio${id}`}
          src={src}
          ref={(audio) => {
            this.audioDom = audio;
          }}
          preload={"auto"}
          onCanPlay={this.onCanPlay}
          onTimeUpdate={this.onTimeUpdate}
          onEnded={this.onEnded}
        >
          <track src={src} kind="captions" />
        </audio>
        <div className="w-full sm:w-2/3 flex flex-row">
          <div className="w-2/3 flex flex-row">
            <div className="ml-8 sm:ml-16" onClick={this.onMuteAudio}>
              {isMuted ? (
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                      clipRule="evenodd"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                    />
                  </svg>
                </div>
              ) : (
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                    />
                  </svg>
                </div>
              )}
            </div>
            <div>
              <input
                type="range"
                onChange={this.changeVolume}
                value={isMuted ? 0 : volume}
                className="-mt-3"
              />
            </div>
          </div>
          <div className="-mt-2">
            {isPlay ? (
              <div
                onClick={this.pauseAudio}
                className="cursor-pointer -ml-8 sm:-ml-16 transition-all space-x-2 rounded-3xl duration-500 px-8 py-2  hover:bg-zinc-200 dark:hover:bg-zinc-800 flex flex-row"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="mt-0.5">Pause</div>
              </div>
            ) : (
              <div
                onClick={this.playAudio}
                className="cursor-pointer -ml-8 sm:-ml-16 transition-all space-x-2 rounded-3xl duration-500 px-8 py-2  hover:bg-zinc-100 dark:hover:bg-zinc-900 flex flex-row"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="mt-0.5">Play</div>
              </div>
            )}
          </div>
        </div>

        <div className="max-w-3xl mx-auto w-full flex flex-row">
          <div className="ml-6 mt-3">{this.formatSecond(currentTime)}</div>
          <input
            type="range"
            step="0.01"
            max={allTime}
            value={currentTime}
            onChange={this.changeTime}
            className="ml-3 mr-3  mt-5 w-full max-w-2xl mx-auto bg-black dark:bg-white"
          />
          <div className="mr-6 mt-3">{this.formatSecond(allTime)}</div>
        </div>
        <div className="mt-4 text-xs sm:text-sm">
          <span>Speed：</span>
          {rateList &&
            rateList.length > 0 &&
            rateList.map((item) => (
              <button
                key={item}
                className={
                  playRate === item
                    ? "ml-1 mr-1 sm:ml-2 sm:mr-2 after:content-['x']"
                    : "opacity-50 ml-1 mr-1 sm:ml-2 sm:mr-2 after:content-['x']"
                }
                onClick={() => this.changePlayRate(item)}
              >
                {item}
              </button>
            ))}
        </div>
      </div>
    );
  }
}

export default Audio;
