import PageSeparator from "@/components/fragments/PageSeparator/PageSeparator2";
import { useRouter } from "next/router";

export default function Member() {
  const { push } = useRouter();
  const handlerSeeAll = () => {
    push("/member");
  };

  return (
    <>
      <h1 className="title-gradient-light text-4xl mt-24 mb-4 mr-4 text-right font-urbanist from-80%">
        JKT48 Newera —
      </h1>
      <div className="flex gap-24 pb-32 px-32 relative overflow-x-hidden font-poppins">
        <div
          className="flex flex-col bg-zinc-900 pt-16 pb-12 px-16 items-center basis-1/3"
          data-aos="fade-up-right"
        >
          <div
            className="h-64 w-64 bg-black rounded-full bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url("/member/shania_gracia.png")` }}
          ></div>
          <div className="w-full mt-10">
            <h1 className="text-slate-400 font-light text-md italic">
              Captain
            </h1>
            <h2 className="text-3xl font-semibold">Shania Gracia</h2>
          </div>
        </div>
        <div className="flex flex-col gap-6 basis-2/3 relative">
          <div className="flex gap-6">
            <div
              className="flex flex-col bg-zinc-900 py-6 px-7 text-nowrap h-fit items-center"
              data-aos="fade-left"
            >
              <div
                className="h-40 w-40 bg-black rounded-full bg-no-repeat bg-center bg-cover"
                style={{
                  backgroundImage: `url("/member/feni_fitriyanti.png")`,
                }}
              ></div>
              <div className="w-full pl-2">
                <h1 className="text-slate-400 mt-6 font-light italic text-xs">
                  Member
                </h1>
                <h2 className="text-md font-semibold">Feni Fitriyanti</h2>
              </div>
            </div>
            <div
              className="flex flex-col bg-zinc-900 py-6 px-7 text-nowrap h-fit items-center"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div
                className="h-40 w-40 bg-black rounded-full bg-no-repeat bg-center bg-cover"
                style={{
                  backgroundImage: `url("/member/gita_sekar_andarini.png")`,
                }}
              ></div>
              <div className="w-full pl-2">
                <h1 className="text-slate-400 mt-6 font-light italic text-xs">
                  Member
                </h1>
                <h2 className="text-md font-semibold">Gita Sekar Andarini</h2>
              </div>
            </div>
            <div
              className="flex flex-col bg-zinc-900 py-6 px-7 text-nowrap h-fit items-center"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div
                className="h-40 w-40 bg-black rounded-full bg-no-repeat bg-center bg-cover"
                style={{
                  backgroundImage: `url("/member/angelina_christy.png")`,
                }}
              ></div>
              <div className="w-full pl-2">
                <h1 className="text-slate-400 mt-6 font-light italic text-xs">
                  Member
                </h1>
                <h2 className="text-md font-semibold">Angelina Christy</h2>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => handlerSeeAll()}
              className="border-slate-400 py-2 px-3 rounded-lg text-sm text-zinc-200 italic shadow-slate-400 button"
            >
              View All Members
            </button>
          </div>
        </div>
      </div>
      <PageSeparator />
    </>
  );
}
