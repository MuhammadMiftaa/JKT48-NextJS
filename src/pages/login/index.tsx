import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Loading from "@/components/elements/Loading";

export default function loginPage() {
  const loginFormSchema = z.object({
    email: z.string(),
    password: z.string(),
  });

  type LoginFormSchema = z.infer<typeof loginFormSchema>;

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState("");

  const { push, query } = useRouter();

  const callbackUrl: any = query.callbackUrl || "/";

  const onSubmit = form.handleSubmit(async (values) => {
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl,
      });

      if (res?.error) {
        setIsError("Email or password is incorrect");
        setLoading(false);
      } else {
        push(callbackUrl);
        setLoading(false);
      }
    } catch (error: any) {
      setIsError("Email or password is incorrect");
      setLoading(false);
    }
  });

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
      <form action="" onSubmit={onSubmit} className="flex flex-col mb-10">
        <div className="mt-8">
          <label htmlFor="email" className="font-urbanist text-sm font-light">
            Email
            <input
              type="email"
              className="w-full text-white border-2 border-zinc-900 bg-black rounded-lg p-1 focus:ring-0 focus:outline-none focus:border-zinc-400"
              {...form.register("email")}
            />
          </label>
          {form.formState.errors.email && (
            <span className="font-light text-md italic font-urbanist text-red-600">
              {form.formState.errors.email.message}
            </span>
          )}
        </div>
        <div className="mt-4">
          <label
            htmlFor="password"
            className="font-urbanist text-sm font-light"
          >
            Password
            <input
              type="password"
              className="w-full text-xl font-poppins text-white border-2 border-zinc-900 bg-black rounded-lg p-1 focus:ring-0 focus:outline-none focus:border-zinc-400"
              {...form.register("password")}
            />
          </label>
          {form.formState.errors.password && (
            <span className="font-light capitalize text-xs font-poppins text-red-600">
              {form.formState.errors.password.message}
            </span>
          )}
          {isError && (
            <p className="font-poppins font-light text-sm text-red-600 text-center mt-4 -mb-4">
              {isError}
            </p>
          )}
        </div>
        <div className="flex gap-3 flex-col mt-10 items-center">
          {loading ? (
            <Loading />
          ) : (
            <>
              <button
                type="submit"
                className="w-full text-sm bg-gradient-to-r from-custom-green to-blue-600 text-black font-poppins font-bold rounded p-2 focus:ring-2 focus:ring-custom-green focus:outline-none uppercase"
              >
                Login
              </button>
              <Link
                href={"/register"}
                className="bg-gradient-to-r w-full from-custom-green to-blue-600 rounded p-0.5"
              >
                <h1 className="bg-black rounded p-2 m-0 w-full text-center font-urbanist text-xs">
                  Don't have an account yet?
                </h1>
              </Link>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
