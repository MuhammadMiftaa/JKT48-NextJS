import Link from "next/link";
import React from "react";
import { BiSolidExit } from "react-icons/bi";

type MenuProps = {
  pathname: string;
  item: string;
  index: number;
  children?: React.ReactNode;
};

function Menu(props: MenuProps) {
  const { pathname, item, index } = props;
  return (
    <li key={index}>
      <Link
        href={item === "home" ? "/" : `/${item}`}
        className={
          "animate__animated animate__fadeIn block py-2 px-3 text-gray-400 rounded md:bg-transparent md:p-0 capitalize" +
          " " +
          (pathname === "/" + item
            ? "md:text-custom-green bg-custom-green text-zinc-950"
            : pathname === "/" && item === "home"
            ? "md:text-custom-green bg-custom-green text-zinc-950"
            : "md:text-gray-400 hover:text-custom-green")
        }
        aria-current="page"
      >
        {item}
      </Link>
    </li>
  );
}

export default Menu;
