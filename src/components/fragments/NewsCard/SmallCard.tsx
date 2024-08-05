import React from "react";

export default function SmallCard(props: {
  item: { image: string; tanggal: string; judul: string; desc: string };
  index: number;
}) {
  const { item, index } = props;
  return (
    <div key={index}>
      <div
        className={
          "flex flex-col md:flex-row mb-3 cursor-pointer" +
          (index === 0 ? "" : " mt-3")
        }
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-out-cubic"
        data-aos-delay={index * 100}
      >
        <img
          src={item.image}
          className="rounded-lg md:w-1/3 h-fit"
          alt=""
        />
        <div className="flex flex-col md:ml-4 overflow-auto">
          <div className="flex justify-between items-center mt-3 md:mt-0">
            <h1 className="md:text-xs text-sm ml-1 md:ml-0 font-urbanist font-medium text-custom-green bg-black md:px-1 md:py-0.5 px-2 py-1">
              Event
            </h1>
            <h2 className="md:text-xs text-sm font-poppins text-slate-800">
              {item.tanggal}
            </h2>
          </div>
          <h1 className="text-black my-1 md:my-0 font-semibold font-poppins md:font-bold text-xl md:text-lg text-ellipsis w-full whitespace-nowrap overflow-hidden">
            {item.judul}
          </h1>
          <h2 className="md:text-xs text-sm text-slate-900 text-light line-clamp-2 md:line-clamp-4">{item.desc}</h2>
        </div>
      </div>
      {index !== 3 && <hr className="h-0.5 bg-black hidden md:block" />}
    </div>
  );
}
