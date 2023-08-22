import Datepick from "@/components/Date";
import React from "react";
import Card from "@/components/Card";

const page = () => {
  return (
    <div className="flex justify-between bg-slate-200 h-screen w-screen">
      {/* Seferler */}
      <div className=" m-4">
        <Card />
      </div>
      {/* Tarih */}
      <div></div>
    </div>
  );
};

export default page;
