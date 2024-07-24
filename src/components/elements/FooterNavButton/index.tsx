import Link from "next/link";
import React from "react";

export default function FooterNavButton(props: {
  class: string;
  children: React.ReactNode;
  link: string;
}) {
  return (
    <Link href={props.link} className={"button-nav group" + " " + props.class}>
      {props.children}
    </Link>
  );
}
