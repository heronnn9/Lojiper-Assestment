"use client";
import React, { useState } from "react";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const App = () => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div>
      <DatePicker
        className="rounded flex text-center h-9 bg-white border shadow-md w-64"
        selected={date}
        onChange={(date: Date | [Date, Date] | null) => {
          if (date && !(date instanceof Array)) {
            setDate(date);
          }
        }}
      />
    </div>
  );
};

export default App;
