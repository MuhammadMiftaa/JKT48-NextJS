// import "../member/index.module.scss"
import Card from "@/components/elements/Card";
import Loading from "@/components/fragments/Loading";
import Footer from "@/components/layouts/Footer";
import { memberType } from "@/components/types/memberType";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
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
    <>
      <div className="flex flex-col w-full pb-32 mt-12">
        <div className="flex justify-between px-24 items-center mt-12 mb-20">
          <h1 className="font-extralight text-2xl font-urbanist">
            <span className="title-gradient-bold text-4xl font-poppins">
              JKT48
            </span>{" "}
            Active Member
          </h1>
        </div>
        {dataMember.length > 0 ? (
          <div className="flex flex-col">
            <div className="px-24 relative font-urbanist">
              <h1 className="text-2xl absolute text-custom-green">
                — Regular Member
              </h1>
              <h2 className="text-2xl absolute right-24 text-custom-green">
                {memberRegular.length} active member
              </h2>
            </div>
            <div className="mt-8 cards-member-container flex justify-center flex-wrap w-full relative">
              {memberRegular.map((member: memberType, i: number) => {
                let delay = (i % 4) * 100;
                return <Card key={i} delay={delay} member={member} />;
              })}
            </div>
            <div className="flex flex-col mt-24">
              <div className="px-24 relative">
                <h1 className="text-2xl absolute font-urbanist font-light text-pink-500">
                  — Trainee Member
                </h1>
                <h2 className="text-2xl absolute right-24 font-urbanist font-light text-pink-500">
                  {memberTrainee.length} active member
                </h2>
              </div>
              <div className="mt-8 cards-member-container flex justify-center flex-wrap w-full relative">
                {memberTrainee.map((member: memberType, i: number) => {
                  let delay = (i % 4) * 100;
                  return (
                    <label key={i} data-aos="fade-up" data-aos-delay={delay}>
                      <input type="checkbox" className="absolute scale-0" />
                      <div
                        className="card w-60 my-5 mx-5 relative"
                        style={{ height: "16.9rem" }}
                      >
                        <div className="front border-pink-500 border rounded-2xl absolute top-0 bottom-0 left-0 right-0 overflow-hidden bg-zinc-950 hover:cursor-pointer shadow-xl shadow-pink-500 duration-700 backface-hidden">
                          <Image
                            width={256}
                            height={361}
                            className="w-4/5 border-r border-pink-500 h-full"
                            src={
                              "/member/webp/" +
                              member.nama.toLowerCase().replace(/ /g, "_") +
                              ".webp"
                            }
                            alt={member.nama}
                          />
                          <div className="absolute top-1/2 left-24 transform -translate-y-1/2 bg-transparent w-60 h-60 flex items-center justify-center rotate-90">
                            <h1 className="text-xl font-bold text-pink-500 uppercase text-nowrap font-poppins">
                              {member.nama}
                            </h1>
                          </div>
                        </div>
                        <div className="back border-pink-500 border rounded-2xl bg-zinc-950 flex flex-col justify-end items-center pb-3 absolute top-0 bottom-0 left-0 right-0 hover:cursor-pointer overflow-hidden rotate-y-180 shadow-xl shadow-pink-500 duration-700 backface-hidden">
                          <div className="absolute top-0 right-0 left-0 border-b border-pink-500 text-pink-500">
                            <h1 className="text-center py-1.5 text-xl uppercase text-nowrap font-bold font-poppins">
                              {member.nama}
                            </h1>
                          </div>
                          <p className="text-xs italic text-zinc-300 font-light -mb-1.5 font-urbanist">
                            Gen:
                          </p>
                          <h1 className="font-bold text-lg mb-2 font-poppins">
                            {member.generasi}th Generation
                          </h1>
                          <p className="text-xs italic text-zinc-300 font-light -mb-1.5 font-urbanist">
                            Birthday:
                          </p>
                          <h2 className="font-bold text-lg mb-2 font-poppins">
                            {member.tanggal_lahir}
                          </h2>
                          <p className="text-xs italic text-zinc-300 font-light -mb-1.5 font-urbanist">
                            Age:
                          </p>
                          <h3 className="font-bold text-lg mb-2 font-poppins">
                            {member.umur} years old
                          </h3>
                          <Link
                            href={"/member/" + member.id}
                            className="text-sm text-zinc-600 italic font-light mt-5 hover:text-white font-urbanist"
                          >
                            More Information
                          </Link>
                        </div>
                      </div>
                    </label>
                  );
                })}
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
    </>
  );
}
