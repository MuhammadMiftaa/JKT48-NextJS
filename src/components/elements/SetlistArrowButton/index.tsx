import React from "react";

export default function SetlistArrowButton(props: {
  position: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <>
      <div
        className={`p-2 border rounded-full border-white absolute top-1/2 -translate-x-0 translate-y-[-50%] -${props.position}-12 cursor-pointer active:-translate-x-[1px]`}
        style={{ backgroundColor: "rgb(0,0,0,0.7)" }}
        onClick={props.onClick}
      >
        {props.children}
      </div>
    </>
  );
}
