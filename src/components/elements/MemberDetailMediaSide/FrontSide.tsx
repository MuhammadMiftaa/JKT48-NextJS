import React from "react";
import Image from "next/image";

export default function FrontSide(props: { nama: string }) {
  return (
    <Image
      priority
      width={512}
      height={768}
      className="front absolute right-0 h-full w-fit cursor-pointer duration-700 backface-hidden hover:scale-110 hover:rotate-[2deg]"
      src={
        "/member/big/webp/" +
        (props.nama ? props.nama.toLowerCase().replace(/ /g, "_") : "") +
        ".webp"
      }
      alt={props.nama}
    />
  );
}
