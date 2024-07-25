import Button from "@/components/elements/Button";
import { useRouter } from "next/router";
import React from "react";

export default function DiscographySidebar() {
  const { push } = useRouter();
  const handlerSeeAll = () => {
    push("/discography");
  };
  return (
    <div className="flex flex-col md:basis-1/2">
      <h1 className="mb-3 font-bold text-custom-green font-poppins text-sm md:text-base">
        Discography
      </h1>
      <h2 className="font-semibold text-2xl md:text-3xl mb-2 font-montserrat">
        Welcome to the JKT48{" "}
        <span className="title-gradient-thick">Discography</span>
      </h2>
      <h3 className="text-zinc-400 mb-2 font-urbanist text-sm md:text-base">
        Discover the complete collection of setlists and songs performed by the
        members of JKT48.
      </h3>
      <Button onClick={handlerSeeAll}>Explore our music</Button>
    </div>
  );
}
