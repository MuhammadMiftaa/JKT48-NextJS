import { useEffect } from "react";
import { useRouter } from "next/router";
import { memberType } from "@/components/types/memberType";
import useSWR from "swr";
import { HiChevronDown } from "react-icons/hi";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import Link from "next/link";
import { IoArrowUndoOutline } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";
import Loading from "@/components/fragments/Loading";
import Image from "next/image";

export default function MemberDetailPage() {
  const { query } = useRouter();

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `/api/data-member/member/${query.member}`,
    fetcher
  );
  const dataMember: memberType = isLoading ? {} : data.data;

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

  function nameSpliter(sentence: string) {
    sentence = sentence.trim();
    let words = sentence.split(" ");
    let firstWord = words[0];
    words.shift();
    let woFirstWord = words.join(" ");
    return { firstWord, woFirstWord };
  }

  return (
    <>
      {!isLoading ? (
        <>
          <div className="flex h-screen relative member-container">
            <div className="content w-full py-8 px-16 basis-3/5">
              <div className="flex flex-col mb-12">
                <h2 className="ml-1 font-light text-zinc-200 italic text-sm -mb-2 font-urbanist">
                  {dataMember.member_regular ? "Regular" : "Trainee"}
                </h2>
                <div className="flex items-end">
                  <h1 className="text-6xl font-bold text-custom-green uppercase font-poppins">
                    {dataMember.nama
                      ? nameSpliter(dataMember.nama).firstWord
                      : ""}
                    <span className="font-light text-5xl text-white capitalize font-urbanist">
                      {" "}
                      {dataMember.nama
                        ? nameSpliter(dataMember.nama).woFirstWord
                        : ""}
                    </span>
                  </h1>
                  <Link href={"/member"}>
                    <IoArrowUndoOutline className="text-2xl text-zinc-400 hover:text-white mb-2 ml-1" />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-7 overflow-hidden">
                <li key={1} className="list-none">
                  <button
                    type="button"
                    className="w-full flex items-center gap-1 mb-2"
                  >
                    <p className="font-light italic text-lg text-zinc-400 text-left hover:text-white font-urbanist">
                      Name
                    </p>
                    <HiChevronDown className="text-zinc-400 text-xl mt-1" />
                  </button>
                  <div className="subMenu list-none overflow-hidden h-0 duration-500 ">
                    <ul className="flex flex-col gap-2">
                      <li>
                        <p className="font-light text-xs text-white -mb-1 font-urbanist">
                          Stage Name
                        </p>
                        <h1 className="text-xl font-bold text-custom-green font-poppins">
                          {dataMember.nama}
                        </h1>
                      </li>
                      <li>
                        <p className="font-light text-xs text-white -mb-1 font-urbanist">
                          Full Name
                        </p>
                        <h1 className="text-xl font-bold text-custom-green font-poppins">
                          {dataMember.nama_lengkap}
                        </h1>
                      </li>
                      <li>
                        <p className="font-light text-xs text-white -mb-1 font-urbanist">
                          Call Name
                        </p>
                        <h1 className="text-xl font-bold text-custom-green font-poppins">
                          {dataMember.nama_panggilan}
                        </h1>
                      </li>
                    </ul>
                  </div>
                </li>
                <li key={2} className="list-none">
                  <button
                    type="button"
                    className="w-full flex items-center gap-1 mb-2"
                  >
                    <p className="font-light italic text-lg text-zinc-400 text-left hover:text-white font-urbanist">
                      Biodata
                    </p>
                    <HiChevronDown className="text-zinc-400 text-xl mt-1" />
                  </button>
                  <div className="subMenu list-none overflow-hidden h-0 duration-500 ">
                    <ul className="flex flex-col gap-2">
                      <li>
                        <p className="font-light text-xs text-white -mb-1 font-urbanist">
                          Age
                        </p>
                        <h1 className="text-xl font-bold text-custom-green font-poppins">
                          {dataMember.umur} y.o
                        </h1>
                      </li>
                      <li>
                        <p className="font-light text-xs text-white -mb-1 font-urbanist">
                          Birthday
                        </p>
                        <h1 className="text-xl font-bold text-custom-green font-poppins">
                          {dataMember.tanggal_lahir}
                        </h1>
                      </li>
                      <li>
                        <p className="font-light text-xs text-white -mb-1 font-urbanist">
                          Birthplace
                        </p>
                        <h1 className="text-xl font-bold text-custom-green font-poppins">
                          {dataMember.kota_lahir}
                        </h1>
                      </li>
                      <li>
                        <p className="font-light text-xs text-white -mb-1 font-urbanist">
                          Hometown
                        </p>
                        <h1 className="text-xl font-bold text-custom-green font-poppins">
                          {dataMember.asal}
                        </h1>
                      </li>
                    </ul>
                  </div>
                </li>
                <li key={3} className="list-none">
                  <button
                    type="button"
                    className="w-full flex items-center gap-1 mb-2"
                  >
                    <p className="font-light italic text-lg text-zinc-400 text-left hover:text-white font-urbanist">
                      About
                    </p>
                    <HiChevronDown className="text-zinc-400 text-xl mt-1" />
                  </button>
                  <div className="subMenu list-none overflow-hidden h-0 duration-500 ">
                    <ul className="flex flex-col gap-2">
                      <li>
                        <p className="font-light text-xs text-white -mb-1 font-urbanist">
                          Generation
                        </p>
                        <h1 className="text-xl font-bold text-custom-green font-poppins">
                          JKT48 {dataMember.generasi}th Gen
                        </h1>
                      </li>
                      <li>
                        <p className="font-light text-xs text-white -mb-1 font-urbanist">
                          Debut Date
                        </p>
                        <h1 className="text-xl font-bold text-custom-green font-poppins">
                          {dataMember.tanggal_bergabung}
                        </h1>
                      </li>
                      <li>
                        <p className="font-light text-xs text-white -mb-1 font-urbanist">
                          Fanbase
                        </p>
                        <h1 className="text-xl font-bold text-custom-green font-poppins">
                          {dataMember.fanbase}
                        </h1>
                      </li>
                      <li>
                        <p className="font-light text-xs text-white -mb-1 font-urbanist">
                          Jikoshoukai
                        </p>
                        <h1 className="text-xl font-bold text-custom-green font-poppins">
                          {dataMember.salam_perkenalan}
                        </h1>
                      </li>
                    </ul>
                  </div>
                </li>
                <li key={4} className="list-none">
                  <button
                    type="button"
                    className="w-full flex items-center gap-1 mb-2"
                  >
                    <p className="font-light italic text-lg text-zinc-400 text-left hover:text-white font-urbanist">
                      Education
                    </p>
                    <HiChevronDown className="text-zinc-400 text-xl mt-1" />
                  </button>
                  <div className="subMenu list-none overflow-hidden h-0 duration-500 ">
                    <ul className="flex flex-col gap-2">
                      <li>
                        <p className="font-light text-xs text-white -mb-1 font-urbanist">
                          College
                        </p>
                        <h1 className="text-xl font-bold text-custom-green font-poppins">
                          {dataMember.universitas}
                        </h1>
                      </li>
                      <li>
                        <p className="font-light text-xs text-white -mb-1 font-urbanist">
                          College Major
                        </p>
                        <h1 className="text-xl font-bold text-custom-green font-poppins">
                          {dataMember.jurusan}
                        </h1>
                      </li>
                    </ul>
                  </div>
                </li>
              </div>
            </div>
            <label className="basis-2/5 overflow-hidden">
              <input type="checkbox" className="absolute scale-0" />
              <div
                className="card relative h-screen w-full overflow-hidden"
                style={{ backfaceVisibility: "hidden", transition: "0.6s" }}
              >
                <Image priority width={512} height={768}
                  className="front absolute right-0 h-full w-fit cursor-pointer duration-700 backface-hidden hover:scale-110 hover:rotate-[2deg]"
                  src={
                    "/member/big/webp/" +
                    (dataMember.nama
                      ? dataMember.nama.toLowerCase().replace(/ /g, "_")
                      : "") +
                    ".webp"
                  }
                  alt={dataMember.nama}
                />
                <div
                  className="back flex flex-col justify-center items-center bg-black h-full w-full basis-1/3 absolute top-0 bottom-0 left-0 right-0 overflow-hidden duration-700 gap-2 py-2 pr-16 backface-hidden rotate-y-180"
                >
                  <Link
                    href={
                      "https://www.instagram.com/" +
                      dataMember.username_ig +
                      "/"
                    }
                    className="border border-zinc-800 h-full w-full flex justify-start items-center p-8 bg-cover bg-center bg-no-repeat group duration-1000 hover:bg-gradient-to-r hover:from-blue-500 hover:to-custom-green hover:scale-[.95]"
                  >
                    <FaInstagram className="text-6xl opacity-60 group-hover:opacity-100" />
                    <h1 className="w-full text-center font-light group-hover:font-black text-2xl italic bg-clip-text text-transparent bg-gradient-to-r from-[#f09433] via-[#bc1888] to-[#405de6] duration-200 group-hover:text-white font-urbanist">
                      {dataMember.username_ig}
                    </h1>
                  </Link>
                  <Link
                    href={
                      dataMember.username_idn
                        ? "https://idn.onelink.me/VKUf/" +
                          dataMember.username_idn.split(" ").join("")
                        : ""
                    }
                    className="border border-zinc-800 h-full w-full flex justify-start items-center p-8 group duration-1000 hover:bg-gradient-to-r hover:from-blue-500 hover:to-custom-green hover:scale-[.95]"
                  >
                    <img className="h-14 rounded-lg" src="/IDN.png" alt="" />
                    <h1 className="w-full text-center font-light group-hover:font-black text-2xl italic bg-clip-text text-transparent bg-gradient-to-r from-red-200 via-red-600 to-red-800 duration-200 group-hover:text-white font-urbanist">
                      {dataMember.username_idn}
                    </h1>
                  </Link>
                  <Link
                    href={
                      "https://www.tiktok.com/@" +
                      dataMember.username_tiktok +
                      "/"
                    }
                    className="border border-zinc-800 h-full w-full flex justify-start items-center p-8 group duration-1000 hover:bg-gradient-to-r hover:from-blue-500 hover:to-custom-green hover:scale-[.95]"
                  >
                    <FaTiktok className="text-5xl opacity-60 group-hover:opacity-100" />
                    <h1 className="w-full text-center font-light group-hover:font-black text-2xl italic bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-500 to-zinc-900 duration-200 group-hover:text-white font-urbanist">
                      {dataMember.username_tiktok}
                    </h1>
                  </Link>
                  <Link
                    href={
                      dataMember.username_sr
                        ? "https://www.showroom-live.com/r/JKT48_" +
                          dataMember.username_sr.split(/[\s()]+/)[0]
                        : ""
                    }
                    className="border border-zinc-800 h-full w-full flex justify-start items-center p-8 group duration-1000 hover:bg-gradient-to-r hover:from-blue-500 hover:to-custom-green hover:scale-[.95]"
                  >
                    <img className="h-14 rounded-lg" src="/SR.png" alt="" />
                    <h1 className="w-full text-center font-light group-hover:font-black text-2xl italic bg-clip-text text-transparent bg-gradient-to-r from-[#F29600] via-[#54C2F0] via-70% to-[#E8528D] duration-200 group-hover:text-white font-urbanist text-nowrap">
                      {dataMember.username_sr}
                    </h1>
                  </Link>
                  <Link
                    href={
                      "https://www.twitter.com/" + dataMember.username_x + "/"
                    }
                    className="border border-zinc-800 h-full w-full flex justify-start items-center p-8 group duration-1000 hover:bg-gradient-to-r hover:from-blue-500 hover:to-custom-green hover:scale-[.95]"
                  >
                    <RiTwitterXFill className="text-5xl opacity-60 group-hover:opacity-100" />
                    <h1 className="w-full text-center font-light group-hover:font-black text-2xl italic bg-clip-text text-transparent bg-gradient-to-r from-slate-950 to-white duration-200 group-hover:text-white font-urbanist">
                      {dataMember.username_x}
                    </h1>
                  </Link>
                  <div className="my-2 absolute bottom-0 top-0 right-0 w-14 border-zinc-800 border flex justify-center items-center bg-transparent  hover:bg-gradient-to-t hover:from-blue-500 hover:to-custom-green hover:cursor-pointer duration-500 group hover:scale-[.99]">
                    <GoArrowSwitch className="text-2xl text-zinc-500 group-hover:text-black group-hover:rotate-180 duration-500" />
                  </div>
                </div>
              </div>
            </label>
          </div>
        </>
      ) : (
        <div
          className="flex justify-center items-center"
          style={{ height: "70vh" }}
        >
          <Loading />
        </div>
      )}
    </>
  );
}
