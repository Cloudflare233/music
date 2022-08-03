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
  },
  {
    title: "Singing in the rain",
    id: 1394270885,
  },
  {
    title: "Memory",
    id: "1299346137",
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
              setPlaying(`https://music.163.com/song/media/outer/url?id=${item.id}.mp3`);
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
            Create a new download
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
            Cancel Download
          </>
        )}
      </button>
      {add === true && (
        <>
          <div className="my-8 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-3 sm:space-y-0">
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
                placeholder="Paste the ID here"
              />
            </div>
            <button
              onClick={() =>
                open(`https://music.163.com/song/media/outer/url?id=${json}.mp3`)
              }
              className="bg-black text-white rounded-lg px-8 py-2 text-sm border-black border trnasition-all duration-500 hover:bg-white hover:text-black hover:border hover:border-black"
            >
              Download Now
            </button>
          </div>
        </>
      )}
      <div className="text-sm py-8 opacity-60 border-t">
        <h1 className="font-medium text-center">Now Playing: {isPlaying}</h1>
      </div>
      <div className="-mt-3 mb-4 max-w-xs mx-auto opacity-70 flex flex-row py-2 space-x-4 justify-between">
      <ReactPlayer
        url={playing}
        controls={true}
        playing={true}
        height="36px"
        width="100%"
      />
      </div>
      <footer>
        <h2 className="font-semibold opacity-40 text-xs sm:text-sm my-16">
          Copyright ©️ 2022 Cloudflare233.
        </h2>
      </footer>
    </div>
  );
}

