import React from "react";

export default function Title({ title, subtitle }) {
  return (
    <div className='mb-3 md:mb-10'>
      <h1 className='text-[#02295a] text-3xl font-bold'>{title}</h1>
      <p className='text-[#9699ab]'>{subtitle}</p>
    </div>
  );
}
