import { createContext } from "react";

export default createContext({
  step: [],
  activeStep: 0,
  setActiveStep: () => {},
  plans: [],
  addOns: [],
  activePlan: Number,
  setActivePlan: () => {},
  activeAddOns: [],
  setActiveAddOns: () => {},
  name: String,
  phone: String,
  email: String,
  setName: () => {},
  setPhone: () => {},
  setEmail: () => {},
});
