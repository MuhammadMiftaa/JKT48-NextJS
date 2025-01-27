import { memberType } from "@/types/memberType";
import Image from "next/image";
import React from "react";

export default function ProductCard(props: { member: memberType }) {
  return (
    <div className="w-full max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700">
      <a href="#">
        <Image
          width={700}
          height={700}
          className="p-8 rounded-t-lg h-72 w-fit"
          src={`/member/${props.member.nama
            .toLowerCase()
            .replace(" ", "_")}.png`}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5 font-poppins">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {props.member.nama}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <h1>Meet and Greet</h1>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $599
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
