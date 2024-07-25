import PageSeparator from "@/components/fragments/PageSeparator/PageSeparator";
import SmallCard from "@/components/fragments/TheaterCard/SmallCard";
import { theaterType } from "@/components/types/theaterType";
import Link from "next/link";
import useSWR from "swr";

export default function Theater() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, isLoading, error } = useSWR("/api/data-theater", fetcher);
  const dataTheater: theaterType[] = isLoading
    ? [
        {
          id: "0307240",
          venue: "Taman Budaya Yogyakarta",
          member_regular: true,
          member:
            "Lia, Zee, Oniel, Feni, Freya, Greesel, Indah, Jessi, Kathrina, Lulu, Muthe, Raisha",
          setlist: "Renai Kinshi Jourei",
          tanggal: "Rabu, 3 Juli 2024",
          time: {
            __datatype__: "timestamp",
            value: { _seconds: 1720008000, _nanoseconds: 626000000 },
          },
        },
        {
          id: "0407240",
          venue: "Gedung Cak Durasim Surabaya",
          member_regular: true,
          member:
            "Christy, Olla, Fiony, Flora, Ella, Gita, Gracie, Eli, Lyn, Marsha, Adel, Gracia",
          setlist: "Ramune No Nomikata",
          tanggal: "Kamis, 4 Juli 2024",
          time: {
            __datatype__: "timestamp",
            value: { _seconds: 1720094400, _nanoseconds: 769000000 },
          },
        },
        {
          id: "0407241",
          venue: "Taman Budaya Yogyakarta",
          member_regular: true,
          member:
            "Lia, Zee, Oniel, Feni, Freya, Greesel, Indah, Jessi, Kathrina, Lulu, Muthe, Raisha",
          setlist: "Renai Kinshi Jourei",
          tanggal: "Kamis, 4 Juli 2024",
          time: {
            __datatype__: "timestamp",
            value: { _seconds: 1720094400, _nanoseconds: 55000000 },
          },
        },
        {
          id: "0407242",
          venue: "FX Sudirman Lt.4 Jakarta",
          member_regular: false,
          member:
            "Delynn, Alya, Anindya, Cathy, Elin, Chelsea, Cynthia, Danella, Desy, Gendis, Trisha, Michie",
          setlist: "Aitakatta",
          tanggal: "Kamis, 4 Juli 2024",
          time: {
            __datatype__: "timestamp",
            value: { _seconds: 1720094400, _nanoseconds: 98000000 },
          },
        },
        {
          id: "0507240",
          venue: "Gedung Cak Durasim Surabaya",
          member_regular: true,
          member:
            "Christy, Olla, Fiony, Flora, Ella, Gita, Gracie, Eli, Lyn, Marsha, Adel, Gracia",
          setlist: "Ramune No Nomikata",
          tanggal: "Jumat, 5 Juli 2024",
          time: {
            __datatype__: "timestamp",
            value: { _seconds: 1720180800, _nanoseconds: 11000000 },
          },
        },
        {
          id: "0507241",
          venue: "FX Sudirman Lt.4 Jakarta",
          member_regular: false,
          member:
            "Aralie, Alya, Anindya, Chelsea, Cynthia, Danella, Trisha, Michie, Levi, Nayla, Nachia, Regie",
          setlist: "Pajama Drive",
          tanggal: "Jumat, 5 Juli 2024",
          time: {
            __datatype__: "timestamp",
            value: { _seconds: 1720180800, _nanoseconds: 377000000 },
          },
        },
        {
          id: "0607240",
          venue: "Taman Budaya Yogyakarta",
          member_regular: true,
          member:
            "Lia, Zee, Oniel, Feni, Freya, Greesel, Indah, Jessi, Kathrina, Lulu, Muthe, Raisha",
          setlist: "Renai Kinshi Jourei",
          tanggal: "Sabtu, 6 Juli 2024",
          time: {
            __datatype__: "timestamp",
            value: { _seconds: 1720256400, _nanoseconds: 211000000 },
          },
        },
        {
          id: "0607241",
          venue: "FX Sudirman Lt.4 Jakarta",
          member_regular: false,
          member:
            "Delynn, Lana, Erine, Cathy, Elin, Daisy, Fritzy, Gendis, Lily, Oline, Nala, Kimmy",
          setlist: "Pajama Drive",
          tanggal: "Sabtu, 6 Juli 2024",
          time: {
            __datatype__: "timestamp",
            value: { _seconds: 1720267200, _nanoseconds: 581000000 },
          },
        },
        {
          id: "0707240",
          venue: "Gedung Cak Durasim Surabaya",
          member_regular: true,
          member:
            "Christy, Olla, Fiony, Flora, Ella, Gita, Gracie, Eli, Lyn, Marsha, Adel, Gracia",
          setlist: "Ramune No Nomikata",
          tanggal: "Minggu, 7 Juli 2024",
          time: {
            __datatype__: "timestamp",
            value: { _seconds: 1720342800, _nanoseconds: 712000000 },
          },
        },
        {
          id: "0707241",
          venue: "FX Sudirman Lt.4 Jakarta",
          member_regular: false,
          member:
            "Aralie, Erine, Fritzy, Lily, Moreen, Nayla, Nachia, Oline, Regie, Ribka, Nala, Kimmy",
          setlist: "Aitakatta",
          tanggal: "Minggu, 7 Juli 2024",
          time: {
            __datatype__: "timestamp",
            value: { _seconds: 1720342800, _nanoseconds: 349000000 },
          },
        },
      ]
    : data.data;
  // console.log(dataTheater[0]);

  return (
    <>
      <h1
        className="title-gradient-bold capitalize w-fit mx-auto font-poppins pt-28 mb-12 text-3xl "
        data-aos="flip-left"
        data-aos-duration="800"
        id="theater"
      >
        Upcoming Theater
      </h1>
      <div className="py-5 px-32 flex flex-col gap-y-12">
        {dataTheater.map((theater, index) => {
          let timestamp =
            (theater.time.seconds + theater.time.nanoseconds / 1000000000) *
            1000;
          const date = new Date(timestamp);

          const hours = date.getHours().toString().padStart(2, "0");
          const minutes = date.getMinutes().toString().padStart(2, "0");
          if (index > 5) {
            return null;
          }
          return (
            <SmallCard
              theater={theater}
              hours={hours}
              minutes={minutes}
              key={index}
            ></SmallCard>
          );
        })}
      </div>
      <Link
        href={"/theater"}
        className="block capitalize text-center text-slate-500 italic mt-8 hover:text-white hover:cursor-pointer font-urbanist"
      >
        see full theater schedule
      </Link>
      <PageSeparator />
    </>
  );
}
