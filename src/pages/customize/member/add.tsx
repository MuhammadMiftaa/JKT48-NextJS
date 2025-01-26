import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import MemberInput from "@/components/fragments/InputGroup/MemberInput";
import { GETAPIURL } from "@/helper/getEnv";
import { MemberSchemaZod, MemberTypeZod } from "./zodSchema";

function AddMember() {
  const form = useForm<MemberTypeZod>({
    resolver: zodResolver(MemberSchemaZod),
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [kabesha, setKabesha] = useState<string | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [noCollege, setNoCollege] = useState(false);

  const nameRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      setLoading(true);
      const response = await fetch(`${GETAPIURL()}/data-member/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("An error occurred while adding a member");
      }
      setLoading(false);
      setPhoto(null);
      form.reset();
      nameRef.current?.focus();
    } catch (error: any) {
      setError(error);
      setLoading(false);
      console.error(error);
    }
  });

  return (
    <div className="pt-20 pb-10 px-10 w-full flex flex-col items-center">
      <h1 className="text-4xl text-center font-poppins italic text-transparent bg-clip-text bg-gradient-to-r from-custom-green to-white">
        Add Member
      </h1>
      <div className="flex flex-row items-center justify-center mr-8">
        <div className="h-0.5 w-32 bg-gradient-to-r from-custom-green to-white mr-3 mt-1"></div>
        <div className="h-0.5 w-8 bg-white mt-1"></div>
      </div>
      <form className="mt-10 max-w-7xl flex flex-col gap-4" onSubmit={onSubmit}>
        {Object.keys(MemberSchemaZod.shape).map((key, index) => (
          <div key={key}>
            <MemberInput
              label={key}
              form={form}
              kabesha={kabesha}
              setKabesha={setKabesha}
              photo={photo}
              setPhoto={setPhoto}
              noCollege={noCollege}
              setNoCollege={setNoCollege}
              nameRef={nameRef}
            />
            {form.formState.errors[key as keyof MemberTypeZod] && (
              <span className="font-light text-sm italic font-urbanist text-white">
                {form.formState.errors[key as keyof MemberTypeZod]?.message}
              </span>
            )}
            {(index + 5) % 5 === 0 && (
              <div className="flex flex-row items-center mt-6 mb-3">
                <div className="h-0.5 w-8 mr-2 rounded-xl bg-zinc-700"></div>
                <div className="h-0.5 w-4 mr-2 rounded-xl bg-zinc-700"></div>
                <div className="h-0.5 w-full rounded-xl bg-zinc-700"></div>
              </div>
            )}
          </div>
        ))}
        <button
          className="text-black bg-gradient-to-br from-white hover:from-white focus:from-white via-neutral-300 hover:via-white focus:via-white to-pink-100 hover:to-white focus:to-white -skew-x-12 rounded-xl font-urbanist font-semibold text-2xl p-3 duration-300 shadow-md "
          type="submit"
        >
          {loading ? "Loading..." : "Add Member"}
        </button>
      </form>
    </div>
  );
}

export default AddMember;
