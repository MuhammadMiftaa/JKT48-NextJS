import Link from "next/link";
import { Navbar } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import { BiSolidExit } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import NavList from "@/components/fragments/NavList";

export default function NavbarLayout() {
  const { data }: any = useSession();

  return (
    <nav className="bg-black fixed w-full z-20 top-0 start-0 border-b border-custom-green">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-4 pb-3 px-6">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse animate__animated animate__fadeInLeft"
        >
          <span className="self-center italic text-2xl font-bold text-custom-green whitespace-nowrap dark:text-white font-poppins">
            JKT48
          </span>
        </Link>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {data ? (
            <Link
              href={"/profile"}
              className="flex items-center gap-2 rounded-xl border-[0.5px] border-zinc-600 py-1 px-3 sm:border-none"
            >
              <h1 className="font-poppins title-gradient-bold">
                {data.user.nickname}
              </h1>
              <BsPersonCircle className="text-blue-500 text-lg" />
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => signIn()}
              className="text-black bg-gradient-to-r from-custom-green to-blue-600 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-lg px-3 py-1 text-center font-urbanist animate__animated animate__fadeInRight"
            >
              Login
            </button>
          )}
        </div>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <NavList />
        </div>
      </div>
    </nav>
  );
}
