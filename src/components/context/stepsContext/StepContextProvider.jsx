import React, { useState } from "react";
import StepContext from "./StepContext";

export default function StepContextProvider({ children }) {
  const step = [
    {
      id: 0,
      name: "your info",
      title: "Personal Info",
      subtitle: "Please provide your name, email address, phone number.",
    },
    {
      id: 1,
      name: "select plan",
      title: "Select your plan",
      subtitle: "You have the option of monthly or yearly billing.",
    },
    { id: 2, name: "add-ons", title: "Pick add-ons", subtitle: "Add-ons help enhance your gaming experience." },
    { id: 3, name: "summary", title: "Finishing up", subtitle: "Double-check everything looks OK before confirming" },
    {
      id: 4,
      title: "Thank you",
      subtitle:
        "Thank for confirming your subsciption! We hope you have fun using our platform. If you ever need supportm please feel free to email us at support@loremgaming.com",
    },
  ];
  const [activeStep, setActiveStep] = useState(0);
  const plans = [
    { name: "Arcade", price: 9 },
    { name: "Advanced", price: 12 },
    { name: "Pro", price: 15 },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const addOns = [
    { id: 0, title: "Online service", subtitle: "Access to multiplayer games", price: 1 },
    { id: 1, title: "Larger storage", subtitle: "Extra 1TB of cloud save", price: 2 },
    { id: 2, title: "Customizable profile", subtitle: "Custom theme on your profile", price: 2 },
  ];
  const [activeAddOns, setActiveAddOns] = useState([]);
  const [activePlan, setActivePlan] = useState();
  const [yearly, toggleYearly] = useState(false);
  return (
    <StepContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        step,
        activeStep,
        setActiveStep,
        plans,
        activePlan,
        setActivePlan,
        yearly,
        toggleYearly,
        addOns,
        activeAddOns,
        setActiveAddOns,
      }}>
      {children}
    </StepContext.Provider>
  );
}
