import { memberType } from "@/components/types/memberType";
import React from "react";
import Image from "next/image";
import Link from "next/link";
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
      <input type="checkbox" className="absolute scale-0 peer" />
      <div
        className="card w-60 my-5 mx-5 relative"
        style={{ height: "16.9rem" }}
      >
        <FrontSide nama={member.nama} baseColor={baseColor} />
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
