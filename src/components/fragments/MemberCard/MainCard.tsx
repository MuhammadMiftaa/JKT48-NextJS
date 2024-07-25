import React from "react";

export default function MainCard() {
  return (
    <div
      className="flex flex-col bg-zinc-900 h-fit py-6 md:pt-16 md:pb-12 px-6 md:px-16 items-center basis-1/3"
      data-aos="fade-up-right"
    >
      <div
        className="md:h-64 h-32 w-32 md:w-64 bg-black rounded-full bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url("/member/shania_gracia.png")` }}
      ></div>
      <div className="w-full md:mt-10 mt-4">
        <h1 className="text-slate-400 font-light text-[10px] md:text-lg italic">Captain</h1>
        <h2 className="text-md md:text-3xl font-semibold">Shania Gracia</h2>
      </div>
    </div>
  );
}
