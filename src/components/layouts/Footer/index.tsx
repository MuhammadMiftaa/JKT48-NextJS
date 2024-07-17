import Link from "next/link";
import {
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
  FaMapPin,
} from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { GrSchedule } from "react-icons/gr";
import { TbHomeFilled } from "react-icons/tb";

export default function Footer() {
  const nav = [
    {
      name: "Home",
      icon: <TbHomeFilled className="h-7 w-7" />,
      link: "/",
    },
    {
      name: "Member",
      icon: <FaPeopleGroup className="h-7 w-7" />,
      link: "/member",
    },
    {
      name: "Theater",
      icon: <GrSchedule className="h-7 w-7" />,
      link: "/theater",
    },
    {
      name: "Shop",
      icon: <GiShoppingBag className="h-7 w-7" />,
      link: "/shop",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="h-7 w-7" />,
      link: "https://www.instagram.com/jkt48",
    },
    {
      name: "Tiktok",
      icon: <FaTiktok className="h-7 w-7" />,
      link: "https://www.tiktok.com/@jkt48.official",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="h-7 w-7" />,
      link: "https://x.com/officialJKT48",
    },
    {
      name: "Youtube",
      icon: <FaYoutube className="h-7 w-7" />,
      link: "https://www.youtube.com/@JKT48",
    },
  ];
  return (
    <div
      className="bg-custom-green mt-10 pt-24 pb-4 px-8"
      style={{ borderRadius: "4rem 4rem 0 0" }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:mb-[-5rem]">
      <Link
        href="/"
        className="w-full flex py-2 justify-center border border-zinc-700 p-1 hover:cursor-pointer group z-30 hover:shadow-xl hover:shadow-black"
        style={{ borderRadius: "0 20px 20px 20px" }}
      >
        <TbHomeFilled className="h-7 w-7 text-black" />
      </Link>
      <Link
        href="/member"
        className="w-full flex py-2 justify-center border border-zinc-700 p-1 hover:cursor-pointer group z-30 col-start-1 row-start-2 md:col-start-2 md:row-start-1 hover:shadow-xl hover:shadow-black"
        style={{ borderRadius: "0 20px 20px 20px" }}
      >
        <FaPeopleGroup className="h-7 w-7 text-black" />
      </Link>
      <Link
        href="/theater"
        className="w-full flex py-2 justify-center border border-zinc-700 p-1 hover:cursor-pointer group z-30 hover:shadow-xl hover:shadow-black"
        style={{ borderRadius: "20px 0 20px 20px" }}
      >
        <GrSchedule className="h-7 w-7 text-black" />
      </Link>
      <Link
        href="/shop"
        className="w-full flex py-2 justify-center border border-zinc-700 p-1 hover:cursor-pointer group z-30 hover:shadow-xl hover:shadow-black"
        style={{ borderRadius: "20px 0 20px 20px" }}
      >
        <GiShoppingBag className="h-7 w-7 text-black" />
      </Link>

      <Link
        href="https://www.instagram.com/jkt48"
        className="w-full flex py-2 justify-center border border-zinc-700 p-1 hover:cursor-pointer group z-30 hover:shadow-xl hover:shadow-black"
        style={{ borderRadius: "20px 20px 20px 0" }}
      >
        <FaInstagram className="h-7 w-7 text-black" />
      </Link>
      <Link
        href="https://www.tiktok.com/@jkt48.official"
        className="w-full flex py-2 justify-center border border-zinc-700 p-1 hover:cursor-pointer group z-30 col-start-1 row-start-4 md:col-start-2 md:row-start-2 hover:shadow-xl hover:shadow-black"
        style={{ borderRadius: "20px 20px 20px 0" }}
      >
        <FaTiktok className="h-7 w-7 text-black" />
      </Link>
      <Link
        href="https://x.com/officialJKT48"
        className="w-full flex py-2 justify-center border border-zinc-700 p-1 hover:cursor-pointer group z-30 hover:shadow-xl hover:shadow-black"
        style={{ borderRadius: "20px 20px 0 20px" }}
      >
        <FaTwitter className="h-7 w-7 text-black" />
      </Link>
      <Link
        href="https://www.youtube.com/@JKT48"
        className="w-full flex py-2 justify-center border border-zinc-700 p-1 hover:cursor-pointer group z-30 hover:shadow-xl hover:shadow-black"
        style={{ borderRadius: "20px 20px 0 20px" }}
      >
        <FaYoutube className="h-7 w-7 text-black" />
      </Link>
      </div>
      <h1 className="font-bold text-black text-center md:text-[15rem] lg:text-[20rem] text-[9rem] lg:mb-[-6.5rem] md:mb-[-5rem] mb-[-3rem] overflow-auto">
        JKT48
      </h1>
      <h2 className="text-black text-center font-poppins italic font-light">
        <span className="text-red-600 font-black text-lg">JKT48</span> is{" "}
        <span className="text-pink-500 font-black text-lg">AKB48's</span> first overseas
        sister group
      </h2>
      <div className="border-t-2 border-zinc-800 w-full h-10 py-3 mt-12 flex ">
        <div className="flex justify-between w-full text-xs md:text-base font-poppins">
          <h1 className="text-zinc-800 font-light w-fit">
            {" "}
            Jakarta, Indonesia
          </h1>
          <h2 className="text-zinc-800 font-light w-fit">
            Copyright © June 2024 | Muhammad Miftakul Salam
          </h2>
        </div>
      </div>
    </div>
  );
}
