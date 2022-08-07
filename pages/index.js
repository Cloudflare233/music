import Head from "next/head";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useTheme } from "next-themes";
import Audio from "../components/Audio";

const data = [
  {
    title: "Good Morning",
    id: 563431633,
    nextTitle: "Singing in the rain",
    nextID: "1394270885",
  },
  {
    title: "Singing in the rain",
    id: 1394270885,
    nextTitle: "Memory",
    nextID: "1299346137",
  },
  {
    title: "Beautiful Girl",
    id: "543098422",
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
    title: "Aurora Borealis",
    id: "29027341",
  },
  {
    title: "Buy a Gun for Your Son",
    id: "27214083",
  },
  {
    title: "The Simpsons Main Title",
    id: "3590788",
  },
  {
    title: "HOI4 main the meallies",
    id: "423406345",
  },
  {
    title: "Just Blue",
    id: "19067286",
  },
  {
    title: "Undead Funeral March",
    id: "19606011",
  },
  {
    title: "La Mer",
    id: "31152553",
  },
  {
    title: "И вновь продолжается бой",
    id: "567018762",
  },
  {
    title: "Whatever Will Be, Will Be",
    id: "5197167",
  },
  {
    title: "Tie A Yellow Ribbon Round The Old Oak Tree",
    id: "5183712",
  },
  {
    title: "La Chanson Pour Anna",
    id: "31854726",
  },
  {
    title: "Love Is Blue",
    id: "1087237",
  },
  {
    title: "The Bird Of Wounds",
    id: "1087399",
  },
  {
    title: "夜上海",
    id: "1458445847",
  },
  {
    title: "明天会更好",
    id: "5285415",
  },
  {
    title: "Preußens Gloria",
    id: "862213362",
  },
  {
    title: "Wir sind des Geyers schwarzer Haufen",
    id: "1379637860",
  },
  {
    title: "Old Town Road",
    id: "1373172794",
  },
  {
    title: "Non, je ne regrette rien",
    id: "1405113845",
  },
  {
    title: "Pump It",
    id: "1958647681",
  },
];

function Card({ onClick, title, key }) {
  return (
    <button
      className="px-3 border-b dark:border-b-zinc-800 text-left text-sm opacity-80 font-medium transition-all duration-500 py-3"
      key={key}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [playing, setPlaying] = useState("");
  const [add, setAdd] = useState(false);
  const [json, setJSON] = useState("");
  const [isPlaying, setIsPlaying] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [addl, setAddl] = useState(false);
  const [playValue, setPlayValue] = useState("/tno.ogg");
  const SearchFiltered = data.filter((data) =>
    data.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div className="bg-white dark:bg-black">
      <div className="max-w-2xl mx-auto p-8 py-8 sm:py-16 sm:p-0">
        <Head>
          <title>Music | Cloudflare233</title>
        </Head>
        <h1 className="font-medium text-3xl sm:text-4xl mb-2">Songs</h1>
        <div className="bg-white dark:bg-black flex opacity-100 flex-row sticky top-0 py-0 sm:py-1 border-b dark:border-b-zinc-800 w-full z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mt-[1.15rem] sm:mt-[1.9rem] ml-3 absolute opacity-80"
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
            className="hover:border-zinc-800 dark:hover:border-zinc-500 dark:focus:border-zinc-300 dark:border-zinc-800 dark:bg-black focus:border-black focus:outline-none border opacity-70 rounded-lg px-10 py-2 text-sm my-2 sm:my-5 w-full sm:w-3/4"
            placeholder="Search..."
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <span className="mt-6 flex flex-col space-y-4 text-left mb-3">
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
            <p className="text-sm opacity-80 py-3 border-b dark:border-b-zinc-800 font-medium">
              No songs were found.
            </p>
          )}
          <button
            onClick={() => setAddl(addl === true ? false : true)}
            className="text-sm mt-1 mb-2 sm:mb-4 opacity-80 font-medium transition-all duration-500 py-3 border-b dark:border-b-zinc-800 w-full flex flex-row space-x-8"
          >
            {addl === false && (
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
                Add another song
              </>
            )}
            {addl === true && (
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
                Cancel
              </>
            )}
          </button>
          {addl === true && (
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
                  value={playValue}
                  onChange={(e) => setPlayValue(e.target.value)}
                  className="bg-white border rounded-lg dark:focus:border-zinc-300 text-sm focus:outline-none dark:hover:border-zinc-500 dark:bg-black dark:border-zinc-800 hover:border-zinc-500 focus:border-zinc-600 px-10 py-2 w-full"
                  placeholder="/tno.ogg"
                />
              </div>
              <button
                onClick={() => {
                  setIsPlaying(playValue);
                  setPlaying(playValue);
                }}
                className="ml-3 mb-4 bg-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white dark:border-white dark:hover:border-white text-white rounded-lg px-8 py-2 text-sm border-black border trnasition-all duration-500 hover:bg-white hover:text-black hover:border hover:border-black"
              >
                Play Now
              </button>
            </div>
          )}
        </span>
        <div className="bg-white dark:bg-black dark:border-t-zinc-800 text-sm py-1 sm:py-3 z-40 border-t sticky bottom-0">
          <button
            onClick={() => setAdd(add === true ? false : true)}
            className="text-sm mt-1 mb-2 sm:mb-4 opacity-80 font-medium transition-all duration-500 py-3 border-b dark:border-b-zinc-800 w-full flex flex-row space-x-8"
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
                    className="bg-white border rounded-lg dark:focus:border-zinc-300 text-sm focus:outline-none dark:hover:border-zinc-500 dark:bg-black dark:border-zinc-800 hover:border-zinc-500 focus:border-zinc-600 px-10 py-2 w-full"
                    placeholder="Paste the ID here"
                  />
                </div>
                <button
                  onClick={() =>
                    open(
                      `https://music.163.com/song/media/outer/url?id=${json}.mp3`
                    )
                  }
                  className="bg-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white dark:border-white dark:hover:border-white text-white rounded-lg px-8 py-2 text-sm border-black border trnasition-all duration-500 hover:bg-white hover:text-black hover:border hover:border-black"
                >
                  Download Now
                </button>
              </div>
            </>
          )}
          <div className="center mt-3 sm:mt-2 opacity-70 justify-between">
            <Audio isPlaying={isPlaying} src={playing} />
          </div>
          <center>
            <footer className="flex flex-row space-x-4 mt-4 sm:mt-8 mb-2 sm:mb-4">
              <h2 className="ml-8 font-medium opacity-40 text-xs sm:text-sm">
                Copyright ©️ 2022 Cloudflare233.
              </h2>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="opacity-50 appearance-none bg-white dark:bg-black focus:outline-none text-xs sm:text-sm"
              >
                <option value="light">☀️ Light</option>
                <option value="dark">🌙 Dark</option>
              </select>
            </footer>
          </center>
        </div>
      </div>
    </div>
  );
}
