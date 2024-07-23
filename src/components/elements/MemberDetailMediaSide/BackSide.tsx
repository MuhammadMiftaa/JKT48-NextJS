import Link from "next/link";
import React from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { RiTwitterXFill } from "react-icons/ri";

export default function BackSide(props: {
  username_ig: string;
  username_idn: string;
  username_tiktok: string;
  username_sr: string;
  username_x: string;
}) {
  return (
    <div className="back flex flex-col justify-center items-center bg-black h-full w-full basis-1/3 absolute top-0 bottom-0 left-0 right-0 overflow-hidden duration-700 gap-2 py-2 pr-16 backface-hidden rotate-y-180">
      <Link
        href={"https://www.instagram.com/" + props.username_ig + "/"}
        className="button-medsoc group"
      >
        <FaInstagram className="text-6xl opacity-60 group-hover:opacity-100" />
        <h1 className="link-medsoc from-[#f09433] via-[#bc1888] to-[#405de6] ">
          {props.username_ig}
        </h1>
      </Link>
      <Link
        href={
          props.username_idn
            ? "https://idn.onelink.me/VKUf/" +
              props.username_idn.split(" ").join("")
            : ""
        }
        className="border border-zinc-800 h-full w-full flex justify-start items-center p-8 group duration-1000 hover:bg-gradient-to-r hover:from-blue-500 hover:to-custom-green hover:scale-[.95]"
      >
        <img className="h-14 rounded-lg" src="/IDN.png" alt="" />
        <h1 className="w-full text-center font-light group-hover:font-black text-2xl italic bg-clip-text text-transparent bg-gradient-to-r duration-200 group-hover:text-white font-urbanist from-red-200 via-red-600 to-red-800 ">
          {props.username_idn}
        </h1>
      </Link>
      <Link
        href={"https://www.tiktok.com/@" + props.username_tiktok + "/"}
        className="border border-zinc-800 h-full w-full flex justify-start items-center p-8 group duration-1000 hover:bg-gradient-to-r hover:from-blue-500 hover:to-custom-green hover:scale-[.95]"
      >
        <FaTiktok className="text-5xl opacity-60 group-hover:opacity-100" />
        <h1 className="w-full text-center font-light group-hover:font-black text-2xl italic bg-clip-text text-transparent bg-gradient-to-r duration-200 group-hover:text-white font-urbanist from-white via-zinc-500 to-zinc-900 ">
          {props.username_tiktok}
        </h1>
      </Link>
      <Link
        href={
          props.username_sr
            ? "https://www.showroom-live.com/r/JKT48_" +
              props.username_sr.split(/[\s()]+/)[0]
            : ""
        }
        className="border border-zinc-800 h-full w-full flex justify-start items-center p-8 group duration-1000 hover:bg-gradient-to-r hover:from-blue-500 hover:to-custom-green hover:scale-[.95]"
      >
        <img className="h-14 rounded-lg" src="/SR.png" alt="" />
        <h1 className="w-full text-center font-light group-hover:font-black text-2xl italic bg-clip-text text-transparent bg-gradient-to-r duration-200 group-hover:text-white font-urbanist from-[#F29600] via-[#54C2F0] via-70% to-[#E8528D]  text-nowrap">
          {props.username_sr}
        </h1>
      </Link>
      <Link
        href={"https://www.twitter.com/" + props.username_x + "/"}
        className="border border-zinc-800 h-full w-full flex justify-start items-center p-8 group duration-1000 hover:bg-gradient-to-r hover:from-blue-500 hover:to-custom-green hover:scale-[.95]"
      >
        <RiTwitterXFill className="text-5xl opacity-60 group-hover:opacity-100" />
        <h1 className="w-full text-center font-light group-hover:font-black text-2xl italic bg-clip-text text-transparent bg-gradient-to-r duration-200 group-hover:text-white font-urbanist from-slate-950 to-white ">
          {props.username_x}
        </h1>
      </Link>
      <div className="my-2 absolute bottom-0 top-0 right-0 w-14 border-zinc-800 border flex justify-center items-center bg-transparent  hover:bg-gradient-to-t hover:from-blue-500 hover:to-custom-green hover:cursor-pointer duration-500 group hover:scale-[.99]">
        <GoArrowSwitch className="text-2xl text-zinc-500 group-hover:text-black group-hover:rotate-180 duration-500" />
      </div>
    </div>
  );
}
