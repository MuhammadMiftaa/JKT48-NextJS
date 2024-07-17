import { memberType } from "@/components/types/memberType";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CardProps } from "@/components/types/CardProps";

export default function Card(props: CardProps) {
  const { delay, member } = props;
  return (
    <label data-aos="fade-up" data-aos-delay={delay}>
      <input type="checkbox" className="absolute scale-0 peer" />
      <div
        className="card w-60 my-5 mx-5 relative"
        style={{ height: "16.9rem" }}
      >
        <div className="front peer-checked:rotate-y-180 border-custom-green border rounded-2xl absolute top-0 bottom-0 left-0 right-0 overflow-hidden bg-zinc-950 hover:cursor-pointer shadow-xl shadow-custom-green duration-700 backface-hidden">
          <Image
            width={256}
            height={361}
            className="w-4/5 border-r h-full border-custom-green"
            src={
              "/member/webp/" +
              member.nama.toLowerCase().replace(/ /g, "_") +
              ".webp"
            }
            alt={member.nama}
          />
          <div className="absolute top-1/2 left-24 transform -translate-y-1/2 bg-transparent w-60 h-60 flex items-center justify-center rotate-90">
            <h1 className="text-xl font-bold text-custom-green uppercase text-nowrap font-poppins">
              {member.nama}
            </h1>
          </div>
        </div>
        <div className="back border-custom-green border rounded-2xl bg-zinc-950 flex flex-col justify-end items-center pb-3 absolute top-0 bottom-0 left-0 right-0 hover:cursor-pointer overflow-hidden rotate-y-180 shadow-xl shadow-custom-green duration-700 backface-hidden peer-checked:-rotate-y-0">
          <div className="absolute top-0 right-0 left-0 border-b border-custom-green">
            <h1 className="text-center text-custom-green py-1.5 text-xl uppercase text-nowrap font-bold font-poppins">
              {member.nama}
            </h1>
          </div>
          <p className="text-xs italic text-zinc-300 font-light -mb-1.5 font-urbanist">
            Gen:
          </p>
          <h1 className="font-bold text-lg mb-2 font-poppins">
            {member.generasi}th Generation
          </h1>
          <p className="text-xs italic text-zinc-300 font-light -mb-1.5 font-urbanist">
            Birthday:
          </p>
          <h2 className="font-bold text-lg mb-2 font-poppins">
            {member.tanggal_lahir}
          </h2>
          <p className="text-xs italic text-zinc-300 font-light -mb-1.5 font-urbanist">
            Age:
          </p>
          <h3 className="font-bold text-lg mb-2 font-poppins">
            {member.umur} years old
          </h3>
          <Link
            href={"/member/" + member.id}
            className="text-sm text-zinc-600 italic font-light mt-5 hover:text-white font-urbanist"
          >
            More Information
          </Link>
        </div>
      </div>
    </label>
  );
}
