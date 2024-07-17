import AppShell from "@/components/layouts/AppShell";
import Footer from "@/components/layouts/Footer";
import NavbarLayout from "@/components/layouts/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import 'animate.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      // Configuration options
      // duration: 1000,
    });
  }, []);
  return (
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  );
}
