"use client"
import React, { useState } from 'react';
import Dropdown from 'react-dropdown';

const Footer = () => {
  const More = [''];
  const defaultMore = More[0];
  const [selectedMore, setSelectedMore] = useState(defaultMore);
  const handleMore = (option) => {
    setSelectedMore(option.value);
};
  return (
    <div className='border rounded-lg px-2 py-1'>
      <div className='flex gap-4 items-center'>
        <span className='rounded-lg py-1 px-2 text-white bg-black'>7</span>
        <span>Selected</span>
        <button className='flex gap-1 items-center rounded-lg  border px-2 py-1'>
          <img className='w-5' src="/filters.png" alt="" />
          <span className='font-bold'>Archive</span>
        </button>
        <button className='flex gap-1 items-center rounded-lg  border px-2 py-1'>
          <img className='w-5' src="/filters.png" alt="" />
          <span className='text-red-800 font-bold'>Delete</span>
        </button>
        <Dropdown
          options={More}
          onChange={handleMore}
          value={selectedMore}
          placeholder="More"
        />
        <span>x</span>
      </div>
    </div>
  )
}

export default Footer
