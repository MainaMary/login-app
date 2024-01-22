import React from "react";
interface LabelProps {
  children: string;
}
export default function Label({ children }: LabelProps) {
  return (
    <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">
      {children}
    </label>
  );
}
