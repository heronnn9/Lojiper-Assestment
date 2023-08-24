"use client";
import React from "react";
import NavMenu from "./NavMenu";
import { BiLogoGithub } from "react-icons/bi";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Bu useEffect hook'u, localStorage'daki 'user' değeri her değiştiğinde tetiklenir.
  useEffect(() => {
    const storedUser =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("user"))
        : null;
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/");
    // Sayfaya yönlendirme vb. işlemler burada yapılabilir.
  };

  return (
    <div className="h-12 text-white bg-orange-400 p-4 flex items-center justify-between  uppercase md:h-24 lg:px-20 xl:px-40 ">
      <div className="hidden md:flex gap-4 flex-1 text-l">
        <span href="/anasayfa" className="text-2xl">
          Lojiper Bilet
        </span>
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

        {/* Eğer kullanıcı oturum açtıysa Logout butonunu göster */}
        {user && (
          <button onClick={handleLogout} className="ml-4">
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
