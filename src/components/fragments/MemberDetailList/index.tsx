import MemberDetailListIItem from "@/components/elements/MemberDetailListItem";
import React from "react";
import { HiChevronDown } from "react-icons/hi";

type MemberDetailListProps = {
  category: string;
  index: number;
  dataMember: {
    label: string[];
    value: any[];
  };
};

export default function MemberDetailList(props: MemberDetailListProps) {
  const { category, dataMember, index } = props;
  return (
    <li key={index} className="list-none">
      <button type="button" className="w-full flex items-center gap-1 mb-2">
        <p className="font-light italic md:text-lg text-zinc-400 text-left hover:text-white font-urbanist">
          {category}
        </p>
        <HiChevronDown className="text-zinc-400 text-xl mt-1" />
      </button>
      <div className="subMenu list-none overflow-hidden h-0 duration-500 ">
        <ul className="flex flex-col md:gap-2">
          {dataMember.label.map((label, index) => (
            <MemberDetailListIItem
            key={index}
              label={label}
              value={dataMember.value[index]}
              index={index}
            />
          ))}
          <li></li>
        </ul>
      </div>
    </li>
  );
}
