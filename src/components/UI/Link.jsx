import React from "react";
import { cn } from "../../utils/utils";

export default function Link({ name, number, active, onClick }) {
  if (!name) return "";
  return (
    <div
      className='flex uppercase items-center cursor-pointer mb-5'
      onClick={onClick}>
      <div
        className={cn(
          "flex justify-center items-center border-[1px] border-white rounded-full w-6 h-6 mr-5 text-white",
          active && "text-black bg-[#bfe2fd]",
        )}>
        {number}
      </div>
      <div>
        <p className='text-xs text-[#9699ab]'>step {number}</p>
        <p className='text-white font-bold'>{name ? name : ""}</p>
      </div>
    </div>
  );
}
