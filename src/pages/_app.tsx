import AppShell from "@/components/layouts/AppShell";
import Footer from "@/components/layouts/Footer";
import NavbarLayout from "@/components/layouts/Navbar";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "animate.css";


export const metadata = {
  title: "JKT48 Redesign",
  description: "Redesign of JKT48 website",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {

  useEffect(() => {
    AOS.init({
      // Configuration options
      // duration: 1000,
    });
  }, []);

  return (
    <SessionProvider session={session}>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </SessionProvider>
  );
}
