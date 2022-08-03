import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import ReactPlayer from "react-player";
import Audio from "../components/Audio";

const data = [
  {
    title: "Good Morning",
    id: 563431633,
    url: "http://m7.music.126.net/20220803114052/d95b5b0430256f69d0e61486e41a78ff/ymusic/972a/423b/232a/80fac506f8a8f26c276838d6e18a128b.mp3",
    br: 320000,
    size: 6469007,
    md5: "80fac506f8a8f26c276838d6e18a128b",
    code: 200,
    expi: 1200,
    type: "mp3",
    gain: 0,
    fee: 0,
    uf: null,
    payed: 0,
    flag: 257,
    canExtend: false,
    freeTrialInfo: null,
    level: "exhigh",
    encodeType: "mp3",
    freeTrialPrivilege: {
      resConsumable: false,
      userConsumable: false,
      listenType: null,
    },
    freeTimeTrialPrivilege: {
      resConsumable: false,
      userConsumable: false,
      type: 0,
      remainTime: 0,
    },
    urlSource: 0,
    rightSource: 0,
    podcastCtrp: null,
  },
  {
    title: "Singing in the rain",
    id: 1394270885,
    url: "http://m8.music.126.net/20220803114052/bf24eee658aa14ff603e5fa1b10694ac/ymusic/0008/045d/035e/7b2adc6c3d3793b6efb14477ed2aba9a.mp3",
    br: 128000,
    size: 2863482,
    md5: "7b2adc6c3d3793b6efb14477ed2aba9a",
    code: 200,
    expi: 1200,
    type: "mp3",
    gain: -1.5604,
    fee: 8,
    uf: null,
    payed: 0,
    flag: 4,
    canExtend: false,
    freeTrialInfo: null,
    level: "standard",
    encodeType: "mp3",
    freeTrialPrivilege: {
      resConsumable: false,
      userConsumable: false,
      listenType: null,
    },
    freeTimeTrialPrivilege: {
      resConsumable: false,
      userConsumable: false,
      type: 0,
      remainTime: 0,
    },
    urlSource: 0,
    rightSource: 0,
    podcastCtrp: null,
  },
  {
    title: "Memory",
    id: 1299346137,
    url: "http://m7.music.126.net/20220803130935/347ff9fb216369e86c78e31e83915799/ymusic/46cc/9b11/3c80/c376c1201d33101e2587ace0b1290f88.mp3",
    br: 128000,
    size: 3996987,
    md5: "c376c1201d33101e2587ace0b1290f88",
    code: 200,
    expi: 1200,
    type: "mp3",
    gain: -0.7854,
    fee: 8,
    uf: null,
    payed: 0,
    flag: 0,
    canExtend: false,
    freeTrialInfo: null,
    level: "standard",
    encodeType: "mp3",
    freeTrialPrivilege: {
      resConsumable: false,
      userConsumable: false,
      listenType: null,
    },
    freeTimeTrialPrivilege: {
      resConsumable: false,
      userConsumable: false,
      type: 0,
      remainTime: 0,
    },
    urlSource: 0,
    rightSource: 0,
    podcastCtrp: null,
  },
];

function Card({ onClick, title, key }) {
  return (
    <button
      className="border-b text-left text-sm opacity-80 font-medium transition-all duration-500 py-3"
      key={key}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default function Home() {
  const [playing, setPlaying] = useState("");
  const [lan, setLan] = useState("en");
  const [add, setAdd] = useState(false);
  const [json, setJSON] = useState("");
  const [isPlaying, setIsPlaying] = useState("");
  const [mute, setMute] = useState(false);
  const [pause, setPause] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [control, setControl] = useState(false);
  return (
    <div className="max-w-5xl mx-auto p-16 sm:p-64 -mt-0 sm:-mt-36">
      <h1 className="font-bold text-4xl mb-8">Songs</h1>
      <span className="flex flex-col space-y-4 text-left">
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            onClick={() => {
              setPlaying(item.url);
              setIsPlaying(item.title);
            }}
          />
        ))}
      </span>
      <button
        onClick={() => setAdd(add === true ? false : true)}
        className="text-sm my-8 opacity-80 font-medium transition-all duration-500 py-3 border-b w-full flex flex-row space-x-8"
      >
        {add === false && (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Add a new one
          </>
        )}
        {add === true && (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Cancel Process
          </>
        )}
      </button>
      {add === true && (
        <>
          <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-3 sm:space-y-0">
            <div className="w-full sm:w-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute opacity-50 h-5 w-5 mt-2.5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <input
                onChange={(e) => setJSON(e.target.value)}
                className="bg-white border rounded-lg text-sm focus:outline-none hover:border-zinc-500 focus:border-zinc-600 px-10 py-2 w-full"
                placeholder="Add your ID"
              />
            </div>
            <button
              onClick={() =>
                open(`https://cf233-apis.vercel.app/song/url?id=${json}`)
              }
              className="bg-black text-white rounded-lg px-8 py-2 text-sm border-black border trnasition-all duration-500 hover:bg-white hover:text-black hover:border hover:border-black"
            >
              Get your JSON
            </button>
          </div>
          <div className="my-4 border-b py-8">
            <h1 className="opacity-80 font-semibold text-sm my-4">
              How to use?
            </h1>
            <p className="opacity-70 font-normal text-xs">
              Please copy the JSON you created just now to the head of the
              `index.js` to replace the orgin word. And then delete the head of
              the code, and turn `data:` to `const data =`. And you make it!
              Just add the title of the music. And you got a lite music player.
            </p>
          </div>
        </>
      )}
      <div className="text-sm py-8 opacity-60 border-t">
        <h1 className="font-medium text-center">Now Playing: {isPlaying}</h1>
      </div>
      <div className="-mt-3 mb-4 max-w-xs mx-auto opacity-70 flex flex-row px-16 py-2 space-x-4 justify-between">
        <button onClick={() => setMute(mute === false ? true : false)}>
          {mute === false && (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:w-6 sm:h-6"
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
            </>
          )}
          {mute === true && (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:w-6 sm:h-6"
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
            </>
          )}
        </button>
        <button
          className=""
          onClick={() => setPause(pause === false ? true : false)}
        >
          {pause === true && (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:w-6 sm:h-6"
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
            </>
          )}
          {pause === false && (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:w-6 sm:h-6"
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
            </>
          )}
        </button>
        <button onClick={()=>setControl(control === false ? true : false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:w-5 sm:h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
        </button>
      </div>
      <ReactPlayer
        controls={control}
        url={playing}
        muted={mute}
        playing={pause}
        playbackRate={speed}
        height="36px"
        width="100%"
      />
      <footer>
        <h2 className="font-semibold opacity-40 text-xs sm:text-sm my-16">Copyright ©️ 2022 Cloudflare233.</h2>
      </footer>
    </div>
  );
}
