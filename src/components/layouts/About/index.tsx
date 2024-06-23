export default function About() {
  return (
    <div className="relative" style={{ height: "110vh" }}>
      <img className="h-80 absolute top-48 left-0" src="/aboutImage/about2.jpg" alt="" />
      <img
        className="absolute top-24 left-1/4 z-10 rounded-md"
        style={{ width: "60%" }}
        src="/aboutImage/about1.jpg"
        alt=""
      />
      <img className="h-80 absolute top-48 right-0" src="/aboutImage/about3.webp" alt="" />
      <h1 className="italic text-7xl font-bold absolute bottom-8 left-8 rounded-lg p-4 w-72" style={{color: "#88FCAF"}}>JKT48</h1>
    </div>
  );
}
