import React, { PropsWithChildren } from "react";

export default function NewsCatPill(props: { i: number } & PropsWithChildren) {
  return (
    <h2
      key={props.i}
      className="text-sm font-normal hover:cursor-pointer py-0.5 px-3 rounded-full border border-white"
    >
      {props.children}
    </h2>
  );
}
