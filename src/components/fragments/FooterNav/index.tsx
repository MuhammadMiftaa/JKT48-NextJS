import FooterNavButton from "@/components/elements/FooterNavButton";
import { link } from "fs";
import React from "react";
import { FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { GrSchedule } from "react-icons/gr";
import { TbHomeFilled } from "react-icons/tb";

export default function FooterNav(props: {
  button: { icon: React.ReactNode; additionalClass: string; link: string }[];
}) {
  const { button } = props;
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:mb-[-5rem]">
      {button.map((item, index) => (
        <FooterNavButton
          key={index}
          class={item.additionalClass}
          link={item.link}
        >
          {item.icon}
        </FooterNavButton>
      ))}
    </div>
  );
}
