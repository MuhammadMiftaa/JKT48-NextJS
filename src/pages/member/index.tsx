// import "../member/index.module.scss"
import Loading from "@/components/elements/Loading";
import { memberType } from "@/types/memberType";
import useSWR from "swr";
import MemberCards from "@/components/layouts/MemberCards";
import { ChangeEventHandler, useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function MemberPage() {
  // const [member, setMember] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/memberData")
  //     .then((res) => res.json())
  //     .then((data) => setMember(data.data));
  // }, []);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR("/api/data-member", fetcher);
  const dataMember: memberType[] = isLoading ? [] : data.data;
  const memberRegular = dataMember
    .filter((member) => !member.deleted.isDeleted)
    .filter((member) => member.member_regular);
  const memberTrainee = dataMember
    .filter((member) => !member.deleted.isDeleted)
    .filter((member) => !member.member_regular);

  const [name, setName] = useState<string>("");
  const handleSetName: ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
  };
  const [birthday, setBirthday] = useState<string>("");
  const handleSetBirthday: ChangeEventHandler<HTMLInputElement> = (event) => {
    setBirthday(event.target.value);
  };
  const [birthplace, setBirthplace] = useState<string>("");
  const handleSetBirthplace: ChangeEventHandler<HTMLInputElement> = (event) => {
    setBirthplace(event.target.value);
  };
  const [hometown, setHometown] = useState<string>("");
  const handleSetHometown: ChangeEventHandler<HTMLInputElement> = (event) => {
    setHometown(event.target.value);
  };
  const [age, setAge] = useState<number>(0);
  const handleSetAge: ChangeEventHandler<HTMLInputElement> = (event) => {
    setAge(parseInt(event.target.value));
  };
  const [gen, setGen] = useState<number>(0);
  const handleSetGen: ChangeEventHandler<HTMLInputElement> = (event) => {
    setGen(parseInt(event.target.value));
  };
  const handleReset = () => {
    setName("");
    setBirthday("");
    setGen(0);
    setAge(0);
    setBirthplace("");
    setHometown("");
  };

  return (
    <>
      <div className="flex flex-col w-full pb-32 mt-12">
        <div className="flex justify-between px-8 md:px-24 items-start mt-10 md:mt-12 mb-6 md:mb-20">
          <h1 className="font-extralight text-lg md:text-2xl font-urbanist">
            <span className="title-gradient-bold text-2xl md:text-4xl font-poppins">
              JKT48
            </span>{" "}
            Active Member
          </h1>
          <button
            type="button"
            data-drawer-target="drawer-right-example"
            data-drawer-show="drawer-right-example"
            data-drawer-placement="right"
            aria-controls="drawer-right-example"
            data-drawer-body-scrolling="true"
            className="text-black bg-gradient-to-r duration-700 from-custom-green to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-lg md:text-xl px-3 md:px-5 py-2 md:py-2.5 text-center me-2 mb-2 "
          >
            <FiSearch />
          </button>
        </div>
        <div
          id="drawer-right-example"
          className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto duration-700 transition-transform translate-x-full bg-zinc-950 w-72 md:w-96 dark:bg-gray-800"
          tabIndex={-1}
          aria-labelledby="drawer-right-label"
          data-drawer-body-scrolling="true"
        >
          <h5
            id="drawer-right-label"
            className="inline-flex font-poppins items-center mt-1 md:mt-0 mb-2 md:mb-4 title-gradient-bold text-lg md:text-2xl"
          >
            Search Member
          </h5>
          <button
            type="button"
            data-drawer-hide="drawer-right-example"
            aria-controls="drawer-right-example"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <div className="flex flex-col gap-4 mt-5">
            <div>
              <label className="block text-xs mb-1 md:mb-0 md:text-sm font-light text-zinc-400 font-poppins">
                Name
              </label>
              <input
                onChange={handleSetName}
                type="text"
                className="bg-zinc-950 border font-montserrat text-white border-gray-300 text-sm md:text-md rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Abigail Rachel"
                required
              />
            </div>
            <div>
              <label className="block text-xs mb-1 md:mb-0 md:text-sm font-light text-zinc-400 font-poppins">
                Birthday
              </label>
              <input
                onChange={handleSetBirthday}
                type="text"
                className="bg-zinc-950 border font-montserrat text-white border-gray-300 text-sm md:text-md rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="06 August 2006"
                required
              />
            </div>
            <div>
              <label className="block text-xs mb-1 md:mb-0 md:text-sm font-light text-zinc-400 font-poppins">
                Generation
              </label>
              <input
                onChange={handleSetGen}
                type="number"
                aria-describedby="helper-text-explanation"
                className="bg-zinc-950 border border-gray-300 text-white font-montserrat text-sm md:text-md rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="12"
                required
              />
            </div>
            <div>
              <label className="block text-xs mb-1 md:mb-0 md:text-sm font-light text-zinc-400 font-poppins">
                Age
              </label>
              <input
                onChange={handleSetAge}
                type="number"
                aria-describedby="helper-text-explanation"
                className="bg-zinc-950 border border-gray-300 text-white font-montserrat text-sm md:text-md rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="16"
                required
              />
            </div>
            <div>
              <label className="block text-xs mb-1 md:mb-0 md:text-sm font-light text-zinc-400 font-poppins">
                Birthplace
              </label>
              <input
                onChange={handleSetBirthplace}
                type="text"
                className="bg-zinc-950 border font-montserrat text-white border-gray-300 text-sm md:text-md rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Jakarta"
                required
              />
            </div>
            <div>
              <label className="block text-xs mb-1 md:mb-0 md:text-sm font-light text-zinc-400 font-poppins">
                Hometown
              </label>
              <input
                onChange={handleSetHometown}
                type="text"
                className="bg-zinc-950 border font-montserrat text-white border-gray-300 text-sm md:text-md rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Jakarta"
                required
              />
            </div>
            <button
              onClick={handleReset}
              type="reset"
              className="w-fit font-poppins text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2"
            >
              Clear
            </button>
          </div>
        </div>

        {dataMember.length > 0 ? (
          <div className="flex flex-col">
            <MemberCards
              memberRegular={memberRegular}
              category="Regular"
              search={
                name || birthday || birthplace || hometown || age || gen
                  ? {
                      name,
                      birthday,
                      birthplace,
                      hometown,
                      age,
                      gen,
                    }
                  : null
              }
            />
            <MemberCards
              search={
                name || birthday || birthplace || hometown || age || gen
                  ? {
                      name,
                      birthday,
                      birthplace,
                      hometown,
                      age,
                      gen,
                    }
                  : null
              }
              memberRegular={memberTrainee}
              category="Trainee"
            />
          </div>
        ) : (
          <div
            className="flex justify-center items-center"
            style={{ height: "70vh" }}
          >
            <Loading />
          </div>
        )}
      </div>
    </>
  );
}
