// import "../member/index.module.scss"
import Loading from "@/components/fragments/Loading";
import { memberType } from "@/components/types/memberType";
import Link from "next/link";
import { useState, useEffect } from "react";
import useSWR from "swr";

export default function MemberPage() {
  // const [member, setMember] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/memberData")
  //     .then((res) => res.json())
  //     .then((data) => setMember(data.data));
  // }, []);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR("/api/data-member/member", fetcher);
  const dataMember: memberType[] = isLoading ? [] : data.data;
  const memberRegular = dataMember.filter((member) => member.member_regular);
  const memberTrainee = dataMember.filter((member) => !member.member_regular);

  return (
    <div className="flex flex-col w-full">
      <h1 className="font-light text-2xl mt-12 mb-20 w-full text-center ">
        <span className="text-custom-green text-4xl font-bold">JKT48</span>{" "}
        Active Member
      </h1>
      {dataMember.length > 0 ? (
        <div className="flex flex-col">
          <div className="px-24 relative">
            <h1 className="text-2xl absolute font-semibold text-white">
              — Regular Member
            </h1>
            <h2 className="text-2xl absolute right-24 font-semibold text-white">
              {memberRegular.length} active member
            </h2>
          </div>
          <div className="mt-8 cards-member-container flex justify-center flex-wrap w-full relative">
            {memberRegular.map((member: memberType, i: number) => (
              <label key={i}>
                <input type="checkbox" className="absolute scale-0 peer" />
                <div className="card w-60 my-5 mx-5 relative" style={{ height: "16.9rem" }} >
                  <div className="front peer-checked:rotate-y-180 border-custom-green border rounded-2xl absolute top-0 bottom-0 left-0 right-0 overflow-hidden bg-zinc-950 hover:cursor-pointer shadow-xl shadow-custom-green duration-700 backface-hidden">
                    <img
                      className="w-4/5 border-r h-full border-custom-green"
                      src={
                        "/member/" +
                        member.nama.toLowerCase().replace(/ /g, "_") +
                        ".png"
                      }
                      alt=""
                    />
                    <div className="absolute top-1/2 left-24 transform -translate-y-1/2 bg-transparent w-60 h-60 flex items-center justify-center rotate-90">
                      <h1 className="text-xl font-bold text-custom-green uppercase text-nowrap">
                        {member.nama}
                      </h1>
                    </div>
                  </div>
                  <div className="back border-custom-green border rounded-2xl bg-zinc-950 flex flex-col justify-end items-center pb-3 absolute top-0 bottom-0 left-0 right-0 hover:cursor-pointer overflow-hidden rotate-y-180 shadow-xl shadow-custom-green duration-700 backface-hidden peer-checked:-rotate-y-0">
                    <div className="absolute top-0 right-0 left-0 border-b border-custom-green">
                      <h1 className="text-center text-custom-green py-1.5 text-xl uppercase text-nowrap font-bold">
                        {member.nama}
                      </h1>
                    </div>
                    <p className="text-xs italic text-zinc-300 font-thin -mb-1.5">
                      Gen:
                    </p>
                    <h1 className="font-bold text-xl mb-2">
                      {member.generasi}th Generation
                    </h1>
                    <p className="text-xs italic text-zinc-300 font-thin -mb-1.5">
                      Birthday:
                    </p>
                    <h2 className="font-bold text-xl mb-2">
                      {member.tanggal_lahir}
                    </h2>
                    <p className="text-xs italic text-zinc-300 font-thin -mb-1.5">
                      Age:
                    </p>
                    <h3 className="font-bold text-xl mb-2">
                      {member.umur} years old
                    </h3>
                    <Link
                      href={"/member/" + member.id}
                      className="text-sm text-zinc-600 italic font-light mt-5 hover:text-white"
                    >
                      More Information
                    </Link>
                  </div>
                </div>
              </label>
            ))}
          </div>
          <div className="flex flex-col mt-24">
            <div className="px-24 relative">
              <h1 className="text-2xl absolute font-light text-pink-500">
                — Trainee Member
              </h1>
              <h2 className="text-2xl absolute right-24 font-light text-pink-500">
                {memberTrainee.length} active member
              </h2>
            </div>
            <div className="mt-8 cards-member-container flex justify-center flex-wrap w-full relative">
              {memberTrainee.map((member: memberType, i: number) => (
                <label key={i}>
                  <input type="checkbox" className="absolute scale-0" />
                  <div
                    className="card w-60 my-5 mx-5 relative"
                    style={{ height: "16.9rem" }}
                  >
                    <div className="front border-pink-500 border rounded-2xl absolute top-0 bottom-0 left-0 right-0 overflow-hidden bg-zinc-950 hover:cursor-pointer shadow-xl shadow-pink-500 duration-700 backface-hidden">
                      <img
                        className="w-4/5 border-r border-pink-500 h-full"
                        src={
                          "/member/" +
                          member.nama.toLowerCase().replace(/ /g, "_") +
                          ".png"
                        }
                        alt=""
                      />
                      <div className="absolute top-1/2 left-24 transform -translate-y-1/2 bg-transparent w-60 h-60 flex items-center justify-center rotate-90">
                        <h1 className="text-xl font-bold text-pink-500 uppercase text-nowrap">
                          {member.nama}
                        </h1>
                      </div>
                    </div>
                    <div className="back border-pink-500 border rounded-2xl bg-zinc-950 flex flex-col justify-end items-center pb-3 absolute top-0 bottom-0 left-0 right-0 hover:cursor-pointer overflow-hidden rotate-y-180 shadow-xl shadow-pink-500 duration-700 backface-hidden">
                      <div className="absolute top-0 right-0 left-0 border-b border-pink-500 text-pink-500">
                        <h1 className="text-center py-1.5 text-xl uppercase text-nowrap font-bold">
                          {member.nama}
                        </h1>
                      </div>
                      <p className="text-xs italic text-zinc-300 font-thin -mb-1.5">
                        Gen:
                      </p>
                      <h1 className="font-bold text-xl mb-2">
                        {member.generasi}th Generation
                      </h1>
                      <p className="text-xs italic text-zinc-300 font-thin -mb-1.5">
                        Birthday:
                      </p>
                      <h2 className="font-bold text-xl mb-2">
                        {member.tanggal_lahir}
                      </h2>
                      <p className="text-xs italic text-zinc-300 font-thin -mb-1.5">
                        Age:
                      </p>
                      <h3 className="font-bold text-xl mb-2">
                        {member.umur} years old
                      </h3>
                      <Link
                        href={"/member/" + member.id}
                        className="text-sm text-zinc-600 italic font-light mt-5 hover:text-white"
                      >
                        More Information
                      </Link>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>
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
  );
}
