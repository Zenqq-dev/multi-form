import React from "react";

export default function Input({ label, placeholder, type, value, handleChange }) {
  return (
    <div className='flex flex-col text-[#02295a] mb-8'>
      <label
        className='font-thin pb-1'
        htmlFor=''>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required
        className='rounded-md border-[#9699ab] border-[1px] p-2 focus:border-[#473dff] outline-none  font-medium'
        inputMode={"numeric"}
        pattern={type === "tel" ? "[0-9]{3} [0-9]{3} [0-9]{4}" : ""}
        maxLength={type === "tel" ? "16" : ""}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
