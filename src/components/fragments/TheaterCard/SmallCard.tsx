import { theaterType } from "@/components/types/theaterType";
import React from "react";

type TheaterCardProps = {
  theater: theaterType;
  hours: string;
  minutes: string;
};

export default function SmallCard(props: TheaterCardProps) {
  const { theater, hours, minutes } = props;
  return (
    <div
      className="flex gap-x-8 items-center font-urbanist"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      key={theater.id}
    >
      <img
        className="w-1/3 rounded-3xl"
        src={
          "/setlistPoster/" +
          theater.setlist.toLowerCase().replace(/ /g, "_") +
          ".jpg"
        }
        alt=""
      />
      <div className="flex flex-col">
        <h5 className="w-fit py-1 text-2xl rounded-3xl mb-5 font-bold text-custom-green">
          {theater.setlist}
        </h5>
        <h4 className="font-light text-xs text-slate-400 tracking-wider">
          {theater.tanggal}
          <span className="ml-12">{`${hours}.${minutes} WIB`}</span>
        </h4>
        <h2 className="text-xl font-semibold mb-10">{theater.member}</h2>
        <h1 className="text-sm italic">Read More</h1>
      </div>
    </div>
  );
}
