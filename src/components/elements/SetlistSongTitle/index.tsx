import React, { PropsWithChildren } from "react";

export default function SetlistSongTitle(props: PropsWithChildren) {
  return (
    <p className="font-light text-2xl text-zinc-400 text-left hover:text-white capitalize active:text-custom-green font-urbanist">
      {props.children}
    </p>
  );
}
