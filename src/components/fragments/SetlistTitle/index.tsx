import React from "react";

export default function SetlistTitle(props: {
  nama_setlist: string;
  dibawakan_oleh: string;
}) {
  return (
    <div className="relative w-fit h-fit mx-auto">
      <h1 className="text-3xl md:text-5xl text-center title-gradient-bold uppercase mt-16 md:mt-12 font-poppins">
        {props.nama_setlist}
      </h1>
      <h2 className="text-white text-xs font-light text-center italic capitalize mb-20 font-urbanist">
        Performed <span className="lowercase">by</span>{" "}
        {props.dibawakan_oleh.split("_").join(" ")}
      </h2>
    </div>
  );
}
