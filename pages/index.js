import Head from "next/head";
import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Player from "../components/Player";

const data = [
  {
    title: "Good Morning",
    id: "563431633",
    nextTitle: "Singing in the rain",
  },
  {
    title: "Singing in the rain",
    id: "1394270885",
    nextTitle: "Memory",
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
      className="hover:scale-[1.02] px-3 border-b dark:border-b-zinc-800 text-left text-sm opacity-80 font-medium transition-all duration-500 py-3"
      key={key}
      onClick={onClick}
    >
      <span className="flex flex-row space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            clipRule="evenodd"
          />
        </svg>
        {title}
      </span>
    </button>
  );
}

export default function Home() {
  const [donate, setDonate] = useState(true);
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
        <h1 className="text-center font-black text-2xl sm:text-3xl mb-2">
          MUSIC.CF233.GA
        </h1>
        <div className="text-sm flex flex-row space-x-4 justify-center bg-white dark:bg-black  border-b py-3 z-50 dark:border-b-zinc-800 sticky top-0">
          <button
            onClick={() => open("https://cf233.ga")}
            className="opacity-60 transition-all duration-500 hover:scale-[1.02] hover:opacity-100"
          >
            Home
          </button>
          <button
            onClick={() => open("https://blog.cf233.ga")}
            className="opacity-60 transition-all duration-500 hover:scale-[1.02] hover:opacity-100"
          >
            Blog
          </button>
          <button className="opacity-100 hover:scale-[1.02] transition-all duration-500">
            Music
          </button>
          <button
            onClick={() => open("https://tv.cf233.ga")}
            className="opacity-60 transition-all duration-500 hover:scale-[1.02] hover:opacity-100"
          >
            TV
          </button>
          <button
            className="opacity-60 transition-all duration-500 hover:scale-[1.02] hover:opacity-100"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <>Light</> : <>Dark</>}
          </button>
        </div>
        {donate === true && (
          <div className="sticky top-[2.8rem] py-1 border-b dark:border-b-zinc-800 bg-white dark:bg-black z-50">
            <Link href="itmss://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/buyCharityGiftWizard?charity=10220">
              <div className="cursor-pointer flex flex-col sm:flex-row space-y-5 sm:space-y-2 space-x-8 bg-zinc-50 dark:bg-zinc-900 p-4 sm:p-8 my-4">
                <img
                  src="/ukraine.png"
                  className="block dark:hidden w-32 mx-auto sm:w-48"
                />
                <img
                  src="/ukraine_dark.png"
                  className="hidden dark:inline w-32 mx-auto sm:w-48"
                />
                <span className="text-xs sm:text-sm text-blue-500 underline">
                  Donate to support families affected by the war in Ukraine,
                  Fight for freedom ↗
                </span>
              </div>
            </Link>
            <button onClick={() => setDonate(false)}>
              <span className="absolute -mt-36 right-8 text-sm  sm:text-base opacity-50">
                [x]
              </span>
            </button>
          </div>
        )}
        {donate === false && (
          <div
            onClick={() => setDonate(true)}
            className="cursor-pointer flex flex-row justify-center mx-auto inset-x-0 sticky top-[2.8rem] border-b dark:border-b-zinc-800 py-2 text-xs sm:text-sm dark:text-zinc-400 text-zinc-600 bg-white dark:bg-black z-50"
          >
            🇺🇦 Support the war in ukraine, fight for freedom.
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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        )}
        <div className="bg-white dark:bg-black flex opacity-100 flex-row sticky top-20 py-0 sm:py-1 border-b dark:border-b-zinc-800 w-full z-20">
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
            className="hover:border-zinc-800 dark:hover:border-zinc-500 dark:focus:border-zinc-300 dark:border-zinc-800 dark:bg-black focus:border-black focus:outline-none border opacity-70 rounded-lg px-10 py-2 text-sm my-2 sm:my-5 w-full"
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
          <div className="center mt-3 sm:mt-2 opacity-70 justify-between z-50">
            <div className="text-xs sm:text-sm -mb-5 sm:-mb-8">
              Nowplaying: {isPlaying}
            </div>
            <Player isPlaying={isPlaying} url={playing} />
          </div>
          <center>
            <footer className="flex flex-row space-x-4 mt-4 sm:mt-8 mb-2 sm:mb-4">
              <h2 className="ml-8 font-medium opacity-40 text-xs sm:text-sm">
                Copyright ©️ 2022 Cloudflare233.
              </h2>
            </footer>
          </center>
        </div>
      </div>
    </div>
  );
}
