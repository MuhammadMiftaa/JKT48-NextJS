import React from "react";

export default function SetlistArrowButton(props: {
  position: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <>
      <div
        className={`p-2 rounded-full absolute top-1/2 -translate-x-0 translate-y-[-50%] -${props.position}-32 text-zinc-500 cursor-pointer active:-translate-x-[1px]`}
        onClick={props.onClick}
      >
        {props.children}
      </div>
    </>
  );
}
