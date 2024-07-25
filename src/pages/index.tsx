import About from "@/components/layouts/About";
import Diskografi from "@/components/layouts/Discography";
import Footer from "@/components/layouts/Footer";
import Hero from "@/components/layouts/Hero";
import Member from "@/components/layouts/Member";
import News from "@/components/layouts/News";
import Product from "@/components/layouts/Product";
import Theater from "@/components/layouts/Theater";
export default function Home() {
  return (
    <>
      <Hero />
       {/* <About /> */}
       <Theater />
      <Product />
      <News />
      <Member />
      <Diskografi />
      <Footer /> 
    </>
  );
}
