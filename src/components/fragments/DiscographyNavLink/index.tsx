import DiscographyLinkBox from "@/components/elements/DiscographyLinkBox";
import { MusicNoteIcon, PuzzleIcon, StarIcon } from "@heroicons/react/outline";
import React from "react";

export default function DiscographyNavLink(props: {
  data: { title: string; description: string; icon: JSX.Element }[];
}) {
  return (
    <div className="flex flex-col gap-2 basis-1/2">
      {props.data.map((item, i) => (
        <DiscographyLinkBox key={i} title={item.title} description={item.description}>
          {item.icon}
        </DiscographyLinkBox>
      ))}
    </div>
  );
}
