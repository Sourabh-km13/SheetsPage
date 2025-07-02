import React from "react";

interface Button1Props {
    children: React.ReactNode;

}

const Button2: React.FC<Button1Props> = ({ children }) => {
    return (
        <button className="flex items-center gap-1 text-sm border-[#eeeeee] border px-3 py-2 rounded-md  hover:text-black"
            onClick={(e) => {
                console.log(e.currentTarget.textContent);
            }}
        >
            {children}
        </button>
    );
};

export default Button2;