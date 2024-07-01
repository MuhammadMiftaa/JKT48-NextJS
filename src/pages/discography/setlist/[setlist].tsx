import Loading from "@/components/fragments/Loading";
import Footer from "@/components/layouts/Footer";
import { setlistType } from "@/components/types/setlistType";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GoMoveToStart } from "react-icons/go";
import { HiChevronDown } from "react-icons/hi";
import { IoArrowUndoOutline } from "react-icons/io5";
import useSWR from "swr";

export default function SetlistDetailPage() {
  const { query } = useRouter();
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `/api/data-setlist/setlist/${query.setlist}`,
    fetcher
  );
  const dataSetlist: setlistType = isLoading ? {} : data.data;

  const { push } = useRouter();
  const hanlderSeeSong = (song: string) => {
    push(`/setlist#${song}`);
  };

  useEffect(() => {
    const subMenus = document.querySelectorAll<HTMLDivElement>(".subMenu");
    const buttons =
      document.querySelectorAll<HTMLButtonElement>(".content button");

    const click = (item: HTMLButtonElement) => {
      subMenus.forEach((menu) => {
        if (menu) menu.style.height = "0px";
      });
      buttons.forEach((button) => button.classList.remove("active"));

      if (!item.nextElementSibling) {
        item.classList.add("active");
        return;
      }

      const subMenu = item.nextElementSibling as HTMLDivElement;
      const ul = subMenu.querySelector("ul");

      if (!subMenu.clientHeight && ul) {
        subMenu.style.height = `${ul.clientHeight}px`;
        item.classList.add("active");
      } else {
        subMenu.style.height = "0px";
        item.classList.remove("active");
      }
    };

    buttons.forEach((button) => {
      button.addEventListener("click", (event) =>
        click(event.currentTarget as HTMLButtonElement)
      );
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", (event) =>
          click(event.currentTarget as HTMLButtonElement)
        );
      });
    };
  });

  return (
    <>
      {!isLoading ? (
        <div className="container">
          <div className="relative w-fit h-fit mx-auto">
            <h1 className="text-5xl text-center font-bold text-custom-green uppercase mt-12">
              {dataSetlist.nama_setlist}
            </h1>
          </div>
          <h2 className="text-white text-xs font-light text-center italic capitalize mb-20">
            Performed <span className="lowercase">by</span>{" "}
            {dataSetlist.dibawakan_oleh.split("_").join(" ")}
          </h2>
          <div className="content px-16 mb-32">
            {dataSetlist.lagu.map((lagu, index) => (
              <li
                id={lagu.judul_lagu.toLowerCase().replace(/ /g, "_")}
                key={index}
                className="list-none my-8"
              >
                <button
                  type="button"
                  className="w-full flex items-center gap-1"
                >
                  <p className="font-light text-2xl text-zinc-400 text-left hover:text-white capitalize active:text-custom-green">
                    {lagu.judul_lagu}
                  </p>
                  <HiChevronDown className="text-zinc-400 text-xl mt-1" />
                </button>
                <div className="subMenu list-none overflow-hidden h-0 duration-500">
                  <ul className="mt-5 h-fit pb-14 pt-8 bg-zinc-950 rounded-3xl">
                    {lagu.lirik.map((larik, index) => (
                      <p
                        className="font-light text-white text-lg text-center py-1 selection:bg-blue-300 selection:text-black"
                        key={index}
                      >
                        {larik}
                      </p>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
            <Link
              href={"/discography/setlist"}
              className="absolute top-14 left-6 text-zinc-500 text-2xl py-1 px-2 rounded-sm border border-zinc-500 cursor-pointer hover:text-white hover:border-white active:border-black active:bg-custom-green active:text-black"
            >
              <GoMoveToStart />
            </Link>
          </div>
          <Footer />
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <Loading />
        </div>
      )}
    </>
  );
}
