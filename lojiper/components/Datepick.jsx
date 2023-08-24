"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function App() {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <DatePicker
        className="rounded flex text-center h-9 bg-white border shadow-md w-64"
        selected={date}
        onChange={(date) => setDate(date)}
      />
    </div>
  );
}
