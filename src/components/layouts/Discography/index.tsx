import {
  MusicNoteIcon,
  PuzzleIcon,
  StarIcon,
  ArrowUpIcon,
} from "@heroicons/react/outline/index.js";

export default function Diskografi() {
  return (
    <div className="py-24 px-32">
      <div className="flex gap-4">
        <div className="flex flex-col basis-1/2">
          <h1 className="mb-3 font-bold text-custom-green">Discography</h1>
          <h2 className="font-bold text-3xl mb-2">
            Welcome to the JKT48 Discography
          </h2>
          <h3 className="text-zinc-400 mb-5">
            Discover the complete collection of setlists and songs performed by
            the members of JKT48.
          </h3>
          <button className="py-1 px-4 rounded-full bg-custom-green text-black w-fit font-bold">
            See all
          </button>
        </div>
        <div className="flex flex-col gap-2 basis-1/2">
          <div className="flex flex-col items-left py-12 px-12 bg-zinc-900 h-64 relative hover:bg-custom-green hover:text-black group">
            <MusicNoteIcon className="h-12 w-12" />
            <h1 className="mt-3 mb-2 text-2xl font-bold">Ongoing Setlist</h1>
            <h2 className="text-sm font-light w-3/4 text-zinc-500 group-hover:text-black">
              Discover the magic of JKT48's ongoing performances. Here’s a look
              at the setlists currently captivating audiences
            </h2>
            <div className="p-1.5 bg-zinc-800 rounded-full absolute bottom-9 right-11 group-hover:bg-white hover:cursor-pointer">
              <ArrowUpIcon className="h-6 w-6 rotate-45" />
            </div>
          </div>
          <div className="flex flex-col items-left py-12 px-12 bg-zinc-900 h-64 relative hover:bg-custom-green hover:text-black group">
            <PuzzleIcon className="h-12 w-12" />
            <h1 className="mt-3 mb-2 text-2xl font-bold">Popular Songs</h1>
            <h2 className="text-sm font-light w-3/4 text-zinc-500 group-hover:text-black">
              Stay updated with the hottest tracks from JKT48 that are trending
              right now
            </h2>
            <div className="p-1.5 bg-zinc-800 rounded-full absolute bottom-9 right-11 group-hover:bg-white hover:cursor-pointer">
              <ArrowUpIcon className="h-6 w-6 rotate-45" />
            </div>
          </div>
          <div className="flex flex-col items-left py-12 px-12 bg-zinc-900 h-64 relative hover:bg-custom-green hover:text-black group">
            <StarIcon className="h-12 w-12" />
            <h1 className="mt-3 mb-2 text-2xl font-bold">Single Original</h1>
            <h2 className="text-sm font-light w-3/4 text-zinc-500 group-hover:text-black">
              Explore the unique sound and creative vision of JKT48 through our
              original singles
            </h2>
            <div className="p-1.5 bg-zinc-800 rounded-full absolute bottom-9 right-11 group-hover:bg-white hover:cursor-pointer">
              <ArrowUpIcon className="h-6 w-6 rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
