"use client";
import React, { useState, ReactNode } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded mt-4">
      <button
        onClick={toggleAccordion}
        className="bg-gray-200 w-full text-left py-4 px-4 cursor-pointer hover:bg-gray-300"
      >
        {title}
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

export default Accordion;
