import Image from "next/image";
import React from "react";

export default function NewsHighlight(props: {
  image: string;
  category: string;
  description: string;
}) {
  const { image, category, description } = props;
  return (
    <div className="relative hidden md:block h-full w-full basis-3/5">
      <Image
        width={750}
        height={650}
        src={image}
        alt={image}
        className="h-full object-cover object-center"
      ></Image>
      <div className="absolute bottom-0 top-0 text-center right-0 left-0 font-urbanist before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-0 before:top-0 before:bg-gradient-to-t before:from-zinc-950 before:to-transparent flex flex-col justify-end p-8">
        <h1 className="z-10 text-lg font-poppins text-left">{category}</h1>
        <h1 className="z-10 text-2xl font-poppins text-left">{description}</h1>
      </div>
    </div>
  );
}
