import React from "react";

type ButtonProps = {
  handlerSeeAll: () => void;
};

export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.handlerSeeAll}
      className="border-slate-400 py-2 px-3 rounded-lg text-sm text-zinc-200 italic shadow-slate-400 button"
    >
      View All Members
    </button>
  );
}
