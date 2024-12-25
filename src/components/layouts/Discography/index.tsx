import DiscographyNavLink from "@/components/fragments/DiscographyNavLink";
import DiscographySidebar from "@/components/fragments/DiscographySideBar";
import {
  MusicNoteIcon,
  PuzzleIcon,
  StarIcon,
  ArrowUpIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

export default function Diskografi() {
  const data = [
    {
      title: "Ongoing Setlist",
      description:
        "Discover the magic of JKT48's ongoing performances. Here’s a look at the setlists currently captivating audiences",
      icon: <MusicNoteIcon className="h-8 w-8 md:h-12 md:w-12" />,
    },
    {
      title: "Popular Songs",
      description:
        "Stay updated with the hottest tracks from JKT48 that are trending right now",
      icon: <PuzzleIcon className="h-8 w-8 md:h-12 md:w-12" />,
    },
    {
      title: "Single Original",
      description:
        "Explore the unique sound and creative vision of JKT48 through our original singles",
      icon: <StarIcon className="h-8 w-8 md:h-12 md:w-12" />,
    },
  ];
  return (
    <div className="py-24 md:px-32 px-8">
      <div className="flex gap-10 flex-col md:flex-row md:gap-4">
        <DiscographySidebar />
        <div className="flex flex-col gap-2 md:basis-1/2">
          <DiscographyNavLink data={data} />
        </div>
      </div>
    </div>
  );
}
