import Link from "next/link";
import { useRouter } from "next/router";

export default function News() {
  return (
    <>
      <div className="py-20 px-32 mt-12 bg-custom-green">
        <div className="flex justify-between text-black mb-4 items-center">
          <h1 className="text-xl font-medium">– Latest News and Updates</h1>
          <Link
            href={"/news"}
            className="block font-medium text-sm hover:cursor-pointer py-0.5 px-1.5 hover:bg-black hover:text-custom-green"
          >
            See all
          </Link>
        </div>
        <hr className="h-0.5 bg-black border-0" />
        <div className="flex gap-6 mt-16">
          <div className="flex flex-col basis-2/5">
            <img
              src="/newsImage/meet_and_greet.jpg"
              className="rounded-xl"
              alt=""
            />
            <div className="flex justify-between items-center mt-3 px-1">
              <h1 className="text-sm font-medium text-custom-green bg-black px-2 py-1">
                Event
              </h1>
              <h2 className="text-sm font-light italic text-slate-800">
                5 Juni 2024
              </h2>
            </div>
            <h1 className="text-black font-bold text-2xl mt-1">
              Pengumuman Mengenai TEATER SEMENTARA JKT48 2024
            </h1>
            <h2 className="text-black font-light text-md text-black mt-3">
              Berikut adalah detail mengenai lokasi serta jadwal JKT48 Theater
              Surabaya & Yogyakarta 2024:
            </h2>
          </div>
          <div className="flex flex-col basis-3/5">
            <div className="flex mb-3">
              <img
                src="/newsImage/pajama_drive_shonichi.jpg"
                className="rounded-lg w-1/3 h-fit"
                alt=""
              />
              <div className="flex flex-col ml-4">
                <div className="flex justify-between items-center">
                  <h1 className="text-xs font-medium text-custom-green bg-black px-1 py-0.5">
                    Event
                  </h1>
                  <h2 className="text-xs font-light italic text-slate-800">
                    24 Mei 2024
                  </h2>
                </div>
                <h1 className="text-black font-bold text-lg mt-2">
                  Pengumuman Mengenai Pertunjukan Perdana “Pajama Drive” oleh
                  Trainee JKT48
                </h1>
                <h2 className="text-xs text-black text light">
                  Pajama Drive adalah setlist pertama dari JKT48 dan telah
                  dibawakan oleh berbagai generasi. Kini Trainee JKT48 akan
                  membawakan kembali setlist tersebut. Setelah persiapan dan
                  latihan yang panjang, akhirnya shonichi (pertunjukan perdana)
                  akan dilaksanakan.
                </h2>
              </div>
            </div>
            <hr className="h-0.5 bg-black" />
            <div className="flex my-3">
              <img
                src="/newsImage/video_call.jpg"
                className="rounded-lg w-1/3 h-fit"
                alt=""
              />
              <div className="flex flex-col ml-4">
                <div className="flex justify-between items-center">
                  <h1 className="text-xs font-medium text-custom-green bg-black px-1 py-0.5">
                    Event
                  </h1>
                  <h2 className="text-xs font-light italic text-slate-800">
                    11 Juni 2024
                  </h2>
                </div>
                <h1 className="text-black font-bold text-lg mt-2">
                  Pengumuman Mengenai Pre-Order Digital Photobook “THINK DONUT”
                  dengan bonus Video Call with JKT48
                </h1>
                <h2 className="text-xs text-black text light">
                  Pada tanggal 4 Juni 2024, JKT48 akan membuka Pre-Order untuk
                  pembelian Digital Photobook “Think Donut” dengan bonus Video
                  Call with JKT48.
                </h2>
              </div>
            </div>
            <hr className="h-0.5 bg-black" />
            <div className="flex my-3">
              <img
                src="/newsImage/last_voyage.jpg"
                className="rounded-lg w-1/3 h-fit"
                alt=""
              />
              <div className="flex flex-col ml-4">
                <div className="flex justify-between items-center">
                  <h1 className="text-xs font-medium text-custom-green bg-black px-1 py-0.5">
                    Event
                  </h1>
                  <h2 className="text-xs font-light italic text-slate-800">
                    10 Maret 2024
                  </h2>
                </div>
                <h1 className="text-black font-bold text-lg mt-2">
                  Pengumuman Mengenai Detail Shani Graduation Concert “LAST
                  VOYAGE”
                </h1>
                <h2 className="text-xs text-black text light">
                  Untuk memeriahkan perayaan momen ini, JKT48 akan mengadakan
                  sebuah konser bertajuk Shani Graduation Concert “LAST VOYAGE”,
                  kami berharap kita semua dapat memberikan momen indah bersama
                  Shani yang akan kita kenang selamanya.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
