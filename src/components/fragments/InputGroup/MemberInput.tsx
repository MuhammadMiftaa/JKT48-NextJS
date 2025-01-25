import { generatePlaceholder } from "@/helper/function";
import Image from "next/image";
import { IoIosAt } from "react-icons/io";

export default function MemberInput(props: {
  label: string;
  form: any;
  kabesha: string | null;
  setKabesha: Function;
  photo: string | null;
  setPhoto: Function;
  noCollege: boolean;
  setNoCollege: Function;
  nameRef: any;
}) {
  // const { onChange, ...rest } = props.form.register(props.label, {
  //   valueAsNumber: props.label === "generasi" || props.label === "umur",
  // });

  const {
    onChange,
    ref: registerRef,
    ...rest
  } = props.form.register(props.label, {
    valueAsNumber: props.label === "generasi" || props.label === "umur",
  });

  const inputRef = (inputElement: HTMLInputElement) => {
    if (props.label === "nama" && props.nameRef) {
      props.nameRef.current = inputElement;
    }
    if (registerRef) {
      registerRef(inputElement);
    }
  };

  if (props.label === "member_regular")
    return <MemberRegular form={props.form} />;
  else
    return (
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-start">
            <label
              className="text-2xl font-poppins italic tracking-[0.2em] capitalize text-nowrap"
              htmlFor={props.label}
            >
              {props.label.split("_").join(" ")}
            </label>
            <div className="flex flex-row items-center w-full">
              <div className="h-[0.1rem] w-2 bg-custom-green mr-1"></div>
              <div className="h-[0.1rem] w-[50%] bg-gradient-to-r from-custom-green to-white"></div>
            </div>
          </div>
          <div className="relative w-full">
            <input
              className={`bg-transparent text-white placeholder-zinc-700 rounded-lg focus:ring-0 focus:border-white p-2.5 -skew-x-12 text-2xl font-poppins w-full peer ${
                props.label.includes("username") && "pl-12"
              } ————— ${
                props.noCollege &&
                (props.label === "universitas" || props.label === "jurusan") &&
                "cursor-not-allowed"
              }`}
              disabled={
                props.noCollege &&
                (props.label === "universitas" || props.label === "jurusan")
              }
              type={
                props.label === "generasi" || props.label === "umur"
                  ? "number"
                  : "text"
              }
              placeholder={
                props.noCollege &&
                (props.label === "universitas" || props.label === "jurusan")
                  ? "—"
                  : generatePlaceholder(props.label)
              }
              value={
                props.noCollege &&
                (props.label === "universitas" || props.label === "jurusan")
                  ? ""
                  : undefined
              }
              onChange={(e) => {
                if (
                  props.label === "kabesha" &&
                  (e.target.value.includes("https://pbs.twimg.com") ||
                    e.target.value.includes("https://jkt48.com") ||
                    e.target.value.includes("https://res.cloudinary.com") ||
                    e.target.value === "")
                ) {
                  props.setKabesha(e.target.value);
                }

                if (
                  props.label === "foto" &&
                  (e.target.value.includes("https://pbs.twimg.com") ||
                    e.target.value.includes("https://jkt48.com") ||
                    e.target.value.includes("https://res.cloudinary.com") ||
                    e.target.value === "")
                ) {
                  props.setPhoto(e.target.value);
                }

                onChange(e);
              }}
              ref={inputRef}
              {...rest}
              // {...register(props.label, {
              //   valueAsNumber:
              //     props.label === "generasi" || props.label === "umur",
              // })}
            />

            {props.label.includes("username") && (
              <div className="absolute left-3 text-3xl top-1/2 -translate-y-1/2 text-white opacity-30">
                <IoIosAt />
              </div>
            )}

            <div className="w-3 peer-focus:w-0 duration-500 ease-in-out h-1 absolute bg-custom-black right-4 -bottom-0.5"></div>
            <div className="w-3 peer-focus:w-0 duration-500 ease-in-out h-1 absolute bg-custom-black right-12 -bottom-0.5"></div>
            <div className="w-7 peer-focus:w-0 duration-500 ease-in-out h-1 absolute bg-custom-black left-4 -top-0.5"></div>
          </div>
        </div>
        {props.label === "foto" && (
          <div className={`mt-6 mx-auto`}>
            <div className="flex gap-5 items-center">
              {props.photo && (
                <div
                  className={`p-2 border border-zinc-600 relative after:absolute after:content-["Photo"] after:text-white after:border after:border-zinc-600 after:-skew-x-12 after:font-poppins after:mx-auto after:my-auto after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:fit after:py-0.5 after:text-xs after:px-3 after:h-fit after:bg-custom-black`}
                >
                  <Image
                    src={props.photo || "/assets/placeholder.png"}
                    width={200}
                    height={200}
                    alt="member"
                    className=""
                  />
                </div>
              )}
              {props.kabesha && (
                <div
                  className={`p-2 border border-zinc-600 relative after:absolute after:content-["Kabesha"] after:text-white after:border after:border-zinc-600 after:-skew-x-12 after:font-poppins after:mx-auto after:my-auto after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:fit after:py-0.5 after:text-xs after:px-3 after:h-fit after:bg-custom-black`}
                >
                  <Image
                    src={props.kabesha || "/assets/placeholder.png"}
                    width={200}
                    height={200}
                    alt="member"
                    className=""
                  />
                </div>
              )}
            </div>
            {!(props.photo || props.kabesha) && (
              <p className="font-poppins italic -mt-4 text-xs font-light text-zinc-500">
                Image preview is not available.
              </p>
            )}
          </div>
        )}
        {props.label === "jurusan" && (
          <div className="flex flex-row relative items-center mt-6">
            <div className="absolute left-1/2 -translate-x-1/2 px-2 bg-custom-black flex flex-row items-center gap-2 font-montserrat font-light text-zinc-500">
              <input
                onChange={() => props.setNoCollege(!props.noCollege)}
                className="bg-transparent rounded-full checked:bg-black focus:ring-custom-black focus:ring-0 focus:outline-none focus:border-none"
                type="checkbox"
                name="belum_kuliah"
                id="belum_kuliah"
              />
              <label htmlFor="belum_kuliah">Belum Kuliah</label>
            </div>
            <div className="h-0.5 w-full rounded-xl bg-zinc-700"></div>
          </div>
        )}
      </div>
    );
}

