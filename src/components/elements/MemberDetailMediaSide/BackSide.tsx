import React from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { RiTwitterXFill } from "react-icons/ri";
import MemberDetailMediaSocial from "../MemberDetailMediaSocial";
import Image from "next/image";

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
        <FaInstagram className="md:text-6xl opacity-60 group-hover:opacity-100" />
      ),
    },
    {
      link:
        "https://idn.onelink.me/VKUf/" + props.username_idn.split(" ").join(""),
      username: props.username_idn,
      colorClass: "from-red-200 via-red-600 to-red-800",
      icon: (
        <Image
          className="md:h-14 h-5 object-contain object-center md:object-left"
          width={100}
          height={100}
          src="/IDN.png"
          alt="IDN logo"
        />
      ),
    },
    {
      link: "https://www.tiktok.com/@" + props.username_tiktok + "/",
      username: props.username_tiktok,
      colorClass: "from-white via-zinc-500 to-zinc-900",
      icon: (
        <FaTiktok className="md:text-5xl opacity-60 group-hover:opacity-100" />
      ),
    },
    {
      link:
        "https://www.showroom-live.com/r/JKT48_" +
        props.username_sr.split(/[\s()]+/)[0],
      username: props.username_sr,
      colorClass:
        "from-[#F29600] via-[#54C2F0] via-70% to-[#E8528D] text-nowrap",
      icon: (
        <Image
          className="md:h-14 h-5 object-contain object-center md:object-left"
          width={100}
          height={100}
          src="/SR.png"
          alt="Showroom logo"
        />
      ),
    },
    {
      link: "https://www.twitter.com/" + props.username_x + "/",
      username: props.username_x,
      colorClass: "from-slate-950 to-white",
      icon: (
        <RiTwitterXFill className="md:text-5xl opacity-60 group-hover:opacity-100" />
      ),
    },
  ];

  return (
    <div className="back flex flex-col justify-center items-center bg-custom-black md:h-full w-full md:basis-1/3 md:absolute md:top-0 md:bottom-0 md:left-0 md:right-0 overflow-hidden duration-700 gap-2 py-2 md:pr-16 md:backface-hidden md:rotate-y-180">
      {backSideData.map((data, i) => (
        <MemberDetailMediaSocial
          key={i}
          link={data.link}
          username={data.username}
          colorClass={data.colorClass}
        >
          {data.icon}
        </MemberDetailMediaSocial>
      ))}
      <div className="my-2 absolute bottom-0 top-0 right-0 w-14 border-zinc-800 border md:flex hidden justify-center items-center bg-transparent  hover:bg-gradient-to-t hover:from-blue-500 hover:to-custom-green hover:cursor-pointer duration-500 group hover:scale-[.99]">
        <GoArrowSwitch className="text-2xl text-zinc-500 group-hover:text-black group-hover:rotate-180 duration-500" />
      </div>
    </div>
  );
}
