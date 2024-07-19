import Link from "next/link";
import { Navbar } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import { BiSolidExit } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";

export default function NavbarLayout() {
  const [dropdownOpen, setDropdownHover] = useState(false);
  const menu = ["Theater", "Shop", "News", "Member"];

  const { data }: any = useSession();

  const router = useRouter();

  const goToDiscography = () => {
    router.push("/discography");
  };

  const handleMouseEnter = () => {
    setDropdownHover(true);
  };

  const handleMouseLeave = () => {
    setDropdownHover(false);
  };

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
            <div className="flex items-center gap-2 rounded-xl border-[0.5px] border-zinc-600 py-1 px-3 sm:border-none">
              <h1 className="font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-custom-green to-blue-500">
                {data.user.nickname}
              </h1>
              <BsPersonCircle className="text-blue-500 text-lg" />
            </div>
          ) : (
            <button
              type="button"
              onClick={() => signIn()}
              className="text-black bg-gradient-to-r from-custom-green to-blue-600 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-lg px-3 py-1 text-center font-urbanist animate__animated animate__fadeInRight"
            >
              Login
            </button>
          )}
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
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="font-urbanist flex flex-col p-4 gap-1 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black  md:dark:bg-gray-900">
            <li>
              <Link
                href="/"
                className="animate__animated animate__fadeIn block py-2 px-3 text-black bg-custom-green rounded md:bg-transparent md:text-custom-green md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/theater"
                className="block py-2 px-3 text-gray-400 rounded hover:border-custom-green border-transparent border md:hover:bg-transparent md:hover:text-custom-green md:p-0 md:border-none animate__animated animate__fadeIn"
              >
                Theater
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="block py-2 px-3 text-gray-400 rounded hover:border-custom-green border-transparent border md:hover:bg-transparent md:hover:text-custom-green md:p-0 md:border-none animate__animated animate__fadeIn"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/news"
                className="block py-2 px-3 text-gray-400 rounded hover:border-custom-green border-transparent border md:hover:bg-transparent md:hover:text-custom-green md:p-0 md:border-none animate__animated animate__fadeIn"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                href="/member"
                className="block py-2 px-3 text-gray-400 rounded hover:border-custom-green border-transparent border md:hover:bg-transparent md:hover:text-custom-green md:p-0 md:border-none animate__animated animate__fadeIn"
              >
                Member
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                id="dropdownNavbarLink"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-400 rounded hover:border-custom-green border-transparent  md:hover:text-custom-green md:border-0 md:p-0 md:w-auto animate__animated animate__fadeIn"
                onClick={goToDiscography}
              >
                Discography{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div
                  id="dropdownNavbar"
                  className="absolute md:top-6 z-10 font-normal divide-y rounded-lg shadow w-44 bg-black divide-gray-600 border border-custom-green"
                >
                  <ul
                    className="py-2 text-sm text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link
                        href="/discography/setlist"
                        className="block px-4 py-2 hover:text-custom-green"
                      >
                        Ongoing Setlist
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/discography/songs"
                        className="block px-4 py-2 hover:text-custom-green"
                      >
                        New Release
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/discography/single-original"
                        className="block px-4 py-2 hover:text-custom-green"
                      >
                        Original Singles
                      </Link>
                    </li>
                  </ul>
                  {data && (
                    <button
                      className="py-2  pl-4 flex items-center gap-1 group"
                      type="button"
                      onClick={() => signOut()}
                    >
                      <h1 className="font-urbanist text-md  duration-500  text-zinc-400 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-custom-green group-hover:to-blue-600 font-bold">
                        Logout
                      </h1>
                      <BiSolidExit className="text-zinc-400 group-hover:text-blue-600 duration-500" />
                    </button>
                  )}
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
