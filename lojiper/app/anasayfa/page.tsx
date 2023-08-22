import Datepick from "@/components/Date";
import React from "react";
import { journey } from "@/data/journey";
import uniqueNames from "@/data/journey";
const page = () => {
  return (
    <div className="flex justify-center bg-slate-200 h-[100vh] w-screen">
      <div>
        <form action="" className="flex gap-8 ">
          <div className="flex flex-col items-center">
            <h2 className=" ml-2 text-2xl">Nereden</h2>

            <select
              id="underline_select"
              className="bg-gray-50 border text-center border-gray-300 text-gray-900 text-l rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 "
            >
              {journey.map((journey, index) => (
                <option value="" key={index}>
                  {journey.departure}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl mr-1">Nereye</h2>
            <select
              id="underline_select"
              className="bg-gray-50 border text-center border-gray-300 text-gray-900 text-l rounded-lg w-64 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 "
            >
              {uniqueNames.map((journey, index) => (
                <option value="" key={index}>
                  {journey.location}
                </option>
              ))}
            </select>
          </div>
          <div className=" mt-1 flex flex-col items-center">
            <h2 className="text-2xl">Tarih</h2>
            <Datepick />
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
