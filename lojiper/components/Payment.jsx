"use client";
import React, { useState, useEffect } from "react";
import creditcard from "@/assets/credits.png";
import Image from "next/image";
import Loading from "./Loading";
import { useRouter } from "next/navigation";
function PaymentPage() {
  const router = useRouter();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameSurname, setNameSurname] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    const seats = localStorage.getItem("selectedSeats");
    if (seats) {
      setSelectedSeats(JSON.parse(seats));
    }
  }, []);
  useEffect(() => {
    const storedPrice = localStorage.getItem("totalPrice");
    if (storedPrice) {
      setTotalPrice(parseFloat(storedPrice));
    }
  }, []);
  const allFieldsFilled = () => {
    return (
      email &&
      phone &&
      nameSurname &&
      idNumber &&
      cardNumber &&
      expiryDate &&
      cvc &&
      isAccepted
    );
  };
  const handlePayment = () => {
    if (allFieldsFilled()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        router.push("/anasayfa");
      }, 3000);
    } else {
      alert("Lütfen tüm alanları doldurunuz ve koşulları kabul ediniz!");
    }
  };

  const handleButtonClick = () => {
    if (allFieldsFilled()) {
      handlePayment();
    } else {
      alert("Lütfen tüm alanları doldurunuz!");
    }
  };
  return (
    <div className="bg-slate-300 min-h-screen flex flex-col md:flex-row justify-between p-4 ">
      {/* Seçilen Koltuk Bilgileri */}
      <div className="w-full md:w-1/4 bg-white h-[15vh] mt-4 text-slate-600 shadow-xl rounded-xl">
        <div className="p-4 w-full border-b-2">
          <h1>Lojiper</h1>
        </div>
        <div className="mt-2 flex flex-row ml-2">
          Seçilen Koltuklar:
          <div>
            {selectedSeats.map((seat, index) => (
              <span key={index}> Koltuk: {seat},</span>
            ))}
          </div>
        </div>
        <div className="ml-2">
          <h1>Toplam Fiyat: {totalPrice}₺</h1>
        </div>
      </div>

      {/* İletişim Bilgileri */}
      <div className="w-full md:w-2/6 mt-4">
        <div className="h-[30vh] bg-white rounded-xl text-slate-600 shadow-xl">
          <div className="border-b-2 text-lg text-slate-600 p-2">
            <h1>İletişim Bilgileri</h1>
          </div>
          <div className="p-4">
            <h1>E-Mail</h1>
            <input
              type="text"
              placeholder="E-Mail Adresiniz"
              className="border-2 p-2 w-full rounded-xl border-slate-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="mt-2">
              <h1>Cep Telefonu</h1>
              <input
                type="text"
                placeholder="Cep Telefonunuz"
                className="border-2 p-2 w-full rounded-xl border-slate-600"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="h-[30vh] bg-white rounded-xl text-slate-600 mt-2 shadow-xl">
          <div className="border-b-2 text-lg text-slate-600 p-2">
            <h1>Yolcu Bilgileri</h1>
          </div>
          <div className="p-4">
            <h1>Adı Soyadı</h1>
            <input
              type="text"
              placeholder="Adınız"
              className="border-2 p-2 w-full rounded-xl border-slate-300"
              value={nameSurname}
              onChange={(e) => setNameSurname(e.target.value)}
            />
            <div className="mt-2">
              <h1>T.C Kimlik No</h1>
              <input
                type="text"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                placeholder="Kimlik Numaranız"
                className="border-2 p-2 w-full rounded-xl border-slate-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Kart Bilgileri */}
      <div className="w-full md:w-1/4 bg-white h-[60vh] mt-4 text-gray-600 rounded-xl shadow-xl">
        <div className="p-4 w-full border-b-2">
          <h1>Ödeme Bilgileri</h1>
        </div>
        <div className="flex justify-center border-red-500  mt-2 w-full">
          Banka/Kredi Kartı
        </div>
        <div className="mt-2 p-2">
          <Image
            src={creditcard}
            alt=""
            width={400}
            className=" object-cover"
          />
        </div>
        <div className=" mt-2 text-sm p-2">
          <h1>Kart Numarası</h1>
          <input
            type="number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Kart Numaranızı Girin"
            className=" border-2 p-2 w-full rounded-xl border-slate-300"
          />
        </div>
        <div className="flex flex-col md:flex-row p-2 mt-2 space-y-2 md:space-y-0 md:space-x-2">
          <div>
            <h1>Son Kullanma Tarihi</h1>
            <input
              type="number"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="AA / YY"
              className="border-2 p-2 w-3/4 rounded-xl border-slate-300"
            />
          </div>
          <div>
            <h1>CVC2</h1>
            <input
              type="number"
              placeholder="***"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              className="border-2 p-2 w-3/4 rounded-xl border-slate-300"
            />
          </div>
        </div>
        <div className="text-xs p-2 flex">
          <input
            type="checkbox"
            value={isAccepted}
            onChange={(e) => setIsAccepted(e.target.value)}
          />
          <span className="ml-2">
            Ön Bilgilendirme Formu'nu , Mesafeli Satış Sözleşmesi'ni okudum ve
            onaylıyorum. Kişisel verilerin işlenmesine ilişkin Aydınlatma
            Metni’ni okudum. Kullanım Koşulları’nı kabul ediyorum.
          </span>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={handleButtonClick}
            className="px-4 py-2 mt-4 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md   focus:outline-none "
          >
            {loading ? <Loading /> : "Ödeme Yap"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
