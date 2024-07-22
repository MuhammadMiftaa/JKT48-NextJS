import Footer from "@/components/layouts/Footer";
import News from "@/components/layouts/News";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TbChevronsLeft, TbChevronsRight } from "react-icons/tb";

export default function NewsPage() {
  const category = [
    "All",
    "Goods",
    "Theater",
    "Event",
    "Birthday",
    "Release",
    "Other",
  ];

  const theater = [
    {
      judul:
        "Pengumuman Mengenai Pre-Order Digital Photobook “JKT48 Theater Sementara 2024 & Pajama Drive Shonichi” dengan bonus Video Call with JKT48",
      tanggal: "7 Juli 2024",
    },
    {
      judul:
        "Pengumuman Mengenai Penambahan Penjualan Tiket JKT48 Theater Yogyakarta",
      tanggal: "23 Juni 2024",
    },
    {
      judul: "Pengumuman Mengenai Video Call Pengganti Lulu Salsabila",
      tanggal: "21 Juni 2024",
    },
    {
      judul:
        "Pengumuman Mengenai Detail Tiket JKT48 Theater Surabaya & Yogyakarta",
      tanggal: "7 Juni 2024",
    },
    {
      judul: "Pengumuman Mengenai TEATER SEMENTARA JKT48 2024",
      tanggal: "5 Juni 2024",
    },
    {
      judul:
        "Pengumuman Mengenai Penjualan Digital Wallpaper Pack “It's Playtime!” dengan bonus Video Call with JKT48 Virtual",
      tanggal: "3 Juni 2024",
    },
    {
      judul:
        "Pengumuman Mengenai Pre-Order Digital Photobook “THINK DONUT” dengan bonus Video Call with JKT48",
      tanggal: "2 Juni 2024",
    },
    {
      judul:
        'Pengumuman Mengenai JKT48 Special Theater Show "Ramune no Nomikata - Cara Meminum Ramune" – Ladies and Kids Day',
      tanggal: "25 Mei 2024",
    },
  ];

  const [selectedImage, setSelectedImage] = useState("meet_and_greet");
  const [selectedCategory, setSelectedCategory] = useState(
    "Event | 5 Juni 2024"
  );
  const [selectedDescription, setSelectedDescription] = useState(
    "Pengumuman Mengenai TEATER SEMENTARA JKT48 2024"
  );

  return (
    <div className="px-20">
      <div className="container justify-stretch overflow-hidden pt-12 pb-4 mt-12">
        <div className="pb-12 text-white font-urbanist">
          <div className="flex flex-col">
            <h1 className="text-6xl font-light">Latest News</h1>
            <div className="flex mt-4 gap-2 flex-wrap">
              {category.map((cat, i) => {
                return (
                  <h2
                    key={i}
                    className="text-sm font-normal hover:cursor-pointer py-0.5 px-3 rounded-full border border-white"
                  >
                    {cat}
                  </h2>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex h-96 overflow-auto">
          <div className="relative h-full w-full basis-3/5">
            <Image
              width={750}
              height={650}
              src={"/newsImage/" + selectedImage + ".jpg"}
              alt={selectedImage}
              className="h-full object-cover object-center"
            ></Image>
            <div className="absolute bottom-0 top-0 text-center right-0 left-0 font-urbanist before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-0 before:top-0 before:bg-gradient-to-t before:from-zinc-950 before:to-transparent flex flex-col justify-end p-8">
              <h1 className="z-10 text-lg font-poppins text-left">
                {selectedCategory}
              </h1>
              <h1 className="z-10 text-2xl font-poppins text-left">
                {selectedDescription}
              </h1>
            </div>
          </div>
          <div className="flex flex-col basis-2/5 px-4 justify-between">
            <div
              className="flex h-16 w-full border-b-slate-500 border-b group cursor-pointer"
              onMouseEnter={() => {
                setSelectedImage("meet_and_greet");
                setSelectedDescription(
                  "Pengumuman Mengenai TEATER SEMENTARA JKT48 2024"
                );
                setSelectedCategory("Event | 5 Juni 2024");
              }}
            >
              <img
                src="/newsImage/meet_and_greet.jpg"
                alt="meet and greet"
                className="h-full aspect-video object-cover object-center mr-2"
              />
              <p className="font-urbanist text-sm text-gradient-group-hover">
                Pengumuman Mengenai TEATER SEMENTARA JKT48 2024
              </p>
            </div>
            <div
              className="flex h-16 w-full border-b-slate-500 border-b group cursor-pointer"
              onMouseEnter={() => {
                setSelectedImage("pajama_drive_shonichi");
                setSelectedDescription(
                  "Pengumuman Mengenai Pertunjukan Perdana “Pajama Drive” oleh Trainee JKT48"
                );
                setSelectedCategory("Event | 24 Mei 2024");
              }}
            >
              <img
                src="/newsImage/pajama_drive_shonichi.jpg"
                alt="meet and greet"
                className="h-full aspect-video object-cover object-center mr-2"
              />
              <p className="font-urbanist text-sm group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-custom-green group-hover:to-blue-600">
                Pengumuman Mengenai Pertunjukan Perdana “Pajama Drive” oleh
                Trainee JKT48
              </p>
            </div>
            <div
              className="flex h-16 w-full border-b-slate-500 border-b group cursor-pointer"
              onMouseEnter={() => {
                setSelectedImage("digital_photobook");
                setSelectedDescription(
                  "Pengumuman Mengenai Pre-Order Digital Photobook “JKT48 Theater Sementara 2024 & Pajama Drive Shonichi” dengan bonus Video Call with JKT48"
                );
                setSelectedCategory("Event | 7 Juli 2024");
              }}
            >
              <img
                src="/newsImage/digital_photobook.jpg"
                alt="meet and greet"
                className="h-full aspect-video object-cover object-center mr-2"
              />
              <p className="font-urbanist text-sm group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-custom-green group-hover:to-blue-600">
                JKT48 Theater Sementara 2024 & Pajama Drive Shonichi
              </p>
            </div>
            <div
              className="flex h-16 w-full border-b-slate-500 border-b group cursor-pointer"
              onMouseEnter={() => {
                setSelectedImage("last_voyage");
                setSelectedDescription(
                  "Pengumuman Mengenai Detail Shani Graduation Concert “LAST VOYAGE”"
                );
                setSelectedCategory("Event | 10 Maret 2024");
              }}
            >
              <img
                src="/newsImage/last_voyage.jpg"
                alt="meet and greet"
                className="h-full aspect-video object-cover object-center mr-2"
              />
              <p className="font-urbanist text-sm group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-custom-green group-hover:to-blue-600">
                Pengumuman Mengenai Detail Shani Graduation Concert “LAST
                VOYAGE”
              </p>
            </div>
            <div
              className="flex h-16 w-full border-b-slate-500 border-b group cursor-pointer"
              onMouseEnter={() => {
                setSelectedImage("video_call");
                setSelectedDescription(
                  "Pengumuman Mengenai Pre-Order Digital Photobook “THINK DONUT”dengan bonus Video Call with JKT48"
                );
                setSelectedCategory("Event | 11 Juni 2024");
              }}
            >
              <img
                src="/newsImage/video_call.jpg"
                alt="meet and greet"
                className="h-full aspect-video object-cover object-center mr-2"
              />
              <p className="font-urbanist text-sm group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-custom-green group-hover:to-blue-600">
                Pengumuman Mengenai Pre-Order Digital Photobook “THINK
                DONUT”dengan bonus Video Call with JKT48
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <h1 className="px-20 w-fit mx-auto font-poppins font-semibold text-2xl text-gradient md:before:content-['——————————————————'] md:before:mr-3 md:before:tracking-[-4px] md:after:content-['——————————————————————————————'] md:after:tracking-[-10px] md:after:ml-3">
          Latest News
        </h1>
        <div className="flex mt-4 gap-8 items-center">
          <div className="flex flex-col mb-5 font-poppins basis-3/5">
            {theater.map((theater, i) => (
              <div
                key={i}
                className="h-24 flex flex-col justify-center group border-b border-zinc-500"
              >
                <h1 className="text-slate-300 text-xs group-hover:text-custom-green cursor-pointer">
                  {theater.tanggal}
                </h1>
                <h2 className="text-md group-hover:text-custom-green cursor-pointer">
                  {theater.judul}
                </h2>
              </div>
            ))}
          </div>
          <div className="basis-2/5 h-fit font-poppins">
            <h1 className="text-3xl mb-4 text-center font-semibold text-gradient">
              Chekicha
            </h1>
            <img src="/birthdayMember.jpg" alt="birthday member this month" />
            <h1 className="text-zinc-500 mt-5 italic text-sm md:before:content-['——————————————————'] md:before:mr-3 md:before:tracking-[-4px] md:after:content-['——————————————————————————————————————————————————————————————————'] md:after:tracking-[-10px] md:after:ml-2">
              10 Juli 2024
            </h1>
            <h1 className="mt-3 cursor-pointer hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-custom-green hover:to-blue-600 text-xl font-light after:content-['see more...'] after:text-zinc-500">
              Pengumuman Mengenai Birthday 2-Shot Online Bulan Juli dengan
              Chekicha
            </h1>
          </div>
        </div>
        <div className="w-fit mx-auto flex items-center gap-4 font-poppins border rounded-xl border-zinc-800 px-2 py-1 text-slate-200">
          <TbChevronsLeft className="cursor-pointer hover:bg-gradient-to-r rounded-xl p-1 text-3xl hover:text-black hover:from-custom-green hover:to-blue-600" />
          <div className="flex gap-1 cursor-pointer ">
            <p className="hover:bg-gradient-to-r rounded-xl py-1 px-3 text-xl hover:text-black hover:from-custom-green hover:to-blue-600">
              1
            </p>
            <p className="hover:bg-gradient-to-r rounded-xl py-1 px-3 text-xl hover:text-black hover:from-custom-green hover:to-blue-600">
              2
            </p>
            <p className="hover:bg-gradient-to-r rounded-xl py-1 px-3 text-xl hover:text-black hover:from-custom-green hover:to-blue-600">
              3
            </p>
          </div>
          <TbChevronsRight className="cursor-pointer rounded-xl p-1 text-3xl hover:text-black hover:bg-gradient-to-r hover:from-custom-green hover:to-blue-600" />
        </div>
      </div>
    </div>
  );
}
