import React from "react";

export default function Value(props: { children: React.ReactNode }) {
  return (
    <h1 className="font-bold text-[.7rem] md:text-lg mb-2 font-poppins">{props.children}</h1>
  );
}
