import Link from "next/link";
import React from "react";
import { IoArrowUndoOutline } from "react-icons/io5";

type MemberDetailNameProps = {
  isMemberRegular: boolean;
  name: string;
  nameSpliter: (name: string) => { firstWord: string; woFirstWord: string };
};

export default function MemberDetailName(props: MemberDetailNameProps) {
  const { isMemberRegular, name, nameSpliter } = props;
  return (
    <div className="flex flex-col mb-12">
      <h2 className="ml-1 font-light text-zinc-200 italic text-sm -mb-2 font-urbanist">
        {isMemberRegular ? "Regular" : "Trainee"}
      </h2>
      <div className="flex items-end ">
        <h1 className="text-6xl w-fit title-gradient-bold uppercase font-poppins">
          {name ? nameSpliter(name).firstWord : ""}
        </h1>
        <h2 className="ml-2 mb-1 font-thin text-5xl text-white capitalize font-urbanist">
          {" "}
          {name ? nameSpliter(name).woFirstWord : ""}
        </h2>
        <Link href={"/member"}>
          <IoArrowUndoOutline className="text-2xl text-zinc-400 hover:text-white mb-2 ml-1" />
        </Link>
      </div>
    </div>
  );
}
