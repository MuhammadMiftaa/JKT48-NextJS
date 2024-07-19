import {
  MusicNoteIcon,
  PuzzleIcon,
  StarIcon,
  ArrowUpIcon,
} from "@heroicons/react/outline/index.js";
import Link from "next/link";

export default function Diskografi() {
  return (
    <div className="py-24 px-32">
      <div className="flex gap-10 flex-col md:flex-row md:gap-4">
        <div className="flex flex-col basis-1/2">
          <h1 className="mb-3 font-bold text-custom-green font-poppins text-sm md:text-base">
            Discography
          </h1>
          <h2 className="font-semibold text-2xl md:text-3xl mb-2 font-montserrat">
            Welcome to the JKT48{" "}
            <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-custom-green to-blue-600">
              Discography
            </span>
          </h2>
          <h3 className="text-zinc-400 mb-2 font-urbanist text-sm md:text-base">
            Discover the complete collection of setlists and songs performed by
            the members of JKT48.
          </h3>
          <Link
            href={"/"}
            className="border font-urbanist w-fit border-slate-400 py-1 px-3 rounded-lg text-zinc-200 italic hover:cursor-pointer shadow-sm shadow-slate-400 active:shadow-none active:translate-x-0.5 active:translate-y-0.5"
          >
            Explore our music{" "}
          </Link>
        </div>
        <div className="flex flex-col gap-2 basis-1/2">
          <div
            className="flex flex-col items-left py-12 px-12 bg-zinc-900 h-64 relative hover:bg-custom-green hover:text-black group"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <MusicNoteIcon className="h-12 w-12" />
            <h1 className="mt-3 mb-2 text-2xl font-bold font-poppins">
              Ongoing Setlist
            </h1>
            <h2 className="text-sm font-light w-3/4 text-zinc-600 group-hover:text-black font-poppins">
              Discover the magic of JKT48's ongoing performances. Here’s a look
              at the setlists currently captivating audiences
            </h2>
            <Link
              href={"/discography/setlist"}
              className="p-1.5 bg-zinc-800 rounded-full absolute bottom-9 right-11 group-hover:bg-white hover:cursor-pointer"
            >
              <ArrowUpIcon className="h-6 w-6 rotate-45" />
            </Link>
          </div>
          <div
            className="flex flex-col items-left py-12 px-12 bg-zinc-900 h-64 relative hover:bg-custom-green hover:text-black group"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <PuzzleIcon className="h-12 w-12" />
            <h1 className="mt-3 mb-2 text-2xl font-bold font-poppins">
              Popular Songs
            </h1>
            <h2 className="text-sm font-light w-3/4 text-zinc-600 group-hover:text-black font-poppins">
              Stay updated with the hottest tracks from JKT48 that are trending
              right now
            </h2>
            <Link
              href={"/songs"}
              className="p-1.5 bg-zinc-800 rounded-full absolute bottom-9 right-11 group-hover:bg-white hover:cursor-pointer"
            >
              <ArrowUpIcon className="h-6 w-6 rotate-45" />
            </Link>
          </div>
          <div
            className="flex flex-col items-left py-12 px-12 bg-zinc-900 h-64 relative hover:bg-custom-green hover:text-black group"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <StarIcon className="h-12 w-12" />
            <h1 className="mt-3 mb-2 text-2xl font-bold font-poppins">
              Single Original
            </h1>
            <h2 className="text-sm font-light w-3/4 text-zinc-600 group-hover:text-black font-poppins">
              Explore the unique sound and creative vision of JKT48 through our
              original singles
            </h2>
            <Link
              href={"/discography/single-original"}
              className="p-1.5 bg-zinc-800 rounded-full absolute bottom-9 right-11 group-hover:bg-white hover:cursor-pointer"
            >
              <ArrowUpIcon className="h-6 w-6 rotate-45" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
