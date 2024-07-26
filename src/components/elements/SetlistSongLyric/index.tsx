import React from "react";

export default function SetlistSongLyric(props: {
  index: number;
  children: React.ReactNode;
}) {
  return (
    <p
      className="font-light text-white text-sm md:text-lg text-center py-1 selection:bg-blue-300 selection:text-black font-urbanist tracking-[.2px]"
      key={props.index}
    >
      {props.children}
    </p>
  );
}
