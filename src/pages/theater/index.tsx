import Loading from "@/components/fragments/Loading";
import Footer from "@/components/layouts/Footer";
import { theaterType } from "@/components/types/theaterType";
import Link from "next/link";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import useSWR from "swr";

export default function theaterPage() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, isLoading, error } = useSWR("/api/data-theater", fetcher);
  const dataTheater: theaterType[] = isLoading ? [] : data.data;

  const color = (setlist: string) => {
    switch (setlist) {
      case "Pajama Drive":
        return "bg-gradient-to-r from-blue-500 to-blue-950";
      case "Renai Kinshi Jourei":
        return "bg-gradient-to-r from-pink-500 to-pink-900";
      case "Seifuku No Me":
        return "bg-gradient-to-r from-slate-500 to-slate-900";
      case "Ramune No Nomikata":
        return "bg-gradient-to-r from-teal-500 to-teal-900";
      case "Aitakatta":
        return "bg-gradient-to-r from-orange-500 to-orange-900";
    }
  };
  
  const borderColor = (setlist: string) => {
    switch (setlist) {
      case "Pajama Drive":
        return "border border-blue-500";
      case "Renai Kinshi Jourei":
        return "border border-pink-500";
      case "Seifuku No Me":
        return "border border-slate-500";
      case "Ramune No Nomikata":
        return "border border-teal-500";
      case "Aitakatta":
        return "border border-orange-500";
    }
  };

  return (
    <>
      {!isLoading ? (
        <div className="container mt-32 pb-12 relative">
          <h1 className="uppercase text-center font-extrabold text-2xl block mb-16 font-poppins">
            Upcoming Theater{" "}
            <span className="block text-5xl title-gradient-thin w-fit text-center mx-auto">
              This Week!
            </span>
          </h1>
          <div className="grid gap-12 px-6 md:px-16 grid-cols-1">
            {dataTheater.map((theater, index) => (
              <div
                className={
                  "h-fit w-full p-2 rounded-xl flex flex-col md:flex-row gap-4 relative " + borderColor(theater.setlist)
                }
                key={index}
                data-aos="fade-up" data-aos-duration="500"
              >
                <img
                  className="md:w-5/12 rounded-md aspect-video object-cover"
                  src={
                    "/setlistPoster/" +
                    theater.setlist.replace(/ /g, "_") +
                    ".jpg"
                  }
                  alt={theater.setlist}
                />
                <div className="flex flex-col justify-start relative">
                  <h1
                    className={
                      "font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r font-poppins" +
                      color(theater.setlist)
                    }
                  >
                    {theater.setlist + " "}
                    <span className="font-light italic text-sm text-zinc-400 font-urbanist block">
                      by Member {theater.member_regular ? "Regular" : "Trainee"}{" "}
                      JKT48
                    </span>
                  </h1>
                  <h2 className="text-3xl mt-3 mb-5 font-bold text-zinc-200 font-poppins">
                    {theater.tanggal}
                  </h2>
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
                    <Link href={""}>
                      <h4
                        className={
                          "self-end py-2 px-4 bg-clip-text text-transparent bg-gradient-to-r rounded-xl md:mr-2 text-xl font-extrabold scale-90 md:scale-100 border border-white -mr-1 font-poppins" +
                          color(theater.setlist)
                        }
                      >
                        Streaming
                      </h4>
                    </Link>
                    <Link href={""}>
                      <h4
                        className={
                          "self-end py-2 px-8 bg-gradient-to-r rounded-xl mr-2 text-xl font-extrabold scale-90 md:scale-100 font-poppins" +
                          color(theater.setlist)
                        }
                      >
                        Apply
                      </h4>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