export function MemberRegular(props: { form: any }) {
  const { register } = props.form;
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-start">
        <label
          className="text-2xl font-poppins italic tracking-[0.2em] capitalize text-nowrap"
          htmlFor={"member_regular"}
        >
          member
        </label>
        <div className="flex flex-row items-center w-full">
          <div className="h-[0.1rem] w-2 bg-custom-green mr-1"></div>
          <div className="h-[0.1rem] w-[50%] bg-gradient-to-r from-custom-green to-white"></div>
        </div>
      </div>
      <div className="relative w-full">
        <div className="flex items-center gap-4">
          <label className="cursor-pointer w-full" htmlFor="regular">
            <input
              className="hidden peer"
              type="radio"
              id="regular"
              value={"true"}
              {...register("member_regular", { valueAsBoolean: true })}
            />
            <span className="block font-poppins text-center uppercase border border-white text-white py-1 w-full text-xl rounded -skew-x-12 shadow-sm shadow-white peer-checked:shadow-none peer-checked:translate-x-0.5 peer-checked:translate-y-1">
              regular
            </span>
          </label>
          <label className="cursor-pointer w-full" htmlFor="trainee">
            <input
              className="hidden peer"
              type="radio"
              id="trainee"
              value={"false"}
              checked
              {...register("member_regular", { valueAsBoolean: true })}
            />
            <span className="block font-poppins text-center uppercase border border-white text-white py-1 w-full text-xl rounded -skew-x-12 shadow-sm shadow-white peer-checked:shadow-none peer-checked:translate-x-0.5 peer-checked:translate-y-0.translate-x-0.5">
              trainee
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
