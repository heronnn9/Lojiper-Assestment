"use client";
import React, { useState } from "react";
import data from "@/data/journey.json";
import Card from "@/components/Card";
import Loading from "@/components/Loading";
import Datepick from "@/components/Datepick";
function BusSearch() {
  const [location, setLocation] = useState("");
  const [departure, setDeparture] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const savedUser =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null;

  console.log(savedUser);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      const filtered = data.filter(
        (sefer) =>
          sefer.location.includes(location) &&
          sefer.departure.includes(departure)
      );
      setResults(filtered);
      setLoading(false);
    }, 2000);
  };
  const uniqueLocations = data.reduce((acc, sefer) => {
    if (!acc.includes(sefer.location)) {
      acc.push(sefer.location);
    }
    return acc;
  }, []);

  const uniqueDepartures = data.reduce((acc, sefer) => {
    if (!acc.includes(sefer.departure)) {
      acc.push(sefer.departure);
    }
    return acc;
  }, []);

  return (
    <div className="flex flex-col items-center   bg-slate-300  h-max-content min-h-screen">
      {loading && <Loading />}
      <div className="w-72  border-slate-200 border-8 mt-2 flex flex-col items-center shadow-xl bg-slate-200">
        <div>
          <label
            htmlFor="location"
            className="block text-lg font-bold text-gray-700"
          >
            Kalkış Noktası
          </label>
          <select
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 block w-64 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 text-gray-600"
          >
            <option value="">Konum Seçin</option>
            {uniqueLocations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="departure"
            className="block text-lg font-bold  text-gray-700"
          >
            Varış Noktası
          </label>
          <select
            id="departure"
            onChange={(e) => setDeparture(e.target.value)}
            className="mt-1 block w-64 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 text-gray-600"
          >
            <option value="">Varış Yeri Seçin</option>
            {uniqueDepartures.map((departure) => (
              <option key={departure} value={departure}>
                {departure}
              </option>
            ))}
          </select>

          <div>
            <label
              htmlFor="departure"
              className="block text-lg font-bold p-2 text-gray-700"
            >
              Yolculuk Tarihi
            </label>
            <Datepick />
          </div>
          <button
            className="w-full px-4 py-2 mt-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md   focus:outline-none  "
            onClick={handleSearch}
          >
            Otobüs Bileti Bul
          </button>
        </div>
      </div>

      <div>
        <ul>
          {results.map((sefer) => (
            <Card key={sefer.id} sefer={sefer} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BusSearch;
