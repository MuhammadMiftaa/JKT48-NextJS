import { memberType } from "@/types/memberType";
import React from "react";
import FrontSide from "@/components/elements/MemberCardSide/FrontSide";
import BackSide from "@/components/elements/MemberCardSide/BackSide";

type CardProps = {
  delay: number;
  member: memberType;
  baseColor: string;
  showKabesha: boolean;
};

export default function Card(props: CardProps) {
  const { delay, member, baseColor, showKabesha } = props;
  return (
    <label data-aos="fade-up" data-aos-delay={delay}>
      <input type="checkbox" className="absolute peer scale-0" />
      <div className="card w-36 h-[10.09rem] md:h-[16.9rem] md:w-60 md:my-5 md:mx-5 m-3 relative">
        <FrontSide
          nama={member.nama}
          showKabesha={showKabesha}
          foto={member.foto}
          kabesha={member.kabesha}
          baseColor={baseColor}
        />
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
