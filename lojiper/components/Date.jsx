"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function App() {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <DatePicker
        className="rounded flex text-center h-10 bg-slate-700"
        selected={date}
        onChange={(date) => setDate(date)}
      />
    </div>
  );
}
