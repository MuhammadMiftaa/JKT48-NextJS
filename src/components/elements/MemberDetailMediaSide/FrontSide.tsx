import React from "react";
import Image from "next/image";

export default function FrontSide(props: { nama: string; foto: string }) {
  return (
    <Image
      priority
      width={512}
      height={768}
      className="object-cover h-full w-auto duration-700 group-hover:scale-110 group-hover:rotate-[2deg]"
      src={props.foto}
      alt={props.nama + " Photo"}
    />
  );
}
