 import React from "react";

 export const Button = ({
   isActive,
   variant = "primary",
   onClick,
   className = "",
   text,
   transparent,
   leftIcon,
   rightIcon,
   buttonType = "button",
 }) => {
   if (variant === "outlined") {
     return (
       <button
         className={`text-xs sm:text-sm lg:text-base ${
           isActive ?  'bg-blue-700 border-blue-700 text-white'  : "border-gray-300 text-gray-800"
         }  hover:bg-blue-600 hover:text-white 
         py-2 px-3 sm:py-3 sm:px-6 lg:py-3 lg:px-8 
         flex items-center justify-center gap-2 font-medium border hover:border-transparent 
         rounded-full transition-all duration-300 text-center ${className}`}
         onClick={onClick}
         type={buttonType && 'button'}
       >
         {leftIcon && <span className="h-4 w-4 sm:h-5 sm:w-5">{leftIcon}</span>}
         <span className="break-words">{text}</span>
         {rightIcon && <span className="h-4 w-4 sm:h-5 sm:w-5">{rightIcon}</span>}
       </button>
     );
   }


   return (
     <button
       className={`text-[12px] ${
         transparent
           ? "bg-transparent text-gray-800 border-gray-300"
           : "bg-blue-700 text-white"
       } hover:bg-blue-600 hover:text-white 
border-blue-700
        px-4 py-3 sm:px-6 lg:py-3 lg:px-8 
       flex items-center justify-center gap-1 font-medium rounded-full 
       transition-all duration-300 text-center ${className}`}
       onClick={onClick}
       type={buttonType && 'button'}
     >
       {leftIcon && <span className="h-4 w-4 sm:h-5 sm:w-5">{leftIcon}</span>}
       <span className="break-words">{text}</span>
       {rightIcon && <span className="h-4 w-4 sm:h-5 sm:w-5">{rightIcon}</span>}
     </button>
   );
 };

export default Button