import NewsCatPill from "@/components/elements/NewsCatPill";
import NewsHighlight from "@/components/fragments/NewsHighlight";
import NewsPaging from "@/components/fragments/NewsPaging";
import NewsSide from "@/components/fragments/NewsSide";
import { useState } from "react";

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

  const news = [
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

  const hotNews = [
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
    {
      judul:
        "Pengumuman Mengenai Pre-Order Digital Photobook “JKT48 Theater Sementara 2024 & Pajama Drive Shonichi” bonus Video Call",
      desc: "Untuk memeriahkan perayaan momen ini, JKT48 akan mengadakan sebuah konser bertajuk Shani Graduation Concert “LAST VOYAGE”, kami berharap kita semua dapat memberikan momen indah bersama Shani yang akan kita kenang selamanya.",
      tanggal: "7 Juli 2024",
      image: "/newsImage/digital_photobook.jpg",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(hotNews[0].image);
  const [selectedCategory, setSelectedCategory] = useState(
    "Event | " + hotNews[0].tanggal
  );
  const [selectedDescription, setSelectedDescription] = useState(
    hotNews[0].judul
  );

  return (
    <div className="px-8 md:px-20">
      <div className="container justify-stretch overflow-hidden pt-12 pb-4 mt-12">
        <div className="pb-12 text-white font-urbanist">
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-6xl font-light">Latest News</h1>
            <div className="flex mt-4 gap-2 flex-wrap">
              {category.map((cat, i) => {
                return (
                  <NewsCatPill i={i} key={i}>
                    {cat}
                  </NewsCatPill>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex h-96 overflow-auto">
          <NewsHighlight
            image={selectedImage}
            category={selectedCategory}
            description={selectedDescription}
          />
          <div className="flex flex-col md:basis-2/5 md:px-4 justify-between">
            {hotNews.map((news, i) => (
              <div
                className="flex h-16 w-full border-b-slate-500 border-b group cursor-pointer"
                onMouseEnter={() => {
                  setSelectedImage(news.image);
                  setSelectedDescription(news.judul);
                  setSelectedCategory("Event | " + news.tanggal);
                }}
                key={i}
              >
                <img
                  src={news.image}
                  alt="meet and greet"
                  className="h-full aspect-video object-cover object-center mr-2"
                />
                <p className="font-urbanist text-xs md:text-sm text-gradient-group-hover">
                  {news.judul}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-10">
        <h1 className="px-20 w-fit mx-auto font-poppins font-semibold text-2xl text-gradient md:before:content-['——————————————————'] md:before:mr-3 md:before:tracking-[-4px] md:after:content-['——————————————————————————————'] md:after:tracking-[-10px] md:after:ml-3">
          Latest News
        </h1>
        <div className="flex flex-col md:flex-row mt-4 gap-6 md:gap-8 items-center">
          <div className="flex flex-col mb-5 font-poppins md:basis-3/5">
            {news.map((theater, i) => (
              <div
                key={i}
                className="h-24 flex flex-col justify-center group border-b border-zinc-500"
              >
                <h1 className="text-slate-300 text-xs group-hover:text-custom-green cursor-pointer">
                  {theater.tanggal}
                </h1>
                <h2 className="text-sm md:text-md group-hover:text-custom-green cursor-pointer">
                  {theater.judul}
                </h2>
              </div>
            ))}
            <div className="w-fit mx-auto mt-10 flex md:hidden items-center gap-4 font-poppins border rounded-xl border-zinc-800 px-2 py-1 text-slate-200">
              <NewsPaging />
            </div>
          </div>
          <NewsSide />
        </div>
        <div className="w-fit mx-auto hidden md:flex items-center gap-4 font-poppins border rounded-xl border-zinc-800 px-2 py-1 text-slate-200">
          <NewsPaging />
        </div>
      </div>
    </div>
  );
}
