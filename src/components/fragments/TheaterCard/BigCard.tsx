import TheaterCardButton from "@/components/elements/TheaterCardButton";
import { theaterType } from "@/components/types/theaterType";
import Image from "next/image";
import React from "react";

type BigCardProps = {
  theater: theaterType;
  color: (setlist: string) => string;
  borderColor: (setlist: string) => string;
};

export default function BigCard(props: BigCardProps) {
  const { theater, color, borderColor } = props;

  let timestamp =
    (theater.time.seconds + theater.time.nanoseconds / 1000000000) * 1000;
  const date = new Date(timestamp);

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return (
    <div
      className={
        "h-fit w-full p-2 rounded-xl flex flex-col md:flex-row gap-4 relative " +
        borderColor(theater.setlist)
      }
      data-aos="fade-up"
      data-aos-duration="500"
      key={theater.id}
    >
      <img
        className="md:w-5/12 rounded-md"
        src={
          "/setlistPoster/" +
          theater.setlist.toLowerCase().replace(/ /g, "_") +
          ".webp"
        }
        alt={theater.setlist}
      />
      <div className="w-7/12 flex flex-col justify-start relative">
        <h1
          className={
            "font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r font-poppins" +
            color(theater.setlist)
          }
        >
          {theater.setlist + " "}
          <span className="font-light italic text-sm text-zinc-400 font-urbanist block">
            by Member {theater.member_regular ? "Regular" : "Trainee"} JKT48
          </span>
        </h1>
        <div className="flex justify-between w-full mt-3 mb-5 pr-4">
          <h2 className="text-3xl font-bold text-zinc-200 font-poppins">
            {theater.tanggal}
          </h2>
          <p className="text-right inline-block font-extralight text-3xl text-zinc-200 font-poppins">{`— ${hours}.${minutes} WIB`}</p>
        </div>
        <h3 className="block text-2xl font-semibold font-poppins">
          <span className="block text-sm text-zinc-400 italic font-light font-urbanist">
            Perfomed by
          </span>
          {theater.member}
        </h3>
        <h4 className="block font-light italic text-lg text-white absolute bottom-4 font-urbanist">
          {theater.venue}
        </h4>
        <div className="flex w-full justify-end mt-14 mb-1 md:mt-7 md:gap-2">
          <TheaterCardButton
            className={
              "self-end py-2 px-4 bg-clip-text text-transparent bg-gradient-to-r rounded-xl md:mr-2 text-xl font-extrabold scale-90 md:scale-100 border border-white -mr-1 font-poppins" +
              color(theater.setlist)
            }
          >
            Streaming
          </TheaterCardButton>
          <TheaterCardButton
            className={
              "self-end py-2 px-8 bg-gradient-to-r rounded-xl mr-2 text-xl font-extrabold scale-90 md:scale-100 font-poppins" +
              color(theater.setlist)
            }
          >
            Apply
          </TheaterCardButton>
        </div>
      </div>
    </div>
  );
}
