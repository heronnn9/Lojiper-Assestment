import React from "react";
import Accordion from "@/components/Accordion";
function Card({ sefer }) {
  return (
    <div className="m-2">
      {" "}
      <div className="bg-white w-[100vh] rounded-xl h-32 flex flex-col justify-between shadow-2xl">
        {/* Sefer detayları */}
        <div className="flex items-center justify-between w-full">
          <div className="w-48">
            <span className="text-xl ml-2">{sefer.companyname}</span>
          </div>
          <div className="text-xl">
            Kalkış Saati : {sefer.time}.00
            <div className="flex text-xs ">
              <span>{sefer.location} Otogarı-</span>
              <span>{sefer.departure} Otogarı</span>
            </div>
          </div>
          <span className="font-bold">{sefer.price}₺</span>
          <img
            src={sefer.image}
            alt={`${sefer.location} to ${sefer.departure}`}
            className="w-32 h-32 rounded p-2 object-cover"
          />
        </div>
      </div>
      <Accordion title="Detayları Göster">
        <div className="grid grid-cols-4 gap-4">
          {Array(sefer.totalSeats)
            .fill()
            .map((_, index) => {
              const seatNumber = index + 1;
              let seatColor = "bg-green-500";

              if (sefer.occupiedSeats) {
                const occupiedSeat = sefer.occupiedSeats.find(
                  (s) => s.seatNumber === seatNumber
                );

                if (occupiedSeat) {
                  seatColor =
                    occupiedSeat.gender === "female"
                      ? "bg-pink-500"
                      : "bg-blue-500";
                }
              }

              return (
                <div
                  key={seatNumber}
                  className={`p-2 rounded w-16 ${seatColor}`}
                >
                  {seatNumber}
                </div>
              );
            })}
        </div>
      </Accordion>
    </div>
  );
}

export default Card;
