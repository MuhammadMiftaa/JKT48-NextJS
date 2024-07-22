import Menu from "@/components/elements/NavMenu/Menu";
import SubMenu from "@/components/elements/NavMenu/SubMenu";
import { useRouter } from "next/router";
import React, { use, useState } from "react";

export default function NavList() {
  const { pathname } = useRouter();
  
  const menu = ["home", "theater", "shop", "news", "member"];
  const submenu = ["setlist", "new release", "original singles"];

  return (
    <ul className="font-urbanist flex flex-col p-4 gap-1 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black  md:dark:bg-gray-900">
      {menu.map((item, index) => (
        <Menu item={item} index={index} pathname={pathname} />
      ))}
      <SubMenu pathname={pathname} submenu={submenu} />
    </ul>
  );
}
