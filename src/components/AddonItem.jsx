import React, { useContext, useState } from "react";
import { cn } from "../utils/utils";
import StepContext from "./context/stepsContext/StepContext";

export default function AddonItem({ title, subtitle, price, active, func }) {
  const { yearly } = useContext(StepContext);
  return (
    <div
      className={cn(
        "rounded-md border-[#9699ab] border-[1px] flex justify-between items-center px-4 py-3 mb-5",
        active && "border-[#473dff] bg-[#fafbff]",
      )}>
      <div className='flex justify-center items-center'>
        <input
          type='checkbox'
          name=''
          id=''
          className='w-4 h-4 text-sm checked:accent-[#473dff] mr-4'
          onChange={func}
          checked={active}
        />

        <div className='flex flex-col'>
          <p className='text-[#02295a] font-bold'>{title}</p>
          <p className='text-[#9699ab]'>{subtitle}</p>
        </div>
      </div>
      <div className='text-[#473dff]'>
        +${yearly ? price * 10 : price}/{yearly ? "yr" : "mo"}
      </div>
    </div>
  );
}
