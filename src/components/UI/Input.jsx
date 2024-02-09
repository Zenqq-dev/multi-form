import React from "react";

export default function Input({ label, placeholder, type, value, handleChange }) {
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (type === "tel") {
      const numericValue = inputValue.replace(/\D/g, "");
      const truncatedValue = numericValue.slice(0, 12);
      handleChange(truncatedValue);
    } else {
      handleChange(inputValue);
    }
  };

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
        className='rounded-md border-[#9699ab] border-[1px] p-2 focus:border-[#473dff] outline-none font-medium'
        inputMode={type === "tel" ? "numeric" : "text"}
        pattern={type === "tel" ? "[0-9]{3}\\s[0-9]{3}\\s[0-9]{4}" : ""}
        maxLength={type === "tel" ? "12" : ""}
        value={value}
        onChange={type === "tel" ? handleInputChange : handleChange}
      />
    </div>
  );
}
