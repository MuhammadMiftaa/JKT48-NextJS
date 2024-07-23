// import "../member/index.module.scss"
import Card from "@/components/fragments/MemberCard/BigCard";
import Loading from "@/components/elements/Loading";
import Footer from "@/components/layouts/Footer";
import { memberType } from "@/components/types/memberType";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useSWR from "swr";
import MemberCards from "@/components/layouts/MemberCards";

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
            <MemberCards memberRegular={memberRegular} category="Regular"/>
            <MemberCards memberRegular={memberTrainee} category="Trainee"/>
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
