import { memberType } from "@/components/types/memberType";
import React from "react";
import FrontSide from "@/components/elements/MemberCardSide/FrontSide";
import BackSide from "@/components/elements/MemberCardSide/BackSide";

type CardProps = {
  delay: number;
  member: memberType;
  baseColor: string;
};

export default function Card(props: CardProps) {
  const { delay, member, baseColor } = props;
  return (
    <label data-aos="fade-up" data-aos-delay={delay}>
      <input type="checkbox" className="absolute peer scale-0" />
      <div className="card w-36 h-[10.09rem] md:h-[16.9rem] md:w-60 md:my-5 md:mx-5 m-3 relative">
        <FrontSide nama={member.nama} foto={member.foto} baseColor={baseColor} />
        <BackSide
          nama={member.nama}
          generasi={member.generasi}
          id={member.id}
          umur={member.umur}
          tanggal_lahir={member.tanggal_lahir}
          baseColor={baseColor}
        />
      </div>
    </label>
  );
}
