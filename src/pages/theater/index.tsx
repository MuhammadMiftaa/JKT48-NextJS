import Loading from "@/components/elements/Loading";
import BigCard from "@/components/fragments/TheaterCard/BigCard";
import { theaterType } from "@/components/types/theaterType";
import React from "react";
import useSWR from "swr";

export default function theaterPage() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, isLoading, error } = useSWR("/api/data-theater", fetcher);
  const dataTheater: theaterType[] = isLoading
    ? [
        {
          id: "0307240",
          venue: "Taman Budaya Yogyakarta",
          member_regular: true,
          member:
            "Lia, Zee, Oniel, Feni, Freya, Greesel, Indah, Jessi, Kathrina, Lulu, Muthe, Raisha",
          setlist: "Renai Kinshi Jourei",
          tanggal: "Rabu, 3 Juli 2024",
          time: {
            __datatype__: "timestamp",
            value: { _seconds: 1720008000, _nanoseconds: 626000000 },
          },
        },
        {
          id: "0407240",
          venue: "Gedung Cak Durasim Surabaya",
          member_regular: true,
          member:
            "Christy, Olla, Fiony, Flora, Ella, Gita, Gracie, Eli, Lyn, Marsha, Adel, Gracia",
          setlist: "Ramune No Nomikata",
          tanggal: "Kamis, 4 Juli 2024",
          time: {
            __datatype__: "timestamp",
            value: { _seconds: 1720094400, _nanoseconds: 769000000 },
          },
        },
        {
          id: "0407241",
          venue: "Taman Budaya Yogyakarta",
          member_regular: true,
          member:
            "Lia, Zee, Oniel, Feni, Freya, Greesel, Indah, Jessi, Kathrina, Lulu, Muthe, Raisha",
          setlist: "Renai Kinshi Jourei",
          tanggal: "Kamis, 4 Juli 2024",
          time: {
            __datatype__: "timestamp",
            value: { _seconds: 1720094400, _nanoseconds: 55000000 },
          },
        },
        {
          id: "0407242",
          venue: "FX Sudirman Lt.4 Jakarta",
          member_regular: false,
          member:
            "Delynn, Alya, Anindya, Cathy, Elin, Chelsea, Cynthia, Danella, Desy, Gendis, Trisha, Michie",
          setlist: "Aitakatta",
          tanggal: "Kamis, 4 Juli 2024",
          time: {
            __datatype__: "timestamp",
            value: { _seconds: 1720094400, _nanoseconds: 98000000 },
          },
        },
        {
          id: "0507240",
          venue: "Gedung Cak Durasim Surabaya",
          member_regular: true,
          member:
            "Christy, Olla, Fiony, Flora, Ella, Gita, Gracie, Eli, Lyn, Marsha, Adel, Gracia",
          setlist: "Ramune No Nomikata",
          tanggal: "Jumat, 5 Juli 2024",
          time: {
            __datatype__: "timestamp",
            value: { _seconds: 1720180800, _nanoseconds: 11000000 },
          },
        },
        {
          id: "0507241",
          venue: "FX Sudirman Lt.4 Jakarta",
          member_regular: false,
          member:
            "Aralie, Alya, Anindya, Chelsea, Cynthia, Danella, Trisha, Michie, Levi, Nayla, Nachia, Regie",
          setlist: "Pajama Drive",
          tanggal: "Jumat, 5 Juli 2024",
          time: {
            __datatype__: "timestamp",
            value: { _seconds: 1720180800, _nanoseconds: 377000000 },
          },
        },
        {
          id: "0607240",
          venue: "Taman Budaya Yogyakarta",
          member_regular: true,
          member:
            "Lia, Zee, Oniel, Feni, Freya, Greesel, Indah, Jessi, Kathrina, Lulu, Muthe, Raisha",
          setlist: "Renai Kinshi Jourei",
          tanggal: "Sabtu, 6 Juli 2024",
          time: {
            __datatype__: "timestamp",
            value: { _seconds: 1720256400, _nanoseconds: 211000000 },
          },
        },
        {
          id: "0607241",
          venue: "FX Sudirman Lt.4 Jakarta",
          member_regular: false,
          member:
            "Delynn, Lana, Erine, Cathy, Elin, Daisy, Fritzy, Gendis, Lily, Oline, Nala, Kimmy",
          setlist: "Pajama Drive",
          tanggal: "Sabtu, 6 Juli 2024",
          time: {
            __datatype__: "timestamp",
            value: { _seconds: 1720267200, _nanoseconds: 581000000 },
          },
        },
        {
          id: "0707240",
          venue: "Gedung Cak Durasim Surabaya",
          member_regular: true,
          member:
            "Christy, Olla, Fiony, Flora, Ella, Gita, Gracie, Eli, Lyn, Marsha, Adel, Gracia",
          setlist: "Ramune No Nomikata",
          tanggal: "Minggu, 7 Juli 2024",
          time: {
            __datatype__: "timestamp",
            value: { _seconds: 1720342800, _nanoseconds: 712000000 },
          },
        },
        {
          id: "0707241",
          venue: "FX Sudirman Lt.4 Jakarta",
          member_regular: false,
          member:
            "Aralie, Erine, Fritzy, Lily, Moreen, Nayla, Nachia, Oline, Regie, Ribka, Nala, Kimmy",
          setlist: "Aitakatta",
          tanggal: "Minggu, 7 Juli 2024",
          time: {
            __datatype__: "timestamp",
            value: { _seconds: 1720342800, _nanoseconds: 349000000 },
          },
        },
      ]
    : data.data;

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
        <div className="container mt-32 pb-12 relative">
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
