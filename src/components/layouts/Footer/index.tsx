import {
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
  FaMapPin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div
      className="bg-custom-green mt-10 pt-24 pb-4 px-8"
      style={{ borderRadius: "4rem 4rem 0 0" }}
    >
      <div className="flex gap-3" style={{ marginBottom: "-7rem" }}>
        <div
          className="w-full flex py-2 justify-center border border-2 border-zinc-700 p-1 hover:bg-black hover:cursor-pointer group z-30"
          style={{ borderRadius: "0 20px 20px 20px" }}
        >
          <FaInstagram className="group-hover:text-custom-green h-7 w-7 text-black" />
        </div>
        <div
          className="w-full flex py-2 justify-center border border-2 border-zinc-700 p-1 hover:bg-black hover:cursor-pointer group z-30"
          style={{ borderRadius: "0 20px 20px 20px" }}
        >
          <FaTiktok className="group-hover:text-custom-green h-7 w-7 text-black" />
        </div>
        <div
          className="w-full flex py-2 justify-center border border-2 border-zinc-700 p-1 hover:bg-black hover:cursor-pointer group z-30"
          style={{ borderRadius: "20px 0 20px 20px" }}
        >
          <FaTwitter className="group-hover:text-custom-green h-7 w-7 text-black" />
        </div>
        <div
          className="w-full flex py-2 justify-center border border-2 border-zinc-700 p-1 hover:bg-black hover:cursor-pointer group z-30"
          style={{ borderRadius: "20px 0 20px 20px" }}
        >
          <FaYoutube className="group-hover:text-custom-green h-7 w-7 text-black" />
        </div>
      </div>
      <h1
        className="font-bold text-black text-center"
        style={{ fontSize: "20rem", marginBottom: "-6.5rem" }}
      >
        JKT48
      </h1>
      <h2 className="text-black text-center font-bold">
        Number 1 of Indonesian Idol Group
      </h2>
      <div className="border-t-2 border-zinc-800 w-full h-10 py-3 mt-12 flex ">
        <div className="flex justify-between w-full">
          <h1 className="text-zinc-800 font-bold w-fit"> Jakarta, Indonesia</h1>
          <h2 className="text-zinc-800 font-bold w-fit">
            Copyright © June 2024 | Muhammad Miftakul Salam
          </h2>
        </div>
      </div>
    </div>
  );
}
