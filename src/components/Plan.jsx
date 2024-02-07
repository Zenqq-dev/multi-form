import React, { useContext } from "react";
import PlanItem from "./PlanItem";
import StepContext from "./context/stepsContext/StepContext";
import { Switch } from "@headlessui/react";
import { cn } from "../utils/utils";

export default function Plan() {
  const { plans, activePlan, setActivePlan } = useContext(StepContext);
  const { yearly, toggleYearly } = useContext(StepContext);

  return (
    <div className=''>
      <div className=' flex  justify-between'>
        {plans.map((p, i) => {
          return (
            <PlanItem
              name={p.name}
              price={p.price}
              yearly={yearly}
              active={activePlan === i}
              key={i}
              onClick={() => setActivePlan(i)}
            />
          );
        })}
      </div>

      <div className='flex justify-center items-center w-full bg-[#fafbff] p-4 mt-6'>
        <p className={cn("font-bold text-[#9699ab] pr-3", !yearly && "text-[#02295a]")}>Monthly</p>
        <Switch
          checked={yearly}
          onChange={toggleYearly}
          className={`
          bg-[#02295a] relative inline-flex h-[19x] w-[35px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75 px-[2px] py-[2px]`}>
          <span className='sr-only'>mounthly or yearly plan</span>
          <span
            aria-hidden='true'
            className={`${yearly ? "translate-x-4" : "translate-x-0"}
            pointer-events-none inline-block h-[12px] w-[12px]
             transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
        <p className={cn("font-bold text-[#9699ab] pl-3", yearly && "text-[#02295a]")}>Yearly</p>
      </div>
    </div>
  );
}
