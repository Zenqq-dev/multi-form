import React from "react";
import { cn } from "../utils/utils";

export default function PlanItem({ name, price, freeMonths, active, yearly, onClick }) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "cursor-pointer p-4 rounded-md border-[#9699ab] border-[1px] w-[150px] hover:border-[#473dff] transition",
        active && "border-[#473dff] bg-[#fafbff]",
      )}>
      <div className='w-10 h-10 mb-10'>
        <img
          src={`../img/icon-${name.toLowerCase()}.svg`}
          alt=''
          className='w-full h-full'
        />
      </div>

      <p className='text-[#02295a] font-bold'>{name}</p>
      <p className='text-[#9699ab]'>
        +${yearly ? price * 10 : price}/{yearly ? "yr" : "mo"}
      </p>
      <p className={"text-[#02295a] "}>{yearly ? "2 months free" : ""}</p>
    </div>
  );
}
