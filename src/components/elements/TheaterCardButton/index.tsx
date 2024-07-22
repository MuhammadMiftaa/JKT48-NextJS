import Link from "next/link";
import React, { ReactNode } from "react";

export default function TheaterCardButton(props: {
  className: string;
  children: ReactNode;
}) {
  return (
    <Link className={props.className} href={""}>
      {props.children}
    </Link>
  );
}
