import React from "react";
import NavbarLayout from "../Navbar";
import { useRouter } from "next/router";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell(props: AppShellProps) {
  const { children } = props;
  const router = useRouter();

  const noNavbar: RegExp[] = [/^\/member\/.*/, /^\/discography\/ongoing-setlist\/.*/,/^\/profile\/.*/];
  const isNoNavbarRoute = noNavbar.some((pattern) =>
    pattern.test(router.pathname)
  );

  return (
    <div>
      {!isNoNavbarRoute && <NavbarLayout />}
      {children}
    </div>
  );
}
