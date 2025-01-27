import Loading from "@/components/elements/Loading";
import { setlistType } from "@/types/setlistType";
import { Tabs } from "@/components/ui/tabs";
import useSWR from "swr";

export default function setlistPage() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR("/api/data-setlist", fetcher);
  const dataSetlist: setlistType[] = isLoading
    ? []
    : data.data.filter((setlist: setlistType) => !setlist.deleted.isDeleted);

  return (
    <div className="pb-40 relative">
      <h1 className="font-urbanist text-2xl md:text-5xl text-center font-light text-white mt-28">
        On-going Setlist
      </h1>
      <div className="bg-white h-0.5 w-20 absolute top-16 right-1/3 hidden md:block"></div>
      {!isLoading ? (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-10 font-urbanist">
          <Tabs
            activeTabClassName="md:bg-gradient-to-r md:from-custom-green md:to-blue-600"
            tabClassName=""
            containerClassName="gap-3 md:gap-16 bg-black z-10 md:border-b-2 border-zinc-800 mx-6 w-fit"
            contentClassName="mt-8 md:mt-16 p-5"
            tabs={dataSetlist}
          />
        </div>
      ) : (
        <>
          <div className="h-[70vh] flex justify-center items-center">
            <Loading />
          </div>
        </>
      )}
    </div>
  );
}
