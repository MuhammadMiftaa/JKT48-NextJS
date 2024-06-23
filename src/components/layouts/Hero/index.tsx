export default function Hero() {
  return (
    <div
      className="h-screen bg-no-repeat bg-center bg-cover flex items-end px-20 pb-10"
      style={{ backgroundImage: `url('/image/1.png')` }}
    >
      <div className="w-full">
        <h1 className="text-6xl mb-5 font-bold text-custom-green">JKT48</h1>
        <p className="w-96 mb-10 text-sm font-light">JKT48 is a captivating musical sensation that blends the allure of Japanese pop culture with Indonesian charm. Originating from the renowned AKB48 concept, JKT48 has carved its own path as Indonesia's beloved idol group, enchanting audiences with its energetic performances and infectious melodies.</p>
        <div className="flex justify-between w-full">
            <a href="#" className="font-light">See current member</a>
            <div>
                <a href="#" className="font-light">Go to next section</a>
            </div>
        </div>
      </div>
    </div>
  );
}
