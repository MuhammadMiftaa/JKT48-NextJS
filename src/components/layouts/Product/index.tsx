import Link from "next/link";

export default function Product() {
  return (
    <>
    <h1 className="text-4xl text-center font-extrabold mt-24 mb-8 text-custom-green">See What's New</h1>
      <div className="flex py-5 px-32 gap-10 relative">
        <div className="grid grid-cols-3 gap-2 max-w-4xl mx-auto basis-2/3 relative">
          <div className="row-span-1">
            <img
              src="/latestProduct/product1.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="row-span-2 col-span-2">
            <img
              src="/latestProduct/product2.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="row-span-1">
            <img
              src="/latestProduct/product3.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="row-span-1 col-span-1">
            <img
              src="/latestProduct/product4.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="row-span-1 col-span-1">
            <img
              src="/latestProduct/product5.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="row-span-1 col-span-1">
            <img
              src="/latestProduct/product6.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="basis-1/3">
          <h1 className="font-bold text-4xl text-custom-green" >
            Marsha's Birthday T-shirt
          </h1>
          <h2 className="font-bold text-2xl my-5">Rp. 195.000</h2>
          <h3 className="text-sm text-slate-300 font-light">
            Mari rayakan ulang tahun oshi kamu dengan memakai T-Shirt yang
            didesain sendiri oleh membernya! Periode pemesanan akan dimulai 02
            Desember 2023 pukul 15:00 WIB. Kamu bisa order produk ini di
            official Tokopedia JKT48. Pasti seru bisa kembaran baju dengan
            Marsha!
          </h3>
          <h4 className="text-sm text-slate-300 font-light my-3">
            Pemesanan hanya berlaku sampai tanggal 11 Desember 2023 pukul 17:00
            WIB
          </h4>
          <hr />
          <div className="flex gap-2 my-10">
            <h5 className="p-1.5 mr-10">Size</h5>
            <button className="p-1.5 text-center hover:text-custom-green active:text-custom-green focus:text-custom-green hover:cursor-pointer hover:text-shadow-custom-hver transition-shadow">
              S
            </button>
            <button className="p-1.5 text-center hover:text-custom-green active:text-custom-green focus:text-custom-green hover:cursor-pointer hover:text-shadow-custom-hover transition-shadow">
              M
            </button>
            <button className="p-1.5 text-center hover:text-custom-green active:text-custom-green focus:text-custom-green hover:cursor-pointer hover:text-shadow-custom-hover transition-shadow">
              L
            </button>
            <button className="p-1.5 text-center hover:text-custom-green active:text-custom-green focus:text-custom-green hover:cursor-pointer hover:text-shadow-custom-hover transition-shadow">
              XL
            </button>
            <button className="p-1.5 text-center hover:text-custom-green active:text-custom-green focus:text-custom-green hover:cursor-pointer hover:text-shadow-custom-hover transition-shadow">
              XXL
            </button>
          </div>
          <hr />
          <button className="mt-10 w-full border border-custom-green py-2 text-center text-custom-green font-thin hover:bg-custom-green hover:text-black ease-in-out duration-300">
            Go to Payment
          </button>
          <div className="flex gap-2 justify-between py-4 px-8 border border-custom-green rounded-md mt-48">
            <div>
              <h1 className="text-xs font-light text-start border-e hover:text-custom-green hover:cursor-pointer">
                JKT48 Tokopedia
              </h1>
            </div>
            <div>
              <Link href={"/shop"} className="text-xs font-light text-center hover:text-custom-green hover:cursor-pointer block">
                Check Another Product
              </Link>
            </div>
            <div>
              <h1 className="text-xs font-light text-end border-s hover:text-custom-green hover:cursor-pointer">
                JKT48 Shopee
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
