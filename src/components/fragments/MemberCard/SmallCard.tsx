import { memberType } from "@/components/types/memberType";
import React from "react";

export default function SmallCard(props: {
  member: memberType;
  index: number;
}) {
  return (
    <div
      className="flex flex-col bg-zinc-900 py-2 px-2 justify-start md:py-6 md:px-7 text-nowrap h-fit items-center"
      data-aos="fade-left"
      data-aos-delay={200 * props.index}
      key={props.member.id}
    >
      <div
        className="h-20 w-20 md:h-40 md:w-40 bg-black rounded-full bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url("/member/${props.member.nama
            .toLowerCase()
            .replace(/ /g, "_")}.png")`,
        }}
      ></div>
      <div className="w-full h-fit pl-2">
        <h1 className="text-slate-400 mt-2 md:mt-6 font-light italic text-[8px] md:text-xs">
          Member
        </h1>
        <h2 className="text-[10px] md:text-lg font-semibold">{props.member.nama}</h2>
      </div>
    </div>
  );
}
