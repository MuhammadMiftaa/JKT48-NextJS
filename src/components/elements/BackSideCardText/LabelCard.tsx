import React from "react";

export default function Label(props: { children: React.ReactNode }) {
  return (
    <p className="text-xs italic text-zinc-300 font-light -mb-1.5 font-urbanist">
      {props.children}
    </p>
  );
}
