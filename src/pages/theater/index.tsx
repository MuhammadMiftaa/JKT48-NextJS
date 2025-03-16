import Loading from "@/components/elements/Loading";
import BigCard from "@/components/fragments/TheaterCard/BigCard";
import { theaterType } from "@/types/theaterType";
import React from "react";
import useSWR from "swr";

export default function TheaterPage() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, isLoading, error } = useSWR("/api/data-theater", fetcher);
  const dataTheater: theaterType[] = isLoading
    ? []
    : data.data.filter((theater: theaterType) => !theater.deleted.isDeleted);

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
      default:
        return "";
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
      default:
        return "";
    }
  };

  return (
    <>
      {!isLoading ? (
        <div className="mt-32 pb-12 relative">
          <h1 className="uppercase text-center font-extrabold text-2xl block mb-16 font-poppins">
            Upcoming Theater{" "}
            <span className="block text-5xl title-gradient-thin w-fit text-center mx-auto">
              This Week!
            </span>
          </h1>
          <div className="grid gap-12 px-6 md:px-16 grid-cols-1">
            {dataTheater.map((theater, index) => {
              return (
                <BigCard
                  theater={theater}
                  key={index}
                  color={color}
                  borderColor={borderColor}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
