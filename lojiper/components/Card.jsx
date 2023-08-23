import React from "react";
import Accordion from "@/components/Accordion";
function Card({ sefer }) {
  return (
    <div className="m-2">
      {" "}
      {/* Ana div */}
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
          <img
            src={sefer.image}
            alt={`${sefer.location} to ${sefer.departure}`}
            className="w-32 h-32 rounded p-2 object-cover"
          />
        </div>
      </div>
      {/* Accordion bileşeni */}
      <Accordion title="Detayları Göster">
        <p>Sefer detayları burada yer alabilir.</p>
        <p>Sefer detayları burada yer alabilir.</p>
        <p>Sefer detayları burada yer alabilir.</p>
        <p>Sefer detayları burada yer alabilir.</p>
        <p>Sefer detayları burada yer alabilir.</p>
        {/* Diğer detaylar */}
      </Accordion>
    </div>
  );
}

export default Card;
