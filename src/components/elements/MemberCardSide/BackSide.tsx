import Link from "next/link";
import React from "react";
import Label from "../BackSideCardText/LabelCard";
import Value from "../BackSideCardText/ValueCard";

export default function BackSide(props: {
  nama: string;
  generasi: number;
  tanggal_lahir: string;
  umur: number;
  id: string;
  baseColor: string;
}) {
  const { nama, generasi, tanggal_lahir, umur, id, baseColor } = props;
  return (
    <div
      className={`back border-${baseColor} border rounded-2xl bg-zinc-950 flex flex-col justify-end items-center pb-3 absolute top-0 bottom-0 left-0 right-0 hover:cursor-pointer overflow-hidden rotate-y-180 shadow-xl shadow-${baseColor} duration-700 backface-hidden peer-checked:-rotate-y-0`}
    >
      <div
        className={`absolute top-0 right-0 left-0 border-b border-${baseColor}`}
      >
        <h1
          className={`text-center text-${baseColor} py-1.5 text-xl uppercase text-nowrap font-bold font-poppins`}
        >
          {nama}
        </h1>
      </div>
      <Label>Gen:</Label>
      <Value>{generasi}th Generation</Value>
      <Label>Birthday:</Label>
      <Value>{tanggal_lahir}</Value>
      <Label>Age:</Label>
      <Value>{umur} years old</Value>
      <Link
        href={"/member/" + id}
        className="text-sm text-zinc-600 italic font-light mt-5 hover:text-white font-urbanist"
      >
        More Information
      </Link>
    </div>
  );
}
