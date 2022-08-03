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
  {
    title: "Soviet Connection — The Theme from GTA IV",
    id: "5040401",
  },
  {
    title: "Theme From San Andreas",
    id: "26758474",
  },
  {
    title: "Buy a Gun for Your Son",
    id: "27214083",
  },
  {
    title: "Undead Funeral March",
    id: "19606011",
  },
  {
    title: "И вновь продолжается бой",
    id: "567018762",
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
  const [searchValue, setSearchValue] = useState("");
  const SearchFiltered = data.filter((data) =>
    data.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div className="max-w-5xl mx-auto p-16 sm:p-64 -mt-0 sm:-mt-36 -mb-96">
      <h1 className="font-bold text-4xl mb-4">Songs</h1>
      <div className="flex flex-row sticky top-0 py-1 border-b bg-white w-full z-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mt-[1.9rem] ml-3 absolute opacity-80"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          className="hover:border-zinc-800 focus:border-black focus:outline-none border opacity-70 rounded-lg px-10 py-2 text-sm my-5 w-2/3"
          placeholder="Search..."
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <span className="mt-6 flex flex-col space-y-4 text-left">
        {SearchFiltered.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            onClick={() => {
              setPlaying(
                `https://music.163.com/song/media/outer/url?id=${item.id}.mp3`
              );
              setIsPlaying(item.title);
            }}
          />
        ))}
        {!SearchFiltered.length && (
          <p className="text-sm opacity-80 py-3 border-b font-medium">
            No songs were found.
          </p>
        )}
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
                open(
                  `https://music.163.com/song/media/outer/url?id=${json}.mp3`
                )
              }
              className="bg-black text-white rounded-lg px-8 py-2 text-sm border-black border trnasition-all duration-500 hover:bg-white hover:text-black hover:border hover:border-black"
            >
              Download Now
            </button>
          </div>
        </>
      )}
      <div className="text-sm py-3 bg-white border-t sticky bottom-0">
        <h1 className="font-medium mt-4 sm:mt-0 opacity-60 text-center">
          Now Playing: {isPlaying}
        </h1>
        <div className="mt-5 max-w-xs mx-auto opacity-70 flex flex-row space-x-4 justify-between">
          <ReactPlayer
            url={playing}
            controls={true}
            playing={true}
            height="36px"
            width="100%"
          />
        </div>
        <footer>
          <h2 className="font-semibold opacity-40 text-xs sm:text-sm mt-8 mb-4">
            Copyright ©️ 2022 Cloudflare233.
          </h2>
        </footer>
      </div>
    </div>
  );
}
