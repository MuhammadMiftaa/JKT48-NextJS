import Link from "next/link";
import React from "react";

export default function theaterPage() {
  return (
    <div className="container mt-12 pb-12">
      <h1 className="uppercase text-center font-extrabold text-2xl block mb-16">
        Upcoming Theater{" "}
        <span className="block text-5xl bg-clip-text text-transparent bg-gradient-to-r from-custom-green to-blue-500 font-light">
          This Week!
        </span>
      </h1>
      <div className="grid gap-6 px-6 md:px-16 grid-cols-1">
      <div className="h-fit w-full border border-pink-400 p-2 rounded-xl flex flex-col md:flex-row gap-4 relative">
          <img
            className="md:w-5/12 rounded-md aspect-video object-cover"
            src="/setlistPoster/renai_kinshi_jourei.jpg"
            alt=""
          />
          <div className="flex flex-col justify-start">
            <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-900">
              Renai Kinshi Jourei{" "}
              <span className="font-light italic text-base text-zinc-400">
                by Member Regular JKT48
              </span>
            </h1>
            <h2 className="text-3xl mt-3 mb-5 font-bold text-zinc-200">
              Rabu, 3 Juli 2024
            </h2>
            <h3 className="block text-2xl font-semibold">
              <span className="block text-sm text-zinc-400 italic font-light">
                Perfomed by
              </span>
              Lia, Zee, Oniel, Feni, Freya, Greesel, Indah, Jessi, Kathrina,
              Lulu, Muthe, Raisha
            </h3>
            <h4 className="block font-light italic text-xl text-white absolute bottom-4">Taman Budaya Yogyakarta</h4>
            <Link href={""} className="flex mt-7 mb-2 w-full justify-end">
              <h4 className="self-end py-2 px-8 bg-gradient-to-r from-pink-500 to-pink-900 rounded-xl mr-2 text-xl font-extrabold">
                Apply
              </h4>
            </Link>
          </div>
        </div>
        <div className="h-fit w-full border border-teal-500 p-2 rounded-xl flex flex-col md:flex-row gap-4 relative">
          <img
            className="md:w-5/12 rounded-md aspect-video object-cover"
            src="/setlistPoster/ramune_no_nomikata.jpg"
            alt=""
          />
          <div className="flex flex-col justify-start">
            <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-900">
              Ramune No Nomikata{" "}
              <span className="font-light italic text-base text-zinc-400">
                by Member Regular JKT48
              </span>
            </h1>
            <h2 className="text-3xl mt-3 mb-5 font-bold text-zinc-200">
              Kamis, 4 Juli 2024
            </h2>
            <h3 className="block text-2xl font-semibold">
              <span className="block text-sm text-zinc-400 italic font-light">
                Perfomed by
              </span>
              Christy, Olla, Fiony, Flora, Ella, Gita, Gracie, Eli, Lyn, Marsha,
              Adel, Gracia,
            </h3>
            <h4 className="block font-light italic text-xl text-white absolute bottom-4">Taman Budaya Yogyakarta</h4>
            <Link href={""} className="flex mt-7 mb-2 w-full justify-end">
              <h4 className="self-end py-2 px-8 bg-gradient-to-r from-teal-500 to-teal-900 rounded-xl mr-2 text-xl font-extrabold">
                Apply
              </h4>
            </Link>
          </div>
        </div>
        <div className="h-fit w-full border border-pink-400 p-2 rounded-xl flex flex-col md:flex-row gap-4 relative">
          <img
            className="md:w-5/12 rounded-md aspect-video object-cover"
            src="/setlistPoster/renai_kinshi_jourei.jpg"
            alt=""
          />
          <div className="flex flex-col justify-start">
            <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-900">
              Renai Kinshi Jourei{" "}
              <span className="font-light italic text-base text-zinc-400">
                by Member Regular JKT48
              </span>
            </h1>
            <h2 className="text-3xl mt-3 mb-5 font-bold text-zinc-200">
              Kamis, 4 Juli 2024
            </h2>
            <h3 className="block text-2xl font-semibold">
              <span className="block text-sm text-zinc-400 italic font-light">
                Perfomed by
              </span>
              Lia, Zee, Oniel, Feni, Freya, Greesel, Indah, Jessi, Kathrina,
              Lulu, Muthe, Raisha
            </h3>
            <h4 className="block font-light italic text-xl text-white absolute bottom-4">Taman Budaya Yogyakarta</h4>
            <Link href={""} className="flex mt-7 mb-2 w-full justify-end">
              <h4 className="self-end py-2 px-8 bg-gradient-to-r from-pink-500 to-pink-900 rounded-xl mr-2 text-xl font-extrabold">
                Apply
              </h4>
            </Link>
          </div>
        </div>
        <div className="h-fit w-full border border-orange-400 p-2 rounded-xl flex flex-col md:flex-row gap-4 relative">
          <img
            className="md:w-5/12 rounded-md aspect-video object-cover"
            src="/setlistPoster/aitakatta.jpg"
            alt=""
          />
          <div className="flex flex-col justify-start">
            <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-900">
              Aitakatta{" "}
              <span className="font-light italic text-base text-zinc-400">
                by Member Trainee JKT48
              </span>
            </h1>
            <h2 className="text-3xl mt-3 mb-5 font-bold text-zinc-200">
              Kamis, 4 Juli 2024
            </h2>
            <h3 className="block text-2xl font-semibold">
              <span className="block text-sm text-zinc-400 italic font-light">
                Perfomed by
              </span>
              Delynn, Alya, Anindya, Cathy, Elin, Chelsea, Cynthia, Danella,
              Desy, Gendis, Trisha, Michie
            </h3>
            <h4 className="block font-light italic text-xl text-white absolute bottom-4">Taman Budaya Yogyakarta</h4>
            <Link href={""} className="flex mt-7 mb-2 w-full justify-end">
              <h4 className="self-end py-2 px-8 bg-gradient-to-r from-orange-500 to-orange-900 rounded-xl mr-2 text-xl font-extrabold">
                Apply
              </h4>
            </Link>
          </div>
        </div>
        <div className="h-fit w-full border border-teal-500 p-2 rounded-xl flex flex-col md:flex-row gap-4 relative">
          <img
            className="md:w-5/12 rounded-md aspect-video object-cover"
            src="/setlistPoster/ramune_no_nomikata.jpg"
            alt=""
          />
          <div className="flex flex-col justify-start">
            <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-900">
              Ramune No Nomikata{" "}
              <span className="font-light italic text-base text-zinc-400">
                by Member Regular JKT48
              </span>
            </h1>
            <h2 className="text-3xl mt-3 mb-5 font-bold text-zinc-200">
              Jumat, 5 Juli 2024
            </h2>
            <h3 className="block text-2xl font-semibold">
              <span className="block text-sm text-zinc-400 italic font-light">
                Perfomed by
              </span>
              Christy, Olla, Fiony, Flora, Ella, Gita, Gracie, Eli, Lyn, Marsha,
              Adel, Gracia,
            </h3>
            <h4 className="block font-light italic text-xl text-white absolute bottom-4">Taman Budaya Yogyakarta</h4>
            <Link href={""} className="flex mt-7 mb-2 w-full justify-end">
              <h4 className="self-end py-2 px-8 bg-gradient-to-r from-teal-500 to-teal-900 rounded-xl mr-2 text-xl font-extrabold">
                Apply
              </h4>
            </Link>
          </div>
        </div>
        <div className="h-fit w-full border border-blue-700 p-2 rounded-xl flex flex-col md:flex-row gap-4 relative">
          <img
            className="md:w-5/12 rounded-md aspect-video object-cover"
            src="/setlistPoster/pajama_drive.jpg"
            alt=""
          />
          <div className="flex flex-col justify-start">
            <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-950">
              Pajama Drive{" "}
              <span className="font-light italic text-base text-zinc-400">
                by Member Trainee JKT48
              </span>
            </h1>
            <h2 className="text-3xl mt-3 mb-5 font-bold text-zinc-200">
              Jumat, 5 Juli 2024
            </h2>
            <h3 className="block text-2xl font-semibold">
              <span className="block text-sm text-zinc-400 italic font-light">
                Perfomed by
              </span>
              Aralie, Alya, Anindya, Chelsea, Cynthia, Danella, Trisha, Michie,
              Levi, Nayla, Nachia, Regie
            </h3>
            <h4 className="block font-light italic text-xl text-white absolute bottom-4">Taman Budaya Yogyakarta</h4>
            <Link href={""} className="flex mt-7 mb-2 w-full justify-end">
              <h4 className="self-end py-2 px-8 bg-gradient-to-r from-blue-600 to-blue-950 rounded-xl mr-2 text-xl font-extrabold">
                Apply
              </h4>
            </Link>
          </div>
        </div>
        <div className="h-fit w-full border border-pink-400 p-2 rounded-xl flex flex-col md:flex-row gap-4 relative">
          <img
            className="md:w-5/12 rounded-md aspect-video object-cover"
            src="/setlistPoster/renai_kinshi_jourei.jpg"
            alt=""
          />
          <div className="flex flex-col justify-start">
            <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-900">
              Renai Kinshi Jourei{" "}
              <span className="font-light italic text-base text-zinc-400">
                by Member Regular JKT48
              </span>
            </h1>
            <h2 className="text-3xl mt-3 mb-5 font-bold text-zinc-200">
              Sabtu, 6 Juli 2024
            </h2>
            <h3 className="block text-2xl font-semibold">
              <span className="block text-sm text-zinc-400 italic font-light">
                Perfomed by
              </span>
              Lia, Zee, Oniel, Feni, Freya, Greesel, Indah, Jessi, Kathrina,
              Lulu, Muthe, Raisha
            </h3>
            <h4 className="block font-light italic text-xl text-white absolute bottom-4">Taman Budaya Yogyakarta</h4>
            <Link href={""} className="flex mt-7 mb-2 w-full justify-end">
              <h4 className="self-end py-2 px-8 bg-gradient-to-r from-pink-500 to-pink-900 rounded-xl mr-2 text-xl font-extrabold">
                Apply
              </h4>
            </Link>
          </div>
        </div>
        <div className="h-fit w-full border border-blue-700 p-2 rounded-xl flex flex-col md:flex-row gap-4 relative">
          <img
            className="md:w-5/12 rounded-md aspect-video object-cover"
            src="/setlistPoster/pajama_drive.jpg"
            alt=""
          />
          <div className="flex flex-col justify-start">
            <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-950">
              Pajama Drive{" "}
              <span className="font-light italic text-base text-zinc-400">
                by Member Trainee JKT48
              </span>
            </h1>
            <h2 className="text-3xl mt-3 mb-5 font-bold text-zinc-200">
              Sabtu, 6 Juli 2024
            </h2>
            <h3 className="block text-2xl font-semibold">
              <span className="block text-sm text-zinc-400 italic font-light">
                Perfomed by
              </span>
              Delynn, Lana, Erine, Cathy, Elin, Daisy, Fritzy, Gendis, Lily,
              Oline, Nala, Kimmy
            </h3>
            <h4 className="block font-light italic text-xl text-white absolute bottom-4">Taman Budaya Yogyakarta</h4>
            <Link href={""} className="flex mt-7 mb-2 w-full justify-end">
              <h4 className="self-end py-2 px-8 bg-gradient-to-r from-blue-600 to-blue-950 rounded-xl mr-2 text-xl font-extrabold">
                Apply
              </h4>
            </Link>
          </div>
        </div>
        <div className="h-fit w-full border border-teal-500 p-2 rounded-xl flex flex-col md:flex-row gap-4 relative">
          <img
            className="md:w-5/12 rounded-md aspect-video object-cover"
            src="/setlistPoster/ramune_no_nomikata.jpg"
            alt=""
          />
          <div className="flex flex-col justify-start">
            <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-900">
              Ramune No Nomikata{" "}
              <span className="font-light italic text-base text-zinc-400">
                by Member Regular JKT48
              </span>
            </h1>
            <h2 className="text-3xl mt-3 mb-5 font-bold text-zinc-200">
              Minggu, 7 Juli 2024
            </h2>
            <h3 className="block text-2xl font-semibold">
              <span className="block text-sm text-zinc-400 italic font-light">
                Perfomed by
              </span>
              Christy, Olla, Fiony, Flora, Ella, Gita, Gracie, Eli, Lyn, Marsha,
              Adel, Gracia,
            </h3>
            <h4 className="block font-light italic text-xl text-white absolute bottom-4">Taman Budaya Yogyakarta</h4>
            <Link href={""} className="flex mt-7 mb-2 w-full justify-end">
              <h4 className="self-end py-2 px-8 bg-gradient-to-r from-teal-500 to-teal-900 rounded-xl mr-2 text-xl font-extrabold">
                Apply
              </h4>
            </Link>
          </div>
        </div>
        <div className="h-fit w-full border border-orange-400 p-2 rounded-xl flex flex-col md:flex-row gap-4 relative">
          <img
            className="md:w-5/12 rounded-md aspect-video object-cover"
            src="/setlistPoster/aitakatta.jpg"
            alt=""
          />
          <div className="flex flex-col justify-start">
            <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-900">
              Aitakatta{" "}
              <span className="font-light italic text-base text-zinc-400">
                by Member Trainee JKT48
              </span>
            </h1>
            <h2 className="text-3xl mt-3 mb-5 font-bold text-zinc-200">
              Minggu, 7 Juli 2024
            </h2>
            <h3 className="block text-2xl font-semibold">
              <span className="block text-sm text-zinc-400 italic font-light">
                Perfomed by
              </span>
              Aralie, Erine, Fritzy, Lily, Moreen, Nayla, Nachia, Oline, Regie,
              Ribka, Nala, Kimmy
            </h3>
            <h4 className="block font-light italic text-xl text-white absolute bottom-4">Taman Budaya Yogyakarta</h4>
            <Link href={""} className="flex mt-7 mb-2 w-full justify-end">
              <h4 className="self-end py-2 px-8 bg-gradient-to-r from-orange-500 to-orange-900 rounded-xl mr-2 text-xl font-extrabold">
                Apply
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
