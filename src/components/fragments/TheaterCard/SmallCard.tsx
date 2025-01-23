import { theaterType } from "@/components/types/theaterType";
import React from "react";

type TheaterCardProps = {
  theater: theaterType;
};

export default function SmallCard(props: TheaterCardProps) {
  const { theater } = props;
  return (
    <div
      className="flex flex-col md:flex-row gap-x-8 items-center font-urbanist"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      key={theater.id}
    >
      <img
        className="md:w-1/3 md:rounded-3xl rounded-lg"
        src={
          "/setlistPoster/" +
          theater.setlist.toLowerCase().replace(/ /g, "_") +
          ".jpg"
        }
        alt=""
      />
      <div className="flex flex-col mt-1 md:mt-0">
        <h5 className="w-fit py-1 text-xl md:text-2xl rounded-3xl mb-1 md:mb-5 font-bold text-custom-green">
          {theater.setlist}
        </h5>
        <h4 className="font-light text-xs text-slate-400 tracking-wider">
          {theater.tanggal}
          <span className="ml-12">{theater.time}</span>
        </h4>
        <h2 className="text-sm md:text-xl font-semibold mb-2 md:mb-10">{theater.member}</h2>
        <h1 className="md:text-sm text-xs italic text-zinc-500">Read More</h1>
      </div>
    </div>
  );
}
