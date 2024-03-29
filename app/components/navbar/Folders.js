"use client"
import React, { useEffect, useState } from 'react';

const Folders = (props) => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <div className='font-semibold'>
            <button
                className={`flex items-center w-full justify-between  py-2 px-4 hover:bg-gray-100 rounded ${dropdown && 'bg-gray-200 hover:bg-gray-200'}`}
                onClick={() => setDropdown(!dropdown)}
            >
                <div className='flex gap-1'>
                    <img className='w-5' src="/folder.png" alt="folder" />
                    <span>{props.folderName}</span>
                </div>
                <div className='flex items-center'>
                    <img className={`w-4 ${dropdown && 'rotate-180'}`} src="/down.png" alt="" />
                </div>
            </button>
            {dropdown && (
                <div className='ml-6 pl-6 border-l '>
                    {props.arr.map((e, index) => (
                        <p key={index} className='py-2 hover:bg-gray-100 cursor-pointer'>{e}</p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Folders;
