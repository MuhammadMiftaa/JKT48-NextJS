import Link from "next/link";
import { BiSolidExit } from "react-icons/bi";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";

type SubMenuProps = {
  pathname: string;
  submenu: string[];
};

function SubMenu(props: SubMenuProps) {
  const [dropdownOpen, setDropdownHover] = useState(false);
  const { data }: any = useSession();
  const { pathname, submenu } = props;
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
        <h1
          className={
            pathname === "/discography/setlist" ? "text-custom-green" : ""
          }
        >
          Discography{" "}
        </h1>
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
          className="absolute md:top-6 z-10 font-normal divide-y rounded-lg shadow-[0_0_7px_0_rgba(0,0,0,0.3)] w-44 bg-black divide-gray-600 border border-custom-green shadow-custom-green"
        >
          <ul
            className="py-2 text-sm text-gray-400"
            aria-labelledby="dropdownLargeButton"
          >
            {submenu.map((item, index) => (
              <li>
                <Link
                  key={index}
                  href={"/discography/" + item.replace(/ /g, "-")}
                  className="block px-4 py-2 hover:text-custom-green capitalize"
                >
                  {item}
                </Link>
              </li>
            ))}
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
  );
}

export default SubMenu;
