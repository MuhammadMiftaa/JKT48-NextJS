"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineExitToApp } from "react-icons/md";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import { HiChevronUpDown } from "react-icons/hi2";
import useSWR from "swr";
import { memberType } from "@/components/types/memberType";
import Loading from "@/components/elements/Loading";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";

export default function registerPage() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/api/data-member", fetcher);
  const member: memberType[] = isLoading ? [] : data.data;

  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<memberType | null>(null);
  const { control, handleSubmit } = useForm();

  useEffect(() => {
    if (member.length > 0) {
      setSelected(member[0]);
    }
  }, [member]);

  const nextPage = () => {
    setPage(page + 1);
  };
  const prevPage = () => {
    setPage(page - 1);
  };

  const registerFormSchema = z.object({
    email: z.string(),
    number: z.string(),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
    fullname: z.string(),
    nickname: z.string(),
    oshimen: z.object({
      id: z.string(),
      nama: z.string(),
      generasi: z.number(),
      asal: z.string(),
      nama_panggilan: z.string(),
      umur: z.number(),
      salam_perkenalan: z.string(),
      tanggal_bergabung: z.string(),
      fanbase: z.string(),
      kota_lahir: z.string(),
      tanggal_lahir: z.string(),
      nama_lengkap: z.string(),
      universitas: z.string(),
      jurusan: z.string(),
      foto: z.string(),
      member_regular: z.boolean(),
      username_idn: z.string(),
      username_ig: z.string(),
      username_sr: z.string(),
      username_tiktok: z.string(),
      username_x: z.string(),
    }),
    birthday: z.string(),
    gender: z.enum(["man", "woman"]),
    ID: z.string(),
    address: z.string(),
    postal: z.string(),
    city: z.string(),
    nonjabodetabek: z.boolean(),
  });

  type RegisterFormSchema = z.infer<typeof registerFormSchema>;

  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState("");

  const { push } = useRouter();

  const onSubmit = form.handleSubmit(async (values) => {
    setLoading(true);
    const result = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (result.status === 200) {
      setLoading(false);
      push("/login");
    } else {
      setIsError(
        result.status === 400
          ? "Email already registered"
          : "Something went wrong"
      );
      setLoading(false);
    }
  });

  return (
    <>
      {!isLoading ? (
        <div className="mt-20 flex h-[75vh] w-5/6 md:w-2/5 mx-auto my-auto justify-center">
          <div className="my-auto mx-auto flex flex-col justify-between">
            <div className="">
              <h1 className="font-poppins text-3xl py-1 w-fit font-bold bg-clip-text text-transparent bg-gradient-to-r from-custom-green to-blue-600">
                Register
              </h1>
              <p className="font-urbanist text-slate-400 font-light italic text-xs">
                Join our community to stay updated with the latest news,
                exclusive content, and special events.{" "}
              </p>
            </div>
            <form action="" onSubmit={onSubmit}>
              {page === 1 && (
                <div className="flex flex-col mb-10">
                  <div className="mt-8">
                    <label
                      htmlFor="email"
                      className="font-urbanist text-sm font-light"
                    >
                      Email
                      <input
                        required
                        type="email"
                        className="w-full text-white border-2 border-zinc-900 bg-black rounded-lg p-1 focus:ring-0 focus:outline-none focus:border-zinc-400"
                        {...form.register("email")}
                      />
                    </label>
                    <span className="font-light text-xs italic font-urbanist text-red-600 hidden">
                      Looks like there's a typo in your email. Make sure it's in
                      the correct format.
                    </span>
                  </div>
                  <div className="mt-2">
                    <label
                      htmlFor="number"
                      className="font-urbanist text-sm font-light"
                    >
                      Phone Number
                      <input
                        required
                        type="text"
                        className="w-full text-white border-2 border-zinc-900 bg-black rounded-lg p-1 focus:ring-0 focus:outline-none focus:border-zinc-400"
                        {...form.register("number")}
                      />
                    </label>
                  </div>
                  <div className="mt-2">
                    <label
                      htmlFor="password"
                      className="font-poppins text-sm font-light"
                    >
                      Password
                      <input
                        required
                        type="password"
                        className="w-full text-white border-2 border-zinc-900 bg-black rounded-lg p-1 focus:ring-0 focus:outline-none focus:border-zinc-400"
                        {...form.register("password")}
                      />
                    </label>
                    {form.formState.errors.password && (
                      <span className="font-light text-xs italic font-urbanist text-red-600 hidden">
                        {form.formState.errors.password.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-2">
                    <label
                      htmlFor="confirmPassword"
                      className="font-poppins text-sm font-light"
                    >
                      Confirm Password
                      <input
                        required
                        type="password"
                        className="w-full  text-white border-2 border-zinc-900 bg-black rounded-lg p-1 focus:ring-0 focus:outline-none focus:border-zinc-400"
                        {...form.register("confirmPassword")}
                      />
                    </label>
                    <span className="font-light text-xs italic font-urbanist text-red-600 hidden">
                      The passwords don't match. Please try typing them again.
                    </span>
                  </div>
                </div>
              )}
              {page === 2 && (
                <div className="flex flex-col mb-10">
                  <div className="mt-8 mb-4 flex gap-2">
                    <div>
                      <label
                        htmlFor="fullname"
                        className="font-urbanist text-sm font-light"
                      >
                        Full Name
                        <input
                          required
                          type="text"
                          className="w-full text-white border-2 border-zinc-900 bg-black rounded-lg p-1 focus:ring-0 focus:outline-none focus:border-zinc-400"
                          {...form.register("fullname")}
                        />
                      </label>
                    </div>
                    <div>
                      <label
                        htmlFor="nickname"
                        className="font-urbanist text-sm font-light"
                      >
                        Nickname
                        <input
                          required
                          type="text"
                          className="w-full text-white border-2 border-zinc-900 bg-black rounded-lg p-1 focus:ring-0 focus:outline-none focus:border-zinc-400"
                          {...form.register("nickname")}
                        />
                      </label>
                    </div>
                  </div>
                  <Controller
                    name="oshimen"
                    control={form.control}
                    render={({ field }) => (
                      <Listbox
                        value={field.value}
                        onChange={(value) => {
                          field.onChange(value);
                          setSelected(value);
                        }}
                      >
                        <Label className="block text-sm leading-6 text-white font-urbanist font-light">
                          Oshimen
                        </Label>
                        <div className="relative">
                          <ListboxButton className="relative w-full cursor-default rounded-md bg-black py-1.5 pl-3 pr-10 text-left text-white border-2 border-zinc-900 focus:outline-none sm:text-sm sm:leading-6">
                            {selected && selected.nama && (
                              <span className="flex items-center">
                                <img
                                  alt={selected.nama}
                                  src={`/member/webp/${selected.nama
                                    .toLowerCase()
                                    .replace(/ /g, "_")}.webp`}
                                  className="h-5 w-5 flex-shrink-0 rounded-full object-cover object-center"
                                />
                                <span className="ml-3 block truncate font-urbanist">
                                  {selected.nama}
                                </span>
                              </span>
                            )}
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                              <HiChevronUpDown
                                aria-hidden="true"
                                className="h-5 w-5 text-gray-400"
                              />
                            </span>
                          </ListboxButton>

                          <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-zinc-950 text-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {member.map((m) => (
                              <ListboxOption
                                key={m.id}
                                value={m}
                                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-pink-600 data-[focus]:text-white"
                              >
                                <div className="flex items-center">
                                  <img
                                    alt=""
                                    src={`/member/webp/${m.nama
                                      .toLowerCase()
                                      .replace(/ /g, "_")}.webp`}
                                    className="h-5 w-5 flex-shrink-0 rounded-full object-cover object-center"
                                  />
                                  <span className="ml-3 block truncate font-normal group-data-[selected]:font-bold font-urbanist text-white">
                                    {m.nama}
                                  </span>
                                </div>
                                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-pink-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                                  <CheckIcon
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                  />
                                </span>
                              </ListboxOption>
                            ))}
                          </ListboxOptions>
                        </div>
                      </Listbox>
                    )}
                  />

                  <div className="mt-4">
                    <label
                      htmlFor="birthday"
                      className="font-urbanist text-sm font-light"
                    >
                      Birthday
                    </label>
                    <input
                      required
                      type="date"
                      className="w-full font-urbanist font-light text-white border-2 border-zinc-900 bg-black rounded-lg p-1 focus:ring-0 focus:outline-none focus:border-zinc-400"
                      {...form.register("birthday")}
                    />
                  </div>
                  <div className="mt-4 font-urbanist text-sm h-10 font-light">
                    <h1 className="">Gender</h1>
                    <div className="flex justify-start items-center mt-2">
                      <label
                        className="custom-radio w-1/6 cursor-pointer relative"
                        htmlFor="man"
                      >
                        <input
                          required
                          type="radio"
                          className="absolute peer scale-0"
                          value="man"
                          id="man"
                          {...form.register("gender")}
                        />
                        <span className="radio-mark shadow-sm border border-blue-600 shadow-blue-600 py-1 px-2 rounded absolute peer-checked:translate-x-0.5 peer-checked:translate-y-0.5 peer-checked:shadow-none">
                          Man
                        </span>
                      </label>
                      <label
                        className="custom-radio w-1/6 cursor-pointer relative"
                        htmlFor="woman"
                      >
                        <input
                          required
                          type="radio"
                          className="absolute peer scale-0"
                          value="woman"
                          id="woman"
                          {...form.register("gender")}
                        />
                        <span className="radio-mark shadow-sm border border-pink-600 shadow-pink-600 py-1 px-2 rounded absolute peer-checked:translate-x-0.5 peer-checked:translate-y-0.5 peer-checked:shadow-none">
                          Woman
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              )}
              {page === 3 && (
                <div className="flex flex-col">
                  <div className="mt-8">
                    <label
                      htmlFor="id"
                      className="font-urbanist text-sm font-light"
                    >
                      ID
                      <input
                        required
                        type="text"
                        className="w-full text-white border-2 border-zinc-900 bg-black rounded-lg p-1 focus:ring-0 focus:outline-none focus:border-zinc-400"
                        {...form.register("ID")}
                      />
                    </label>
                  </div>
                  <div className="mt-2">
                    <label
                      htmlFor="address"
                      className="font-urbanist text-sm font-light"
                    >
                      Address
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full text-white border-2 border-zinc-900 bg-black rounded-lg p-1 focus:ring-0 focus:outline-none focus:border-zinc-400"
                      {...form.register("address")}
                    />
                  </div>
                  <div className="mt-2 flex gap-3">
                    <div className="basis-1/4">
                      <label
                        htmlFor="postal"
                        className="font-urbanist text-sm font-light"
                      >
                        Postal Code
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full  text-white border-2 border-zinc-900 bg-black rounded-lg p-1 focus:ring-0 focus:outline-none focus:border-zinc-400"
                        {...form.register("postal")}
                      />
                    </div>
                    <div className="basis-3/4">
                      <label
                        htmlFor="city"
                        className="font-urbanist text-sm font-light"
                      >
                        City
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full  text-white border-2 border-zinc-900 bg-black rounded-lg p-1 focus:ring-0 focus:outline-none focus:border-zinc-400"
                        {...form.register("city")}
                      />
                    </div>
                  </div>
                  <div className="mt-2 mb-8 flex relative">
                    <label htmlFor="nonjabodetabek" className="">
                      <input
                        className="absolute scale-0 peer"
                        type="checkbox"
                        id="nonjabodetabek"
                        {...form.register("nonjabodetabek")}
                      />
                      <span className="py-1 w-full text-center cursor-pointer rounded capitalize font-urbanist text-sm font-light shadow-sm border border-slate-600 shadow-slate-600 absolute peer-checked:translate-x-0.5 peer-checked:translate-y-0.5 peer-checked:shadow-none">
                        {" "}
                        tinggal di luar Jabodetabek (termasuk luar negeri)
                      </span>
                    </label>
                  </div>
                  {isError && (
                    <h1 className="mt-3 -mb-5 font-urbanist font-light text-sm text-red-600 text-center">
                      {isError}
                    </h1>
                  )}
                </div>
              )}
              <div className="mt-10">
                {page === 3 ? (
                  <div className="flex gap-2 justify-center">
                    {loading ? (
                      <Loading />
                    ) : (
                      <>
                        <div
                          onClick={prevPage}
                          className="cursor-pointer flex font-poppins text-lg uppercase w-12 bg-gradient-to-r from-custom-green to-blue-600 rounded py-1"
                        >
                          <MdOutlineExitToApp className="text-black text-xl mx-auto my-auto rotate-180" />
                        </div>
                        <button
                          type="submit"
                          className=" w-full bg-gradient-to-r from-custom-green to-blue-600 text-black font-poppins font-bold rounded p-2 focus:ring-2 focus:ring-custom-green focus:outline-none uppercase"
                        >
                          Create Account
                        </button>
                      </>
                    )}
                  </div>
                ) : (
                  <div
                    className={
                      "flex gap-2" + " " + (page === 1 && "flex-col-reverse")
                    }
                  >
                    {page !== 1 ? (
                      <div
                        onClick={prevPage}
                        className="cursor-pointer flex font-poppins text-lg uppercase w-12 bg-gradient-to-r from-custom-green to-blue-600 rounded py-1"
                      >
                        <MdOutlineExitToApp className="text-black text-xl mx-auto my-auto rotate-180" />
                      </div>
                    ) : (
                      <Link
                        href={"/login"}
                        className="bg-gradient-to-r from-custom-green to-blue-600 rounded p-0.5"
                      >
                        <h1 className="bg-black rounded p-2 m-0 w-full text-center font-urbanist text-sm">
                          Already have an account?
                        </h1>
                      </Link>
                    )}
                    <div
                      onClick={nextPage}
                      className="text-center cursor-pointer font-bold  text-black font-urbanist text-lg uppercase w-full bg-gradient-to-r from-custom-green to-blue-600 rounded py-1"
                    >
                      Next
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
