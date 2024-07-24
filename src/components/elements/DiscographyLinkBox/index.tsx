import { ArrowUpIcon, StarIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

export default function DiscographyLink(
  props: { title: string; description: string } & PropsWithChildren
) {
  const { title, description } = props;
  return (
    <div
      className="flex flex-col items-left py-12 px-12 bg-zinc-900 h-64 relative hover:bg-custom-green hover:text-black group"
      data-aos="fade-left"
      data-aos-duration="500"
      data-aos-delay="200"
    >
      {props.children}
      <h1 className="mt-3 mb-2 text-2xl font-bold font-poppins">{title}</h1>
      <h2 className="text-sm font-light w-3/4 text-zinc-600 group-hover:text-black font-poppins">
        {description}
      </h2>
      <Link
        href={"/discography/" + title.toLowerCase().replace(" ", "-")}
        className="p-1.5 bg-zinc-800 rounded-full absolute bottom-9 right-11 group-hover:bg-white hover:cursor-pointer"
      >
        <ArrowUpIcon className="h-6 w-6 rotate-45" />
      </Link>
    </div>
  );
}
