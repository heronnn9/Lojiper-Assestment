"use client";
import React, { useEffect } from "react";
import Accordion from "@/components/Accordion";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Card({ sefer }) {
  const calculateTotalPrice = () => {
    return selectedSeats.length * sefer.price;
  };

  const router = useRouter();

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const saveSeatsToLocalStorage = () => {
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
    localStorage.setItem("totalPrice", totalPrice.toString());
  };

  useEffect(() => {
    const storedPrice = localStorage.getItem("totalPrice");
    if (storedPrice) {
      setTotalPrice(parseFloat(storedPrice));
    }
  }, []);

  const handleSeatClick = (seatNumber) => {
    let updatedSeats;

    if (selectedSeats.includes(seatNumber)) {
      updatedSeats = selectedSeats.filter((seat) => seat !== seatNumber);
    } else {
      if (selectedSeats.length < 5) {
        updatedSeats = [...selectedSeats, seatNumber];
      } else {
        alert("En fazla 5 koltuk seçebilirsiniz!");
        return;
      }
    }

    setSelectedSeats(updatedSeats);
    const updatedPrice = updatedSeats.length * sefer.price;
    setTotalPrice(updatedPrice);
    saveSeatsToLocalStorage();
  };

  const goToPaymentPage = () => {
    saveSeatsToLocalStorage();
    router.push("/payment");
  };

  const getSeatColor = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      return "bg-yellow-500";
    }

    if (sefer.occupiedSeats) {
      const occupiedSeat = sefer.occupiedSeats.find(
        (s) => s.seatNumber === seatNumber
      );

      if (occupiedSeat) {
        return occupiedSeat.gender === "female" ? "bg-pink-500" : "bg-blue-500";
      }
    }
    return "bg-gray-400";
  };

  return (
    <div className="m-2">
      <div className="bg-white md:w-[100vh] w-full rounded-xl h-32 flex flex-col md:flex-row justify-between items-center shadow-2xl">
        <div className="mb-2 md:mb-0 w-full md:w-48 p-2">
          <span className="text-xl ml-2">{sefer.companyname}</span>
        </div>
        <div className="text-xl mb-2 md:mb-0 p-2 mr-16">
          Kalkış Saati : {sefer.time}.00
          <div className="flex text-xs">
            <span>{sefer.location} Otogarı-</span>
            <span>{sefer.departure} Otogarı</span>
          </div>
        </div>
        <span className="font-bold mb-2 md:mb-0 p-2">{sefer.price}₺</span>
      </div>
      <Accordion title="Detayları Göster">
        <div>Koltuk seçiniz (Toplam Tutar: {totalPrice}₺)</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-slate-300">
          {Array(sefer.totalSeats)
            .fill()
            .map((_, index) => {
              const seatNumber = index + 1;
              const seatColor = getSeatColor(seatNumber);

              return (
                <div
                  onClick={() => handleSeatClick(seatNumber)}
                  key={seatNumber}
                  className={`p-2 rounded w-16 ${seatColor}`}
                >
                  {seatNumber}
                </div>
              );
            })}
        </div>
        {selectedSeats.length > 0 && (
          <button
            className=" px-4 py-2 mt-4 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md focus:outline-none"
            onClick={goToPaymentPage}
          >
            Ödeme Sayfasına Git
          </button>
        )}
      </Accordion>
    </div>
  );
}

export default Card;
