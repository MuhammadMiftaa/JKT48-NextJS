import Link from "next/link";
import React from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { RiTwitterXFill } from "react-icons/ri";
import MemberDetailMediaSocial from "../MemberDetailMediaSocial";

export default function BackSide(props: {
  username_ig: string;
  username_idn: string;
  username_tiktok: string;
  username_sr: string;
  username_x: string;
}) {
  const backSideData = [
    {
      link: "https://www.instagram.com/" + props.username_ig + "/",
      username: props.username_ig,
      colorClass: "from-[#f09433] via-[#bc1888] to-[#405de6]",
      icon: (
        <FaInstagram className="text-6xl opacity-60 group-hover:opacity-100" />
      ),
    },
    {
      link:
        "https://idn.onelink.me/VKUf/" + props.username_idn.split(" ").join(""),
      username: props.username_idn,
      colorClass: "from-red-200 via-red-600 to-red-800",
      icon: <img className="h-14 rounded-lg" src="/IDN.png" alt="" />,
    },
    {
      link: "https://www.tiktok.com/@" + props.username_tiktok + "/",
      username: props.username_tiktok,
      colorClass: "from-white via-zinc-500 to-zinc-900",
      icon: (
        <FaTiktok className="text-5xl opacity-60 group-hover:opacity-100" />
      ),
    },
    {
      link:
        "https://www.showroom-live.com/r/JKT48_" +
        props.username_sr.split(/[\s()]+/)[0],
      username: props.username_sr,
      colorClass:
        "from-[#F29600] via-[#54C2F0] via-70% to-[#E8528D] text-nowrap",
      icon: <img className="h-14 rounded-lg" src="/SR.png" alt="" />,
    },
    {
      link: "https://www.twitter.com/" + props.username_x + "/",
      username: props.username_x,
      colorClass: "from-slate-950 to-white",
      icon: (
        <RiTwitterXFill className="text-5xl opacity-60 group-hover:opacity-100" />
      ),
    },
  ];

  return (
    <div className="back flex flex-col justify-center items-center bg-black h-full w-full basis-1/3 absolute top-0 bottom-0 left-0 right-0 overflow-hidden duration-700 gap-2 py-2 pr-16 backface-hidden rotate-y-180">
      {backSideData.map((data, i) => (
        <MemberDetailMediaSocial
          link={"https://www.instagram.com/" + props.username_ig + "/"}
          username={props.username_ig}
          colorClass={data.colorClass}
        >
          {data.icon}
        </MemberDetailMediaSocial>
      ))}
      <div className="my-2 absolute bottom-0 top-0 right-0 w-14 border-zinc-800 border flex justify-center items-center bg-transparent  hover:bg-gradient-to-t hover:from-blue-500 hover:to-custom-green hover:cursor-pointer duration-500 group hover:scale-[.99]">
        <GoArrowSwitch className="text-2xl text-zinc-500 group-hover:text-black group-hover:rotate-180 duration-500" />
      </div>
    </div>
  );
}
