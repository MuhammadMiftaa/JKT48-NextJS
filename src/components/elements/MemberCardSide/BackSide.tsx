import Link from "next/link";
import React from "react";
import Label from "../BackSideCardText/LabelCard";
import Value from "../BackSideCardText/ValueCard";

export default function BackSide(props: {
  nama: string;
  generasi: number;
  tanggal_lahir: string;
  umur: number;
  id: string | undefined;
  baseColor: string;
}) {
  const { nama, generasi, tanggal_lahir, umur, id, baseColor } = props;
  return (
    <div
      className={`back rotate-y-180 backface-hidden border-${baseColor} border rounded-2xl bg-zinc-950 flex flex-col justify-end items-center pb-2 absolute top-0 bottom-0 left-0 right-0 hover:cursor-pointer overflow-hidden shadow-xl shadow-${baseColor} duration-700`}
    >
      <div
        className={`absolute top-0 right-0 left-0 border-b border-${baseColor}`}
      >
        <h1
          className={`text-center md:text-lg text-xs px-0.5 text-${baseColor} md:py-1.5 py-1 uppercase text-nowrap font-bold font-poppins`}
        >
          {nama}
        </h1>
      </div>
      <div className="w-full flex flex-col items-center">
        <Label>Gen:</Label>
        <Value>{generasi}th Generation</Value>
        <Label>Birthday:</Label>
        <Value>{tanggal_lahir}</Value>
        <Label>Age:</Label>
        <Value>{umur} years old</Value>
      </div>
      <Link
        href={"/member/" + id}
        className="md:text-sm text-[.6rem] text-zinc-600 italic font-light mt-1 md:mt-5 hover:text-white font-urbanist"
      >
        More Information
      </Link>
    </div>
  );
}
