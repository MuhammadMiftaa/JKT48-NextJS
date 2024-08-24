"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
// import { cn } from "@/lib/utils";
import { cn } from "../../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
// import { useOutsideClick } from "@/hooks/use-outside-click";
import { useOutsideClick } from "../hooks/use-outside-click";
import { memberType } from "../types/memberType";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  price: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto pb-10 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "max-w-7xl mx-auto" // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="hidden sm:flex justify-end gap-2 mr-10">
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
  isMerch,
}: {
  card: Card;
  index: number;
  layout?: boolean;
  isMerch: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className={`fixed inset-0 h-screen z-50 overflow-auto`}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="max-w-5xl mx-auto bg-slate-300 dark:bg-neutral-900 h-fit  z-[60] my-10 p-4 md:p-10 rounded-3xl font-poppins relative"
            >
              <form action="">
                <button
                  className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black z-10 dark:bg-white rounded-full flex items-center justify-center"
                  onClick={handleClose}
                >
                  <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
                </button>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center md:px-5">
                  <motion.p
                    layoutId={layout ? `category-${card.category}` : undefined}
                    className="font-light text-2xl md:text-4xl font text-black dark:text-white font-urbanist"
                  >
                    {card.category}
                  </motion.p>
                  <motion.p
                    layoutId={layout ? `category-${card.title}` : undefined}
                    className="font-bold text-3xl md:text-5xl font text-black dark:text-white font-urbanist md:text-end"
                  >
                    {card.title}
                  </motion.p>
                </div>
                <div className="py-10">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-w-4xl mx-auto md:basis-2/3 relative">
                    {isMerch ? (
                      <div className="md:col-start-2">
                        <img
                          src={card.src}
                          alt={card.src}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                    ) : (
                      <>
                        <div className="row-span-1">
                          <img
                            src={`/product/tshirt/${card.title
                              .toLowerCase()
                              .replace(/ /g, "-")}-1.jpg`}
                            alt=""
                            className="w-full h-full object-cover rounded-xl"
                          />
                        </div>
                        <div className="md:row-span-2 md:col-span-2">
                          <img
                            src={`/product/tshirt/${card.title
                              .toLowerCase()
                              .replace(/ /g, "-")}-2.jpg`}
                            alt=""
                            className="w-full h-full object-cover rounded-xl"
                          />
                        </div>
                        <div className="row-span-1">
                          <img
                            src={`/product/tshirt/${card.title
                              .toLowerCase()
                              .replace(/ /g, "-")}-3.jpg`}
                            alt=""
                            className="w-full h-full object-cover rounded-xl"
                          />
                        </div>
                        <div className="row-span-1 col-span-1">
                          <img
                            src={`/product/tshirt/${card.title
                              .toLowerCase()
                              .replace(/ /g, "-")}-4.jpg`}
                            alt=""
                            className="w-full h-full object-cover rounded-xl"
                          />
                        </div>
                        <div className="row-span-1 col-span-1">
                          <img
                            src={`/product/tshirt/${card.title
                              .toLowerCase()
                              .replace(/ /g, "-")}-5.jpg`}
                            alt=""
                            className="w-full h-full object-cover rounded-xl"
                          />
                        </div>
                        <div className="row-span-1 col-span-1">
                          <img
                            src={`/product/tshirt/${card.title
                              .toLowerCase()
                              .replace(/ /g, "-")}-6.jpg`}
                            alt=""
                            className="w-full h-full object-cover rounded-xl"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-start md:items-center">
                  {!isMerch && (
                    <div className="flex gap-4">
                      <label className="w-12" htmlFor="s">
                        <input
                          className="peer scale-0"
                          type="radio"
                          required
                          value="s"
                          id="s"
                          name="size"
                        />
                        <span className="radio-mark w-12 cursor-pointer text-zinc-900 shadow-sm border border-zinc-900 shadow-zinc-900 py-1 px-2 rounded absolute peer-checked:translate-x-0.5 peer-checked:translate-y-0.5 peer-checked:shadow-none">
                          S
                        </span>
                      </label>
                      <label className="w-12" htmlFor="m">
                        <input
                          className="peer scale-0"
                          type="radio"
                          required
                          value="m"
                          id="m"
                          name="size"
                        />
                        <span className="radio-mark w-12 cursor-pointer text-zinc-900 shadow-sm border border-zinc-900 shadow-zinc-900 py-1 px-2 rounded absolute peer-checked:translate-x-0.5 peer-checked:translate-y-0.5 peer-checked:shadow-none">
                          M
                        </span>
                      </label>
                      <label className="w-12" htmlFor="l">
                        <input
                          className="peer scale-0"
                          type="radio"
                          required
                          value="l"
                          id="l"
                          name="size"
                        />
                        <span className="radio-mark w-12 cursor-pointer text-zinc-900 shadow-sm border border-zinc-900 shadow-zinc-900 py-1 px-2 rounded absolute peer-checked:translate-x-0.5 peer-checked:translate-y-0.5 peer-checked:shadow-none">
                          L
                        </span>
                      </label>
                      <label className="w-12" htmlFor="xl">
                        <input
                          className="peer scale-0"
                          type="radio"
                          required
                          value="xl"
                          id="xl"
                          name="size"
                        />
                        <span className="radio-mark w-12 cursor-pointer text-zinc-900 shadow-sm border border-zinc-900 shadow-zinc-900 py-1 px-2 rounded absolute peer-checked:translate-x-0.5 peer-checked:translate-y-0.5 peer-checked:shadow-none">
                          XL
                        </span>
                      </label>
                      <label className="w-12" htmlFor="xxl">
                        <input
                          className="peer scale-0"
                          type="radio"
                          required
                          value="xxl"
                          id="xxl"
                          name="size"
                        />
                        <span className="radio-mark w-12 cursor-pointer text-zinc-900 shadow-sm border border-zinc-900 shadow-zinc-900 py-1 px-2 rounded absolute peer-checked:translate-x-0.5 peer-checked:translate-y-0.5 peer-checked:shadow-none">
                          XXL
                        </span>
                      </label>
                    </div>
                  )}
                  <motion.p
                    layoutId={layout ? `title-${card.title}` : undefined}
                    className="text-3xl md:text-4xl ml-4 md:ml-0 font-light text-neutral-700 dark:text-white font-urbanist"
                  >
                    {card.price}
                  </motion.p>
                </div>
                <button className="font-urbanist mt-12 w-full inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  Check Out
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className={`rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 ${
          isMerch ? "md:h-[24rem]" : "md:h-[40rem]"
        } md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10`}
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div
          className={`absolute left-0 right-0 bottom-0 z-40 px-5 md:px-8 py-2 md:py-4 ${
            index % 3 === 0
              ? "bg-orange-500"
              : index % 3 === 1
              ? "bg-cyan-500"
              : "bg-pink-500"
          }`}
        >
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-sm md:text-base font-medium font-poppins text-left truncate"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-poppins mt-2 line-clamp-1"
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute z-10 inset-0"
        />
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
