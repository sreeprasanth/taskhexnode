import React from "react";

const Button = ({ children, className = "", onClick, type = "button" }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={` px-[26px] py-[10px] font-medium  rounded-[3px]  text-white  hover:bg-[#bb022a] hover:text-[#fff]  ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
