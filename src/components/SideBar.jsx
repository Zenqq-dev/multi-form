import React, { useContext } from "react";
import StepContext from "./context/stepsContext/StepContext";
import Link from "./UI/Link";

export default function SideBar() {
  const { step, activeStep, setActiveStep } = useContext(StepContext);

  const handleLink = (stepId) => {
    setActiveStep(stepId);
  };

  return (
    <div className='relative md:max-w-[350px] md:max-h-[900px] h-full w-full'>
      <div className='h-full'>
        <img
          className=''
          src='../img/bg-sidebar-desktop.svg'
          alt=''
        />
      </div>
      <div className='absolute top-10 left-10'>
        {step.map((s, i) => {
          return (
            <Link
              key={s.id}
              name={s.name}
              number={i + 1}
              active={activeStep == i ? true : false}
              onClick={() => handleLink(s.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
