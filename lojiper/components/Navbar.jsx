"use client";
import React from "react";
import Image from "next/image";
import NavMenu from "./NavMenu";
import { BiSolidPhoneCall, BiLogoGithub } from "react-icons/bi";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-12 text-white bg-orange-400 p-4 flex items-center justify-between  uppercase md:h-24 lg:px-20 xl:px-40 ">
      <div className="hidden md:flex gap-4 flex-1 text-l">
        <Link href="/">Home</Link>
        <Link href="/todo">Make a List</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/* App Name */}
      <div className="text-xl md:font-bold flex-1 text-center">
        {" "}
        Lojiper Bilet
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <NavMenu />
      </div>
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <Link
          href="https://github.com/heronnn9"
          className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-none px-1 rounded-md text-4xl"
        >
          <BiLogoGithub />
        </Link>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
