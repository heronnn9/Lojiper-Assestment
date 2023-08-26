"use client";
import React, { useState, useEffect, ReactNode } from "react";
import NavMenu from "./NavMenu";
import { BiLogoGithub } from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface User {
  name: string;
}

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null);

  const router = useRouter();

  useEffect(() => {
    const storedUser =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("user") || "null")
        : null;
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/");
  };

  return (
    <div className="h-12 text-white navbarbg p-4 flex items-center justify-between md:h-24 lg:px-20 xl:px-40 ">
      <div className="hidden md:flex gap-4 flex-1 text-l">
        <span className="text-2xl">LOJIPER BILET</span>
      </div>
      {/* Mobile */}
      <div className="md:hidden">
        <NavMenu />
      </div>

      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        {user && <h1> Mr/Mss. {user.name} </h1>}
        <Link
          href="https://github.com/heronnn9"
          className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-none px-1 rounded-md text-4xl"
        >
          <BiLogoGithub />
        </Link>

        {/* Eğer kullanıcı oturum açtıysa Logout butonunu göster */}
        {user && (
          <button onClick={handleLogout} className="ml-4">
            Çıkış : Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
