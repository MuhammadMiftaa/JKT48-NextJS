import FooterCopyright from "@/components/fragments/FooterCopyright";
import FooterName from "@/components/fragments/FooterName";
import FooterNav from "@/components/fragments/FooterNav";
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
  const button = [
    {
      additionalClass: "rounded-[0_20px_20px_20px]",
      icon: <TbHomeFilled className="h-7 w-7 text-black" />,
      link: "/",
    },
    {
      additionalClass:
        "col-start-1 row-start-2 md:col-start-2 md:row-start-1 rounded-[0_20px_20px_20px]",
      icon: <FaPeopleGroup className="h-7 w-7 text-black" />,
      link: "/member",
    },
    {
      additionalClass: "rounded-[20px_0_20px_20px]",
      icon: <GrSchedule className="h-7 w-7 text-black" />,
      link: "/theater",
    },
    {
      additionalClass: "rounded-[20px_0_20px_20px]",
      icon: <GiShoppingBag className="h-7 w-7 text-black" />,
      link: "/shop",
    },
    {
      additionalClass: "rounded-[20px_20px_20px_0]",
      icon: <FaInstagram className="h-7 w-7 text-black" />,
      link: "https://instagram.com/jkt48",
    },
    {
      additionalClass:
        "col-start-1 row-start-4 md:col-start-2 md:row-start-2 rounded-[20px_20px_20px_0]",
      icon: <FaTiktok className="h-7 w-7 text-black" />,
      link: "https://tiktok.com/@jkt48.official",
    },
    {
      additionalClass: "rounded-[20px_20px_0_20px]",
      icon: <FaTwitter className="h-7 w-7 text-black" />,
      link: "https://twitter.com/officialJKT48",
    },
    {
      additionalClass: "rounded-[20px_20px_0_20px]",
      icon: <FaYoutube className="h-7 w-7 text-black" />,
      link: "https://youtube.com/@JKT48",
    },
  ];

  return (
    <div
      className="bg-custom-green mt-10 pt-24 pb-4 px-8"
      style={{ borderRadius: "4rem 4rem 0 0" }}
    >
      <FooterNav button={button} />
      <FooterName />
      <FooterCopyright />
    </div>
  );
}
