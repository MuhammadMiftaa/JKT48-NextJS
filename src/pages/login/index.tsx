import Link from "next/link";
import React from "react";

export default function loginPage() {
  return (
    <div className="mt-20 h-[75vh] flex flex-col w-1/3 mx-auto my-auto justify-center">
      <div className="">
        <h1 className="font-poppins text-3xl py-1 w-fit font-bold bg-clip-text text-transparent bg-gradient-to-r from-custom-green to-blue-600">
          Login
        </h1>
        <p className="font-urbanist text-slate-400 font-light italic text-xs">
          Log in to continue where you left off and stay updated with the
          latest.
        </p>
      </div>
      <form action="" className="flex flex-col mb-10">
        <div className="mt-8">
          <label htmlFor="email" className="font-urbanist text-sm font-light">
            Email
            <input
              type="email"
              className="w-full text-white border-2 border-zinc-900 bg-black rounded-lg p-1 focus:ring-0 focus:outline-none focus:border-zinc-400"
            />
          </label>
          <span className="font-light text-xs italic font-urbanist text-red-600 hidden">
            Oops! We couldn't find an account with that email.
          </span>
        </div>
        <div className="mt-4">
          <label
            htmlFor="password"
            className="font-urbanist text-sm font-light"
          >
            Password
            <input
              type="password"
              className="w-full text-white border-2 border-zinc-900 bg-black rounded-lg p-1 focus:ring-0 focus:outline-none focus:border-zinc-400"
            />
          </label>
          <span className="font-light text-xs italic font-urbanist text-red-600 hidden">
            Hmm, that password doesn't seem right. Give it another try.
          </span>
        </div>
        <div className="flex gap-3 flex-col mt-10">
          <Link
            href={"/register"}
            className="bg-gradient-to-r from-custom-green to-blue-600 rounded p-0.5"
          >
            <h1 className="bg-black rounded p-2 m-0 w-full text-center font-urbanist text-xs">
              Don't have an account yet?
            </h1>
          </Link>
          <button className="w-full text-sm bg-gradient-to-r from-custom-green to-blue-600 text-black font-poppins font-bold rounded p-2 focus:ring-2 focus:ring-custom-green focus:outline-none uppercase">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
