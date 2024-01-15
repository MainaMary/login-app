import React from "react";
interface BtnProps {
  children: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
}

export default function Button({ children, type, onClick }: BtnProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="group relative w-full flex justify-center text-base py-3 px-4 border border-transparent font-semibold rounded-full text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {children}
    </button>
  );
}
