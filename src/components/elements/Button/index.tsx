import React, { PropsWithChildren } from "react";

type ButtonProps = {
  onClick: () => void;
};

export default function Button(props: ButtonProps & PropsWithChildren) {
  return (
    <button
      onClick={props.onClick}
      className="border-slate-400 py-1 md:py-2 px-2 md:px-3 w-fit font-poppins rounded md:rounded-lg text-[8px] md:text-sm text-zinc-200 italic shadow-slate-400 button"
    >
      {props.children}
    </button>
  );
}
