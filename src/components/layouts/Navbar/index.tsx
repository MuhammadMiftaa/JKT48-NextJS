import Link from "next/link";

export default function Navbar() {
  const menu = ["Theater", "Shop", "News", "Member"];

  return (
    <nav className="flex items-center justify-between w-full p-5 fixed z-20">
      <h1 className="text-xl px-5 font-bold">JKT48</h1>
      <ul className="flex">
        {menu.map((item, index) => {
          return (
            <li key={index} className="text-sm px-5">
              <Link href={"/"+item.toLowerCase()}>{item}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
