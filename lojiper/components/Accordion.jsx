"use client";
import { useState } from "react";

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded mt-4">
      <button
        onClick={toggleAccordion}
        className="bg-gray-200 w-full text-left py-2 px-4 cursor-pointer  hover:bg-gray-300"
      >
        {title}
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
}

export default Accordion;
