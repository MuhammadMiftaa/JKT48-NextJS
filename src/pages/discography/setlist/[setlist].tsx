import Loading from "@/components/elements/Loading";
import SetlistSong from "@/components/fragments/SetlistSong";
import SetlistTitle from "@/components/fragments/SetlistTitle";
import Footer from "@/components/layouts/Footer";
import { setlistType } from "@/components/types/setlistType";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GoMoveToStart } from "react-icons/go";
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
          <SetlistTitle
            nama_setlist={dataSetlist.nama_setlist}
            dibawakan_oleh={dataSetlist.dibawakan_oleh}
          />
          <div className="content px-16 mb-32">
            {dataSetlist.lagu.map((lagu, index) => (
              <SetlistSong lagu={lagu} index={index} key={index} />
            ))}
            <Link
              href={"/discography/setlist"}
              className="absolute top-14 left-6 text-zinc-500 text-2xl py-1 px-2 rounded-sm border border-zinc-500 cursor-pointer hover:text-white hover:border-white active:border-black active:bg-custom-green active:text-black"
            >
              <GoMoveToStart />
            </Link>
          </div>
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <Loading />
        </div>
      )}
    </>
  );
}
