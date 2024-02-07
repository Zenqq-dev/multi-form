import React, { useContext } from "react";
import StepContext from "./context/stepsContext/StepContext";
import { cn } from "../utils/utils";

export default function Summary() {
  const { activePlan, plans, activeAddOns, yearly, setActiveStep } = useContext(StepContext);
  const summaryInfo = plans[activePlan];
  const fullPrice = () => {
    if (activeAddOns) {
      let price = 0;
      if (activeAddOns && Array.isArray(activeAddOns)) {
        for (let i = 0; i < activeAddOns.length; i++) {
          price = price + activeAddOns[i].price;
        }
      }
      return price;
    }
  };

  let summaryPrice = fullPrice() + (summaryInfo ? summaryInfo.price : 0);

  if (summaryInfo) {
    return (
      <div>
        <div className='bg-[#fafbff] p-3'>
          <div className={cn("flex justify-between", activeAddOns.length > 0 && "mb-4 pb-4 border-b")}>
            <div className=''>
              <div className='text-[#02295a] font-medium'>
                {summaryInfo.name} ({yearly ? "Yearly" : "Monthly"})
              </div>
              <button
                onClick={() => setActiveStep(1)}
                className='text-[#9699ab] underline'>
                Change
              </button>
            </div>
            <div className='text-[#02295a] font-bold'>
              ${summaryInfo && yearly ? summaryInfo.price * 10 : summaryInfo.price}/{yearly ? "yr" : "mo"}
            </div>
          </div>
          {activeAddOns &&
            activeAddOns.map((i) => {
              return (
                <div
                  className='flex justify-between mb-2'
                  key={i.id}>
                  <div className='text-[#9699ab]'>{i.title}</div>
                  <div className='text-[#02295a]'>
                    +${yearly ? i.price * 10 : i.price}/{yearly ? "yr" : "mo"}
                  </div>
                </div>
              );
            })}
        </div>
        <div className='flex justify-between px-3 mt-6'>
          <div className='text-[#9699ab]'>Total (per {yearly ? "year" : "month"})</div>
          <div className='text-[#473dff] font-bold'>
            +${summaryPrice ? summaryPrice : ""}/{yearly ? "yr" : "mo"}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <button
        onClick={() => setActiveStep(1)}
        className='text-[#02295a] underline'>
        Choose the plan
      </button>
    );
  }
}
