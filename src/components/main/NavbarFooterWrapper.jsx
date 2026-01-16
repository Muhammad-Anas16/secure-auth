"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "./Navbar";

const NavbarFooterWrapper = ({ children }) => {
  const pathname = usePathname();

  const hideNavbarFooter =
    pathname === "/auth/login" || pathname === "/auth/register";

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      {children}
    </>
  );
};

export default NavbarFooterWrapper;
