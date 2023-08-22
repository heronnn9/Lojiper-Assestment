"use client";
import React from "react";
import { user } from "@/data/user";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("@data/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(data);

    if (data.success) {
      setMessage("Başarılı! Giriş yapıldı.");
      router.push("/Home"); // <-- Bu satırı ekleyin.
    } else {
      setMessage(data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96 max-w-full"
      >
        <h1 className="text-2xl font-bold mb-4">Giriş Yap</h1>
        <div className="space-y-4">
          <input
            placeholder="Email"
            onChange={(e) => e.target.value}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            placeholder="Şifre"
            onChange={(e) => e.target.value}
            type="password"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Giriş Yap
          </button>
        </div>
      </form>
      <div>
        {user.map((user) => (
          <div>{user.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Login;
