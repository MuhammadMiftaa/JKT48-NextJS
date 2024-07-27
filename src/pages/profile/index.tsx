import Image from "next/image";
import React from "react";
import Barcode from "./Barcode.js";
import Link from "next/link.js";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { userType } from "@/components/types/userType.jsx";
import { useRouter } from "next/router.js";

export default function profilePage() {
  const { data }: any = useSession();

  const userID = data ? data.user.id : "";

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const {
    data: dataUser,
    error,
    isLoading,
  } = useSWR(`/api/data-user/user/${userID}`, fetcher);
  const userData: userType = isLoading ? {} : dataUser.data;

  const iterations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="grid gap-6 grid-cols-4 p-8 pt-48 bg-zinc-950 w-full">
      <div className="flex flex-col col-span-4 rounded-xl pt-12 pb-6 px-12 bg-black relative outline outline-custom-green shadow-[0_0_15px_0] shadow-custom-green">
        <div className="flex flex-col md:flex-row md:justify-around gap-4 md:gap-0 md:items-center w-full pb-8">
          <div className="bg-black -top-5 rounded-xl w-fit absolute border-2 border-custom-green shadow-[0_0_15px_0] shadow-custom-green">
            {userData ? (
              <h1 className="py-1 px-4 top-0 text-white font-urbanist text-xl w-fit rounded-xl font-light">
                {userData.fullname}
              </h1>
            ) : (
              <h1>...</h1>
            )}
          </div>
<div className="flex flex-col items-center gap-2" >
          <div className="p-1 outline outline-white shadow-[0_0_20px_0] shadow-white rounded-xl">
            {userData.oshimen && (
              <Image
                src={
                  "/member/" +
                  userData.oshimen.nama.toLowerCase().replace(/ /g, "_") +
                  ".png"
                }
                width={50}
                height={50}
                className="rounded-xl bg-gradient-to-br from-custom-green to-blue-600"
                alt={userData.oshimen.nama}

              />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col font-poppins">
              <h1 className="text-zinc-600 text-[0.65rem] md:text-sm -mb-1">Email`</h1>
              {userData && (
                <h2 className="text-sm md:text-lg font-semibold">{userData.email}</h2>
              )}
            </div>
            <div className="flex flex-col font-poppins">
              <h1 className="text-zinc-600 text-[0.65rem] md:text-sm -mb-1">Membership Type</h1>
              <h2 className="text-sm md:text-lg font-semibold">Official Fans Club</h2>
            </div>
            <div className="flex flex-col font-poppins">
              <h1 className="text-zinc-600 text-[0.65rem] md:text-sm -mb-1">
                Most favorite member
                {/* <span className="block">(Oshimen)</span> */}
              </h1>
              {userData.oshimen && (
                <Link href={"/member/" + userData.oshimen.id} className="">
                  <h2 className="text-sm md:text-lg font-semibold hover:text-pink-600 duration-300">
                    {userData.oshimen.nama}
                  </h2>
                </Link>
              )}
            </div>
          </div>
</div>
<div className="flex" >
          <div className="flex flex-col gap-2">
            <div className="flex flex-col font-poppins">
              <h1 className="text-zinc-600 text-[0.65rem] md:text-sm -mb-1">Member Number</h1>
              <h2 className="text-sm md:text-lg font-semibold">389236</h2>
            </div>
            <div className="flex flex-col font-poppins">
              <h1 className="text-zinc-600 text-[0.65rem] md:text-sm -mb-1">OFC Number</h1>
              <h2 className="text-sm md:text-lg font-semibold">OFC 23-271203</h2>
            </div>
            <div className="flex flex-col font-poppins">
              <h1 className="text-zinc-600 text-[0.65rem] md:text-sm -mb-1">
                Membership Expires
              </h1>
              <h2 className="text-sm md:text-lg font-semibold">31-12-2024</h2>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col font-poppins">
              <h1 className="text-zinc-600 text-[0.65rem] md:text-sm -mb-1">JKT48 Point</h1>
              <h2 className="text-sm md:text-lg font-semibold">1.200.000 P</h2>
            </div>
            <div className="flex flex-col font-poppins">
              <h1 className="text-zinc-600 text-[0.65rem] md:text-sm -mb-1">Bonus Point</h1>
              <h2 className="text-sm md:text-lg font-semibold">200.000 P</h2>
            </div>
            <div className="flex flex-col font-poppins">
              <h1 className="text-zinc-600 text-[0.65rem] md:text-sm -mb-1">Theater Arrivals</h1>
              <h2 className="text-sm md:text-lg font-semibold">11 times</h2>
            </div>
          </div>
</div>
          <div className="pb-5">
            <h1 className="text-zinc-400 text-lg text-center font-bold">
              Barcode
            </h1>
            {userData.ID && <Barcode classname={"h-16"} value={userData.ID} />}
          </div>
        </div>
        <div className="flex justify-around py-3 mt-20">
          <button
            type="button"
            className=" py-1.5 px-4 shadow-sm shadow-custom-green border border-custom-green rounded font-poppins active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            Print Member Card
          </button>
          <button
            type="button"
            className=" py-1.5 px-4 shadow-sm shadow-[#69D1C2] border border-zinc-700 rounded font-poppins active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            Print OFC Card
          </button>
          <button
            type="button"
            className=" py-1.5 px-4 shadow-sm shadow-[#4097DB] border border-[#4097DB] rounded font-poppins active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            Leave Membership
          </button>
          <button
            type="button"
            className=" py-1.5 px-4 shadow-sm shadow-blue-600 border border-zinc-700 rounded font-poppins active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            Buy JKT48 Point
          </button>
        </div>
      </div>
      <div className="col-span-4 bg-black outline relative outline-white shadow-[0_0_15px_0] shadow-white rounded-xl mt-64 py-14 px-12">
        <h1 className="capitalize font-poppins text-custom-green text-2xl font-bold bg-black border-2 border-white py-1 px-3 rounded-xl w-fit shadow-[0_0_15px_0] shadow-white absolute -top-5">
          JKT48 point purchase history
        </h1>
        <table className="font-poppins text-center border border-zinc-700 mt-6 shadow-xl shadow-zinc-700">
          <thead>
            <tr>
              <th className="border border-zinc-700 text-white font-semibold w-1/6 py-2 px-3">
                Operation
              </th>
              <th className="border border-zinc-700 text-white font-semibold w-1/6 py-2 px-3">
                ID
              </th>
              <th className="border border-zinc-700 text-white font-semibold w-1/6 py-2 px-3">
                Buying Date
              </th>
              <th className="border border-zinc-700 text-white font-semibold w-1/6 py-2 px-3">
                Usage Purpose
              </th>
              <th className="border border-zinc-700 text-white font-semibold w-1/6 py-2 px-3">
                Quantity
              </th>
              <th className="border border-zinc-700 text-white font-semibold w-1/6 py-2 px-3">
                Point Change
              </th>
              <th className="border border-zinc-700 text-white font-semibold w-1/6 py-2 px-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {iterations.map((iteration) => (
              <tr key={iteration}>
                <td className="border border-zinc-700 text-white py-3 px-3">
                  Detail
                </td>
                <td className="border border-zinc-700 text-white py-3 px-3">
                  123456
                </td>
                <td className="border border-zinc-700 text-white py-3 px-3">
                  12-12-2021
                </td>
                <td className="border border-zinc-700 text-white py-3 px-3">
                  Buy JKT48 Point
                </td>
                <td className="border border-zinc-700 text-white py-3 px-3">
                  1000
                </td>
                <td className="border border-zinc-700 text-white py-3 px-3">
                  (+100.000 P)
                </td>
                <td className="border border-zinc-700 text-white py-3 px-3">
                  Success
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="border-2 border-white shadow-[0_0_7px_0] shadow-white bg-black py-1 px-3 font-urbanist text-sm font-semibold w-fit rounded-lg text-white  cursor-pointer absolute -bottom-3 right-10">
          See Details
        </h2>
      </div>
      <div className="col-span-4 bg-black outline relative outline-white shadow-[0_0_15px_0] shadow-white rounded-xl mt-24 py-14 px-12">
        <h1 className="capitalize bg-black shadow-[0_0_15px_0] shadow-white left-10 py-1 px-3 rounded-xl font-bold font-poppins text-2xl border-white border-2 absolute -top-5 text-[#69D1C2]">
          MnG and VC purchases
        </h1>
        <table className="font-poppins text-center border border-zinc-700 mt-6 shadow-xl shadow-zinc-700">
          <thead>
            <tr>
              <th className="border border-zinc-700 text-white font-semibold w-1/6 py-2 px-3">
                Operation
              </th>
              <th className="border border-zinc-700 text-white font-semibold w-1/6 py-2 px-3">
                ID
              </th>
              <th className="border border-zinc-700 text-white font-semibold w-1/6 py-2 px-3">
                Buying Date
              </th>
              <th className="border border-zinc-700 text-white font-semibold w-1/6 py-2 px-3">
                Name
              </th>
              <th className="border border-zinc-700 text-white font-semibold w-1/6 py-2 px-3">
                Day/Date
              </th>
              <th className="border border-zinc-700 text-white font-semibold w-1/6 py-2 px-3">
                Quantity
              </th>
              <th className="border border-zinc-700 text-white font-semibold w-1/6 py-2 px-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {iterations.map((iteration) => (
              <tr key={iteration}>
                <td className="border border-zinc-700 py-1 px-3 bg-clip-text text-transparent bg-gradient-to-r from-custom-green to-blue-600 hover:font-semibold cursor-pointer">
                  Receipts
                </td>
                <td className="border border-zinc-700 text-white py-1 px-3">
                  327491
                </td>
                <td className="border border-zinc-700 text-white py-1 px-3">
                  25 April 2024
                </td>
                <td className="border border-zinc-700 text-white py-1 px-3">
                  A Sweet Surprise, 18 February 2024
                </td>
                <td className="border border-zinc-700 text-white py-1 px-3">
                  18 February 2024
                </td>
                <td className="border border-zinc-700 text-white py-1 px-3">
                  1
                </td>
                <td className="border border-zinc-700 text-white py-1 px-3">
                  Paid
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="border-2 border-white shadow-[0_0_7px_0] shadow-white bg-black py-1 px-3 font-urbanist text-sm font-semibold w-fit rounded-lg text-white cursor-pointer absolute -bottom-3 right-10 ">
          See Details
        </h2>
      </div>
      <div className="col-span-4 bg-black outline relative outline-white shadow-[0_0_15px_0] shadow-white rounded-xl mt-24 py-14 px-12">
        <h1 className="capitalize bg-black shadow-[0_0_15px_0] shadow-white py-1 px-3 rounded-xl font-bold font-poppins text-2xl border-white border-2 absolute -top-5 text-[#4097DB]">
          2Shot purchases
        </h1>
        <table className="font-poppins text-center border border-zinc-700 mt-6 shadow-xl shadow-zinc-700">
          <thead>
            <tr>
              <th className="border border-zinc-700 text-white font-semibold w-1/6 py-2 px-3">
                Operation
              </th>
              <th className="border border-zinc-700 text-white font-semibold w-1/6 py-2 px-3">
                Buying Date
              </th>
              <th className="border border-zinc-700 text-white font-semibold w-1/6 py-2 px-3">
                Show Name
              </th>
              <th className="border border-zinc-700 text-white font-semibold w-1/6 py-2 px-3">
                Day/Date
              </th>
              <th className="border border-zinc-700 text-white font-semibold w-1/6 py-2 px-3">
                Time
              </th>
              <th className="border border-zinc-700 text-white font-semibold w-1/6 py-2 px-3">
                Ticket Type
              </th>
            </tr>
          </thead>
          <tbody>
            {iterations.map((iteration) => (
              <tr key={iteration}>
                <td className="border border-zinc-700 py-1 px-3 bg-clip-text text-transparent bg-gradient-to-r from-custom-green to-blue-600 hover:font-semibold cursor-pointer">
                  Receipts
                </td>
                <td className="border border-zinc-700 text-white py-1 px-3">
                  327491
                </td>
                <td className="border border-zinc-700 text-white py-1 px-3">
                  25 April 2024
                </td>
                <td className="border border-zinc-700 text-white py-1 px-3">
                  A Sweet Surprise, 18 February 2024
                </td>
                <td className="border border-zinc-700 text-white py-1 px-3">
                  18 February 2024
                </td>
                <td className="border border-zinc-700 text-white py-1 px-3">
                  1
                </td>
                <td className="border border-zinc-700 text-white py-1 px-3">
                  Paid
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="border-2 border-white shadow-[0_0_7px_0] shadow-white bg-black py-1 px-3 font-urbanist text-sm font-semibold w-fit rounded-lg text-white cursor-pointer absolute -bottom-3 right-10">
          See Details
        </h2>
      </div>

      <div className="col-span-4 bg-black outline relative outline-white shadow-[0_0_15px_0] shadow-white rounded-xl mt-24 py-14 px-12">
        <h1 className="capitalize bg-black shadow-[0_0_15px_0] shadow-white py-1 px-3 rounded-xl font-bold font-poppins text-2xl border-white border-2 absolute -top-5 text-blue-600">
          Show Ticket Purchases
        </h1>
        <table className="font-poppins text-center border border-zinc-700 mt-6 shadow-xl shadow-zinc-700">
          <thead>
            <tr>
              <th className="border border-zinc-700 text-white font-semibold w-1/6 py-2 px-3">
                Operation
              </th>
              <th className="border border-zinc-700 text-white font-semibold w-1/6 py-2 px-3">
                Buying Date
              </th>
              <th className="border border-zinc-700 text-white font-semibold w-1/6 py-2 px-3">
                Show Name
              </th>
              <th className="border border-zinc-700 text-white font-semibold w-1/6 py-2 px-3">
                Day/Date
              </th>
              <th className="border border-zinc-700 text-white font-semibold w-1/6 py-2 px-3">
                Time
              </th>
              <th className="border border-zinc-700 text-white font-semibold w-1/6 py-2 px-3">
                Ticket Type
              </th>
            </tr>
          </thead>
          <tbody>
            {iterations.map((iteration) => (
              <tr key={iteration}>
                <td className="border border-zinc-700  bg-clip-text text-transparent bg-gradient-to-r from-custom-green to-blue-600 hover:font-semibold cursor-pointer py-1 px-3">
                  Detail
                </td>
                <td className="border border-zinc-700 text-white py-1 px-3">
                  12-12-2021
                </td>
                <td className="border border-zinc-700 text-white py-1 px-3">
                  Ramune No Nomikata
                </td>
                <td className="border border-zinc-700 text-white py-1 px-3">
                  Saturday, 19-12-2021
                </td>
                <td className="border border-zinc-700 text-white py-1 px-3">
                  Night
                </td>
                <td className="border border-zinc-700 text-white py-1 px-3">
                  GEN
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="border-2 border-white shadow-[0_0_7px_0] shadow-white bg-black py-1 px-3 font-urbanist text-sm font-semibold w-fit rounded-lg text-white cursor-pointer absolute -bottom-3 right-10">
          See Details
        </h2>
      </div>
    </div>
  );
}
