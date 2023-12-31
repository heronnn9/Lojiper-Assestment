"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import userData from "@/data/data.json";
import Loading from "./Loading";

type UserType = {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  gender: "male" | "female";
};
const users: UserType[] = userData as UserType[];
const Register = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const userExists = users.some((u: UserType) => u.email === email);

      if (userExists) {
        setMessage("Bu e-posta adresi zaten kullanılıyor.");
      } else {
        // Yeni bir kullanıcı oluşturulduğunda bu bilgiyi gerçekten bir backend'e göndermelisiniz.
        // Bu örnek sadece ön yüzde çalışır ve gerçek bir kayıt işlemi gerçekleştirmez.
        const newUser: UserType = {
          id: users.length + 1,
          name,
          surname,
          email,
          password,
          gender: gender as "male" | "female",
        };
        // Burada newUser'u gerçekte bir yere kaydetmelisiniz.
        setMessage("Kayıt başarılı!");
        router.push("/");
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      <div className="flex flex-col items-center min-h-[80vh] pt-6 sm:justify-center sm:pt-0 bg-slate-200">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-purple-600">Lojiper</h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
          <form>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm p-2 "
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="surname"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Surname
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  value={surname}
                  name="surname"
                  onChange={(e) => setSurname(e.target.value)}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm p-2 "
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Cinsiyet
              </label>
              <div className="flex flex-col items-start">
                <select
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm p-2"
                >
                  <option value="">Kadın/Erkek</option>
                  <option value="female">Kadın</option>
                  <option value="male">Erkek</option>
                  <option value="other">Diğer</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
            </div>
            <div className="flex items-center justify-end mt-4">
              <a
                className="text-sm text-gray-600 underline hover:text-gray-900"
                href="/"
              >
                Already registered?
              </a>
              <button
                type="submit"
                onClick={handleRegister}
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
              >
                {loading ? <Loading /> : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
