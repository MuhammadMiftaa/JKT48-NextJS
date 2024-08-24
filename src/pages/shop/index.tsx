import Image from "next/image";
import { FloatingDock } from "@/components/ui/floating-dock";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { IoShirtSharp } from "react-icons/io5";
import { MdOutlineCamera } from "react-icons/md";
import { PiHandbagFill } from "react-icons/pi";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import ProductCard from "@/components/fragments/ProductCard";
import { memberType } from "@/components/types/memberType";
import useSWR from "swr";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-cards";
import { LiaOpencart } from "react-icons/lia";
import { useState } from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

export default function ShopPage() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/api/data-member/member", fetcher);
  const dataMember: memberType[] = isLoading ? [] : data.data;

  const [qty, setQty] = useState(0);
  function addQty() {
    setQty(qty + 1);
  }
  function reduceQty() {
    if (qty > 0) {
      setQty(qty - 1);
    }
  }

  const links = [
    {
      title: "Merchandise",
      icon: <PiHandbagFill className="h-full w-full text-green-500" />,
      href: "#merch",
    },
    {
      title: "Shirts",
      icon: <IoShirtSharp className="h-full w-full text-orange-500" />,
      href: "#tshirt",
    },

    {
      title: "2Shot and MnG",
      icon: <MdOutlineCamera className="h-full w-full text text-purple-500" />,
      href: "#2shot-mng",
    },
    {
      title: "Video Call",
      icon: (
        <HiOutlineDevicePhoneMobile className="h-full w-full text text-zinc-500" />
      ),
      href: "#videocall",
    },
  ];

  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  const tshirtCards = dataTshirt.map((card, index) => (
    <Card isMerch={false} key={card.src} card={card} index={index} />
  ));

  const merchCards = dataMerch.map((card, index) => (
    <Card isMerch={true} key={card.src} card={card} index={index} />
  ));

  return (
    <div className="mt-20">
      <div className="p-8">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-white to-slate-200 py-4 bg-clip-text text-center text-4xl tracking-tight text-transparent md:text-7xl font-urbanist font-bold"
          >
            JKT48 Official Store
          </motion.h1>
        </LampContainer>
      </div>
      <div className="flex justify-between items-center px-8 md:px-16">
        <div>
          <div className="flex items-center p-[0.05rem] font-urbanist bg-gradient-to-r from-custom-green to-blue-600 rounded-full md:rounded-2xl justify-center">
            <FloatingDock
              // mobileClassName="translate-y-20" // only for demo, remove for production
              items={links}
              desktopClassName="bg-black"
            />
          </div>
        </div>
        <div className="w-3/4 md:w-1/3 font-urbanist">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>
      <div className="px-8 md:px-20">
        <div className="w-full h-full pt-8" id="merch">
          <TextRevealCard
            className="p-0 pl-3 md:pl-0 m-0 bg-black border-none w-fit"
            text="Exclusive Merch Just for You"
            revealText="Grab Yours Now"
          ></TextRevealCard>
          <Carousel items={merchCards} />
        </div>

        <div className="w-full h-bull pt-8" id="tshirt">
          <TextRevealCard
            className="p-0 pl-3 md:pl-0 m-0 bg-black border-none w-fit"
            text="Express Your Fandom in Style"
            revealText="Find Your Fit"
          ></TextRevealCard>
          <Carousel items={tshirtCards} />
        </div>

        <div className="w-full h-bull pt-8" id="2shot-mng">
          <TextRevealCard
            className="p-0 pl-3 md:pl-0 m-0 bg-black border-none w-fit"
            text="Meet Your Idols Face-to-Face"
            revealText="Reserve Your Spot"
          ></TextRevealCard>
          <div className="flex flex-wrap gap-12 justify-center">
            {dataMember.map(
              (member, index) =>
                index % 4 === 0 && (
                  <CardContainer className="inter-var">
                    <CardBody className="bg-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-36 sm:w-[15rem] h-auto rounded-xl border-[0.5px] border-zinc-600">
                      <CardItem
                        translateZ="100"
                        className={`w-full h-36 md:h-72 flex items-end bg-gradient-to-b ${
                          index % 3 === 0
                            ? "from-[#38EF7D] to-[#11998E]"
                            : index % 3 === 1
                            ? "from-[#6A82FB] to-[#FC5C7D]"
                            : "from-[#8A2387] to-[#E94057]"
                        } rounded-t-xl relative overflow-hidden`}
                      >
                        {index % 10 === 0 ? (
                          <div className="font-londrina uppercase flex-col flex items-center opacity-70 font-semibold text-zinc-200 text-3xl md:text-6xl">
                            <h1 className="tracking-widest absolute top-0">
                              2Shot2Shot2Shot2Shot
                            </h1>
                            <h1 className="tracking-widest absolute top-6 md:top-12">
                              2Shot2Shot2Shot2Shot
                            </h1>
                            <h1 className="tracking-widest absolute top-12 md:top-24">
                              2Shot2Shot2Shot2Shot
                            </h1>
                            <h1 className="tracking-widest absolute top-[4.5rem] md:top-36">
                              2Shot2Shot2Shot2Shot
                            </h1>
                            <h1 className="tracking-widest absolute top-24 md:top-48">
                              2Shot2Shot2Shot2Shot
                            </h1>
                            <h1 className="tracking-widest absolute top-[7.5rem] md:top-60">
                              2Shot2Shot2Shot2Shot
                            </h1>
                          </div>
                        ) : (
                          <div className="font-londrina uppercase flex-col flex items-center opacity-70 font-semibold text-zinc-200 text-3xl md:text-6xl">
                            <h1 className="tracking-widest absolute top-0">
                              MnGMnGMnGMnGMnGMnG
                            </h1>
                            <h1 className="tracking-widest absolute top-6 md:top-12">
                              MnGMnGMnGMnGMnGMnG
                            </h1>
                            <h1 className="tracking-widest absolute top-12 md:top-24">
                              MnGMnGMnGMnGMnGMnG
                            </h1>
                            <h1 className="tracking-widest absolute top-[4.5rem] md:top-36">
                              MnGMnGMnGMnGMnGMnG
                            </h1>
                            <h1 className="tracking-widest absolute top-24 md:top-48">
                              MnGMnGMnGMnGMnGMnG
                            </h1>
                            <h1 className="tracking-widest absolute top-[7.5rem] md:top-60">
                              MnGMnGMnGMnGMnGMnG
                            </h1>
                          </div>
                        )}
                        <Image
                          src={`/member/${member.nama
                            .toLowerCase()
                            .replace(" ", "_")}.png`}
                          height="1000"
                          width="1000"
                          className="h-32 md:h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl z-10"
                          alt="thumbnail"
                        />
                      </CardItem>
                      <CardItem
                        translateZ="50"
                        className="text-base md:text-lg font-poppins font-semibold text-white mx-4 mt-2 md:mt-3 line-clamp-1"
                      >
                        {member.nama}
                      </CardItem>
                      <div className="flex flex-col items-start md:flex-row justify-between md:items-center mx-4 mt-2">
                        <CardItem
                          as="p"
                          translateZ="60"
                          className="text-neutral-500 font-urbanist text-xs md:text-sm max-w-sm mt-1 md:mt-2 dark:text-neutral-300"
                        >
                          Sesi 2 - Jalur 8
                        </CardItem>
                        <CardItem
                          as="p"
                          translateZ="60"
                          className="text-white font-urbanist font-semibold text-xs md:text-sm max-w-sm mt-1 md:mt-2 dark:text-neutral-300"
                        >
                          Rp 120.000
                        </CardItem>
                      </div>
                      <div className="flex justify-between items-center mx-4 my-3">
                        <CardItem
                          as="p"
                          translateZ="60"
                          className="text-neutral-500 font-urbanist text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                          <button
                            onClick={reduceQty}
                            className="text-gray-200 px-2 py-1 rounded-lg"
                          >
                            -
                          </button>
                          <span className="mx-2 text-white">{qty}</span>
                          <button
                            onClick={addQty}
                            className="text-gray-200 px-2 py-1 rounded-lg"
                          >
                            +
                          </button>
                        </CardItem>
                        <CardItem
                          as="p"
                          translateZ="60"
                          className="text-white font-urbanist font-semibold text-xl cursor-pointer hover:bg-gradient-to-r from-custom-green to-blue-600 rounded-md duration-300 p-1 hover:text-black max-w-sm mt-2 dark:text-neutral-300"
                        >
                          <LiaOpencart />
                        </CardItem>
                      </div>
                    </CardBody>
                  </CardContainer>
                )
            )}
          </div>
        </div>
        <div className="w-full h-full pb-12 pt-8" id="videocall">
          <TextRevealCard
            className="p-0 pl-3 md:pl-0 m-0 bg-black border-none w-fit"
            text="Connect with Your Idols Virtually"
            revealText="Schedule Your Call"
          ></TextRevealCard>
          <div className="flex flex-wrap gap-12 justify-center">
            {dataMember.map(
              (member, index) =>
                index % 6 === 0 && (
                  <CardContainer className="inter-var">
                    <CardBody className="bg-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-36 sm:w-[15rem] h-auto rounded-xl border-[0.5px] border-zinc-600">
                      <CardItem
                        translateZ="100"
                        className={`w-full h-36 md:h-72 flex items-end bg-gradient-to-b  from-blue-500 to-cyan-400
                          rounded-t-xl relative overflow-hidden`}
                      >
                        <Image
                          src={`/member/${member.nama
                            .toLowerCase()
                            .replace(" ", "_")}.png`}
                          height="1000"
                          width="1000"
                          className="h-32 md:h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl z-10"
                          alt="thumbnail"
                        />
                      </CardItem>
                      <CardItem
                        translateZ="50"
                        className="text-base md:text-lg font-poppins font-semibold text-white mx-4 mt-2 md:mt-3 line-clamp-1"
                      >
                        {member.nama}
                      </CardItem>
                      <div className="flex flex-col items-start md:flex-row justify-between md:items-center mx-4 mt-2">
                        <CardItem
                          as="p"
                          translateZ="60"
                          className="text-neutral-500 font-urbanist text-xs md:text-sm max-w-sm mt-1 md:mt-2 dark:text-neutral-300"
                        >
                          Sesi 2 - Jalur 8
                        </CardItem>
                        <CardItem
                          as="p"
                          translateZ="60"
                          className="text-white font-urbanist font-semibold text-xs md:text-sm max-w-sm mt-1 md:mt-2 dark:text-neutral-300"
                        >
                          Rp 120.000
                        </CardItem>
                      </div>
                      <div className="flex justify-between items-center mx-4 my-3">
                        <CardItem
                          as="p"
                          translateZ="60"
                          className="text-neutral-500 font-urbanist text-sm max-w-sm mt-2"
                        >
                          <button
                            onClick={reduceQty}
                            className="text-gray-200 px-2 py-1 rounded-lg"
                          >
                            -
                          </button>
                          <span className="mx-2 text-white">{qty}</span>
                          <button
                            onClick={addQty}
                            className="text-gray-200 px-2 py-1 rounded-lg"
                          >
                            +
                          </button>
                        </CardItem>
                        <CardItem
                          as="p"
                          translateZ="60"
                          className="text-white font-urbanist font-semibold text-xl cursor-pointer hover:bg-gradient-to-r from-custom-green to-blue-600 rounded-md duration-300 p-1 hover:text-black max-w-sm mt-2"
                        >
                          <LiaOpencart />
                        </CardItem>
                      </div>
                    </CardBody>
                  </CardContainer>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const dataTshirt = [
  {
    category: "Birthday T-shirt",
    title: "Marsha Lenathea",
    price: "Rp 195.000",
    src: "/product/tshirt/marsha-lenathea-2.jpg",
    content: <DummyContent />,
  },
  {
    category: "Birthday T-shirt",
    title: "Shania Gracia",
    price: "Rp 195.000",
    src: "/product/tshirt/shania-gracia-1.jpg",
    content: <DummyContent />,
  },
  {
    category: "Birthday T-shirt",
    title: "Gabriela Abigail",
    price: "Rp 195.000",
    src: "/product/tshirt/gabriela-abigail-1.jpg",
    content: <DummyContent />,
  },

  {
    category: "Birthday T-shirt",
    title: "Kathrina Irene",
    price: "Rp 195.000",
    src: "/product/tshirt/kathrina-irene-1.jpg",
    content: <DummyContent />,
  },
  {
    category: "Birthday T-shirt",
    title: "Cornelia Vanisa",
    price: "Rp 195.000",
    src: "/product/tshirt/cornelia-vanisa-1.jpg",
    content: <DummyContent />,
  },
  {
    category: "Birthday T-shirt",
    title: "Reva Fidela",
    price: "Rp 195.000",
    src: "/product/tshirt/reva-fidela-1.jpg",
    content: <DummyContent />,
  },
];

const dataMerch = [
  {
    title: "Magic Hour Pandora Box Set",
    category: "Merchandise",
    price: "Rp 480.000",
    src: "/product/merch/1.jpg",
    content: <DummyContent />,
  },
  {
    title: "C’est Moi SHANI",
    category: "Merchandise",
    price: "Rp 295.000",
    src: "/product/merch/2.jpg",
    content: <DummyContent />,
  },
  {
    title: "Deskmate Valkryie",
    category: "Merchandise",
    price: "Rp 250.000",
    src: "/product/merch/3.jpg",
    content: <DummyContent />,
  },

  {
    title: "JKT48 Calendar The Morning Call",
    category: "Merchandise",
    price: "Rp 180.000",
    src: "/product/merch/4.jpg",
    content: <DummyContent />,
  },
  {
    title: "Sayonara Crawl Special Set",
    category: "Merchandise",
    price: "Rp 245.000",
    src: "/product/merch/5.jpg",
    content: <DummyContent />,
  },
  {
    title: "JKT48 Deluxe Set “Cara Ceroboh untuk Mencinta”",
    category: "Merchandise",
    price: "Rp 480.000",
    src: "/product/merch/6.jpg",
    content: <DummyContent />,
  },
];
