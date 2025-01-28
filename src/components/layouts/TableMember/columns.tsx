"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MemberSchemaZod, MemberTypeZod } from "../../../schema/zodSchema";
import { ArrowUpDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosRemoveCircle } from "react-icons/io";
import { BiEdit } from "react-icons/bi";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useForm } from "react-hook-form";
import { GETAPIURL } from "@/helper/getEnv";
import { zodResolver } from "@hookform/resolvers/zod";
import MemberInput from "@/components/fragments/InputGroup/MemberInput";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";

export const columns: ColumnDef<MemberTypeZod>[] = [
  {
    accessorKey: "member_regular",
    header: "",
  },
  {
    accessorKey: "nama",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center justify-center"
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nama
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "generasi",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center justify-center"
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Generasi
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "umur",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center justify-center"
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Umur
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "tanggal_lahir",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center justify-center"
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tanggal Lahir
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "asal",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center justify-center"
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Kota Asal
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "kota_lahir",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center justify-center"
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Kota Lahir
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "fanbase",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center justify-center"
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Fanbase
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "nama_lengkap",
    header: "Nama Lengkap",
  },
  {
    accessorKey: "nama_panggilan",
    header: "Nama Panggilan",
  },
  {
    accessorKey: "kabesha",
    header: "Kabesha",
  },
  {
    accessorKey: "foto",
    header: "Foto",
  },
  {
    accessorKey: "tanggal_bergabung",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center justify-center"
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tanggal Bergabung
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "salam_perkenalan",
    header: "Salam Perkenalan",
  },
  {
    accessorKey: "universitas",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center justify-center"
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Universitas
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "jurusan",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center justify-center"
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Jurusan
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
  },
  {
    accessorKey: "username_idn",
    header: "Username IDN",
  },
  {
    accessorKey: "username_ig",
    header: "Username IG",
  },
  {
    accessorKey: "username_sr",
    header: "Username SR",
  },
  {
    accessorKey: "username_tiktok",
    header: "Username Tiktok",
  },
  {
    accessorKey: "username_x",
    header: "Username X",
  },
  {
    id: "update",
    cell: ({ row }) => {
      const { register, setValue, handleSubmit } = useForm<MemberTypeZod>({
        resolver: zodResolver(MemberSchemaZod),
      });

      const member = row.original;
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState<string | null>(null);
      const [kabesha, setKabesha] = useState<string>("");
      const [photo, setPhoto] = useState<string>("");
      const [memberRegular, setMemberRegular] = useState(member.member_regular);
      const [success, setSuccess] = useState(false);

      useEffect(() => {
        setValue("nama", member.nama);
        setValue("nama_lengkap", member.nama_lengkap);
        setValue("nama_panggilan", member.nama_panggilan);
        setValue("umur", member.umur);
        setValue("generasi", member.generasi);
        setValue("member_regular", member.member_regular);
        setValue("kabesha", member.kabesha);
        setValue("tanggal_lahir", member.tanggal_lahir);
        setValue("kota_lahir", member.kota_lahir);
        setValue("asal", member.asal);
        setValue("universitas", member.universitas);
        setValue("jurusan", member.jurusan);
        setValue("foto", member.foto);
        setValue("tanggal_bergabung", member.tanggal_bergabung);
        setValue("fanbase", member.fanbase);
        setValue("salam_perkenalan", member.salam_perkenalan);
        setValue("username_idn", member.username_idn);
        setValue("username_ig", member.username_ig);
        setValue("username_sr", member.username_sr);
        setValue("username_tiktok", member.username_tiktok);
        setValue("username_x", member.username_x);
      }, []);

      useEffect(() => {
        if (success) {
          const timeout = setTimeout(() => {
            setSuccess(false);
          }, 1500);

          return () => clearTimeout(timeout);
        }
      }, [success]);

      const onSubmit = handleSubmit(async (data) => {
        console.info({
          ...data,
          member_regular: memberRegular,
          id: member.nama.split(" ").join("-"),
        });
        try {
          setLoading(true);
          const response = await fetch(`${GETAPIURL()}/data-member/update`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...data,
              member_regular: memberRegular,
              id: member.nama.split(" ").join("-"),
            }),
          });

          if (!response.ok) {
            throw new Error("An error occurred while adding a member");
          }
          setSuccess(true);
          setLoading(false);
        } catch (error: any) {
          setError(error);
          setLoading(false);
          console.error(error);
        }
      });
      return (
        <>
          <Drawer>
            <DrawerTrigger asChild>
              <button className="text-xl text-cyan-500 cursor-pointer hover:text-cyan-900 duration-100">
                <BiEdit />
              </button>
            </DrawerTrigger>
            <DrawerContent className="border-none bg-custom-gray h-[32rem] px-5">
              <Tabs
                defaultValue="identitas"
                className="w-full h-full relative font-urbanist pt-5"
              >
                <form className="" onSubmit={onSubmit}>
                  <TabsContent
                    className="h-full flex justify-center items-center font-urbanist"
                    value="identitas"
                  >
                    <div className="w-11/12 h-96 grid grid-cols-3 grid-rows-5">
                      <div className="col-span-1 row-span-5 h-full w-full border-r border-zinc-600 flex justify-end items-center p-4">
                        {member.kabesha || kabesha ? (
                          <Image
                            className="object-contain h-full rounded"
                            src={member.kabesha || kabesha}
                            alt="kabesha"
                            height={400}
                            width={300}
                          ></Image>
                        ) : (
                          <div className="flex flex-col justify-center items-center h-full w-full">
                            <p className="text-sm font-light text-zinc-400">
                              No image available.
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="col-span-2 flex flex-col border-b border-zinc-600 mb-4">
                        <label
                          className="text-nowrap text-start text-xs italic tracking-widest z-10 text-zinc-400 pl-2.5"
                          htmlFor="nama_lengkap"
                        >
                          Nama Lengkap
                        </label>
                        <input
                          className="w-full bg-custom-gray rounded text-xl -mt-2 border-none focus:ring-0 focus:border-0 focus:outline-none"
                          type="text"
                          id="nama_lengkap"
                          {...register("nama_lengkap")}
                        />
                      </div>
                      <div className="col-span-2 flex flex-col border-b border-zinc-600 mb-4">
                        <label
                          className="text-nowrap text-start text-xs italic tracking-widest z-10 text-zinc-400 pl-2.5"
                          htmlFor="nama_panggilan"
                        >
                          Nama Panggilan
                        </label>
                        <input
                          className="w-full bg-custom-gray rounded text-xl -mt-2 border-none focus:ring-0 focus:border-0 focus:outline-none"
                          type="text"
                          id="nama_panggilan"
                          {...register("nama_panggilan")}
                        />
                      </div>
                      <div className="col-span-1 flex flex-col border-b border-zinc-600 mb-4">
                        <label
                          className="text-nowrap text-start text-xs italic tracking-widest z-10 text-zinc-400 pl-2.5"
                          htmlFor="generasi"
                        >
                          Generasi
                        </label>
                        <input
                          className="w-full bg-custom-gray rounded text-xl -mt-2 border-none focus:ring-0 focus:border-0 focus:outline-none"
                          type="number"
                          id="generasi"
                          {...register("generasi", { valueAsNumber: true })}
                        />
                      </div>
                      <div className="col-span-1 flex flex-col border-b border-zinc-600 mb-4">
                        <label
                          className="text-nowrap text-start text-xs italic tracking-widest z-10 text-zinc-400 pl-2.5"
                          htmlFor="umur"
                        >
                          Umur
                        </label>
                        <input
                          className="w-full bg-custom-gray rounded text-xl -mt-2 border-none focus:ring-0 focus:border-0 focus:outline-none"
                          type="number"
                          id="umur"
                          {...register("umur", { valueAsNumber: true })}
                        />
                      </div>
                      <div className="col-span-2 flex flex-col border-b border-zinc-600 mb-4">
                        <label
                          className="text-nowrap text-start text-xs italic tracking-widest z-10 text-zinc-400 pl-2.5"
                          htmlFor="kabesha"
                        >
                          Kabesha
                        </label>
                        <input
                          className="w-full bg-custom-gray rounded text-xl -mt-2 border-none focus:ring-0 focus:border-0 focus:outline-none"
                          type="text"
                          id="kabesha"
                          {...register("kabesha", {
                            onChange: (e) =>
                              (e.target.value.includes(
                                "https://pbs.twimg.com"
                              ) ||
                                e.target.value.includes("https://jkt48.com") ||
                                e.target.value.includes(
                                  "https://res.cloudinary.com"
                                ) ||
                                e.target.value === "") &&
                              setKabesha(e.target.value),
                          })}
                        />
                      </div>
                      <div className="col-span-2 flex items-center gap-4 pl-3">
                        <label
                          className="cursor-pointer w-1/4"
                          htmlFor="regular"
                        >
                          <input
                            className="hidden peer"
                            type="radio"
                            id="regular"
                            value={"true"}
                            name="member_regular"
                            checked={memberRegular}
                            onChange={() => setMemberRegular(true)}
                          />
                          <span className="block font-poppins text-center uppercase border border-white text-white py-1 w-full text-lg rounded shadow-sm shadow-white peer-checked:shadow-none peer-checked:translate-x-0.5 peer-checked:translate-y-1">
                            regular
                          </span>
                        </label>
                        <label
                          className="cursor-pointer w-1/4"
                          htmlFor="trainee"
                        >
                          <input
                            className="hidden peer"
                            type="radio"
                            id="trainee"
                            value={"false"}
                            name="member_regular"
                            checked={!memberRegular}
                            onChange={() => setMemberRegular(false)}
                          />
                          <span className="block font-poppins text-center uppercase border border-white text-white py-1 w-full text-lg rounded shadow-sm shadow-white peer-checked:shadow-none peer-checked:translate-x-0.5 peer-checked:translate-y-0.translate-x-0.5">
                            trainee
                          </span>
                        </label>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent
                    className="h-full flex justify-center items-center font-urbanist -mt-0.5"
                    value="profil"
                  >
                    <div className="w-11/12 h-[23rem] grid grid-cols-3 grid-rows-5">
                      <div className="col-span-1 row-span-5 h-full w-full border-r border-zinc-600 flex justify-end items-center p-4">
                        {member.foto || photo ? (
                          <Image
                            className="object-contain h-full rounded"
                            src={member.foto || photo}
                            alt="foto"
                            height={400}
                            width={300}
                          ></Image>
                        ) : (
                          <div className="flex justify-center items-center h-full w-full">
                            <p className="text-sm font-light text-zinc-400">
                              No image available.
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="col-span-1 flex flex-col border-b border-zinc-600 mb-4">
                        <label
                          className="text-nowrap text-start text-xs italic tracking-widest z-10 text-zinc-400 pl-2.5"
                          htmlFor="kota_lahir"
                        >
                          Kota Lahir
                        </label>
                        <input
                          className="w-full bg-custom-gray rounded text-xl -mt-2 border-none focus:ring-0 focus:border-0 focus:outline-none"
                          type="text"
                          id="kota_lahir"
                          {...register("kota_lahir")}
                        />
                      </div>
                      <div className="col-span-1 flex flex-col border-b border-zinc-600 mb-4">
                        <label
                          className="text-nowrap text-start text-xs italic tracking-widest z-10 text-zinc-400 pl-2.5"
                          htmlFor="tanggal_lahir"
                        >
                          Tanggal Lahir
                        </label>
                        <input
                          className="w-full bg-custom-gray rounded text-xl -mt-2 border-none focus:ring-0 focus:border-0 focus:outline-none"
                          type="text"
                          id="tanggal_lahir"
                          {...register("tanggal_lahir")}
                        />
                      </div>
                      <div className="col-span-2 flex flex-col border-b border-zinc-600 mb-4">
                        <label
                          className="text-nowrap text-start text-xs italic tracking-widest z-10 text-zinc-400 pl-2.5"
                          htmlFor="asal"
                        >
                          Kota Asal
                        </label>
                        <input
                          className="w-full bg-custom-gray rounded text-xl -mt-2 border-none focus:ring-0 focus:border-0 focus:outline-none"
                          type="text"
                          id="asal"
                          {...register("asal")}
                        />
                      </div>
                      <div className="col-span-2 flex flex-col border-b border-zinc-600 mb-4">
                        <label
                          className="text-nowrap text-start text-xs italic tracking-widest z-10 text-zinc-400 pl-2.5"
                          htmlFor="universitas"
                        >
                          Universitas
                        </label>
                        <input
                          className="w-full bg-custom-gray rounded text-xl -mt-2 border-none focus:ring-0 focus:border-0 focus:outline-none"
                          type="text"
                          id="universitas"
                          {...register("universitas")}
                        />
                      </div>
                      <div className="col-span-2 flex flex-col border-b border-zinc-600 mb-4">
                        <label
                          className="text-nowrap text-start text-xs italic tracking-widest z-10 text-zinc-400 pl-2.5"
                          htmlFor="jurusan"
                        >
                          Jurusan
                        </label>
                        <input
                          className="w-full bg-custom-gray rounded text-xl -mt-2 border-none focus:ring-0 focus:border-0 focus:outline-none"
                          type="text"
                          id="jurusan"
                          {...register("jurusan")}
                        />
                      </div>
                      <div className="col-span-2 flex flex-col">
                        <label
                          className="text-nowrap text-start text-xs italic tracking-widest z-10 text-zinc-400 pl-2.5"
                          htmlFor="foto"
                        >
                          Foto
                        </label>
                        <input
                          className="w-full bg-custom-gray rounded text-xl -mt-2 border-none focus:ring-0 focus:border-0 focus:outline-none"
                          type="text"
                          id="foto"
                          {...register("foto", {
                            onChange: (e) =>
                              (e.target.value.includes(
                                "https://pbs.twimg.com"
                              ) ||
                                e.target.value.includes("https://jkt48.com") ||
                                e.target.value.includes(
                                  "https://res.cloudinary.com"
                                ) ||
                                e.target.value === "") &&
                              setPhoto(e.target.value),
                          })}
                        />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent
                    className="h-full flex justify-center items-center font-urbanist -mt-[0.1rem]"
                    value="keanggotaan"
                  >
                    <div className="grid grid-cols-5 grid-rows-5 h-full w-4/5 mt-3">
                      <div className="col-span-5 flex flex-col border-b border-zinc-600 mb-4">
                        <label
                          className="text-nowrap text-start text-xs italic tracking-widest z-10 text-zinc-400 pl-2.5"
                          htmlFor="tanggal_bergabung"
                        >
                          Tanggal Bergabung
                        </label>
                        <input
                          className="w-full bg-custom-gray rounded text-xl -mt-2 border-none focus:ring-0 focus:border-0 focus:outline-none"
                          type="text"
                          id="tanggal_bergabung"
                          {...register("tanggal_bergabung")}
                        />
                      </div>
                      <div className="col-span-5 flex flex-col border-b border-zinc-600 mb-4">
                        <label
                          className="text-nowrap text-start text-xs italic tracking-widest z-10 text-zinc-400 pl-2.5"
                          htmlFor="fanbase"
                        >
                          Fanbase
                        </label>
                        <input
                          className="w-full bg-custom-gray rounded text-xl -mt-2 border-none focus:ring-0 focus:border-0 focus:outline-none"
                          type="text"
                          id="fanbase"
                          {...register("fanbase")}
                        />
                      </div>
                      <div className="col-span-5 flex flex-col border-b border-zinc-600 mb-4">
                        <label
                          className="text-nowrap text-start text-xs italic tracking-widest z-10 text-zinc-400 pl-2.5"
                          htmlFor="salam_perkenalan"
                        >
                          Salam Perkenalan
                        </label>
                        <input
                          type="text"
                          className="w-full bg-custom-gray rounded text-xl -mt-2 border-none focus:ring-0 focus:border-0 focus:outline-none"
                          id="salam_perkenalan"
                          {...register("salam_perkenalan")}
                        />
                      </div>
                      <div className="flex items-center col-span-2">
                        <label className="text-xl" htmlFor="username_ig">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 2499.899999999999 2500"
                          >
                            <defs>
                              <radialGradient
                                id="a"
                                cx="332.14"
                                cy="2511.81"
                                r="3263.54"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset=".09" stop-color="#fa8f21" />
                                <stop offset=".78" stop-color="#d82d7e" />
                              </radialGradient>
                              <radialGradient
                                id="b"
                                cx="1516.14"
                                cy="2623.81"
                                r="2572.12"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop
                                  offset=".64"
                                  stop-color="#8c3aaa"
                                  stop-opacity="0"
                                />
                                <stop offset="1" stop-color="#8c3aaa" />
                              </radialGradient>
                            </defs>
                            <path
                              d="M833.4 1250c0-230.11 186.49-416.7 416.6-416.7s416.7 186.59 416.7 416.7-186.59 416.7-416.7 416.7-416.6-186.59-416.6-416.7m-225.26 0c0 354.5 287.36 641.86 641.86 641.86s641.86-287.36 641.86-641.86S1604.5 608.14 1250 608.14 608.14 895.5 608.14 1250m1159.13-667.31a150 150 0 1 0 150.06-149.94h-.06a150.07 150.07 0 0 0-150 149.94M745 2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28 7.27-505.15c5.55-121.87 26-188 43-232.13 22.72-58.36 49.78-100 93.5-143.78s85.32-70.88 143.78-93.5c44-17.16 110.26-37.46 232.13-43 131.76-6.06 171.34-7.27 505-7.27s373.28 1.31 505.15 7.27c121.87 5.55 188 26 232.13 43 58.36 22.62 100 49.78 143.78 93.5s70.78 85.42 93.5 143.78c17.16 44 37.46 110.26 43 232.13 6.06 131.87 7.27 171.34 7.27 505.15s-1.21 373.28-7.27 505.15c-5.55 121.87-25.95 188.11-43 232.13-22.72 58.36-49.78 100-93.5 143.68s-85.42 70.78-143.78 93.5c-44 17.16-110.26 37.46-232.13 43-131.76 6.06-171.34 7.27-505.15 7.27s-373.28-1.21-505-7.27M734.65 7.57c-133.07 6.06-224 27.16-303.41 58.06C349 97.54 279.38 140.35 209.81 209.81S97.54 349 65.63 431.24c-30.9 79.46-52 170.34-58.06 303.41C1.41 867.93 0 910.54 0 1250s1.41 382.07 7.57 515.35c6.06 133.08 27.16 223.95 58.06 303.41 31.91 82.19 74.62 152 144.18 221.43S349 2402.37 431.24 2434.37c79.56 30.9 170.34 52 303.41 58.06C868 2498.49 910.54 2500 1250 2500s382.07-1.41 515.35-7.57c133.08-6.06 223.95-27.16 303.41-58.06 82.19-32 151.86-74.72 221.43-144.18s112.18-139.24 144.18-221.43c30.9-79.46 52.1-170.34 58.06-303.41 6.06-133.38 7.47-175.89 7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95 97.54 2068.86 65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17 1.51 1589.56 0 1250.1 0S868 1.41 734.65 7.57"
                              fill="url(#a)"
                            />
                            <path
                              d="M833.4 1250c0-230.11 186.49-416.7 416.6-416.7s416.7 186.59 416.7 416.7-186.59 416.7-416.7 416.7-416.6-186.59-416.6-416.7m-225.26 0c0 354.5 287.36 641.86 641.86 641.86s641.86-287.36 641.86-641.86S1604.5 608.14 1250 608.14 608.14 895.5 608.14 1250m1159.13-667.31a150 150 0 1 0 150.06-149.94h-.06a150.07 150.07 0 0 0-150 149.94M745 2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28 7.27-505.15c5.55-121.87 26-188 43-232.13 22.72-58.36 49.78-100 93.5-143.78s85.32-70.88 143.78-93.5c44-17.16 110.26-37.46 232.13-43 131.76-6.06 171.34-7.27 505-7.27s373.28 1.31 505.15 7.27c121.87 5.55 188 26 232.13 43 58.36 22.62 100 49.78 143.78 93.5s70.78 85.42 93.5 143.78c17.16 44 37.46 110.26 43 232.13 6.06 131.87 7.27 171.34 7.27 505.15s-1.21 373.28-7.27 505.15c-5.55 121.87-25.95 188.11-43 232.13-22.72 58.36-49.78 100-93.5 143.68s-85.42 70.78-143.78 93.5c-44 17.16-110.26 37.46-232.13 43-131.76 6.06-171.34 7.27-505.15 7.27s-373.28-1.21-505-7.27M734.65 7.57c-133.07 6.06-224 27.16-303.41 58.06C349 97.54 279.38 140.35 209.81 209.81S97.54 349 65.63 431.24c-30.9 79.46-52 170.34-58.06 303.41C1.41 867.93 0 910.54 0 1250s1.41 382.07 7.57 515.35c6.06 133.08 27.16 223.95 58.06 303.41 31.91 82.19 74.62 152 144.18 221.43S349 2402.37 431.24 2434.37c79.56 30.9 170.34 52 303.41 58.06C868 2498.49 910.54 2500 1250 2500s382.07-1.41 515.35-7.57c133.08-6.06 223.95-27.16 303.41-58.06 82.19-32 151.86-74.72 221.43-144.18s112.18-139.24 144.18-221.43c30.9-79.46 52.1-170.34 58.06-303.41 6.06-133.38 7.47-175.89 7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95 97.54 2068.86 65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17 1.51 1589.56 0 1250.1 0S868 1.41 734.65 7.57"
                              fill="url(#b)"
                            />
                          </svg>
                        </label>
                        <input
                          type="text"
                          className="w-full bg-custom-gray rounded text-xl border-none focus:ring-0 focus:border-0 focus:outline-none"
                          id="username_ig"
                          {...register("username_ig")}
                        />
                      </div>
                      <div className="flex items-center col-start-3 col-span-2">
                        <label className="text-xl" htmlFor="username_tiktok">
                          <svg
                            width="25"
                            height="25"
                            viewBox="-58.35000000000002 -186.70564362582354 2548.289756960746 2538.849821747569"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g fill="#25f4ee">
                              <path d="M779.38 890.55v-88.12a650.81 650.81 0 0 0-92.45-7.94c-299.8-.64-565.22 193.64-655.25 479.6S47.92 1871.34 294 2042.56a684.7 684.7 0 0 1 485.36-1152z" />
                              <path d="M796 1888.72c167.62-.23 305.4-132.28 312.74-299.74V94.62h273A512.17 512.17 0 0 1 1373.8 0h-373.41v1492.92c-6.21 168.31-144.32 301.63-312.74 301.9a317.76 317.76 0 0 1-144.45-36.11A313.48 313.48 0 0 0 796 1888.72zM1891.66 601.64v-83.06a509.85 509.85 0 0 1-282.4-85.22 517.79 517.79 0 0 0 282.4 168.28z" />
                            </g>
                            <path
                              d="M1609.26 433.36a514.19 514.19 0 0 1-127.84-339.47h-99.68a517.16 517.16 0 0 0 227.52 339.47zM686.93 1167.9a313.46 313.46 0 0 0-144.46 590.81A312.75 312.75 0 0 1 796 1262.51a329.69 329.69 0 0 1 92.44 14.49V897.05a654.77 654.77 0 0 0-92.44-7.22h-16.62v288.9a321.13 321.13 0 0 0-92.45-10.83z"
                              fill="#fe2c55"
                            />
                            <path
                              d="M1891.66 601.64v288.91a886.23 886.23 0 0 1-517.86-168.29v759.1c-.8 378.78-308.09 685.43-686.87 685.43A679.65 679.65 0 0 1 294 2042.56 685.43 685.43 0 0 0 1481.42 1576V819.05A887.71 887.71 0 0 0 2000 985.17v-372a529.59 529.59 0 0 1-108.34-11.53z"
                              fill="#fe2c55"
                            />
                            <path d="M1373.8 1481.36v-759.1a886.11 886.11 0 0 0 518.58 166.12v-288.9a517.87 517.87 0 0 1-283.12-166.12 517.16 517.16 0 0 1-227.52-339.47h-273V1589a313.46 313.46 0 0 1-567 171.17 313.46 313.46 0 0 1 144.46-590.83 321.35 321.35 0 0 1 92.45 14.45V894.88A684.71 684.71 0 0 0 293.29 2050.5a679.65 679.65 0 0 0 393.64 116.29c378.78 0 686.07-306.65 686.87-685.43z" />
                          </svg>
                        </label>
                        <input
                          type="text"
                          className="w-full bg-custom-gray rounded text-xl border-none focus:ring-0 focus:border-0 focus:outline-none"
                          id="username_tiktok"
                          {...register("username_tiktok")}
                        />
                      </div>
                      <div className="flex items-center col-start-5">
                        <label className="text-xl" htmlFor="username_x">
                          <svg
                            fill="none"
                            height="25"
                            width="25"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0.254 0.25 500 451.95400000000006"
                          >
                            <path
                              d="M394.033.25h76.67L303.202 191.693l197.052 260.511h-154.29L225.118 294.205 86.844 452.204H10.127l179.16-204.77L.254.25H158.46l109.234 144.417zm-26.908 406.063h42.483L135.377 43.73h-45.59z"
                              fill="#000"
                            />
                          </svg>
                        </label>
                        <input
                          type="text"
                          className="w-full bg-custom-gray rounded text-xl border-none focus:ring-0 focus:border-0 focus:outline-none"
                          id="username_x"
                          {...register("username_x")}
                        />
                      </div>
                      <div className="flex items-center col-start-2 col-span-2">
                        <label className="text-xl" htmlFor="username_idn">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 163 163"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="163"
                              height="163"
                              rx="30"
                              fill="#ED2227"
                            />
                            <path
                              d="M37.6288 61.1863L32.4107 58.1645C32.2529 58.0734 32.0738 58.0254 31.8915 58.0254C31.7093 58.0254 31.5302 58.0734 31.3723 58.1645L26.1569 61.1863C26 61.2769 25.8695 61.407 25.7784 61.5636C25.6873 61.7203 25.6388 61.8981 25.6377 62.0793V105.664C25.636 105.846 25.6833 106.026 25.7746 106.184C25.866 106.342 25.998 106.472 26.1569 106.562L31.3775 109.581C31.5347 109.674 31.714 109.724 31.8967 109.724C32.0794 109.724 32.2588 109.674 32.4159 109.581L37.6339 106.559C37.7916 106.468 37.9226 106.338 38.0137 106.18C38.1049 106.022 38.153 105.843 38.1531 105.661V62.0845C38.1524 61.9019 38.1036 61.7227 38.0115 61.565C37.9194 61.4073 37.7874 61.2766 37.6288 61.1863Z"
                              fill="white"
                            />
                            <path
                              d="M136.827 61.1863L131.612 58.1645C131.454 58.0734 131.275 58.0254 131.093 58.0254C130.91 58.0254 130.731 58.0734 130.573 58.1645L125.358 61.1863C125.201 61.2769 125.071 61.407 124.98 61.5636C124.888 61.7203 124.84 61.8981 124.839 62.0793V85.4435L106.882 61.9391L106.519 61.4563C106.435 61.3493 106.33 61.2609 106.21 61.1967L106.026 61.0876H106L100.994 58.1801C100.837 58.0889 100.658 58.041 100.475 58.041C100.293 58.041 100.114 58.0889 99.956 58.1801L94.7406 61.2018C94.5837 61.2925 94.4532 61.4225 94.3621 61.5792C94.271 61.7359 94.2225 61.9137 94.2214 62.0949V105.664C94.2216 105.846 94.2697 106.025 94.3608 106.182C94.4519 106.34 94.5829 106.471 94.7406 106.562L99.956 109.584C100.113 109.677 100.293 109.726 100.475 109.726C100.658 109.726 100.837 109.677 100.994 109.584L106.21 106.562C106.368 106.471 106.499 106.34 106.59 106.182C106.681 106.025 106.729 105.846 106.729 105.664V82.3179L125.143 106.419H125.174C125.234 106.478 125.301 106.528 125.374 106.57L130.589 109.592C130.746 109.685 130.926 109.734 131.108 109.734C131.291 109.734 131.47 109.685 131.627 109.592L136.843 106.57C137 106.479 137.13 106.349 137.221 106.192C137.312 106.036 137.361 105.858 137.362 105.677V62.0845C137.36 61.9008 137.31 61.721 137.216 61.5632C137.122 61.4054 136.988 61.2753 136.827 61.1863Z"
                              fill="white"
                            />
                            <path
                              d="M67.3098 58.0275H50.62C50.4376 58.0278 50.2586 58.0761 50.1008 58.1677L44.8854 61.1894C44.7277 61.2805 44.5967 61.4114 44.5056 61.569C44.4145 61.7267 44.3664 61.9055 44.3662 62.0876V105.664C44.3664 105.846 44.4145 106.025 44.5056 106.183C44.5967 106.341 44.7277 106.472 44.8854 106.563L50.1008 109.584C50.2753 109.688 50.4775 109.735 50.6797 109.719H67.3254C72.805 109.719 78.06 107.542 81.9347 103.667C85.8093 99.7923 87.9864 94.5373 87.9871 89.0577V78.6866C87.9857 73.2065 85.8076 67.9514 81.9319 64.0771C78.0562 60.2029 72.8003 58.0268 67.3202 58.0275H67.3098ZM75.4795 87.5935C75.4788 90.6751 74.2544 93.6302 72.0754 95.8092C69.8964 97.9882 66.9413 99.2126 63.8597 99.2133H56.8505V68.5361H63.8442C66.9264 68.5389 69.8817 69.7645 72.0612 71.944C74.2407 74.1236 75.4664 77.0788 75.4691 80.1611L75.4795 87.5935Z"
                              fill="white"
                            />
                          </svg>
                        </label>
                        <input
                          type="text"
                          className="w-full bg-custom-gray rounded text-xl border-none focus:ring-0 focus:border-0 focus:outline-none"
                          id="username_idn"
                          {...register("username_idn")}
                        />
                      </div>
                      <div className="flex items-center col-start-4 col-span-2">
                        <label className="text-xl" htmlFor="username_sr">
                          <Image
                            className="rounded-lg"
                            src="/SR.png"
                            alt="Instagram"
                            width={25}
                            height={25}
                          />
                        </label>
                        <input
                          type="text"
                          className="w-full bg-custom-gray rounded text-xl border-none focus:ring-0 focus:border-0 focus:outline-none"
                          id="username_sr"
                          {...register("username_sr")}
                        />
                      </div>
                    </div>
                  </TabsContent>
                  <div className="flex absolute bottom-4 items-center justify-between w-full">
                    <TabsList className="bg-custom-gray basis-1/3 flex gap-4 items-center justify-start">
                      <div className="group">
                        <TabsTrigger
                          className="bg-transparent text-lg text-zinc-600 group-hover:text-white duration-300 focus:text-white peer data-[state=active]:text-white"
                          value="identitas"
                        >
                          Identitas
                        </TabsTrigger>
                        <div className="w-0 h-0.5 bg-gradient-to-r from-custom-green to-blue-500 group-hover:w-full peer-focus:w-full duration-500 ease-in-out peer-data-[state=active]:w-full"></div>
                      </div>
                      <div className="group">
                        <TabsTrigger
                          className="bg-transparent text-lg text-zinc-600 group-hover:text-white duration-300 focus:text-white peer data-[state=active]:text-white"
                          value="profil"
                        >
                          Profil
                        </TabsTrigger>
                        <div className="w-0 h-0.5 bg-gradient-to-r from-custom-green to-blue-500 group-hover:w-full peer-focus:w-full duration-500 ease-in-out peer-data-[state=active]:w-full"></div>
                      </div>
                      <div className="group">
                        <TabsTrigger
                          className="bg-transparent text-lg text-zinc-600 group-hover:text-white duration-300 focus:text-white peer data-[state=active]:text-white"
                          value="keanggotaan"
                        >
                          Keanggotaan
                        </TabsTrigger>
                        <div className="w-0 h-0.5 bg-gradient-to-r from-custom-green to-blue-500 group-hover:w-full peer-focus:w-full duration-500 ease-in-out peer-data-[state=active]:w-full"></div>
                      </div>
                    </TabsList>
                    <h1 className="text-2xl basis-1/3 text-center bg-clip-text text-transparent bg-gradient-to-r from-custom-green to-blue-500 font-bold relative after:content-[''] after:h-0.5 after:w-32 after:rounded-full after:bg-gradient-to-r after:from-custom-green after:to-blue-500 after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2">
                      {member.nama}
                    </h1>
                    <div className="flex gap-3 basis-1/3 justify-end">
                      <DrawerClose asChild>
                        <button
                          className="w-32 h-10 flex justify-center items-center border border-zinc-400 text-zinc-400 rounded hover:border-white hover:text-white uppercase font-bold text-lg duration-300"
                          type="button"
                        >
                          Close
                        </button>
                      </DrawerClose>
                      <button
                        className="w-32 h-10 flex justify-center items-center bg-gradient-to-br from-zinc-400 via-white to-zinc-400 rounded text-black uppercase font-bold text-lg hover:shadow-md hover:shadow-white duration-300"
                        type="submit"
                      >
                        {loading ? "Loading..." : "Save"}
                      </button>
                    </div>
                  </div>
                </form>
              </Tabs>
            </DrawerContent>
          </Drawer>

          <div
            className={`fixed z-[99999] top-20 left-1/2 -translate-x-1/2 bg-gradient-to-r from-custom-green to-blue-500 p-0.5 rounded-xl ${
              success ? "top-20 opacity-100" : "top-10 opacity-0"
            } transition-all duration-300`}
          >
            <div className="bg-gradient-to-br from-white via-zinc-200 to-white text-sm py-3 px-6 font-urbanist text-custom-gray rounded-xl flex gap-3 items-center">
              <div className="text-emerald-500 text-xl">
                <IoCheckmarkCircle />
              </div>
              <h1>Perubahan data berhasil disimpan.</h1>
            </div>
          </div>
        </>
      );
    },
  },
  {
    id: "remove",
    cell: ({ row }) => {
      const member = row.original;

      const [loading, setLoading] = useState(false);
      const [error, setError] = useState<string | null>(null);
      const [success, setSuccess] = useState<boolean>(false);

      useEffect(() => {
        if (success) {
          const timeout = setTimeout(() => {
            setSuccess(false);
          }, 1500);

          return () => clearTimeout(timeout);
        }
      }, [success]);

      const handleDelete = async (name: string, description: string) => {
        if (
          window.confirm(
            `Are you sure you want to delete ${name} because ${description}?`
          )
        ) {
          try {
            setLoading(true);
            const response = await fetch(`${GETAPIURL()}/data-member/delete`, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: name.split(" ").join("-"),
                description,
              }),
            });

            if (response.ok) {
              setLoading(false);
              setSuccess(true);
              window.location.reload();
            } else {
              setLoading(false);
              throw new Error("Failed to delete member");
            }
          } catch (error: any) {
            setLoading(false);
            setError(error);
            console.error(error);
          }
        }
      };

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="text-xl text-red-500 cursor-pointer hover:text-red-900 duration-100"
              >
                <span className="sr-only">Open menu</span>
                <IoIosRemoveCircle />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="bg-custom-gray border-zinc-600 font-urbanist"
              align="start"
            >
              <DropdownMenuLabel className="text-zinc-200">
                Tandai dengan
              </DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => handleDelete(member.nama, "graduated")}
                className="text-zinc-200"
              >
                Graduated
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleDelete(member.nama, "resigned")}
                className="text-zinc-200"
              >
                Resigned
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleDelete(member.nama, "laid off")}
                className="text-zinc-200"
              >
                Laid Off
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleDelete(member.nama, "fired")}
                className="text-zinc-200"
              >
                Fired
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div
            className={`fixed top-20 left-1/2 -translate-x-1/2 bg-gradient-to-r from-custom-green to-blue-500 p-0.5 rounded-xl ${
              success ? "top-20 opacity-100" : "top-10 opacity-0"
            } transition-all duration-300`}
          >
            <div className="bg-gradient-to-br from-white via-zinc-200 to-white text-sm py-3 px-6 font-urbanist text-custom-gray rounded-xl flex gap-3 items-center">
              <div className="text-emerald-500 text-xl">
                <IoCheckmarkCircle />
              </div>
              <h1>Data member berhasil dihapus.</h1>
            </div>
          </div>
        </>
      );
    },
  },
];
