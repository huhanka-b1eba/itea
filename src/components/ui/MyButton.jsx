import React from 'react';

const MyButton = ({ children, className, ...props }) => {
    return (
        <button
            className={`w-fit text-nowrap cursor-pointer text-[16px] flex items-center gap-[12px] 
            px-[20px] py-[16px] sm:px-[24px] sm:py-[18px] border-2 border-white uppercase
            hover:bg-white hover:text-black
            transition-all duration-300 ease-out
            hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]
            active:scale-95
            ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default MyButton;
