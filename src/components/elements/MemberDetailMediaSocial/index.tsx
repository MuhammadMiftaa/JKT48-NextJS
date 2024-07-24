import Link from "next/link";
import React from "react";

export default function MemberDetailMediaSocial(props: {
  link: string;
  colorClass: string;
  username: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={props.link} className="button-medsoc group">
      {props.children}
      <h1 className={"link-medsoc " + props.colorClass}>{props.username}</h1>
    </Link>
  );
}
