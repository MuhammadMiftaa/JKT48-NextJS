import Card from "@/components/fragments/MemberCard/BigCard";
import { memberType } from "@/types/memberType";
import React from "react";

export default function MemberCards(props: {
  memberRegular: memberType[];
  category: string;
  search: {
    name: string;
    gen: number;
    age: number;
    hometown: string;
    birthplace: string;
    birthday: string;
  } | null;
  showKabesha: boolean;
}) {
  const filterMembers = (member: memberType) => {
    if (!props.search) return true; // Jika tidak ada kriteria pencarian, tampilkan semua member

    const {
      name = "",
      gen,
      age,
      hometown = "",
      birthplace = "",
      birthday = "",
    } = props.search;

    const isNameMatch = name
      ? member.nama.toLowerCase().includes(name.toLowerCase())
      : true;
    const isBirthdayMatch = birthday
      ? member.tanggal_lahir.toLowerCase().includes(birthday.toLowerCase())
      : true;
    const isGenMatch = gen ? member.generasi === gen : true;
    const isAgeMatch = age ? member.umur === age : true;
    const isHometownMatch = hometown
      ? member.asal.toLowerCase().includes(hometown.toLowerCase())
      : true;
    const isBirthplaceMatch = birthplace
      ? member.kota_lahir.toLowerCase().includes(birthplace.toLowerCase())
      : true;

    return (
      isNameMatch &&
      isGenMatch &&
      isBirthdayMatch &&
      isAgeMatch &&
      isHometownMatch &&
      isBirthplaceMatch
    );
  };

  return (
    <div className="mb-20">
      <div
        className={
          "px-8 md:px-24 relative font-urbanist" +
          " " +
          (props.category === "Regular" ? "text-custom-green" : "text-pink-500")
        }
      >
        <h1 className={"text-lg md:text-2xl absolute"}>
          — {props.category} Member
        </h1>
        <h2 className={"text-lg md:text-2xl absolute right-8 md:right-24"}>
          {props.memberRegular.length} active member
        </h2>
      </div>
      <div className="mt-8 cards-member-container flex justify-center flex-wrap w-full relative">
        {props.memberRegular
          .filter(filterMembers)
          .map((member: memberType, i: number) => {
            let delay = (i % 4) * 100;
            return (
              <Card
                key={i}
                delay={delay}
                member={member}
                baseColor={
                  props.category === "Regular" ? "custom-green" : "pink-600"
                }
                showKabesha={props.showKabesha}
              />
            );
          })}
      </div>
    </div>
  );
}
