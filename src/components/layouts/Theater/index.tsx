import PageSeparator from "@/components/fragments/PageSeparator/PageSeparator";
import TheaterCard from "@/components/fragments/TheaterCard/SmallCard";
import { theaterType } from "@/components/types/theaterType";
import Link from "next/link";
import useSWR from "swr";

export default function Theater() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, isLoading, error } = useSWR("/api/data-theater", fetcher);
  const dataTheater: theaterType[] = isLoading ? [] : data.data;
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
            <TheaterCard
              theater={theater}
              hours={hours}
              minutes={minutes}
            ></TheaterCard>
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
