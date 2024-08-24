"use client";

import { useState } from "react";
import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";
import { cn } from "../../../lib/utils";
import { setlistType } from "../types/setlistType";
import Image from "next/image";
import Link from "next/link";
import { HoverBorderGradient } from "./hover-border-gradient";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: setlistType[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<setlistType>(propTabs[0]);
  const [tabs, setTabs] = useState<setlistType[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-start [perspective:1000px] relative overflow-hidden sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.nama_setlist}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative pb-[1px]", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.nama_setlist === tab.nama_setlist && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 text-black capitalize",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block capitalize text-slate-200 bg-black pb-1 text-xs md:text-xl">
              {tab.nama_setlist}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.nama_setlist}
        hovering={hovering}
        className={cn("mt-32", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: setlistType[];
  active: setlistType;
  hovering?: boolean;
}) => {
  const isActive = (tab: setlistType) => {
    return tab.nama_setlist === tabs[0].nama_setlist;
  };

  const color = (setlist: string) => {
    switch (setlist) {
      case "pajama drive":
        return "text-blue-500 border-blue-500";
      case "renai kinshi jourei":
        return "text-pink-500 border-pink-500";
      case "seifuku no me":
        return "text-slate-500 border-slate-500";
      case "ramune no nomikata":
        return "text-teal-500 border-teal-500";
      case "aitakatta":
        return "text-orange-500 border-orange-500";
      default:
        return "";
    }
  };

  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.nama_setlist}
          layoutId={tab.nama_setlist}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          <div className="w-full p-4 md:p-8 overflow-hidden relative h-[42rem] md:full rounded-2xl bg-gradient-to-tr from-slate-700 to-slate-500">
            <div className="flex flex-col md:flex-row-reverse gap-3">
              <Image
                className="aspect-video object-cover object-center rounded-2xl w-full md:w-1/2 h-fit"
                src={`/setlistPoster/${tab.nama_setlist.replace(
                  / /g,
                  "_"
                )}.jpg`}
                width={1000}
                height={1000}
                alt={tab.nama_setlist}
              ></Image>
              <div className="flex flex-col w-full h-full">
                <h1
                  className={`font-urbanist self-center font-black text-xl md:text-4xl ${color(
                    tab.nama_setlist
                  )} capitalize mb-4 md:mb-7 border-b-2 w-fit pb-1`}
                  style={{ textShadow: "1px 1px 3px #000" }}
                >
                  {tab.nama_setlist}
                </h1>
                {tab.lagu.map((item, index) => (
                  <p className="capitalize text-sm md:text-xl font-urbanist text-slate-200 line-clamp-1">
                    {index + 1}. {item.judul_lagu}
                  </p>
                ))}
              </div>
              <Link href={"/discography/ongoing-setlist/" + tab.id} className="absolute bottom-2 md:bottom-8 right-2 md:right-8">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="bg-black text-sm md:text-base font-poppins text-white flex items-center space-x-2"
                >
                  <span>View Complete Lyrics</span>
                </HoverBorderGradient>
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
