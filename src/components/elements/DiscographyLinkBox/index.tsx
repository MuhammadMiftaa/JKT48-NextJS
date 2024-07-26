import { ArrowUpIcon, StarIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

export default function DiscographyLink(
  props: { title: string; description: string } & PropsWithChildren
) {
  const { title, description } = props;
  return (
    <div
      className="flex flex-col items-left p-6 md:p-12 bg-zinc-900 md:h-64 h-48 relative hover:bg-custom-green hover:text-black group"
      data-aos="flip-up"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      {props.children}
      <h1 className="md:mt-3 mt-5 md:mb-2 text-lg md:text-2xl font-bold font-poppins">{title}</h1>
      <h2 className="md:text-sm text-xs font-light md:w-3/4 text-zinc-600 group-hover:text-black font-poppins">
        {description}
      </h2>
      <Link
        href={"/discography/" + title.toLowerCase().replace(" ", "-")}
        className="p-1.5 bg-zinc-800 rounded-full absolute bottom-4 right-5 md:bottom-9 md:right-11 group-hover:bg-white hover:cursor-pointer"
      >
        <ArrowUpIcon className="md:h-6 h-4 w-4 md:w-6 rotate-45" />
      </Link>
    </div>
  );
}
