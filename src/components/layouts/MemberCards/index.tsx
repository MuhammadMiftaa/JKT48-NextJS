import Card from "@/components/fragments/MemberCard/BigCard";
import { memberType } from "@/components/types/memberType";
import React from "react";

export default function MemberCards(props: {
  memberRegular: memberType[];
  category: string;
}) {
  return (
    <div className="mb-20">
      <div
        className={
          "px-8 md:px-24 relative font-urbanist" +
          " " +
          (props.category === "Regular" ? "text-custom-green" : "text-pink-500")
        }
      >
        <h1 className={"text-lg md:text-2xl absolute"}>— {props.category} Member</h1>
        <h2 className={"text-lg md:text-2xl absolute right-8 md:right-24"}>
          {props.memberRegular.length} active member
        </h2>
      </div>
      <div className="mt-8 cards-member-container flex justify-center flex-wrap w-full relative">
        {props.memberRegular.map((member: memberType, i: number) => {
          let delay = (i % 4) * 100;
          return (
            <Card
              key={i}
              delay={delay}
              member={member}
              baseColor={
                props.category === "Regular" ? "custom-green" : "pink-600"
              }
            />
          );
        })}
      </div>
    </div>
  );
}
