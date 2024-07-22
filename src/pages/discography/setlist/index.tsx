import Loading from "@/components/elements/Loading";
import { setlistType } from "@/components/types/setlistType";
import Link from "next/link";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { MdOutlineLyrics } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
import useSWR from "swr";

export default function setlistPage() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "/api/data-setlist/setlist",
    fetcher
  );
  const dataSetlist: setlistType[] = isLoading ? [] : data.data;
  console.log(dataSetlist);

  const [current, setCurrent] = useState(0);
  const prevSetCurrent = () => {
    const isFirst = current === 0;
    const newIndex = isFirst ? dataSetlist.length - 1 : current - 1;
    setCurrent(newIndex);
  };

  const nextSetCurrent = () => {
    const isLast = current === dataSetlist.length - 1;
    const newIndex = isLast ? 0 : current + 1;
    setCurrent(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <>
      {!isLoading ? (
        <>
          <div className="container">
            <h1 className="text-zinc-500 font-light text-xl tracking-wider text-center mt-20 font-poppins">
              On-going{" "}
              <span className="text-5xl uppercase title-gradient-bold block w-fit mx-auto">
                Setlist
              </span>
            </h1>
            <div
              className="relative max-w-[750px] h-[500px] py-16 px-12 mx-auto"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div
                className="w-full h-full bg-cover bg-center duration-500 group relative flex items-center justify-center border border-custom-green shadow-[0_0_30px_0] shadow-custom-green"
                style={{
                  backgroundImage: `url("/setlistPoster/${dataSetlist[
                    current
                  ].nama_setlist.replace(/ /g, "_")}.webp")`,
                }}
              >
                <div
                  className="p-2 border rounded-full border-white absolute top-1/2 -translate-x-0 translate-y-[-50%] -left-12 cursor-pointer active:-translate-x-[1px]"
                  style={{ backgroundColor: "rgb(0,0,0,0.7)" }}
                  onClick={() => prevSetCurrent()}
                >
                  <CgChevronLeft className="text-xl text-custom-green" />
                </div>
                <div
                  className="p-2 border rounded-full border-white absolute top-1/2 -translate-x-0 translate-y-[-50%] -right-12 cursor-pointer active:translate-x-[1px]"
                  style={{ backgroundColor: "rgb(0,0,0,0.7)" }}
                  onClick={nextSetCurrent}
                >
                  <CgChevronRight className="text-xl text-custom-green" />
                </div>
                <div className="flex py-2 absolute -bottom-10 justify-between items-center">
                  {dataSetlist.map((setlist, i) => (
                    <div
                      key={i}
                      onClick={() => goToSlide(i)}
                      className={`cursor-pointer hover:text-custom-green focus:text-custom-green duration-300 ${
                        current === i ? "scale-150 text-white" : "text-black"
                      }`}
                    >
                      <RxDotFilled className="cursor-pointer" />
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-black to-transparent">
                  <div className="flex justify-between items-end absolute bottom-1 py-1.5 px-4 w-full">
                    <h1 className="text-md rounded-full border-zinc-300 font-light w-fit capitalize  text-zinc-300 duration-500 italic font-urbanist">
                      {dataSetlist[current].nama_setlist}
                    </h1>
                    <Link
                      href={"/discography/setlist/" + dataSetlist[current].id}
                      className="text-4xl text-white hover:text-custom-green py-1"
                    >
                      <MdOutlineLyrics />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="h-[70vh] flex justify-center items-center">
            <Loading />
          </div>
        </>
      )}
    </>
  );
}
