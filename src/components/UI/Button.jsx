import React, { useContext } from "react";
import { cn } from "../../utils/utils";
import StepContext from "../context/stepsContext/StepContext";

export default function Button({ next, confirm }) {
  const { step, activeStep, setActiveStep } = useContext(StepContext);
  const nextStep = () => {
    if (activeStep < 4) {
      setActiveStep(activeStep + 1);
    }
  };
  const backStep = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <button
      className={cn(
        "font-medium transition",
        next || confirm
          ? "rounded-md bg-[#02295a] text-[#f0f6ff] py-2 px-4 hover:bg-[#0b458b]"
          : "text-[#9699ab] hover:text-[#02295a]",
      )}
      onClick={next || confirm ? nextStep : backStep}>
      {!confirm ? (next ? "Next Step" : "Go Back") : "Confirm"}
    </button>
  );
}
