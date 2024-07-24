import React, { PropsWithChildren } from "react";

type ButtonProps = {
  onClick: () => void;
};

export default function Button(props: ButtonProps & PropsWithChildren) {
  return (
    <button
      onClick={props.onClick}
      className="border-slate-400 py-2 px-3 w-fit font-poppins rounded-lg text-sm text-zinc-200 italic shadow-slate-400 button"
    >
      {props.children}
    </button>
  );
}
