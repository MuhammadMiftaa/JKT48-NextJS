import React from "react";

export default function MemberDetailListIItem(props: {
  label: string;
  value: string;
  index: number;
}) {
  const { label, value, index } = props;
  return (
    <li key={index}>
      <p className="font-light text-xs text-white -mb-1 font-urbanist">
        {label}
      </p>
      <h1 className="text-xl font-bold text-custom-green font-poppins">
        {value}
      </h1>
    </li>
  );
}
