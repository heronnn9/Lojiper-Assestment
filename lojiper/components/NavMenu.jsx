"use client";
import React from "react";
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const navlinks = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Profile", url: "/" },
    { id: 3, title: "Todos", url: "/" },
  ];
  return (
    <div>
      {!open ? (
        <FaHamburger className="logo" size={30} onClick={() => setOpen(true)} />
      ) : (
        <AiOutlineClose
          className="logo"
          size={30}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className=" bg-indigo-300 text-white absolute left-0 top-12 h-screen flex items-center justify-center flex-col w-full gap-8 z-10">
          {navlinks.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
