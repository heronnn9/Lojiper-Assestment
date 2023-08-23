"use client";
import React, { useState } from "react";
import data from "@/data/journey.json";
import Card from "@/components/Card";

function BusSearch() {
  const [location, setLocation] = useState("");
  const [departure, setDeparture] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filtered = data.filter(
      (sefer) =>
        sefer.location.includes(location) && sefer.departure.includes(departure)
    );
    setResults(filtered);
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
    <div className="flex flex-col  items-center bg-slate-300  h-max-content min-h-screen">
      <div>
        <label
          htmlFor="location"
          className="block text-lg font-bold text-gray-700"
        >
          Konum
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
          Varış Yeri
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
      </div>

      <button onClick={handleSearch}>Ara</button>

      <ul>
        {results.map((sefer) => (
          <Card key={sefer.id} sefer={sefer} />
        ))}
      </ul>
    </div>
  );
}

export default BusSearch;
