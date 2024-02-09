import React, { useContext } from "react";

import Input from "./UI/Input";
import StepContext from "./context/stepsContext/StepContext";

export default function Personal() {
  const { name, setName, phone, setPhone, email, setEmail } = useContext(StepContext);
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePhone = (phoneNumber) => {
    setPhone(phoneNumber);
  };
  return (
    <div className=''>
      <Input
        label={"Name"}
        placeholder={"e.g. Stephen King"}
        value={name}
        handleChange={handleChangeName}
      />
      <Input
        label={"Email Address"}
        placeholder={"e.g. stephenking@lorem.com"}
        type={"email"}
        value={email}
        handleChange={handleChangeEmail}
      />
      <Input
        label={"Phone Number"}
        placeholder={"e.g. +1 234 567 890"}
        type={"tel"}
        value={phone}
        handleChange={handleChangePhone}
      />
    </div>
  );
}
