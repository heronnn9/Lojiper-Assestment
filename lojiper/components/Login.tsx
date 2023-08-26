"use client";
import React, { useState } from "react";
import users from "@/data/data.json";
import Loading from "@/components/Loading";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Kullanıcı tipi
type UserType = {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  gender: "male" | "female";
};

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  const router = useRouter();

  const handleLogin = () => {
    setLoading(true);

    // 2 saniye sonra loading durumunu false yap
    setTimeout(() => {
      const user: UserType | undefined = users.find(
        (u) => u.email === email
      ) as UserType | undefined;

      if (user && user.password === password) {
        setMessage("Giriş başarılı!");
        localStorage.setItem("user", JSON.stringify(user));
        router.push("/anasayfa");
      } else {
        setMessage("Hatalı email veya şifre.");
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      }

      setLoading(false);
    }, 2000);
  };

  return (
    <div className="relative flex flex-col justify-center min-h-[80vh] bg-slate-200 overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-lg lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-orange-500 ">
          Lojiper
        </h1>
        <div className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          {message && (
            <div className="mt-4 mb-4 text-red-500 text-center">{message}</div>
          )}

          <div className="mt-6">
            <button
              onClick={handleLogin}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-600 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
            >
              {loading ? <Loading /> : "Login"}
            </button>
          </div>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-orange-500 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
