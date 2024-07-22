import SmallCard from "@/components/fragments/NewsCard/SmallCard";
import Link from "next/link";

export default function News() {
  const news = [
    {
      judul: "Pengumuman Mengenai TEATER SEMENTARA JKT48 2024",
      desc: "Berikut adalah detail mengenai lokasi serta jadwal JKT48 Theater Surabaya & Yogyakarta 2024:",
      tanggal: "5 Juni 2024",
      image: "/newsImage/meet_and_greet.jpg",
    },
    {
      judul:
        "Pengumuman Mengenai Pertunjukan Perdana “Pajama Drive” oleh Trainee JKT48",
      desc: "Pajama Drive adalah setlist pertama dari JKT48 dan telah dibawakan oleh berbagai generasi. Kini Trainee JKT48 akan membawakan kembali setlist tersebut. Setelah persiapan dan latihan yang panjang, akhirnya shonichi (pertunjukan perdana)akan dilaksanakan.",
      tanggal: "24 Mei 2024",
      image: "/newsImage/pajama_drive_shonichi.jpg",
    },
    {
      judul:
        "Pengumuman Mengenai Pre-Order Digital Photobook “THINK DONUT” dengan bonus Video Call with JKT48",
      desc: "Pada tanggal 4 Juni 2024, JKT48 akan membuka Pre-Order untuk pembelian Digital Photobook “Think Donut” dengan bonus Video Call with JKT48.",
      tanggal: "11 Juni 2024",
      image: "/newsImage/video_call.jpg",
    },
    {
      judul:
        "Pengumuman Mengenai Detail Shani Graduation Concert “LAST VOYAGE”",
      desc: "Untuk memeriahkan perayaan momen ini, JKT48 akan mengadakan sebuah konser bertajuk Shani Graduation Concert “LAST VOYAGE”, kami berharap kita semua dapat memberikan momen indah bersama Shani yang akan kita kenang selamanya.",
      tanggal: "10 Maret 2024",
      image: "/newsImage/last_voyage.jpg",
    },
  ];

  return (
    <>
      <div className="py-20 px-32 bg-custom-green font-urbanist">
        <div className="flex justify-between text-black mb-2 items-center cursor-pointer">
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
          <div
            className="flex flex-col basis-2/5 w-full overflow-auto"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-easing="ease-out-cubic"
          >
            <img src={news[3].image} className="rounded-xl" alt="" />
            <div className="flex justify-between items-center mt-3 px-1">
              <h1 className="text-sm font-medium text-custom-green bg-black px-2 py-1">
                Event
              </h1>
              <h2 className="text-sm font-poppins text-slate-800">
                {news[3].tanggal}
              </h2>
            </div>
            <h1 className="text-black font-semibold text-xl mt-1 font-poppins text-ellipsis w-full whitespace-nowrap overflow-hidden">
              {news[3].judul}
            </h1>
            <h2 className="text-black font-medium text-sm mt-1">
              {news[3].desc}
            </h2>
          </div>
          <div className="flex flex-col basis-3/5 overflow-auto">
            {news.map((item, index) => {
              if (index === 3) return;
              return <SmallCard key={index} item={item} index={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
