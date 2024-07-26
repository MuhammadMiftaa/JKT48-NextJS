import SetlistSongLyric from "@/components/elements/SetlistSongLyric";
import SetlistSongTitle from "@/components/elements/SetlistSongTitle";
import React from "react";
import { HiChevronDown } from "react-icons/hi";

export default function SetlistSong(props: {
  lagu: { judul_lagu: string; lirik: string[] };
  index: number;
}) {
  const { lagu, index } = props;
  return (
    <li
      id={lagu.judul_lagu.toLowerCase().replace(/ /g, "_")}
      key={index}
      className="list-none my-8"
    >
      <button type="button" className="w-full flex items-center gap-1">
        <SetlistSongTitle>{lagu.judul_lagu}</SetlistSongTitle>
        <HiChevronDown className="text-zinc-400 text-xl mt-1" />
      </button>
      <div className="subMenu list-none overflow-hidden h-0 duration-500">
        <ul className="mt-5 h-fit px-2 pb-8 md:pb-14 pt-4 md:pt-8 bg-zinc-950 rounded-3xl">
          {lagu.lirik.map((larik, index) => (
            <SetlistSongLyric key={index} index={index}>
              {larik}
            </SetlistSongLyric>
          ))}
        </ul>
      </div>
    </li>
  );
}
