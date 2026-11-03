import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Test = () => {

  const [value, setValue] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#6366f1] to-[#a855f7] font-montserrat">
      <div className="w-full max-w-[380px] bg-white/95 backdrop-blur-[10px] p-[32px] rounded-[20px] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] text-center">
        
        <h1 className="font-extrabold text-[28px] tracking-[-0.5px] text-[#1e293b] mb-[24px]">
          Count Value: {value}
        </h1>

        <div className="flex gap-[12px] mb-[24px]">
          <button onClick={() => setValue(value - 1)} className="flex-1 p-[12px] bg-[#f43f5e] text-white border-none rounded-[10px] font-semibold text-[15.2px] cursor-pointer shadow-[0_4px_12px_rgba(244,63,94,0.3)] transition-all duration-300 hover:bg-[#e11d48] active:scale-[0.97]">
            Decrement
          </button>
          <button onClick={() => setValue(value + 1)} className="flex-1 p-[12px] bg-[#10b981] text-white border-none rounded-[10px] font-semibold text-[15.2px] cursor-pointer shadow-[0_4px_12px_rgba(16,185,129,0.3)] transition-all duration-300 hover:bg-[#059669] active:scale-[0.97]">
            Increment
          </button>
        </div>

        <div className="relative flex items-center">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter Your Password..."
            className="w-full py-[12px] pr-[42px] pl-[14px] rounded-[10px] border-2 border-[#e2e8f0] outline-none text-[15.2px] bg-[#f8fafc] text-[#334155] transition-all duration-300 focus:border-[#6366f1] focus:ring-[3px] focus:ring-[#6366f1]/15"
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-[14px] bg-transparent border-none cursor-pointer text-[#64748b] text-[17.6px] flex items-center p-0 transition-all duration-300 hover:text-[#1e293b]">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;