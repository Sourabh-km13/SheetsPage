import React from "react";

interface Button1Props {
  children: React.ReactNode;
  
}

const Button1: React.FC<Button1Props> = ({ children }) => {
  return (
    <button
      onClick={(e) => {
        console.log(e.currentTarget.textContent);
      }}
      className="flex items-center gap-1 px-3 py-1 text-sm rounded bg-gray-100 hover:bg-gray-200 transition"
    >
      {children}
    </button>
  );
};

export default Button1;