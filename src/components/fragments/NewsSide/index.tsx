import Image from "next/image";

export default function NewsSide() {
  return (
    <div className="basis-2/5 h-fit font-poppins">
      <h1 className="text-3xl mb-4 text-center font-semibold text-gradient">
        Chekicha
      </h1>
      <Image src="/birthdayMember.jpg" alt="birthday member this month" width={1000} height={1000} />
      <h1 className="text-zinc-500 mt-5 italic text-sm md:before:content-['——————————————————'] md:before:mr-3 md:before:tracking-[-4px] md:after:content-['——————————————————————————————————————————————————————————————————'] md:after:tracking-[-10px] md:after:ml-2">
        10 Juli 2024
      </h1>
      <h1 className="mt-3 cursor-pointer hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-custom-green hover:to-blue-600 text-xl font-light after:content-['see more...'] after:text-zinc-500">
        Pengumuman Mengenai Birthday 2-Shot Online Bulan Juli dengan Chekicha
      </h1>
    </div>
  );
}
