"use client";
import React from "react";
import users from "@/data/data.json";
import Loading from "@/components/Loading";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    setLoading(true);

    // Test amaçlı, 2 saniye sonra loading durumunu false yapalım.
    setTimeout(() => {
      const user = users.find((u) => u.email === email);

      if (user && user.password === password) {
        setMessage("Giriş başarılı!");
        localStorage.setItem("user", JSON.stringify(user));
        router.push("/anasayfa");
      } else {
        setMessage("Hatalı email veya şifre.");
        setTimeout(() => {
          setMessage("");
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
