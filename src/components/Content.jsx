import React, { useContext } from "react";
import StepContext from "./context/stepsContext/StepContext";
import Personal from "./Personal";
import Title from "./UI/Title";
import Button from "./UI/Button";
import { cn } from "../utils/utils";
import Plan from "./Plan";
import AddOn from "./AddOn";
import Summary from "./Summary";

export default function Content() {
  const { step, activeStep } = useContext(StepContext);
  const activeItem = step[activeStep];
  const contentLoadout = () => {
    switch (step[activeStep].id) {
      case 0:
        return (
          <div>
            <Personal />
          </div>
        );
      case 1:
        return (
          <div>
            <Plan />
          </div>
        );
      case 2:
        return (
          <div>
            <AddOn />
          </div>
        );
      case 3:
        return (
          <div>
            <Summary />
          </div>
        );

      default:
        return <></>;
    }
  };

  const logoLoad = () => {
    return (
      <div className='flex justify-center items-center'>
        <img
          className='h-[65%] w-[65%]'
          src='../img/icon-thank-you.svg'
          alt=''
        />
      </div>
    );
  };

  return (
    <div className={cn("mt-10 flex flex-col w-[56%] relative", activeStep === 4 && "text-center")}>
      {activeStep === 4 ? logoLoad() : ""}
      <Title
        title={activeItem.title}
        subtitle={activeItem.subtitle}
      />
      {contentLoadout()}
      <div className='flex w-full h-[100px] items-end justify-end absolute bottom-0'>
        <div className={cn("flex w-full justify-between items-center", activeStep === 0 && "justify-end")}>
          {activeStep < 4 ? activeStep > 0 ? <Button /> : "" : ""}

          {activeStep < 4 ? activeStep < 3 ? <Button next /> : <Button confirm /> : ""}
        </div>
      </div>
    </div>
  );
}
