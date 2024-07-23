import React from "react";

export default function MainCard() {
  return (
    <div
      className="flex flex-col bg-zinc-900 pt-16 pb-12 px-16 items-center basis-1/3"
      data-aos="fade-up-right"
    >
      <div
        className="h-64 w-64 bg-black rounded-full bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url("/member/shania_gracia.png")` }}
      ></div>
      <div className="w-full mt-10">
        <h1 className="text-slate-400 font-light text-md italic">Captain</h1>
        <h2 className="text-3xl font-semibold">Shania Gracia</h2>
      </div>
    </div>
  );
}
